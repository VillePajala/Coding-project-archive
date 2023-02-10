import React from 'react';
import '../index.css'

interface Props {
            children? : any,
            ostokset? : number,
            hinta? : number,
            loginStatus? : boolean,
            tilaukseen? : (event : any) => void
          }

const Pikaostoskori : React.FC<Props> = (props : Props) => {

    let alentamatonHinta : number = props.hinta ? props.hinta : 49
    let alennettuhinta : number = props.hinta ? props.hinta * 0.8 : 49
    let tuotteidenMaara : number = props.ostokset ? props.ostokset : 1
    let kokonaisHintaAlentamattomana : number = alennettuhinta * tuotteidenMaara
    let kokonaisHintaAlennettuna = alentamatonHinta * tuotteidenMaara

    let tyhjaKori = <div>
                        <p id="caption">Ostoskorissasi on {props.ostokset} tuotetta,</p>
                        <p id="caption">loppusumma:<br /> {props.loginStatus ? kokonaisHintaAlentamattomana.toFixed(2) : kokonaisHintaAlennettuna.toFixed(2)} €</p>
                        <button className="btn-sm btn-primary bt-sm" onClick={props.tilaukseen}>Lisää ostoskoriin</button>

                    </div>
    let taytettaKorissa = <p id="caption">Ostoskorissasi ei ole vielä yhtään tuotetta</p>

    return (
        <div id="pikaOstoskori" className="container">
            Pikaostoskori
            {props.ostokset === 0 ? taytettaKorissa : tyhjaKori}
            
        </div>
    )
}

export default Pikaostoskori;