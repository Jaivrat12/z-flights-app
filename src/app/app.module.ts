import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FlightsService } from './flights.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({

	declarations: [
			
		AppComponent,
		HomeComponent,
		AdminComponent
	],
	imports: [
			
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
