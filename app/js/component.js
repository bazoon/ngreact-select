var Select = require('react-select');
var React = require("react");

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

function logChange(val) {
    console.log("Selected: " + val);
}



var HelloComponent = React.createClass({
  
  render: function() {
    return (
      <Select
        name="form-field-name"
        value="one"
        options={options}
        onChange={logChange}
      />
    );
  }
});
angular.module('myApp')
  .value('HelloComponent', HelloComponent);