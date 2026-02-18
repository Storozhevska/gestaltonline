import { Button } from "@/app/components/ui/button";
import { MapPin } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function Hero() {
  const scrollToFormats = () => {
    const formatsSection = document.getElementById("formats");
    formatsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Навчання гештальт-терапії   <br />I ступінь ОНЛАЙН
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700">
                Від особистої глибини до міжнародного визнання
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Базовий курс (1 ступінь)
              </h2>
              <p className="text-lg text-gray-700">
                За стандартами EAGT спільно з інститутом МІГІС
              </p>
              <p className="text-gray-600">
                Для тих, хто прагне професії, контролю над життям та зустрічі зі своєю істинною суттю.
              </p>
            </div>

            
          </div>

          {/* <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758273241086-f3585ef8c2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwc2Vzc2lvbiUyMGNvbWZvcnR8ZW58MXx8fHwxNzY5NjU3OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Therapy Session"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
