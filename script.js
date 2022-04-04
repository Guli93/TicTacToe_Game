console.log("script running");
let audio= new Audio ('music.mp3');
let ting= new Audio ('ting.mp3');
let gameOver =new Audio('gameover.mp3');
let turn ='X';
let isGameOver=false;
let Xscore=0;
let  Yscore=0;

// function to change the turn

const changeTurn=()=>{
    return turn === 'X'?'0':'X'
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 0.5, 5, 0],
        [3, 4, 5, .5, 15, 0],
        [6, 7, 8, .5, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, .3, 15, 90],
        [2, 5, 8,10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    
    ]
   
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
           
            let isGameOver=false;

            if(boxtext[e[0]].innerText === "X"){
                Xscore+=1;
                document.querySelector('.Xtxt').innerHTML=Xscore;
            }
            else{
                Yscore+=1;
                document.querySelector('.Ytxt').innerHTML=Yscore;
               
            }

            // console.log(yscore)
          document.getElementsByTagName('img')[0].style.width='200px'
          gameOver.play();
          document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw)
           rotate(${e[5]}deg)`;
           document.querySelector(".line").style.width='100%'

    // console.log(boxtext[e[0]].innerText);
        }
    })
}


 let boxes=document.getElementsByClassName('box');
//  console.log(boxes);
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
           
            if(! isGameOver){
                document.getElementsByClassName('info')[0].innerText  = "Turn for " + turn;
            } 
            checkWin();
         
        }
    })
})

// Function to reset
let reset=document.getElementById('reset');
reset.addEventListener('click',function(){
    let boxTexts =document.querySelectorAll('.boxText');
   Array.from(boxTexts).forEach(e=>{
       e.innerText="";
   
   })
   turn='X';
   document.getElementsByClassName('info')[0].innerText  = "Turn for " + turn;
   document.getElementsByTagName('img')[0].style.width='1px';
   document.querySelector(".line").style.width='1px';

})


