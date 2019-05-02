import { Component, OnInit, EventEmitter, Output, Input, ViewEncapsulation, } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-iconlist',
  templateUrl: './iconlist.component.html',
  styleUrls: ['./iconlist.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class IconlistComponent implements OnInit {






  @Input() doarchive: boolean;
  @Input() more;
  @Input() card: any


  @Output() color = new EventEmitter();
  @Output() archivedCard = new EventEmitter()
  @Output() unarchiveCard = new EventEmitter();
  @Output() trashCard = new EventEmitter();
  @Output() archivednoteCard = new EventEmitter();
  @Output() remindernoteCard = new EventEmitter();
  @Output() reminderCard = new EventEmitter();


  dateObj = new Date();
  date: Date
  timeRem
  subtime: any
  constructor(private noteService: NoteService, private snackBar: MatSnackBar) { }
  timeCustom = new FormControl();
  ngOnInit() {


  }

  doArchive(card) {
    // console.log(this.card, "cardddd")
    // console.log(card._id, "cardidddddddddd")
    if (card == undefined) {

      this.archivednoteCard.emit(true)
    }
    else {
      this.noteService.archiveNote({
        "archive": true,
        "noteID": [card._id]
      }).subscribe(data => {
        console.log(data, "archive data")
        this.cardArchive(card)
        this.snackBar.open("Note Archived", "Ok", { duration: 5000 })
      }), err => console.log(err)

    }


  }

  cardArchive(card) {
    card.archive = true
    this.archivedCard.emit(card)
  }
  doUnArchive(card) {
    console.log("in unarchive", card);

    this.noteService.archiveNote({
      "archive": false,
      "noteID": [card._id]
    }).subscribe(data => {
      this.notArchive(card)
    }), err => console.log(err)
  }
  notArchive(card) {
    card.archive = false
    this.unarchiveCard.emit(card)
  }

  deleteNote(card) {
    this.noteService.trashNote({
      "trash": true,
      "noteID": [card._id]
    }).subscribe(data => {
      console.log(data, "Delete data");
      this.deletCard(card)
      this.snackBar.open("Note Trashed", "Ok", { duration: 5000 })
    }), err => console.log(err);

  }

  deletCard(card) {
    card.trash = true
    this.trashCard.emit(card)
  }



  colorArray = [
    [
      { 'color': '#FFFFFF', 'name': 'White' },
      { 'color': '#F28B82', 'name': 'Red' },
      { 'color': '#FBBC04', 'name': 'Orange' },
      { 'color': '#FFF475', 'name': 'Yellow' }],

    [
      { 'color': '#CCFF90', 'name': 'Green' },
      { 'color': '#A7FFEB', 'name': 'Teal' },
      { 'color': '#CBF0F8', 'name': 'Blue' },
      { 'color': '#AECBFA', 'name': 'Darkblue' }],

    [
      { 'color': '#D7AEFB', 'name': 'Purple' },
      { 'color': '#FDCFE8', 'name': 'Pink' },
      { 'color': '#E6C9A8', 'name': 'Brown' },
      { 'color': '#E8EAED', 'name': 'Gray' }
    ]
  ]

  colorsEdit(color, card) {
    if (card == undefined) {
      this.color.emit(color)
    } else {
      card.color = color;
      this.updateColor(color, card)
    }
  }
  updateColor(color, card) {
    console.log("card......", card);
    console.log("color", card.color);
    this.noteService.updateColor({
      "color": color,
      "noteID": card._id
    }).subscribe(data => {
      console.log(data, "update color data")
    }), err => console.log(err)
  }



  latertoday(card) {
    if (card == undefined) {
      const Todayrem = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), this.dateObj.getDate(), 20, 0, 0, 0)
      this.remindernoteCard.emit(Todayrem)
    } else {
      const rem = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), this.dateObj.getDate(), 20, 0, 0, 0)
      // const rem=new Date();
      // let min=rem.getMinutes()+1;
      // rem.setMinutes(min);
      // console.log("232131431.323546431451321", rem);

      this.noteService.reminder({
        "noteID": [card._id],
        "reminder": rem
      }).subscribe(result => {
        card.reminder = rem
        console.log(result, "reminder for note");
      }), err => console.log(err);
    }
  }

  Tommrow(card) {
    if (card == undefined) {
      const Trem = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), (this.dateObj.getDate() + 1), 20, 0, 0, 0)
      this.remindernoteCard.emit(Trem)
    } else {
      const Tomrem = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), (this.dateObj.getDate() + 1), 20, 0, 0, 0)
      // console.log("wsemsdsSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSkl,;", Tomrem);
      this.noteService.reminder({
        "noteID": [card._id],
        "reminder": Tomrem
      }).subscribe(result => {
        console.log(result, "reminder in tom");
        card.reminder = Tomrem

      })
    }
  }
  NextWeek(card) {
    if (card == undefined) {
      const next = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), (this.dateObj.getDate() + 7), 8, 0, 0, 0)
      this.remindernoteCard.emit(next)
    } else {
      const nextWeek = new Date(this.dateObj.getFullYear(), this.dateObj.getMonth(), (this.dateObj.getDate() + 7), 8, 0, 0, 0)
      console.log("nextWeek", nextWeek);
      this.noteService.reminder({
        "noteID": [card._id],
        "reminder": nextWeek
      }).subscribe(result => {
        console.log(result, "reminder next week");
        card.reminder = nextWeek

      })
    }
  }

  time(setTime) {
    console.log("abhsgfdoklmdmjdjdkdkkik", setTime);
    this.timeRem = setTime
    console.log("1111111111111111111111111111111111", this.timeRem);

  }


  saveReminder(card) {
    var h;
    var m;
    console.log(this.date);
    if (card == undefined) {

      if (this.timeRem.substring(6) == 'pm') {
        h = parseInt(this.timeRem.substring(0, 2)) + 12
        m = parseInt(this.timeRem.substring(3, 6))
      } else {
        h = parseInt(this.timeRem.substring(0, 2));
        m = parseInt(this.timeRem.substring(3, 6))
      }
      var date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), h, m);
      // this.date.setHours(this.timeRem)
      this.remindernoteCard.emit(date)
    } else {
      console.log(">>>>>>>>>>>>", this.timeRem);
      if (this.timeRem.substring(6) == 'pm') {
        h = parseInt(this.timeRem.substring(0, 2)) + 12
        m = parseInt(this.timeRem.substring(3, 6))
      } else {
        h = parseInt(this.timeRem.substring(0, 2));
        m = parseInt(this.timeRem.substring(3, 6))
      }
      var date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate(), h, m);
      console.log("dat>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",date);
      
      console.log(date.toJSON());
      this.noteService.reminder({
        "noteID": [card._id],
        "reminder": date
      }).subscribe(result => {
        console.log("reminder in coustom", result);
        card.reminder = date
        
      })
    }
  }
}
