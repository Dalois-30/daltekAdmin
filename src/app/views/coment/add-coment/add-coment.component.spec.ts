import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComentComponent } from './add-coment.component';

describe('AddComentComponent', () => {
  let component: AddComentComponent;
  let fixture: ComponentFixture<AddComentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
