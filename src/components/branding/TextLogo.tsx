export type TextLogoProps = {
  text: string;
  className?: string;
};

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
