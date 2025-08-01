<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\PostController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


//Controller for account related operations
Route::controller(AccountController::class) -> group(function() {
    Route::post("/register",'register');
    Route::post("/login","login");
});


Route::controller(PostController::class) -> group(function() {
    Route::post("/addPost","addPost");
});




