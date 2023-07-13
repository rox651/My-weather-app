import { useLocation } from '@/hooks'
import { useWeatherStore } from '@/store'
import LocationIcon from './LocationIcon'

const Header = () => {
  const { setCurrentLocation } = useLocation()
  const setIsOpenSearch = useWeatherStore((state) => state.setIsOpenSearch)

  return (
    <header className="w-full self-start flex justify-between gap-2 items-center">
      <button
        onClick={() => {
          setIsOpenSearch(true)
        }}
        className=" bg-[#6E707A] px-4 py-3"
      >
        Search for places
      </button>
      <button title="Your country" aria-label="Click here choose your country" onClick={setCurrentLocation} className=" bg-[#6E707A] p-3  rounded-full">
        <LocationIcon />
      </button>
    </header>
  )
}

export default Header
