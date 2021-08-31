<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\User_auth;
use Illuminate\Http\Request;

class Invite extends Controller
{
    //
    public function auth(Request $request)
    {
        $user_auth_id = $request['user_auth_id'];
        $token = $request['token'];
        $workspace_id = $request['workspace_id'];

        $res = User_auth::select('email')->where('id', $user_auth_id)->where('token', $token)->first();
        $email = $res->email;
        $user = new User;
        $user->email = $email;
        $user->workspace_id = $workspace_id;
        $user->save();
        $user_id = $user->id;

        return response()->json($user_id);
    }
    public function name(Request $request)
    {
        $user_id = $request['user_id'];
        $name = $request['name'];
        $user = User::find($user_id);
        $user -> name = $name;
        $user->save();

        return response()->json($user_id);

    }
}
