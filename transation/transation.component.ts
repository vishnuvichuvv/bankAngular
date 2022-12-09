import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent {
 acno:any
 transation:any
  constructor(private ds:DataService){
     
    this.acno=this.ds.currentacno

   this.transation= this.ds.gettransaction(this.acno)
  }

}
