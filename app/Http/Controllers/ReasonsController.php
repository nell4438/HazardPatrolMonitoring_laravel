<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReasonsController extends Controller
{
    public function ReasonInfo(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT * FROM OngoingReasons
        "));
        return $systemList;
    }
}
