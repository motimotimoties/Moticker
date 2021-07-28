<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\User_auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class UserRegist extends Controller
{
    //
    public function index()
    {
        $user = User::all();
        return response()->json(['user' => $user]);
    }

    public function store(Request $request)
    {
        $email = $request['email'];
        $res = User_auth::select('id')->where('email', $email)->first();
        
        if (!$res) {
            $user_auth = new User_auth;
            $user_auth->email = $email;
            $user_auth->token = strtoupper(Str::random(6));
            $user_auth->save();
            $res = User_auth::select('id')->where('email', $email)->first();
            $id = $res->id;
        }
        else {
            ini_set("log_errors", "On");
            ini_set("error_log", "php://stderr");
            $id = $res->id;
            $item = User_auth::where('id', $id)->first();
            $item->token = strtoupper(Str::random(6));
            $item->save();
        }

        $res = User_auth::select('token')->where('id', $id)->first();
        $token = $res->token;

        return response()->json($id);
    }

    public function regist(Request $request)
    {
        $id = $request['id'];
        $token = $request['token'];

        $res = User_auth::select('email')->where('id', $id)->where('token', $token)->first();
        $email = $res->email;
        $res = User_auth::select('id')->where('email', $email)->first();
        $res->status = 1;
        $res->save();
        $id = $res->id;

        return response()->json($id);
    }

    public function signup(Request $request)
    {
        $user_auth_id = $request['id'];
        $name = $request['name'];

        $status = User_auth::select('status')->where('id', $user_auth_id)->first();
        $email = User_auth::select('email')->where('id', $user_auth_id)->first();
        $status = $status->status;
        $email = $email->email;

        if ($status == 1) {
            $user = new User;
            $user->email = $email;
            $user->name = $name;
            $user->remember_token = Str::random(26);
            $user->save();

            $user_auth = User_auth::where('id', $user_auth_id)->first();
            $user_auth->status = 0;
            $user_auth->save();

            $id = $user->id;
    
            return response()->json($id);
        }
    }
}
