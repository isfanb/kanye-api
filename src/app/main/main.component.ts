import { Component, OnInit } from '@angular/core';
import { KanyeService } from '../kanye.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _service: KanyeService) { }

  addQuote: any = [];
  displayData: any = [];
  addYourOwn: any = [];
  inputYourOwn = '';

  ngOnInit(): void {
    this.getApi();
  }
  
  getApi() {
    this._service.getKanye().subscribe(res => {
      console.log(res);
      this.displayData = res.quote;
    })
  }

  addFavorite() {
    this.addQuote.push(this.displayData)
  }

  addYourQuote() {
    this.addYourOwn.push(this.inputYourOwn)
  }

}
