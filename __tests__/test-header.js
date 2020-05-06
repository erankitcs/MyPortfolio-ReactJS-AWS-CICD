import React from 'react';
import { shallow } from 'enzyme';
import Header from '../js/header';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter()});

describe("Test header" , () => {

  it("Should be a 'Header' element", () =>{
    let component = shallow(<Header/>);
      expect(component.type()).toEqual('header');
  });
});
