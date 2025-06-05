import type { AppProps } from 'next/app'
import { usePathname } from 'next/navigation'

import { Hero } from '@/components/Hero'
import { Sidebar } from '@/components/Sidebar'
import { AppContainer, globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname()

  return (
    <AppContainer>
      {pathname === '/login' ? <Hero /> : <Sidebar pathname={pathname} />}
      <Component {...pageProps} />
    </AppContainer>
  )
}
