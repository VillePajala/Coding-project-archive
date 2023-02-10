import React from 'react';
import '../index.css'

interface Props {
            children? : any
          }

const Verkkokauppa : React.FC<Props> = (props : Props) => {
    return (
        <div id="kehys" className="container">
            {props.children}
        </div>
    )
}

export default Verkkokauppa;