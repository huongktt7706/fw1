import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StoryService } from '../services/story';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
})
export class AddStory {
  loading = false;
  success = '';
  error = '';

  addForm: any;

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0],
    });
  }

  submitForm() {
    if (this.addForm.invalid) return;

    this.loading = true;
    this.success = '';
    this.error = '';

    this.storyService.create(this.addForm.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm thành công';
        this.addForm.reset({
          title: '',
          author: '',
          views: 0,
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}