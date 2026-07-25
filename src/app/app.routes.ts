import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { LegalNoticePage } from './pages/legal-notice-page/legal-notice-page';
import { PrivacyPolicyPage } from './pages/privacy-policy-page/privacy-policy-page';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePage },
  { path: 'legal-notice', component: LegalNoticePage },
  { path: 'privacy-policy', component: PrivacyPolicyPage },
  { path: '**', redirectTo: '' },
];
