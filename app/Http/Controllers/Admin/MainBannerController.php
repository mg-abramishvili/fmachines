<?php

namespace App\Http\Controllers\Admin;

use App\Models\MainBanner;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MainBannerController extends Controller
{
    public function index()
    {
        return MainBanner::all();
    }
}
