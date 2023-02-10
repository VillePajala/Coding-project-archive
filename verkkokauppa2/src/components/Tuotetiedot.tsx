import React, { useState } from 'react';
import './Tuotetiedot.css';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


interface Props {
    varastotilanne : string,
    toimitusaika : string,
    kappalehinta : number,
    paidanVari : (event : any) => void,
    vari : string
}

const Tuotetiedot : React.FC<Props> = (props : Props) => {

    const [koko, setKoko] = useState<string>("")
    const [maara, setMaara] = useState<number>(1)
    const [kokonaishinta, setKokonaishinta] = useState<number>(0)
    const [nayta, setNayta] = useState<boolean>(false)

    const paidanKoko = (event : any) => {
        event.preventDefault();
        setKoko(event.target.value)
    }

    const lisaaKoriin = () : void => {
        setNayta(true)
    }

    const kappalemaara = (event : any) => {
        event.preventDefault();
        if(event.target.value < 1) {
            alert("Tilattava kappalemäärä ei voi olla vähemmän kuin 1 kpl")
            setMaara(0)
        } else if (event.target.value > 20) {
            alert("Tilauksessa on yli 20 paitaa - ota yhteyttä asiakaspalveluun")
            setMaara(0)
        } else {
            setMaara(event.target.value)
            setKokonaishinta(event.target.value * props.kappalehinta)
        }
    }

    return (
        <Container>
            <h2>Tuotetiedot</h2>
            <p><b>Tietoa</b> <br /> 100 % puuvillaa</p>
            <p><b>Saatavuus:</b> <br /> {props.varastotilanne}</p>
            <p><b>Toimitusaika:</b> <br />{props.toimitusaika}</p>
            <p><b>Hinta:</b> <br />{props.kappalehinta} €/kpl</p>
            <Form className="mb-1 mt-1">
                <Form.Group controlId="">
                    <Form.Control as="select" defaultValue="Valitse väri" onChange={props.paidanVari}>
                        <option>Valitse väri</option>
                        <option>musta</option>
                        <option>valkoinen</option>
                        <option>sininen</option>
                        <option>punainen</option>
                        <option>harmaa</option>
                    </Form.Control>
                </Form.Group>
                {props.vari ? <Form.Group controlId="PaidanKoko">
                    {props.vari === "musta" || props.vari === "valkoinen" ? 
                    <Form.Control as="select" defaultValue="Valitse koko" onChange={paidanKoko}>
                        <option>Valitse koko</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </Form.Control>  : null}
                    {props.vari === "punainen" ? 
                    <Form.Control as="select" onChange={paidanKoko}>
                        <option selected >Valitse koko</option>
                        <option>S</option>
                        <option>M</option>
                    </Form.Control>  : null}
                    {props.vari !== "musta" && props.vari !== "valkoinen" && props.vari !== "punainen" ? 
                    <Form.Control as="select" onChange={paidanKoko}>
                        <option selected >Valitse koko</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </Form.Control>  : null}
                </Form.Group> : <div></div>}
                {props.vari && koko ? 
                    <div>
                        <Form.Group>
                            <Form.Control onChange={kappalemaara} type="number" defaultValue="1"/>
                        </Form.Group>
                        <h5>Ostoskori</h5>
                        {maara > 0 && maara <= 5 ? <p>Väri: {props.vari} <br />
                            koko: {koko} <br />
                            Kappalemäärä: {maara} <br />
                            Hinta: {kokonaishinta > 0 ? kokonaishinta : 10} €</p> : null}
                        {maara > 5 ? <p>Väri: {props.vari} <br />
                            koko: {koko} <br />
                            Kappalemäärä: {maara} kpl <br />
                            Alennettu hinta: {kokonaishinta > 0 ? kokonaishinta * 0.8 : 8} € (Norm. {kokonaishinta > 0 ? kokonaishinta : 10} €)</p> : null}
                        {maara > 1 ? <Button block className="mb-4" onClick={lisaaKoriin}>Lisää paidat ostoskoriin</Button> 
                        : <Button block className="mb-4" onClick={lisaaKoriin}>Lisää paita ostoskoriin</Button> }
                    </div>
                 : null}
                <Modal show={nayta}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tilauksen yhteenveto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {maara > 0 && maara <= 5 ? <p>Väri: {props.vari} <br />
                            koko: {koko} <br />
                            Kappalemäärä: {maara} <br />
                            Hinta: {kokonaishinta > 0 ? kokonaishinta : 10} € <br />
                            Toimitusaika: {props.toimitusaika} </p> : null}
                        {maara > 5 ? <p>Väri: {props.vari} <br />
                            koko: {koko} <br />
                            Kappalemäärä: {maara} kpl <br />
                            Alennettu hinta: {kokonaishinta > 0 ? kokonaishinta * 0.8 : 8} € (Norm. {kokonaishinta > 0 ? kokonaishinta : 10} € <br />
                            Toimitusaika: {props.toimitusaika}</p>  : null}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setNayta(false)}>Ok</Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </Container>
    );
  }
  
  export default Tuotetiedot;