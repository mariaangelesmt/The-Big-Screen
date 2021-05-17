import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbscardComponent } from './tbscard.component';

describe('TbscardComponent', () => {
  let component: TbscardComponent;
  let fixture: ComponentFixture<TbscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TbscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
