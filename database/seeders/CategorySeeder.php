<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run()
    {
        DB::table('categories')->insert([
            [
                'id' => 1,
                'name' => 'Секс-машины Premium',
                'name_eng' => 'Sex machines Premium',
                'image' => '/img/cat1.jpg',
            ],
            [
                'id' => 2,
                'name' => 'БДСМ мебель',
                'name_eng' => 'BDSM furniture',
                'image' => '/img/cat2.jpg',
            ],
            [
                'id' => 3,
                'name' => 'Девайсы и аксессуары',
                'name_eng' => 'Devices and Accessories',
                'image' => '/img/cat3.jpg',
            ],
            [
                'id' => 4,
                'name' => 'Интерьерные решения',
                'name_eng' => 'Solutions for Interior',
                'image' => '/img/cat1.jpg',
            ],
            [
                'id' => 5,
                'name' => 'Option Custom',
                'name_eng' => 'Option Custom',
                'image' => '/img/cat1.jpg',
            ],
            [
                'id' => 6,
                'name' => 'Merch',
                'name_eng' => 'Merch',
                'image' => '/img/cat1.jpg',
            ],
        ]);
    }
}