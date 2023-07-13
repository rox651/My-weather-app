import { FC } from 'react'
import { Forecastday } from '@/types'
import { formatDate } from '@/utils/format-date'
import { useWeatherStore } from '@/store'

type ForecastdayProps = {
  forecastDay: Forecastday
}

const ForecastContainer: FC<ForecastdayProps> = ({ forecastDay }) => {
  const temperature = useWeatherStore((state) => state.temperature)
  const forecastDayFormat = formatDate(`${forecastDay.date.toString()} 00:00`)

  const isCelsius = temperature === 'celsius'
  const maxTemp = isCelsius ? `${forecastDay.day.maxtemp_c}℃` : `${forecastDay.day.maxtemp_f}℉`
  const minTemp = isCelsius ? `${forecastDay.day.mintemp_c}℃` : `${forecastDay.day.mintemp_f}℉`

  return (
    <div className="bg-[#1E213A] py-5 px-3  grid place-items-center gap-2 flex-1">
      <h3 className=" text-base text-center">{forecastDayFormat}</h3>
      <img src={`https:${forecastDay.day.condition.icon}`} width={64} height={64} alt={forecastDay.day.condition.text} />
      <div className="lg:flex gap-2 font-medium text-base ">
        <span>{maxTemp}</span>
        <span className="text-[#A09FB1]">{minTemp}</span>
      </div>
    </div>
  )
}

export default ForecastContainer
