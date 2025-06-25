const seoConfig = {
  titleTemplate: '%s | Bookwise',
  defaultTitle: 'Bookwise',
  description: 'Encontre, avalie e acompanhe seus livros favoritos.',
  canonical: 'https://05-bookwise.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://05-bookwise.vercel.app',
    site_name: 'Bookwise',
    images: [
      {
        url: 'https://05-bookwise.vercel.app/images/seo.png',
        width: 500,
        height: 500,
        alt: 'Bookwise SEO Image',
      },
    ],
  },
  twitter: {
    handle: '@bookwise',
    site: '@bookwise',
    cardType: 'summary_large_image',
  },
}

export default seoConfig
