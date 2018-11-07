import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesUploadComponent } from './files-upload/files-upload.component';
import { FilesService } from './services/files.service';
import { ConvertTimestampPipe } from './pipes/convert-timestamp.pipe';
import { TimestampService } from './services/timestamp.service';
import { SaveComponent } from './save/save.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';
import { NewCompilationComponent } from './new-compilation/new-compilation.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CompilationsListComponent } from './compilations-list/compilations-list.component';
import { CompilationService } from './services/compilation.service';
import { CompilationComponent } from './compilation/compilation.component';
import { CompilationsPanelComponent } from './compilations-panel/compilations-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FilesUploadComponent,
    CompilationComponent,
    ConvertTimestampPipe,
    SaveComponent,
    NewCompilationComponent,
    NavigationComponent,
    CompilationsListComponent,
    CompilationsPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [TimestampService, FilesService, DatabaseService, CompilationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
