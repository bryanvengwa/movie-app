import React  , {useState} from 'react';
import dropData from './dropData';
import Paragraph from './Paragraph';

export default function DropDown(props) {
          const [displayDropDown , setDisplayDropDown ] = useState(false)
          const [buttonValue , setButtonvalue] = useState("All Genres");
          const dropDownToggler =()=>{
                    setDisplayDropDown(old=>!old)
          }
          const buttonValueChanger = (name)=>{
                           setButtonvalue(`${name}`)   
          }
          const dropElements = dropData.map((drop)=>{
                    return (
						<Paragraph
							genreSetter={props.genreSetter}
							dropDownToggler={dropDownToggler}
							buttonValueChanger={buttonValueChanger}
							key={drop.id}
							id={drop.id}
							name={drop.name}
						/>
					);
          })
     
  return (
		<>
			<div className="holder">
				<button onClick={dropDownToggler}  id="genreDropdown" className="select">
					{buttonValue}
				</button>
			{ displayDropDown &&	<div className="dropdown-container">
					{dropElements}
			
				</div>}
			</div>
		</>
  );
}
