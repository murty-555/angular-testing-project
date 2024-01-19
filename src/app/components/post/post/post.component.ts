import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post !: Post;
  @Output() delete = new EventEmitter<Post>();

  onDeletePost(event: Event){
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}
