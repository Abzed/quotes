import { Quotes } from './quotes-class';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Output() emitQuote= new EventEmitter()

  newQuote = new Quotes("", "","", new Date(),0,0);

  @Output() addQuote = new EventEmitter <Quotes>();

  onSubmit(){
    this.addQuote.emit(this.newQuote);    
    this.newQuote = new Quotes('',"","",new Date(),0,0);
  }
 
  constructor() { }

  ngOnInit(): void {

}

}
