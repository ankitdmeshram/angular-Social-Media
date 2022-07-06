import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './lessons/forms/template-form/template-form.component';
import { ReactiveFormsComponent } from './lessons/forms/reactive-forms/reactive-forms.component';
import { RedELDirective } from './lessons/directives/red-el.directive';
import { UsersComponent } from './lessons/routing/components/users/users.component';
import { HomeComponent } from './lessons/routing/components/home/home.component';
import { AboutComponent } from './lessons/routing/components/about/about.component';
import { PagenotfoundComponent } from './lessons/routing/components/pagenotfound/pagenotfound.component';
import { MeComponent } from './lessons/routing/components/about/me/me.component';
import { CompanyComponent } from './lessons/routing/components/about/company/company.component';
import { ForUserServicesComponent } from './lessons/components/for-user-services/for-user-services.component';
import { RandomApiComponent } from './lessons/components/api/random-api/random-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ForPostApiComponent } from './lessons/components/api/for-post-api/for-post-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormsComponent,
    RedELDirective,
    UsersComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    MeComponent,
    CompanyComponent,
    ForUserServicesComponent,
    RandomApiComponent,
    ForPostApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
