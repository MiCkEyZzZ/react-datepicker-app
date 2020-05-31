import React, {Component} from 'react'
import moment from 'moment/moment'
import classes from './DatepickerLable.module.css'

class DatepickerLabel extends Component {
    render() {
        return (
            <div className={classes.DatepickerLabel} onClick={this.props.toggleSelector}>
                { moment(this.props.value).format('DD.MM.YYYY') }
                {/*<svg className="svg-icon datePickerCaret" viewBox="0 0 20 20">*/}
                {/*    <path fill="none" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>*/}
                {/*</svg>*/}

            </div>
        )
    }
}

export default DatepickerLabel