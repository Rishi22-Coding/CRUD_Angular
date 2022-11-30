import { Component, OnInit } from '@angular/core';
import { ConcourcedataService } from 'src/app/services/concourcedata.service';

@Component({
  selector: 'app-fetchapi',
  templateUrl: './fetchapi.component.html',
  styleUrls: ['./fetchapi.component.scss']
})
export class FetchapiComponent implements OnInit {
  concourseData: any
  constructor(private ConcourcedataService: ConcourcedataService) {}

  ngOnInit(): void {
    this.ConcourcedataService.getData().subscribe((data)=>{
      this.concourseData=data;
    });
  }

}
