import React from 'react'

interface LunisolarCalendarProps {
  currentDate: Date
  onDateChange: (date: Date) => void
}

const LunisolarCalendar: React.FC<LunisolarCalendarProps> = ({ 
  currentDate, 
  onDateChange 
}) => {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handlePreviousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    onDateChange(newDate)
  }

  const handleNextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    onDateChange(newDate)
  }

  const handleToday = () => {
    onDateChange(new Date())
  }

  return (
    <div className="lunisolar-calendar">
      <div className="calendar-header">
        <h2>Calendar Navigation</h2>
        <div className="date-display">
          <span className="current-date">{formatDate(currentDate)}</span>
        </div>
      </div>
      
      <div className="calendar-controls">
        <button onClick={handlePreviousDay} className="nav-button">
          ← Previous Day
        </button>
        <button onClick={handleToday} className="today-button">
          Today
        </button>
        <button onClick={handleNextDay} className="nav-button">
          Next Day →
        </button>
      </div>
      
      <div className="calendar-info">
        <div className="info-section">
          <h3>Solar Information</h3>
          <p>Day of year: {Math.floor((currentDate.getTime() - new Date(currentDate.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))}</p>
          <p>Days until summer solstice: {Math.floor((new Date(currentDate.getFullYear(), 5, 21).getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))}</p>
        </div>
        
        <div className="info-section">
          <h3>Lunar Information</h3>
          <p>Approximate lunar phase: {getLunarPhase(currentDate)}</p>
        </div>
      </div>
    </div>
  )
}

// Simple lunar phase calculation (approximation)
function getLunarPhase(date: Date): string {
  const daysSince2000 = Math.floor((date.getTime() - new Date(2000, 0, 1).getTime()) / (1000 * 60 * 60 * 24))
  const lunarCycle = 29.53058867 // days
  const phase = (daysSince2000 % lunarCycle) / lunarCycle
  
  if (phase < 0.125) return "New Moon"
  if (phase < 0.375) return "Waxing Crescent"
  if (phase < 0.625) return "Full Moon"
  if (phase < 0.875) return "Waning Crescent"
  return "New Moon"
}

export default LunisolarCalendar