import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import generateSchema from "../utils/schema";

export default function SEO({ title, description, pageType }) {
  const location = useLocation();
  const canonicalUrl = `https://echo-reading.vercel.app${location.pathname}`;
  const schema = generateSchema({ pageType, title, description, slug: location.pathname });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
  );
}
