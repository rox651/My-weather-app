import { useState } from 'react'
import { useWeatherStore } from '@/store'

import SearchXmarkIcon from './SearchXmarkIcon'
import SearchIcon from './SearchIcon'
import { GeoData } from '@/types'
import { getSearchOptions } from '@/lib'
import SearchedCity from './SearchedCity'
import { useMutation } from 'react-query'

const Search = () => {
  const setIsOpenSearch = useWeatherStore((state) => state.setIsOpenSearch)
  const [searchValue, setSearchValue] = useState<string>('')
  const [options, setOptions] = useState<GeoData[]>([])

  const searchOptionsMutation = useMutation(getSearchOptions)

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)

    if (!value) {
      setOptions([])
      return
    }

    const searchOptions = await searchOptionsMutation.mutateAsync(value.trim())
    setOptions(searchOptions)
  }

  return (
    <div className="text-end mb-1">
      <button
        aria-label="Close search icon sidebar"
        onClick={() => {
          setIsOpenSearch(false)
        }}
      >
        <SearchXmarkIcon />
      </button>
      <fieldset className="border border-[#E7E7EB]  relative   ">
        <SearchIcon />
        <input
          value={searchValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Search location"
          className=" w-full pl-12 pr-2 py-2 border-none bg-transparent outline-none"
        />
      </fieldset>
      <ul className="mt-10 space-y-4">
        {options.map((option, index) => (
          <SearchedCity key={index} option={option} />
        ))}
      </ul>
    </div>
  )
}

export default Search
