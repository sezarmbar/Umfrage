import { Injectable, OnInit } from '@angular/core';

import { DropdownQuestion } from '../components/question-dropdown';
import { InputQuestion } from '../components/question-input';
import { QuestionBase } from '../module/question-base';
import { RadioQuestion } from '../components/question-radio';
import { TextboxQuestion } from '../components/question-textbox';

@Injectable()
export class GetId {

  private uniqueNumber = 0;

  public getId(name): any {
    return this.gnerateUniqueNumber()+name;
  }

  gnerateUniqueNumber() {
    var date = Date.now();
    if (date <= this.uniqueNumber) {
      date = ++this.uniqueNumber;
    } else {
      this.uniqueNumber = date;
    }
    
    return date;
  }


}