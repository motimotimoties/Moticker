<?php

namespace App\Http\Controllers;

use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserLogin extends Controller
{
    private $userEmail;

    // emailとtokenが一致するレコードをuser_auth_tableからもってくる
    // なければ常にNULLを返す
    private function getIdWithToken(Request $request) {
        $userTokenFlag = DB::table('user_auth')->where([['id', $request['id']], ['token'], $request['token']])->exists();
        if($userTokenFlag) {
            $userAuthTable = DB::table('user_auth')->where([['id', $request['id']], ['token'], $request['token']])->first();
            $this->userEmail = $userAuthTable->email;
        } else {
            return null;
        }
        $userIdFlag = DB::table('users')->where('email', $this->userEmail)->exists();
        if($userIdFlag) {
            $userId = DB::table('usres')->where('email', $this->userEmail)->first();
            return response()->json($userId);
        } else {
            return null;
        }
    }
}
