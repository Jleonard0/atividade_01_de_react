import React, { useState } from 'react'
import { ListGroup, Card, Button, ButtonGroup } from 'react-bootstrap'

export function Carro(props) {
    const [atualizar, setAtualizar] = useState(0);

    return (
        <Card className='mt-2 mx-1' style={{ width: '18rem' }} as="li" key={props.carro.id}>
            <Card.Body>
                <Card.Title>marca {props.carro.marca}</Card.Title>
                <Card.Text>
                    id do carro {props.carro.id}
                </Card.Text>
                <Card.Text>
                    potencia: {props.carro.potencia}
                </Card.Text>
                <Card.Text>
                    ano: {props.carro.ano}
                </Card.Text>
                <Card.Text>
                    cor: {props.carro.cor}
                </Card.Text>
                <Card.Text>
                    status: {props.carro.status}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button className='m-1' variant="primary" onClick={()=>{
                    props.carro.status = "acelerando"
                    setAtualizar(1);
                }}>Acelerar</Button>
                <Button className='m-1' variant="danger" onClick={()=>{
                    props.carro.status = "desacelerando"
                    setAtualizar(-1);
                }}>Desacelerar</Button>
            </Card.Footer>
        </Card>
    )
}
