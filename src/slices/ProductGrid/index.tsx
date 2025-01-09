import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { JSX } from "react";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid = ({ slice }: ProductGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-texture bg-brand-gray"
    >
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicRichText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
      <PrismicRichText field={slice.primary.body} />
      </div>
      {slice.primary.product.map(({skateboard}) => (
        // Render the item
isFilled.contentRelationship(skateboard) && (
  <SkateboardProduct key={skateboard.id} id={skateboard.id} />
)
        
      ))}
    </Bounded>
  );
};

export default ProductGrid;
