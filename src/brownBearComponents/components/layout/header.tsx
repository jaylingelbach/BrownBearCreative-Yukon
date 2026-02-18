'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
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
import { usePathname } from 'next/navigation';
import type { HeaderProps } from '@/src/lib/types';
import { isActivePath } from '@/src/lib/navigation';
import { useAccessibleDropdownMenu } from '@/src/hooks/useAccessibleDropdownMenu';
import { NavTrigger } from '@/src/brownBearComponents/components/layout/NavTrigger';
import { useEffect, useState } from 'react';

/**
 * Renders the site header including a top identity bar and a primary navigation bar with optional accessible dropdown menus.
 *
 * Mobile behavior:
 * - The hamburger menu uses a `Sheet` (shadcn/ui).
 * - Clicking any menu item closes the sheet via `SheetClose asChild`.
 * - If the route changes (pathname update), we also close the sheet as a fallback.
 *
 * Desktop behavior:
 * - Optional accessible dropdown menus.
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
   * `SheetClose` will also close it when clicked, but controlling state ensures:
   * - route-change fallback closes it
   * - any custom handlers can close it reliably
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

  const mobileCta = primaryCta ?? { label: 'Call', href: phone.href };

  // Fallback: if navigation happens by any means, ensure the sheet is closed.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
      <div className={`md:hidden ${theme.mobileBar ?? theme.navContainer}`}>
        <div className="flex items-center gap-2" />

        <div className="flex items-center gap-2">
          {/* CTA should also close the sheet if it happens to be open */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetClose asChild>
              <Link
                href={mobileCta.href}
                aria-label={mobileCta.ariaLabel ?? mobileCta.label}
                className={theme.mobileCtaButton ?? ''}
              >
                {mobileCta.label}
              </Link>
            </SheetClose>

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
                  {links.map((item) => {
                    const isActive = item.href
                      ? isActivePath(pathname, item.href)
                      : false;

                    const hasChildren =
                      enableDropdowns &&
                      Array.isArray(item.children) &&
                      item.children.length > 0;

                    if (hasChildren) {
                      const triggerClass = theme.mobileAccordionTrigger ?? '';
                      const childClass = theme.mobileChildItem ?? '';
                      const childActiveClass =
                        theme.mobileChildItemActive ?? '';

                      return (
                        <li key={item.label}>
                          <Accordion type="single" collapsible>
                            <AccordionItem value={item.label}>
                              <AccordionTrigger className={triggerClass}>
                                {item.label}
                              </AccordionTrigger>

                              <AccordionContent
                                className={theme.mobileAccordionContent ?? ''}
                              >
                                <div className="space-y-1">
                                  {/* Optional parent page link (ONLY if this tier provides it) */}
                                  {item.href ? (
                                    <SheetClose asChild>
                                      <Link
                                        href={item.href}
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
                          </Accordion>
                        </li>
                      );
                    }

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
              const hasDropdown =
                enableDropdowns && item.children && item.children.length > 0;

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

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${theme.navLink} ${
                    isActivePath(pathname, item.href) ? theme.navLinkActive : ''
                  }`}
                  aria-current={
                    isActivePath(pathname, item.href) ? 'page' : undefined
                  }
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
