import React from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/rec.png'
import cross_icon from '../Assets/close.png'

const Tictactoe = () => {
  return (
    <div className="tictactoe_container">
        <h1 className="header_line">TicTacToe Game</h1>
        <div className="board">
            <div className="row-1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row-1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row-1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default Tictactoe