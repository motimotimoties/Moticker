<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Undecided_shift;
use App\Models\Workspace;
use Illuminate\Support\Facades\DB;

class ShiftregistController extends Controller
{
    public function index(Request $request)
    {
        
    }

    public function store(Request $request)
    {
        $user_id = $request['user_id'];
        $date = $request['date'];
        $enter_time = $request['enter_time'];
        $exit_time = $request['exit_time'];

        // $workspace_id = $request['workspace_id'];
        // $woid = User::select('id')->where('workspace_id', $workspace_id)->first();

        $undecided_shift = new undecided_shift;
        $undecided_shift->user_id = $user_id;
        $undecided_shift->date = $date;
        $undecided_shift->enter_time = $enter_time;
        $undecided_shift->exit_time = $exit_time;
        $undecided_shift->save();
        // $res = undecided_shift::select('id')->where('user_id', $user_id)->first();
        $id = $undecided_shift->id;

        return response()->json($id);
    }

    public function update(Request $request)
    {
        $user_id = $request['user_id'];
        $date = $request['date'];
        $enter_time = $request['enter_time'];
        $exit_time = $request['exit_time'];
    	$id = $request['id'];

        $undecided_shift = Undecided_shift::where('id', $id)->first();

        $undecided_shift -> user_id = $user_id;
        $undecided_shift -> date = $date;
        $undecided_shift -> enter_time = $enter_time;
        $undecided_shift -> exit_time = $exit_time;

        $undecided_shift -> save();

        return response()->json($id);
    }

    public function delete(Request $request)
    {
    	$id = $request['id'];

    	Undecided_shift::find($id)->delete();

        return response()->json($id);
    }
}
