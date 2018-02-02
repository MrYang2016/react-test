/**
 * Created by dell on 2018-02-01.
 */

import React, {Component} from 'react'
import Square from './Square'
import './css/Board.css'
class Board extends Component {

    renderSquare(i) {
        return <Square value={this.props.square[i]} onClick={() => this.props.onClick(i)}/>
    }

    getSquareDiv(i) {
        return (
            <div className="btn">
                {this.renderSquare(i * 3)}
                {this.renderSquare(i * 3 + 1)}
                {this.renderSquare(i * 3 + 2)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.getSquareDiv(0)}
                {this.getSquareDiv(1)}
                {this.getSquareDiv(2)}
            </div>
        )
    }
}
export default Board;
