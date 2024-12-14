import {RouterModule, Routes} from '@angular/router';
import {PageServicesComponent} from "./components/landing-page/page-services/page-services.component";
import {PageReferencesComponent} from "./components/landing-page/page-references/page-references.component";
import {PageAboutUsComponent} from "./components/landing-page/page-about-us/page-about-us.component";
import {TeamComponent} from "./components/landing-page/page-about-us/team/team.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {
  ReferenceDetailComponent
} from "./components/landing-page/page-references/reference-detail/reference-detail.component";
import {ImprintComponent} from "./components/imprint/imprint.component";
import {PrivacyComponent} from "./components/privacy/privacy.component";

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'team', component: TeamComponent },
  { path: 'reference-detail', component: ReferenceDetailComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy', component: PrivacyComponent }
];

RouterModule.forRoot(routes, {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
})
