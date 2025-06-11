import Image from 'next/image'

import { RatingCardContainer } from './styles'

interface RatingCardProps {
  profile?: boolean
  active?: boolean
}

export function RatingCard({ profile = true, active = false }: RatingCardProps) {
  return (
    <RatingCardContainer active={active}>
      {profile && (
        <div>
          <Image
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Jaxson Dias"
            width={32}
            height={32}
          />
          <div>
            <span>Jaxson Dias</span>
            <span>Hoje</span>
          </div>
        </div>
      )}
      <div>
        <Image src="/images/books/o-hobbit.png" alt="O Hobbit" width={120} height={160} />
        <div>
          <div>
            <strong>O Hobbit</strong>
            <span>J.R.R. Tolkien</span>
          </div>
          <div>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a
              in. Amet libero pharetra nunc elementum fringilla velit ipsum. Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean
              posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum.
            </p>
            <button>ver mais</button>
          </div>
        </div>
      </div>
    </RatingCardContainer>
  )
}
