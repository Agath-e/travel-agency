import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  }); 
  
  it('generate a correct link', () => {
    const correctLink = 'abc';
    const component = shallow(<TripSummary id={correctLink} />);
    expect(component.find('abc').prop('id')).toEqual(correctLink);
  });

  it('<img> has a correct src and alt', () => {
    const expectedSrc = 'src';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 1;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);
  
    const renderedName = component.find('name').prop('name');
    expect(renderedName).toEqual(expectedName);
    expect(component.find('cost').prop('cost')).toEqual(expectedCost);
    expect(component.find(1).prop(1)).toEqual(expectedDays);
  });

  it('should throw error without props id, image, name, cost and days', () => {
    expect(() => shallow(<TripSummary id='test' image='image' name='name' cost='cost' days={1} />)).toThrow();
  });

  it('render tags in <span>', () => {
    const expectedTags = ['one', 'two', 'three'];

    const component = shallow(<TripSummary tags={expectedTags} />);
    
    for(let tag in expectedTags){
      const renderedTag = component.find('.tag').at(tag).text();
      expect(renderedTag).toEqual(expectedTags[tag]);
    }
  });

  it('should throw error without tags in div', () => {
    const component = shallow(<TripSummary tags={[]} />);
    
    const checkDiv = component.find('.tags').exists();
    expect(checkDiv).toEqual(false);
  });
});