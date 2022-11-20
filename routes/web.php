<?php

use Illuminate\Support\Facades\Route;
use App\Models\Category;

Route::get('/', function () {
    $categories = Category::orderBy('order', 'asc')->get();

    return view('home', compact('categories'));
});

Route::get('policy', function () {
    return view('policy');
});

Route::post('_leads', [App\Http\Controllers\LeadController::class, 'store']);

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
