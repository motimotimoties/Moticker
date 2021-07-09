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



Route::post('/Makeworkspace', [MakeworkspaceController::class, 'store']);
Route::post('/Makeworkspace', [MakeworkspaceController::class, 'update']);
Route::post('/Makeworkspace', [MakeworkspaceController::class, 'delete']);

Route::post('/userCreate', [UserRegist::class, 'store']);
