<?php

use Illuminate\Support\Facades\Route;
use App\Models\Category;
use App\Models\Product;
use App\Models\MainBanner;

Route::get('/', function () {
    $mainbanners = MainBanner::all();

    return view('home', compact('mainbanners'));
});

Route::get('catalog/{id}', function ($id) {
    $category = Category::with('children', 'products')->find($id);

    return view('category', compact('category'));
});

Route::get('product/{id}', function ($id) {
    $product = Product::find($id);
    $random = Product::query()
    ->where('id', '!=', $id)
    // ->where('category_id', '=', $product->category_id)
    // ->inRandomOrder()
    ->limit(6)
    ->get();

    return view('product', compact('product', 'random'));
});

Route::get('cart', [App\Http\Controllers\CartController::class, 'index'])->name('cart');
Route::get('_cart_data', [App\Http\Controllers\CartController::class, 'cartData']);
Route::post('add-to-cart/{product}', [App\Http\Controllers\CartController::class, 'add']);
Route::get('delete-from-cart/{product}', [App\Http\Controllers\CartController::class, 'delete']);
Route::post('update-cart', [App\Http\Controllers\CartController::class, 'update']);

Route::get('policy', function () {
    return view('policy');
});

Route::post('_leads', [App\Http\Controllers\LeadController::class, 'store']);

Route::get('_age', [App\Http\Controllers\AgeController::class, 'index']);
Route::post('_age', [App\Http\Controllers\AgeController::class, 'store']);

// ADMIN
Route::get('admin', function () {
    return view('layouts.admin');
})->middleware(['auth']);

Route::prefix("admin")->middleware(['auth'])->group(function() {
    Route::get('{any}', function () {
        return view('layouts.admin');
    })->where('any', '.*');
});

// ADMIN SETTINGS
Route::get('_admin/settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->middleware(['auth']);
Route::post('_admin/settings', [App\Http\Controllers\Admin\SettingController::class, 'update'])->middleware(['auth']);

// ADMIN CATEGORIES
Route::get('_admin/categories', [App\Http\Controllers\Admin\CategoryController::class, 'index'])->middleware(['auth']);
Route::post('_admin/categories', [App\Http\Controllers\Admin\CategoryController::class, 'store'])->middleware(['auth']);
Route::get('_admin/category/{id}', [App\Http\Controllers\Admin\CategoryController::class, 'category'])->middleware(['auth']);
Route::put('_admin/category/{id}/update', [App\Http\Controllers\Admin\CategoryController::class, 'update'])->middleware(['auth']);

// ADMIN PRODUCTS
Route::get('_admin/product/{id}', [App\Http\Controllers\Admin\ProductController::class, 'product'])->middleware(['auth']);
Route::post('_admin/products', [App\Http\Controllers\Admin\ProductController::class, 'store'])->middleware(['auth']);
Route::put('_admin/product/{id}/update', [App\Http\Controllers\Admin\ProductController::class, 'update'])->middleware(['auth']);
Route::delete('_admin/product/{id}/delete', [App\Http\Controllers\Admin\ProductController::class, 'delete'])->middleware(['auth']);

// ADMIN LEADS
Route::get('_admin/leads', [App\Http\Controllers\Admin\LeadController::class, 'index'])->middleware(['auth']);
Route::get('_admin/lead/{id}', [App\Http\Controllers\Admin\LeadController::class, 'lead'])->middleware(['auth']);
Route::put('_admin/lead/{id}/update', [App\Http\Controllers\Admin\LeadController::class, 'update'])->middleware(['auth']);

// ADMIN FILE UPLOAD
Route::post('_admin/file/upload', [App\Http\Controllers\Admin\FileController::class, 'store']);

require __DIR__.'/auth.php';
