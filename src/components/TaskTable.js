import React from 'react'
import './TaskTable.css'
const TaskTable = ({ tableData }) => {

    const tableDisplay = tableData.length > 0 ?

        <ul>
            {tableData.map((incident, index) => {
                if (incident.id % 3 === 0 && incident.id % 5 === 0) {
                    return <li key={index} className="majorDamage">Coating Damage and Lightning Strike</li>
                } else if (incident.id % 3 === 0) {
                    return <li key={index} className="minorDamage">Coating Damage</li>
                } else if (incident.id % 5 === 0) {
                    return <li key={index} className="minorDamage">Lightning Strike</li>
                } else {
                    return <li key={index}>{incident.id}</li>
                }
            })}
        </ul>


        : <p>...Loading</p>

    return (
        <div>{tableDisplay}</div>
    )

};

export default TaskTable;