import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { StreamComponent }    from './stream/stream.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'streams', component: StreamComponent}
]);