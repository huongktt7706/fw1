import { Routes } from '@angular/router';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import {Products} from './pages/products/products';
import {AddProduct} from './pages/add-products/add-products';




export const routes: Routes = [
  { path: 'products', component: Products },
  { path: 'add-product', component: AddProduct },
  { path: 'stories', component: Stories },
  { path: 'add', component: AddStory },
];