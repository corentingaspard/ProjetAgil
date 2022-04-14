import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { any } from 'codelyzer/util/function';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {
  nuggets: number[] = [39, 56, 36, 38, 74, 53, 54, 55, 70, 35, 71, 72, 73, 75, 76, 77, 79, 80, 81, 82, 37, 84, 119, 120];//nuggets
  
  // tslint:disable-next-line:max-line-length
  selPoivre: number[] = [7, 8, 9, 10, 11, 16, 17, 27, 28, 29, 30, 31, 32, 33, 34, 12, 13, 14, 15, 18, 21, 20, 19, 22, 26, 25, 24, 23, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 78, 83, 112, 113, 114, 115, 116, 117, 118];
  questionIDnuggets: number = this.nuggets[Math.floor(Math.random() * this.nuggets.length)];
  questionIDselPoivre: number = this.selPoivre[Math.floor(Math.random() * this.selPoivre.length)];

  constructor(private http: HttpClient) { 
    this.nuggets;
    this.selPoivre;
    
  }

  
  ngOnInit(): void {
  }
}
