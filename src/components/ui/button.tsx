import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wide w-full",
  {
    variants: {
      variant: {
        default: "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100",
        primary:'bg-sky-400 text-black border-sky-500  border-b-4 active:border-b-0 text-white hover:bg-sky-400/100',
        primaryOutline:'bg-white text-sky-400 hover:bg-slate-100  ',
        secondary:'bg-green-500 text-black border-green-600  border-b-4 active:border-b-0 text-white hover:bg-green-500/100',
        secondaryOutline:'bg-white text-green-500 hover:bg-slate-100  ',
        danger:'bg-rose-500 text-black border-green-600  border-b-4 active:border-b-0 text-white hover:bg-green-500/100',
        dangerOutline:'bg-white text-green-500 hover:bg-slate-100  ',
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
