import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProMaxButtonProps extends ButtonProps {
  variant?: "primary" | "white" | "dark" | "outline-white";
  containerClassName?: string;
  children: React.ReactNode;
  offsetColor?: string;
}

const ProMaxButton = React.forwardRef<HTMLButtonElement, ProMaxButtonProps>(
  ({ variant = "primary", className, containerClassName, children, offsetColor, ...props }, ref) => {
    
    // variant mappings
    // primary: blue background, white text, blue offset border
    // white: white background, blue text, blue offset border
    // dark: white background, blue text, white offset border (for dark backgrounds)
    // outline-white: transparent background, white text, white offset border
    
    const variantStyles = {
      primary: {
        button: "bg-[#18448F] hover:bg-white hover:text-[#18448F] text-white",
        border: "border-[#18448F]"
      },
      white: {
        button: "bg-white text-[#18448F] hover:bg-[#18448F] hover:text-white",
        border: "border-[#18448F]"
      },
      dark: {
        button: "bg-white text-[#18448F] hover:bg-white hover:text-[#18448F] shadow-2xl",
        border: "border-white"
      },
      "outline-white": {
        button: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#18448F]",
        border: "border-white"
      }
    };

    const currentVariant = variantStyles[variant] || variantStyles.primary;
    const resolvedBorderColor = offsetColor || currentVariant.border;

    return (
      <div className={cn("relative inline-block group", containerClassName)}>
        <div className={cn(
          "absolute inset-0 border rounded-[2rem] -translate-x-[5px] translate-y-[5px] transition-transform group-hover:-translate-x-[3px] group-hover:translate-y-[3px]",
          resolvedBorderColor
        )}></div>
        <Button
          ref={ref}
          className={cn(
            "relative rounded-[2rem] h-16 px-12 font-black uppercase tracking-widest text-xs transition-all border-none",
            currentVariant.button,
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </div>
    );
  }
);

ProMaxButton.displayName = "ProMaxButton";

export { ProMaxButton };
