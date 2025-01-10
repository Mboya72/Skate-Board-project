import { createClient } from '@/prismicio';
import { Content, isFilled } from '@prismicio/client';
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'

type Props = {
    id: string;
}

export const SkateboardProduct = async ({ id }: Props) => {
    const client = createClient()
    const product = await client.getByID<Content.
        SkateboardDocument>(id);

    const price = isFilled.number(product.data.price) ?
        `$${(product.data.price / 100).toFixed(2)}` :
        "Price Not Available";

    return (
        <div>
            <div className='flex items-center justify-between ~text-sm/2xl'>
                <span>{price}</span>
            </div>
            <PrismicNextImage alt="" field={product.data.image} width={150} />
        </div>
    )
}
