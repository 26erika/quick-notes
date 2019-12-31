import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Note/list/list.component';
import { AddComponent } from './Note/add/add.component';
import { EditComponent } from './Note/edit/edit.component';


const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
