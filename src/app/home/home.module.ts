import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { MyFormComponent } from '../my-form/my-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [HomePage, MyFormComponent]
})
export class HomePageModule {}
