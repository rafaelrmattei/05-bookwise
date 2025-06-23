import { BookmarkSimple, BookOpen, Books, UserList } from 'phosphor-react'

import { BookStatisticsType } from '@/@types/book'

import { Statistic, StatisticsContainer } from './styles'

interface StatisticsProps {
  statistics: BookStatisticsType
}

export function Statistics({ statistics }: StatisticsProps) {
  if (statistics.totalPagesReaded) {
    return (
      <StatisticsContainer>
        <Statistic>
          <BookOpen size={32} />
          <div>
            <strong>{statistics.totalPagesReaded}</strong>
            <span>Páginas lidas</span>
          </div>
        </Statistic>
        <Statistic>
          <Books size={32} />
          <div>
            <strong>{statistics.totalBooksReaded}</strong>
            <span>Livros avaliados</span>
          </div>
        </Statistic>
        <Statistic>
          <UserList size={32} />
          <div>
            <strong>{statistics.totalAuthorsReaded}</strong>
            <span>Autores lidos</span>
          </div>
        </Statistic>
        <Statistic>
          <BookmarkSimple size={32} />
          <div>
            <strong>{statistics.mostReadedCategory}</strong>
            <span>Categoria mais lida</span>
          </div>
        </Statistic>
      </StatisticsContainer>
    )
  }
}
