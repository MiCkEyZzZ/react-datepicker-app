import React, {Component} from 'react'
import DatepickerLabel from '../../components/UI/DatepickerLabel/DatepickerLabel'
import DatepickerSelector from '../../components/UI/DatepickerSelector/DatepickerSelector'
import './Datepicker.scss'

class Datepicker extends Component {
    state = {
        value: this.props.value,
        isOpen: false
    }

    onChangeDate = (oldDate, newDate) => {
        this.setState({
            value: newDate
        })
    }

    onChangeShowSelector = (value) => {
        this.setState({
            isOpen: value
        })
    }

    toggleSelector = () => {
        this.onChangeShowSelector(!this.state.isOpen);
    }

    showSelector = () => {
        if (this.onChangeShowSelector(true)) {
            this.props.classList.remove('active')
        }
    }

    hideSelector = () => {
        this.onChangeShowSelector(false)
    }

    render() {
        let { value, isOpen } = this.state
        let { onChangeDate, showSelector, hideSelector, toggleSelector } = this
        let childProps = { value, isOpen, onChangeDate, showSelector, hideSelector, toggleSelector }

        return (
            <div className='datepicker'>
                <DatepickerLabel { ...childProps } />
                <DatepickerSelector { ...childProps } />
            </div>
        )
    }
}

export default Datepicker