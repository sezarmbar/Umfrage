import { QuestionBase } from "../module/question-base";

export class TextboxQuestion extends QuestionBase<string> {
  controlType = 'textbox';
  

  constructor(options: {} = {}) {
    super(options);
    // this.type = options['type'] || '';
  }
}
