<?php

namespace App\Http\Controllers\Admin;

use App\Models\Video;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
        return Video::all();
    }

    public function video($id)
    {
        return Video::find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'video' => 'required',
        ]);

        $video = new Video();

        $video->name = $request->name;
        $video->name_eng = $request->name_eng;
        $video->video = $request->video;

        $video->save();
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'video' => 'required',
        ]);

        $category = Video::find($id);

        $video->name = $request->name;
        $video->name_eng = $request->name_eng;
        $video->video = $request->video;

        $video->save();
    }
}
