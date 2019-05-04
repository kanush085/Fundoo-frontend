import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NoteService } from "../../service/noteservice/note.service"
import { DataService } from "../../service/dataservice/data.service"
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdatenoteComponent } from "../updatenote/updatenote.component";
import { MockResourceLoader } from '@angular/compiler/testing';

export interface DialogData {
  array: [];

}

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss'],
  encapsulation: ViewEncapsulation.None


})
export class DisplaynoteComponent implements OnInit {
  @Input() cards;
  @Input() archived
  @Input() trash
  @Input() reminder
  @Input() more
  @Output() Pinned = new EventEmitter();
  @Output() UnPinned = new EventEmitter();
  @Output() isPinned = new EventEmitter();
  @Output() isreminder = new EventEmitter();
  disdate
  tomdate = new Date()
  nextweek = new Date()
  message: string;
  pinned = true
  ispinbar: boolean
  view;
  side = false;
  grid = {
    listView: this.view,
    gridView: !this.view
  }
  sidenave = {
    open: this.side,
    close: !this.side
  }

  constructor(private noteService: NoteService, private data: DataService, public dialog: MatDialog, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.disdate = new Date()
    this.tomdate = new Date(this.tomdate.getFullYear(), this.tomdate.getMonth(), (this.tomdate.getDate() + 1), 20, 0, 0, 0)
    this.nextweek = new Date(this.nextweek.getFullYear(), this.nextweek.getMonth(), (this.nextweek.getDate() + 7), 8, 0, 0, 0)
    
    this.data.currentMessage.subscribe(message => {
      console.log('message from service ', message);
      this.view = message;
      this.grid.listView = !this.view;
      this.grid.gridView = this.view;


    })

    this.data.sidenavMessage.subscribe(data => {
      console.log('data from data service', data);
      this.side = data;
      this.sidenave.open = this.side;
      this.sidenave.close = !this.side;

    }, err => {
      console.log(err);

    })
  }
  openDialog(array, trash, archived) {
    this.ispinbar = array.pinned
    var isArchive = array.archive
    var deletcard = array.trash
   

    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '600px',
      data: { array, trash, archived }

    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed', result);
      if (this.ispinbar != result.array.pinned) {
        this.isPinned.emit(result.array)
      }
      if (isArchive != result.array.archive || deletcard != result.array.trash) {
        let ind = this.cards.indexOf(result.array)
        if (ind != -1) {
          this.cards.splice(ind, 1)
        }
      }
      this.noteService.editTitle({
        "noteID": result['array']._id,
        "title": result['array'].title
      }).subscribe(result => {
        console.log("********************", result);

      })
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog is closed after editing the description");
      this.noteService.editDescription({
        "noteID": result['array']._id,
        "description": result['array'].description
      }).subscribe(result => {
        console.log(result)
      })
    })


  }

  archive(array) {
    let ind = this.cards.indexOf(array);
    this.cards.splice(ind, 1);
  }

  unarchived($event) {
    this.archive($event);
  }

  deleteForever(array) {
    this.noteService.deleteNote({
      "noteID": [array._id]
    }).subscribe(data => {
      let ind = this.cards.indexOf(array)
      this.cards.splice(ind, 1)
    })
  }
  restore(array) {
    this.noteService.trashNote({
      "trash": false,
      "noteID": [array._id]
    }).subscribe(data => {
      let ind = this.cards.indexOf(array)
      this.cards.splice(ind, 1)
    })
  }
  trashcard($event) {
    let ind = this.cards.indexOf($event)
    this.cards.splice(ind, 1)
  }


  doPinned(array) {
    this.pinned = !this.pinned
    // console.log("pinned",this.pinned);
    // console.log("array id",[array._id]);

    this.noteService.doPinned({
      "pinned": true,
      "noteID": [array._id]
    }).subscribe(data => {
      console.log("data in pinned", data);
      this.unPinbar(array)
    })
  }

  pinbar(array) {
    array.pinned = false
    this.Pinned.emit(array)
  }

  doUnPinned(array) {
    this.pinned = !this.pinned
    this.noteService.doPinned({
      "pinned": false,
      "noteID": [array._id]
    }).subscribe(data => {
      console.log("data in unpinned", data);

      this.pinbar(array)
    })
  }


  unPinbar(array) {
    array.pinned = true
    this.UnPinned.emit(array)
  }
  delete(array) {
    this.noteService.reminder({
      "noteID": [array._id],
      "reminder": ""
    }).subscribe(data => {
      console.log("delete reminder", data);
      array.reminder = ""
      this.snackBar.open("Reminder deleted", "Ok", { duration: 5000 })
      this.isreminder.emit(array)
    })
  }


  deletelabel(array,label)
  {
    // console.log("In delete label note",array.label);
    
    this.noteService.deleteNoteLabel({
      "noteID": [array._id],
      "label":label
    }).subscribe(data=>{
      console.log("After deleting the label ",data);
     let ind = array.label.indexOf(label)
     if(ind != -1)
     {
       array.label.splice(ind,1)
     }
      
    })
  }

}
