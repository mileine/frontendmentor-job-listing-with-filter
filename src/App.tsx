import { useContext } from 'react'
import { Filter } from './components/Filter/Filter'
import { JobsList } from './components/JobsList/JobsList'
import JobsContext, { JobsContextType } from './context/JobsContext'
import './App.scss'

function App() {
  const { jobState }: JobsContextType = useContext(JobsContext)

  return (
    <div className="app">
      <div className="header"></div>
      <div className="body">
        { (jobState.selectedTags.length > 0) && <Filter /> }
        <JobsList />
      </div>
    </div>
  )
}

export default App
