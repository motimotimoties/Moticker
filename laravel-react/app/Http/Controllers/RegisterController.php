<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\RegisterMail;
use App\Models\User;
use App\Models\User_auth;

class RegisterController extends Controller
{
    //
    public function register(Request $request) {
        // $token = 'aAaA01';
        // $token = $request['token'];
        $email = $request['email'];



        // $mail = User_auth::select('email')->where('id', $id)->first();
        // $token = User_auth::select('token')->where('id', $id)->first();
        
        // $data = [];



        // Mail::send('register_mail', $data, function($message){
        //     $message
        //         ->to($mail)
        //         ->subject('[Moticker]メール認証コード');
        // });

        $user = User_auth::find_by('email', $email);

        Mail::to($user)->send(new RegisterMail($user));
    }
}
