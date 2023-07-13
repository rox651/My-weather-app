const TodayStatisticLoading = () => {
  return (
    <>
      <div className="h-32 w-1/4  mx-auto bg-gray-500 animate-pulse"></div>
      <div className="space-y-3">
        <div className="h-16 w-16 mx-auto bg-gray-500 animate-pulse rounded-full"></div>
        <div className=" h-10  w-1/5 mx-auto bg-gray-500 animate-pulse"></div>
      </div>
      <div className=" space-y-4">
        <div className="h-7 w-1/4  mx-auto bg-gray-500 animate-pulse"></div>
        <div className="h-7 w-1/4  mx-auto bg-gray-500 animate-pulse"></div>
      </div>
    </>
  )
}

export default TodayStatisticLoading
