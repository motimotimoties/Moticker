<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserRegist extends Controller
{
    //
    public function index()
    {
        $user = User::all();
        return response()->json(['user' => $user]);
    }

    public function proRegist(Request $request)
    {
        
    }
}
