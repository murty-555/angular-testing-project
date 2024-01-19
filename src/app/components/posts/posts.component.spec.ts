import { Post } from "src/app/models/post"
import { PostsComponent } from "./posts.component";
import { of } from "rxjs";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { PostService } from "src/app/services/post/post.service";


describe('Posts componenet', () => {
    let POSTS: Post[];
    let component: PostsComponent;
    let mockPostService: any;
    let fixture: ComponentFixture<PostsComponent>;
    beforeEach(() => {
        POSTS = [
            {
                id: 1,
                title: 'post 1',
                body: 'body for post 1'
            },
            {
                id: 2,
                title: 'post 2',
                body: 'body for post 2'
            },
            {
                id: 3,
                title: 'post 3',
                body: 'body for post 3'
            },
        ]
        mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost'])
        TestBed.configureTestingModule({
            declarations: [PostsComponent],
            providers: [
                {
                    provide: PostService,
                    useValue: mockPostService
                }
            ]
        })
        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;
    })

    // it('should set posts directly from the service',() => {
    //     mockPostService.getPosts.and.returnValue(of(POSTS));
    //     fixture.detectChanges();
    //     expect(component.posts.length).toBe(3)
    // })

    describe('delete', () => {

        beforeEach(() => {
            mockPostService.deletePost.and.returnValue(of(true));
            component.posts = POSTS;
        })
        it('should delete the selected post from the posts', () => {
            component.delete(POSTS[1]);
            expect(component.posts.length).toBe(2);
        })

        it('should delete the actual selected post in posts array', () => {
            component.delete(POSTS[1]);
            for(let post of component.posts){
                expect(post).not.toEqual(POSTS[1])
            }
        })
        it('should call the delete method in post service only once', () => {
            // spyOn(postService, 'deletePost').and.returnValue(of(true))
            component.delete(POSTS[1]);
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
        })
    })
})