import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { AlertTriangle } from "lucide-react";

interface ArrowProps {
  onClick?: () => void;
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 bottom-[20px] z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
      aria-label="Наступний відгук"
    >
      <ChevronRight className="text-purple-600" size={24} />
    </button>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 bottom-[20px] z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors"
      aria-label="Попередній відгук"
    >
      <ChevronLeft className="text-purple-600" size={24} />
    </button>
  );
}

export function TestimonialsCarousel() {
  const testimonials = [
    {
      text: "Через все моє життя я іду з думкою, що зі мною щось не так, що я не така... Робота з тобою допомогла зрозуміти, що це не так. І хоч я все ще впадаю в цю \"пастку\", я завжди згадую твої слова.",
      author: "студент 1 ступінь 2025"
    },
    {
      text: "Чутлива терапевтка з науковим підходом. До цих пір дивує наскільки все звʼязано і як дивно маленькі, нібито, події дитинства потім впливають на все подальше життя. Була розгубленою і чужою в цьому світі. Зараз відчуваю себе цілісніше, опорніше і спокійніше",
      author: "студентка 1 ступеня"
    },
    {
      text: "Дуже ніжна... в своїх діях... рухах... методах роботи з свідомістю і підсвідомістю... легенько ніби ниточки.",
      author: "студентка 1 ступеня"
    },
    {
      text: "Як професіонал своєї справи, бачить більше ніж ти розповідаєш.",
      author: "студент 1 ступеня"
    },
    {
      text: "Богиня гештальту, гуру зі своєю неповторною філософією. Ти «топиш» за мене, навіть коли я обʼєктивно не «зовсім» стосовно інших",
      author: "студентка 1 ступеня"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Що кажуть учасники 1-го ступеня про роботу з Юлею
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mx-2 sm:mx-4">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="outline-none">
                  <div className="flex flex-col items-center text-center px-2 sm:px-4">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                        <Quote className="text-purple-600" size={24} />
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl italic min-h-[120px] sm:min-h-[100px] flex items-center justify-center">
                      «{testimonial.text}»
                    </p>

                    {/* Author */}
                    <div className="pt-4 border-t border-gray-200 w-full max-w-md">
                      <p className="text-gray-600 font-medium text-sm sm:text-base">
                         {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Personal Message from Yulia */}
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-purple-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              <span className="font-bold text-purple-600">Я, Юлія Сторожевська</span>, веду групу 1-го ступеня особисто - це простір, де ми разом досліджуємо себе, працюємо з полем, модальностями, тілом і контактом. 
              <span className="block mt-3">
                <span className="font-semibold">Тетяна Семібратова</span> - керівник програми і ми з нею обговорюємо процеси та динаміку групи.
              </span>
            </p>
            <div className="pt-5 border-t border-purple-200">
              <p className="text-base sm:text-lg text-gray-800 font-medium mb-4">
                Якщо ви шукаєте безпечне, чутливе та глибоке ведення -
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="https://www.instagram.com/storozhevskie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Написати в Instagram
                </a>
                <span className="text-gray-500 text-sm">або</span>
           <a
  href="https://forms.gle/e5u9aWCiHooSC33r9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all text-sm sm:text-base"
>
  Заповнити анкету
</a>
              </div>
            </div>
          </div>
        </div>
<div className="mt-12 text-center">
  <div className="flex items-center justify-center gap-2 mb-4">
    <AlertTriangle className="text-yellow-500" size={28} />
  </div>

  <p className="text-lg text-gray-600 mb-6">
    Відгуки, представлені на цій сторінці, надані випускниками добровільно та виключно після повного завершення навчання.
  </p>
</div>


      </div>
    </section>
  );
}