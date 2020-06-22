import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags}/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  }); 
  
  it('should generate link to the correct address', () => {
    const expectedResult ='/trip/abc';
    const expectedId = 'abc';
    const expectedTags=['title', 'hello', 'text'];
    const component = shallow(<TripSummary id={expectedId} tags={expectedTags}/>);
    expect(component.find('Link').prop('to')).toEqual(expectedResult);
  });

  it('<img> has a correct src and alt', () => {
    const expectedTags = ['one', 'two', 'three'];
    const expectedSrc = 'src';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={expectedTags} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDays = 1;
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={expectedTags}/>);
  
    const renderedName = component.find('.title').text();
    expect(renderedName).toEqual(expectedName);
    expect(component.find('.details span').at(1).text().split(' ')[1]).toEqual(expectedCost);
    const date = parseInt(component.find('.details span').at(0).text().split(' ')[0]);
    expect(date).toEqual(expectedDays);
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

  it('should not throw error without tags in div', () => {
    const component = shallow(<TripSummary tags={[]} />);
    
    const checkDiv = component.find('.tags').exists();
    expect(checkDiv).toEqual(true);
  });
});