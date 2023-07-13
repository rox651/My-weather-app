import { useWeatherStore } from '@/store'

const useLocation = () => {
  const setLocation = useWeatherStore((state) => state.setLocation)

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const getMyLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject, options))
  }

  const setCurrentLocation = async () => {
    try {
      const position = await getMyLocation()
      const crd = position.coords

      setLocation({ lat: crd.latitude, lon: crd.longitude })
    } catch (err) {
      console.error(err)
    }
  }

  return { setCurrentLocation }
}

export default useLocation
