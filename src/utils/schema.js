export default function generateSchema({ pageType, title, description, slug }) {
  const baseUrl = "https://echo-reading.vercel.app";

  switch (pageType) {
    case "home":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "EchoReader",
        url: baseUrl,
        description,
        logo: `${baseUrl}/favicon.png`,
        sameAs: ["https://github.com/echoreader", "https://twitter.com/echoreader"],
      };

    case "blog":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "EchoReader Blog",
        url: `${baseUrl}/blog`,
        description,
      };

    case "post":
      return {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url: `${baseUrl}/${slug}`,
        author: {
          "@type": "Person",
          name: "Echo",
        },
        publisher: {
          "@type": "Organization",
          name: "EchoReader",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/favicon.png`,
          },
        },
        datePublished: new Date().toISOString(),
      };

    case "about":
      return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Echo",
        url: `${baseUrl}/about`,
        description,
        sameAs: ["https://github.com/echoreader", "https://twitter.com/echoreader"],
      };

    default:
      return {};
  }
}
