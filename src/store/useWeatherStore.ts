import { create } from 'zustand'
import { UseWeatherStoreParams } from '../types'

export const useWeatherStore = create<UseWeatherStoreParams>((set) => ({
  isOpenSearch: false,
  temperature: 'celsius',
  location: {
    lat: 48.8566,
    lon: 2.3522,
  },

  setLocation: (location) => set({ location }),
  setTemperature: (temperature) => set({ temperature }),
  setIsOpenSearch: (newState) => set({ isOpenSearch: newState }),
}))
