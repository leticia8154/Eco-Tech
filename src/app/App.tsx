import { useState } from 'react';
import { Smartphone, Battery, BatteryCharging, Leaf, Award, CheckCircle, Package, Lock } from 'lucide-react';

type Step = 'home' | 'cpf' | 'category' | 'weighing' | 'reward' | 'destination' | 'confirmation';
type Category = 'celular' | 'pilha' | 'bateria' | 'outros' | null;
type Destination = 'neoenergia' | 'caesb' | 'acumular' | null;

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [cpf, setCpf] = useState('');
  const [category, setCategory] = useState<Category>(null);
  const [weight, setWeight] = useState(0);
  const [reward, setReward] = useState(0);
  const [destination, setDestination] = useState<Destination>(null);

  const handleCpfSubmit = () => {
    if (cpf.length === 11) {
      setStep('category');
    }
  };

  const handleCategorySelect = (cat: Category) => {
    setCategory(cat);
    setStep('weighing');
    setTimeout(() => {
      const mockWeight = Math.floor(Math.random() * 200) + 50;
      setWeight(mockWeight);
      const calculatedReward = (mockWeight / 50) * 0.15;
      setReward(Number(calculatedReward.toFixed(2)));
      setStep('reward');
    }, 2000);
  };

  const handleRewardConfirm = () => {
    setStep('destination');
  };

  const handleDestinationSelect = (dest: Destination) => {
    setDestination(dest);
    setStep('confirmation');
  };

  const resetFlow = () => {
    setStep('home');
    setCpf('');
    setCategory(null);
    setWeight(0);
    setReward(0);
    setDestination(null);
  };

  return (
    <div className="size-full bg-gradient-to-b from-[#1D2020] via-[#1a1f1a] to-[#2F5233] relative overflow-hidden">
      {/* Decorative Leaves Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Leaf className="absolute top-20 right-10 size-64 text-[#6B9E3E] rotate-45" strokeWidth={0.5} />
        <Leaf className="absolute bottom-32 left-16 size-96 text-[#6B9E3E] -rotate-12" strokeWidth={0.5} />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="p-6 flex items-center gap-2.5">
          <div className="bg-[#6B9E3E] rounded-lg p-1.5">
            <Leaf className="size-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">EcoTech</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-between px-6 pb-6">
          {/* Tela Home */}
          {step === 'home' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-8 mb-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-light text-white leading-tight">
                    Bem-vindo ao<br />
                    <span className="font-bold">EcoTech</span>
                  </h2>
                  <p className="text-base text-gray-400">
                    Descarte seus resíduos<br />
                    eletrônicos e ganhe<br />
                    benefícios
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStep('cpf')}
                className="w-full bg-[#6B9E3E] hover:bg-[#5a8533] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#6B9E3E]/20"
              >
                Iniciar descarte
              </button>
            </div>
          )}

          {/* Tela CPF */}
          {step === 'cpf' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-8 mb-8">
                <div className="space-y-3">
                  <div className="bg-[#6B9E3E]/10 border border-[#6B9E3E]/30 rounded-full size-16 flex items-center justify-center mx-auto">
                    <Lock className="size-8 text-[#6B9E3E]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">
                    Informe seu CPF
                  </h2>
                  <p className="text-sm text-gray-400">
                    Para identificação e crédito<br />
                    de bônus
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6">
                  <input
                    type="text"
                    value={cpf}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 11) setCpf(value);
                    }}
                    placeholder="___.___.___-__"
                    className="w-full text-2xl text-center font-mono text-gray-900 focus:outline-none tracking-wider"
                    maxLength={11}
                  />
                  <p className="text-center text-gray-400 text-xs mt-3">
                    {cpf.length}/11 dígitos
                  </p>
                </div>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={handleCpfSubmit}
                  disabled={cpf.length !== 11}
                  className="w-full bg-[#6B9E3E] hover:bg-[#5a8533] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#6B9E3E]/20"
                >
                  Continuar
                </button>
                <button
                  onClick={() => setStep('home')}
                  className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 text-base py-3 rounded-xl transition-all"
                >
                  Voltar
                </button>
              </div>
            </div>
          )}

          {/* Tela Seleção de Categoria */}
          {step === 'category' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-8 mb-8 w-full">
                <div className="space-y-2">
                  <h2 className="text-2xl font-light text-white">
                    O que deseja<br />
                    descartar hoje?
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => handleCategorySelect('celular')}
                    className="bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all group"
                  >
                    <Smartphone className="size-10 text-gray-700 mx-auto mb-3 group-hover:text-[#6B9E3E] transition-colors" />
                    <p className="text-base font-medium text-gray-900">Celular</p>
                  </button>

                  <button
                    onClick={() => handleCategorySelect('pilha')}
                    className="bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all group"
                  >
                    <Battery className="size-10 text-gray-700 mx-auto mb-3 group-hover:text-[#6B9E3E] transition-colors" />
                    <p className="text-base font-medium text-gray-900">Pilha</p>
                  </button>

                  <button
                    onClick={() => handleCategorySelect('bateria')}
                    className="bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all group"
                  >
                    <BatteryCharging className="size-10 text-gray-700 mx-auto mb-3 group-hover:text-[#6B9E3E] transition-colors" />
                    <p className="text-base font-medium text-gray-900">Bateria</p>
                  </button>

                  <button
                    onClick={() => handleCategorySelect('outros')}
                    className="bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all group"
                  >
                    <Package className="size-10 text-gray-700 mx-auto mb-3 group-hover:text-[#6B9E3E] transition-colors" />
                    <p className="text-base font-medium text-gray-900">Outros</p>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep('cpf')}
                className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 text-base py-3 rounded-xl transition-all"
              >
                Voltar
              </button>
            </div>
          )}

          {/* Tela Pesagem */}
          {step === 'weighing' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-10">
                <div className="space-y-3">
                  <h2 className="text-2xl font-light text-white">
                    Realizando pesagem
                  </h2>
                  <p className="text-sm text-gray-400">
                    Aguarde enquanto<br />
                    processamos seu descarte
                  </p>
                </div>

                <div className="relative size-32 mx-auto">
                  <div className="absolute inset-0 bg-[#6B9E3E] rounded-full animate-ping opacity-20"></div>
                  <div className="relative bg-[#6B9E3E]/20 border-2 border-[#6B9E3E] rounded-full size-32 flex items-center justify-center">
                    <Leaf className="size-16 text-[#6B9E3E] animate-pulse" />
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <p className="text-gray-400 text-sm mb-1">Peso detectado</p>
                  <p className="text-4xl text-white font-bold">---g</p>
                </div>
              </div>
            </div>
          )}

          {/* Tela Recompensa */}
          {step === 'reward' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-8 mb-8 w-full">
                <div className="space-y-3">
                  <div className="bg-[#6B9E3E]/10 border border-[#6B9E3E]/30 rounded-full size-16 flex items-center justify-center mx-auto">
                    <CheckCircle className="size-9 text-[#6B9E3E]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">
                    Descarte realizado<br />
                    com sucesso!
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                    <p className="text-gray-400 text-sm mb-1">Peso coletado</p>
                    <p className="text-3xl text-white font-bold">{weight}g</p>
                  </div>

                  <div className="bg-gradient-to-br from-[#6B9E3E] to-[#5a8533] rounded-2xl p-6">
                    <Award className="size-10 mx-auto mb-3 text-white" />
                    <p className="text-sm text-white/80 mb-1">Você ganhou</p>
                    <p className="text-4xl text-white font-bold mb-1">R$ {reward.toFixed(2)}</p>
                    <p className="text-xs text-white/70">em crédito</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleRewardConfirm}
                className="w-full bg-[#6B9E3E] hover:bg-[#5a8533] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#6B9E3E]/20"
              >
                Continuar
              </button>
            </div>
          )}

          {/* Tela Seleção de Destino */}
          {step === 'destination' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-6 mb-8 w-full">
                <div className="space-y-2">
                  <h2 className="text-2xl font-light text-white">
                    Como gostaria de<br />
                    receber seu bônus?
                  </h2>
                  <div className="bg-[#6B9E3E]/10 border border-[#6B9E3E]/30 rounded-xl px-4 py-2 inline-block">
                    <p className="text-[#6B9E3E] font-bold text-lg">R$ {reward.toFixed(2)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => handleDestinationSelect('neoenergia')}
                    className="w-full bg-white hover:bg-gray-50 rounded-xl p-4 transition-all text-left flex items-center gap-4"
                  >
                    <div className="bg-yellow-100 rounded-lg p-2">
                      <div className="text-2xl">💡</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Desconto na conta de luz</p>
                      <p className="text-xs text-gray-500">Neoenergia</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleDestinationSelect('caesb')}
                    className="w-full bg-white hover:bg-gray-50 rounded-xl p-4 transition-all text-left flex items-center gap-4"
                  >
                    <div className="bg-blue-100 rounded-lg p-2">
                      <div className="text-2xl">💧</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Desconto na conta de água</p>
                      <p className="text-xs text-gray-500">CAESB</p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleDestinationSelect('acumular')}
                    className="w-full bg-white hover:bg-gray-50 rounded-xl p-4 transition-all text-left flex items-center gap-4"
                  >
                    <div className="bg-green-100 rounded-lg p-2">
                      <div className="text-2xl">💰</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Acumular crédito</p>
                      <p className="text-xs text-gray-500">Juntar para usar depois</p>
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep('reward')}
                className="w-full bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 text-base py-3 rounded-xl transition-all"
              >
                Voltar
              </button>
            </div>
          )}

          {/* Tela Confirmação */}
          {step === 'confirmation' && (
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-500">
              <div className="text-center space-y-6 mb-8 w-full">
                <div className="space-y-3">
                  <div className="bg-[#6B9E3E]/10 border border-[#6B9E3E]/30 rounded-full size-20 flex items-center justify-center mx-auto">
                    <CheckCircle className="size-11 text-[#6B9E3E]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">
                    Obrigado!
                  </h2>
                  <p className="text-sm text-gray-400">
                    Sua descartação foi<br />
                    efetuada com sucesso
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 space-y-4 text-left">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600">Tipo de resíduo</p>
                    <p className="text-sm font-medium text-gray-900 capitalize">{category}</p>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600">Peso coletado</p>
                    <p className="text-sm font-medium text-gray-900">{weight}g</p>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <p className="text-sm text-gray-600">Crédito gerado</p>
                    <p className="text-base font-bold text-[#6B9E3E]">R$ {reward.toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-600">Destino</p>
                    <p className="text-sm font-medium text-gray-900">
                      {destination === 'acumular' ? 'Acumulado' : destination === 'neoenergia' ? 'Neoenergia' : 'CAESB'}
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-gray-400 text-center">
                    ♻️ Material destinado para<br />
                    <span className="text-[#6B9E3E] font-medium">ONG Programando o Futuro</span>
                  </p>
                </div>
              </div>

              <button
                onClick={resetFlow}
                className="w-full bg-[#6B9E3E] hover:bg-[#5a8533] text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-[#6B9E3E]/20"
              >
                Finalizar
              </button>
            </div>
          )}
        </div>

        {/* Footer Leaf Icon */}
        <div className="pb-6 flex justify-center">
          <Leaf className="size-12 text-[#6B9E3E] opacity-30" />
        </div>
      </div>
    </div>
  );
}
