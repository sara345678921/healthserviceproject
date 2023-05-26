const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "c",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
         a: "Central Style Sheets",
         b: "Cascading Style Sheets",
         c: "Cascading Simple Sheets",
         d: "Cars SUVs Sailboats",
         correct: "b",
        },
        {
            question: "What does HTML stand for?", 
            a: "Hypertext Markup Language",
            b: "Hypertext Harkdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginia", 
            correct: "a",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },

];
const quiz= document.getElementById('quiz')
const answerEls =document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text')
const _b_text = document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
    let score = 0

    loadQuiz()
    function loadQuiz()
     {
        deselectAnswers()
        const currentQuziData = quizData[currentQuiz]

        questionEl.innerText = currentQuziData.question
        a_text.innerText = currentQuziData.a
        b_text.innerText = currentQuziData.b
        c_text.innerText = currentQuziData.c
        d_text.innerText = currentQuziData.d
    }  
    function deselectAnswers()
    {answerEls.forEach(answerEl => answerEl.checked=false )
    }
    
        if(answerEls.checked) {
            answer = answerEl.id
    }
    function  getselected()
    {
        let  answerEl
        answerEls.forEach(answerEl => {
            if(answerEls.checked){
               answer = answerEl.id


         }
         

    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getselected()
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }
         currentQuiz++
      if(currentQuiz < quizData.lenght) {
         loadQuiz()
  }
  else {
      quiz.innerHtml={

           <h2>You answered ${score}/${quizData.lenght} questions correctly </h2>
              <button onclick = "location.reload()">Reload</button>
            
    
      }
  }

})
