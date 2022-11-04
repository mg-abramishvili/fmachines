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
            <nav class="navbar bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="/img/logo.png" alt="FuckingMachines.ru">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Секс-машины</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">БДСМ мебель</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Девайсы и аксессуары</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Доставка и оплата</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Custom Furniture</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Сотрудничество</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">История проекта</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        @yield('content')

        <footer>
            <div class="container">
                <div class="socials">
                    <a href="#">
                        <img src="/img/telegram.svg" alt="">
                        <span>Написать в Telegram</span>
                    </a>
                    <a href="#">
                        <img src="/img/whatsapp.svg" alt="">
                        <span>Написать в WhatsApp</span>
                    </a>
                </div>
                <p>© Все права защищены</p>
                <p>FuckingMachines.ru, 2022</p>
                <a href="/policy">Политика конфиденциальности</a>
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