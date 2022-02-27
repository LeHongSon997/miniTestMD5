import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./view/view.component";
import {TourComponent} from "./tour/tour.component";
import {AuthGuard} from "./service/auth/auth.guard";

const routes: Routes = [
  {path: "view/:id" , component: ViewComponent},
  {path: "view" , component: ViewComponent},
  {path: "tour" , component: TourComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
