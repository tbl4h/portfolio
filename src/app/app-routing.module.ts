import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaiPageComponent } from './mai-page/mai-page.component';

const appRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
