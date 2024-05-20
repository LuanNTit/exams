import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  url = "http://localhost:3000/exmas";
  examList: Exam[] = [
    
  ]
  constructor() { }

  async getAllExams(): Promise<Exam[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }
}
