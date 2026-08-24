"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Magnetic } from "@/components/interactive/magnetic";

const buttonStyles = cva(
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-500/60 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-red-500 text-white hover:bg-brand-red-600 shadow-[0_10px_30px_-10px_rgba(218,38,46,0.6)]",
        secondary:
          "bg-white/5 text-steel-100 hover:bg-white/10 border border-white/10",
        ghost:
          "text-steel-100 hover:text-brand-red-300 border border-transparent",
        outline:
          "text-steel-100 border border-white/15 hover:border-brand-red-500 hover:text-brand-red-300",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  magnetic?: boolean;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, magnetic = true, children, ...props }, ref) => {
    const btn = (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
    return magnetic ? <Magnetic strength={0.25}>{btn}</Magnetic> : btn;
  }
);
Button.displayName = "Button";
