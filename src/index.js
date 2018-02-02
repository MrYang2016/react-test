import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './components/Game'
import registerServiceWorker from './registerServiceWorker';

class Home extends Component{
    render(){
        return (
            <div className="myHome">
                <App />
                <Game />
            </div>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
