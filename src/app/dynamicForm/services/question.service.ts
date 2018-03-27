import { Injectable, OnInit }       from '@angular/core';

import { CheckboxeQuestion } from '../components/question-checkbox';
import { DatePicker } from '../components/question-datePpicker';
import { DropdownQuestion } from '../components/question-dropdown';
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
      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   type:'string',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   required: true,
      //   // order: 1
      // }),
      // new RadioQuestion({
      //   key: 'radio',
      //   label: 'radio sample',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   // order:2
      // }),
  
      // new TextboxQuestion({
      //   type:'number',
      //   key: 'firstName',
      //   label: 'First name',
      //   value: 'Bombasto',
      //   required: true,
      //   // order: 3
      // }),
      // new DatePicker({
      //   type:'date',
      //   key: 'DatePicker',
      //   label: 'Date Picker',
      //   required: true,
      //   // order: 4
      // } ),
      new CheckboxeQuestion({
        type:'checkbox1',
        key: 'checkbox2',
        label: 'checkbox3'
      } ),
      new CheckboxeQuestion({
        type:'checkbox1',
        key: 'checkbox4',
        label: 'checkbox3'
      } ),
      new CheckboxeQuestion({
        type:'checkbox1',
        key: 'checkbox6',
        label: 'checkbox2'
      } )

    ];
    
  }

  constructor() { this.simpleQuastions() }

}
