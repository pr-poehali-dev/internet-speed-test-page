import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/d833cb39-3e68-4802-9f1a-6370f1d7e77f/files/9286ffee-e383-4b26-bf98-ac7848f890da.jpg";

const services = [
  {
    icon: "Zap",
    title: "Быстрый результат",
    description: "Запускаем проект в сжатые сроки без потери качества. Никаких задержек и лишних согласований.",
  },
  {
    icon: "Shield",
    title: "Надёжная защита",
    description: "Все данные клиентов под надёжной защитой. Работаем по договору с полной ответственностью.",
  },
  {
    icon: "BarChart2",
    title: "Рост показателей",
    description: "Наши решения дают измеримый результат: рост выручки, клиентов и узнаваемости бренда.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Команда всегда на связи. Отвечаем в течение часа и решаем любые вопросы оперативно.",
  },
];

const plans = [
  {
    name: "Старт",
    price: "9 900",
    period: "мес",
    features: ["До 3 услуг", "Базовая аналитика", "Email поддержка", "1 пользователь"],
    cta: "Начать",
    popular: false,
  },
  {
    name: "Бизнес",
    price: "24 900",
    period: "мес",
    features: ["До 10 услуг", "Полная аналитика", "Приоритетная поддержка", "5 пользователей", "API доступ"],
    cta: "Выбрать",
    popular: true,
  },
  {
    name: "Про",
    price: "59 900",
    period: "мес",
    features: ["Неограниченно", "AI аналитика", "Персональный менеджер", "Безлимит пользователей", "Кастомизация"],
    cta: "Обсудить",
    popular: false,
  },
];

const stats = [
  { num: "500+", label: "Довольных клиентов" },
  { num: "7 лет", label: "На рынке" },
  { num: "98%", label: "Проектов в срок" },
  { num: "3x", label: "Рост у клиентов" },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-golos overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-oswald text-lg font-bold tracking-wide text-gray-900">БРЕНД</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <button onClick={() => scrollTo("services")} className="hover:text-gray-900 transition-colors">Услуги</button>
          <button onClick={() => scrollTo("advantages")} className="hover:text-gray-900 transition-colors">Преимущества</button>
          <button onClick={() => scrollTo("pricing")} className="hover:text-gray-900 transition-colors">Цены</button>
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Оставить заявку
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-orange-50 via-white to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_IMAGE} alt="hero" className="w-full h-full object-cover opacity-[0.07]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-300/30 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-pink-300/30 blur-[100px] pointer-events-none" />
        </div>

        <div className="relative container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-6 text-sm text-orange-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Работаем по всей России
            </div>

            <h1 className="font-oswald text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 text-gray-900">
              ПРОФЕССИОНАЛЬНЫЙ{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                РЕЗУЛЬТАТ
              </span>{" "}
              ДЛЯ ВАШЕГО БИЗНЕСА
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
              Помогаем компаниям расти быстрее с помощью современных решений. Индивидуальный подход, прозрачные цены и измеримый результат.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold px-8 py-4 rounded-2xl text-base hover:scale-105 transition-transform shadow-lg shadow-orange-200"
              >
                Получить консультацию
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="border border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-2xl text-base hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center"
              >
                Наши услуги <Icon name="ArrowDown" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <span>Прокрутите вниз</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-gray-100 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((a) => (
              <div key={a.label} className="text-center">
                <div className="font-oswald text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent mb-2">
                  {a.num}
                </div>
                <div className="text-sm text-gray-500">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Что мы делаем</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900">НАШИ УСЛУГИ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:bg-orange-50/50 transition-all duration-300 hover:border-orange-200 overflow-hidden shadow-sm hover:shadow-md"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-orange-100/50 blur-3xl group-hover:bg-orange-200/50 transition-colors pointer-events-none" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-pink-100 border border-orange-200 flex items-center justify-center mb-5">
                    <Icon name={s.icon} fallback="Zap" size={24} className="text-orange-500" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-3 tracking-wide text-gray-900">{s.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Почему мы</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                РАБОТАЕМ НА{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  РЕЗУЛЬТАТ
                </span>
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                Мы не просто выполняем задачи — мы становимся частью вашей команды и берём на себя полную ответственность за результат. Каждый проект ведём до финиша.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "Фиксированная стоимость без скрытых доплат",
                "Персональный менеджер на всём пути",
                "Договор с гарантией результата",
                "Прозрачная отчётность в реальном времени",
                "Опыт в 15+ отраслях бизнеса",
              ].map((text) => (
                <div key={text} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <Icon name="CheckCircle" size={20} className="text-orange-500 shrink-0" />
                  <span className="text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Тарифы</span>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gray-900">ВЫБЕРИТЕ ПЛАН</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 border transition-transform hover:scale-[1.02] duration-300 ${
                  plan.popular
                    ? "border-orange-300 bg-gradient-to-b from-orange-50 to-pink-50 shadow-lg shadow-orange-100"
                    : "border-gray-100 bg-white shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Популярный
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-oswald text-xl font-bold tracking-wide mb-1 text-gray-900">{plan.name}</h3>
                  <div className="flex items-end gap-1">
                    <span className="font-oswald text-4xl font-bold text-gray-900">{plan.price} ₽</span>
                    <span className="text-gray-400 mb-1">/ {plan.period}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <Icon name="Check" size={16} className="text-orange-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full py-3 rounded-2xl font-bold text-sm transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:opacity-90"
                      : "border border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3 block">Заявка</span>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
                ГОТОВЫ{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                  НАЧАТЬ?
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут. Первая консультация — бесплатно.
              </p>

              <div className="flex flex-col gap-4">
                {[
                  { icon: "Phone", text: "+7 (999) 000-00-00" },
                  { icon: "Mail", text: "hello@example.ru" },
                  { icon: "MapPin", text: "Москва, ул. Примерная, 1" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-gray-500">
                    <Icon name={item.icon} fallback="Phone" size={18} className="text-orange-500" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                    <Icon name="Check" size={32} className="text-white" />
                  </div>
                  <h3 className="font-oswald text-2xl font-bold text-gray-900">Заявка отправлена!</h3>
                  <p className="text-gray-500">Мы свяжемся с вами в течение 15 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Ваше имя</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Иван Иванов"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+7 (999) 000-00-00"
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-2">Комментарий</label>
                    <textarea
                      value={form.comment}
                      onChange={(e) => setForm({ ...form, comment: e.target.value })}
                      placeholder="Расскажите о вашей задаче..."
                      rows={4}
                      className="w-full bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity mt-2 text-base"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 md:px-12 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-oswald font-bold tracking-wide text-gray-900">БРЕНД</span>
          </div>
          <span className="text-gray-400 text-sm">© 2024 Бренд. Все права защищены.</span>
        </div>
      </footer>
    </div>
  );
}
