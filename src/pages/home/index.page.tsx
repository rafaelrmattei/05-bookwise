import { useSession } from 'next-auth/react'
import { CaretRight } from 'phosphor-react'

import { BookCard } from '@/components/Card/Book'
import { ReviewCard } from '@/components/Card/Review'
import { Layout } from '@/components/Layout'

import { HeadingCards, HomeContainer, LastReading, MostRecent, PopularBooks, Reviews } from './styles'

export default function Home() {
  const { data: session } = useSession()

  return (
    <Layout>
      <HomeContainer>
        <Reviews>
          {session && (
            <LastReading>
              <HeadingCards>
                <h2>Sua última leitura</h2>
                <button>
                  Ver todas <CaretRight size={16} />
                </button>
              </HeadingCards>

              <ReviewCard active />
            </LastReading>
          )}

          <MostRecent>
            <HeadingCards>
              <h2>Avaliações mais recentes</h2>
            </HeadingCards>

            <ReviewCard key={1} />
            <ReviewCard key={2} />
            <ReviewCard key={3} />
          </MostRecent>
        </Reviews>

        <Reviews>
          <PopularBooks>
            <HeadingCards>
              <h2>Livros populares</h2>
              <button>
                Ver todas <CaretRight size={16} />
              </button>
            </HeadingCards>

            <BookCard readed />
            <BookCard readed />
            <BookCard />
            <BookCard />
            <BookCard />
          </PopularBooks>
        </Reviews>
      </HomeContainer>
    </Layout>
  )
}
