import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from "../../service/http/http.service";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { EventEmitter } from "@angular/core";
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  isArchive: boolean = false
  isPinned: boolean = false;
  isreminder: string = ""
  isLable = []
  Pinned = false
  flag = true;
  reqbody: any
  bgcolor: any = "#FFFFFF";

  constructor(private httpService: HttpService,
    private router: Router,private noteService:NoteService
  ) { }

  ngOnInit() {
  }
  @Output() addingNote = new EventEmitter()
  noteTitle = new FormControl("", [Validators.required, Validators.required]);
  noteContent = new FormControl("", [Validators.required, Validators.required]);



  addNote() {
    this.flag = !this.flag;

    if ((this.noteTitle.value == null || this.noteTitle.value == '') && (this.noteContent.value == null || this.noteContent.value == '')) {
      this.bgcolor = "#FFFFFF"
      return
    }
    else {
      this.reqbody = {
        userId: localStorage.getItem('userid'),
        title: this.noteTitle.value,
        description: this.noteContent.value,
        reminder: this.isreminder,
        pinned: this.isPinned,
        archive: this.isArchive,
        color: this.bgcolor,
        trash: false,
        image: "",
        label: this.isLable

      };
      this.httpService.postJSON("createNote", this.reqbody).subscribe(data => {
        this.addingNote.emit(data['message'])
        this.noteTitle.reset()
        this.noteContent.reset()
        this.isLable=[];
        // this.isPinned=false
        this.bgcolor = "#FFFFFF"
      }),
        err => {
          console.log(err);
        };
    }
    this.Pinned = !this.Pinned
  }
  pinned() {
    this.Pinned = !this.Pinned
    this.isPinned = true;
  }

  archive($event) {
    this.isArchive = $event
    this.addNote()
  }
  reverseFlag() {
    this.flag = !this.flag;

  }
  changeColor($event) {
    this.bgcolor = $event
  }

  reminderCard($event) {
    this.isreminder = $event
    console.log("ffffffffffffffffffffffffffffffffff", this.isreminder);

    this.addNote()
  }


  labelcard(event) {
    console.log(event);
    
    this.isLable.push(event);
  }



  deletelabel(label)
  {
    // console.log("In delete label note",array.label);
   var ind= this.isLable.indexOf(label)
    this.isLable.splice(ind,1)
    // this.noteService.deleteNoteLabel({
    //   "noteID": [array._id],
    //   "label":label
    // }).subscribe(data=>{
    //   console.log("After deleting the label ",data);
    //  let ind = array.label.indexOf(label)
    //  if(ind != -1)
    //  {
    //    array.label.splice(ind,1)
    //  }
      
    // })
  }

}



