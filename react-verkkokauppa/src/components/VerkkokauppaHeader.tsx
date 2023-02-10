import React from 'react';
import '../index.css'

interface Props {
          }

const VerkkokauppaHeader : React.FC<Props> = (props : Props) => {
    return (
        <div className="container">
            <h1>--PAITAKAUPPA--</h1>
        </div>
    )
}

export default VerkkokauppaHeader;