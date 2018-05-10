import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCheckboxModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule } from "@angular/material";
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashComponent } from './main-dash/main-dash.component';

@NgModule({
  declarations: [AppComponent, MainNavComponent, MainTableComponent, MainDashComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
