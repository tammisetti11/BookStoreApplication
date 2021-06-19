import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon'
import {MatBadgeModule} from '@angular/material/badge'
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSidenavModule} from '@angular/material/sidenav'
import { MatMenuModule} from '@angular/material/menu'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatRadioModule} from '@angular/material/radio'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list'
const MaterialComponents=[
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule
];

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
