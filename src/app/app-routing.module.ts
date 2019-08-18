import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchformComponent } from './components/searchform/searchform.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PageusernotfoundComponent } from './components/pageusernotfound/pageusernotfound.component';
import { UserFullProfileComponent } from './components/user-full-profile/user-full-profile.component';


const routes: Routes = [
  {
    path: "",
    component: SearchformComponent
  },
  {
    path: "user/:login",
    component: UserFullProfileComponent
  },
  {
    path: "usernotfound",
    component: PageusernotfoundComponent
  },
  {
    path: "**",
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
