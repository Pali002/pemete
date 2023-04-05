import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EmpComponent } from './emp/emp.component';


const routes: Routes = [
  { path: 'emp', component: EmpComponent},
  { path: 'about', component: AboutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
