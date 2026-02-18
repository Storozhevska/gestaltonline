import { Instagram, Send, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6">
            Професійна освіта - це найкраща інвестиція у себе
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/storozhevskie/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://t.me/yuliyastor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              aria-label="Telegram"
            >
              <Send size={28} />
            </a>
            
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center space-y-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white mb-2">Юлія Сторожевська</p>
              <p>Гештальт-терапевт, тренер МІГІС</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Інститут МІГІС</p>
              <p>Акредитована програма за стандартами EAGT</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 pt-4">
            © 2026 Всі права захищені
          </p>
        </div>
      </div>
    </footer>
  );
}
