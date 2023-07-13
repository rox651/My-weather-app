import { useWeather } from '@/hooks'
import ForecastContainer from './ForecastContainer'
import ForecastLoading from './ForecastLoading'

const Forecast = () => {
  const { weatherInfo, isLoading } = useWeather()
  const forecastDays = weatherInfo?.forecast.forecastday || []

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {isLoading ? <ForecastLoading /> : forecastDays.map((forecastDay, index) => <ForecastContainer key={index} forecastDay={forecastDay} />)}
    </div>
  )
}

export default Forecast
