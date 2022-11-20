<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Секс-машины и БДСМ мебель - FuckingMachines.ru</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/flickity.css">
    @vite('resources/css/front.css')
</head>
<body>
    <div id="front">
        <header>
            <div class="header-top">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col header-top-logo">
                            <a href="/">
                                <img src="/img/logo.svg" alt="FuckingMachines.ru">
                            </a>
                        </div>
                        <div class="col header-top-lang">
                            <ul>
                                <li>
                                    <a href="{{ url()->current() }}/?lang=ru">RUS</a>
                                </li>
                                <li>
                                    <a href="{{ url()->current() }}/?lang=en">ENG</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col header-top-cart">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                @if(app()->getLocale() == 'en')
                                    Cart
                                @else
                                    Корзина
                                @endif
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col header-bottom-menu">
                            <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                                <div class="navbar-collapse collapse" id="navbarsExample10" style="">
                                    <ul class="navbar-nav">
                                        @foreach($categories as $category)
                                            <li class="nav-item">
                                                <a href="/catalog/{{ $category->id }}" class="nav-link">
                                                    @if(app()->getLocale() == 'en')
                                                        {{ $category->name_eng }}
                                                    @else
                                                        {{ $category->name }}
                                                    @endif
                                                </a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="col header-bottom-nav-button">
                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </button>
                        </div>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    @foreach($categories as $category)
                                        <li class="nav-item">
                                            <a href="/catalog/{{ $category->id }}" class="nav-link">
                                                @if(app()->getLocale() == 'en')
                                                    {{ $category->name_eng }}
                                                @else
                                                    {{ $category->name }}
                                                @endif
                                            </a>
                                        </li>
                                    @endforeach
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            @if(app()->getLocale() == 'en')
                                                Delivery and Payment
                                            @else
                                                Доставка и оплата
                                            @endif
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Custom Furniture</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            @if(app()->getLocale() == 'en')
                                                Partnership
                                            @else
                                                Сотрудничество
                                            @endif
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            @if(app()->getLocale() == 'en')
                                                Project History
                                            @else
                                                История проекта
                                            @endif
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            @if(app()->getLocale() == 'en')
                                                Contacts
                                            @else
                                                Контакты
                                            @endif
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        @yield('content')

        <footer>
            <div class="container">
                <div class="socials">
                    <a href="{{ $settings->telegram }}">
                        <img src="/img/telegram.svg" alt="">
                        <span>Telegram</span>
                    </a>
                    <a href="{{ $settings->whatsapp }}">
                        <img src="/img/whatsapp.svg" alt="">
                        <span>WhatsApp</span>
                    </a>
                </div>

                <p>FuckingMachines.ru © 2022</p>

                <a href="/policy">
                    @if(app()->getLocale() == 'en')
                        Privacy Policy (RU)
                    @else
                        Политика конфиденциальности
                    @endif
                </a>
            </div>
        </footer>

        <div class="modal fade" id="leadModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Оставить заявку</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <create-lead></create-lead>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/flickity.pkgd.min.js"></script>
    @vite('resources/js/front.js')
</body>
</html>