<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    
     protected $fillable = ["id","title","url","description"];
}
