
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from'react-bootstrap/Container';
import CardUtil from '../utils/CardUtil';
import './Body.css';
import  card1 from '../../assets/card1.jpg'
import  card2 from '../../assets/card2.jpg'
import  card3 from '../../assets/card3.jpg'
import  card4 from'../../assets/card4.jpg'
import  card5 from '../../assets/card5.jpg'
import  card6 from '../../assets/card6.jpg'
import CoverImage from '../../assets/CoverImage.png';
export default function Body() {
    
  return (
    <>
    <section className='image-container-body'>
    <img src={CoverImage} alt="Cover" />
    </section>
    <section>
        <Container>
        <Row className='row'>
            <Col className='col'>
                <CardUtil title="MINI CONSOLE" desc="Ideal for everyday shortcut" image= {card1}/>
            </Col>
            <Col className='col'>
                <CardUtil title="AUDIO CONSOLE" desc="Ideal for everyday music" image= {card2}/>
            </Col>
        </Row>
        <Row className='row'>
            <Col className='col'>
                <CardUtil title="PHOTO CONSOLE" desc="Ideal for photo & video" image= {card3}/>
            </Col>
            <Col className='col'>
                <CardUtil title="VIDEO CONSOLE" desc="Ideal for video & film" image= {card4}/>
            </Col>
        </Row>
        <Row className='row'>
            <Col className='col'>
                <CardUtil title="TRACK CONSOLE" desc="Ideal for audio track" image= {card5}/>
            </Col>
            <Col className='col'>
                <CardUtil title="MUSIC CONSOLE" desc="Ideal for smooth music" image= {card6}/>
            </Col>
       </Row>
        </Container>
    </section>
    </>
  )
}
