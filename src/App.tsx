import React, { useState, useEffect } from 'react';
import { Shield, Smartphone, CreditCard, Clock, Crown, MessageCircle, Zap } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 9, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 9, seconds: 59 }; // Reset timer
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-950 to-black text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        
        {/* Main Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 font-montserrat">
            🔥 Última Chance: Desbloqueie o Acesso VIP com Ela por Apenas{' '}
            <span className="text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mt-2">
              R$6,90!
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-poppins">
            Essa é a sua{' '}
            <span className="text-orange-400 font-bold">única oportunidade</span>{' '}
            de entrar direto e{' '}
            <span className="text-red-400 font-bold">sem censura</span>. 
            Essa condição não vai aparecer de novo. Tudo liberado agora por um{' '}
            <span className="text-yellow-400 font-bold">valor simbólico</span>.
          </p>
        </div>

        {/* Urgency Timer */}
        <div className="text-center mb-8">
          <div className="inline-block bg-red-800/50 border-2 border-red-500 rounded-xl px-6 py-4">
            <p className="text-yellow-400 font-bold text-lg mb-2">
              ⚠️ Essa oferta expira em:
            </p>
            <div className="text-3xl font-black text-white">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>

        {/* Model Image */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-80 h-[500px] md:w-96 md:h-[600px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-red-800/30">
              <img 
                src="/Sigam 👉🏻 @melmaiiaafc para mais conteúdos. 💞 copy.jpg" 
                alt="Modelo VIP" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                }}
              />
              
              {/* VIP Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-black uppercase animate-pulse">
                  👑 VIP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 px-2">
          
          {/* Plan 1 - Espiadinha */}
          <div className="bg-black/30 border border-gray-600 rounded-xl p-4 md:p-6 text-center backdrop-blur-sm opacity-80">
            <div className="mb-4">
              <Clock className="w-8 h-8 md:w-10 md:h-10 text-gray-400 mx-auto mb-3" />
              <h3 className="text-base md:text-lg font-bold text-gray-300 mb-2">Espiadinha</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-xl md:text-2xl font-black text-white mb-4">R$6,90</div>
              <ul className="text-xs md:text-sm text-gray-400 space-y-2 text-left">
                <li>• Apenas 1 mês de acesso ao conteúdo</li>
                <li>• Sem chamada</li>
                <li>• Sem bônus</li>
                <li>• Sem grupo</li>
              </ul>
            </div>
            
            <button 
              onClick={() => window.open('https://pagfacil.online/checkout/cme0skja400gccvxlghgac7w9?offer=QUABY9I', '_blank')}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-300 text-sm md:text-base"
            >
              Quero o acesso básico
            </button>
          </div>

          {/* Plan 2 - Flerte Quente */}
          <div className="bg-black/40 border-2 border-orange-500 rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm relative">
            
            <div className="mb-4">
              <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-orange-400 mb-2">Flerte Quente</h3>
            </div>
            
            <div className="mb-6">
              <div className="text-2xl md:text-3xl font-black text-white mb-4">R$14,50</div>
              <ul className="text-xs md:text-sm text-gray-300 space-y-2 text-left">
                <li>• 3 meses de acesso ao conteúdo</li>
                <li>• Chamada de 15 minutos com a modelo</li>
                <li>• Acesso ao grupo no Telegram</li>
                <li>• 5 vídeos secretos bônus</li>
              </ul>
            </div>
            
            <button 
              onClick={() => window.open('https://pagfacil.online/checkout/cme0t51j000ga49ot6c8fh7p3?offer=NH6E6U2', '_blank')}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base animate-pulse"
            >
              Quero o plano completo
            </button>
          </div>

          {/* Plan 3 - Proibido 🔥 */}
          <div className="bg-black/50 border-3 border-yellow-500 rounded-2xl p-4 md:p-6 text-center backdrop-blur-sm shadow-2xl shadow-yellow-500/30 relative transform md:scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-black animate-pulse">
                🔥 MAIS VENDIDO
              </span>
            </div>
            
            <div className="absolute -top-2 -right-2">
              <span className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold animate-bounce">
                Poucas vagas!
              </span>
            </div>
            
            <div className="mb-4">
              <Crown className="w-12 h-12 md:w-14 md:h-14 text-yellow-400 mx-auto mb-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-black text-yellow-400 mb-2">Proibido 🔥</h3>
              <p className="text-xs text-yellow-300 font-bold">VIP de Verdade • Melhor Valor</p>
            </div>
            
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-4">R$39,90</div>
              <ul className="text-xs md:text-sm text-gray-200 space-y-2 text-left">
                <li>• <span className="text-yellow-400 font-bold">12 meses</span> de acesso total</li>
                <li>• 1 chamada exclusiva de <span className="text-yellow-400 font-bold">40 minutos</span></li>
                <li>• Conteúdo secreto: <span className="text-yellow-400 font-bold">10 vídeos + 30 fotos</span></li>
                <li>• Conteúdo <span className="text-yellow-400 font-bold">personalizado</span> sob pedido</li>
                <li>• Grupo <span className="text-yellow-400 font-bold">ULTRA VIP</span> exclusivo</li>
                <li>• Selo no perfil + destaque no atendimento</li>
                <li>• Brinde surpresa após 30 dias 🎁</li>
                <li>• <span className="text-green-400 font-bold">Garantia de 7 dias</span></li>
              </ul>
            </div>
            
            <button 
              onClick={() => window.open('https://pagfacil.online/checkout/cme0t69us00gp49otqfaab81c?offer=1HVL6YE', '_blank')}
              className="w-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black py-3 md:py-4 px-4 md:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/50 animate-pulse text-base md:text-lg"
              style={{ 
                filter: 'drop-shadow(0 10px 20px rgba(255, 0, 0, 0.6))',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              🔥 QUERO O PROIBIDO AGORA!
            </button>
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="bg-black/30 rounded-2xl p-4 md:p-6 mb-8 backdrop-blur-sm border border-gray-800 mx-2">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="text-green-400" size={16} />
              <span className="text-gray-300 text-sm md:text-base">🔒 Compra 100% segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="text-blue-400" size={16} />
              <span className="text-gray-300 text-sm md:text-base">🎭 Sigilo absoluto na fatura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="text-purple-400" size={16} />
              <span className="text-gray-300 text-sm md:text-base">📱 Acesso imediato no celular</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;