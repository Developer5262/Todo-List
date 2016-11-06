var React = require('react');

var styles = {
    header: {
        marginTop: 20,
        color: 'lightgreen',
        textAlign: 'center',
        fontSize: '6rem'
    },
    footer: {
        position: 'absolute',
        bottom: 0
    }
}

var Main = React.createClass({
    render: function() {
        return (
            <div style = {styles.header_container}>
                <h1 style = {styles.header}>Todo List</h1>
                {this.props.children}
                <div style = {styles.footer}>
                    &copy; All rights reserved. Property of the CT Squad.
                </div>
            </div>
        )
    }
});

module.exports = Main;