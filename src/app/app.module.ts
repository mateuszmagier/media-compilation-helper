import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FilesService } from './services/files.service';
import { FilesListComponent } from './files-list/files-list.component';
import { ConvertTimestampPipe } from './pipes/convert-timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    FilesListComponent,
    ConvertTimestampPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
