import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHeightComponent } from './select-height.component';

describe('SelectHeightComponent', () => {
  let component: SelectHeightComponent;
  let fixture: ComponentFixture<SelectHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectHeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
