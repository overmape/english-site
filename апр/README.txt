Статический сайт EnglishUp (HTML/CSS/JS), без бэкенда.
Загрузка: Beget (папка сайта), Netlify Drop, Cloudflare Pages, GitHub Pages, Vercel — залейте содержимое папки.
Перед публикацией замените https://english-site.ru на свой адрес в sitemap.xml, robots.txt, canonical, og:url и JSON-LD
(в Linux: grep -rl "english-site.ru" . | xargs sed -i "s#https://english-site.ru#https://ВАШ-АДРЕС#g").
Если сайт лежит в подпапке (например /english-site/), поправьте путь в .htaccess (ErrorDocument) и в 404.html (тег base).
Яндекс.Метрика: в js/app.js впишите номер счётчика в window.YM_ID.
Локальная проверка: python -m http.server в этой папке.
