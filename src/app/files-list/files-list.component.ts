import { Component, OnInit } from '@angular/core';
import { FilesService } from '../services/files.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  audioFilesList: Array<AudioFile> = [];

  constructor(private filesService: FilesService) {
    this.filesService.getObservable().subscribe(list => {
      this.audioFilesList = list;
    });
  }

  ngOnInit() {
  }

}
