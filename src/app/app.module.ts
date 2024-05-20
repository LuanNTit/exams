import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { ExamComponent } from './components/exam/exam.component';
import { DefaultComponent } from './components/layout/default/default.component';
import { WithoutHeaderAndFooterComponent } from './components/layout/without-header-and-footer/without-header-and-footer.component';
import { LoginComponent } from './components/login/login.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [],
  imports: [
    AccountComponent,
    ExamComponent,
    DefaultComponent,
    WithoutHeaderAndFooterComponent,
    LoginComponent,
    SchedulingComponent,
    StudentComponent,
    CommonModule
  ]
})
export class AppModule { }
