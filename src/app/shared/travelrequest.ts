export class Travelrequest {
    RequestId:number;
    CauseTravel:string;
    Source:string;
    Destination:string;
    Mode:string;
    FromDate:Date=new Date;
    ToDate:Date=new Date;
    NoOfDays:number;
    Priority:string;
    ProjectId:number;
    EmpId:number;
    Status:string;
}
