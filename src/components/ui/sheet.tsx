"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/src/lib/utils"

/**
 * Root-level Sheet component that renders the sheet container and forwards received props.
 *
 * @param props - Props forwarded to the underlying sheet root element.
 * @returns The rendered Sheet root element with data-slot="sheet".
 */
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

/**
 * Renders a trigger element for the Sheet component.
 *
 * @param props - Props forwarded to Radix UI's Sheet Trigger primitive
 * @returns The trigger element used to open or control the sheet
 */
function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

/**
 * Wrapper around Radix's SheetPrimitive.Close that forwards all props and attaches a data-slot for styling.
 *
 * @param props - Props forwarded to the underlying SheetPrimitive.Close component
 * @returns A Close element with data-slot="sheet-close" and the provided props applied
 */
function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

/**
 * Wraps Radix's Sheet Portal and forwards all props while attaching a data-slot for styling hooks.
 *
 * @param props - Props to pass through to the underlying SheetPrimitive.Portal
 * @returns A Portal element with data-slot="sheet-portal" and the provided props applied
 */
function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

/**
 * Renders the sheet overlay backdrop with entrance/exit animations and a semi-transparent black background.
 *
 * @param className - Additional CSS classes to merge with the overlay's base classes
 * @returns The overlay element positioned behind the sheet content
 */
function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders sheet panel content inside a portal with an overlay, animated entrance/exit, and side-specific layout.
 *
 * @param side - Position where the sheet appears: "top", "right", "bottom", or "left". Defaults to "right".
 * @param showCloseButton - Whether to render a close button in the top-right corner. Defaults to true.
 * @returns The configured sheet content element (includes portal, overlay, animations, and optional close control).
 */
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

/**
 * Container element for the sheet's header content.
 *
 * Applies base vertical layout and padding, exposes a `data-slot="sheet-header"` attribute,
 * and merges any provided `className` with the component's default classes.
 *
 * @param className - Additional CSS classes to append to the header's base styles
 */
function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

/**
 * Container for sheet footer content that anchors to the bottom and provides padding and vertical spacing.
 *
 * @returns A div element used as the sheet footer with `data-slot="sheet-footer"`; merges the provided `className` with default footer styles.
 */
function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

/**
 * Renders the sheet's title element with standard title styles and a `data-slot="sheet-title"` attribute.
 *
 * @returns The underlying `SheetPrimitive.Title` element with merged title classes (`text-foreground font-semibold`) and any provided `className` or props.
 */
function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the sheet's descriptive text element with default muted styling.
 *
 * @param className - Additional CSS classes to merge with the default `text-muted-foreground text-sm`
 * @returns The rendered Sheet description element
 */
function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}