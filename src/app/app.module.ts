import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { DefaultComponent } from './layout/default/default.component';
import { LoginComponent } from './authentication/login/login.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LecturerLayoutComponent } from './layout/lecturer-layout/lecturer-layout.component';
import { StudentLayoutComponent } from './layout/student-layout/student-layout.component';
import { FeatureComponent } from './feature/feature.component';
import { SettingComponent } from './settings/setting/setting.component';
import { TimeMnComponent } from './settings/time-mn/time-mn.component';
import { RoomMnComponent } from './settings/room-mn/room-mn.component';
import { LecturerMnComponent } from './settings/lecturer-mn/lecturer-mn.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    DefaultComponent,
    AdminLayoutComponent,
    LecturerLayoutComponent,
    StudentLayoutComponent,
    FeatureComponent,
    SettingComponent,
    TimeMnComponent,
    RoomMnComponent,
    LecturerMnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
