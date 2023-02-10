import React, { Component } from 'react';
import './App.css'

interface State {
    nayta? : boolean,
    virhe? : boolean,
    prosentti? : number
    summa? : number,
}


export default class App extends Component {

    state : State = {
        nayta : false,
        virhe : false,
        prosentti : 0.15,
        summa : 100,
    }

    paivita = (event : any) : void => {
        this.setState({ 
            [event.target.name] : event.target.value ? Number(event.target.value.replace(',', '.')) : 0,
            nayta : false
        })
    }

    pihiTippi = () : void => {
        this.setState({ 
            prosentti : 0.10,
            nayta : true
        })
    }

    normaaliTippi = () : void => {
        this.setState({ 
            prosentti : 0.15,
            nayta : true
        })
    }

    reiluTippi = () : void => {
        this.setState({ 
            prosentti : 0.20,
            nayta : true
        })
    }

    

    render() {	
        let tervehdys;
        let virheIlmoitus;
        let tippi : number = this.state.summa && this.state.prosentti ? this.state.summa * this.state.prosentti : 1;
        
        if (this.state.nayta === true && this.state.prosentti) {
            if (tippi > 1 && tippi < 20) {
                tervehdys =  <div className="alert alert-info mt-2">Tipin määrä: {tippi.toFixed(1)}0 euroa ({this.state.prosentti * 100} %)</div>
            } else if (tippi <= 1) {
                tervehdys =  <div className="alert alert-info mt-2">Tipin määrä: 1.00 euroa (minimitippi)</div>
            } else if ( tippi >= 20) {
                tervehdys =  <div className="alert alert-info mt-2">Tipin määrä: 20.00 euroa (maksimitippi)</div>
            }
        }

        if (typeof this.state.summa !== 'number' || isNaN(this.state.summa) || this.state.summa <= 0 || !this.state.summa) {
            virheIlmoitus =  <div className="alert alert-danger mt-2">Summan täytyy olla numero ja enemmän kuin nolla</div>            
        }

        return (
            <div className="container">
                <h1>Tippilaskuri</h1>
                <input className="form-control mt-2 mb-2" type="text" name="summa" onChange={this.paivita} placeholder="Syötä laskun summa euroina..." />
                {tervehdys}
                {virheIlmoitus}
                <button className="btn btn-primary mr-2" onClick={() => {this.pihiTippi()}}>Pihi (10 %)</button>
                <button className="btn btn-primary mr-2" onClick={() => {this.normaaliTippi()}}>Normaali (15 %)</button>
                <button className="btn btn-primary mr-2" onClick={() => {this.reiluTippi()}}>Reilu (20%)</button>
            </div>
        )
    }
}

