import React, { PropTypes } from 'react';

const propTypes = {
    stroke: PropTypes.string,
    strokeWidth: PropTypes.number
};

const defaultProps = {
    stroke : "#aaa",
    strokeWidth: 3
};

class Link extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <line stroke-width={this.props.strokeWidth} stroke={this.props.stroke} ></line>
        );
    }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;