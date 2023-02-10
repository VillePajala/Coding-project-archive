import React, {  useState} from 'react';
import './Tuotekuva.css';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'

interface Props {
    paitaIndeksi : number
}


const Tuotekuva: React.FC<Props> = (props : Props) => {

    const [index, setIndex] = useState<number>(props.paitaIndeksi);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex : number, event : any) => {
      setIndex(selectedIndex);
      setDirection(event.direction);
    };

    return (
        <Carousel activeIndex={props.paitaIndeksi}>
            <Carousel.Item>
                <Image fluid
                src={require("../img/paita1.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid
                src={require("../img/paita2.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid
                src={require("../img/paita3.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid
                src={require("../img/paita4.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <Image fluid
                src={require("../img/paita5.jpg")}
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
  }
  
  export default Tuotekuva;