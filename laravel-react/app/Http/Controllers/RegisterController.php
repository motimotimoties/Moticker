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
        $id = $request['id'];
        $data = [];

        $mail = User_auth::select('mail')->where('id', $id)->first();
        $token = User_auth::select('token')->where('id', $id)->first();

        // Mail::send(new RegisterMail($token));
        // return view('registers.index');
        Mail::send('register_mail', $data, function($message){
            $message->to('keitaford@icloud.com', 'K.R.')
            ->subject('[Moticker]メール認証コード');
        });
    }
}
