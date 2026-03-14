
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Stories } from './pages/stories/stories';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {path:'stories', component:Stories}
 
//   { path: 'products/laptop', component: Products },
];