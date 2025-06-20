import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import { Layout } from '@/components/Layout'
import { SessionContextProvider } from '@/contexts/Session/SessionContextProvider'
import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
const nunito = Nunito({ subsets: ['latin'] })

globalStyles()

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <div className={nunito.className}>
          <SessionContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SessionContextProvider>
        </div>
      </SessionProvider>
    </QueryClientProvider>
  )
}
