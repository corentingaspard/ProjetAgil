import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs';
import {Question} from '../models/question';
import {QuestionsService} from '../services/questions.service';
import {logger} from 'codelyzer/util/logger';
import {ActivatedRoute, Router} from '@angular/router';
import {Reponse} from '../models/reponse';
import {ReponsesService} from '../services/reponses.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  question: Question = {} as Question;
  reponses: Reponse[] = [];
  loading = false;
  data=0;
  private goodPoint = 0;
  nuggets: number[] = [39, 56, 36, 38, 74, 53, 54, 55, 70, 35, 71, 72, 73, 75, 76, 77, 79, 80, 81, 82, 37, 84, 119, 120];//nuggets
  
  // tslint:disable-next-line:max-line-length
  selPoivre: number[] = [7, 8, 9, 10, 11, 16, 17, 27, 28, 29, 30, 31, 32, 33, 34, 12, 13, 14, 15, 18, 21, 20, 19, 22, 26, 25, 24, 23, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 112, 113, 114, 115, 116, 117, 118];


  constructor(private router: Router, private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService) { }

  ngOnInit(): void {
    this.loading = true;
    const id: number = +(this.route.snapshot.paramMap.get('id') || 0);
    this.questionsService.getQuestion(id).subscribe(question => {
      this.question = question;
      this.reponsesService.getReponses(id).subscribe(reponses => {
        this.reponses = reponses;
        this.loading = false;
      });
    });
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      console.log(d);
      this.data = d;
    });

  }

  isGoodAnswers(reponse: Reponse){
    if (reponse.bonne_reponse){
      this.goodPoint += 1;
    }
    console.log("Bonne question répondue: "+this.goodPoint);
    
    let id = +(this.route.snapshot.paramMap.get('id') || 0);
    console.log(this.nuggets.indexOf(id));
    if(this.nuggets.indexOf(id)!= -1){
      this.questionsService.getQuestion(this.nuggets[this.nuggets.indexOf(id) + 1]).subscribe(question => {
        this.question = question;
        this.reponsesService.getReponses(this.nuggets[this.nuggets.indexOf(id) + 1]).subscribe(reponses => {
          this.reponses = reponses;
          this.loading = false;
          this.router.navigate(['/question', this.nuggets[this.nuggets.indexOf(id) + 1]]);
        });
      });
    }
    else{
      this.questionsService.getQuestion(this.selPoivre[this.selPoivre.indexOf(id)+ 1]).subscribe(question => {
        this.question = question;
        this.reponsesService.getReponses(this.selPoivre[this.selPoivre.indexOf(id) + 1]).subscribe(reponses => {
          this.reponses = reponses;
          this.loading = false;
          this.router.navigate(['/question', this.selPoivre[this.selPoivre.indexOf(id) + 1]]);
        });
      });
    }
  }
}
