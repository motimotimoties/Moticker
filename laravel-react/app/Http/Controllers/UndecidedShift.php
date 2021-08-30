<?php

namespace App\Http\Controllers;

use App\Models\Undecided_shift;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UndecidedShift extends Controller
{
    //
    public function index(Request $request)
    {
        $email = $request['email'];
        $users_id = $request['users_id'];
        $workspace_users = DB::table('users')->join('workspaces', 'users.id', '=', 'workspaces.user_id')->join('undecided_shifts','undecided_shifts.user_id', '=', 'users.id')->select('workspaces.name', 'workspaces.id as workspaces_id', 'users.id as users_id', 'undecided_shifts.date', 'undecided_shifts.enter_time', 'undecided_shifts.exit_time')->where('users.id', $users_id)->get();
        // $undecided_shift = Undecided_shift::where('user_id', $users_id)->get();
        // $workspace_users['enter_time'] = substr($workspace_users->enter_time, 0, 5);
        // $workspace_users['exit_time'] = substr($workspace_users->exit_time, 0, 5);
        return response()->json($workspace_users);
    }
}
