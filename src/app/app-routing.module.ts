import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';



const routes: Routes = [
  {path :'' , pathMatch:'full',component:FormComponent},
  {path:'add',component:FormComponent},
  {path:'list',component:ListComponent},
  {path:'list/edit/:id', component:EditComponent},
  {path:'list/delete/:id', component:DeleteComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
