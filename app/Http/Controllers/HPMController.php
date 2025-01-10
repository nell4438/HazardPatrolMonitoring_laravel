<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class HPMController extends Controller
{
    public function getPatrolViewByDate(Request $req)
    {
        $systemList = DB::connection('HPM')
            ->select(DB::raw("       
        SELECT HazardPatrolMonitoring.*, 
                HazardStatus.Status, 
                HazardCategories.CatName, 
                SafetyOfficers.EmployeeName,
                HazardSafetyOfficers.EmployeeCode,
                HazardAreas.Area,
                FSEDepartmentsMaster.DepartmentName
                
            FROM HazardPatrolMonitoring
            
            LEFT JOIN HazardStatus
            ON HazardPatrolMonitoring.StatusID = HazardStatus.StatusID
            
            LEFT JOIN HazardCategories
            ON HazardPatrolMonitoring.CatID = HazardCategories.CatID
            
            LEFT JOIN HazardSafetyOfficers
            ON HazardPatrolMonitoring.ControlNo = HazardSafetyOfficers.ControlNo
            
            LEFT JOIN SafetyOfficers
            ON HazardSafetyOfficers.EmployeeCode = SafetyOfficers.EmployeeCode
            
            LEFT JOIN HazardAreas
            ON HazardPatrolMonitoring.AreaID = HazardAreas.AreaID

            LEFT JOIN FSEDepartmentsMaster
            ON HazardPatrolMonitoring.DepartmentID = FSEDepartmentsMaster.DepartmentCode

        WHERE HazardPatrolMonitoring.InspectionDate BETWEEN '$req->from' AND '$req->to'
        AND HazardPatrolMonitoring.CompanyID = '$req->company'
        AND HazardPatrolMonitoring.DeletedDate IS NULL
        Order by InspectionDate ASC
        "));

        return $systemList;
    }
    public function getEmailDate(Request $req)
    {
        return DB::connection('HPM')->select(DB::raw("EXEC getEmailDate @ControlNo = ?"), [$req->controlNo]);
    }
    public function generateControlNo(Request $request)
    {
        $latest_code = DB::connection('HPM')
            ->table("HazardPatrolMonitoring")
            ->where('CompanyID', $request->CompanyID)
            ->max('ControlNo');
        $last = substr($latest_code, 7);
        $lastLYM = substr($latest_code, 0, 7);
        $LetterCode = $request->CompanyID == '003' ? 'R' : 'H';
        $yearmonth = $LetterCode . date('y-m') . '-';

        if ($yearmonth != $lastLYM) {
            $final_code = $yearmonth . str_pad(1, 5, '0', STR_PAD_LEFT);
        } elseif ($yearmonth == $lastLYM) {
            $final_code = $yearmonth . str_pad($last + 1, 5, '0', STR_PAD_LEFT);
        } else {
            return 'Error';
        }

        // if (!is_dir("\\\\hrdapps9\\HazardPatrolMonitoring\\" . $final_code)) {
        //     mkdir("\\\\hrdapps9\\HazardPatrolMonitoring\\" . $final_code, 0700);
        // }
        return $final_code;
    }

    public function postAddRecord(Request $request)
    {
        // return $request;
        $final_code = $request->input('controlNo');
        DB::connection('HPM')
            ->table("HazardPatrolMonitoring")
            ->insert([
                'ControlNo' => $final_code,
                'CompanyID' => $request->CompanyID,
                'FSECompanyCode' => $request->FSECompanyCode,
                'DepartmentID' => $request->DepartmentID,
                'InspectionDate' => $request->InspectionDate,
                'AreaID' => $request->AreaID,
                'CatID' => $request->CatID,
                'Location' => $request->Location,
                'Observation' => $request->Observation,
                'HazardPicture' => '\\\\hrdapps9\\HazardPatrolMonitoring\\' . $final_code . '\\' . $request->HazardPictureFilename,
                'ImmediateActionTaken' => $request->ImmediateActionTaken,
                'CorrectiveAction' => $request->CorrectiveAction,
                'AfterPicture' => '\\\\hrdapps9\\HazardPatrolMonitoring\\' . $final_code . '\\' . $request->AfterPictureFilename,
                'ImplementationDate' => $request->ImplementationDate,
                'TargetDate' => $request->TargetDate,
                'StatusID' => $request->StatusID,
                'ReasonID' => $request->ReasonID,
                'ClosedDate' => $request->StatusID == 4 ? Carbon::now()->format('Y/m/d H:i:s') : null,
                'CreatedDate' => $request->CreatedDate,
                'UpdatedDate' => Carbon::now()->format('Y/m/d H:i:s'),
                'UpdatedBy' => $request->UpdatedBy
            ]);
        DB::connection('HPM')
            ->table("HazardSafetyOfficers")
            ->insert([
                'ControlNo' => $final_code,
                'EmployeeCode' => $request->EmployeeCode
            ]);
        return $final_code;
    }
    public function postUpdateRecord(Request $request)
    {

        $ClosedDate = $request->StatusID == 4 ? date_create() : null;

        DB::connection("HPM")
            ->table("HazardPatrolMonitoring")
            ->where('ControlNo', $request->ControlNo)
            ->update([
                'DepartmentID' => $request->DepartmentID,
                'AreaID' => $request->AreaID,
                'CatID' => $request->CatID,
                'Location' => $request->Location,
                'Observation' => $request->Observation,
                'HazardPicture' => $request->HazardPictureFilename ? '\\\\hrdapps9\\HazardPatrolMonitoring\\' . $request->ControlNo . '\\' . $request->HazardPictureFilename : $request->HazardPicture,
                'ImmediateActionTaken' => $request->ImmediateActionTaken,
                'CorrectiveAction' => $request->CorrectiveAction,
                'AfterPicture' => $request->AfterPictureFilename ? '\\\\hrdapps9\\HazardPatrolMonitoring\\' . $request->ControlNo . '\\' . $request->AfterPictureFilename : $request->AfterPicture,
                'ImplementationDate' => $request->ImplementationDate,
                'StatusID' => $request->StatusID,
                'ReasonID' => $request->ReasonID,
                'UpdatedDate' => $request->UpdatedDate,
                'UpdatedBy' => $request->UpdatedBy,
                'ConfirmedDate' => $request->ConfirmedDate,
                'TargetDate' => $request->TargetDate,
                'CreatedDate' => $request->CreatedDate,
                'ClosedDate' => $ClosedDate

            ]);
        // return $request;
    }

    public function upload(Request $request)
    {
        // $file = $request->file('file');
        // $path = $file->store('public');
        // $filename = $file->getClientOriginalName();
        // $end = substr($filename, strpos($filename, "."));
        // $filename = substr($filename, 0, strpos($filename, ".")) . $request->type . $end;
        // return response()->json(['path' => $path, 'filename' => $filename]);
        $mode = null;
        $filename = 'NoPicture.jpg';
        $path = 'public/' . $filename;
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('public');
            $filename = $file->getClientOriginalName();
            $end = substr($filename, strpos($filename, "."));
            $filename = substr($filename, 0, strpos($filename, ".")) . $request->type . $end;
            $mode = 'move';
        } else {
            // Check if the file exists in the storage
            $exists = Storage::disk('public')->exists($filename);
            if (!$exists) {
                // Save default NoPicture.jpg to storage if it doesn't exist
                $mode = 'copy';
                $defaultPicturePath = Storage::disk('app')->path('public/NoPicture.jpg');
                Storage::disk('public')->put($filename, file_get_contents($defaultPicturePath));
            }
        }

        return response()->json(['path' => $path, 'filename' => $filename, 'mode' => $mode]);
    }

    public function move(Request $request)
    {
        $oldPath = $request->oldPath;
        $newPath = $request->newPath;
        if ($request->mode == 'move') {
            Storage::move($oldPath, $newPath);
        } else {
            Storage::put($newPath, Storage::get($oldPath));
        }
        return response()->json(['success' => true]);
    }

    public function softDeleteHPM(Request $request)
    {
        DB::connection("HPM")
            ->table("HazardPatrolMonitoring")
            ->where('ControlNo', '=', $request->ControlNo)
            ->update([
                'DeletedDate' => $request->DeletedDate,
            ]);
        return $request;
    }

    public function confirmedHPM(Request $request)
    {
        DB::connection("HPM")
            ->table("HazardPatrolMonitoring")
            ->where('ControlNo', '=', $request->ControlNo)
            ->update([
                'ConfirmedDate' => $request->ConfirmedDate,
            ]);
        return $request->ControlNo;
    }

    // public function unconfirmedHPM(Request $request){
    //     DB::connection("HPM")
    //     ->table("HazardPatrolMonitoring")
    //     ->where('ControlNo', '=', $request->ControlNo)
    //     ->update([
    //         'ConfirmedDate' => null,
    //     ]);
    //     return $request->ControlNo;
    // }
}
