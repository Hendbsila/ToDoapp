
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './access.guard';
import { DoneComponent } from './done/done.component';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [

  {path:'', component:ToDoComponent , canActivate:[AccessGuard]},
  
  {path:'login', component:LoginComponent},
  {path:'done', component:DoneComponent, canActivate:[AccessGuard]},
  
];

export const ORANGE_ROUTTING=RouterModule.forRoot(routes);
