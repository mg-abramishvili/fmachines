<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function category($id)
    {
        return Category::with('products')->find($id);
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'order' => 'required',
            'image' => 'required',
        ]);

        $category = Category::find($id);

        $category->name = $request->name;
        $category->name_eng = $request->name_eng;
        $category->order = $request->order;
        $category->image = $request->image;

        $category->save();
    }
}
