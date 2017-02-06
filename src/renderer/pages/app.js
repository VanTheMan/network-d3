const React = require('react');
import NetworkChart from '../components/networkchart';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <NetworkChart />
            </div>
        );
    }
}

export default App;