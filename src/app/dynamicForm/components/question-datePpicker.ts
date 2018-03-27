import { QuestionBase } from "../module/question-base";

export class DatePicker extends QuestionBase<string> {
  controlType = 'datePicker';
  

  constructor(options: {} = {}) {
    super(options);
  }
}
