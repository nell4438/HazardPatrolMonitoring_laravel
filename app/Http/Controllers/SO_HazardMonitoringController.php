<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SO_HazardMonitoringController extends Controller
{
    public function GetHazard(){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT  SafetyOfficers.EmployeeName, 
                SafetyOfficers.EmployeeCode,
                SafetyOfficers.DeletedDate,
                HazardAreas.Area,
                HazardAreas.AreaID
        FROM SafetyOfficers 
            JOIN HazardAreas
                ON SafetyOfficers.AreaID = HazardAreas.AreaID
        "));
        return $systemList;
        // WHERE HazardPatrolMonitoring.InspectionDate = '2022/01/03'
    }
    public function GetHazard2($year, $areaName){
        $systemList = DB::connection('HPM')
        ->select(DB::raw("
        SELECT 
            HazardSafetyOfficers.EmployeeCode,
            HazardAreas.Area,
            SafetyOfficers.EmployeeName,
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 1 THEN 1 ELSE 0 END) AS 'January',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 2 THEN 1 ELSE 0 END) AS 'February',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 3 THEN 1 ELSE 0 END) AS 'March',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 4 THEN 1 ELSE 0 END) AS 'April',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 5 THEN 1 ELSE 0 END) AS 'May',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 6 THEN 1 ELSE 0 END) AS 'June',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 7 THEN 1 ELSE 0 END) AS 'July',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 8 THEN 1 ELSE 0 END) AS 'August',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 9 THEN 1 ELSE 0 END) AS 'September',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 10 THEN 1 ELSE 0 END) AS 'October',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 11 THEN 1 ELSE 0 END) AS 'November',
            SUM(CASE datepart(month,HazardPatrolMonitoring.InspectionDate) WHEN 12 THEN 1 ELSE 0 END) AS 'December',
            SUM(CASE datepart(year, HazardPatrolMonitoring.InspectionDate) WHEN '$year' THEN 1 ELSE 0 END) AS 'TOTAL'
        FROM HazardPatrolMonitoring
            JOIN HazardSafetyOfficers
                ON HazardPatrolMonitoring.ControlNo = HazardSafetyOfficers.ControlNo
            JOIN HazardAreas
                ON HazardAreas.AreaID = HazardPatrolMonitoring.AreaID
            JOIN SafetyOfficers
                ON SafetyOfficers.EmployeeCode = HazardSafetyOfficers.EmployeeCode
        WHERE HazardPatrolMonitoring.InspectionDate LIKE '%$year%' AND HazardAreas.Area = '$areaName'
        GROUP BY  HazardSafetyOfficers.EmployeeCode, HazardAreas.Area, SafetyOfficers.EmployeeName
        "));
        return $systemList;
    }
}