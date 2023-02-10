import React from 'react';
import '../index.css'

interface Props {
            children? : any,
          }

const VerkkokauppaRightNav : React.FC<Props> = (props : Props) => {
    return (
        <div id="oikeaSivupalkki" className="container">
            {props.children}
        </div>
    )
}

export default VerkkokauppaRightNav;