import { useEffect } from 'react'
import WeatherApp from './WeatherApp'
import { Providers } from './components'
import { useLocation } from './hooks'

function App() {
  const { setCurrentLocation } = useLocation()

  useEffect(() => {
    setCurrentLocation().catch((err) => console.log(err))
  }, [setCurrentLocation])

  return (
    <Providers>
      <WeatherApp />
    </Providers>
  )
}

export default App
