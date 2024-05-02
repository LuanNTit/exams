import { Routes } from '@angular/router';
import './exam/exam.component';
import { ExamComponent } from './exam/exam.component';
import { SchedulingComponent } from './scheduling/scheduling.component';
import { StudentComponent } from './student/student.component';
import { LectureComponent } from './lecture/lecture.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { WithoutHeaderAndFooterComponent } from './without-header-and-footer/without-header-and-footer.component';

const routeConfig: Routes = [
  {
    path: '',
    component: DefaultComponent,
    title: 'Login page',
    children: [
      {
        path: '',
        component: ExamComponent,
        title: 'Exam page',
      },
      {
        path: 'exam',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path: 'scheduling',
        component: SchedulingComponent,
        title: 'Scheduling page',
      },
      {
        path: 'student',
        component: StudentComponent,
        title: 'Student page',
      },
      {
        path: 'lecture',
        component: LectureComponent,
        title: 'Lecture page',
      },
      {
        path: 'account',
        component: AccountComponent,
        title: 'Account page',
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login page',
  }
];

export default routeConfig;