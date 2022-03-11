import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-ajoutertache',
  templateUrl: './ajoutertache.component.html',
  styleUrls: ['./ajoutertache.component.scss']
})
export class AjoutertacheComponent implements OnInit {

  constructor() { }

  ajoutTacheForm : FormGroup = new FormGroup({
    "intitule": new FormControl(),
    "description": new FormControl(),
    "dateCreation": new FormControl(),
    "deadline": new FormControl(),
    "dateFin": new FormControl(),
    "priorite": new FormControl()
  })

  ngOnInit(): void {
  }

  ajouterTache(){

  }

}
