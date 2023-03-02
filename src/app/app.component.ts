import { Component, Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab8';
  sender = "";
  address ='';
  weight= 0;
  cost =0;
  fragile = true;
  zeroWeight = 0;
  zero_arr:any=[];
  postcode =0;
  db:any =[];

  addParcel(){
    this.db.push({
      id: uuidv4(),
      sender:this.sender,
      address:this.address,
      weight:this.weight,
      cost:this.cost,
      postcode:this.postcode,
      fragile:this.fragile});
    if(this.weight==0){
      this.zeroWeight+=1;
    }
  }
  hasZeroWeight(){
    return this.zeroWeight ==0
  }
  deleteParcelbyWeight(){
    for(let i=this.db.length-1;i>=0; i--){
      if(this.db[i].weight==0){
        this.db.splice(i,1)
        this.zeroWeight-=1
      }
    }
  }
  deleteParcel(i:number){
    let index =i
    if (this.db[i].weight==0){
        this.zeroWeight-=1
        this.db.splice(i,1)}
    else if (this.db[i].weight>=0)
        this.db.splice(i,1)
  }

  deleteParcelbyId(id: string){
    for(let i=this.db.length-1;i>=0; i--){
      if(this.db[i].id==id){
        if (this.db[i].weight==0){
          this.zeroWeight-=1
          this.db.splice(i,1)}
      else if (this.db[i].weight>=0)
          this.db.splice(i,1)
      }
    }
  }
  
  createAnother(id:string){
    for(let i=0; i<this.db.length;i++){
      if(this.db[i].id ==id){
        this.db.push({
          id: uuidv4(),
          sender:this.db[i].sender,
          address:this.db[i].address,
          weight:this.db[i].weight,
          cost:this.db[i].cost,
          postcode:this.db[i].postcode,
          fragile:this.db[i].fragile});
        if(this.db[i].weight==0){
          this.zeroWeight+=1;
        }

      }
    }
  }
}
  


