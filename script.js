let btn=document.querySelectorAll("#btn");
let reset=document.querySelector(".reset");
let msg=document.querySelectorAll(".mesg");

for(let b of btn){
    b.innerText="";
}

let w=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let count=0;
let t_o=true;

btn.forEach((b)=>{
    b.addEventListener("click",()=>{
        if(t_o){
            b.innerText="O";
            t_o=false;
        }
        else{
            b.innerText='X';
            t_o=true;
        }
        count++;
        b.disabled=true;
        let win=checkWinner();
        console.log("count="+count+" win="+win);
        if(count===9&&!win){
            display("Match Tied")
            console.log("Match Tied");
        }
    });
});

reset.addEventListener("click",(res)=>{
    count=0;
    t_o=true;
    display("");
    btn.forEach((b)=>{
        b.disabled=false;
        b.innerText="";
    });
});

function checkWinner(){
    for(a of w){
        let p1=btn[a[0]].innerText;
        let p2=btn[a[1]].innerText;
        let p3=btn[a[2]].innerText;
        if(p1!=""&&p2!=""&&p3!=""&&p1===p2&&p2===p3){
            console.log("Winner is"+p1);
            display(p1);
            return true;
        }
    }
    return false;
}

function display(mss) {
    const msgElement = msg[0];

    if (mss === "X" || mss === "O") {
        msgElement.innerText = "The Winner of the game is \nPlayer :" + mss;
        msgElement.style.color = "blue";
        msgElement.style.fontSize = "48px";
    } else if (mss === "Match Tied") {
        msgElement.innerText = mss;
        msgElement.style.color = "blue";
        msgElement.style.fontSize = "48px";
    } else {
        msgElement.innerText = "";
    }
}
