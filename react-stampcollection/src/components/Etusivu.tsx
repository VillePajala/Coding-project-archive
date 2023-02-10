import React, { useState, useEffect } from 'react';
import './Etusivu.css';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

interface Data {
  postimerkit : any[],
  dataValmis : boolean,
  virhe? : string
}

const Etusivu: React.FC = () => {

  const [data, setData] = useState<Data>({
    postimerkit : [],
    dataValmis : false,
    virhe : ""
  })
  
  const [satunnaisIndeksi, setSatunnaisIndeksi] = useState<number>(0)
  
  useEffect (() => {
  
    async function haeData() {
      try {
        let result = await fetch("https://xamkbit.herokuapp.com/postimerkit")
        let postimerkit = await result.json()
        setSatunnaisIndeksi(Math.floor(Math.random() * Math.floor(postimerkit.length)))
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

  return (
    <Container>
        <Jumbotron id="jumbotron" fluid className="text-center">
        <h1>Suomalaiset postimerkit</h1>
        <h5>Tervetuloa!<br /> Tällä sivustolla pääset tutustumaan suomalaisiin <br /> postimerkkeihin vuosilta 1860-2014.</h5>
        {(data.dataValmis === false) ? 
                <Spinner id="latausMerkki" animation="grow" role="status">
                    <span className="sr-only">Ladataan...</span>
                </Spinner>
                : 
                <Container id="postimerkkiNosto" className="mt-4">
                    <Card>
                        <Card.Img className="p-5" variant="top" src={data.postimerkit[satunnaisIndeksi].kuvan_url}></Card.Img>
                        <Card.Body>
                            <Card.Title className="text-center">{data.postimerkit[satunnaisIndeksi].merkin_nimi}</Card.Title>
                            <Card.Text className="text-center">
                                <b>Ilmestynyt: </b>{data.postimerkit[satunnaisIndeksi].ilmestymispaiva}<br />
                                <b>Nimellisarvo: </b>{data.postimerkit[satunnaisIndeksi].nimellisarvo} {data.postimerkit[satunnaisIndeksi].valuutta}a<br />
                                <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container> 
            }
        </Jumbotron>
    </Container>
  );
}

export default Etusivu;
