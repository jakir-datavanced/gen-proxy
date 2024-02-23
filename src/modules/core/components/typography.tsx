import { FC, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/modules/core/lib/cn";

type TypographyKey =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | "infoText"
  | 'subText'
  | 'text'
  | 'infoSubText'
  | "commonTitle"
  | "title"
  |  "sectitle"
  |  "sectitleWhite"
  | "label"
  | "article"
  | "lead"
  | "body"
  | "buttonSmallText"
  | "buttonLargeText"
  | "input"
  | "smallText"
  | "smallCaps"
  | "navigation"
  | "navTitle"
  | "subTitle"

type TypographyVariants = { variant: Record<TypographyKey, string> };

const typographyVariants = cva<TypographyVariants>("font-medium", {
  variants: {
    variant: {
      h1: "text-white",
      h2: "text-xl lg:text-3xl leading-sm",
      h3: "text-3lg lg:text-xl leading-sm",
      h4: "text-sm lg:text-3lg leading-xmd",
      h5: "text-lg lg:text-3lg",
      p: "text-white text-2sm lg:text-xl font-normal leading-md",
      infoText: "text-white text-2sm  md:text-2lg font-normal leading-md",
      subText: "text-4lg md:text-xl font-semibold leading-md",
      text: "text-2sm lg:text-xl font-normal leading-md",
      infoSubText: "text-2sm md:text-4lg font-normal leading-xl",
      commonTitle: "text-3lg leading-xmd",
      label: "text-4lg leading-sm",
      article: "text-2lg leading-lg font-light",
      lead: "text-2sm lg:text-3sm font-light",
      body: "text-sm leading-lg font-light",
      buttonSmallText: "text-xl font-bold leading-md",
      buttonLargeText: "text-2sm leading-md",
      input: "text-2sm leading-md font-light",
      smallText: "text-2xs leading-md font-normal",
      title: "text-white font-bold text-xxl md:text-2xl lg:text-3xxl leading-tight capitalize",
      sectitle: "text-xxl md:text-2xl lg:text-3xxl font-black leading-sm capitalize",
      sectitleWhite: "text-white text-xxl md:text-2xl lg:text-3xxl font-black leading-sm",
      smallCaps: "text-sm lg:text-lg font-medium uppercase",
      navigation: "text-sm font-normal",
      navTitle: "text-2lg lg:text-xxl font-semiblod leading-md",
      subTitle: "text-2lg lg:text-3xll font-bold leading-md",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TypographyProps = {
  Tag: keyof HTMLElementTagNameMap;
  className?: string;
} & PropsWithChildren &
  VariantProps<typeof typographyVariants>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  Tag,
  variant,
}) => {
  return (
    <Tag className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Tag>
  );
};
