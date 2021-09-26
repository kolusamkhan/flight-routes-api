import 'jsdom-global/register';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import expect from 'expect';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Footer from './index';

describe('Footer', () => {
  describe('Footer component', () => {
    it('should render without throwing an error', function () {
      const wrapper = shallow(<Footer />);
      expect(shallowToJson(wrapper)).toMatchSnapshot();
    })
    
    it('should render Footer content', function () {
        const wrapper =  mount(<div><Footer /></div>);
        expect(wrapper.text()  === "Powered by ").toBeTruthy()
      })
  })  
})