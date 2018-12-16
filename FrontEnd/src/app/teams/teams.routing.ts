import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { TeamComponent }    from './teams.component';
import { AuthGuard } from '../auth.guard';


export const routing: ModuleWithProviders = RouterModule.forChild([
    {path:'teams',component:TeamComponent,canActivate: [AuthGuard]}
]);