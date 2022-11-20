<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MainBannerSeeder extends Seeder
{
    public function run()
    {
        DB::table('main_banners')->insert([
            [
                'id' => 1,
                'title' => 'Секс-машины и БДСМ-мебель',
                'title_eng' => 'Sex machines & BDSM furniture',
                'subtitle' => 'с доставкой по всему миру',
                'subtitle_eng' => 'worldwide delivery',
            ],
        ]);
    }
}