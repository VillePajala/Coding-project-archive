import React, { useState, useEffect } from 'react';
import './Selaa.css';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


interface Data {
  postimerkit : any[],
  dataValmis : boolean,
  virhe? : string
}

const Selaa: React.FC = () => {

const [data, setData] = useState<Data>({
  postimerkit : [],
  dataValmis : false,
  virhe : ""
})
const [alkuIndeksi, setAlkuindeksi] = useState<number>(0)
const [loppuIndeksi, setLoppuindeksi] = useState<number>(20)

useEffect (() => {

  async function haeData() {
    try {
      let result = await fetch("https://xamkbit.herokuapp.com/postimerkit")
      let postimerkit = await result.json()
      setData({...data,
        postimerkit : postimerkit,
        dataValmis : true
      })
    } catch (error) {
      setData({...data,
        dataValmis : true,
        virhe : "ei yhteyttä palvelimeen"
      })
    }
  }
haeData()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []) 

const seuraavatPostimerkit = () : void => {
    let alunMuutos = alkuIndeksi
    let lopunMuutos = loppuIndeksi

    if(loppuIndeksi < data.postimerkit.length) {
        alunMuutos = alkuIndeksi + 20
        lopunMuutos = loppuIndeksi + 20
    } else {
        alunMuutos = data.postimerkit.length - 20
        lopunMuutos = data.postimerkit.length
    }
    
    setAlkuindeksi(alunMuutos)
    setLoppuindeksi(lopunMuutos)
}

const edellisetPostimerkit = () : void => {
    let alunMuutos = alkuIndeksi
    let lopunMuutos = loppuIndeksi

    if(alkuIndeksi > 0) {
        alunMuutos = alkuIndeksi - 20
        lopunMuutos = loppuIndeksi - 20
    } else {
        alunMuutos = 0
        lopunMuutos = 20
    }
    setAlkuindeksi(alunMuutos)
    setLoppuindeksi(lopunMuutos)
}

  return (
    <Container>
        <Container className="text-center">
            {(alkuIndeksi > 0) ? 
                <Button variant="info" size="sm" className="m-4" onClick={edellisetPostimerkit}>Näytä edelliset...</Button>
                : 
                <></>
            }
            {(loppuIndeksi >= 0 && loppuIndeksi < data.postimerkit.length) ? 
                <Button variant="info" size="sm" className="m-4" onClick={seuraavatPostimerkit}>Näytä seuraavat...</Button>
                :
                <></>
            }
        </Container>
        {(data.dataValmis === false) ?
            <Spinner animation="grow" role="status">
                <span className="sr-only">Ladataan...</span>
            </Spinner>
            : (!data.virhe) ?
            <Container id="korttiRivi">
                <Row>
                    {data.postimerkit.slice(alkuIndeksi, loppuIndeksi).map((postimerkki, idx) => {
                        return <Card id="kortti" key={idx} as={Link} to={`/postimerkki/${postimerkki.postimerkki_id - 1}`}>
                                    <Card.Img id="kortinKuva" variant="top" src={postimerkki.kuvan_url}></Card.Img>
                                    <Card.Body id="kortinRunko">
                                        <Card.Title id="kortinOtsikko" className="text-center">
                                            {postimerkki.merkin_nimi}</Card.Title>
                                        <Card.Text className="text-center">
                                            <b>Ilmestynyt: </b>{postimerkki.ilmestymispaiva}<br />
                                            <b>Nimellisarvo: </b>{postimerkki.nimellisarvo} {postimerkki.valuutta}a<br />
                                        </Card.Text>
                                    </Card.Body>
                               </Card>
                    })}
                </Row>
                
            </Container> : <div>{data.virhe}</div>
        }
    </Container>
  );
}

export default Selaa;
