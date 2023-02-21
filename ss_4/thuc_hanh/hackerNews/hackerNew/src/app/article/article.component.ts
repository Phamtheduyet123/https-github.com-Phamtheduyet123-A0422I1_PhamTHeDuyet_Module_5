import { Component, OnInit } from '@angular/core';
import {Article} from "./article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  acticle:Article={};
  acticles:Article[]=[{
  tilte: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
  url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
},
{
  tilte:'Game of Life',
  url:"https://thefullsnack.com/posts/game-of-life.html"
}

];
  constructor() { }

  ngOnInit(): void {
  }
  addNewArticle(){
    this.acticles.push(this.acticle);
  }

}
