import React from 'react';
import '../index.css'

interface Props {
            tuote? : string,
            hinta? : number,
            loginStatus? : boolean,
            lisaaOstoskoriin? : (event: any) => void,
            tuotenostot? : number,
          }

const Tuotenostot : React.FC<Props> = (props : Props) => {
    let hinta : number = props.hinta ? props.hinta : 49
    let alennettuHinta : number = props.hinta ? props.hinta * 0.8 : 49
    let alennuksenNaytto = <p id="caption">{alennettuHinta.toFixed(2)} €</p> 

    let paita1 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita1.jpg')} alt="paita"/>
                    <p id="caption">Chicken Dinner</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button id="ostoskoriNappi" className="btn-sm btn-primary bt-sm" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                </div>

    let paita2 = <div className="col-4"> 
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita2.jpg')} alt="paita"/>
                    <p id="caption">It's organic</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary bt-sm" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>     

    let paita3 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita3.jpg')} alt="paita"/>
                    <p id="caption">Alien Buddha</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary bt-sm" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    let paita4 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita4.jpg')} alt="paita"/>
                    <p id="caption">Everyday Mugglin'</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary bt-sm" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    let paita5 = <div className="col-4"> 
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita5.jpg')} alt="paita"/>
                    <p id="caption">Biking</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary bt-sm" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    let paita6 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita6.jpg')} alt="paita"/>
                    <p id="caption">Freedom</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>
        
    let paita7 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita7.jpg')} alt="paita"/>
                    <p id="caption">Kaala Rajini</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    let paita8 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita8.jpg')} alt="paita"/>
                    <p id="caption">Thunder</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    let paita9 = <div className="col-4">
                    <img id="paitaKuva" className="img-fluid" src={require('../img/paita9.jpg')} alt="paita"/>
                    <p id="caption">Mr. Stark</p>
                    <p id="caption" style={{textDecoration: props.loginStatus ? 'line-through' : 'none',}}>{hinta.toFixed(2)} €</p>
                    {props.loginStatus ? alennuksenNaytto : null}
                    <button className="btn-sm btn-primary" onClick={props.lisaaOstoskoriin}>Lisää ostoskoriin</button>
                 </div>

    return (
        <div className="container">
            {props.tuotenostot === 1 && <div className="row">{paita1}</div>}
            {props.tuotenostot === 2 && <div className="row">{paita1} {paita2}</div>}
            {props.tuotenostot === 3 && <div className="row">{paita1} {paita2} {paita3}</div>}
            {props.tuotenostot === 4 && <div className="row">{paita1} {paita2} {paita3} {paita4}</div>}
            {props.tuotenostot === 5 && <div className="row">{paita1} {paita2} {paita3} {paita4} {paita5}</div>}
            {props.tuotenostot === 6 && <div className="row">{paita1} {paita2} {paita3} {paita4} {paita5} {paita6}</div>}
            {props.tuotenostot === 7 && <div className="row">{paita1} {paita2} {paita3} {paita4} {paita5} {paita6} {paita7}</div>}
            {props.tuotenostot === 8 && <div className="row">{paita1} {paita2} {paita3} {paita4} {paita5} {paita6} {paita7} {paita8}</div>}
            {props.tuotenostot === 9 && <div className="row">{paita1} {paita2} {paita3} {paita4} {paita5} {paita6} {paita7} {paita8} {paita9}</div>}
        </div>
    )
}

export default Tuotenostot;