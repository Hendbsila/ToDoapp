
import { RouterModule, Routes } from '@angular/router';
import { AccessGuard } from './access.guard';
import { DoneComponent } from './done/done.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [

  {path:'', component:ToDoComponent , canActivate:[AccessGuard]},
  
  {path:'login', component:LoginComponent},
  {path:'login', children:[
  
  {path:'register', component:RegisterComponent}]

},
  {path:'done', component:DoneComponent, canActivate:[AccessGuard]},
  
  {path:'**', component:NotfoundComponent}
  
];

export const ORANGE_ROUTTING=RouterModule.forRoot(routes);
