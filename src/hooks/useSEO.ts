/* ────────────────────────────────────────────────────────────
   useSEO — injeta/atualiza <title>, meta description,
   canonical, Open Graph e Twitter Cards por rota.
   Também aceita um bloco JSON-LD específico da página.
   ──────────────────────────────────────────────────────────── */

import { useEffect } from "react";

const SITE_URL = "https://conectcore.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/conectcore_logo01.png`;

interface SEOOptions {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  ogImage?: string;
  jsonLd?: object | object[];
  publishedTime?: string;
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", value);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setJsonLd(data: object | object[]) {
  const existing = document.head.querySelector(
    'script[data-seo-jsonld="true"]',
  );
  if (existing) existing.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-jsonld", "true");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export function useSEO({
  title,
  description,
  path,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  publishedTime,
}: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    document.title = title;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    if (publishedTime) {
      setMeta("property", "article:published_time", publishedTime);
    }

    if (jsonLd) {
      setJsonLd(jsonLd);
    }

    return () => {
      const tag = document.head.querySelector('script[data-seo-jsonld="true"]');
      if (tag) tag.remove();
    };
  }, [title, description, path, ogType, ogImage, jsonLd, publishedTime]);
}
