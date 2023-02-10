import React, { useState, useEffect } from 'react';
import './Postimerkki.css';
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

interface Props {
    match : any
}

interface Data {
    postimerkit : any[],
    dataValmis : boolean,
    virhe? : string
  }

const Postimerkki: React.FC<Props> = (props) => {

    const [data, setData] = useState<Data>({
        postimerkit : [],
        dataValmis : false,
        virhe : ""
      })
      
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
      
  return (
    <Container id="postimerkkiNosto">
        <Button variant="info" className="m-4 btn-sm" as={Link} to="/selaa/">Takaisin</Button>
        {(data.dataValmis === false) ? 
            <Spinner id="latausMerkki" animation="grow" role="status">
                <span className="sr-only">Ladataan...</span>
            </Spinner>
            : 
            <Container className="mt-4">
                <Card>
                    <Card.Img className="p-5" variant="top" src={data.postimerkit[props.match.params.indeksi].kuvan_url}></Card.Img>
                    <Card.Body>
                        <Card.Title className="text-center">{data.postimerkit[props.match.params.indeksi].merkin_nimi}</Card.Title>
                        <Card.Text className="text-center">
                            <b>Asiasanat: </b>{data.postimerkit[props.match.params.indeksi].asiasanat.replace(/ /g, ", ")} <br />
                            <b>Ilmestynyt: </b>{data.postimerkit[props.match.params.indeksi].ilmestymispaiva} <br />
                            <b>Käytön päättyminen: </b>{data.postimerkit[props.match.params.indeksi].kayton_paattyminen} <br />
                            <b>Merkin väri: </b>{data.postimerkit[props.match.params.indeksi].merkin_vari} <br />
                            <b>Painopaikka: </b>{data.postimerkit[props.match.params.indeksi].painopaikka} <br />
                            <b>Painomäärä: </b>{data.postimerkit[props.match.params.indeksi].painosmaara} <br />
                            <b>Merkin väri: </b>{data.postimerkit[props.match.params.indeksi].merkin_vari} <br />
                            <b>Postimerkin id: </b>{data.postimerkit[props.match.params.indeksi].postimerkki_id} <br />
                            <b>Taiteilija: </b>{data.postimerkit[props.match.params.indeksi].taiteilija ? data.postimerkit[props.match.params.indeksi].taiteilija : "tuntematon" } <br />
                            <b>Nimellisarvo: </b>{data.postimerkit[props.match.params.indeksi].nimellisarvo} {data.postimerkit[props.match.params.indeksi].valuutta}a
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container> 
        }
        <br />
        <br />
        <br />
    </Container>
  );
}

export default Postimerkki;
