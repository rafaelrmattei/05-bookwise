import { LastReading } from './components/LastReading'
import { LatestRatings } from './components/LatestRatings'
import { PopularBooks } from './components/PopularBooks'
import { HomeContainer, Ratings } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Ratings>
        <LastReading />
        <LatestRatings />
      </Ratings>

      <PopularBooks />
    </HomeContainer>
  )
}
