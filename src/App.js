import TaskTable from './components/TaskTable'
import { useState, useEffect } from 'react';
import { getIncidents } from './api/TaskAPI'
import './App.css'


function App() {

  const [ajaxData, setAjaxData] = useState([])
  useEffect(() => {
    getIncidents().then(result => setAjaxData(result))
  }, [])

  return (
    <div className="App">
      <h1>Incidents</h1>
      <TaskTable tableData={ajaxData} />
    </div>
  );
}

export default App;
