import { MapPin, Video, Calendar, Users, Euro  } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { SmallVideoPlayer } from "@/app/components/SmallVideoPlayer";

export function Formats() {
  const openInterviewForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdv5eG16YmyBCVGcajZi6tytP0ZtefCkdJexUP0qhtCWct14g/viewform",
      "_blank"
    );
  };

  const mediaItems: Array<
    | { type: "video"; title: string; videoSrc: string; thumbnail?: string }
    | { type: "image"; title: string; src: string }
  > = [
    {
      type: "video",
      title: "Теплі зустрічі",
      videoSrc: "/video/geshtaltstart.MP4",
      thumbnail: "/video/geshtaltstart.png"
    },
    {
      type: "video",
      title: "Велика онлайн спільнота",
      videoSrc: "/video/new-connections.MP4",
      thumbnail: "/video/new-connections.png"
    },
    {
      type: "video",
      title: "Насичені семінари",
      videoSrc: "/video/simple-language.MP4",
      thumbnail: "/video/simple-language.png"
    },
    {
      type: "image",
      title: "Це натхнення!",
      src: "/images/realteachtwo.jpg"
    },
    {
      type: "image",
      title: "Реальні знання",
      src: "/images/realteachone.jpg"
    },
    {
      type: "image",
      title: "Глибокі знання",
      src: "/images/realteach.jpg"
    }
  ];

  return (
    <section id="formats" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Формат навчання
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-[9/16] relative mx-auto max-w-sm">
              <VideoPlayer
                src="/video/videooffline.MP4"
                poster="/video/videooffline.png"
                className="w-full h-full"
                showBadge={true}
                badgeText="ОНЛАЙН"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600" size={28} />
                Група ЧЕРНІВЦІ
              </h3>

              <p className="text-lg text-gray-700 mb-6">
               Глибокий живий контакт в Zoom
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Локація:</p>
                    <p className="text-gray-600">Обираєте Ви</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Особливості:</p>
                    <p className="text-gray-600">
Програма професійної підготовки гештальт-терапевтів МІГІС - інституту, акредитованого EAGT відповідно до найвищих європейських стандартів навчaння

                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Формат:</p>
                    <p className="text-gray-600">5 семінарів з періодичністю раз на два місяці. 1 семінар = 3 дні. Онлайн зустрічі. П'ятниця 18:00 - 21:00, Субота та Неділя 11:00 - 18:00</p>
                  </div>
                </div>
             

              <div className="flex items-start gap-3">
  <Euro className="text-blue-600 flex-shrink-0 mt-1" size={20} />
  <div>
    <p className="font-semibold text-gray-900">Ціна:</p>
    <p className="text-gray-600">
      125 євро за семінар
    </p>
  </div>
</div>
 </div>
              <Button
                onClick={openInterviewForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                Записатися на співбесіду
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-bold text-gray-900 text-center">
                  {item.title}
                </p>

                <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                  {item.type === "video" ? (
                    <SmallVideoPlayer
                      src={item.videoSrc}
                      poster={item.thumbnail}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}