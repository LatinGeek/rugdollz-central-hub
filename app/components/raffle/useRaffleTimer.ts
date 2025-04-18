import { useState, useEffect } from 'react'

interface TimerState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isEnded: boolean
  isStarted: boolean
  status: 'programmed' | 'started' | 'ended'
}

export function useRaffleTimer(startDate: string, endDate: string) {
  const [timer, setTimer] = useState<TimerState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
    isStarted: false,
    status: 'programmed'
  })

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const start = new Date(startDate)
      const end = new Date(endDate)

      // Determine status based on current time
      let status: 'programmed' | 'started' | 'ended'
      let targetDate: Date
      let isEnded = false
      let isStarted = false

      if (now < start) {
        status = 'programmed'
        targetDate = start
      } else if (now >= start && now < end) {
        status = 'started'
        targetDate = end
        isStarted = true
      } else {
        status = 'ended'
        targetDate = end
        isEnded = true
        isStarted = true
      }

      const diff = targetDate.getTime() - now.getTime()

      if (diff <= 0 && status !== 'ended') {
        setTimer({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isEnded,
          isStarted,
          status
        })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setTimer({
        days,
        hours,
        minutes,
        seconds,
        isEnded,
        isStarted,
        status
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [startDate, endDate])

  return timer
} 