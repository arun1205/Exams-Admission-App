import { Component } from '@angular/core';

@Component({
  selector: 'app-hall-ticket',
  templateUrl: './hall-ticket.component.html',
  styleUrls: ['./hall-ticket.component.scss']
})
export class HallTicketComponent {

  hallTicketDetails = {
    exmaCycleName: 'Exam Cycle 1',
    studentDetails: {
      firstName: 'Rajash',
      lastName: 'Kumaravel',
      roolNumber: '12345 89078',
      DOB: '24-01-1998',
    }, 
    hallTicketDetqails: {
      courseName: 'M. Sc. Nursing',
      courseYear: '2022 - 2023'
    }
  }

  examTableHeader = [
    {
      header: 'Name of exam',
      columnDef: 'examName',
      cell: (element: Record<string, any>) => `${element['examName']}`,
      cellStyle: {
        'background-color': '#0000000a',
        'color': '#00000099'
      }
    },{
      header: 'Exam date',
      columnDef: 'examDate',
      cell: (element: Record<string, any>) => `${element['examDate']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'Exam time',
      columnDef: 'examTime',
      cell: (element: Record<string, any>) => `${element['examTime']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },{
      header: 'Duration',
      columnDef: 'examDuration',
      cell: (element: Record<string, any>) => `${element['examDuration']}`,
      cellStyle: {
        'background-color': '#0000000a', 'width': '135px', 'color': '#00000099'
      }
    },
  ]

  examTableData= [
    {
      examName: 'Exam 1', 
      examDate: '23-03-2024', 
      examTime: '10:00 AM',
      examDuration: '3 Hours',
    },{
      examName: 'Exam 2', 
      examDate: '24-03-2024', 
      examTime: '10:00 AM',
      examDuration: '3 Hours',
    },{
      examName: 'Exam 3', 
      examDate: '25-03-2024', 
      examTime: '10:00 AM',
      examDuration: '3 Hours',
    },
  ]

  isHallTicket = true

}