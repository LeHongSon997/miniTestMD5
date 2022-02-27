import { Component, OnInit } from '@angular/core';
import {Tours} from "../../models/Tours";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TourServiceService} from "../service/tour-service.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tours: Tours[] = []

  formCreate!: FormGroup;
  constructor(private tourService: TourServiceService) {
    this.tours = tourService.tours;
  }
  tour: Tours = new Tours(0, "", 0, "");

  ngOnInit(): void {
    this.formCreate = new FormGroup({
      id: new FormControl(0),
      name: new FormControl("",Validators.minLength(6)),
      price: new FormControl(0,Validators.pattern('[1-4]')),
      description: new FormControl("",Validators.minLength(6)),
    })
  }

  showEdit(tour: Tours) {
    this.tour = new Tours(tour.id, tour.name, tour.price,  tour.description);
  }

  edit(formEdit: any) {
    console.log(formEdit)
    this.tourService.create(formEdit);
  }

  delete(id: number) {
    this.tourService.delete(id);
  }

  create() {
    console.log(this.formCreate)
    this.tourService.create(this.formCreate.value);
  }

}
