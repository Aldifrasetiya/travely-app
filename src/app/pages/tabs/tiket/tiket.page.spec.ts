import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TiketPage } from './tiket.page';

describe('TiketPage', () => {
  let component: TiketPage;
  let fixture: ComponentFixture<TiketPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
