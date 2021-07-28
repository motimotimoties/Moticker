<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Workspace;
use Illuminate\Support\Facades\Cookie;

class MakeworkspaceController extends Controller
{
    public function store(Request $request)
    {
    	$name = $request['name'];
    	$user_id = $request['user_id'];

    	$workspace = new Workspace;
    	$workspace->name = $name;
    	$workspace->user_id = $user_id;
    	$workspace->save();

    	// $res = Workspace::select('id')->where('user_id', $user_id)->first();
    	$id = $workspace->id;
		
		$user = User::where('id', $user_id)->first();
		$user->workspace_id = $id;
		$user->save();

		$user_token = User::select('remember_token')->where('id', $user_id)->first();

		Cookie::queue('key', $user_token, 999999);

    	return response()->json($name);
    }

    public function update(Request $request)
    {
    	$name = $request['name'];
    	$user_id = $request['user_id'];
    	$id = $request['id'];

    	Workspace::where('id', $id)->update(['name' => $name, 'user_id' => $user_id]);
		return response()->json($id);
    }

    public function dalete(Request $request)
    {
    	$id = $request['id'];

    	Workspace::find($id)->delete();

		return response()->json($id);
    }
}
