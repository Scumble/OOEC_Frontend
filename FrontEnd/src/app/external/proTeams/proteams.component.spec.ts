import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTeamComponent } from './proteams.component';

describe('ProTeamComponent', () => {
  let component: ProTeamComponent;
  let fixture: ComponentFixture<ProTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
