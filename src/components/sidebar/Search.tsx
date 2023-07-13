import { useState } from 'react'
import { City } from '@/types'
import cities from '@/utils/city.list.json'
import SearchedCity from './SearchedCity'
import { useWeatherStore } from '@/store'

import SearchXmarkIcon from './SearchXmarkIcon'
import SearchIcon from './SearchIcon'

const Search = () => {
  const setIsOpenSearch = useWeatherStore((state) => state.setIsOpenSearch)
  const [searchCities, setSearchCities] = useState<City[]>()

  const allCities = cities as City[]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase()

    if (!value) {
      setSearchCities([])
      return
    }

    const filteredCities = allCities
      .filter((city) => {
        return city.name?.toLowerCase().startsWith(value)
      })
      .splice(0, 10)

    setSearchCities(filteredCities)
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
          onChange={handleInputChange}
          type="text"
          placeholder="Search location"
          className=" w-full pl-12 pr-2 py-2 border-none bg-transparent outline-none"
        />
      </fieldset>
      <ul className="mt-10 space-y-4">
        {searchCities?.length === 0 ? <li>No countries/cities found yet</li> : searchCities?.map((city) => <SearchedCity key={city.id} city={city} />)}
      </ul>
    </div>
  )
}

export default Search
