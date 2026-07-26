import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LegalNoticePage } from './legal-notice-page';

describe('LegalNoticePage', () => {
  let component: LegalNoticePage;
  let fixture: ComponentFixture<LegalNoticePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNoticePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNoticePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
