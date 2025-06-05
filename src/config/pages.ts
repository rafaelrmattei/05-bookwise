import { Binoculars, ChartLineUp, Icon, User } from 'phosphor-react'

export interface PageProps {
  href: string
  label: string
  icon: Icon
}

export const pageItems: PageProps[] = [
  { href: '/', label: 'Início', icon: ChartLineUp },
  { href: '/explore', label: 'Explorar', icon: Binoculars },
  { href: '/profile', label: 'Perfil', icon: User },
]
