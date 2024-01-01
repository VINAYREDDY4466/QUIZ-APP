const questions =[{
    question : " Who is currently considered the greatest football player of all time?",
    answers: [{
        text: "Cristano Ronaldo", correct: true},
        {text: "Lionel Messi", correct : false},
        {text: "Kylan Mbappe", correct: false},
        {text: "Jude Bellingam", correct: false},

    ]
   },
   {
    question : " What is your favorite football club? ",
    answers: [{
        text: "Real Madrid", correct: true},
        {text: "FC Bareclona", correct : false},
        {text: "Manchester City", correct: false},
        {text: "None of the Above", correct: false},

    ]

   },
   {
    question : " Which player has won the most UEFA Champions League titles",
    answers: [{
        text: "Lionel Messi", correct: false},
        {text: "Robert Lewandoski", correct : false},
        {text: "Cristano Ronaldo", correct: true},
        {text: "Harry Kane", correct: false},

    ]
   },
   {
    question : "When it need just call 7?",
    answers: [
        {text: "Lionel Messi", correct: false},
        {text: "Cristano Ronaldo", correct : true},
        {text: "Sergio Ramos", correct: false},
        {text: "Lukic Modric", correct: false},

    ]
   },
   {
    question : "Who is considered  as Goat in football after wining  in the Seven match tournament(Scripted too)?",
    answers: [
        {text: "Lionel Messi", correct: true},
        {text: "Cristano Ronaldo", correct : false},
        {text: "Sergio Ramos", correct: false},
        {text: "Lukic Modric", correct: false},

    ]
   },
   
   {
    question : "Lets end the debate of greatest of all time in football?",
    answers: [
        {text: "Lionel Messi", correct: false},
        {text: "Cristano Ronaldo", correct : true},
        {text: "Sergio Ramos", correct: false},
        {text: "Lukic Modric", correct: false},

    ]
   }

   

];
 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

  let currentQuestionIndex = 0;
  let score=0;
   function startQuiz(){
     currentQuestionIndex=0;
     score=0;
     nextButton.innerHTML="Next";
     showQuestion();


   }
    function showQuestion(){
        resetState()
        let currentQuestion =questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex+1;
        questionElement.innerHTML=questionNo + ".  " + currentQuestion.question;
        currentQuestion.answers.forEach(answer => {

            const button = document.createElement("button");
            
            button.innerHTML = answer.text;
            
            button.classList.add("btn");
            
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click", selectAnswer);
            
            });
        


    }
    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }
    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect= selectedBtn.dataset.correct==="true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button =>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`You Scored  ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";

    }
    function handleNextbutton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex<questions.length){
            handleNextbutton();
        }else{
            startQuiz();
        }

    });
startQuiz();