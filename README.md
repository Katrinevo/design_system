# design_system
Кроссплатформенная дизайн-система, разработанная с нуля в рамках курсового проекта.

Проект представляет собой библиотеку переиспользуемых UI-компонентов для веб-приложений (React) и мобильных приложений (React Native), объединённых единым визуальным стилем, общей архитектурой и системой дизайн-токенов.

Описание проекта

Целью данного проекта является разработка собственной дизайн-системы, которая:

поддерживает кроссплатформенную разработку;
работает одновременно в React и React Native;
обеспечивает единый визуальный стиль;
позволяет быстро создавать интерфейсы из готовых компонентов;
легко масштабируется и поддерживается.

Дизайн-система создавалась полностью с нуля: от проектирования визуального стиля в Figma до программной реализации компонентов и публикации в GitHub.

Используемые технологии
Web
React
TypeScript
styled-components
Storybook
Mobile
React Native
Expo
styled-components/native
Инструменты разработки
VS Code
npm
Git
GitHub
Дизайн-токены

Все визуальные параметры вынесены в единый файл темы:

packages/themes/theme.ts

Внутри темы находятся:

цвета (colors)
радиусы скругления (radius)
отступы (spacing)
базовые стили

Пример использования:

theme.colors.primary
theme.colors.primaryDark
theme.spacing.md
theme.radius.md

Такой подход позволяет изменять внешний вид всей системы из одного места.

Реализованные компоненты
Базовые компоненты
Button (Кнопка)
Input (Поле ввода)
Dropdown (Выпадающий список)
Card (Карточка)
Checkbox (Флажок)
Tabs (Табы)
Notification (Уведомление)
Дополнительные компоненты
Badge
Skeleton Loader
Floating Action Button (FAB)
Command Palette
Поддерживаемые состояния компонентов

Каждый компонент поддерживает несколько состояний.

Примеры:

Button
default
hover
pressed
disabled
Input
default
labeled
placeholder
masked input
Card
filled
outlined
elevated
Checkbox
single choice
multi choice
Notification
success
warning
info
error
FAB
collapsed
expanded
Структура проекта

design_system/
│
├── packages/
│ ├── ui/
│ │ ├── Button/
│ │ ├── Input/
│ │ ├── Dropdown/
│ │ ├── Card/
│ │ ├── Checkbox/
│ │ ├── Tabs/
│ │ ├── Notification/
│ │ ├── Badge/
│ │ ├── SkeletonLoader/
│ │ ├── FloatingActionButton/
│ │ └── CommandPalette/
│ │
│ └── themes/
│ ├── theme.ts
│ └── styled.d.ts
│
├── .storybook/
│
├── app/
│ └── demo web application
│
├── mobile-demo/
│ └── expo demo application
│
└── README.md

Установка проекта

Клонировать репозиторий:

git clone <ссылка_на_репозиторий>

Перейти в папку проекта:

cd design_system

Установить зависимости:

npm install

Запуск Storybook (веб-предпросмотр)

Для просмотра и тестирования компонентов в изолированной среде:

npm run storybook

После запуска открыть:

http://localhost:6006

Storybook используется для:

визуального тестирования компонентов;
проверки различных состояний;
документации;
отладки.
Запуск демонстрационного веб-приложения

Перейти в папку:

cd app

Установить зависимости:

npm install

Запустить:

npm run dev

Открыть в браузере:

http://localhost:5173

Демонстрационное приложение:
главная страница детского интернет-магазина KidsJoy, полностью собранная из компонентов дизайн-системы.

Запуск мобильного приложения

Перейти в папку:

cd mobile-demo

Установить зависимости:

npm install

Запустить Expo:

npx expo start

Запуск на iPhone
Установить приложение Expo Go из App Store.
После запуска команды npx expo start в терминале появится QR-код.
Отсканировать QR-код через Expo Go.

После этого приложение откроется на телефоне.

Запуск мобильной версии в браузере

Если запуск на телефоне невозможен:

npx expo start --web

После запуска открыть DevTools (F12) и включить режим устройства:

выбрать iPhone 14 Pro
или
выбрать любое другое мобильное устройство.

Это позволяет протестировать мобильный интерфейс прямо на ноутбуке.

Использование компонентов

Пример импорта кнопки:

import { Button } from "./packages/ui/Button";

Использование:

<Button title="Register" />
Подключение темы

import { ThemeProvider } from "styled-components";
import { theme } from "./packages/themes/theme";

<ThemeProvider theme={theme}> <App /> </ThemeProvider>

Это обеспечивает единый стиль для всех компонентов.

Кроссплатформенная архитектура

Для поддержки web и mobile каждый компонент имеет две реализации:

Button.tsx
Button.native.tsx

React автоматически выбирает нужный файл:

.tsx — для веба
.native.tsx — для React Native

Это позволяет использовать одну и ту же архитектуру на разных платформах.

Поддерживаемые платформы
Web
Chrome
Firefox
Edge
Safari
Mobile
iOS
Android
Expo Go
React Native Web
Дизайн-стиль

Основные особенности визуального стиля:

мягкие скруглённые формы;
светлая пастельная палитра;
минималистичные тени;
синие акцентные цвета;
моноширинная типографика.

Стиль вдохновлён современными образовательными и детскими интерфейсами.

Практическая демонстрация

Для проверки работоспособности были созданы два демонстрационных приложения.

1. Web-приложение

Landing page интернет-магазина KidsJoy.

Использованные компоненты:

Button
Card
Badge
Notification
2. Mobile-приложение

Мобильная версия того же интерфейса на React Native.

Проверялись:

адаптивность;
SafeAreaView;
touch interaction;
переиспользование компонентов.
Возможные улучшения

В будущем систему можно расширить:

поддержка dark mode;
анимации;
accessibility support;
экспорт токенов в Figma;
публикация как npm package.
