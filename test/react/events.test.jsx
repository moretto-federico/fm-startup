import React, { useState } from 'react';
import { mount } from 'enzyme';
import { pick } from '../test.utils';

describe("Test components events", () => {
  test("Button click: change component state", ()=> {
    const Comp = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <button onClick={()=>{setCount(count+1)}}>Click me</button>
          <p>{`Clicked ${count} times`}</p>
        </div>
      )
    }

    const comp = mount(<Comp />);
    expect(comp.find('p').text()).toBe('Clicked 0 times');
    comp.find('button').simulate('click');
    expect(comp.find('p').text()).toBe('Clicked 1 times');
  })
  
  test("Button click: async change component state", async ()=> {
    const Comp = () => {
      const [count, setCount] = useState(0);
      return (
        <div>
          <button onClick={()=>{Promise.resolve(count+1).then(setCount)}}>Click me</button>
          <p>{`Clicked ${count} times`}</p>
        </div>
      )
    }

    const comp = mount(<Comp />);
    expect(comp.find('p').text()).toBe('Clicked 0 times');
    comp.find('button').simulate('click');
    expect(comp.find('p').text()).toBe('Clicked 0 times');
    await pick();
    expect(comp.find('p').text()).toBe('Clicked 1 times');
  })
})