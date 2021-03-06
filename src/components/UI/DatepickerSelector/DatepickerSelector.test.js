import React from "react"
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from "../../../App"
import DatepickerSelector from "./DatepickerSelector"

configure({
    adapter: new Adapter
})

describe('<App />', ()  => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('Should render component', () => {
        expect(wrapper.find(DatepickerSelector))
    })
})