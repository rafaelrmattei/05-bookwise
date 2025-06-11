import { CaretRight } from 'phosphor-react'

import { RatingCard } from '@/components/Card/Rating'
import { Layout } from '@/components/Layout'

import { HeadingCards, HomeContainer, LastReading, MostRecent, PopularBooks, Rates } from './styles'

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <Rates>
          <LastReading>
            <HeadingCards>
              <h2>Sua última leitura</h2>
              <button>
                Ver todas <CaretRight size={16} />
              </button>
            </HeadingCards>
            <RatingCard profile={false} active />
          </LastReading>
          <MostRecent>
            <HeadingCards>
              <h2>Avaliações mais recentes</h2>
            </HeadingCards>
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </MostRecent>
        </Rates>
        <PopularBooks>
          <HeadingCards>
            <h2>Livros populares</h2>
            <button>
              Ver todas <CaretRight size={16} />
            </button>
          </HeadingCards>
        </PopularBooks>
      </HomeContainer>
    </Layout>
  )
}
