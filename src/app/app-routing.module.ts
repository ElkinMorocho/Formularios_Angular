import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TemplateFormComponent } from './template-forms/template-forms.component';
import { ReactiveFormComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {path: 'template', component:TemplateFormComponent},
  {path: 'reactive', component: ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
