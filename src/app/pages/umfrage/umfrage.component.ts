import { Component }  from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-umfrage',
  templateUrl: './umfrage.component.html',
  styleUrls: ['./umfrage.component.scss'],
  providers:  [QuestionService]
})
export class UmfrageComponent {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
