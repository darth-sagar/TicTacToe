import React,{useState} from 'react'
import './tictactoe.css'
import circle_icon from '../Assets/rec.png'
import cross_icon from '../Assets/close.png'

let data = ["", "", "", "", "", "", "", "", ""]

const Tictactoe = () => {
    let [count, setCount] = useState(0)
    let [lock, setLock] = useState(false)
    let [winner, setWinner] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [circleWins, setCircleWins] = useState(0);
    const [crossWins, setCrossWins] = useState(0);
    const [draws, setDraws] = useState(0);
    const [totalGames, setTotalGames] = useState(0);

    const toggle =(w,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            data[num] = "Circle (0)"
            setCount(count+1)
            w.target.innerHTML = `<img src=${circle_icon} alt="circle" className="circle"/>`
        }
        else{
            data[num] = "Cross (X)"
            setCount(count+1)
            w.target.innerHTML = `<img src=${cross_icon} alt="cross" className="cross"/>`
        }
        check();
    }

    const check = () => {{
        if(data[0] === data[1] && data[1] === data[2] && data[2] !== "")
            won(data[0]);
        
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== "")
            won(data[3]);
        
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== "")
            won(data[6]);
        
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== "")
            won(data[0]);
        
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== "")
            won(data[1]);
        
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== "")
            won(data[2]);
        
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== "")

            won(data[0]);
        
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== "")
            won(data[2]);
        else if(!data.includes(""))
            won("Draw");
        
    }}
    const won =(winner)=>{
        setLock(true);
        setWinner(winner);
        setShowModal(true);
        if (winner === "Circle (0)") {
            setCircleWins(circleWins + 1);
        } else if (winner === "Cross (X)") {
            setCrossWins(crossWins + 1);
        } else if (winner === "Draw") {
            setDraws(draws + 1);
        }
        setTotalGames(totalGames + 1);
    }
    const reset = () => {
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setLock(false);
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box) => (box.innerHTML = ""));
    };

  return (
    <div className="tictactoe_container">
        <h1 className="header_line">TicTacToe Game</h1>
        <div className="scoreboard">
            <h3>Scoreboard</h3>
            <p>Circle (0): {circleWins}</p>
            <p>Cross (X): {crossWins}</p>
            <p>Draws: {draws}</p>
            <p>Total Games: {totalGames}</p>
        </div>
        <div className="board">
            <div className="row-1">
                <div className="boxes" onClick={(w)=>{toggle(w,0)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,1)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,2)}}></div>
            </div>
            <div className="row-1">
                <div className="boxes" onClick={(w)=>{toggle(w,3)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,4)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,5)}}></div>
            </div>
            <div className="row-1">
                <div className="boxes" onClick={(w)=>{toggle(w,6)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,7)}}></div>
                <div className="boxes" onClick={(w)=>{toggle(w,8)}}></div>
            </div>
        </div>
        <button className="reset" onClick={reset}>Reset</button>
      
        {showModal && (
                <div className="modal">
                    <div className="modal_content">

                        {winner==="Draw"?(
                            <h2>It's a Draw!</h2>
                        ):(
                            <h2>{winner} Wins!</h2>
                        )}
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Tictactoe