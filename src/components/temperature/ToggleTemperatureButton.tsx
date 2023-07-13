import { useWeatherStore } from '@/store'
import clsx from 'clsx'
import { FC } from 'react'

type ToggleTemperatureButtonProps = {
  children: React.ReactNode
  newTemperature: string
}

const ToggleTemperatureButton: FC<ToggleTemperatureButtonProps> = ({ children, newTemperature }) => {
  const temperatureState = useWeatherStore((state) => state.temperature)
  const setTemperature = useWeatherStore((state) => state.setTemperature)

  const isTheSameTemperature = temperatureState === newTemperature
  return (
    <button
      className={clsx(
        ' text-[#E7E7EB] bg-[#585676]   text-lg   transition-colors  font-bold w-10 h-10 p-1 rounded-full',
        isTheSameTemperature && '!text-[#110E3C] bg-[#E7E7EB]'
      )}
      onClick={() => {
        setTemperature(newTemperature)
      }}
    >
      {children}
    </button>
  )
}

export default ToggleTemperatureButton
