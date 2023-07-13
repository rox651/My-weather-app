import ToggleTemperatureButton from './ToggleTemperatureButton'

const ToggleTemperature = () => {
  return (
    <div className=" lg:fixed  right-10 top-10  flex gap-2">
      <ToggleTemperatureButton newTemperature="celsius">℃</ToggleTemperatureButton>
      <ToggleTemperatureButton newTemperature="farenheit">℉</ToggleTemperatureButton>
    </div>
  )
}

export default ToggleTemperature
