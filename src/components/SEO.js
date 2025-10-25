import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import generateSchema from "../utils/schema";

export default function SEO({ title, description, pageType }) {
  const location = useLocation();
  const canonicalUrl = `https://wealthhustle.blog${location.pathname}`;
  const schema = generateSchema({ pageType, title, description, slug: location.pathname });

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <script type="text/javascript">
    {`
      if (window.location.search.includes("no-track")) {
        localStorage.setItem("skipAnalytics", "true");
      }

      if (localStorage.getItem("skipAnalytics") !== "true") {
        const cfScript = document.createElement("script");
        cfScript.defer = true;
        cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
        cfScript.setAttribute("data-cf-beacon", '{"token": "7409e335e20240efa07f1bd360e11f9f"}');
        document.head.appendChild(cfScript);
      }
    `}
  </script>
    </Helmet>
  );
}
