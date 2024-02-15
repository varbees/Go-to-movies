import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwind.confid.jsinline-flex tailwind.confid.jsitems-center tailwind.confid.jsjustify-center tailwind.confid.jswhitespace-nowrap tailwind.confid.jsrounded-md tailwind.confid.jstext-sm tailwind.confid.jsfont-medium tailwind.confid.jsring-offset-background tailwind.confid.jstransition-colors focus-visible:tailwind.confid.jsoutline-none focus-visible:tailwind.confid.jsring-2 focus-visible:tailwind.confid.jsring-ring focus-visible:tailwind.confid.jsring-offset-2 disabled:tailwind.confid.jspointer-events-none disabled:tailwind.confid.jsopacity-50",
  {
    variants: {
      variant: {
        default: "tailwind.confid.jsbg-primary tailwind.confid.jstext-primary-foreground hover:tailwind.confid.jsbg-primary/90",
        destructive:
          "tailwind.confid.jsbg-destructive tailwind.confid.jstext-destructive-foreground hover:tailwind.confid.jsbg-destructive/90",
        outline:
          "tailwind.confid.jsborder tailwind.confid.jsborder-input tailwind.confid.jsbg-background hover:tailwind.confid.jsbg-accent hover:tailwind.confid.jstext-accent-foreground",
        secondary:
          "tailwind.confid.jsbg-secondary tailwind.confid.jstext-secondary-foreground hover:tailwind.confid.jsbg-secondary/80",
        ghost: "hover:tailwind.confid.jsbg-accent hover:tailwind.confid.jstext-accent-foreground",
        link: "tailwind.confid.jstext-primary tailwind.confid.jsunderline-offset-4 hover:tailwind.confid.jsunderline",
      },
      size: {
        default: "tailwind.confid.jsh-10 tailwind.confid.jspx-4 tailwind.confid.jspy-2",
        sm: "tailwind.confid.jsh-9 tailwind.confid.jsrounded-md tailwind.confid.jspx-3",
        lg: "tailwind.confid.jsh-11 tailwind.confid.jsrounded-md tailwind.confid.jspx-8",
        icon: "tailwind.confid.jsh-10 tailwind.confid.jsw-10",
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
