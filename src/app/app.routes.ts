
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { ProductAdd } from './pages/product-add/product-add';
import { Register } from './pages/register/register';


export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  {path:'stories', component:Stories},
  {path:'add-story', component:AddStory},
  {path:'add-product', component:ProductAdd},
  {path:'register', component:Register}

  

 
//   { path: 'products/laptop', component: Products },
];