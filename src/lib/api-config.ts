import { GeoData, Weather } from '../types'
import axios from 'axios'

const weatherInstance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
})

export const getLocationWeather = async ({ lat, lon }: { lat: number; lon: number }): Promise<Weather> => {
  const res = await weatherInstance.get<Weather>(`forecast.json?key=${import.meta.env.VITE_APP_API_WEATHER_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`)
  return res.data
}

const geoInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0/',
})

export const getSearchOptions = async (value: string): Promise<GeoData[]> => {
  const res = await geoInstance.get<GeoData[]>(`direct?q=${value}&limit=10&appid=${import.meta.env.VITE_APP_API_GEO_KEY}
    `)
  return res.data
}
