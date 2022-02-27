import { Component, OnInit } from '@angular/core';
import {Tours} from "../../models/Tours";
import {TourServiceService} from "../service/tour-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number = 0;
  tour: any;
  tours: Tours[] = []

  constructor(private tourService: TourServiceService, private activeRouter: ActivatedRoute) {
    this.tours = tourService.tours;
  }

  ngOnInit(): void {
    // this.activeRouter.snapshot.params['id'];
    // this.getRoute(this.activeRouter.snapshot.params['id']);
  }
  // getRoute(id:any) {
  //   this.tourService.find(id).subscribe((res: any) => {
  //     this.tour = res;
  //   });
  // }
}

