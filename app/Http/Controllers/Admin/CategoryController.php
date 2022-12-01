<?php

namespace App\Http\Controllers\Admin;

use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::where('parent_id', null)->orderBy('order', 'asc')->get();
    }

    public function indexWithChildren()
    {
        return Category::with('children')->orderBy('order', 'asc')->get();
    }

    public function category($id)
    {
        return Category::with('children', 'products')->find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'order' => 'required',
            'image' => 'required',
        ]);

        $category = new Category();

        $category->name = $request->name;
        $category->name_eng = $request->name_eng;
        $category->order = $request->order;
        $category->image = $request->image;

        if(isset($request->parent_id)) {
            $category->parent_id = $request->parent_id;
        }

        $category->save();

        return $category->id;
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

        if(isset($request->parent_id)) {
            $category->parent_id = $request->parent_id;
        }
        
        $category->save();
    }
}
