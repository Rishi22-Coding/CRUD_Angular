import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconcoursesdialogComponent } from './addconcoursesdialog.component';

describe('AddconcoursesdialogComponent', () => {
  let component: AddconcoursesdialogComponent;
  let fixture: ComponentFixture<AddconcoursesdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddconcoursesdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddconcoursesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
