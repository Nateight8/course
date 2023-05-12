import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const pVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      default: "text-xs",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PHeading
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof pVariants> {}

const P = forwardRef<HTMLParagraphElement, PHeading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

P.displayName = "p";

export { P, pVariants };
