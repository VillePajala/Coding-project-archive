import React from 'react';
import '../index.css'

interface Props {
          }

const VerkkokauppaFooter : React.FC<Props> = (props : Props) => {
    return (
        <div id="footer" className="container">
            <p>
                T-Kauppa <br />
                Y-tunnus: 3423290-6 <br />
                Osoite: Paitulinkuja 8, 05670 Ypäjä <br />
                Puh: 555-1234567 <br />
                asiakaspalvelu@tkauppa.fi <br /><br />
                Copyright © 2019 T-kauppa <br />
            </p>
        </div>
    )
}

export default VerkkokauppaFooter;