import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';



@NgModule({
  declarations: [NavigationComponent, BannerComponent, NewsComponent],
  imports: [CommonModule],
  exports: [NavigationComponent, BannerComponent, NewsComponent], //exportamos pa que pueda llama en el index general
})
export class BlognewsModule {}
