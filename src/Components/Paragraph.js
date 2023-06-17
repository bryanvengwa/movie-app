import React from 'react'

export default function Paragraph(props) {
         
  return (
		<>
			<p onClick={()=>{ props.buttonValueChanger(props.name); props.dropDownToggler(); props.genreSetter(props.id) }} >{props.name}</p>
		</>
  );
}
