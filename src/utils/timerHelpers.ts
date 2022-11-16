const SECONDS_PER_MINUTE = 60
const SECONDS_PER_HOUR = 3600
const SECONDS_PER_DAY = 86400

export const formatDuration = (duration: number, withSeconds?: boolean, showMinimum?: boolean): string => {
  let remaining = duration
  const days = Math.floor(remaining / SECONDS_PER_DAY)
  remaining -= days * SECONDS_PER_DAY
  const hours = Math.floor(remaining / SECONDS_PER_HOUR)
  remaining -= hours * SECONDS_PER_HOUR
  const minutes = Math.floor(remaining / SECONDS_PER_MINUTE)
  if(duration < SECONDS_PER_MINUTE) {
    return `${duration}s`
  }

  if(showMinimum) {
    if(days > 0) {
      return `${days} ${days === 1 ? 'day' : 'days'}`
    }
    if(hours > 0) {
      return `${hours} ${hours === 1 ? 'hour' : 'hours'}`
    }
    if(minutes > 0) {
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
    }
  }

  if(withSeconds) {
    remaining -= minutes * SECONDS_PER_MINUTE
    return `${days}d ${hours}h ${minutes}m ${remaining}s`
  }

  return `${days}d ${hours}h ${minutes}m`
}

export const formatBurnDuration = (duration: number): string => {
  let remaining = duration
  const days = Math.floor(remaining / SECONDS_PER_DAY)
  remaining -= days * SECONDS_PER_DAY
  const hours = Math.floor(remaining / SECONDS_PER_HOUR)

  let temp = ""

  if(days > 0) {
    temp += `${days} ${days === 1 ? 'day' : 'days'}`
  }
  if(hours > 0) {
    if(days > 0) temp += ' '
    temp += `${hours} ${hours === 1 ? 'hour' : 'hours'}`
  }

  return temp
}

export const displayInteger = (int: number): string => {
  if(int < 10) {
    return `0${int}`
  }
  return `${int}`
}

export const formatDays = (duration: number): string => {
  const days = Math.floor(duration / SECONDS_PER_DAY)
  const unit = days === 1 ? 'day' : 'days'

  return `${days} ${unit}`
}

export const secondsToDays = (durationInSeconds: number) => Math.floor(durationInSeconds / SECONDS_PER_DAY)

export const now = () => {
  return Math.floor(Date.now() / 1000)
}
