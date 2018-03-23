import { DropdownQuestion } from '../components/question-dropdown';
import { Injectable }       from '@angular/core';
import { QuestionBase } from '../module/question-base';
import { TextboxQuestion } from '../components/question-textbox';

@Injectable()
export class QuestionService {
  questions: QuestionBase<any>[]; 
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  addQuestions(question) {
   this.questions.push(question)
   }
  getQuestions() {

    this.questions= [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'type',
        label: 'Answer type',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      // new TextboxQuestion({
      //   key: 'emailAddress',
      //   label: 'Email',
      //   type: 'email',
      //   order: 2
      // })
    ];

    return this.questions.sort((a, b) => a.order - b.order);
  }
}
