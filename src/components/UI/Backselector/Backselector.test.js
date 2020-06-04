import React from "react";
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from "../../../App"
import Backselector from "./Backselector"

configure({
    adapter: new Adapter
})

describe('<App />', ()  => {

    let wrapper

    beforeEach(() => {
        wrapper = shallow(<App />)
    })

    it('Should render background', () => {
        expect(wrapper.find(Backselector))
    })

    it('Should render background', () => {
        expect(wrapper).toBeDefined()
    })
})