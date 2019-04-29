import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteservice/note.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  card: any = []
  reminderCard = []
  archive = []
  more = 'reminder'
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getReminderCards()
  }
  getReminderCards() {
    this.noteService.getNote().subscribe((data) => {
      console.log("133545315413131",data);
      
      this.card = data['data']
     
      for (let i = 0; i < this.card.length; i++) {
        if (!this.card[i].trash && this.card[i].reminder) {
          console.log("Entered");
          this.reminderCard.push(this.card[i])
          console.log("reminder notes", this.reminderCard);
        }
      }
    }), err => {
      console.log(err)
    }
  }
  
}