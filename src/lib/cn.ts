/**
 * Concatenates provided class names into a space-separated string while omitting falsy values.
 *
 * @param classes - Class names and/or falsy values; falsy entries (false, null, undefined, or empty string) are omitted
 * @returns A space-separated string of the truthy class names, or an empty string if none remain
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}