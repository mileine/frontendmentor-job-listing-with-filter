import { useContext } from 'react'
import { JobFilter } from './components/JobFilter/JobFilter'
import { JobsList } from './components/JobsList/JobsList'
import JobsContext from './context/JobsContext'
import './App.scss'

function App() {
  const { state } = useContext(JobsContext)

  return (
    <div className="app">
      <div className="header"></div>
      <div className="body">
        { (state.selectedFilters.length > 0) && <JobFilter /> }
        <JobsList />
      </div>
    </div>
  )
}

export default App
