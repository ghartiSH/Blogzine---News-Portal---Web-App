import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import {TextFieldModule} from '@angular/cdk/text-field';
import { HomeAltComponent } from '../pages/home-alt/home-alt.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from '../pages/aboutus/aboutus.component';
import { PostdetailsComponent } from '../pages/postdetails/postdetails.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { SigninComponent } from '../pages/signin/signin.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { AuthorpageComponent } from '../pages/authorpage/authorpage.component';
import { SearchComponent } from '../pages/search/search.component';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    HomeComponent,
    AddPostComponent,
    HomeAltComponent,
    HeaderComponent,
    FooterComponent,
    AboutusComponent,
    PostdetailsComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    CategoriesComponent,
    AuthorpageComponent,
    SearchComponent,
    SidenavComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfFlvG5OoYyq8PVO_63BqnG_Rrjnj7kFk'
    }),

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MaterialFileInputModule,
    TextFieldModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    IvyCarouselModule,
    NgbModule,
    MatMenuModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
