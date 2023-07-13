import { useWeather } from '@/hooks'
import SkeletonHightLights from './SkeletonHightLights'
import HightLightsCards from './HightLightsCards'

const HightLights = () => {
  const { isLoading } = useWeather()

  return (
    <div className=" space-y-5 ">
      <h2 className="text-2xl font-bold ">Today’s Hightlights </h2>

      <div className=" grid lg:grid-cols-2 w-full gap-10">{isLoading ? <SkeletonHightLights /> : <HightLightsCards />}</div>
    </div>
  )
}

export default HightLights
