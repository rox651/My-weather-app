import { Weather } from '../types'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
})

export const getLocationWeather = async ({ lat, lon }: { lat: number; lon: number }): Promise<Weather> => {
  const res = await instance.get<Weather>(`forecast.json?key=${import.meta.env.VITE_APP_API_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`)
  return res.data
}
