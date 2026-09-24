import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-strat-comm',
    templateUrl: './strat-comm.component.html',
    styleUrls: ['./strat-comm.component.css'],
    standalone: false
})
export class StratCommComponent implements OnInit {

  //@Input() firstname: Customer;


  constructor() { }

  ngOnInit(): void {
  }

  question = ""

  allquestions = [
    "Describe what is a soliloquy",
    "Describe what is an aside in drama",
    "In writer Virginia Woolf's <a href='https://link.amazon/B02YMlB1h'>'Mrs. Dalloway'</a> what is the backstory of character Septimus Smith?",
    "Why is important to be succinct in your writing?",
    "Why should we check our facts?",
    "How can active listening help our communications?",
    "What is the plotline of <a href='https://link.amazon/B06NoOezZ'>Catcher & the Rye?</a>",
    "What is the plotline of <a href='https://link.amazon/B02YMlB1h'>Mrs. Dalloway?</a>",
    "What are 3 novels by Jane Austen?",
    "Who is the writer of <a href='https://link.amazon/B05aPI7tN'>Catch 22?</a>",
    "Who is the writer of <a href='https://link.amazon/B0gER5Ngu'>The Great Gatsby?</a>",
    "What is the plotnline of <a href='https://link.amazon/B0bdOXicv'>Robinson Crusoe?</a>",
    "Who is the main character of Jane Austen's novel <a href='https://link.amazon/B01RtFx7i'>'Emma'</a>?",
    "Who is the main character of Mary Shelly's novel <a href='https://link.amazon/B09tmUoNK'>'Frankenstein'</a>?",
    "Who authored the novel <a href='https://link.amazon/B09BXj64k'>'Jane Eyre'</a>?",
    "What is the plotline of <a href='https://link.amazon/B0j2hhU5Z'>'Wuthering Heights'</a>?",
    "Who is writer of the classic <a href='https://link.amazon/B01MuQlsL'>'David Copperfield'</a>?",
    "What is plotline of <a href='https://amzn.to/3MSAtrb'>'The Scarlet Letter'</a>?",
    "What is plotline of <a href='https://link.amazon/B0eCRv34x'>'The Moonstone'</a>?",
    "What is plotline of <a href='https://link.amazon/B0ihPiDio'>'The Adventure of Huckleberry Finn'</a>",    
    "What is the ending of <a href='https://link.amazon/B0ay6hNdr'>'The Sign of Four'</a>?",
    "Please summarize <a href='https://link.amazon/A0elf3N54'>'Treasure Island'</a> by Robert Louis Stevenson",
    "Please summarize <a href='https://link.amazon/B00Meku75'>'Moby Dick'</a> by Herman Melvillen",
    "Please summarize <a href='https://link.amazon/B0ekTQNHi'>'Gulliver's Travels'</a> by Jonathan Swift",
    "Please summarize <a href='https://link.amazon/B05BCJmIM'>'The Pilgrim's Progress'</a> by John Bunyan",
    "Please summarize <a href='https://link.amazon/B05xqG0le'>'A Tale of Two Cities'</a> by Charles Dickens",
    "Please summarize <a href='https://link.amazon/B04HQ4Opw'>'Great Expectations'</a> by Charles Dickens",
    "Please summarize <a href='https://link.amazon/B0ekWZrBZ'>'Oliver Twist'</a> by Charles Dickens",
    "Please summarize <a href='https://link.amazon/B05vy5PSC'>'Uncle Tom's Cabin'</a> by Harriet Beecher Stowe",
    "Please summarize <a href='https://link.amazon/B0h1Z03oR'>'The Wizard of Oz'</a> by L. Frank Baum",
    "Please summarize <a href='https://link.amazon/B0bJ5NhZt'>'The Secret Garden'</a> by Frances Hodgson Burnett",
    "Please summarize <a href='https://link.amazon/A0h0Xy6X2'>'The Little Prince'</a> by Antoine de Saint-Exupéry",
    "Please summarize <a href='https://link.amazon/B06hNrTAe'>'The Wind in the Willows'</a> by Kenneth Grahame",
    "Please summarize <a href='https://link.amazon/B01Z8EB4d'>'Anna Karenina'</a> by Leo Tolstoy",
    "Please summarize <a href='https://link.amazon/B0ezwqC1S'>'Sense and Sensibility'</a> by Jane Austin",
    "Please summarize <a href='https://link.amazon/B0bERWqdt'>'Heidi'</a> by Johanna Spyri",
    "Please summarize <a href='https://link.amazon/B09tO1w3p'>'The Count of Monte Cristo'</a> by Alexandre Dumas",
    "What are the themes in <a href='https://link.amazon/B0iX9N36Y'>'The Picture of Dorian Gray'</a>?",
  ]

  getNew() {
    this.question = this.allquestions[Math.floor(Math.random()*this.allquestions.length)];
  }

}
