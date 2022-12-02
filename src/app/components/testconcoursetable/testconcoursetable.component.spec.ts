import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestconcoursetableComponent } from './testconcoursetable.component';

describe('TestconcoursetableComponent', () => {
  let component: TestconcoursetableComponent;
  let fixture: ComponentFixture<TestconcoursetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestconcoursetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestconcoursetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
