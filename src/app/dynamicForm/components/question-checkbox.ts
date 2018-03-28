import { QuestionBase } from "../module/question-base";

export class CheckboxeElement extends QuestionBase<string>{
  controlType = 'checkboxSub';

  constructor(options: {} = {}) {
    super(options);
  }
}
export class CheckboxeQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  options:CheckboxeElement[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
