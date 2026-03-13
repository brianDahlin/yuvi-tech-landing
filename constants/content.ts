export const NAV_LINKS = [
  { label: 'О нас', href: '#about' },
  { label: 'Почему мы', href: '#why-us' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Технологии', href: '#technologies' },
  { label: 'Продукты', href: '#products' },
  { label: 'Как мы работаем', href: '#how-we-work' },
] as const

export const STATS = [
  { value: '3 года', label: 'Помогаем бизнесу зарабатывать на данных' },
  { value: '30', label: 'Экспертов с опытом Yandex, Sber, Avito, МТС AI' },
  { value: '60+', label: 'Завершённых AI‑проектов' },
] as const

export const WHY_US_ITEMS = [
  {
    title: 'Бизнес‑фокус',
    description: 'Считаем ROI до старта и говорим языком метрик',
    benefit: 'Экономите бюджет и получаете прогнозируемый результат',
  },
  {
    title: 'Senior‑команда',
    description: 'Все инженеры 5+ лет в ML',
    benefit: 'Минимум рисков «учёбы на ваших данных»',
  },
  {
    title: 'Библиотека демо',
    description: '>10 готовых модулей',
    benefit: 'MVP за дни вместо месяцев, быстрая проверка гипотез',
  },
  {
    title: 'On‑prem & Cloud',
    description: 'С учётом GDPR',
    benefit: 'Безопасность данных и легальная чистота',
  },
  {
    title: 'Прозрачность',
    description: 'Weekly‑репорты по результатам работы',
    benefit: 'Всегда понимаете статус проекта и следующий шаг',
  },
  {
    title: 'Поддержка 24/7',
    description: 'И обучение команды',
    benefit: 'Ваша внутренняя экспертиза растёт вместе с продуктом',
  },
] as const

export const CASES = [
  {
    title: 'ИИ‑менеджер по продажам',
    industry: 'Real Estate & Sales',
    description: 'Преквалифицирует лиды 24/7. ИИ‑агент логирует действия в AmoCRM.',
    result: '3x рост конверсии',
  },
  {
    title: 'CV-контроль качества',
    industry: 'Производство & FMCG',
    description: 'Автоматическая детекция брака на конвейере с точностью 98.7%.',
    result: '-40% брак',
  },
  {
    title: 'Персональные рекомендации',
    industry: 'E-commerce & Ритейл',
    description: 'RecSys на основе поведения пользователей и контекстных данных.',
    result: '+25% средний чек',
  },
] as const

export const ML_COMPETENCIES = [
  { num: 1, title: 'Classic ML', description: 'Построение моделей для работы с табличными данными' },
  { num: 2, title: 'MLOps', description: 'Развертывание и поддержание ML моделей на производстве' },
  { num: 3, title: 'RecSys', description: 'Рекомендательные системы' },
  { num: 4, title: 'Предиктивная аналитика', description: 'Построение моделей для анализа временных рядов' },
  { num: 5, title: 'Computer Vision', description: 'Построение моделей компьютерного зрения' },
  { num: 6, title: 'NLP', description: 'Построение моделей для анализа текстовых данных' },
  { num: 7, title: 'Audio', description: 'Модели для работы с аудио. Распознавание и синтез голоса' },
  { num: 8, title: 'Генеративные модели', description: 'Генерация текста, изображений, видео и аудио' },
] as const

export const DEV_COMPETENCIES = [
  { num: 1, title: 'API Integration', description: 'Интеграция ML-моделей в production-системы' },
  { num: 2, title: 'Backend Services', description: 'Высоконагруженные сервисы для обработки данных' },
  { num: 3, title: 'Data Pipelines', description: 'ETL-процессы и потоковая обработка данных' },
  { num: 4, title: 'Cloud Infrastructure', description: 'AWS, GCP, Azure — деплой и масштабирование' },
] as const

export const PRODUCTS = [
  {
    title: 'GenAI API',
    description: 'Платформа для доступа к моделям генерации изображений и видео через API.',
    industries: ['Контент', 'Маркетинг', 'Агентства', 'Медиа', 'E-commerce'],
  },
  {
    title: 'CV Box',
    description: 'Платформа для детекции объектов, контроля брака и работы сотрудников.',
    industries: ['Ритейл', 'FMCG', 'Склады', 'Производство'],
  },
  {
    title: 'AI‑Агенты',
    description: 'Чат-боты для оптимизации бизнес-процессов и автоматизации клиентского сервиса.',
    industries: ['Клиентский сервис', 'Продажи', 'HR‑онбординг', 'IT‑helpdesk'],
  },
  {
    title: 'DataMall',
    description: 'Платформа для парсинга данных из соцсетей и веб-сайтов.',
    industries: ['BI‑команды', 'Ценообразование', 'Маркетинг'],
  },
] as const

export const HOW_WE_WORK_STEPS = [
  { num: 1, title: 'Консультация', description: 'Понимаем задачу, считаем потенциальную выгоду' },
  { num: 2, title: 'Диагностика процессов', description: 'Изучаем бизнес и данные, выявляем точки роста' },
  { num: 3, title: 'R&D', description: 'При необходимости — исследование и прототипирование' },
  { num: 4, title: 'Архитектура и план работ', description: 'Согласовываем MVP, сроки, бюджеты' },
  { num: 5, title: 'Коммерческое предложение', description: 'Утверждаем детали, подписываем договор и NDA' },
  { num: 6, title: 'Запуск проекта', description: 'Настраиваем команды, каналы связи, контроль' },
  { num: 7, title: 'Разработка и релизы', description: 'Работаем спринтами, каждые 2 недели — демо' },
  { num: 8, title: 'Запуск решения и метрики', description: 'Тестируем, сравниваем с KPI, внедряем' },
  { num: 9, title: 'Поддержка и масштабирование', description: 'Обновления, расширение, SLA, ретроспективы' },
] as const

export const HERO_TITLE = 'Переводим амбиции в измеримые результаты с AI'
export const HERO_SUBTITLE =
  'YuVi Technology — ваш стратегический партнёр по искусственному интеллекту: от идеи до внедрения'
export const CONTACT_EMAIL = 'info@yuvi.technology'

export const HERO_CONTENT = {
  badge: 'AI & Web3 разработка',
  title: 'Переводим амбиции в измеримые результаты с AI',
  subtitle:
    'YuVi Technology — ваш стратегический партнёр по искусственному интеллекту: от идеи до внедрения',
  ctaPrimary: 'Написать нам',
  ctaSecondary: 'Посмотреть кейсы',
  trustedLabel: 'Наши клиенты',
  trustedText: 'Работаем с корпорациями и растущими компаниями',
} as const

export const TECH_STACK = [
  'GPT-4o', 'Claude 3.5', 'LangChain', 'PyTorch', 'TensorFlow',
  'Hugging Face', 'dbt', 'Airflow', 'Apache Spark', 'Snowflake',
  'Databricks', 'AWS', 'Google Cloud', 'Azure', 'Kafka', 'Kubernetes',
] as const

export const HERO_LABEL = 'Представляем YuVi Tech'
export const HERO_SCROLL_LABEL = '(Прокрутить вниз)'
export const HERO_DIRECTIONS_LABEL = 'Активные направления:'
export const HERO_DIRECTIONS = [
  'AI-интеграция в бизнес',
  'Разработка AI-агентов',
  'Computer Vision',
  'NLP и языковые модели',
  'GenAI продукты',
] as const
export const HERO_CLIENTS_LABEL = 'Наши клиенты'
export const HERO_CLIENTS_TEXT =
  'Мы работаем с корпорациями и растущими компаниями, помогая зарабатывать на данных.'
export const TECH_LOGOS = [
  'Apache Airflow', 'dbt', 'AWS Glue', 'Apache Spark',
  'Databricks', 'Snowflake', 'GitHub', 'GitLab',
] as const
