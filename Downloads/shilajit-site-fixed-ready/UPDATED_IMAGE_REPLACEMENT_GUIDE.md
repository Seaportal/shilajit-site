# Обновленная Инструкция по Замене Изображений

## 🎯 Новая Система Индивидуальных Изображений

**Важно!** Теперь каждый бренд имеет свое уникальное изображение. Больше нет общих изображений для всех продуктов одной категории.

## 📁 Новая Структура Изображений

```
src/assets/brands/
├── resin/
│   ├── shilaheal-resin.jpg
│   ├── himalayan-healing-resin.jpg
│   ├── upakarma-resin.jpg
│   ├── norwegian-biolabs-resin.jpg
│   ├── xara-resin.jpg
│   └── cymbiotika-resin.jpg
├── capsules/
│   ├── shilaheal-capsules.jpg
│   ├── imemyself-capsules.jpg
│   ├── youtheory-capsules.jpg
│   ├── thinbi-capsules.jpg
│   └── carlyle-capsules.jpg
└── gummies/
    ├── shilaheal-gummies.jpg
    ├── naturesweet-gummies.jpg
    ├── vitalgummy-chews.jpg
    ├── pureform-gummies.jpg
    └── healthybite-gummies.jpg
```

## 🔄 Как Заменить Изображения

### Шаг 1: Найдите нужный бренд
1. Определите категорию продукта (resin, capsules, gummies)
2. Найдите папку в `src/assets/brands/[категория]/`
3. Найдите файл с именем бренда

### Шаг 2: Замените изображение
1. **Подготовьте новое изображение** (400x400px, JPG формат)
2. **Переименуйте** его точно как оригинальный файл
3. **Замените** старый файл новым

### Шаг 3: Проверьте результат
1. Запустите `npm run dev`
2. Откройте соответствующую страницу
3. Убедитесь, что изображение отображается корректно

## 📋 Полный Список Брендов и Их Изображений

### 🧴 RESIN (Смола)
| Бренд | Файл изображения | Страница |
|-------|------------------|----------|
| Shilaheal Shilajit Resin | `brands/resin/shilaheal-resin.jpg` | ResinPage |
| The Himalayan Healing Shilajit | `brands/resin/himalayan-healing-resin.jpg` | ResinPage |
| Upakarma Pure Shilajit Resin | `brands/resin/upakarma-resin.jpg` | ResinPage |
| Norwegian Biolabs Shilajit | `brands/resin/norwegian-biolabs-resin.jpg` | ResinPage |
| Xara Shilajit Resin | `brands/resin/xara-resin.jpg` | ResinPage |
| Cymbiotika Shilajit Resin | `brands/resin/cymbiotika-resin.jpg` | ResinPage |

### 💊 CAPSULES (Капсулы)
| Бренд | Файл изображения | Страница |
|-------|------------------|----------|
| Shilaheal Shilajit Capsules | `brands/capsules/shilaheal-capsules.jpg` | CapsulesPage |
| iMeMyself Pure Shilajit Capsules | `brands/capsules/imemyself-capsules.jpg` | CapsulesPage |
| Youtheory Shilajit Capsules | `brands/capsules/youtheory-capsules.jpg` | CapsulesPage |
| Thinbi Pure Himalayan Shilajit Capsules | `brands/capsules/thinbi-capsules.jpg` | CapsulesPage |
| Carlyle Shilajit Capsules | `brands/capsules/carlyle-capsules.jpg` | CapsulesPage |

### 🍬 GUMMIES (Гуммис)
| Бренд | Файл изображения | Страница |
|-------|------------------|----------|
| Shilaheal Shilajit Gummies | `brands/gummies/shilaheal-gummies.jpg` | GummiesPage |
| NatureSweet Shilajit Gummies | `brands/gummies/naturesweet-gummies.jpg` | GummiesPage |
| VitalGummy Shilajit Chews | `brands/gummies/vitalgummy-chews.jpg` | GummiesPage |
| PureForm Shilajit Gummies | `brands/gummies/pureform-gummies.jpg` | GummiesPage |
| HealthyBite Shilajit Gummies | `brands/gummies/healthybite-gummies.jpg` | GummiesPage |

## ⚠️ Важные Правила

### 1. Точные Имена Файлов
- **НЕ МЕНЯЙТЕ** имена файлов
- Используйте **точно такие же** имена как в таблице выше
- Соблюдайте **регистр букв** (все строчные)

### 2. Требования к Изображениям
- **Размер:** 400x400 пикселей (квадратные)
- **Формат:** JPG
- **Размер файла:** Не более 500 КБ
- **Фон:** Белый или прозрачный
- **Содержание:** Четкое изображение продукта бренда

### 3. Качество Изображений
- **Высокое разрешение** для четкости
- **Профессиональное освещение**
- **Чистый фон** без отвлекающих элементов
- **Фокус на продукте** - бутылка, упаковка, логотип

## 🛠️ Пример Замены

### Замена изображения для Shilaheal Resin:

1. **Найдите файл:** `src/assets/brands/resin/shilaheal-resin.jpg`
2. **Подготовьте новое изображение:** 400x400px, JPG
3. **Переименуйте:** в `shilaheal-resin.jpg`
4. **Замените:** старый файл новым
5. **Проверьте:** на странице `/resin`

## 🔍 Проверка После Замены

### Автоматическая проверка:
```bash
npm run dev
```

### Ручная проверка:
1. Откройте http://localhost:5173/resin
2. Найдите продукт Shilaheal
3. Убедитесь, что новое изображение отображается
4. Проверьте качество и размер

## 🚨 Устранение Неполадок

### Изображение не отображается:
- ✅ Проверьте точность имени файла
- ✅ Убедитесь в правильном формате (JPG)
- ✅ Проверьте размер файла (<500 КБ)

### Изображение искажено:
- ✅ Убедитесь в размере 400x400px
- ✅ Проверьте соотношение сторон (1:1)

### Медленная загрузка:
- ✅ Сожмите изображение
- ✅ Оптимизируйте качество

## 💡 Советы по Оптимизации

### Инструменты для обработки:
- **TinyPNG** - сжатие без потери качества
- **Canva** - создание квадратных изображений
- **Photoshop/GIMP** - профессиональная обработка

### Лучшие практики:
1. **Единый стиль** для всех изображений бренда
2. **Консистентное освещение**
3. **Одинаковый фон** (предпочтительно белый)
4. **Четкий фокус** на продукте

## ✅ Контрольный Список

Перед заменой изображения:
- [ ] Размер 400x400px
- [ ] Формат JPG
- [ ] Размер файла <500 КБ
- [ ] Правильное имя файла
- [ ] Качественное изображение продукта

После замены:
- [ ] Изображение отображается на сайте
- [ ] Качество приемлемое
- [ ] Загрузка быстрая
- [ ] Соответствует бренду

---

**Теперь каждый бренд имеет свое уникальное изображение!** 🎯

*Обновлено: 24 июля 2025*

