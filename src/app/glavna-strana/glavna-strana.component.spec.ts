import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavnaStranaComponent } from './glavna-strana.component';

describe('GlavnaStranaComponent', () => {
  let component: GlavnaStranaComponent;
  let fixture: ComponentFixture<GlavnaStranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlavnaStranaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlavnaStranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
