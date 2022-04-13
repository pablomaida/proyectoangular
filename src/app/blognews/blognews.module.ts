import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    NavigationComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[NavigationComponent, BannerComponent]//exportamos pa que pueda llama en el index general 
})
export class BlognewsModule { }
