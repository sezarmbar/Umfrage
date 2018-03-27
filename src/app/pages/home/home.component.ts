import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { InputQuestion } from '../../dynamicForm/components/question-input';
import { QuestionService } from '../../dynamicForm/services/question.service';
import { TextboxQuestion } from '../../dynamicForm/components/question-textbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  textboxQuestion: TextboxQuestion
  str:string;
  
  public ngOnInit() { }
  myControl: FormControl = new FormControl();
  constructor(private qcs: QuestionService) { }

  addQuastion() {
    this.qcs.addQuestions(this.getUmfrage())
  }

  getUmfrage():InputQuestion{
    const textboxQuestion =  new InputQuestion({
      key: this.str,
      label: this.str,
      type: 'email',
      order: 2
    })
    return textboxQuestion;
  }

  options = [
    'One',
    'Two',
    'Three'
  ];
}
