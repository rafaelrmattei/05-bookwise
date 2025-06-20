import Link from 'next/link'
import { CaretRight } from 'phosphor-react'

import { HeadingCardsContainer } from './styles'

interface HeadingCardsProps {
  title: string
  link?: {
    title: string
    href: string
  }
}

export function HeadingCards({ title, link }: HeadingCardsProps) {
  return (
    <HeadingCardsContainer>
      <h2>{title}</h2>
      {link && (
        <Link href={link.href}>
          {link.title} <CaretRight size={16} />
        </Link>
      )}
    </HeadingCardsContainer>
  )
}

HeadingCards.displayName = 'HeadingCards'
