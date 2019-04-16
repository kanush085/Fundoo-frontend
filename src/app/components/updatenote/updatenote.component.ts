import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DisplaynoteComponent, DialogData } from '../displaynote/displaynote.component'
import { NoteService } from 'src/app/service/noteservice/note.service';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  pinned = false
  

  constructor(public dialogRef: MatDialogRef<DisplaynoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteservice: NoteService) { }

  ngOnInit() {

    
   
  }



  pinnedbar(array) {
    console.log("123215645663464",array);
    
    // this.pinned = !this.pinned
    this.noteservice.doPinned({
      "noteID": [array._id],
      "pinned": true
    }).subscribe(result => {
      array.pinned = true
    })
 
  }

  unpinbar(array) {

    this.noteservice.doPinned({
      "noteID": [array._id],
      "pinned": false
    }).subscribe(result => {
      array.pinned = false
    })
  
  }

 
}
