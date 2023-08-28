import React from 'react'
import { Card } from'react-bootstrap'


export default function CardUtil(props) {
  return (
    <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
               {props.desc}
              </Card.Text>
            </Card.Body>
    </Card>
  )
}
