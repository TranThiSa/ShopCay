import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageRouterRoutes } from './routes/page-router.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentComponent } from './components/content/content.component';
import { Second_contentComponent } from './components/second_content/second_content.component';
import { InformationComponent } from './components/information/information.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContentContactComponent } from './components/content-contact/content-contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ContentProductComponent } from './components/content-product/content-product.component';
import { FilterComponent } from './components/filter/filter.component';
import { ResultComponent } from './components/result/result.component';
import { AuthInterceptor, authInterceptorProviders } from './helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    Second_contentComponent,
    ContentComponent,
    InformationComponent,
    ContactComponent,
    ContentContactComponent,
    LoginComponent,
    ProductComponent,
    ContentProductComponent,
    FilterComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PageRouterRoutes,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
  ],
  providers: [
   authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
