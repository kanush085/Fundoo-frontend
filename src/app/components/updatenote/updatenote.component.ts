import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteservice: NoteService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    
  }
  pinnedbar(array) {   
    this.noteservice.doPinned({
      "noteID": [array._id],
      "pinned": true
    }).subscribe(result => {
      array.pinned = true
    })
 
  }

  unpinbar(array) {
console.log("11111111111111111111",array);

    this.noteservice.doPinned({
      "noteID": [array._id],
      "pinned": false
    }).subscribe(result => {
      array.pinned = false
    })
  
  }
  openSnackBar(){
    this.snackBar.open("Can’t edit in Trash", "Ok", { duration: 5000 })
  }


  del(array){
    this.noteservice.reminder({
      "noteID": [array._id],
      "reminder":""
    }).subscribe(result=>{
      array.reminder=""
      this.snackBar.open("Reminder deleted","ok",{duration:5000})
  
    })
  }

}
