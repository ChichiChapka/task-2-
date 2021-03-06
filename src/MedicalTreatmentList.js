//MedicalTreatmentList.js
import React from 'react';

function Treatments (props) {
  const treatmentRecords = props.treatmentsJson;
  const items = JSON.parse(treatmentRecords);

  const listTreatments = items.map((item)=> (
    <ul>
      treatment {item.id}, {item.name}
    </ul>
  ));

  return (
    <div>
      Treatment records are: {treatmentRecords}
      <br/> <br/>
      {listTreatments}
      <br />
    </div>
  );
}
export default Treatments;

