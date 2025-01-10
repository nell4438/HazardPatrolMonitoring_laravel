<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepartmentsController extends Controller
{
    public function DeptInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT * FROM FSEDepartmentsMaster 
        WHERE DeletedDate IS NULL
        ORDER BY DepartmentName ASC
        "));
        return $systemList;
    }
    public function AddDepartment(Request $request){
        DB::connection("HPM")
        ->table("FSEDepartmentsMaster")
        ->insert([
            'FSECompanyCode' => $request->FSECompanyCode,
            'CompanyCode' => $request->CompanyCode,
            'DepartmentCode' => $request->DepartmentCode,
            'DepartmentName' => $request->DepartmentName,
            'isOthers' => $request->isOthers,
            'CreatedDate' =>$request->CreatedDate,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy
        ]);
        return $request;
    }
    public function UpdateDepartment(Request $request){
        DB::connection("HPM")
        ->table("FSEDepartmentsMaster")
        ->where('DepartmentCode', '=', $request->DepartmentCode)
        ->update([
            'DepartmentName' => $request->DepartmentName,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy

        ]);
        return $request;
    }
    public function softDeleteDepartment(Request $request){
        DB::connection("HPM")
        ->table("FSEDepartmentsMaster")
        ->where('DepartmentCode', '=', $request->DepartmentCode)
        ->update([
            'DeletedDate' =>$request->DeletedDate,
        ]);
        return $request;
    }
}
