import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"


interface propsSeo {
  title: string,
  description: string,
  pathname: string,
  children: any
}

export const SEO = ({ title, description, pathname, children }: propsSeo) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content="permalink" />
      <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👨‍💻</text></svg>" />
      {children}
    </>
  )
}