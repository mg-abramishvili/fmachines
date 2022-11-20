<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;

class FileController extends Controller
{
    public function store(Request $request)
    {
        if (request()->file('gallery')) {
            $files = request()->file('gallery');

            for ($i = 0; $i < count($files); $i++) {
                $file = $files[$i];
                $filename = time().'.'.$file->extension();

                if (!file_exists(public_path() . '/uploads/products')) {
                    mkdir(public_path() . '/uploads/products', 0755, true);
                }

                $img = Image::make($file->path());
                $img->resize(1200, 1200, function ($const) {
                    $const->aspectRatio();
                })->save(public_path() . '/uploads/products/' . $filename);

                return \Response::make('/uploads/products/' . $filename, 200, [
                    'Content-Disposition' => 'inline',
                ]);
            }
        }

        if (request()->file('image')) {
            $file = request()->file('image');
            $filename = time().'.'.$file->extension();

            if (!file_exists(public_path() . '/uploads/')) {
                mkdir(public_path() . '/uploads/', 0755, true);
            }

            $img = Image::make($file->path());
            $img->resize(700, 700, function ($const) {
                $const->aspectRatio();
            })->save(public_path() . '/uploads/' . $filename);

            return \Response::make('/uploads/' . $filename, 200, [
                'Content-Disposition' => 'inline',
            ]);
        }
    }
}