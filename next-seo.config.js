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
        width: 600,
        height: 600,
        alt: 'Bookwise SEO Image',
      },
    ],
  },
}

export default seoConfig
