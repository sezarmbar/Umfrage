import { Injectable, OnInit }       from '@angular/core';

import { DropdownQuestion } from '../components/question-dropdown';
import { GetId } from './idGenerator';
import { InputQuestion } from '../components/question-input';
import { QuestionBase } from '../module/question-base';
import { RadioQuestion } from '../components/question-radio';
import { TextboxQuestion } from '../components/question-textbox';

@Injectable()
export class QuestionService {
  questions: QuestionBase<any>[]=[]; 
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  addQuestions(question) {
   this.questions.push(question)
   }

  
  getQuestions() {
    return this.questions.sort((a, b) => a.order - b.order);

  }

  simpleQuastions(){
    this.questions= [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        type:'string',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        required: true,
        order: 3
      }),
      new RadioQuestion({
        key: 'radio',
        label: 'radio sample',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 4
      }),
  
      new TextboxQuestion({
        type:'number',
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),
      new InputQuestion({
        type:'email',
        key: 'Numbe_of',
        label: 'email',
        required: true,
        order: 5
      } )

    ];
    
  }

  constructor() { this.simpleQuastions() }

}
