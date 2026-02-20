'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { HeaderProps, NavItem } from '@/src/lib/types';
import { isActivePath } from '@/src/lib/navigation';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/src/components/ui/sheet';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/src/components/ui/accordion';

import { useAccessibleDropdownMenu } from '@/src/hooks/useAccessibleDropdownMenu';
import { NavTrigger } from '@/src/brownBearComponents/components/layout/NavTrigger';

/**
 * Renders the site header including a top identity bar and a primary navigation bar with optional accessible dropdown menus.
 *
 * Mobile behavior:
 * - The hamburger menu uses a `Sheet` (shadcn/ui).
 * - Clicking any menu item closes the sheet via `SheetClose asChild`.
 * - Mobile can always render accordion groups when `item.children` exist, even if desktop dropdowns are disabled.
 * - Accordion is single-open across all groups (one Accordion wrapping all AccordionItem groups).
 * - We avoid "close on route change" effects to prevent cascading render lint warnings.
 *
 * Desktop behavior:
 * - Dropdown UI is gated by `enableDropdowns`.
 * - Clicking a dropdown child closes the dropdown.
 *
 * @param logo - Visual/logo node shown in the top-left Home link
 * @param phone - Object with `href` and `label` for the phone call link in the top-right
 * @param links - Array of navigation items; items may include `href`, `label`, and optional `children` for dropdowns
 * @param enableDropdowns - When true, items with `children` render as accessible dropdown menus (default: `false`)
 * @param theme - Object of CSS class names used to style the header and navigation elements
 * @param primaryCta - Optional override for the persistent CTA (e.g. Get a Quote). Defaults to Call / phone href.
 * @returns The header JSX element to be rendered at the top of the page
 */
export function Header({
  logo,
  phone,
  links,
  enableDropdowns = false,
  theme,
  primaryCta
}: HeaderProps) {
  const pathname = usePathname();

  /**
   * Controls the shadcn Sheet open state so we can programmatically close it.
   * `SheetClose` will close it when clicked.
   */
  const [mobileOpen, setMobileOpen] = useState(false);

  const {
    openDropdown,
    setOpenDropdown,
    buttonRefs,
    firstItemRefs,
    menuItemRefs,
    focusFirstItem,
    focusMenuItem,
    focusButton
  } = useAccessibleDropdownMenu();

  // Close the mobile sheet if the viewport widens past the md breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const mobileCta = primaryCta ?? { label: 'Call', href: phone.href };

  // Split links into:
  // - items with children (accordion groups on mobile)
  // - items without children (plain links/spans on mobile)
  const itemsWithChildren: NavItem[] = [];
  const itemsWithoutChildren: NavItem[] = [];

  for (const item of links) {
    const hasChildren =
      Array.isArray(item.children) && item.children.length > 0;
    if (hasChildren) itemsWithChildren.push(item);
    else itemsWithoutChildren.push(item);
  }

  return (
    <header className="w-full">
      {/* ───────────────── Top identity bar ───────────────── */}
      <div
        className={`w-full px-6 h-20 flex items-center justify-between ${theme.topbarContainer}`}
      >
        <Link href="/" className={theme.topbarText} aria-label="Home">
          {logo}
        </Link>

        <Link
          href={phone.href}
          className={theme.topbarPhone}
          aria-label={`Call ${phone.label}`}
        >
          {phone.label}
        </Link>
      </div>

      {/* ───────────────── Mobile nav bar ───────────────── */}
      <div
        className={`md:hidden flex items-center justify-end ${theme.mobileBar ?? theme.navContainer}`}
      >
        <div className="flex items-center gap-2">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            {/* CTA: if sheet is open and user taps CTA, close it */}
            <Link
              href={mobileCta.href}
              aria-label={mobileCta.ariaLabel ?? mobileCta.label}
              className={theme.mobileCtaButton ?? ''}
              onClick={() => setMobileOpen(false)}
            >
              {mobileCta.label}
            </Link>

            <SheetTrigger
              className={theme.mobileMenuButton ?? ''}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" aria-hidden={true} />
            </SheetTrigger>

            <SheetContent side="right" className={theme.mobileSheet ?? ''}>
              <SheetHeader className={theme.mobileSheetHeader ?? ''}>
                <SheetTitle className={theme.mobileSheetTitle ?? ''}>
                  Menu
                </SheetTitle>
              </SheetHeader>

              <nav
                aria-label="Mobile primary"
                className={theme.mobileNavList ?? ''}
              >
                <ul className="space-y-1">
                  {/* Plain items (no children) */}
                  {itemsWithoutChildren.map((item) => {
                    const isActive = item.href
                      ? isActivePath(pathname, item.href)
                      : false;

                    const itemClass = theme.mobileNavItem ?? '';
                    const itemActiveClass = theme.mobileNavItemActive ?? '';

                    if (!item.href) {
                      return (
                        <li key={item.label}>
                          <span className={itemClass}>{item.label}</span>
                        </li>
                      );
                    }

                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <Link
                            href={item.href}
                            className={`${itemClass} ${
                              isActive ? itemActiveClass : ''
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      </li>
                    );
                  })}

                  {/* Accordion groups (has children) */}
                  {itemsWithChildren.length > 0 ? (
                    <li>
                      <Accordion type="single" collapsible>
                        {itemsWithChildren.map((item) => {
                          const isActive = item.href
                            ? isActivePath(pathname, item.href)
                            : false;

                          const triggerClass =
                            theme.mobileAccordionTrigger ?? '';
                          const childClass = theme.mobileChildItem ?? '';
                          const childActiveClass =
                            theme.mobileChildItemActive ?? '';

                          // Your rule:
                          // - On Growth/Managed, we do NOT want "All Services" in mobile.
                          // - We treat "enableDropdowns === true" as "this tier uses dropdowns".
                          // - So we only show the parent link in mobile when dropdowns are NOT enabled.
                          const showParentLinkInMobile =
                            Boolean(item.href) && enableDropdowns === false;

                          return (
                            <AccordionItem key={item.label} value={item.label}>
                              <AccordionTrigger className={triggerClass}>
                                {item.label}
                              </AccordionTrigger>

                              <AccordionContent
                                className={theme.mobileAccordionContent ?? ''}
                              >
                                <div className="space-y-1">
                                  {showParentLinkInMobile ? (
                                    <SheetClose asChild>
                                      <Link
                                        href={item.href!}
                                        className={`${childClass} ${
                                          isActive ? childActiveClass : ''
                                        }`}
                                        aria-current={
                                          isActive ? 'page' : undefined
                                        }
                                      >
                                        All {item.label}
                                      </Link>
                                    </SheetClose>
                                  ) : null}

                                  {item.children!.map((child) => {
                                    const childActive = isActivePath(
                                      pathname,
                                      child.href
                                    );

                                    return (
                                      <SheetClose asChild key={child.href}>
                                        <Link
                                          href={child.href}
                                          className={`${childClass} ${
                                            childActive ? childActiveClass : ''
                                          }`}
                                          aria-current={
                                            childActive ? 'page' : undefined
                                          }
                                        >
                                          {child.label}
                                        </Link>
                                      </SheetClose>
                                    );
                                  })}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    </li>
                  ) : null}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* ───────────────── Desktop nav bar ───────────────── */}
      <nav
        className={`relative w-full px-4 sm:px-6 lg:px-10 h-16 items-center ${theme.navContainer} hidden md:flex`}
        aria-label="Primary"
      >
        {/* left spacer */}
        <div className="w-40 hidden md:block" />

        {/* centered nav items */}
        <div className="flex-1 flex justify-center">
          <div
            className={[
              'w-full max-w-5xl',
              'flex items-center justify-between',
              'px-2 sm:px-6',
              theme.navGap
            ].join(' ')}
          >
            {links.map((item) => {
              const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

              // Desktop dropdown UI is gated by enableDropdowns
              const hasDropdown = enableDropdowns && hasChildren;

              if (hasDropdown) {
                const dropdownActive = item.children!.some((child) =>
                  isActivePath(pathname, child.href)
                );

                const dropdownId = `nav-${item.label
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')}-menu`;

                const isOpen = openDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onBlur={(event) => {
                      if (
                        !event.currentTarget.contains(
                          event.relatedTarget as Node | null
                        )
                      ) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <NavTrigger
                      ref={(node) => {
                        buttonRefs.current[item.label] = node;
                      }}
                      label={item.label}
                      isActive={dropdownActive}
                      isOpen={isOpen}
                      controls={dropdownId}
                      className={theme.navLink}
                      onClick={() => {
                        setOpenDropdown((current) =>
                          current === item.label ? null : item.label
                        );
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'ArrowDown') {
                          event.preventDefault();
                          setOpenDropdown(item.label);
                          focusFirstItem(item.label);
                        }

                        if (event.key === 'ArrowUp') {
                          event.preventDefault();
                          setOpenDropdown(item.label);
                          focusMenuItem(
                            item.label,
                            (menuItemRefs.current[item.label]?.length ?? 0) - 1
                          );
                        }

                        if (event.key === 'Home') {
                          event.preventDefault();
                          focusMenuItem(item.label, 0);
                        }

                        if (event.key === 'End') {
                          event.preventDefault();
                          focusMenuItem(item.label, links.length - 1);
                        }

                        if (event.key === 'Escape') {
                          event.preventDefault();
                          setOpenDropdown(null);
                          focusButton(item.label);
                        }
                      }}
                    />

                    <div className="absolute left-0 top-full h-2 w-full" />

                    <div
                      role="menu"
                      aria-label={item.label}
                      id={dropdownId}
                      className={`
                        absolute left-0 top-full z-50 mt-2
                        min-w-56 overflow-hidden rounded-md shadow-lg
                        ${theme.dropdown}
                        ${isOpen ? 'block' : 'hidden'}
                      `}
                      onKeyDown={(event) => {
                        const items = menuItemRefs.current[item.label] ?? [];
                        const activeIndex = items.indexOf(
                          document.activeElement as HTMLAnchorElement
                        );

                        if (event.key === 'Escape') {
                          event.preventDefault();
                          setOpenDropdown(null);
                          focusButton(item.label);
                        }

                        if (event.key === 'ArrowDown') {
                          event.preventDefault();
                          focusMenuItem(item.label, activeIndex + 1);
                        }

                        if (event.key === 'ArrowUp') {
                          event.preventDefault();
                          focusMenuItem(item.label, activeIndex - 1);
                        }
                      }}
                    >
                      {item.children!.map((child, index) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          className={`block w-full px-4 py-2 whitespace-nowrap ${theme.dropdownItem}`}
                          aria-current={
                            isActivePath(pathname, child.href)
                              ? 'page'
                              : undefined
                          }
                          ref={(node) => {
                            if (!menuItemRefs.current[item.label]) {
                              menuItemRefs.current[item.label] = [];
                            }
                            menuItemRefs.current[item.label][index] =
                              node ?? null;

                            if (index === 0) {
                              firstItemRefs.current[item.label] = node;
                            }
                          }}
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              if (!item.href) {
                return (
                  <span key={item.label} className={theme.navLink}>
                    {item.label}
                  </span>
                );
              }

              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${theme.navLink} ${
                    isActive ? theme.navLinkActive : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* right spacer */}
        <div className="w-40 hidden md:block" />
      </nav>
    </header>
  );
}
