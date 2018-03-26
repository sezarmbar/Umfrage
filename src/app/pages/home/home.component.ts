import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { QuestionService } from '../../dynamicForm/services/question.service';
import { TextboxQuestion } from '../../dynamicForm/components/question-textbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mahmou:String= '1930023545 Mahmoud Barakat'
  textboxQuestion: TextboxQuestion = new TextboxQuestion({
    key: 'emailAddress',
    label: 'Email',
    type: 'email',
    order: 2
  })


  public ngOnInit() { }
  myControl: FormControl = new FormControl();
  constructor(private qcs: QuestionService) { }

  addQuastion() {
    this.qcs.addQuestions(this.textboxQuestion)
    console.log(this.mahmou.length)
  }


  options = [
    'One',
    'Two',
    'Three'
  ];
}
