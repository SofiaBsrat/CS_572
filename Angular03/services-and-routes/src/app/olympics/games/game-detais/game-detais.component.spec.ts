import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetaisComponent } from './game-detais.component';

describe('GameDetaisComponent', () => {
  let component: GameDetaisComponent;
  let fixture: ComponentFixture<GameDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
