import { QuestionBase } from "../module/question-base";

export class Checkboxe extends QuestionBase<string> {
  controlType = 'checkboxe';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
