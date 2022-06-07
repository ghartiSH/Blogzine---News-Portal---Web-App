import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from 'src/pages/aboutus/aboutus.component';
import { AuthorpageComponent } from 'src/pages/authorpage/authorpage.component';
import { CategoriesComponent } from 'src/pages/categories/categories.component';
import { ContactComponent } from 'src/pages/contact/contact.component';
import { HomeAltComponent } from 'src/pages/home-alt/home-alt.component';
import { PostdetailsComponent } from 'src/pages/postdetails/postdetails.component';
import { SearchComponent } from 'src/pages/search/search.component';
import { SigninComponent } from 'src/pages/signin/signin.component';
import { SignupComponent } from 'src/pages/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'homealt', component:HomeAltComponent},
  {path:'home', component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path: 'post-details', component:PostdetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'authorpage', component:AuthorpageComponent},
  {path:'search', component:SearchComponent},
  {path:'', redirectTo:'/homealt', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
