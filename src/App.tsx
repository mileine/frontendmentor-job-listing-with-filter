import { useContext } from 'react'
import { Filter } from './components/Filter/Filter'
import { JobsList } from './components/JobsList/JobsList'
import JobsContext from './context/JobsContext'
import './App.scss'

function App() {
  const { state } = useContext(JobsContext)

  return (
    <div className="app">
      <div className="header"></div>
      <div className="body">
        { (state.selectedFilters.length > 0) && <Filter /> }
        <JobsList />
      </div>
    </div>
  )
}

export default App
