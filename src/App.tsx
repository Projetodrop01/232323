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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4 font-montserrat px-2">
            🔥 Última Chance: Desbloqueie o Acesso VIP com Ela por Apenas{' '}
            <span className="text-orange-400 text-3xl sm:text-4xl md:text-5xl block mt-2">
              R$9,90!
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto font-poppins px-4">
            Essa é a sua{' '}
            <span className="text-orange-400 font-bold">única oportunidade</span>{' '}
            de entrar direto e{' '}
            <span className="text-red-400 font-bold">sem censura</span>. 
            Essa condição não vai aparecer de novo. Tudo liberado agora por um{' '}
            <span className="text-yellow-400 font-bold">valor simbólico</span>.
          </p>
        </div>

        {/* Urgency Timer */}
        <div className="text-center mb-6">
          <div className="inline-block bg-red-800/50 border-2 border-red-500 rounded-xl px-4 py-3">
            <p className="text-yellow-400 font-bold text-base mb-2">
              ⚠️ Essa oferta expira em:
            </p>
            <div className="text-2xl font-black text-white">
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>

        {/* Model Image */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[500px] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-red-800/30">
              <img 
                src="/modelo-principal.jpg" 
                alt="Modelo VIP" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop';
                }}
              />
              
              {/* VIP Badge */}
              <div className="absolute top-2 right-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-black uppercase animate-pulse">
                  👑 VIP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 px-3">
          
          {/* Plan 1 - Espiadinha */}
          <div className="bg-black/30 border border-gray-600 rounded-xl p-4 text-center backdrop-blur-sm opacity-80">
            <div className="mb-3">
              <Clock className="w-6 h-6 md:w-8 md:h-8 text-gray-400 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-gray-300 mb-1">Espiadinha</h3>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-black text-white mb-3">R$9,90</div>
              <ul className="text-sm text-gray-400 space-y-1 text-left">
                <li>• Apenas 1 mês de acesso ao conteúdo</li>
                <li>• Sem chamada</li>
                <li>• Sem bônus</li>
                <li>• Sem grupo</li>
              </ul>
            </div>
            
            <button 
              onClick={() => window.open('https://pagfacil.online/checkout/cmeeutc1t060nn1qwqwmioo1g?offer=110ABFD', '_blank')}
              className="w-full bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-base"
            >
              Quero o acesso básico
            </button>
          </div>

          {/* Plan 2 - Flerte Quente */}
          <div className="bg-black/40 border-2 border-orange-500 rounded-2xl p-4 text-center backdrop-blur-sm relative">
            
            <div className="mb-3">
              <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-orange-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-orange-400 mb-1">Flerte Quente</h3>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-black text-white mb-3">R$14,90</div>
              <ul className="text-sm text-gray-300 space-y-1 text-left">
                <li>• 3 meses de acesso ao conteúdo</li>
                <li>• Chamada de 15 minutos com a modelo</li>
                <li>• Acesso ao grupo no Telegram</li>
                <li>• 5 vídeos secretos bônus</li>
              </ul>
            </div>
            
            <button 
              onClick={() => window.open('https://pagfacil.online/checkout/cmeeutqtn064ygdsdh9lgyqx7?offer=IAMXU85', '_blank')}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-base animate-pulse"
            >
              Quero o plano completo
            </button>
          </div>

          {/* Plan 3 - Proibido 🔥 */}
          <div className="bg-black/50 border-2 border-yellow-500 rounded-2xl p-4 text-center backdrop-blur-sm shadow-2xl shadow-yellow-500/30 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-black animate-pulse">
                🔥 MAIS VENDIDO
              </span>
            </div>
            
            <div className="absolute -top-2 -right-1">
              <span className="bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold animate-bounce">
                Poucas vagas!
              </span>
            </div>
            
            <div className="mb-3 mt-4">
              <Crown className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mx-auto mb-2 animate-pulse" />
              <h3 className="text-xl font-black text-yellow-400 mb-1">Proibido 🔥</h3>
              <p className="text-xs text-yellow-300 font-bold">VIP de Verdade • Melhor Valor</p>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-black text-yellow-400 mb-3">R$19,90</div>
              <ul className="text-sm text-gray-200 space-y-1 text-left">
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
              onClick={() => window.open('https://pagfacil.online/checkout/cmeeuu4dl05v658qc5bdqaxml?offer=JXQK71D', '_blank')}
              className="w-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 hover:from-red-700 hover:via-red-600 hover:to-yellow-600 text-white font-black py-3 px-4 rounded-xl transition-all duration-300 shadow-lg shadow-red-500/50 animate-pulse text-base"
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
        <div className="bg-black/30 rounded-2xl p-4 mb-6 backdrop-blur-sm border border-gray-800 mx-3">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-center">
            <div className="flex items-center space-x-2">
              <Shield className="text-green-400" size={14} />
              <span className="text-gray-300 text-sm">🔒 Compra 100% segura</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="text-blue-400" size={14} />
              <span className="text-gray-300 text-sm">🎭 Sigilo absoluto na fatura</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="text-purple-400" size={14} />
              <span className="text-gray-300 text-sm">📱 Acesso imediato no celular</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;