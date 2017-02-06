const React = require('react');
const d3 = require('d3');

class NetworkChart extends React.Component{
    render(){
        return(
            <div className="NetworkChart">
                <svg width="960" height="600"></svg>
            </div>
        );
    }
}

export default NetworkChart;