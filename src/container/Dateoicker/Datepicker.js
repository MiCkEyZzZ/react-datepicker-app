import React, {Component} from 'react'
import classes from './Datepicker.module.css'
import DatepickerLabel from '../../components/UI/DatepickerLabel/DatepickerLabel'
import DatepickerSelector from '../../components/UI/DatepickerSelector/DatepickerSelector'

class Datepicker extends Component {
    render() {
        return(
            <div className={classes.Datepicker}>
                <DatepickerLabel />
                <DatepickerSelector />
            </div>
        )
    }
}

export default Datepicker