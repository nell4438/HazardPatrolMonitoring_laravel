<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriesController extends Controller
{
    public function CategoriesInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT * FROM HazardCategories
        ORDER BY CatName ASC
        "));
        return $systemList;
    }
    public function AddCategories(Request $request){
        DB::connection("HPM")
        ->table("HazardCategories")
        ->insert([
            'CompanyCode' => $request->CompanyCode,
            'CatID' => $request->CatID,
            'CatName' => $request->CatName,
            'CreatedDate' =>$request->CreatedDate,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy

        ]);
        return $request;
    }
    public function UpdateCategories(Request $request){
        DB::connection("HPM")
        ->table("HazardCategories")
        ->where('CatID', '=', $request->CatID)
        ->update([
            'CatName' => $request->CatName,
            'UpdatedDate' =>$request->UpdatedDate,
            'UpdatedBy' =>$request->UpdatedBy
        ]);
        return $request;
    }
    public function softDeleteCategories(Request $request){
        DB::connection("HPM")
        ->table("HazardCategories")
        ->where('CatID', '=', $request->CatID)
        ->update([
            'DeletedDate' =>$request->DeletedDate,
        ]);
        return $request;
    }
}
