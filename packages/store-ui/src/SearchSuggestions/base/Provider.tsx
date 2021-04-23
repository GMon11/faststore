import React, { createContext, useEffect, useState } from 'react'
import { Flex } from 'theme-ui'
import type { FC } from 'react'

import { useSearchBarContext } from '../../SearchBar/hooks/useSearchBarContext'
import type { ISearchContext } from '../../SearchBar/hooks/Provider'

export interface IContext {
  searchBar: ISearchContext
  setTerm: (t: string) => unknown
  term: string
}

export const Context = createContext<IContext | undefined>(undefined)

const Provider: FC = ({ children }) => {
  const searchbarContext = useSearchBarContext()
  const searchbarTerm = searchbarContext.asyncTerm
  const [term, setTerm] = useState(searchbarTerm)

  useEffect(() => {
    setTerm(searchbarTerm)
  }, [searchbarTerm])

  return (
    <Context.Provider
      value={{
        term,
        setTerm,
        searchBar: searchbarContext,
      }}
    >
      <Flex variant="suggestions">{children}</Flex>
    </Context.Provider>
  )
}

export default Provider
