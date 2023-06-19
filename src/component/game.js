import { useEffect, useState } from "react";

let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];



const Game = () => {
    let [xo, setXo] = useState('close');
    let iconSpan = `<span class="material-symbols-outlined">${xo}</span>`;
    let [turn, setTurn] = useState('X');
    let [score1,setScore1]=useState(0);
    let [score2,setScore2]=useState(0);
    let [gameover, setGameover] = useState(0);
    let [winner, setWinner] = useState('');
    let newArr = document.querySelectorAll('.blocks>div')
       document.title=`P1:${score1} P2:${score2}`
     function reset(){
        newArr.forEach((d)=>d.innerHTML='');
        setGameover(0);
        setTurn('x');
        setXo('close');
        setWinner('');
    }
    function checkwinner() {
        if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('close') &&
            newArr[1] != undefined && ((newArr[1]).innerHTML).includes('close') &&
            newArr[2] != undefined && ((newArr[2]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('circle') &&
            newArr[1] != undefined && ((newArr[1]).innerHTML).includes('circle') &&
            newArr[2] != undefined && ((newArr[2]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
          
        }
        else if (newArr[3] != undefined && ((newArr[3]).innerHTML).includes('close') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('close') &&
            newArr[5] != undefined && ((newArr[5]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[3] != undefined && ((newArr[3]).innerHTML).includes('circle') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('circle') &&
            newArr[5] != undefined && ((newArr[5]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
           
        }
        else if (newArr[6] != undefined && ((newArr[6]).innerHTML).includes('close') &&
            newArr[7] != undefined && ((newArr[7]).innerHTML).includes('close') &&
            newArr[8] != undefined && ((newArr[8]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10);
            
           
        }
        else if (newArr[6] !== undefined && ((newArr[6]).innerHTML).includes('circle') &&
            newArr[7] !== undefined && ((newArr[7]).innerHTML).includes('circle') &&
            newArr[8] !== undefined && ((newArr[8]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
            
           
        }
        else if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('close') &&
            newArr[3] != undefined && ((newArr[3]).innerHTML).includes('close') &&
            newArr[6] != undefined && ((newArr[6]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
           
        }
        else if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('circle') &&
            newArr[3] != undefined && ((newArr[3]).innerHTML).includes('circle') &&
            newArr[6] != undefined && ((newArr[6]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)

            
        }
       else if (newArr[1] != undefined && ((newArr[1]).innerHTML).includes('close') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('close') &&
            newArr[7] != undefined && ((newArr[7]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[1] != undefined && ((newArr[1]).innerHTML).includes('circle') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('circle') &&
            newArr[7] != undefined && ((newArr[7]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)

            
        }
        else if (newArr[2] != undefined && ((newArr[2]).innerHTML).includes('close') &&
            newArr[5] != undefined && ((newArr[5]).innerHTML).includes('close') &&
            newArr[8] != undefined && ((newArr[8]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[2] != undefined && ((newArr[2]).innerHTML).includes('circle') &&
            newArr[5] != undefined && ((newArr[5]).innerHTML).includes('circle') &&
            newArr[8] != undefined && ((newArr[8]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
            
        }
        else if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('close') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('close') &&
            newArr[8] != undefined && ((newArr[8]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[0] != undefined && ((newArr[0]).innerHTML).includes('circle') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('circle') &&
            newArr[8] != undefined && ((newArr[8]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
            
        }
        else if (newArr[3] != undefined && ((newArr[3]).innerHTML).includes('close') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('close') &&
            newArr[6] != undefined && ((newArr[6]).innerHTML).includes('close')) {
            setWinner('player 1');
            setScore1(score1+10)
            
        }
        else if (newArr[3] != undefined && ((newArr[3]).innerHTML).includes('circle') &&
            newArr[4] != undefined && ((newArr[4]).innerHTML).includes('circle') &&
            newArr[6] != undefined && ((newArr[6]).innerHTML).includes('circle')) {
            setWinner('player 2');
            setScore2(score2+10)
            
        }

    }
  
    
      
    function setIcon(element) {
        if (xo === 'circle') {
            element.innerHTML = `${iconSpan}`;
            setXo('close');
            setTurn('X')
            setGameover(gameover + 1);
             checkwinner();
             }
        else {
            element.innerHTML = `${iconSpan}`;
            setXo('circle');
            setTurn('O')
            setGameover(gameover + 1);
      
            checkwinner();
           
        }
    }
    return (
        <section className="main-container"> 

          <div className="game-container">
          <h1>Tic-Tac-Toe</h1>
            <p>TURN : {turn}</p>
            <div className="blocks">

                {
                    Arr.map(() => (
                        <div className="span1" onClick={(event) => {
                            setIcon(event.target)
                        }}> </div>
                    ))
                }

            </div>
            <div>
                {
                    (gameover === 9) && (
                        <div>
                            <h3 style={{ color: "red" }}>Game Over!!</h3>
                        </div>
                    )
                }
            </div>
          </div>

            <div className="player">

                {
                    (winner !== '') && (
                        <div>
                            <h3>Congratulations Winner is  {winner} </h3>
                            
                            
                            <br />
                        </div>)
                }
                <h3>player 1 : x  </h3>
                    <p>{score1}</p>
                
                <br />
                <h3>player 2 : O </h3>
                     <p>{score2}</p>
                    
                <br />
                <button className="btn1"onClick={reset}>Reset</button>
                <button className="btn2" onClick={()=>{window.location.reload();}}>Start New Game</button>
            </div>



        </section>
    )
}

export default Game;