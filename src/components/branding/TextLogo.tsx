export type TextLogoProps = {
  text: string;
  className?: string;
};

/**
 * Render a stacked decorative text logo using the provided `text`.
 *
 * The component outputs an accessible container (role="img") with decorative
 * horizontal lines above and below the displayed text. If `text` is falsy,
 * the component returns `null`.
 *
 * @param text - The string to display (also used for the container's `aria-label` and shown uppercased)
 * @param className - Optional additional CSS classes appended to the container
 * @returns A DOM element containing the decorative logo and uppercase text, or `null` when `text` is falsy
 */
export function TextLogo({ text, className = '' }: TextLogoProps) {
  if (!text) return null;
  return (
    <div
      role="img"
      aria-label={text}
      className={`flex flex-col items-start leading-none ${className}`}
    >
      <span aria-hidden="true" className="w-full h-[2px] bg-current mb-1" />
      <span aria-hidden="true" className="font-extrabold tracking-wide">
        {text.toUpperCase()}
      </span>
      <span aria-hidden="true" className="w-full h-[2px] bg-current mt-1" />
    </div>
  );
}