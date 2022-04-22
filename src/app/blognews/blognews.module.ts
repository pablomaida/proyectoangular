import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';
import { Banner2Component } from './banner2/banner2.component';
import { MisionComponent } from './mision/mision.component';
import { News2Component } from './news2/news2.component';



@NgModule({
  declarations: [NavigationComponent, BannerComponent, NewsComponent,News2Component , Banner2Component, MisionComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, BannerComponent, NewsComponent,News2Component ,Banner2Component, MisionComponent], //exportamos pa que pueda llama en el index general
})
export class BlognewsModule {}
