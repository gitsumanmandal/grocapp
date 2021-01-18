import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, DashboardComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    CarouselModule
  ]
})
export class ComponentsModule { }
