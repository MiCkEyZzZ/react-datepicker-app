import React from "react"
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from "../../../App"
import DatepickerLabel from "./DatepickerLabel"

configure({
    adapter: new Adapter
})

describe('<App />', ()  => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('Should render background', () => {
        expect(wrapper.find(DatepickerLabel))
    })
})