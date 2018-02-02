/**
 * Created by dell on 2018-02-01.
 */
import React from 'react'
import './css/Square.css'
function Square(props){
    return (
        <button onClick={() => props.onClick()}>{props.value}</button>
    )
}
export default Square;