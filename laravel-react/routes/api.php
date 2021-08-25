<?php

use App\Http\Controllers\UserRegist;
use App\Http\Controllers\MakeworkspaceController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ShiftregistController;
use App\Http\Controllers\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user', [UserRegist::class, 'index']);

Route::post('/userCreate', [UserRegist::class, 'store']);

Route::post('/userRegist', [UserRegist::class, 'regist']);
Route::post('/signup', [UserRegist::class, 'signup']);

Route::post('/makeworkspace', [MakeworkspaceController::class, 'store']);
Route::post('/makeworkspace/update', [MakeworkspaceController::class, 'update']);
Route::post('/makeworkspace/delete', [MakeworkspaceController::class, 'delete']);

Route::post('/shiftregist', [ShiftregistController::class, 'store']);
// Route::post('/shiftregist/update', [ShiftregistController::class, 'update']);
// Route::post('/shiftregist/delete', [ShiftregistController::class, 'dalete']);

Route::post('/mastershiftregist', [MasterShiftregistController::class, 'store']);
// Route::post('/mastershiftregist', [MasterShiftregistController::class, 'store']);
// Route::post('/mastershiftregist', [MasterShiftregistController::class, 'store']);

Route::get('/registermail/register', [RegisterController::class, 'register']);

Route::post('/emailChk', [Users::class, 'index']);
Route::post('/workspaceChk', [Users::class, 'show']);
