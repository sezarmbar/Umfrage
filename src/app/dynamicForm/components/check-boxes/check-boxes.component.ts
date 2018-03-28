import { Component, Input } from '@angular/core';

import { FormGroup }        from '@angular/forms';
import { QuestionBase } from '../../module/question-base';

@Component({
  selector: 'app-check-boxes',
  templateUrl: './check-boxes.component.html',
  styleUrls: ['./check-boxes.component.scss']
})
export class CheckBoxesComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }
  ngOnInit(){
    console.log('this.question')
    console.log(this.question.controlType)
  }
}
