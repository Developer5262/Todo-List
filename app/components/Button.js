var React = require('react');
var PropTypes = React.PropTypes;

var Button = React.createClass({
    getDefaultProps: function() {
        
    }
});

Button.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.num.isRequired,
  height: PropTypes.num.isRequired
}