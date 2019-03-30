import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatMenuModule, MatGridListModule, MatCardModule } from '@angular/material';
import { NavComponent } from './components/nav/nav.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { MenuListItemComponent } from './components/menu-list-item/menu-list-item.component';
import { NavService } from './components/nav/nav.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [ToolBarComponent, NavComponent,MenuListItemComponent, DashboardComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,MatMenuModule,
    MatListModule,RouterModule, MatGridListModule, MatCardModule
  ], exports: [ToolBarComponent,NavComponent,MenuListItemComponent],
  providers: [NavService]
})
export class ConfigModule { }
