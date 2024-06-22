import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasiTiketPage } from './reservasi-tiket.page';

describe('ReservasiTiketPage', () => {
  let component: ReservasiTiketPage;
  let fixture: ComponentFixture<ReservasiTiketPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservasiTiketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
