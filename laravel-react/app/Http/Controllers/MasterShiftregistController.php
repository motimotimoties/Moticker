<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Decided_shift;

class MasterShiftregistController extends Controller
{
    public function store(Request $request)
    {
        $user_id = $request['user_id'];
        $date = $request['date'];
        $enter_time = $request['enter_time'];
        $exit_time = $request['exit_time'];

        $workspace_id = $request['workspace_id'];
        $woid = User::select('id')->where('workspace_id', $workspace_id)->first();

        if(!$woid){

            $decided_shift = new Decided_shift;
            $decided_shift->user_id = $user_id;
            $decided_shift->date = $date;
            $decided_shift->enter_time = $enter_time;
            $decided_shift->exit_time = $exit_time;
            $decided_shift->save();
            // $res = decided_shift::select('id')->where('user_id', $user_id)->first();
            $id = $decided_shift->id;

            return response()->json($id);
        }
    }

    public function update(Request $request)
    {
        $user_id = $request['user_id'];
        $date = $request['date'];
        $enter_time = $request['enter_time'];
        $exit_time = $request['exit_time'];
    	$id = $request['id'];

        $decided_shift = Decided_shift::where('id', $id)->first();

        $decided_shift -> user_id = $user_id;
        $decided_shift -> date = $date;
        $decided_shift -> enter_time = $enter_time;
        $decided_shift -> exit_time = $exit_time;

        $decided_shift -> save();

        return response()->json($id);
    }

    public function delete(Request $request)
    {
    	$id = $request['id'];

    	Decided_shift::find($id)->delete();

        return response()->json($id);
    }
}
