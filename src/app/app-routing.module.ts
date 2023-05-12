import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './crud-app/fbviews/home.view/home.view.component';
import { PersonListViewComponent } from './crud-app/fbviews/person-list.view/person-list.view.component';

const routes: Routes = [
  { path: "", component: HomeViewComponent },
  { path: "list", component: PersonListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
