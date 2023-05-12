import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarNavComponent } from './crud-app/fbcomponents/toolbar-nav/toolbar-nav.component';
import { HomeViewComponent } from './crud-app/fbviews/home.view/home.view.component';
import { PersonListViewComponent } from './crud-app/fbviews/person-list.view/person-list.view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

//Dependencia de componentes para el funcionamiento
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { CrudDialogComponent } from './crud-app/fbcomponents/crud-dialog/crud-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarNavComponent,
    HomeViewComponent,
    PersonListViewComponent,
    CrudDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
