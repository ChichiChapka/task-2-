//App.js
import React from "react";
import Treatments from "./MedicalTreatmentList";

export default function App() {

  const jsonRecords =[
    {id:'p24', name:'Apple2'},
     {id:'d67', name: 'ball'},
  ];
  const recordsText = JSON.stringify (jsonRecords);
  return (
    <div>
      <Treatments treatmentsJson = {recordsText} />
    </div>
  );

  return (
    <ul> Filtered records:
      { 
       jsonRecords
        .filter(jsonRecord => jsonRecord.name === 'Apple2')
        .map(filteredJsonRecord => (
        <tr> 
          <td>{filteredJsonRecord.id}</td>
          <td>{filteredJsonRecord.name}</td>)
          </tr>
        ))
      }
    </ul>
 );

    }
  



