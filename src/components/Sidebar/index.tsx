import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import { SignIn, SignOut } from 'phosphor-react'

import LogoImageSrc from '@/assets/images/logo.png'
import { pageItems, pageLogoutRedirect } from '@/config/pages'
import { getInitialsFromName } from '@/utils/get-initials-from-name'

import { Avatar, SidebarContainer, SidebarFooter, SidebarHeader, SidebarNav, SignOutButton, User } from './styles'

export function Sidebar() {
  const pathname = usePathname()
  const { data: session, status } = useSession()

  function handleSignOutClick() {
    signOut({ callbackUrl: '/login' })
  }

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
                <Avatar>
                  {session.user?.image && session.user?.name ? (
                    <Image src={session.user.image} width={32} height={32} quality={100} alt={session.user.name} />
                  ) : (
                    <span>{session.user?.name && getInitialsFromName(session.user?.name)}</span>
                  )}
                </Avatar>

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
