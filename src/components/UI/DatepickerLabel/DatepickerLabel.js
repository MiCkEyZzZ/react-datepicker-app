import React, {Component} from 'react'
import moment from 'moment/moment'
import './DatepickerLable.scss'

class DatepickerLabel extends Component {
    render() {
        return (
            <div className='datepicker-label' onClick={this.props.toggleSelector}>
                { moment(this.props.current).format('DD/MM/YYYY') }
                {/*{ moment(this.props.value).format('DD.MM.YYYY') }*/}
                <svg className="datepicker-selector__table--handler-icon datePickerCaret">
                    <path fill="none" d="M7 1a1 1 0 00-1 1v1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V2a1 1 0 00-2 0v1H8V2a1 1 0 00-1-1zM5 8h14v10a1 1 0 01-1 1H6a1 1 0 01-1-1V8z"/>
                </svg>
            </div>
        )
    }
}

export default DatepickerLabel