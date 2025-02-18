import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGenderComponent } from './select-gender.component';

describe('SelectGenderComponent', () => {
  let component: SelectGenderComponent;
  let fixture: ComponentFixture<SelectGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
