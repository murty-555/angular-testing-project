import { Post } from "src/app/models/post";
import { PostComponent } from "./post.component";
import { first } from "rxjs";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";


describe('PostComponent', () => {

  let fixture : ComponentFixture<PostComponent>;
  let comp : PostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  })

  it('should create post component using TestBed', () => {
    // TestBed.configureTestingModule({
    //   declarations: [PostComponent]
    // })
    // const fixture = TestBed.createComponent(PostComponent);
    // const comp = fixture.componentInstance;
    expect(comp).toBeDefined();
  })

  it('should render the post title in the anchor element', () => {
    const post: Post = {id: 1, body: 'body 1', title: 'title 1'}
    comp.post = post;
    fixture.detectChanges();
    const postElement: HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toEqual(post.title)
  })

  it('should render the post title in the anchor element using debug element', () => {
    const post: Post = {id: 1, body: 'body 1', title: 'title 1'}
    comp.post = post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement = postDebugElement.query(By.css('a')).nativeElement;
    expect(aElement?.textContent).toEqual(post.title);
  })

  it('should raise an event when delete post is clicked', () => {
    // TestBed.configureTestingModule({
    //   declarations: [PostComponent]
    // })
    // const fixture = TestBed.createComponent(PostComponent)
    // const comp = fixture.componentInstance;

    // const comp = new PostComponent();
    const post: Post = {id: 1, body: 'body 1', title: 'post 1'};
    comp.post = post;
    
    comp.delete.pipe(first()).subscribe((selectedPost => {
      expect(selectedPost).toBe(post);
    }))

    comp.onDeletePost(new MouseEvent('click'));
  })
});