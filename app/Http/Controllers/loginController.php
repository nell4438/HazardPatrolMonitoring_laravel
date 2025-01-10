<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class loginController extends Controller
{
    public function UserLogin(Request $req)
    {
        $getsystemList = DB::connection('HPM')
            ->select("       
            SELECT u.*, master.Users_Rights
            FROM Users u
            LEFT JOIN M_UsersRights master
            ON u.UserLevel = master.UserLevel
            WHERE u.DeletedDate IS NULL
            AND u.UserID = '$req->Employee'
            AND u.Password = '$req->Pass'
            ");
        return $getsystemList;
    }
    public function getLog()
    {
        $data = DB::connection('HPM')
        ->select ("
            SELECT u.*
            FROM Users u
            JOIN SafetyOfficers s
            ON u.UserID = s.EmployeeCode
            JOIN M_UsersRights master
            ON u.UserLevel = master.UserLevel
            WHERE u.DeletedDate IS NULL");
        return $data;
    }
}
