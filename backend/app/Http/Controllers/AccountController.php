<?php

namespace App\Http\Controllers;
use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Notifications\Action;
use Throwable;


//*Learnings
// We got an error in Model when we used a different model instead of the correct one
// When using postman and get the proper behavior of error we need to add "Accept: application/json" header



class AccountController extends Controller
{
    public function login(LoginRequest $request){
        
        $validated = $request -> validated();
        $account = Account::where("email",$validated["email"])
                    -> where("password",$validated["password"])
                    ->  get();

//TODO Apply frontend

        if(count($account) == 0){
            return response() -> json(
                [
                    "message" => "Account not found",
                    "loggedIn" => false,
                ]
                );
        }

        return response() -> json(
            [
                "message" => "User Logged in",
                "loggedIn" => true,
                "account" => $account,
            ]
            );
    }


    //TODO Learn how to use throwables
    public function register(RegisterRequest $request){
        $validated = $request -> validated();

        if(!$validated){
            return response() -> json(
            [
                "message" => "Error in handling values"
                ],500);

        }

        Account::create(
            [
                "email" => $request["email"],
                "username" => $request["username"],
                "password" => $request["password"],
                "role" => "User",
        ]);


        
        return response() -> json([
        "message" => "Account Has Been Created"
        ]);

    }



}
