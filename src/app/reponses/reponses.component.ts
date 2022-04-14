import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question';
import {Reponse} from "../models/reponse";
import {QuestionsService} from "../services/questions.service";

@Component({
  selector: 'app-reponses',
  templateUrl: './reponses.component.html',
  styleUrls: ['./reponses.component.css']
})
export class ReponsesComponent implements OnInit {
  @Input() reponse: Reponse = <Reponse>{};
  @Output() click= new EventEmitter<Reponse>();
  
  constructor() {
    //this.pageId = +(this.route.snapshot.paramMap.get('id') || 0);
  }

  ngOnInit(): void {
  }

  recupGoodAnswers(): void{
    //this.route.params.subscribe(params => console.log(params));
    //this.router.navigate(['/question',this.pageId+1]);
    this.click.emit(this.reponse);
  }
}
