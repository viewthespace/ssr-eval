import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.currentUser.name}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string
  })
};
export default HelloWorld
