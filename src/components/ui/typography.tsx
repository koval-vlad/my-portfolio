import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      ul: "my-6 ml-6 list-disc [&>li]:mt-2",
      inlineCode:
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      certificate: "text-left text-foreground text-sm leading-relaxed",
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div"
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, variant, as = "p", ...props }, ref) => {
    const Component = as

    // Special handling for certificate variant
    if (variant === "certificate") {
      const formatCertificateText = (text: string) => {
        // Split by periods and filter out empty strings
        const sentences = text.split('.').filter(sentence => sentence.trim());

        return sentences.map((sentence, index) => {
          const trimmedSentence = sentence.trim();
          const colonIndex = trimmedSentence.indexOf(':');

          if (colonIndex !== -1) {
            const label = trimmedSentence.substring(0, colonIndex + 1); // Include the colon
            const description = trimmedSentence.substring(colonIndex + 1).trim();

            return (
              <div key={index} className="mb-2">
                <span className="font-bold">{label}</span>{description && ` ${description}`}
              </div>
            );
          }

          return (
            <div key={index} className="mb-2">
              {trimmedSentence}
            </div>
          );
        });
      };

      return (
        <div
          className={cn(typographyVariants({ variant }), className)}
          ref={ref}
          {...props}
        >
          {typeof props.children === 'string' ? formatCertificateText(props.children) : props.children}
        </div>
      );
    }

    // Special handling for h1 variant with neon glow
    if (variant === "h6" || variant === "h4") {
      return (
        <Component
          className={cn(typographyVariants({ variant }), className)}
          ref={ref}
          style={{
            textShadow: '0 0 5px #6366f1, 0 0 10px #6366f1, 0 0 15px #6366f1, 0 0 20px #6366f1',
            filter: 'drop-shadow(0 0 5px #6366f1) drop-shadow(0 0 10px #6366f1)'
          }}
          {...props}
        />
      );
    }

    return (
      <Component
        className={cn(typographyVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
