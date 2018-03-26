import { QuestionBase } from "../module/question-base";

export class InputQuestion extends QuestionBase<string> {
  controlType = 'input';
  

  constructor(options: {} = {}) {
    super(options);
  }
}
