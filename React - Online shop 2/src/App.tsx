import React, {useState} from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/Header'
import Footer from './components/Footer'
import Tuotekuva from './components/Tuotekuva'
import Tuotetiedot from './components/Tuotetiedot'


const App: React.FC = () => {

    const [varastotilanne, setVarastotilanne] = useState<string>("Varastossa")
    const [toimitusaika, setToimitusasika] = useState<string>("1-3 päivää")
    const [kappalehinta, setKappalehinta] = useState<number>(10)
    const [paitaIndeksi, setPaitaIndeksi] = useState<number>(0)
    const [vari, setVari] = useState<string>("")


    const paidanVari = (event : any) => {
        event.preventDefault();
        setVari(event.target.value)
        if(event.target.value === "musta") {
            setPaitaIndeksi(4)
        } else if(event.target.value === "valkoinen") {
            setPaitaIndeksi(3)
        } else if(event.target.value === "sininen") {
            setPaitaIndeksi(0)
        } else if(event.target.value === "punainen") {
            setPaitaIndeksi(1)
        } else if(event.target.value === "harmaa") {
            setPaitaIndeksi(2)
        }
    }

    return (
        <Container>
            <Header />
                <Row>
                    <Col>
                        <Tuotekuva
                            paitaIndeksi={paitaIndeksi}
                        />
                    </Col>
                    <Col>
                        <Tuotetiedot
                            varastotilanne={varastotilanne}
                            toimitusaika={toimitusaika}
                            kappalehinta={kappalehinta}
                            paidanVari={paidanVari}
                            vari={vari}
                        />
                    </Col>
                </Row>
            <Footer />
        </Container>
    );
}

export default App;
