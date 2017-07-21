
// show a weekday

let date = new Date('2017, 5, 19')
let days =  new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')

const weekday = (date) => {
  if(date instanceof Date) {
     return days[date.getDay()]
  }
    return 'This is not a valid date'
}
