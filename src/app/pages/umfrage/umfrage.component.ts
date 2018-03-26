import { Component }  from '@angular/core';
import { QuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.scss']
  
})
export class UmfrageComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
