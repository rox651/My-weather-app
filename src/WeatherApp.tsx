import { Forecast, HightLights, Sidebar, ToggleTemperature } from './components'

const WeatherApp = () => {
  return (
    <main className=" bg-[#100E1D] text-[#E7E7EB] min-h-screen grid lg:grid-cols-[1fr,2fr]">
      <Sidebar />
      <section className="py-10 px-5 max-w-5xl w-full mx-auto lg:px-20 grid gap-5 items-center">
        <ToggleTemperature />
        <Forecast />
        <HightLights />
        <p className=" font-medium text-sm text-center">
          Created by{' '}
          <a className=" font-bold" href="https://github.com/rox651" aria-label="Rox651">
            Rox651
          </a>{' '}
          - devChallenges.io
        </p>
      </section>
    </main>
  )
}

export default WeatherApp
