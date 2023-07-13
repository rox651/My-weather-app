import { useQuery } from 'react-query'
import { getLocationWeather } from '../lib'
import { useWeatherStore } from '../store'

const useWeather = () => {
  const { lat, lon } = useWeatherStore((state) => state.location)

  const {
    data: weatherInfo,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`country/city`, { lat, lon }],
    queryFn: () => getLocationWeather({ lat, lon }),
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
  })

  return { weatherInfo, isLoading, error }
}

export default useWeather
