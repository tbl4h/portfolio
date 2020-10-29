import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiPageComponent } from './mai-page.component';

describe('MaiPageComponent', () => {
  let component: MaiPageComponent;
  let fixture: ComponentFixture<MaiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
