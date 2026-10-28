# Gold Ra

Доска объявлений для покупки и продажи золота: украшения, часы, слитки и лом.
Страны: Россия, Казахстан, Беларусь, Кыргызстан, Узбекистан. Языки: русский, казахский, кыргызский, узбекский, английский.

## Как устроено
- `web/` — само приложение (HTML + JS), база данных — Supabase (проект Zolotoy-Bazar).
- Мобильные приложения собираются через Capacitor в GitHub Actions — компьютер не нужен.

## Сборки
- **Android**: каждый push в `main` собирает `GoldRa.apk` и выкладывает его в Releases → `android-latest`.
  Для Google Play нужен файл `.aab`: добавьте в Settings → Secrets ключи подписи `ANDROID_KEYSTORE_*`.
- **iPhone**: вкладка Actions → iOS → Run workflow. Нужен аккаунт Apple Developer и секреты `IOS_*` / `APPSTORE_*`.
- **Сайт**: публикуется на GitHub Pages автоматически.
