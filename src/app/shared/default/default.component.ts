import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnDestroy {

  public value : Date = new Date();

  constructor(private form: FormBuilder) { }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {
  }

}
