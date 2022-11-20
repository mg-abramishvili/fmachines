<?php

namespace App\Http\Controllers\Admin;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function product($id)
    {
        return Product::with('category')->find($id);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'description' => 'required',
            'description_eng' => 'required',
            'price_rub' => 'required',
            'price_usd' => 'required',
            'category_id' => 'required',
            'order' => 'required',
            'gallery' => 'required',
        ]);

        $product = new Product();

        $product->name = $request->name;
        $product->name_eng = $request->name_eng;
        $product->description = $request->description;
        $product->description_eng = $request->description_eng;
        $product->price_rub = $request->price_rub;
        $product->price_usd = $request->price_usd;
        $product->category_id = $request->category_id;
        $product->order = $request->order;

        if (!isset($request->gallery)) {
            $request->gallery = [];
        }
        $product->gallery = $request->gallery;

        $product->save();
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'name_eng' => 'required',
            'description' => 'required',
            'description_eng' => 'required',
            'price_rub' => 'required',
            'price_usd' => 'required',
            'category_id' => 'required',
            'order' => 'required',
            'gallery' => 'required',
        ]);

        $product = Product::find($id);

        $product->name = $request->name;
        $product->name_eng = $request->name_eng;
        $product->description = $request->description;
        $product->description_eng = $request->description_eng;
        $product->price_rub = $request->price_rub;
        $product->price_usd = $request->price_usd;
        $product->category_id = $request->category_id;
        $product->order = $request->order;

        if (!isset($request->gallery)) {
            $request->gallery = [];
        }
        $product->gallery = $request->gallery;

        $product->save();
    }
}
