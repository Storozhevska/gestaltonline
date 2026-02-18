import { ArrowDown } from "lucide-react";
import { AlertTriangle } from "lucide-react";

interface Testimonial {
  before: string;
  after: string;
  author: string;
  description: string;
  image: string;
}

export function TestimonialsTransformation() {
  const testimonials: Testimonial[] = [
    {
      before: "Була постійно з почуттям вини, не могла сказати «ні», не знала, чого хочу насправді, всім намагалася догодити, супертривожна, у вічних муках вибору і страху, з вічною невпевненістю в собі.",
      after: "Здобула саму цінність себе і життя. Світ став більшим і яскравішим.",
      author: "Студентка 1 ступеня 2025",
      description: "",
      image: "/images/avatar.png"
    },
    {
      before: "Прийшла з відсутністю власних кордонів, брала всю відповідальність на себе.",
      after: "Після програми навчилася чути себе, розділяти відповідальність, говорити «ні» без провини. Сімейні стосунки вийшли на новий рівень: ми розмовляємо, чуємо один одного, і кожен може залишатися при своїй думці - це вже не трагедія. З'явилася внутрішня опора.",
      author: "Анна",
      description: "закінчила 2 ступінь",
      image: "/images/avatar.png"
    },
    {
      before: "Основний сумнів перед навчанням: що не потягну матеріально. До програми я стояла на місці, навіть боялася говорити, що я психолог.",
      after: "Чим більше навчалася, тим більше зростала професійно й особистісно, почала отримувати клієнтів та фінанси. Проходячи програму, збільшувалася моя практика і запити, з якими я з більшою впевненістю почала працювати.",
      author: "Випускниця 2 ступеня",
      description: "",
      image: "/images/avatar.png"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Від точки А до точки Б - реальні історії
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl p-6 relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-0"></div>

              <div className="relative z-10 flex flex-col h-full">

                {/* Author */}
                <div className="flex flex-col items-center text-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-20 h-20 rounded-full object-cover shadow-lg ring-4 ring-white mb-3"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                    {testimonial.description && (
                      <p className="text-gray-600 text-sm">
                        {testimonial.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Before → After */}
                <div className="flex flex-col gap-4 flex-1">

                  {/* Before */}
                  <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-red-400">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-red-600 font-bold">А</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Точка старту
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.before}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center -my-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                      <ArrowDown className="text-white" size={20} />
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-white rounded-2xl p-4 shadow-md border-l-4 border-green-400">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <span className="text-green-600 font-bold">Б</span>
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">
                        Результат
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.after}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
<div className="mt-12 text-center">
  <div className="flex items-center justify-center gap-2 mb-4">
    <AlertTriangle className="text-yellow-500" size={28} />
  </div>

  <p className="text-lg text-gray-600 mb-6">
    Відгуки, представлені на цій сторінці, надані випускниками добровільно та виключно після повного завершення навчання.
  </p>
</div>
        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Твоя трансформація починається тут
          </h3>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Кожна історія - це шлях від невизначеності до впевненості, від страху до сили
          </p>
        </div>

      </div>
    </section>
  );
}