import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { IndexComponent } from './authentication/index/index.component';
import { LoginComponent } from './authentication/login/login.component';
import { FeatureComponent } from './feature/feature.component';
import { SettingComponent } from './settings/setting/setting.component';
import { TimeMnComponent } from './settings/time-mn/time-mn.component';
import { RoomMnComponent } from './settings/room-mn/room-mn.component';
import { LecturerMnComponent } from './settings/lecturer-mn/lecturer-mn.component';
import { roleGuard } from './_helpers/role.guard';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [roleGuard], data: { roles: [''] } },
  { path: 'feature', component: FeatureComponent, canActivate: [roleGuard], data: { roles: ['ADMIN'] } },
  { path: 'setting', component: SettingComponent, canActivate: [roleGuard], data: { roles: ['ADMIN'] },
    children: [
      { path: 'time-mn', component: TimeMnComponent, canActivate: [roleGuard], data: { roles: ['ADMIN'] } },
      { path: 'room-mn', component: RoomMnComponent, canActivate: [roleGuard], data: { roles: ['ADMIN'] } },
      { path: 'lecturer-mn', component: LecturerMnComponent, canActivate: [roleGuard], data: { roles: ['ADMIN'] } },
    ]
  },
  { path: '', redirectTo: 'index', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
