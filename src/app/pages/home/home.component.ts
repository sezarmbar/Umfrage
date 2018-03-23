import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { QuestionService } from '../../services/question.service';
import { TextboxQuestion } from '../../components/question-textbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
  }


  options = [
    'One',
    'Two',
    'Three'
  ];
}
