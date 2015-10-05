---
layout: blog
title:  "Testing Prop Changes in React"
heading: "Testing Prop Changes in React"
date:   2015-10-06
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
  <a href="http://jasmine.github.io/">Jasmine</a> BDD testing framework. The latest released version of React
  at time of writing was <code>0.13.3</code>
</div>

## React.createClass()

Prior to version 0.13, components were created in React using the [React.createClass()](http://facebook.github.io/react/docs/top-level-api.html#react.createclass) method.
Testing changes to `props` for components created in this way is relatively straightforward as the [setProps()](http://facebook.github.io/react/docs/component-api.html#setprops) method 
is available and can be passed an object to update the props of the component (much like how [setState()](http://facebook.github.io/react/docs/component-api.html#setprops) works for updating state)
which will then trigger a re-render.

As an example, here is a test for a simple component which just outputs the value of the `text` prop in a div:

{% highlight javascript %}
import React from 'react';

const TestComponent = React.createClass({
  render() {
    return <div>{this.props.text}</div>;
  }
});

export default TestComponent;
{% endhighlight %}

and this is a test to make sure that the text in the div is updated when the props are changed:

{% highlight javascript %}
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import TestComponent from 'path/to/TestComponent';

describe('Testing props change', () => {

  it('should update the div text when the text prop is changed', () => {
  
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

React 0.13 introduced [support for ES6 classes](https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html).
The added convenience and power of being able to use native classes came at the price of losing several existing methods
from `React.createClass()` including `setProps()`. This means that another approach is required for testing prop changes on these
component types.

This solution to this is to create another component to act as a container for the component that is to be tested. The state of 
that container can be passed down to the test component as it's props and whenever changing props needs to be tested, we 
can just update the state of the container which will trigger it to re-render and pass down it's updated state as the
new props of the test component.

This example demonstrates how this solution can be implemented for a simple ES6 class component created by extending `React.Component`: 

{% highlight javascript %}
import React from 'react';

class TestComponent extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default TestComponent;
{% endhighlight %}

Setting up the container in multiple files will get tedious so this reusable helper function can be utilised  used to render the 
container and the component inside of it.

The helper function takes the component to test and it's default props as arguments. It then internally creates a container class 
that will set the default props as it's state, and render the test component inside of it, passing down the state as props.

The container is then rendered to the document and finally the function returns both the container and test component so that
the tests can have access to them both.

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
function renderInContainer(component, componentProps={}) {

  class PropChangeContainer extends React.Component {
  
    constructor(props) {
    
      super(props);
      
      // set the state of the container from it's props (which will be the default
      // componentProps) passed to the function
      this.state = props;
      
    }
    
    render() {
    
      // render the component within the container and pass the container state
      // as the component's initial props
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

Finally, the test file uses the above `renderInContainer()` function and makes changes the state of the container 
component which in turn updates the props on the test component and allows changes to it's props to be tested.

{% highlight javascript %}
import React from 'react/addons';
const TestUtils = React.addons.TestUtils;

import render from 'testutils/renderInContainer';
import TestComponent from 'path/to/TestComponent';

describe('Testing props change', () => {

  it('should update the div text when the text prop is changed', () => {
  
    let container, instance, div, divDOM;
  
    // render an instance of the TestComponent inside a container and set the default props
    [container, instance] = renderInContainer(TestComponent, { text: 'original text' });
    
    // find the rendered div inside instance
    div = TestUtils.findRenderedDOMComponentWithTag(instance, 'div');
    divDOM = React.findDOMNode(div);
    
    // the div text should be the same as the text prop
    expect(divDOM.textContent).toBe('original text');
    
    // update the state of the container
    // this will trigger a re-render on the container which will then pass down 
    // the updated state to the instance as it's new props
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

### Conclusion

These are just two approaches to testing changes to props in React. Do you use any other methods for this? Let me know 
in the comments!

And if none of this made any sense then be sure to check out the 
[React TestUtils](https://facebook.github.io/react/docs/test-utils.html) docs and the
[React Testing Tutorial](https://facebook.github.io/jest/docs/tutorial-react.html) on the Jest website
for more information on getting started with testing in React.