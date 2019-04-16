import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../service/noteservice/note.service"
import{DataService} from "../../service/dataservice/data.service"
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private noteService: NoteService,private data: DataService) { }
  cards: any[]=[]
  Unpinnedcards:any[]=[]
  Allcards: any[]=[]
  addnote: any
  message:string;
  grid='row wrap'
  ngOnInit() {
    this.getCards()
    this.data.currentMessage.subscribe(message=>{
      console.log("in note grid",message);
   if(message){
    this.grid='row wrap'

   }else{
     this.grid='column'
   }
    })
  }

  getCards() {
    this.noteService.getNote().subscribe(data => {
      console.log("getcards", data);
      var carddata = data['data']
      this.cards=[];
      for (let i = 0; i < carddata.length; i++) {
        if(!carddata[i].archive && !carddata[i].trash && carddata[i].pinned)
        {
          this.cards.push(carddata[i])
        }     
    else if(!carddata[i].archive && !carddata[i].trash && !carddata[i].pinned){
      
      this.Unpinnedcards.push(carddata[i])
      }
      console.log("array cards",this.cards);
      this.cards = this.cards.reverse();

     

    }
    })
  }

  recieveMessage($event) {
    // this.addnote = $event;
    // console.log(this.addnote, "......addnote")
    // this.Allcards.push(this.addnote);
    this.ngOnInit();
  }

//   gridChange(){
//     console.log(this.grid);
    
// if(this.grid=='column'){
//   this.grid='row wrap'
// }else{
//   this.grid='column'
// }


recievePinned($event){
  // console.log("in $",$event);
  let ind = this.cards.indexOf($event)
    this.Unpinnedcards.splice(0,0,$event)
    this.cards.splice(ind, 1)
}
  
recieveUnPinned($event){
  let ind = this.Unpinnedcards.indexOf($event)
this.Unpinnedcards.splice(ind,1)
this.cards.splice(0,0, $event)
}

recieveisPinned($event){
  console.log($event,"in note");
  
  if($event.pinned==true)
  {
  let ind = this.Unpinnedcards.indexOf($event)
    this.Unpinnedcards.splice(ind,1)
    this.cards.splice(0,0,$event)
 
  }else{
    let ind = this.cards.indexOf($event)
    this.Unpinnedcards.splice(0,0,$event)
    this.cards.splice(ind, 1)
  }
}

}

