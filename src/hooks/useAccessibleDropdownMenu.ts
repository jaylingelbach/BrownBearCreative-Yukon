'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * useAccessibleDropdownMenu
 *
 * Implements the WAI-ARIA "menu button" pattern:
 * - Keyboard navigation (Arrow keys, Enter, Escape)
 * - Focus management
 * - Screen reader semantics
 *
 * This hook does NOT render anything.
 * It only manages state + focus logic.
 */
export function useAccessibleDropdownMenu() {
  /**
   * Which dropdown is currently open.
   * null = none open
   */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /**
   * Refs to the menu button that opens each dropdown
   * Used to restore focus when a menu closes
   */
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /**
   * Ref to the first item in each dropdown
   * Used when opening a menu via keyboard
   */
  const firstItemRefs = useRef<Record<string, HTMLElement | null>>({});

  /**
   * Refs to ALL menu items in each dropdown
   * Used for ArrowUp / ArrowDown navigation
   */
  const menuItemRefs = useRef<Record<string, (HTMLElement | null)[]>>({});

  /**
   * Focus the first item in a menu
   *
   * requestAnimationFrame is critical:
   * - React state updates are async
   * - The menu does not exist in the DOM yet
   * - We wait one frame so focus works reliably
   */
  const focusFirstItem = useCallback((label: string) => {
    requestAnimationFrame(() => {
      firstItemRefs.current[label]?.focus();
    });
  }, []);

  /**
   * Focus a specific menu item by index
   *
   * Handles wrapping:
   * - ArrowDown on last item → first item
   * - ArrowUp on first item → last item
   */
  const focusMenuItem = useCallback((label: string, index: number) => {
    const items = menuItemRefs.current[label] ?? [];
    if (items.length === 0) return;

    const count = items.length;

    // Wrap index so it never goes out of bounds
    const targetIndex = ((index % count) + count) % count;

    requestAnimationFrame(() => {
      items[targetIndex]?.focus();
    });
  }, []);

  /**
   * Return focus to the menu button
   * Used when Escape is pressed
   */
  const focusButton = useCallback((label: string) => {
    requestAnimationFrame(() => {
      buttonRefs.current[label]?.focus();
    });
  }, []);

  return {
    openDropdown,
    setOpenDropdown,
    buttonRefs,
    firstItemRefs,
    menuItemRefs,
    focusFirstItem,
    focusMenuItem,
    focusButton
  };
}
