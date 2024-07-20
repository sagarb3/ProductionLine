import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { MachineInfoComponent } from './machine-info/machine-info.component';

export const routes: Routes = [
    { path: '', component: OverviewComponent },
    {
        path: 'machine/:id',
        component: MachineInfoComponent,
    },
    {
        path:'**',
        redirectTo:''
    }
];
