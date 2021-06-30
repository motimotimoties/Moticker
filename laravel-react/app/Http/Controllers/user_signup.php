<?php

namespace App\Http\Controllers;

use App\Models\User_auth;
use Illuminate\Http\Request;

class user_signup extends Controller
{
    //
    public function index()
    {
        $user_auth = User_auth::all();
    }
}
