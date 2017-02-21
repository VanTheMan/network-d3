import React, { PropTypes } from 'react';
import Link from './Link';
const d3 = require('d3');

const propTypes = {
    data: PropTypes.object,
    colors: PropTypes.func
};

const defaultProps = {
    data: [],
    colors: d3.scaleOrdinal(d3.schemeCategory20)
};

class DataSeries extends React.Component {
    render(){
        let { data, colors } = this.props;
        return(
            <g>

            </g>
        );
    }
}

DataSeries.propTypes = propTypes;
DataSeries.defaultProps = defaultProps;

export default DataSeries;