import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './components/account/account.component';
import { ExamComponent } from './components/exam/exam.component';
import { DefaultComponent } from './components/layout/default/default.component';
import { WithoutHeaderAndFooterComponent } from './components/layout/without-header-and-footer/without-header-and-footer.component';
import { LectureComponent } from './components/lecture/lecture.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { StudentComponent } from './components/student/student.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

debugger
const routes: Routes = [
  // {
  //   path: '',
  //   component: DefaultComponent,
  //   title: 'admin'
  // },
  // {
  //   path: 'without',
  //   component: WithoutHeaderAndFooterComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
