import React, { useState } from 'react'
import LunisolarCalendar from './components/LunisolarCalendar'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <div className="app">
      <header className="app-header">
        <h1>Lunisolar Calendar 2022</h1>
        <p>
          Explore the lunar and solar cycles throughout the year
        </p>
      </header>
      
      <main className="app-main">
        <LunisolarCalendar 
          currentDate={currentDate} 
          onDateChange={setCurrentDate} 
        />
      </main>
      
      <footer className="app-footer">
        <p>Built with React {React.version}</p>
      </footer>
    </div>
  )
}

export default App