import { LastReading } from './components/LastReading'
import { MostRecent } from './components/MostRecent'
import { PopularBooks } from './components/PopularBooks'
import { HomeContainer, Ratings } from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <Ratings>
        <LastReading />
        <MostRecent />
      </Ratings>

      <PopularBooks />
    </HomeContainer>
  )
}
