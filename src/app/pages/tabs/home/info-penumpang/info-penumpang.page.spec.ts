import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPenumpangPage } from './info-penumpang.page';

describe('InfoPenumpangPage', () => {
  let component: InfoPenumpangPage;
  let fixture: ComponentFixture<InfoPenumpangPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoPenumpangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
