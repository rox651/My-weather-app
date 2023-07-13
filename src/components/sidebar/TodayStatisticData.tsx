import { formatDate } from '@/utils/format-date'
import { useWeather } from '@/hooks'
import { useWeatherStore } from '@/store'

const TodayStatisticData = () => {
  const temperature = useWeatherStore((state) => state.temperature)
  const { weatherInfo } = useWeather()

  const isCelsius = temperature === 'celsius'
  const formatedDate = formatDate(weatherInfo?.location.localtime.toString() ?? '')

  return (
    <>
      <h2 className=" text-9xl font-medium">
        {isCelsius ? weatherInfo?.current.temp_c : weatherInfo?.current.temp_f}
        <span className="text-5xl font-thin text-[#A09FB1]">{isCelsius ? '℃' : '℉'}</span>
      </h2>
      <div>
        <img
          className="  mx-auto"
          src={`https:${weatherInfo?.current.condition.icon ?? ''}`}
          alt={weatherInfo?.current.condition.text ?? 'Weather icon'}
          width={64}
          height={64}
        />
        <h3 className="text-[#A09FB1] text-4xl font-semibold">{weatherInfo?.current.condition.text}</h3>
      </div>
      <aside className="text-[#88869D] text-lg font-medium space-y-4">
        <p>Today - {formatedDate}</p>
        <p className="flex justify-center items-center gap-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
            <path
              d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 16.92 6.24 19.11C6.64 19.59 7.37 19.59 7.77 19.11C9.58 16.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
              fill="#88869D"
            />
          </svg>
          {weatherInfo?.location.name} , {weatherInfo?.location.country}
        </p>
      </aside>
    </>
  )
}

export default TodayStatisticData
