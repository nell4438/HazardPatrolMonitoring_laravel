<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
// use DB;
use Illuminate\Support\Facades\DB;



class usersController extends Controller
{
    public function usersInfo()
    {
        $systemList = DB::connection('HPM')
            ->select(DB::raw("
        SELECT 
            Users.EmployeeName,
            Users.UserID,
            Users.CompanyCode,
            Users.Password, 
            M_UsersRights.Users_Rights, 
            M_UsersRights.UserLevel, 
            HazardAreas.Area, 
            HazardAreas.AreaID
        FROM Users
            LEFT JOIN M_UsersRights 
                ON M_UsersRights.UserLevel = Users.UserLevel
            LEFT JOIN HazardAreas  
                ON HazardAreas.AreaID = Users.AreaID
        WHERE Users.DeletedDate IS NULL
        ORDER BY Users.CreatedDate DESC
        "));
        return $systemList;
    }
    public function userRights()
    {
        $systemList = DB::connection('HPM')
            ->select(DB::raw("
        SELECT * FROM M_UsersRights
        "));
        return $systemList;
    }
    public function AddUsers(Request $request)
    {
        DB::connection("HPM")
            ->table("Users")
            ->insert([
                'CompanyCode' => $request->CompanyCode,
                'AreaID' => $request->AreaID,
                'UserID' => $request->UserID,
                'EmployeeName' => $request->EmployeeName,
                'Password' => $request->Password,
                'UserLevel' => $request->UserLevel,
                'CreatedDate' => $request->CreatedDate,
                'UpdatedDate' => $request->UpdatedDate,
                'UpdatedBy' => $request->UpdatedBy,

            ]);
        return $request;
    }
    public function UpdateUsers(Request $request)
    {
        DB::connection("HPM")
            ->table("Users")
            ->where('UserID', '=', $request->UserID)
            ->update([

                'EmployeeName' => $request->EmployeeName,
                'UserLevel' => $request->UserLevel,
                'AreaID' => $request->AreaID,
                'UpdatedDate' => $request->UpdatedDate,
                'UpdatedBy' => $request->UpdatedBy
            ]);
        return $request;
    }
    public function softDeleteUsers(Request $request)
    {
        DB::connection("HPM")
            ->table("Users")
            ->where('UserID', '=', $request->UserID)
            ->update([
                'DeletedDate' => $request->DeletedDate,
            ]);
        return $request;
    }
}
