import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { Avatar } from '@/components/Avatar'
import { Stars } from '@/components/Stars'

import { Book, BookInfo, ExpandableInfo, Header, Profile, ReviewCardContainer } from './styles'

interface ReviewCardProps {
  active?: boolean
}

export function ReviewCard({ active = false }: ReviewCardProps) {
  const [expandedInfo, setExpandedInfo] = useState(false)
  const [expansiveInfo, setExpansiveInfo] = useState(false)
  const ExpandableInfoElement = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (ExpandableInfoElement.current) {
      const el = ExpandableInfoElement.current
      const isClampedNow = el.scrollHeight > el.clientHeight
      setExpansiveInfo(isClampedNow)
    }
  }, [expandedInfo])

  return (
    <ReviewCardContainer active={active}>
      {!active && (
        <Header>
          <Profile>
            <Avatar
              image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              name="Jaxson Dias"
            />
            <div>
              <span>Jaxson Dias</span>
              <span>Hoje</span>
            </div>
          </Profile>
          <Stars rate={3} />
        </Header>
      )}

      <Book>
        <Image src="/images/books/o-hobbit.png" alt="O Hobbit" width={120} height={160} />
        <div>
          {active && (
            <Header>
              <div>Há 2 dias</div>
              <Stars rate={3} />
            </Header>
          )}
          <BookInfo>
            <strong>O Hobbit</strong>
            <span>J.R.R. Tolkien</span>
            <ExpandableInfo ref={ExpandableInfoElement} lines={!expandedInfo ? (active ? 2 : 4) : 'all'}>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a
              in. Amet libero pharetra nunc elementum fringilla velit ipsum. Semper et sapien proin vitae nisi. Cras fermentum id pulvinar varius leo
              a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Semper et sapien proin vitae nisi. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Semper et sapien proin vitae nisi. Semper et sapien proin vitae.
              Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Semper et sapien proin vitae
              nisi. Semper et sapien proin vitae nisi.
            </ExpandableInfo>
            {expansiveInfo && !expandedInfo && <button onClick={() => setExpandedInfo(!expandedInfo)}>ver mais</button>}
          </BookInfo>
        </div>
      </Book>
    </ReviewCardContainer>
  )
}
