<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


//TODO Currently Doing The Registration functionality
class Account extends Model
{
    protected $table = "accounts";
    protected $fillable = ["id","email","username","password","role"];
}
    