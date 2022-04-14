import { Injectable } from '@angular/core';
import {Question} from '../models/question';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestion(id: string | number): Observable<Question> {

    const url = 'https://equipe06.chez-wam.info:443/api/questions?id_question=eq.' + id;
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }
}
