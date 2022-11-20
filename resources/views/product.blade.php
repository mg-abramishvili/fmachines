@extends('layouts.front')
@section('content')
    <div class="page product-page">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-7">
                    <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
                        @foreach($product->gallery as $galleryItem)
                            <div class="carousel-cell">
                                <img src="{{ $galleryItem }}" alt="">
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <h1 class="title-head">
                        @if(app()->getLocale() == 'en')
                            {{ $product->name_eng }}
                        @else
                            {{ $product->name }}
                        @endif
                    </h1>

                    <div class="price">
                        @if(app()->getLocale() == 'en')
                            ${{ $product->price_usd }}
                        @else
                            {{ $product->price_rub }} ₽
                        @endif
                    </div>

                    <div class="addtocart">
                        <button class="btn btn-standard">Добавить в корзину</button>
                    </div>
                </div>
            </div>
            <div class="description">
                @if(app()->getLocale() == 'en')
                    {!! $product->description_eng !!}
                @else
                    {!! $product->description !!}
                @endif
            </div>
        </div>
    </div>
@endsection