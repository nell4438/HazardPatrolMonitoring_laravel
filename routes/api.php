<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\usersController;
use App\Http\Controllers\AreasController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\SafetyOfficerController;
use App\Http\Controllers\DepartmentsController;
use App\Http\Controllers\ReasonsController;
use App\Http\Controllers\HPMController;
use App\Http\Controllers\loginController;
use App\Http\Controllers\SO_HazardMonitoringController;
use App\Http\Controllers\EmailsController;
use App\Http\Controllers\HazardStatusController;
use App\Http\Controllers\SendEmailController;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/users', [UserController::class, 'index']);
Route::post('/getUser', function (Request $request) {
    // return $request;
    return User::find($request->id);
});


Route::post('/usersInfo', [usersController::class, 'usersInfo']);
Route::get('/userRights', [usersController::class, 'userRights']);
Route::post('/AddUsers', [usersController::class, 'AddUsers']);
Route::post('/UpdateUsers', [usersController::class, 'UpdateUsers']);
Route::post('/UpdateUsers', [usersController::class, 'UpdateUsers']);
Route::post('/softDeleteUsers', [usersController::class, 'softDeleteUsers']);


Route::get('/AreasInfo', [AreasController::class, 'AreasInfo']);
Route::post('/AddAreas', [AreasController::class, 'AddAreas']);
Route::post('/UpdateAreas', [AreasController::class, 'UpdateAreas']);
Route::post('/softDeleteAreas', [AreasController::class, 'softDeleteAreas']);


Route::get('/CategoriesInfo', [CategoriesController::class, 'CategoriesInfo']);
Route::post('/AddCategories', [CategoriesController::class, 'AddCategories']);
Route::post('/UpdateCategories', [CategoriesController::class, 'UpdateCategories']);
Route::post('/softDeleteCategories', [CategoriesController::class, 'softDeleteCategories']);


Route::get('/SafetyOfficerInfo', [SafetyOfficerController::class, 'SafetyOfficerInfo']);
Route::post('/AddSafetyOfficers', [SafetyOfficerController::class, 'AddSafetyOfficers']);
Route::post('/UpdateSafetyOfficers', [SafetyOfficerController::class, 'UpdateSafetyOfficers']);
Route::post('/softDeleteSafetyOfficers', [SafetyOfficerController::class, 'softDeleteSafetyOfficers']);



Route::get('/DeptInfo', [DepartmentsController::class, 'DeptInfo']);
Route::post('/AddDepartment', [DepartmentsController::class, 'AddDepartment']);
Route::post('/UpdateDepartment', [DepartmentsController::class, 'UpdateDepartment']);
Route::post('/softDeleteDepartment', [DepartmentsController::class, 'softDeleteDepartment']);


Route::get('/ReasonInfo', [ReasonsController::class, 'ReasonInfo']);


Route::get('/Patrolview', [HPMController::class, 'Patrolview']);
Route::post('/getPatrolViewByDate', [HPMController::class, 'getPatrolViewByDate']);
Route::post('/postAddRecord', [HPMController::class, 'postAddRecord']);
// Route::post('/postAddRecord2',[HPMController::class,'postAddRecord2']); 
Route::post('/postUpdateRecord', [HPMController::class, 'postUpdateRecord']);
Route::post('/softDeleteHPM', [HPMController::class, 'softDeleteHPM']);
Route::post('/confirmedHPM', [HPMController::class, 'confirmedHPM']);
Route::post('/unconfirmedHPM', [HPMController::class, 'unconfirmedHPM']);


Route::post('/UserLogin', [loginController::class, 'UserLogin']);
Route::get('/getLog', [loginController::class, 'getLog']);


Route::get('/GetHazard', [SO_HazardMonitoringController::class, 'GetHazard']);
Route::get('/GetHazard2/{year}/{areaName}', [SO_HazardMonitoringController::class, 'GetHazard2']);



Route::get('/EmailsInfo', [EmailsController::class, 'EmailsInfo']);
Route::post('/AddEmails', [EmailsController::class, 'AddEmails']);
Route::post('/UpdateEmails', [EmailsController::class, 'UpdateEmails']);
Route::post('/SoftDeleteEmails', [EmailsController::class, 'SoftDeleteEmails']);




Route::get('/StatusInfo', [HazardStatusController::class, 'StatusInfo']);

// added

Route::post('/upload', [HPMController::class, 'upload']);
Route::post('/copy', [HPMController::class, 'copy']);
Route::post('/move', [HPMController::class, 'move']);
Route::post('/generateControlNo', [HPMController::class, 'generateControlNo']);


/* -------------------------------------------------------------------------- */
/*                                SENDING EMAIL                               */
/* -------------------------------------------------------------------------- */

Route::post('send_email', [SendEmailController::class, 'send_email']);
Route::get('send_email_query', [SendEmailController::class, 'send_email_query']);
Route::get('click_approved_in_email', [SendEmailController::class, 'click_approved_in_email']);

/* ----------------------------- GET EMAIL DATE ----------------------------- */
Route::post('/getEmailDate', [HPMController::class, 'getEmailDate']);



