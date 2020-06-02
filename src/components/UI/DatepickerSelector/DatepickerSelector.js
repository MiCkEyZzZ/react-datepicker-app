import React, {Component} from 'react'
import moment from 'moment/moment'
import './DatepickerSelector.scss'
import Backselector from "../Backdrop/Backselector"

class DatepickerSelector extends Component {
    state = {
        tempValue: this.props.value
    }

    clickPreviousMonth = () => {
        this.setState({
            tempValue: moment(this.state.tempValue).subtract(1, 'month').toDate()
        })
    }

    clickNextMonth = () => {
        this.setState({
            tempValue: moment(this.state.tempValue).add(1, 'month').toDate()
        })
    }

    clickDay = (e) => {
        let oldDate = this.state.tempValue
        let dataDate = e.currentTarget.getAttribute('data-day')
        let dataMonth = e.currentTarget.getAttribute('data-month')
        let newDate = moment(oldDate).month(dataMonth).date(dataDate).toDate()

        this.setState({
            tempValue: newDate
        });

        if (this.props.onChangeDate)
            this.props.onChangeDate(oldDate, newDate)

        /*
        * close selectorModal after selected date
        * */

        // if (this.props.hideSelector)
        //     this.props.hideSelector()
    }

    renderDaysInMonth() {
        let { value } = this.props
        let selectedDate = moment(value)
        let selectedTempDate = moment(this.state.tempValue)
        let daysInMonth = moment(this.state.tempValue).daysInMonth()
        let startDate = moment(this.state.tempValue).date(1)

        if (startDate.days() !== 0)
            startDate.subtract(startDate.days(), 'days')

        let rows = []
        let daysIndex = 0

        for (let j = 0; j < 6; j++) {
            let row = []

            for (let i = 0; i < 7; i++) {
                let className = 'datepicker-selector__table-days'

                if (selectedTempDate.month() !== startDate.month()) {
                    className += '--not'
                } else if (startDate.date() === selectedDate.date() && startDate.month() === selectedDate.month()) {
                    className += '--selected'
                }

                row.push(
                    <td
                        key={row}
                        onClick={this.clickDay}
                        className={className}
                        data-day={startDate.date()}
                        data-month={startDate.month()}
                    >
                        {startDate.date()}
                    </td>
                )

                startDate.add(1, 'days')
            }

            rows.push(row)
            daysIndex++
        }


        return rows.map((row, index) => {
            return (
                <tr
                    className='datepicker-selector__table--body'
                    key={index}>
                    {row.map((item) => item)}
                </tr>
            )
        })
    }

    render() {
        let className = 'datepicker-selector'

        if (this.props.isOpen) {
            className += '--active'
        }

        return (
            <React.Fragment>
            <div className={className}>
                <table className='datepicker-selector__table'>
                    <tbody className='datepicker-selector__table--wrapper'>
                        <tr className='datepicker-selector__table--handler'>
                            <td className='datepicker-selector__table--handler-currant' colSpan='5'>
                                {moment(this.state.tempValue).format('MMMM YYYY')}
                            </td>
                            <td className='datepicker-selector__table--handler-arrow'>
                                <i
                                    className='datepicker-selector__table--handler-arrow-pr'
                                    onClick={this.clickPreviousMonth}
                                >
                                </i>
                                <i
                                    className='datepicker-selector__table--handler-arrow-nxt'
                                    onClick={this.clickNextMonth}
                                >
                                </i>
                            </td>
                        </tr>
                        <tr className='datepicker-selector__table--week'>
                            <td className='datepicker-selector__table--week-day'>Mo</td>
                            <td className='datepicker-selector__table--week-day'>Tu</td>
                            <td className='datepicker-selector__table--week-day'>We</td>
                            <td className='datepicker-selector__table--week-day'>Th</td>
                            <td className='datepicker-selector__table--week-day'>Fr</td>
                            <td className='datepicker-selector__table--week-day'>Sa</td>
                            <td className='datepicker-selector__table--week-day'>Su</td>
                        </tr>
                        {this.renderDaysInMonth()}
                        <tr className='datepicker-selector__table--footer'>
                            <td className='datepicker-selector__table--footer-date'>
                                { moment(this.state.tempValue).format('DD/MM/YYYY') }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            { this.props.isOpen ?  <Backselector onClick={this.props.hideSelector} /> : null }
            </React.Fragment>
        )
    }
}

export default DatepickerSelector