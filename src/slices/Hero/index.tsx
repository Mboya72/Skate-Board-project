
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
  
        <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.body} />
      <PrismicNextLink field={slice.primary.button} />
      Placeholder component for hero (variation: {slice.variation}) Slices
    </Bounded>
  );
};

export default Hero;
