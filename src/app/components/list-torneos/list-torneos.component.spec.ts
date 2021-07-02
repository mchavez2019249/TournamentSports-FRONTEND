import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTorneosComponent } from './list-torneos.component';

describe('ListTorneosComponent', () => {
  let component: ListTorneosComponent;
  let fixture: ComponentFixture<ListTorneosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTorneosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTorneosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
