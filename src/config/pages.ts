import { Binoculars, ChartLineUp, Icon, User } from 'phosphor-react'

export interface PageProps {
  href: string
  label: string
  icon: Icon
  isSignedIn: boolean
}

export const pageItems: PageProps[] = [
  { href: '/home', label: 'Início', icon: ChartLineUp, isSignedIn: false },
  { href: '/explore', label: 'Explorar', icon: Binoculars, isSignedIn: false },
  { href: '/profile', label: 'Perfil', icon: User, isSignedIn: true },
]

export const pageLoginRedirect = '/home'

export const pageLogoutRedirect = '/'
