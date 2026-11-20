Статический сайт EnglishUp (HTML/CSS/JS), без бэкенда.
Загрузка: Beget (папка сайта), Netlify Drop, Cloudflare Pages, GitHub Pages, Vercel — залейте содержимое папки.
Перед публикацией замените https://english-site.ru на свой адрес в sitemap.xml, robots.txt, canonical, og:url и JSON-LD
(в Linux: grep -rl "english-site.ru" . | xargs sed -i "s#https://english-site.ru#https://ВАШ-АДРЕС#g").
GitHub Pages: репозиторий english-site, файлы из этой папки в корень репозитория; Settings → Pages → main / root.
Яндекс.Метрика: в js/app.js впишите номер счётчика в window.YM_ID.
Локальная проверка: python -m http.server в этой папке.
