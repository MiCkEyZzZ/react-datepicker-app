import React, {Component} from 'react'
import DatepickerLabel from '../../components/UI/DatepickerLabel/DatepickerLabel'
import DatepickerSelector from '../../components/UI/DatepickerSelector/DatepickerSelector'
import './Datepicker.scss'

class Datepicker extends Component {
    state = {
        value: this.props.value,
        isSelectorActive: false
    }

    onChangeDate = (oldDate, newDate) => {
        this.setState({
            value: newDate
        });
    };

    onChangeShowSelector = value => {
        this.setState({
            isSelectorActive: value
        })
    }

    toggleSelector = () => {
        this.onChangeShowSelector(!this.state.isSelectorActive)
    }

    showSelector = () => {
        this.onChangeShowSelector(true)
    }

    hideSelector = () => {
        this.onChangeShowSelector(false)
    }

    render() {
        let {value, isSelectorActive} = this.state
        let {onChangeDate, showSelector, hideSelector, toggleSelector} = this
        let childProps = {value, isSelectorActive, onChangeDate, showSelector, hideSelector, toggleSelector}

        return(
            <div className="datepicker">
                <DatepickerLabel {...childProps}/>
                <DatepickerSelector {...childProps}/>
            </div>
        )
    }
}

export default Datepicker