import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class inputs into a single merged Tailwind CSS class string.
 *
 * @param inputs - Class names or conditional class values to combine
 * @returns The resulting class string with Tailwind utility classes deduplicated and conflicts resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}