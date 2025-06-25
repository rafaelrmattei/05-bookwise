import { QueryClientProvider } from '@tanstack/react-query'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import { DefaultSeo } from 'next-seo'

import { Layout } from '@/components/Layout'
import { SessionContextProvider } from '@/contexts/Session/SessionContextProvider'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'

import seoConfig from '../../next-seo.config'

const nunito = Nunito({ subsets: ['latin'] })
globalStyles()

type NextPageWithLayout = NextPage & {
  noLayout?: boolean
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const noLayout = Component.noLayout

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <SessionContextProvider>
            <DefaultSeo {...seoConfig} />
            {noLayout ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </SessionContextProvider>
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
