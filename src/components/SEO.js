import React from "react";
import { Helmet } from "react-helmet";
import generateSchema from "../utils/schema";

export default function SEO({ title, description, pageType, slug }) {
  const schema = generateSchema({ pageType, title, description, slug });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://echo-reading.vercel.app/${slug || ""}`} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
  );
}
