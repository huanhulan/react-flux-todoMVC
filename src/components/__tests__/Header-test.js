// turn off the auto mock
jest.autoMockOff();

// define the test suit
describe('Header component', function() {

    // define the test specs
    it('mount successfully', function() {
        var React = require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');
        var Header = require('../Header.jsx');
        var header = TestUtils.renderIntoDocument(<Header/>);
        expect(header.state.newTodo).toEqual("");
    });
})