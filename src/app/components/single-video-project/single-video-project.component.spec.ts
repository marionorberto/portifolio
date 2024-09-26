import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleVideoProjectComponent } from './single-video-project.component';

describe('SingleVideoProjectComponent', () => {
  let component: SingleVideoProjectComponent;
  let fixture: ComponentFixture<SingleVideoProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleVideoProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleVideoProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
