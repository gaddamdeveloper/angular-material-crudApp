import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayUserDataComponent } from './components/display-user-data/display-user-data.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserDetailesComponent } from './components/user-detailes/user-detailes.component';

const routes: Routes = [
  {path:'',component:SignUpComponent},
  {path:'signup/:id',component:SignUpComponent},
  {path:'user',component:UserDetailesComponent},
  {path:'display/:id',component:DisplayUserDataComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
