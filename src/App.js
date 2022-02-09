import { useState } from 'react';
import Header from './components/Header';

import Division from './components/Division';

import './App.css';

const sttt = [
  {
    id: "que1",
    ques: "1. What is variable in python... 1",
    options: [
      {
        id: "1",
        text: "Constant values",
        stats: false
      },
      {
        id: 2,
        text: "Containers for values",
        stats: true
      },
      {
        id: 3,
        text: "Number values",
        stats: false
      },
      {
        id: 4,
        text: "None of the above",
        stats: false
      }

    ]
  },
  {
    id: "que2",
    ques: "2. Is the following is an identifier....'12abc'?",
    options: [
      {
        id: 5,
        text: "Yes",
        stats: false
      },
      {
        id: 6,
        text: "No",
        stats: true
      },
    ]
  },
  {
    id: "que3",
    ques: "3. What are the types of loops available in python ?",
    options: [
      {
        id: "9",
        text: "for loop",
        stats: false
      },
      {
        id: "10",
        text: "while loop",
        stats: false
      },
      {
        id: "11",
        text: "do while loop",
        stats: false
      },
      {
        id: "12",
        text: "all the above",
        stats: true
      }

    ]
  }
]

function App() {
  const [questions, setQuestions] = useState(sttt

  )

  const checkAns = (id, stats, ansdetails) => (
    // stats==true ? document.getElementById(id).style.backgroundColor="red" : document.getElementById(id).style.backgroundColor="steelblue"
    doChanges(id, stats, ansdetails)
  );


  return (
    <div>
      <Header heading="PIECE OF CODE" subheading="Python Series" />

      <Division questions={questions} checkans={checkAns} />



    </div>
  );
}
function doChanges(id, stats, ansdetails) {
  stats == true ? document.getElementById(ansdetails).style.backgroundColor = "rgb(161, 255, 169,0.795)" : document.getElementById(ansdetails).style.backgroundColor = "rgba(255, 147, 147, 0.795)";
  if (stats == true) {
    document.getElementById(id).style.backgroundColor = "rgb(117, 255, 129)";
    document.getElementById(id).style.color = "black";
   }
  else {
    sttt.map((question) => {
      if (question.id == ansdetails) {
        question.options.map((opt) => {
          if (opt.stats == true) {
            document.getElementById(opt.id).style.backgroundColor = "rgb(117, 255, 129)";
            document.getElementById(opt.id).style.color = "black";
          }
          else {
            document.getElementById(opt.id).style.backgroundColor = "rgb(255, 88, 88)";
          }
        })
      }
    })
  }
  console.log(ansdetails)

}

export default App;
