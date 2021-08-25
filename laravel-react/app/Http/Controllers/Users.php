<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class Users extends Controller
{
    //
    public function index(Request $request) {
        $user_id = $request['user_id'];
        $email = User::select('email')->where('id', $user_id)->first();
        $workspace_users = DB::table('users')->join('workspaces', 'users.id', '=', 'workspaces.user_id')->select('workspaces.name', 'workspaces.id as workspaces_id', 'users.id as users_id')->where('email', $email)->get();
        return response()->json($email);
    }

    public function show(Request $request) {
        $email = $request['email'];
        $workspace_users = DB::table('users')->join('workspaces', 'users.id', '=', 'workspaces.user_id')->select('workspaces.name', 'workspaces.id as workspaces_id', 'users.id as users_id')->where('email', $email)->get();
        return response()->json($workspace_users);
        
    }
}
