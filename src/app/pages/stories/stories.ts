import { Component, OnInit } from '@angular/core';
import { StoryService } from '../services/story';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.html',
})
export class Stories implements OnInit {
  stories: any[] = [];

  loading = false;
  error = '';
  deletingId: number | null = null;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.storyService.getAll().subscribe({
      next: (data: any) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    if (!confirm('Bạn có chắc muốn xóa không?')) return;

    this.deletingId = id;

    this.storyService.delete(id).subscribe({
      next: () => {
        this.stories = this.stories.filter(s => s.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.deletingId = null;
        alert('Xóa thất bại');
      },
    });
  }
}