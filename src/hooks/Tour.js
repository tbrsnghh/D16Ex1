import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'reactstrap'
export default function Tour(props) {
    const { t } = props

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <img alt="Sample" className="card-img-top" src={t.img} />
                <span className="position-absolute top-0 start-0 bg-danger text-white mt-2 ms-2 py-1 px-2 h6 rounded">12 off</span>
                <CardBody>
                    <p>
                        <i class="fa-solid fa-map-pin"> {t.category}</i>
                    </p>
                    <CardTitle tag="h5">{t.title}</CardTitle>
                    <CardText>
                        <span>From: {t.price} </span>
                        <span class="text-decoration-line-through text-gray fs-08">$250.00</span>
                    </CardText>
                </CardBody>
            </Card>

        </div>
    )

}
