import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FilesService } from './services/files.service';
import { FilesListComponent } from './files-list/files-list.component';
import { ConvertTimestampPipe } from './pipes/convert-timestamp.pipe';
import { TimestampService } from './services/timestamp.service';
import { SaveComponent } from './save/save.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    FilesListComponent,
    ConvertTimestampPipe,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [TimestampService, FilesService, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
