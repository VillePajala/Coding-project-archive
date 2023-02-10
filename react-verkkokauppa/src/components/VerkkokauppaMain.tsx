import React from 'react';
import '../index.css'

interface Props {
            tuote? : string,
            children? : any,
            hinta? : number
          }

const VerkkokauppaMain : React.FC<Props> = (props : Props) => {
    return (
        <div id="paaikkuna" className="container">
            {props.children}
        </div>
    )
}

export default VerkkokauppaMain;