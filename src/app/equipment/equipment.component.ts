import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipBeingEdited: object = null;

  equipment: object[] = [
    {name: "Habitat dome"}, 
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];

  constructor() { }

  ngOnInit() {
  }

  add(equipName: string) {
    this.equipment.push({name: equipName});
  }

  remove(equip: object) {
    let index = this.equipment.indexOf(equip);
    this.equipment.splice(index, 1);
  }

  edit(equip: object) {
    this.equipBeingEdited = equip;
 }

 save(name: string, equip: object) {
  equip['name'] = name;
  this.equipBeingEdited = null;
}

}
