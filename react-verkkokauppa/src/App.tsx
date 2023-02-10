import React from 'react';
import Verkkokauppa from './components/Verkkokauppa';
import VerkkokauppaHeader from './components/VerkkokauppaHeader';
import VerkkokauppaMain from './components/VerkkokauppaMain';
import VerkkokauppaRightNav from './components/VerkkokauppaRightNav';
import Kirjautuminen from './components/Kirjautuminen';
import Pikaostoskori from './components/Pikaostoskori';
import VerkkokauppaFooter from './components/VerkkokauppaFooter';
import Tuotenostot from './components/Tuotenostot';


interface Props {};

interface State {
                    tunnus? : string,
                    salasana? : string,
                    login? : boolean,
                    hinta? : number,
                    tuotteidenMaara? : number,
                }

export default class App extends React.Component<Props, State> {

    constructor(props : Props) {
        super(props);
        this.state = {
                        tunnus : "",
                        salasana : "",
                        login : false,
                        hinta: 49,
                        tuotteidenMaara : 0,
                     };
    }

    paivita = (event : any) => {
        this.setState({ tunnus :  event.target.value,
                        salasana : event.target.value});
    }

    login = (event : any) => {
        event.preventDefault()
        if (this.state.tunnus === "testi" && this.state.salasana === "testi") {
            this.setState({
                login : true,
            })
        }
    }

    logOut = (event : any) => {
        event.preventDefault()
        this.setState({
            login : false,
        })
    }

    lisaaOstoskoriin = (event : any) => {
        event.preventDefault()
        this.setState({
            tuotteidenMaara : this.state.tuotteidenMaara ? this.state.tuotteidenMaara + 1 : 1
        })
    }

    tilaukseen = (event : any) => {
        alert("Siirrytään tilaukseen...")
    }

    render() {
        return (
            <Verkkokauppa>
                <VerkkokauppaHeader/>
                <div className="row">
                    <div className="col-8">
                        <VerkkokauppaMain>
                            <Tuotenostot 
                                tuotenostot={6} 
                                lisaaOstoskoriin={this.lisaaOstoskoriin} 
                                hinta={this.state.hinta} 
                                loginStatus={this.state.login}/>
                        </VerkkokauppaMain>
                    </div>
                    <div className="col-4">
                        <VerkkokauppaRightNav>
                            <Kirjautuminen 
                                tunnus={this.state.tunnus} 
                                loginStatus={this.state.login} 
                                paivita={this.paivita} login={this.login} 
                                logout={this.logOut} />
                            <Pikaostoskori 
                                tilaukseen={this.tilaukseen} 
                                hinta={this.state.hinta} 
                                ostokset={this.state.tuotteidenMaara} 
                                loginStatus={this.state.login}/>
                        </VerkkokauppaRightNav>
                    </div>
                </div>
                <VerkkokauppaFooter/>
            </Verkkokauppa>
        )
    }
}



