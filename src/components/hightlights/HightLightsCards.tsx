import { useWeather } from '@/hooks'

const HightLightsCards = () => {
  const { weatherInfo } = useWeather()
  return (
    <>
      <article className="bg-[#1E213A] py-8 px-5 text-center">
        <h3 className=" text-base font-medium">Wind status</h3>
        <h4 className=" font-bold  text-6xl">
          {weatherInfo?.current.wind_mph} <span className=" font-medium  text-4xl">mph</span>
        </h4>
      </article>
      <article className="bg-[#1E213A] py-8 px-5 text-center">
        <h3 className=" text-base font-medium">Humidity</h3>
        <h4 className=" font-bold  text-6xl">
          {weatherInfo?.current.humidity} <span className=" font-medium  text-4xl">%</span>
        </h4>
      </article>
      <article className="bg-[#1E213A] py-8 px-5 text-center">
        <h3 className=" text-base font-medium">Visibility</h3>
        <h4 className=" font-bold  text-6xl">
          {weatherInfo?.current.vis_miles} <span className=" font-medium  text-4xl">Miles</span>
        </h4>
      </article>
      <article className="bg-[#1E213A] py-8 px-5 text-center">
        <h3 className=" text-base font-medium">Air Pressure</h3>
        <h4 className=" font-bold  text-6xl">
          {weatherInfo?.current.pressure_mb} <span className=" font-medium  text-4xl">mb</span>
        </h4>
      </article>
    </>
  )
}

export default HightLightsCards
