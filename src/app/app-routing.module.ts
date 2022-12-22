import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TempliteralFormsComponent } from './templiteral-forms/templiteral-forms.component';

const routes: Routes = [
  {path:'',component:ReactiveFormComponent},
  {path:'template',component:TempliteralFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
