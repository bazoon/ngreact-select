var Select = require('react-select');
var React = require("react");



var AuthorsSelect = React.createClass({
  render: function() {
  return (
        <div>
          
          <Select
            name="authors"
            options={this.props.authors}
            onChange={this.props.onAuthorChange}
          />
        </div>
    );
  }
});

var BooksSelect = React.createClass({
  
  render: function() {
    return (
        <div>
        <Select
          name="books"
          options={this.props.books}
          onChange={this.props.onBookChange}
        />
        </div>
    );
  }
});



angular.module('myApp')
  .value('AuthorsSelect', AuthorsSelect)
  .value('BooksSelect', BooksSelect)
  