const quizqna=[
  {
    question:"Q1:What is the full form of HTML?",
    a:"hypertext markup language",
    b:"hypertext making language",
    c:"hello to my land",
    d:"hey text markup language",
    ans:"ans1"

  },

  {
    question:"Q2:What is the full form of CSS?",
    a:"cascading style sheep",
    b:"cascading style sheet",
    c:"casacding styling sheet",
    d:"cascading super sheet",
    ans:"ans2"
  },
  {
    question:"Q3:In cricket how many player in one team?",
    a:12,
    b:11,
    c:10,
    d:8,
    ans:"ans2"
  },
  {
    question:"Q4:Which team won the 1992 world cup?",
    a:"australia",
    b:"india",
    c:"pakistan",
    d:"srilanka",
    ans:"ans3"
  },

  {
    question:"Q5:Who won the silver medal for India in 2016 olympic?",
    a:"Mary kom",
    b:"kumar Goswami",
    c:"sania nehwal",
    d:"pv.sindhu",
    ans:"ans4"
  },

  {
    question:"Q6:Who invented the bulb?",
    a:"Albert Einstein",
    b:"Issac Newton",
    c:"Thomas Edison",
    d:" Sir Rutherford",
    ans:"ans3"
  },
 
]


let question=document.querySelector(".question");
let option1=document.querySelector("#option1");
let option2=document.querySelector("#option2");
let option3=document.querySelector("#option3");
let option4=document.querySelector("#option4");
let submit= document.querySelector("#submit");

let answers=document.querySelectorAll(".answering");
let showscore=document.querySelector("#showandhide");

let indexingitem=0;
let score=0;
const loadingqquestion=()=>{
let gettingquestion=quizqna[indexingitem];

question.innerHTML=gettingquestion.question;
 option1.innerHTML=gettingquestion.a;
 option2.innerHTML=gettingquestion.b;
 option3.innerHTML=gettingquestion.c;
 option4.innerHTML=gettingquestion.d;

}
loadingqquestion();

const getidfunc=()=>{
  let answer;

  answers.forEach((currentanswer)=>{
    if (currentanswer.checked){
      answer=currentanswer.id
    }
  })
  return answer;
}


const deselectall=()=>{
answers.forEach((currentanswer)=>{
  currentanswer.checked=false;
})
}

submit.addEventListener("click",()=>{
  let checkans=getidfunc();

  if (checkans==quizqna[indexingitem].ans){
    score++;
  }
  indexingitem++;
  deselectall();
  if(indexingitem<quizqna.length){
    loadingqquestion();
  }
  else{
    showscore.innerHTML=
    `<h3>You Scored ${score}/${quizqna.length}</h3>
    <button class="btn"onclick="location.reload()">Play Again</button>`
    showscore.classList.remove("show")
    
  }
});

