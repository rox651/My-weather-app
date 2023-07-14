import { FC } from 'react'
import { useWeatherStore } from '@/store'
import { GeoData } from '@/types'

type SearchedCityProps = {
  option: GeoData
}

const SearchedCity: FC<SearchedCityProps> = ({ option }) => {
  const setLocation = useWeatherStore((state) => state.setLocation)
  const setIsOpenSearch = useWeatherStore((state) => state.setIsOpenSearch)
  const { lat, lon } = option

  const onClickCity = () => {
    setLocation({ lat, lon })
    setIsOpenSearch(false)
  }

  return (
    <li className="border cursor-pointer border-[#616475] px-5 py-4 text-base w-full text-start" onClick={onClickCity}>
      {option.name} - {option.country}
    </li>
  )
}

export default SearchedCity
