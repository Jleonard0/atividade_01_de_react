import { React, useState, useEffect, useCallback, useRef } from 'react'
import { Button, Modal, Form, ListGroup } from 'react-bootstrap'
import Carro from '../Carro'


class carro {
    constructor(potencia, ano, marca, cor) {
        this.id = carro.counter;
        this.potencia = potencia
        this.ano = ano
        this.marca = marca
        this.cor = cor
        this.status = "parado"
    }
    static get counter() {
        carro._counter = (carro._counter || 0) + 1;
        return carro._counter;
    }
}

function FormTransporte(props) {
    const [showModal, setShowModal] = useState(true);
    const [transportes, setTransportes] = useState(props.transportes);

    useEffect(() => {
        props.parentShowSetter(showModal);
    }, [props.parentShowSetter, showModal]);

    const onSubmit = (event) => {
        event.preventDefault()
        const form = $(event.target)
        const potencia = form.find('input[name="potencia"]').val()
        const ano = form.find('input[name="ano"]').val()
        const marca = form.find('input[name="marca"]').val()
        const cor = form.find('input[name="cor"]').val()
        setTransportes(
            transportes.push(new carro( potencia, ano, marca, cor ))
        )
        setShowModal(false)
    }

    return (
        <Form id={props.id} onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formGroupPotencia">
                <Form.Label>Potencia do veículo em cavalos</Form.Label>
                <Form.Control name="potencia" type="number" min="1" max="1600" placeholder="Potencia" required={true} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupAno">
                <Form.Label>Ano do veículo</Form.Label>
                <Form.Control name="ano" type="number" min="1900" max="2099" step="1" placeholder="Ano" required={true} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupMarca">
                <Form.Label>Marca do veículo</Form.Label>
                <Form.Control name="marca" type="text" placeholder="Marca" required={true} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupCor">
                <Form.Label>Cor do veículo</Form.Label>
                <Form.Control name="cor" type="color" placeholder="cor" required={true} />
            </Form.Group>
        </Form>
    )
}

export const Transporte = () => {
    const [show, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const [transportes, setTransportes] = useState([]);

    const wrapperSetShowModal = useCallback(
        val => {
            setShowModal(val);
        },
        [setShowModal]
    );

    var carros = transportes.map(carro => <Carro carro={carro}></Carro>)

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Adicionar transporte
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar transporte</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormTransporte id="formTransporte" transportes={transportes} parentShowSetter={wrapperSetShowModal} show={show}></FormTransporte>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" type="submit" form="formTransporte">
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
            <ListGroup as="ul" className='d-flex flex-row flex-wrap'>
                {carros}
            </ListGroup>
        </>
    )
}
