import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {PersonneWithout} from './models/PersonneWithout';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-startgame',
  template: `
     <div class="container">
    <form [formGroup]="formulaire" (ngSubmit)="onSubmit()" >
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Pseudo" formControlName="pseudo">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="Email" formControlName="mail">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="number" placeholder="Age" formControlName="age">
        </mat-form-field>
      </div>
      <div class="ligne">
        <mat-form-field>
          <input matInput type="text" placeholder="URL de L'avatar" formControlName="avatarUrl">
        </mat-form-field>
      </div>
      <!-- -->
      <div class="ligne">
        <button mat-raised-button color="primary" type="submit">Valider</button>
      </div>
    </form>
     </div>
  `,
  styles: [
    `.container {height: 80vh; width: 600px; display: flex; flex-direction: column; justify-content: center; margin: 0 auto;}`
  ]
})
export class StartgameComponent implements OnInit {
  personne: PersonneWithout = {} as PersonneWithout;

  formulaire: FormGroup = new FormGroup({
    pseudo: new FormControl(''),
    mail: new FormControl(''),
    avatarUrl: new FormControl('')
  });

  httpOptions = {
    headers: new HttpHeaders({accept: 'application/json', 'Content-Type': 'application/json', Prefer: 'return=representation'})
  };

  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.personne = {pseudo: this.formulaire.get('pseudo')!.value,  mail: this.formulaire.get('mail')!.value, age: this.formulaire.get('age')!.value};
    console.info(this.personne);
    this.http.post<any>('https://equipe06.chez-wam.info:443/api/joueurs', this.formulaire, this.httpOptions).subscribe(rep => console.log(rep));
  }

}
