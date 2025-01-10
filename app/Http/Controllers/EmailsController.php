<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailsController extends Controller
{
    public function EmailsInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT 
            EmployeeEmails.EmployeeID,
            EmployeeEmails.CompanyCode,
            EmployeeEmails.MailAddress,
            EmployeeEmails.JapaneseAdviserEmail,
            EmployeeEmails.CreatedDate,
            EmployeeEmails.DeletedDate,
            EmployeeEmails.UpdatedDate,
            EmployeeEmails.EmployeeName 
        FROM EmployeeEmails WHERE DeletedDate IS NULL
        ORDER BY CreatedDate DESC
        "));
        return $systemList;
    }
    public function AddEmails(Request $request){
        DB::connection("HPM")
        ->table("EmployeeEmails")
        ->insert([
            'CompanyCode' => $request->CompanyCode,
            'EmployeeID' => $request->EmployeeID,
            'EmployeeName' => $request->EmployeeName,
            'MailAddress' => $request->MailAddress,
            'JapaneseAdviserEmail' => $request->JapaneseAdviserEmail,
            'CreatedDate' =>$request->CreatedDate,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy,

        ]);
        return $request;
    }
    public function UpdateEmails(Request $request){
        DB::connection("HPM")
        ->table("EmployeeEmails")
        ->where('EmployeeID', '=', $request->EmployeeID)
        ->update([
            'EmployeeName' => $request->EmployeeName,
            'MailAddress' => $request->MailAddress,
            'JapaneseAdviserEmail' => $request->JapaneseAdviserEmail,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy,
        ]);
        return $request;
    }
    public function SoftDeleteEmails(Request $request){
        DB::connection("HPM")
        ->table("EmployeeEmails")
        ->where('EmployeeID', '=', $request->EmployeeID)
        ->update([
            'DeletedDate' =>$request->DeletedDate,
        ]);
        return $request;
    }
}
