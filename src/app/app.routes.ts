import { Routes } from '@angular/router';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';

export const routes: Routes = [
  { path: '', component: Stories },
  { path: 'stories', component: Stories },
  { path: 'add', component: AddStory },
];