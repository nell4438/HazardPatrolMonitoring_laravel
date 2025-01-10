<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SafetyOfficerController extends Controller
{
    public function SafetyOfficerInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        
        SELECT 
                SafetyOfficers.*, 
                HazardAreas.Area
            FROM SafetyOfficers
            LEFT JOIN HazardAreas
            ON SafetyOfficers.AreaID = HazardAreas.AreaID 
        WHERE SafetyOfficers.DeletedDate IS NULL AND HazardAreas.DeletedDate IS NULL
        ORDER BY SafetyOfficers.CreatedDate DESC
        "));
        return $systemList;
        //SELECT * FROM SafetyOfficers
    }
    public function AddSafetyOfficers(Request $request){
        DB::connection("HPM")
        ->table("SafetyOfficers")
        ->insert([
            'CompanyCode' => $request->CompanyCode,
            'AreaID' => $request->AreaID,
            'EmployeeCode' => $request->EmployeeCode,
            'EmployeeName' => $request->EmployeeName,
            'CreatedDate' =>$request->CreatedDate,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy

        ]);
        return $request;
    }
    public function UpdateSafetyOfficers(Request $request){
        DB::connection("HPM")
        ->table("SafetyOfficers")
        ->where('EmployeeCode', '=', $request->EmployeeCode)
        ->update([
            'AreaID' => $request->AreaID,
            'EmployeeName' => $request->EmployeeName,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy

        ]);
        return $request;
    }
    public function softDeleteSafetyOfficers(Request $request){
        DB::connection("HPM")
        ->table("SafetyOfficers")
        ->where('EmployeeCode', '=', $request->EmployeeCode)
        ->update([
            'DeletedDate' =>$request->DeletedDate,

        ]);
        return $request;
    }
}
