import { FC } from 'react'
import { City } from '@/types'
import { useWeatherStore } from '@/store'

type SearchedCityProps = {
  city: City
}

const SearchedCity: FC<SearchedCityProps> = ({ city }) => {
  const setLocation = useWeatherStore((state) => state.setLocation)
  const setIsOpenSearch = useWeatherStore((state) => state.setIsOpenSearch)
  const { lat, lon } = city.coord

  const onClickCity = () => {
    setLocation({ lat, lon })
    setIsOpenSearch(false)
  }

  return (
    <li className="border cursor-pointer border-[#616475] px-5 py-4 text-base w-full text-start" onClick={onClickCity}>
      {city.name} - {city.country}
    </li>
  )
}

export default SearchedCity
