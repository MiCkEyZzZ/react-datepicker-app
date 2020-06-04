import React, {Component} from 'react'
import './Drawer.scss'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../UI/Backdrop/Backdrop'

const links = [
    {to: '/', label: 'Home', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
]

class Drawer extends Component {

    LinkHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li
                    key={index}
                    className='drawer-list__item'
                >
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName='active'
                        className='drawer-list__item-link'
                        onClick={this.LinkHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = ['drawer']

        if (!this.props.isOpen) {
            cls.push('close')
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul className='drawer-list__items'>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null}
            </React.Fragment>
        )
    }
}

export default Drawer