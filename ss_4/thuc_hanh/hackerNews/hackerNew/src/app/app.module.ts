import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LikeComponent} from "./like/like.component";
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TodoComponent } from './todo/todo.component';
import { PlaylistAppComponent } from './playlist-app_ss7_thuc_hanh2/playlist-app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {FormRegisterComponent} from "./ss-6-bai-tap-form-register/form-register.component";

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        LikeComponent,
        LikeComponent,
        NavbarComponent,
        FooterComponent,
        TodoComponent,
        PlaylistAppComponent,
        YoutubePlayerComponent,
        FormRegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
