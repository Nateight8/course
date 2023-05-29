import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const pVariants = cva("text-primary", {
  variants: {
    size: {
      default: "text-base md:text-2xl font-medium",
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
      <h3 ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </h3>
    );
  }
);

H3.displayName = "H3";

export { H3, pVariants };
