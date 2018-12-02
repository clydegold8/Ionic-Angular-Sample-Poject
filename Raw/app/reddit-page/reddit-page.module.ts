import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';


import { IonicModule } from '@ionic/angular';

import { RedditPagePage } from './reddit-page.page';

const routes: Routes = [
  {
    path: '',
    component: RedditPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RedditPagePage]
})
export class RedditPagePageModule {}
