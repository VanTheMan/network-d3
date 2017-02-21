const React = require('react');
import NetworkChart from '../components/networkchart';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <div id='network'></div>
                <NetworkChart width="900" height="450" />
            </div>
        );
    }
}

export default App;