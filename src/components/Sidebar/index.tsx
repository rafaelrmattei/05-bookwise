import Image from 'next/image'
import Link from 'next/link'
import { SignIn } from 'phosphor-react'

import LogoImageSrc from '@/assets/images/logo.png'
import { pageItems } from '@/config/pages'

import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarNav } from './styles'

interface SidebarProps {
  pathname: string
}

export function Sidebar({ pathname }: SidebarProps) {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <Image src={LogoImageSrc} width={128} height={25} quality={100} alt="BookWise Logo" />
      </SidebarHeader>

      <SidebarNav>
        {pageItems.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} data-active={pathname === href}>
            <Icon size={24} />
            {label}
          </Link>
        ))}
      </SidebarNav>

      <SidebarFooter>
        <Link href="/login">
          Fazer login
          <SignIn size={20} />
        </Link>
      </SidebarFooter>
    </SidebarContainer>
  )
}
