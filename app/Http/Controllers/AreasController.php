<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AreasController extends Controller
{
    public function AreasInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT * FROM HazardAreas 
        ORDER BY AreaID ASC
        "));
        return $systemList;
    }
    public function AddAreas(Request $request){
        DB::connection("HPM")
        ->table("HazardAreas")
        ->insert([
            'CompanyCode' => $request->CompanyCode,
            'AreaID' => $request->AreaID,
            'Area' => $request->Area,
            'CreatedDate' =>$request->CreatedDate,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy,

        ]);
        return $request;
    }
    public function UpdateAreas(Request $request){
        DB::connection("HPM")
        ->table("HazardAreas")
        ->where('AreaID', '=', $request->AreaID)
        ->update([
            'Area' => $request->Area,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy

        ]);
        return $request;
    }
    public function softDeleteAreas(Request $request){
        DB::connection("HPM")
        ->table("HazardAreas")
        ->where('AreaID', '=', $request->AreaID)
        ->update([
            'DeletedDate' =>$request->DeletedDate,

        ]);
        return $request;
    }
}
