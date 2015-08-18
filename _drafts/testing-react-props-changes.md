---
layout: blog
title:  "Testing Prop Changes in React"
heading: "Testing Prop Changes in React"
date:   2015-07-24
permalink: /blog/testing-react-prop-changes
categories: javascript react code
---

Fundamental to [React](http://facebook.github.io/react/) is the concept of `props`. Components can contain other 
components and pass down properties to them in the form of `props`. These components can then behave differently
depending on the values of these `props` which makes a good case for writing unit tests to make sure that
your components are handling changes in the values of these `props` correctly.

However, testing in isolation means that a child component in your app will be tested on it's own and not within it's 
usual parent so any changes to `props` will have to be managed manually within your tests. This article will show you
how `props` can be tested for components created with both `React.createClass()` and `React.Component`.

<!--break-->

<div class="note well well-sm">
  <strong>Note:</strong> all example code in this article is written using <a href="https://github.com/lukehoban/es6features">ES6</a> and 
  <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> with tests using the
  <a href="https://facebook.github.io/react/docs/test-utils.html">React TestUtils</a> and 
  <a href="http://jasmine.github.io/">Jasmine</a> BDD testing framework. The latest version of React
  at time of writing was <code>0.13</code>.
</div>

## React.createClass()

Prior to version 0.13, components were created in React using the [React.createClass()](http://facebook.github.io/react/docs/top-level-api.html#react.createclass) method. This made testing
changes to `props` straightforward as all components created in this way have a [setProps()](http://facebook.github.io/react/docs/component-api.html#setprops) method which can be 
passed an object to update the props of the component (much like how [setState()](http://facebook.github.io/react/docs/component-api.html#setprops) works for updating state)
and would then trigger a re-render.

As an example, I will create a simple component which just outputs the value of the `text` prop in a div:

{% highlight javascript %}
import React from 'react';

const TestComponent = React.createClass({
  render() {
    return <div>{this.props.text}</div>;
  }
});

export default MyComponent;
{% endhighlight %}

and then write a test to make sure that the text in the div is updated when the props are changed:

{% highlight javascript %}
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import TestComponent from 'path/to/TestComponent';

describe('Testing props change', () => {

  it('should update the text', () => {
  
    let instance, div, divDOM;
  
    // render an instance of the TestComponent
    instance = TestUtils.renderIntoDocument(<TestComponent text="original text" />);
    
    // find the rendered div
    div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    divDOM = React.findDOMNode(div);
    
    // the div text should be the same as the text prop
    expect(divDOM.textContent).toBe('original text');
    
    // update the props
    // setProps is asynchronous so any tests after calling it should be within a callback
    // to be certain the changes have been processed
    instance.setProps({
      text: 'new text'
    }, () => {      
      
      // find the div again
      div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
      divDOM = React.findDOMNode(div);
      
      // make sure the text has changed as expected
      expect(divDOM.textContent).toBe('new text');
      
    });
  
  });

});
{% endhighlight %}

## React.Component

React 0.13 introduced [support for ES6 classes](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html) which 

{% highlight javascript %}
import React from 'react';

class TestComponent extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}
{% endhighlight %}

{% highlight javascript %}
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

/**
 * Renders a component inside of a container
 * 
 * @param {React.Component} component The component to test
 * @param {Object} componentProps={}  The default props to set on the component
 * @return {Array} The container component as the first item, the component to test as the second item
 */
function render(component, componentProps={}) {

  class PropChangeContainer extends React.Component {
    constructor(props) {
    
      super(props);
      
      // set the state of the container from it's props (which will be the default
      // componentProps) passed to the function
      this.state = props;
      
    }
    render() {
    
      // render the component within the container and pass the container state
      // as the component props
      return React.createElement(component, this.state);
      
    }
  }

  // get both the container and component instances and return them
  let container = TestUtils.renderIntoDocument(<PropChangeContainer {...componentProps} />);
  let instance = TestUtils.findRenderedComponentWithType(container, component);

  return [
    container,
    instance
  ];

}

export default render;
{% endhighlight %}

{% highlight javascript %}
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import render from 'testutils/render';
import TestComponent from 'path/to/TestComponent';

describe('Testing props change', () => {

  it('should update the text', () => {
  
    let container, instance, div, divDOM;
  
    // render an instance of the TestComponent inside a container
    [container, instance] = render(TestComponent, { text: 'original text' });
    
    // find the rendered div
    div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    divDOM = React.findDOMNode(div);
    
    // the div text should be the same as the text prop
    expect(divDOM.textContent).toBe('original text');
    
    // update the props
    // setProps is asynchronous so any tests after calling it should be within a callback
    // to be certain the changes have been processed
    container.setState({
      text: 'new text'
    }, () => {      
      
      // find the div again
      div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
      divDOM = React.findDOMNode(div);
      
      // make sure the text has changed as expected
      expect(divDOM.textContent).toBe('new text');
      
    });
  
  });

});
{% endhighlight %}

Warning: Don't set .props.text of the React component. Instead, specify the correct value when initially creating the element or use React.cloneElement to make a new element with updated props.
