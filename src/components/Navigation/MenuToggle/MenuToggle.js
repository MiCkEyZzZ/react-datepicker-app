import React from 'react'
import './MenuToggle.scss'

const MenuToggle = props => {
    const cls = [
        'menu-toggle'
    ]

    if (props.isOpen) {
        cls.push('menu-toggle__close')
        cls.push('open')
    } else {
        cls.push('menu-toggle__burger')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle