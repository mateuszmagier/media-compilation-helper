import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  constructor(public filesService: FilesService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    const files = event.target.files;
    console.log('PLIKI:');
    console.log(files);

    if (files && files.length) {
      this.filesService.addFiles(files);
    }
  }

}
