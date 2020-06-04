import React, {Component} from 'react'
import './Home.scss'
import { NavLink } from 'react-router-dom'

class Home extends Component {
    renderHome() {
        return ['DatePicker'].map((datepicker, index) => {
            return (
                <li
                    key={index}
                    className='home-list__item'
                >
                    <NavLink
                    className='home-list__item-link'
                        to={'/datepicker/' + datepicker}
                    >
                        Тестовое задание {datepicker}
                    </NavLink>

                </li>
            )
        })
    }

    render() {
        return (
            <div className='home'>
                <h1 className='home-page'>Home page</h1>
                <ul className='home-list__items'>
                    {this.renderHome()}
                </ul>
            </div>
        )
    }
}

export default Home