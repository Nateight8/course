import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const pVariants = cva("text-primary", {
  variants: {
    size: {
      default: "text-lg font-medium",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PHeading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pVariants> {}

const H3 = forwardRef<HTMLHeadingElement, PHeading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </p>
    );
  }
);

H3.displayName = "H3";

export { H3, pVariants };
