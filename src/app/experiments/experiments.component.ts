import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: object = null;

  science: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(experimentName: string) {
    this.science.push({name: experimentName});
  }

  remove(experiment: object) {
    let index = this.science.indexOf(experiment);
    this.science.splice(index, 1);
  }

  edit(experiment: object) {
    this.experimentBeingEdited = experiment;
 }

 save(name: string, experiment: object) {
  experiment['name'] = name;
  this.experimentBeingEdited = null;
}

}
