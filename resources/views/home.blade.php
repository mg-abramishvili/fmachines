@extends('layouts.front')
@section('content')
    <div id="main-carousel" class="carousel slide" data-bs-ride="carousel">
        <!-- <div class="carousel-indicators">
            <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="0"  class="active" aria-current="true"  aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="1"  aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#main-carousel" data-bs-slide-to="2"  aria-label="Slide 3"></button>
        </div> -->

        <div class="carousel-inner">
            <div data-bs-interval="5000" class="carousel-item active">
                <div class="carousel-item-video">
                    <video autoplay nocontrols muted loop>
                        <source src="/img/video.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="carousel-caption">
                    <h1>Секс-машины и БДСМ-мебель</h1>
                    <p>с доставкой по всему миру</p>
                </div>
            </div>
            <!-- <div data-bs-interval="5000" class="carousel-item">
                <div class="carousel-item-image" style="background-image: url(/img/slide02.jpg);"></div>
                <div class="carousel-caption">
                    <h5>hhh</h5>
                    <p>ppp</p>
                    <a href="123" class="btn btn-standard">Подробнее</a>
                </div>
            </div> -->
        </div>

        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#main-carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Назад</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#main-carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Вперед</span>
        </button> -->
    </div>

    <div class="main-catalog p11">
        <div class="container">
            <div class="main-catalog-item">
                <a href="#">
                    <div class="main-catalog-item-image">
                        <div class="main-catalog-item-image-inner" style="background-image: url(/img/cat1.jpg)"></div>
                    </div>
                    <h2 class="main-catalog-item-name">Секс-машины Premium</h2>
                </a>
            </div>
            <div class="main-catalog-item">
                <a href="#">
                    <div class="main-catalog-item-image">
                        <div class="main-catalog-item-image-inner" style="background-image: url(/img/cat2.jpg)"></div>
                    </div>
                    <h2 class="main-catalog-item-name">БДСМ мебель</h2>
                </a>
            </div>
            <div class="main-catalog-item">
                <a href="#">
                    <div class="main-catalog-item-image">
                        <div class="main-catalog-item-image-inner" style="background-image: url(/img/cat3.jpg)"></div>
                    </div>
                    <h2 class="main-catalog-item-name">Девайсы и аксессуары</h2>
                </a>
            </div>
        </div>
    </div>

    <div class="main-history p01">
        <div class="container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et debitis minus vitae accusantium, assumenda eligendi praesentium veritatis nesciunt tempora, atque necessitatibus voluptatum sunt aliquam culpa facere aut excepturi? Aliquid atque, molestias minus accusantium, cupiditate odit mollitia distinctio, saepe architecto rem recusandae autem magnam dolore sit facere voluptates molestiae itaque?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero porro consequuntur quo quisquam doloribus, facilis nihil necessitatibus recusandae quos tenetur nemo eius assumenda quis corrupti!</p>
        </div>
    </div>
@endsection