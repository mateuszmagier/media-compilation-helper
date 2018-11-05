import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.scss']
})
export class FilesUploadComponent implements OnInit {

  constructor(private filesService: FilesService) { }

  ngOnInit() {
  }

  onFileChange(event) {
    const files = event.target.files;

    if (files && files.length) {
      this.filesService.addFiles(files);
    }
  }

}
