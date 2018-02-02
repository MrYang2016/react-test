/**
 * Created by dell on 2018-02-02.
 */
import React, {Component} from 'react'
import Board from './Board'
import {getResult} from '../common'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {squares: []}
            ],
            xIsNext: true
        }
    }

    handleClickBtn(i) {
        let history = this.state.history,
            current = history[history.length - 1],
            square = current.squares.slice();
        if (square[i] || getResult(square))return false;
        square[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({xIsNext: !this.state.xIsNext, history: history.concat([{squares: square}])});
    }

    jumpTo(i) {
        console.log('!!!');
    }

    render() {
        let history = this.state.history,
            current = history[history.length - 1],
            square = current.squares.slice();

        let olList = history.map((val, i) => {
            let str = i !== 0 ? 'Go to move #' + i : 'Go to game start';
            return (
                <li>
                    <button onClick={() => this.jumpTo(i)}>{str}</button>
                </li>
            )
        });

        let status, winner = getResult(square);
        if (winner) {
            status = 'Winner:' + winner;
        } else {
            status = 'Next player:' + (this.state.turns ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <Board square={square} onClick={this.handleClickBtn.bind(this)}/>
                <ol>{olList}</ol>
            </div>
        )
    }
}
export default Game;