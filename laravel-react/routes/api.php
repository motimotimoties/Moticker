<?php

use App\Http\Controllers\UserRegist;
use App\Http\Controllers\MakeworkspaceController;
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


Route::post('/makeworkspace', [MakeworkspaceController::class, 'store']);
Route::post('/makeworkspace/update', [MakeworkspaceController::class, 'update']);
Route::post('/makeworkspace/delete', [MakeworkspaceController::class, 'delete']);

