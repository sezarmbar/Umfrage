import { CheckboxeElement, CheckboxeQuestion } from '../components/question-checkbox';
import { Injectable, OnInit } from '@angular/core';

import { DatePicker } from '../components/question-datePpicker';
import { DropdownQuestion } from '../components/question-dropdown';
import { InputQuestion } from '../components/question-input';
import { QuestionBase } from '../module/question-base';
import { RadioQuestion } from '../components/question-radio';
import { TextboxQuestion } from '../components/question-textbox';

@Injectable()
export class QuestionService {
  questions: QuestionBase<any>[] = [];
  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  addQuestions(question) {
    this.questions.push(question)
  }


  getQuestions() {
    return this.questions.sort((a, b) => a.order - b.order);

  }

  simpleQuastions() {
    const ch1 = new CheckboxeElement({
      type: 'mmm',
      key: 'mmm',
      label: 'mmm',
    })
    const ch2 = new CheckboxeElement({
      type: 'lll',
      key: 'lll',
      label: 'lll',
    })

    const chMain1 = new CheckboxeQuestion({
      type: 'chMain1',
      key: 'chMain1',
      label: 'chMain1',
      options: [ch2]
    })
    const chMain2 = new CheckboxeQuestion({
      type: 'chMain2',
      key: 'chMain2',
      label: 'chMain2',
      options: [ch1]
    })

    this.questions = [
      ch1, ch2, chMain1, chMain2,



      new DatePicker({
        type: 'date',
        key: 'DatePicker',
        label: 'Date Picker',
        required: true,
        // order: 4
      }),
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        type: 'string',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        required: true,
        // order: 1
      }),
      new InputQuestion({
        key: 'inputQ',
        label: 'inputQ inputQ',
        type: 'string',
      }),

      new RadioQuestion({
        key: 'radio',
        label: 'radio sample',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        // order:2
      }),

      new TextboxQuestion({
        type: 'number',
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        // order: 3
      }),



    ];

  }

  constructor() { this.simpleQuastions() }

}
