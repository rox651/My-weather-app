export function formatDate(date: string) {
  const newDate = new Date(date)

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = dayNames[newDate.getDay()]
  const monthDay = newDate.getDate()
  const month = monthNames[newDate.getMonth()]

  return `${day}, ${monthDay} ${month}`
}
