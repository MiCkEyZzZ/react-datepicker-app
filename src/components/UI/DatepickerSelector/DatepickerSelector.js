import React, {Component} from 'react'
import moment from 'moment/moment'
import classes from './DatepickerSelector.module.css'

class DatepickerSelector extends Component {
    state = {
        tempValue: this.props.value
    }

    render() {
        return (
            <div className={classes.DatepickerSelector}>
                <table className={classes.DatepickerSelectorTable}>
                    <tr className={classes.DatepickerSelectorTableHandler}>
                        <td className={classes.DatepickerSelectorTableHeaderCurrantMonth} colSpan='5'>
                            {moment(this.state.tempValue).format('MMMM YYYY')}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className={classes.DatepickerSelectorTableDayHeader}>
                        <td>Mo</td>
                        <td>Tu</td>
                        <td>We</td>
                        <td>Th</td>
                        <td>Fr</td>
                        <td>Sa</td>
                        <td>Su</td>
                    </tr>
                    <tr>
                        <td>
                            {moment(this.state.tempValue).format('DD.MM.YYYY')}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default DatepickerSelector