import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ResultsComponent } from './results/results.component';
import { RecipeComponent } from './recipe/recipe.component';
import { FormatFruitNamePipe } from './pipes/format-fruit-name.pipe';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    SafeHtmlPipe,
    ResultsComponent,
    RecipeComponent,
    FormatFruitNamePipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule,
    MatExpansionModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
