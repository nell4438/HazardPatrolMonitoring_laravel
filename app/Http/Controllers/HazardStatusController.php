<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HazardStatusController extends Controller
{
    public function StatusInfo()
    {
        return DB::connection('HPM')
            ->select(DB::raw("
        SELECT * FROM HazardStatus
        "));
    }
}
