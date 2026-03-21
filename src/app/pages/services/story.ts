import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private stories = [
    { id: 1, title: 'Demo 1', author: 'A', views: 1000 },
  ];

  getAll() {
    return {
      subscribe: ({ next }: any) => next(this.stories),
    };
  }

  create(data: any) {
    return {
      subscribe: ({ next }: any) => {
        const newItem = { id: Date.now(), ...data };
        this.stories.push(newItem);
        next(newItem);
      },
    };
  }

  delete(id: number) {
    return {
      subscribe: ({ next }: any) => {
        this.stories = this.stories.filter(s => s.id !== id);
        next(true);
      },
    };
  }
}