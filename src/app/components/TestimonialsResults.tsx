import { Star, TrendingUp, Heart, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { AlertTriangle } from "lucide-react";

export function TestimonialsResults() {
  const testimonials = [
    {
      name: "Юлія",
      role: "цікавив професійний ріст, але лякали 5 років навчання до сертифікації",
      image: "/images/avatar.png",
      text: "Проходячи програму поряд із Танею та Юлею, я здобула чутливість - і це для мене найцінніший досвід. Поруч із ними я могла бути собою. Мене приймали, не засуджували. Життя розділилося на До і Після. З великою вдячністю Тані та Юлі.",
      result: "психолог, закінчила 2 ступінь",
      icon: TrendingUp,
      color: "blue"
    },
    {
      
      role: "психолог, зайшла зі страхом, що не потягне матеріально",
      image: "/images/avatar.png",
      text: "Якщо є інтерес, але водночас і страх - це вже хороший знак. Це означає, що тема жива. Можна дати собі дозвіл просто спробувати - не зобов’язуючи себе на роки вперед. Зробити перший крок, а вже потім вирішити, чи це тобі підходить.",
      result: "Випускниця 2 ступеня",
      icon: Heart,
      color: "purple"
    },
    {
      name: "Людмила",
      role: "для себе, заходила зі страхом перед публічним виступом (розмовою).",
      image: "/images/avatar.png",
      text: "Кожна людина обирає свій шлях. Можна жити в «матриці» - світі ілюзій та обмежень. А можна обрати шлях, де тебе навчать діяти, приймати рішення, брати відповідальність за свої вчинки та життя. Якщо хочеш знайти ресурс, відчути внутрішню рівновагу - зроби цей крок і поринь у чудовий всесвіт знань «про себе» разом із чуйною, емпатичною гештальт-терапевткою, тренером МІГІС Юлією Сторожевською.",
      result: "закінчила 2 ступінь",
      icon: Sparkles,
      color: "green"
    },
    {
      name: "Анна",
      role: "із запитом «відсутність власних кордонів",
      image: "/images/avatar.png",
      text: "Процес навчання в групі з іншими учнями та тренерами - це надзвичайний простір. Поруч із теорією одразу на прикладах та вправах розглядаються емоції, почуття, взаємодії, реакції. Це поле підтримки та прийняття тебе як особистості. Неймовірний процес і досвід!",
      result: "закінчила 2 ступінь",
      icon: Heart,
      color: "pink"
    },
    {
      name: "Кріпак Валентин ",
      role: "для себе",
      image: "/images/avatar.png",
      text: "Насправді я не знаю, з якої причини ви думаєте записатися на програму, і не знаю, чи допоможе це вам досягти ваших цілей. Але впевнений: ви отримаєте знання, які змусять подивитися на оточуючих людей по-іншому - як це сталося зі мною.",
      result: "закінчив 2 ступінь ",
      icon: Sparkles,
      color: "orange"
    },
    {
      name: "Ілона Яковлєва",
      role: "основним страхом було, що не вистачить грошей.",
      image: "/images/avatar.png",
      text: "У житті не буває випадковостей! Якщо гештальт - то Юля і Таня! Саме з ними твоя подорож буде цікавою!",
      result: "психолог, закінчила програму 2 ступеня, ",
      icon: TrendingUp,
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
             Поради випускників
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Якщо сумніваєшся - ось що кажуть<br />ті, хто теж боявся
          </h2>
         
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Result Badge */}
                <div className={`inline-flex items-center gap-2 ${colorClasses[testimonial.color as keyof typeof colorClasses]} px-3 py-1.5 rounded-full text-sm font-semibold mb-4`}>
                  <Icon size={16} />
                  <span>{testimonial.result}</span>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
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
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Готові до власної трансформації?
          </p>
          <a
  href="https://forms.gle/e5u9aWCiHooSC33r9"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-semibold">
    Почати навчання
  </button>
</a>

        </div>
      </div>
    </section>
  );
}
