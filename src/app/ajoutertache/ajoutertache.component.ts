import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajoutertache',
  templateUrl: './ajoutertache.component.html',
  styleUrls: ['./ajoutertache.component.scss']
})
export class AjoutertacheComponent implements OnInit {

  constructor() { }

  ajoutTacheForm : FormGroup = new FormGroup({

  })

  ngOnInit(): void {
  }

}
