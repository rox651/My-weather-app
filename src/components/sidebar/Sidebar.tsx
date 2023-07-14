import clsx from 'clsx'
import { useWeatherStore } from '@/store'
import TodayStatistic from './TodayStatistic'
import Search from './Search'

const Sidebar = () => {
  const isOpenSearch = useWeatherStore((state) => state.isOpenSearch)

  return (
    <section
      className={clsx(
        ' bg-no-repeat bg-top bg-contain bg-[#1E213A] w-full h-screen overflow-y-auto grid   text-center py-10 px-5',
        !isOpenSearch && 'items-center'
      )}
    >
      {!isOpenSearch ? <TodayStatistic /> : <Search />}
    </section>
  )
}

export default Sidebar
