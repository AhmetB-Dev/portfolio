import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [provideHttpClient(withXhr()), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
