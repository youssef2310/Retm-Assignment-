import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HomeComponent,
  IntroComponent,
  RegistrationComponent,
  ReserveServiceComponent,
  SummaryComponent,
  TermsAndConditionsComponent,
} from './index';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ApiService } from '../../services/api.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    HomeComponent,
    IntroComponent,
    RegistrationComponent,
    ReserveServiceComponent,
    SummaryComponent,
    TermsAndConditionsComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    RouterModule,
    MatSnackBarModule
  ],
  exports: [],
  providers: [ApiService],
  entryComponents: [],
})
export class HomeModule {}
