import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchformComponent } from './components/searchform/searchform.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UsercardComponent } from './components/usercard/usercard.component';
import { NotFoundCardComponent } from './components/not-found-card/not-found-card.component';
import { UserFullProfileComponent } from './components/user-full-profile/user-full-profile.component';
import { InformationComponent } from './components/user-full-profile/components/information/information.component';
import { UserReposListComponent } from './components/user-full-profile/components/user-repos-list/user-repos-list.component';
import { RepoItemComponent } from './components/user-full-profile/components/repo-item/repo-item.component';
import { PageusernotfoundComponent } from './components/pageusernotfound/pageusernotfound.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchformComponent,
    PagenotfoundComponent,
    UsercardComponent,
    NotFoundCardComponent,
    UserFullProfileComponent,
    InformationComponent,
    UserReposListComponent,
    RepoItemComponent,
    PageusernotfoundComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
