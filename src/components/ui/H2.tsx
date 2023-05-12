import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const pVariants = cva("text-primary", {
  variants: {
    size: {
      default: " text-3xl md:text-5xl font-medium",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PHeading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pVariants> {}

const H2 = forwardRef<HTMLHeadingElement, PHeading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h2 ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </h2>
    );
  }
);

H2.displayName = "H2";

export { H2, pVariants };
