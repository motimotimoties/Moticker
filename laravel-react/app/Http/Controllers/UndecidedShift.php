<?php

namespace App\Http\Controllers;

use App\Models\Undecided_shift;
use App\Models\User;
use App\Models\Workspace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UndecidedShift extends Controller
{
    //
    public function index(Request $request)
    {
        $users_id = $request['users_id'];
        $workspace_id = $request['workspace_id'];
        if (User::join('workspaces', 'users.id', '=', 'workspaces.user_id')->where('workspaces.user_id', $users_id)->first()) {
            $undefinde_shift = User::join('workspaces', 'users.workspace_id', '=', 'workspaces.id')->join('undecided_shifts','undecided_shifts.user_id', '=', 'users.id')->select('workspaces.name', 'undecided_shifts.date', 'undecided_shifts.enter_time', 'undecided_shifts.exit_time', 'users.name as user')->where('users.workspace_id', $workspace_id)->get();
            return response()->json($undefinde_shift);
        } else {
            $workspace_users = DB::table('users')->join('workspaces', 'users.workspace_id', '=', 'workspaces.id')->join('undecided_shifts','undecided_shifts.user_id', '=', 'users.id')->select('workspaces.name', 'workspaces.id as workspaces_id', 'users.id as users_id', 'undecided_shifts.date', 'undecided_shifts.enter_time', 'undecided_shifts.exit_time', 'users.name as user')->where('users.id', $users_id)->get();
        }
        return response()->json($workspace_users);
    }
}
