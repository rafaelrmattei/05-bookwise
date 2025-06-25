import { NextSeo } from 'next-seo'

import { LastReading } from './components/LastReading'
import { LatestRatings } from './components/LatestRatings'
import { PopularBooks } from './components/PopularBooks'
import { HomeContainer, Ratings } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo title="Home" canonical="https://05-bookwise.vercel.app/home" />

      <HomeContainer>
        <Ratings>
          <LastReading />
          <LatestRatings />
        </Ratings>

        <PopularBooks />
      </HomeContainer>
    </>
  )
}
