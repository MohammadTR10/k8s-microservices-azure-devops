import React from 'react'
import NavBar from './components/NavBar'
import ExercisesList from './components/ExercisesList'

const App = () => (
  <>
    <NavBar />
    <div style={{
      textAlign: 'center',
      margin: '15px 0',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      color: '#1a73e8',
      fontWeight: 'bold',
      borderRadius: '5px'
    }}>
      Abu-AlAbbas5
    </div>

    <ExercisesList />
  </>
)

export default App