'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { HeaderProps } from '@/src/lib/types';
import { isActivePath } from '@/src/lib/navigation';
import { useAccessibleDropdownMenu } from '@/src/hooks/useAccessibleDropdownMenu';
import { NavTrigger } from '@/src/components/layout/NavTrigger';

/**
 * Renders the site header including a top identity bar and a primary navigation bar with optional accessible dropdown menus.
 *
 * @param logo - Visual/logo node shown in the top-left Home link
 * @param phone - Object with `href` and `label` for the phone call link in the top-right
 * @param links - Array of navigation items; items may include `href`, `label`, and optional `children` for dropdowns
 * @param enableDropdowns - When true, items with `children` render as accessible dropdown menus (default: `false`)
 * @param theme - Object of CSS class names used to style the header and navigation elements
 * @returns The header JSX element to be rendered at the top of the page
 */
export function Header({
  logo,
  phone,
  links,
  enableDropdowns = false,
  theme
}: HeaderProps) {
  const pathname = usePathname();

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

      {/* ───────────────── Main navigation bar ───────────────── */}
      <nav
        className={`relative w-full px-4 sm:px-6 lg:px-10 h-16 flex items-center ${theme.navContainer}`}
        aria-label="Primary"
      >
        {/* left spacer */}
        <div className="w-40 hidden md:block" />

        {/* centered nav items */}
        <div className="flex-1 flex justify-center">
          <div
            className={[
              // keeps nav from going crazy-wide
              'w-full max-w-5xl',
              // distributes items across the bar
              'flex items-center justify-between',
              // gives a little breathing room on small screens
              'px-2 sm:px-6',
              theme.navGap
            ].join(' ')}
          >
            {links.map((item) => {
              const hasDropdown =
                enableDropdowns && item.children && item.children.length > 0;

              /* ───── Dropdown item ───── */
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

                    {/* hover / focus bridge */}
                    <div className="absolute left-0 top-full h-2 w-full" />

                    {/* dropdown menu */}
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

              /* ───── Normal link ───── */

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
                    item.href && isActivePath(pathname, item.href)
                      ? 'page'
                      : undefined
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