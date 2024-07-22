import React, { useRef, useState } from 'react'
import './style.css'
import {
    Button,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse, Row, Col,
    Container,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import img1 from './logo192.png'
export default function Hook1() {
    const [modal, setModal] = useState(false)
    const toggle=()=>setModal(!modal)

    const [flag, setFlag] = useState(false)
    console.log(flag)
    const capyRef = useRef()
    const [count, setCount] = useState(10)
    const handle_count = () => {
        setCount(count - 1)
        setCount(preState => preState - 1)
        setCount(preState => preState - 1)
    }
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <>
            <img src={img1}></img>
            <Container>
                <Row>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                    <Col lg={3} md={4} am={6} xs={6} className="border p-5"></Col>
                </Row>
            </Container>

            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            <Navbar color="faded" light>
                <NavbarBrand href="/" className="me-auto">
                    CApyBara
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                CApy CapY
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <h1>Count: {count}</h1>
            <Button color="danger" onClick={handle_count}>Count down</Button>
            <div className={flag ? "hook1 active" : "hook1"}>
                <h1>Xin chao</h1>
                <p>Flag : {flag ? "true" : "false"}</p>

            </div>
            <div className="capy" ref={capyRef}>

            </div>
            <button onClick={() => {
                setFlag(!flag)
                capyRef.current.classList.toggle("active")
            }}>
                Change Flag
            </button>
        </>

    )
}
