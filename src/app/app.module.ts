import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FilesService } from './services/files.service';
import { ConvertTimestampPipe } from './pipes/convert-timestamp.pipe';
import { TimestampService } from './services/timestamp.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompilationsListComponent } from './compilations-list/compilations-list.component';
import { CompilationService } from './services/compilation.service';
import { CompilationComponent } from './compilation/compilation.component';
import { CompilationsPanelComponent } from './compilations-panel/compilations-panel.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ModalModule } from 'ngx-bootstrap/modal';

const firebaseConfig = {
  apiKey: 'AIzaSyChfM6HCZtYKIJqGrrgjqqhd8lxV3TpLIo',
  authDomain: 'media-compilation-helper.firebaseapp.com',
  databaseURL: 'https://media-compilation-helper.firebaseio.com',
  projectId: 'media-compilation-helper',
  storageBucket: 'media-compilation-helper.appspot.com',
  messagingSenderId: '1064737961811'
};

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    CompilationComponent,
    ConvertTimestampPipe,
    NewCompilationComponent,
    NavigationComponent,
    CompilationsListComponent,
    CompilationsPanelComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ModalModule.forRoot()
  ],
  providers: [TimestampService, FilesService, DatabaseService, CompilationService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
