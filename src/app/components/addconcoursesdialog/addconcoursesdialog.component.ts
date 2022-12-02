import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestapiService } from 'src/app/services/testapi.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-addconcoursesdialog',
  templateUrl: './addconcoursesdialog.component.html',
  styleUrls: ['./addconcoursesdialog.component.scss']
})
export class AddconcoursesdialogComponent implements OnInit {
  concourseForm !: FormGroup;
  actionBtn: string="Save"
  constructor(private formBuilder: FormBuilder, private testApi: TestapiService,
              @Inject(MAT_DIALOG_DATA) public editData: any, private diagRef: MatDialogRef<AddconcoursesdialogComponent>) { }

  ngOnInit(): void {
    this.concourseForm=this.formBuilder.group({
      Id: ['', Validators.required],
      messageid: ['', Validators.required],
      stationidenficationcode: ['', Validators.required],
      stationname: ['', Validators.required],
      Departures: ['', Validators.required],
      FirstRowTime: ['', Validators.required],
      FirstRowTimeC: ['', Validators.required],
      fttdestinationnumber: ['', Validators.required],
      fttdestinatinationname: ['', Validators.required],
      fttplatformno: ['', Validators.required],
      SecRowTime: ['', Validators.required],
      SecRowTimeC: ['', Validators.required],
      sttdestinationnumber: ['', Validators.required],
      sttdestinationname: ['', Validators.required],
      sttplatformno: ['', Validators.required],
      ThirRowTime: ['', Validators.required],
      ThirRowTimeC: ['', Validators.required],
      tttdestinationnumber: ['', Validators.required],
      tttplatformnumber: ['', Validators.required],
      tttdestinationname: ['', Validators.required],
      RecDatetime: ['', Validators.required],
      FlipLanguage: ['', Validators.required],
      FlipLanguage2: ['', Validators.required]
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn="Update";
      this.concourseForm.controls['Id'].setValue(this.editData.Id);
      this.concourseForm.controls['messageid'].setValue(this.editData.messageid);
      this.concourseForm.controls['stationidenficationcode'].setValue(this.editData.stationidenficationcode);
      this.concourseForm.controls['stationname'].setValue(this.editData.stationname);
      this.concourseForm.controls['Departures'].setValue(this.editData.Departures);
      this.concourseForm.controls['FirstRowTime'].setValue(this.editData.FirstRowTime);
      this.concourseForm.controls['FirstRowTimeC'].setValue(this.editData.FirstRowTimeC);
      this.concourseForm.controls['fttdestinationnumber'].setValue(this.editData.fttdestinationnumber);
      this.concourseForm.controls['fttdestinatinationname'].setValue(this.editData.fttdestinatinationname);
      this.concourseForm.controls['fttplatformno'].setValue(this.editData.fttplatformno);
      this.concourseForm.controls['SecRowTime'].setValue(this.editData.SecRowTime);
      this.concourseForm.controls['SecRowTimeC'].setValue(this.editData.SecRowTimeC);
      this.concourseForm.controls['sttdestinationnumber'].setValue(this.editData.sttdestinationnumber);
      this.concourseForm.controls['sttdestinationname'].setValue(this.editData.sttdestinationname);
      this.concourseForm.controls['sttplatformno'].setValue(this.editData.sttplatformno);
      this.concourseForm.controls['ThirRowTime'].setValue(this.editData.ThirRowTime);
      this.concourseForm.controls['ThirRowTimeC'].setValue(this.editData.ThirRowTimeC);
      this.concourseForm.controls['tttdestinationnumber'].setValue(this.editData.tttdestinationnumber);
      this.concourseForm.controls['tttplatformnumber'].setValue(this.editData.tttplatformnumber);
      this.concourseForm.controls['tttdestinationname'].setValue(this.editData.tttdestinationname);
      this.concourseForm.controls['RecDatetime'].setValue(this.editData.RecDatetime);
      this.concourseForm.controls['FlipLanguage'].setValue(this.editData.FlipLanguage);
      this.concourseForm.controls['FlipLanguage2'].setValue(this.editData.FlipLanguage2);
    }
  }
  addConcourse(){
    // console.log(this.concourseForm.value);
    if(!this.editData){
      if(this.concourseForm.valid){
        this.testApi.postConcourseDetail(this.concourseForm.value)
        .subscribe({
          next: (res)=>{
            alert("Concourses Details Posted");
            this.concourseForm.reset();
            this.diagRef.close();
          },
          error:()=>{
            alert("Error while trying to posting Data's");
          }
        })
      }
    }
    else{
      this.updateConcourse()
    }
  }
  updateConcourse(){
    this.testApi.updateConcourse(this.concourseForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Concourse Updated Sucessefully");
        this.concourseForm.reset();
        this.diagRef.close();
      },
      error:()=>{
        alert("Error while Updating");
      }
    })
  }
}
