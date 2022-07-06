import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './lessons/routing/components/about/about.component';
import { CompanyComponent } from './lessons/routing/components/about/company/company.component';
import { MeComponent } from './lessons/routing/components/about/me/me.component';
import { HomeComponent } from './lessons/routing/components/home/home.component';
import { PagenotfoundComponent } from './lessons/routing/components/pagenotfound/pagenotfound.component';
import { UsersComponent } from './lessons/routing/components/users/users.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    children : [
      {
        path: 'me',
        component: MeComponent
      },
      {
        path: 'company',
        component: CompanyComponent
      }
    ]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users/:id',
    component: UsersComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
