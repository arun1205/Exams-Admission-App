import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BaseService } from 'src/app/service/base.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TableColumn } from 'src/app/interfaces/interfaces';
import { mergeMap, of } from 'rxjs';


interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-fee-management-admin',
  templateUrl: './fee-management-admin.component.html',
  styleUrls: ['./fee-management-admin.component.scss']
})
export class FeeManagementAdminComponent implements OnInit {
    //#region (global variables)
  isDataLoading: boolean = false;
  instituteData: any[] =[];
  studentData:any[] = [];
  searcControl = '';
  searchKey = '';
  showInstitutesTable = true;
  instituteTableHeader: TableColumn[] = [];
  studentExamsTableHeader: TableColumn[] = [];
  courses: Course[] = [
    {value: 'bsc', viewValue: 'BSc'},
    {value: 'msc', viewValue: 'MSc'},
  ];

  examCycleList = []


  breadcrumbItems = [
    { label: 'Fee Management', url: '' },
  ]
  
  //#endregion

  examCycleControl = new FormControl('',[Validators.required]);

  constructor(
    private baseService : BaseService
  ) {this.instituteTableData()}

  ngOnInit(): void {
    this.intialisation()
  }

  intialisation() {
    // this.getExamCycles()
    // this.getInstitutesData()
    this.initializeColumns();
    this.instituteTableData();
    this.initializeStudentColumns();
    // this.studentExamsTableData();
  }

  initializeColumns():void{
    this.instituteTableHeader = [];
   this.instituteTableHeader = [
    {
      header: 'Institute name',
      columnDef: 'institute.instituteName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['institute.instituteName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      },
    },{
      header: 'Course name',
      columnDef: 'courseName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['courseName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Institute code',
      columnDef: 'instituteCode',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['instituteCode']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Students register',
      columnDef: 'registerStudentsCount',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['registerStudentsCount']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
    },{
      header: 'Students paid',
      columnDef: 'paidStudentsCount',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['paidStudentsCount']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
    },{
      header: 'Total fee paid',
      columnDef: 'amount',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['amount']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '145px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'viewList',
      cell: (element: Record<string, any>) => `View List`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '160px', 'color': '#00000099'
      },
      isAction: true,
      showDeleteIcon: false,
    },
    ]
}
  instituteTableData() {
    this.isDataLoading = true;
    this.baseService.getFeeTableData$()
  /*   .pipe((mergeMap((response: any) => {
      return this.formateInstituteTableData(response)
    }))) */
    .subscribe({
      next:(res:any)=>{
       // this.instituteData = res.formatedInstituteTableDataList
       console.log(res.responseData.examFees)
       this.instituteData = res.responseData.examFees
       this.isDataLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.isDataLoading = false;
        console.log(error)
      }

    })

  }

  formateInstituteTableData(response: any) {
    const formatedInstituteTableData: {
      formatedInstituteTableDataList: any[]
    } = {
      formatedInstituteTableDataList: []
    }

    if (response) {
      response.forEach((instituteData: any) => {
        const formatedInstitutesData = {
          instituteName: instituteData.instituteName,
          courseName: instituteData.courseName,
          instituteCode: instituteData.instituteCode,
          registerStudentsCount: instituteData.registerStudentsCount,
          paidStudentsCount: instituteData.paidStudentsCount,
          totalFeePaid: instituteData.totalFeePaid,
          viewList: instituteData.viewList,
          classes: {
            viewList: ['cursor-pointer', 'color-blue']
          }
        }

        formatedInstituteTableData.formatedInstituteTableDataList.push(formatedInstitutesData)
      })
    }

    return of(formatedInstituteTableData);
  }

 initializeStudentColumns():void{
  this.studentExamsTableHeader = [];
  this.studentExamsTableHeader = [
    {
      header: 'Full name',
      columnDef: 'studentName',
      isSortable: true,
      cell: (element: Record<string, any>) => `${element['studentName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      },
    },{
      header: 'Enrolement Number',
      columnDef: 'enrolementNumber',
      cell: (element: Record<string, any>) => `${element['enrolementNumber']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'Course name',
      columnDef: 'courseName',
      cell: (element: Record<string, any>) => `${element['courseName']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'Exam',
      columnDef: 'exams',
      cell: (element: Record<string, any>) => `${element['exams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'No. of Exams',
      columnDef: 'numberOfExams',
      cell: (element: Record<string, any>) => `${element['numberOfExams']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: 'Fee',
      columnDef: 'fee',
      cell: (element: Record<string, any>) => `${element['fee']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },{
      header: '',
      columnDef: 'status',
      cell: (element: Record<string, any>) => `${element['status']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '100px', 'color': '#00000099'
      },
    },
  ]
 }

 getStudentFeesListForInstitute(){
    this.isDataLoading = true;
    let paymentRefNo = "1851697786049740a04b2866-5e5f-4056-94e8-73f29affacfd";
    this.baseService.getStudentFeesListForInstitute$(paymentRefNo)
    .pipe(mergeMap((response: any)=> {
      return this.formateStudentData(response.responseData)
    }))
    .subscribe({
      next:(res:any)=>{
        console.log(res)
        this.studentData = res.studentsExamDetailsList;
     

      },
      error: (error: HttpErrorResponse) => {
        this.isDataLoading = false;
        console.log(error)
      }

    })

  } 

  formateStudentData(response: any) {
    const studentsExamDetails: {
      studentsExamDetailsList: any[]
    } = {
      studentsExamDetailsList: []
    }
    if (response) {
      response.forEach((examDetails: any) => {
        console.log(examDetails.student)
        const studentExamDetial = {
          studentName: examDetails.student.firstName +" "+ examDetails.student.surname,
          enrolementNumber: examDetails.student.enrollmentNumber,
          courseName: examDetails.student.course.courseName,
          exams: examDetails.student.intermediateSubjects,
          numberOfExams: examDetails.student.intermediateSubjects,
          fee: examDetails.student.amount,
          status: examDetails.status,
          classes: {
            status: ['color-green']
          },
        }

        studentsExamDetails.studentsExamDetailsList.push(studentExamDetial)
      })
    }

    return of(studentsExamDetails);

  }
  
 
  

  getExamCycles() {
    // this.feeManagementService.getExamCycles()
    // .subscribe((examCucles: any) => {
    //   this.examCycleList = examCucles
    // })
  }

  getInstitutesData(searchKey: string = '') {
    // this.feeManagementService.getInstitutesData(searchKey)
    // .subscribe((InstitutesData: any) => {
    //   this.instituteTableData = InstitutesData
    // })
  }

  getExamsOfInstitute(instituteId: string) {
    // .subscribe((examsFeeDetails: any) => {
    //   this.studentExamsTableData = examsFeeDetails
    // })
  }

  search() {
    this.searchKey = this.searcControl
    this.showInstitutesTable = true
  }

  onSelectedInstitute(event: any) {
    if (event) {
      // this.instituteTableData = []
      // this.feeManagementService.getExamsOfInstitute('')
      // .subscribe((exams: any) => {
      //   this.instituteTableData = exams
      // })
    }
    this.getStudentFeesListForInstitute()
    this.showInstitutesTable = false

  }


}
