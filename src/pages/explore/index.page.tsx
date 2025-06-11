import { MagnifyingGlass } from 'phosphor-react'

import { SearchInput } from '@/components/Form/Inputs/Search'
import { Layout } from '@/components/Layout'

export default function Explore() {
  return <Layout headerChildren={<SearchInput type="text" placeholder="Buscar livro ou autor" icon={MagnifyingGlass} />}></Layout>
}
