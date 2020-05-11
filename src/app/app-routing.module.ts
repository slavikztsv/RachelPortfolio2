import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { ContactComponent } from './modules/contact/components/contact/contact.component';
import { AboutMeComponent } from './modules/about-me/components/about-me/about-me.component';
import { MainContainerComponent } from './modules/main-container/components/main-container/main-container.component';


const routes: Routes = [
  { path: 'home',
    component: MainContainerComponent,
      children: [
        {
          path: '',
          component: HomeComponent
        }
      ]
  },
  { path: 'contact',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        component: ContactComponent
      }
    ]
  },
  { path: 'about-me',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        component: AboutMeComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
