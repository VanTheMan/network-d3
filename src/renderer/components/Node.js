import React, { PropTypes } from 'react';

const propTypes = {
    fill: PropTypes.string,
    strokeWidth: PropTypes.number
};

const defaultProps = {
    fill: "#aaa",
    strokeWidth: 3
};

class Node extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <circle fill={this.props.fill} ></circle>
        );
    }
}

Node.propTypes = propTypes;
Node.defaultProps = defaultProps;

export default Node;