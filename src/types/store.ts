export interface UseWeatherStoreParams {
  isOpenSearch: boolean
  temperature: string
  location: LocationStore
  setLocation: (location: LocationStore) => void
  setTemperature: (temperature: string) => void
  setIsOpenSearch: (newState: boolean) => void
}
export interface LocationStore {
  lat: number
  lon: number
}
