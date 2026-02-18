import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  description: string;
  fear: string;
  image: string;
}

export function TestimonialsGraduates() {
  const testimonials: Testimonial[] = [
    {
      text: "Проходячи програму поряд із Танею та Юлею, я здобула чутливість - і це для мене найцінніший досвід. Поруч із ними я могла бути собою. Мене приймали, не засуджували. Життя розділилося на До і Після. З великою вдячністю Тані та Юлі.",
      author: "Юлія",
      description: "психолог, закінчила 2 ступінь",
      fear: "цікавив професійний ріст, але лякали 5 років навчання до сертифікації",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      text: "Якщо є інтерес, але водночас і страх - це вже хороший знак. Це означає, що тема жива. Можна дати собі дозвіл просто спробувати - не зобов'язуючи себе на роки вперед. Зробити перший крок, а вже потім вирішити, чи це тобі підходить.",
      author: "Випускниця 2 ступеня",
      description: "психолог",
      fear: "зайшла зі страхом, що не потягне матеріально",
      image: "https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      text: "Кожна людина обирає свій шлях. Можна жити в «матриці» - світі ілюзій та обмежень. А можна обрати шлях, де тебе навчать діяти, приймати рішення, брати відповідальність за свої вчинки та життя. Якщо хочеш знайти ресурс, відчути внутрішню рівновагу - зроби цей крок і поринь у чудовий всесвіт знань «про себе» разом із чуйною, емпатичною гештальт-терапевткою, тренером МІГІС Юлією Сторожевською.",
      author: "Людмила",
      description: "закінчила 2 ступінь, для себе",
      fear: "заходила зі страхом перед публічним виступом (розмовою)",
      image: "https://images.unsplash.com/photo-1758686254563-5c5ab338c8b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      text: "Процес навчання в групі з іншими учнями та тренерами - це надзвичайний простір. Поруч із теорією одразу на прикладах та вправах розглядаються емоції, почуття, взаємодії, реакції. Це поле підтримки та прийняття тебе як особистості. Неймовірний процес і досвід!",
      author: "Анна",
      description: "закінчила 2 ступінь",
      fear: "запит «відсутність власних кордонів»",
      image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      text: "Насправді я не знаю, з якої причини ви думаєте записатися на програму, і не знаю, чи допоможе це вам досягти ваших цілей. Але впевнений: ви отримаєте знання, які змусять подивитися на оточуючих людей по-іншому - як це сталося зі мною.",
      author: "Кріпак Валентин",
      description: "закінчив 2 ступінь для себе",
      fear: "",
      image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      text: "У житті не буває випадковостей! Якщо гештальт - то Юля і Таня! Саме з ними твоя подорож буде цікавою!",
      author: "Ілона Яковлєва",
      description: "психолог, закінчила програму 2 ступеня",
      fear: "основним страхом було, що не вистачить грошей",
      image: "https://images.unsplash.com/photo-1584940121819-1883a5d3b0bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Якщо сумніваєшся - ось що кажуть<br />ті, хто теж боявся
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Поради випускників
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-100">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  «{testimonial.text}»
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonial.description}
                    </p>
                    {testimonial.fear && (
                      <p className="text-blue-600 text-sm mt-1 font-medium">
                        {testimonial.fear}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 sm:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Твоя історія може бути наступною
          </h3>
          <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto">
            Кожен з них починав зі страху і сумнівів. Але зробили крок - і їхнє життя змінилося.
          </p>
        </div>
      </div>
    </section>
  );
}
