import { cn } from '@/utils';
import { cva, VariantProps } from 'class-variance-authority'
import Link from 'next/link';
import React from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "",
        outline:
          "border border-grayscale-800 bg-transparent hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      intent: {
        primary: "",
        dark: "",
        light: ""
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2.5",
        lg: "px-8 py-5",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        intent: "primary",
        className: "bg-primary text-grayscale-800 hover:bg-primary/90",
      },
      {
        variant: "outline",
        intent: "primary",
        className: "border border-primary text-primary hover:bg-primary/10",
      },
      {
        variant: "link",
        intent: "primary",
        className: "text-primary hover:text-primary/90",
      },
      {
        variant: "filled",
        intent: "dark",
        className: "bg-grayscale-800 text-white hover:bg-grayscale-800/90",
      },
      {
        variant: "outline",
        intent: "dark",
        className: "border border-grayscale-800 text-grayscale-800 hover:bg-grayscale-800/10",
      },
      {
        variant: "link",
        intent: "dark",
        className: "text-grayscale-800 underline-offset-4 hover:underline",
      },
      {
        variant: "filled",
        intent: "light",
        className: "bg-white text-grayscale-800 hover:bg-white/90",
      },
      {
        variant: "outline",
        intent: "light",
        className: "border border-white text-white hover:bg-white/10",
      },
    ],
    defaultVariants: {
      variant: "filled",
      intent: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = ({
  className = '',
  variant,
  size,
  intent,
  href,
  children,
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, intent }), className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };