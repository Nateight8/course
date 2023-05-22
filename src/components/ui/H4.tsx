import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import { cn } from "~/lib/utils";

const pVariants = cva("text-primary capitalize", {
  variants: {
    size: {
      default: "mb-1 text-base font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface PHeading
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof pVariants> {}

const H4 = forwardRef<HTMLHeadingElement, PHeading>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <h4 ref={ref} {...props} className={cn(pVariants({ size, className }))}>
        {children}
      </h4>
    );
  }
);

H4.displayName = "H4";

export { H4, pVariants };
