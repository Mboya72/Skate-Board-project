import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

// This function is executed on the server-side during SSR
export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  // Pass the fetched data to SliceZone for rendering
  return <SliceZone slices={page.data.slices} components={components} />;
}

// This function is executed during SSR to generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
