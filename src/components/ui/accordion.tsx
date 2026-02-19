"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/src/lib/utils"

/**
 * Accordion root component that wraps Radix UI's Accordion Root and adds a data-slot attribute.
 *
 * @param props - Props forwarded to the underlying Radix Accordion Root component.
 * @returns The rendered Radix Accordion Root element with data-slot="accordion" and all forwarded props.
 */
function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

/**
 * Wraps Radix Accordion Item with project defaults: adds a data-slot and base border styling.
 *
 * @param className - Additional CSS classes appended to the component's base styles
 * @returns A React element for an accordion item with border styling and forwarded props
 */
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

/**
 * Render an accordion item trigger that includes a chevron icon and applies state-based styles.
 *
 * @param className - Additional CSS classes appended to the trigger's default classes
 * @param children - Content rendered inside the trigger (usually the item's title)
 * @returns The trigger element for an accordion item, including an internal header and a chevron icon that rotates when open
 */
function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

/**
 * Renders the content panel for an accordion item with open/closed animations.
 *
 * The component forwards all remaining props to the underlying Radix Content element,
 * applies state-based open/close animation classes, and wraps `children` in an inner
 * container that receives `className` (in addition to default vertical padding).
 *
 * @param className - Additional CSS classes applied to the inner content wrapper
 * @param children - Content to display inside the accordion panel
 * @returns The accordion content element
 */
function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }