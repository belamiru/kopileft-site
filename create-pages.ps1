$pages = @{
  "nakleiki-iz-vinilovoi-plenki" = "Наклейки и этикетки"
  "shirokoformatnaya-pechat"     = "Широкоформатная УФ-печать"
  "tipographiya"                 = "Полиграфия"
  "tablichki-plastikovye"        = "Таблички и информационные стенды"
  "nakleiki-na-avto"             = "Брендирование автомобилей"
}

foreach ($page in $pages.GetEnumerator()) {
  $dir = $page.Key
  $title = $page.Value

  New-Item -ItemType Directory -Force -Path $dir | Out-Null

  $html = @"
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$title — Типография «Копилефт» в Воронеже</title>
  <meta name="description" content="$title для бизнеса в Воронеже. Типография «Копилефт».">
  <link rel="stylesheet" href="../styles.css">
</head>
<body>

<header class="site-header">
  <div class="container header-inner">
    <a class="logo" href="../">Копилефт</a>

    <nav class="main-nav" aria-label="Основная навигация">
      <a href="../#services">Услуги</a>
      <a href="../#business">Для бизнеса</a>
      <a href="../#contacts">Контакты</a>
    </nav>

    <a class="button button-yellow" href="../#calculator">
      Рассчитать заказ
    </a>
  </div>
</header>

<main>
  <section class="section page-intro">
    <div class="container">
      <p class="eyebrow">ТИПОГРАФИЯ «КОПИЛЕФТ» · ВОРОНЕЖ</p>
      <h1>$title</h1>
      <p>
        Страница находится в разработке. Здесь будет подробная
        информация об услуге, примеры работ и условия заказа.
      </p>
    </div>
  </section>
</main>

<footer class="site-footer">
  <div class="container footer-inner">
    <strong>Копилефт</strong>
    <span>Типография в Воронеже</span>
  </div>
</footer>

</body>
</html>
"@

  Set-Content -Path "$dir/index.html" -Value $html -Encoding UTF8
}

Write-Host "Страницы созданы."