import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ContactComponent } from './app/contact.component';
import { InfoAirfiComponent } from './app/info-airfi.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: ContactComponent },
      { path: 'info-airfi', component: InfoAirfiComponent },
    ])
  ]
});
