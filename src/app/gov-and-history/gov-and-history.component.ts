import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-gov-and-history',
    templateUrl: './gov-and-history.component.html',
    styleUrls: ['./gov-and-history.component.css'],
    standalone: false
})
export class GovHistoryComponent implements OnInit {

 
  constructor() { }

  ngOnInit(): void {
  }

  question = ""

  freeclicks() {
    //user can read 50 affirmations
    //counter reaches 50
    //user receives a modal to pay $5 to unlock all affirmations
  }

  allquestions = [
 "Who is your favorite figure in US History?",
 "Who was the 10th US President?",
 "Who was the 30th US President?",
 "Who was the 40th US President?",
 "What was James Madison's contribution to US History?",
 "Who were Lewis & Clark?",
 "Describe the difference betweek Cherokee & Iroquois?",
 "What is the Bill of Rights?",
 "What is meant by Manifest Destiny?",
 "What happened in Philadelphia in the summer of 1787?",
 "What is the Articles of Confederation?",
 "Who was George Mason?",
 "Who was Cincinnatus?",
 "What was the Louisiana Purchase?",
 "Which President invaded Florida in 1818?",
 "Name 10 Native American tribes",
 "Which country was FLorida purchased from?",
 "Which US territory was purchased from France?",
 "Where did the Lenni Lenape live?",
 "Where did the Algonquians live?",
 "Where did the Algonquians live?",
 "Where did the Shawnee people live?",
 "What language did the Miami nation speak?",
 "Name 5 tribes of the Illinois COnfederation?",
 "What are some words of the Miami-Illinois native American language?",
 "What projects did the early Native Americans and Eurpeans work together on?",
 "What are some noteworthy accomplishments of European + Native team work?",
 "What year did Alaska join the USA?",
 "What year did Delaware join the USA?",
 "What year did Nevada join the USA?",
 "What year did California join the USA?",
 "What year did Washington (State) join the USA?",
 "What year did Florida join the USA?",
 "What year did Texas join the USA?",
 "What year did Wyoming join the USA?",
  ]

  getNew() {
    this.question = this.allquestions[Math.floor(Math.random()*this.allquestions.length)];
  }

}
