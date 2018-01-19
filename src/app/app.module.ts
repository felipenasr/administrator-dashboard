
// NATIVE MODULES, COMPONENTS AND SERVICES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// MY COMPONENTS, MODULES AND SERVICES

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

// MODULES
import { AdminModule } from './admin/admin.module';

// SERVICES
import { ApiService } from './shared/services/api.service';
import { DefaultRequestOpt } from './shared/services/default-request-opt.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { JwtTokenService } from './shared/services/json-web-token.service';
import { AuthService } from './shared/services/auth.service';

// ROUTES
import routing from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    ApiService,
    LocalStorageService,
    JwtTokenService,
    DefaultRequestOpt,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
