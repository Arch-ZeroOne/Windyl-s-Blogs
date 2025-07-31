<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Http\Requests\PostRequest;

class PostController extends Controller
{
    


    public function addPost(PostRequest $request){
        $validated = $request -> validated();

        Post::create([
            "title" => $validated["title"],
            "url" => $validated["url"],
            "description" => $validated["description"]
        ]);


        return response() -> json([
            "message" => "Item Successfully added",
        ]);

    }
}
