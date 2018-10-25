import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrradianceComponent } from './irradiance/irradiance.component';
import { MapsComponent } from './maps/maps.component';
import { CompanyDetailsComponent } from "./company-details/company-details.component";
import { CarparkDetailsComponent } from "./carpark-details/carpark-details.component";
import { WorkflowGuard }        from './service/workflow/workflow-guard.service';
import { WorkflowService }      from './service/workflow/workflow.service';

const routes: Routes = [
  { path: 'irradiance', component: IrradianceComponent },
  { path: 'map', component: MapsComponent  },
  { path: 'company-details', component: CompanyDetailsComponent, canActivate: [WorkflowGuard]  },
  {path:'carpark-details', component:CarparkDetailsComponent },
  { path: '', redirectTo: '/company-details', pathMatch: 'full' },
  { path: '**', component: CompanyDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
