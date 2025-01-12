import { Bounded } from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { JSX } from "react";

/**
 * Props for `TextAndImage`.
 */
export type TextAndImageProps = SliceComponentProps<Content.TextAndImageSlice>;

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({ slice }: TextAndImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={clsx(
        slice.primary.theme === "Blue" && "bg-texture bg-brand-blue text-white"
      )}
    >
      {slice.primary.theme}
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.button} />
      <PrismicNextImage field={slice.primary.background_image} />
      <PrismicNextImage field={slice.primary.foreground_image} />
    </Bounded>
  );
};

export default TextAndImage;
