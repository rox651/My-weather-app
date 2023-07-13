import { useWeather } from '@/hooks'
import Header from './Header'
import TodayStatisticData from './TodayStatisticData'
import TodayStatisticLoading from './TodayStatisticLoading'

const TodayStatistic = () => {
  const { isLoading } = useWeather()

  return (
    <>
      <Header />
      {isLoading ? <TodayStatisticLoading /> : <TodayStatisticData />}
    </>
  )
}

export default TodayStatistic
