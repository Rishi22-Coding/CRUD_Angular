import { Component, OnInit, ViewChild } from '@angular/core';
import { TestapiService } from 'src/app/services/testapi.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddconcoursesdialogComponent } from '../addconcoursesdialog/addconcoursesdialog.component';

@Component({
  selector: 'app-testconcoursetable',
  templateUrl: './testconcoursetable.component.html',
  styleUrls: ['./testconcoursetable.component.scss']
})
export class TestconcoursetableComponent implements OnInit {
  displayedColumns: string[] = [
                                'Id', 'messageid', 'stationidenficationcode',
                                'stationname', 'Departures', 'FirstRowTime',
                                'FirstRowTimeC', 'fttdestinationnumber',
                                'fttdestinatinationname', 'fttplatformno',
                                'SecRowTime', 'SecRowTimeC', 'sttdestinationnumber',
                                'sttdestinationname', 'sttplatformno', 'ThirRowTime',
                                'ThirRowTimeC', 'tttdestinationnumber', 'tttplatformnumber',
                                'tttdestinationname', 'RecDatetime', 'FlipLanguage', 'FlipLanguage2',
                                'actions'
                              ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private testApi: TestapiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getConcourseDatas();
  }
  getConcourseDatas(){
    this.testApi.getConcourseDetail()
    .subscribe({
      next: (res)=>{
        // console.log(res);
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:()=>{
        alert("Error While Fetching Data's");
      }
    })
  }
  editConcourse(row: any){
    this.dialog.open(AddconcoursesdialogComponent, {
      width: '30%',
      data: row
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
