import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { SignIn, SignOut } from 'phosphor-react'
import { useCallback } from 'react'
import { useContextSelector } from 'use-context-selector'

import LogoImageSrc from '@/assets/images/logo.png'
import { pageItems, pageLogoutRedirect } from '@/config/pages'
import { SessionContext } from '@/contexts/Session/SessionContext'

import { Avatar } from '../Avatar'
import { SidebarContainer, SidebarFooter, SidebarHeader, SidebarNav, SignOutButton, User } from './styles'

interface SidebarProps {
  pathname: string
}

export function Sidebar({ pathname }: SidebarProps) {
  const session = useContextSelector(SessionContext, (context) => context.session)
  const status = useContextSelector(SessionContext, (context) => context.status)

  const handleSignOutClick = useCallback(() => {
    signOut({ callbackUrl: '/login' })
  }, [])

  return (
    <SidebarContainer>
      <SidebarHeader>
        <Image src={LogoImageSrc} width={128} height={25} quality={100} alt="BookWise Logo" priority />
      </SidebarHeader>

      {status !== 'loading' && (
        <>
          <SidebarNav>
            {pageItems
              .filter(({ isSignedIn }) => !isSignedIn || !!session)
              .map(({ href, label, icon: Icon }) => (
                <Link key={href} href={href} data-active={pathname === href}>
                  <Icon size={24} />
                  {label}
                </Link>
              ))}
          </SidebarNav>

          <SidebarFooter>
            {session ? (
              <User>
                <Avatar image={session.user?.image ?? undefined} name={session.user?.name ?? 'BW'} />
                <span>{session.user?.name?.split(/\s+/)[0]}</span>
                <SignOutButton onClick={handleSignOutClick} title="Sair">
                  <SignOut size={20} />
                </SignOutButton>
              </User>
            ) : (
              <Link href={pageLogoutRedirect}>
                Fazer login
                <SignIn size={20} />
              </Link>
            )}
          </SidebarFooter>
        </>
      )}
    </SidebarContainer>
  )
}

Sidebar.displayName = 'Sidebar'
