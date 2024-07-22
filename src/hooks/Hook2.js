import React from 'react'
import './tour.css'
import {
    Nav,NavItem, NavLink
    
} from 'reactstrap';
import Tours from './Tours';
import Cate from './Cate';
export default function Hook2() {
    const listCateTour = [
        { id: 1, title: "New York" },
        { id: 2, title: "London" },
        { id: 3, title: "Tokyo" },
        { id: 4, title: "Los Angeles" },
    ];
    const change = () =>{
        return(
            <></>
        )
    }
    return (
        <div>
            <div className='container tour-tab mt5'>
                <div class="headline-tour">
                    <h3>Perfect destination</h3>
                    <h2>Trending destinations</h2>
                </div>
                <button onClick={change}>
                    Click
                </button>
                <Nav>
                    {
                        listCateTour.map((item, index)=>(
                            <Cate key={index} c={item} />
                        ))
                    }
                </Nav>
                <Tours/>
            </div>
        </div>
    )
}
