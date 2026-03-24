/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Zap, 
  Shield, 
  Leaf, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  ArrowRight,
  Check,
  AlertTriangle,
  Clock3,
  Droplets,
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'KITS', href: '#' },
    { name: 'COLÁGENO', href: '#' },
    { name: 'CREATINA', href: '#' },
    { name: 'ÔMEGA 3', href: '#' },
    { name: 'VITAMINAS', href: '#' },
    { name: 'SKINCARE', href: '#' },
    { name: 'TODOS OS PRODUTOS', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-[#333333] text-white py-2 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-8 text-xs font-medium uppercase tracking-wider">
              🚚 Frete Grátis no Mês do Consumidor &nbsp;&nbsp;&nbsp;&nbsp; 🚀 Envio em 24h para regiões de São Paulo
            </span>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav className={cn(
        "transition-all duration-300 border-b border-gray-100",
        isScrolled ? "bg-white py-3" : "bg-white py-4"
      )}>
        <div className="container-wide flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://renovabe.com.br/cdn/shop/files/Logo-RenovaBe.svg?v=1754310202" 
              alt="Renova Be" 
              className="h-8 md:h-10"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-[12px] font-bold text-dark hover:text-gray-500 transition-colors">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#" className="hidden md:block text-[14px] font-medium text-dark hover:text-gray-500">Prescritores</a>
            <button className="p-1 hover:text-gray-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-1 hover:text-gray-500 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-1 flex items-center gap-1 hover:text-gray-500 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium">(0)</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60]"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-[70] p-6 overflow-y-auto"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-lg font-bold text-dark block">
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="pt-6 border-t border-gray-100">
                  <a href="#" className="text-lg font-medium text-dark block">Prescritores</a>
                </li>
                <li>
                  <a href="#" className="text-lg font-medium text-dark block">Login</a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const ProductGallery = () => {
  const images = [
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-7.jpg?v=1768836388",
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-2.jpg?v=1768836388",
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-6.jpg?v=1768836388",
    "https://renovabe.com.br/cdn/shop/files/galeria-colageno-verisol-cramberry-03.jpg?v=1768422188",
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-4.png?v=1768836388",
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-5.jpg?v=1768422188",
    "https://renovabe.com.br/cdn/shop/files/colageno-verisol-cranberry-img-sessao-galeria-unit-1.jpg?v=1768422188"
  ];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
        <img 
          src={images[activeImg]} 
          alt="Product" 
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {images.map((img, i) => (
          <button 
            key={i}
            onClick={() => setActiveImg(i)}
            className={cn(
              "aspect-square rounded-lg border-2 overflow-hidden transition-all",
              activeImg === i ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </button>
        ))}
      </div>
    </div>
  );
};

const KitBuilder = () => {
  const [selectedKit, setSelectedKit] = useState(1);
  const [flavors, setFlavors] = useState<Record<number, string>>({
    1: 'Cranberry',
    2: 'Cranberry',
    3: 'Cranberry',
    4: 'Cranberry',
    5: 'Cranberry'
  });

  const kits = [
    { 
      id: 1, 
      units: 1, 
      discount: 21, 
      price: 117.70, 
      comparePrice: 149.90, 
      unitPrice: 117.70,
      image: "https://renovabe.com.br/cdn/shop/files/Colageno-Verisol-Cranberry-Kit-1-Pote_7db448bc-b530-4347-af84-7a5c83f8f7bf.jpg?v=1770400418"
    },
    { 
      id: 3, 
      units: 3, 
      discount: 40, 
      price: 267.70, 
      comparePrice: 449.70, 
      unitPrice: 89.23,
      badge: "Mais Vendido",
      image: "https://renovabe.com.br/cdn/shop/files/Colageno-Verisol-Cranberry-Kit-3-Potes_e5da6e8c-66fd-4774-9a02-4199e2bf4a85.jpg?v=1770400394"
    },
    { 
      id: 5, 
      units: 5, 
      discount: 55, 
      price: 397.70, 
      comparePrice: 899.40, 
      unitPrice: 79.54,
      badge: "Melhor Preço",
      image: "https://renovabe.com.br/cdn/shop/files/Colageno-Verisol-Cranberry-Kit-5-Potes_4e645186-bf60-481d-b9c7-088c73bd53ca.jpg?v=1770400429"
    }
  ];

  const flavorOptions = [
    { name: 'Cranberry', color: '#E42B6C' },
    { name: 'Tangerina', color: '#EDA43B' },
    { name: 'Pink-lemonade', color: '#ef8790' },
    { name: 'Limão', color: '#64BB83' },
    { name: 'Tropical', color: '#ffd806' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Selecione o kit</h3>
      <div className="space-y-3">
        {kits.map((kit) => (
          <div 
            key={kit.id}
            className={cn(
              "relative border-2 rounded-2xl p-4 cursor-pointer transition-all",
              selectedKit === kit.id ? "border-dark bg-gray-50" : "border-gray-200 hover:border-gray-300"
            )}
            onClick={() => setSelectedKit(kit.id)}
          >
            {kit.badge && (
              <span className="absolute -top-3 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                {kit.badge}
              </span>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                  selectedKit === kit.id ? "border-dark" : "border-gray-300"
                )}>
                  {selectedKit === kit.id && <div className="w-2.5 h-2.5 rounded-full bg-dark" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{kit.units} unidade{kit.units > 1 ? 's' : ''}</span>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded">
                      {kit.discount}% OFF
                    </span>
                  </div>
                  <div className="text-xs text-muted">
                    R$ {kit.unitPrice.toFixed(2).replace('.', ',')} por unidade
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-muted line-through">R$ {kit.comparePrice.toFixed(2).replace('.', ',')}</div>
                <div className="font-bold text-lg">R$ {kit.price.toFixed(2).replace('.', ',')}</div>
              </div>
            </div>

            {/* Flavor Selection for Active Kit */}
            <AnimatePresence>
              {selectedKit === kit.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-4 pt-4 border-t border-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-xs font-bold mb-3">Selecione o sabor:</p>
                  <div className="space-y-3">
                    {[...Array(kit.units)].map((_, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-[10px] font-bold text-muted w-6">#{idx + 1}</span>
                        <div className="flex-1 relative">
                          <select 
                            className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm appearance-none outline-none focus:border-dark"
                            value={flavors[idx + 1]}
                            onChange={(e) => setFlavors({ ...flavors, [idx + 1]: e.target.value })}
                          >
                            {flavorOptions.map(opt => (
                              <option key={opt.name} value={opt.name}>{opt.name}</option>
                            ))}
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-muted" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <button className="w-full bg-dark text-white font-bold py-4 rounded-full text-lg hover:bg-gray-800 transition-colors mt-6">
        Comprar agora
      </button>
    </div>
  );
};

const Accordion = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="w-6 h-6 flex items-center justify-center">
            <Icon className="w-5 h-5 text-dark" />
          </div>
          <span className="font-bold text-sm">{title}</span>
        </div>
        <Plus className={cn("w-5 h-5 transition-transform", isOpen && "rotate-45")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-sm text-muted leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 md:p-6">
      <button 
        className="w-full flex items-center justify-between text-left gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-dark md:text-lg">{question}</span>
        <div className={cn("flex-shrink-0 transition-transform", isOpen && "rotate-180")}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen pt-[100px] md:pt-[120px]">
      <Navbar />

      {/* Hero Section */}
      <section className="container-narrow py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductGallery />
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-xl">
              <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Star className="w-3 h-3 fill-current" />
              </span>
              <span className="text-sm text-muted">Eleito o melhor Colágeno do Brasil</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Colágeno Verisol® + Ácido Hialurônico - Cranberry
            </h1>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFB74A] text-[#FFB74A]" />)}
                <span className="text-xs text-muted ml-2">2340 avaliações</span>
              </div>
              <p className="text-sm text-muted">
                Mais de <strong>50800</strong> compras no mês passado.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-muted line-through text-lg">R$ 149,90</span>
                <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">21% OFF</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">R$ 117,70</span>
                <span className="text-sm font-medium text-muted">no pix</span>
              </div>
              <p className="text-sm text-muted">Em até 6x de R$ 19,61 sem juros</p>
            </div>

            <p className="text-muted leading-relaxed">
              O passo mais poderoso do seu skincare. Com peptídeos bioativos Verisol®, ácido hialurônico e vitaminas essenciais, o colágeno Renova Be nutre a pele por dentro. Resultado em 4 semanas: mais firmeza, hidratação e regeneração real.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                { icon: Star, text: "Colágeno Verisol" },
                { icon: Sparkles, text: "Ácido Hialurônico" },
                { icon: Heart, text: "Reduz Rugas" },
                { icon: Zap, text: "Aumenta Firmeza" },
                { icon: Shield, text: "Hidrata Profundamente" },
                { icon: Leaf, text: "Resultados em 4 semanas" }
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-[11px] font-medium border border-gray-100">
                  <tag.icon className="w-3 h-3" />
                  {tag.text}
                </div>
              ))}
            </div>

            <KitBuilder />

            {/* Delivery Pill */}
            <div className="bg-[#f0fdf4] border border-[#64bb83] rounded-2xl p-4 flex items-start gap-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#0d6f3d] fill-current" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <strong className="text-sm text-[#0d6f3d]">ENTREGA FULL</strong>
                  <span className="text-sm text-dark">– Envio imediato em até 24h</span>
                </div>
                <p className="text-xs text-muted mt-1">
                  Comprando dentro das próximas <span className="font-bold">05h 22 min</span>
                </p>
              </div>
              <button className="text-[#0d6f3d] font-bold">ⓘ</button>
            </div>

            {/* Tabs / Accordions */}
            <div className="pt-4">
              <Accordion title="Descrição" icon={Info}>
                O Colágeno Renova Be Cranberry combina o poder do Verisol® e do ácido hialurônico com o sabor marcante e refrescante do cranberry. Uma fórmula de alta performance para quem busca uma pele mais firme, hidratada e com elasticidade renovada.
              </Accordion>
              <Accordion title="Benefícios" icon={Heart}>
                <ul className="space-y-2">
                  <li>• Melhora a elasticidade e firmeza da pele</li>
                  <li>• Hidratação profunda e duradoura</li>
                  <li>• Redução visível de linhas finas e rugas</li>
                  <li>• Fortalecimento da barreira cutânea</li>
                </ul>
              </Accordion>
              <Accordion title="Ingredientes" icon={Leaf}>
                Peptídeos bioativos de colágeno hidrolisado (Verisol®), hialuronato de sódio, biotina (vitamina B7), vitamina C, zinco, vitamina E, vitamina B6. NÃO CONTÉM GLÚTEN.
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Why you need collagen */}
      <section className="bg-bg-warm py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://renovabe.com.br/cdn/shop/files/ChatGPT_Image_8_de_jan._de_2026_16_53_34.png?v=1767903475" 
                alt="Collagen benefits" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-bold tracking-widest text-muted uppercase">Entenda se é o seu caso</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Porque você precisa de colágeno</h2>
                <p className="text-muted">Com o passar do tempo, o corpo reduz a produção natural de colágeno, proteína responsável por dar estrutura e sustentação à pele. E com isso, causa:</p>
              </div>
              
              <div className="space-y-3">
                {[
                  { title: "Rugas e linhas de expressão", text: "Se o espelho já mostra sinais do tempo, seu corpo está pedindo reforço de colágeno.", icon: ShieldCheck },
                  { title: "Perda de firmeza e elasticidade", text: "Se você sente a pele mais flácida e sem elasticidade, é hora de agir por dentro.", icon: Zap },
                  { title: "Pele ressecada", text: "Se a hidratação não dura e a pele parece sempre opaca, seu organismo precisa de nutrição celular.", icon: Droplets },
                  { title: "Pele sem luminosidade", text: "A aparência opaca e cansada vem da falta de nutrientes.", icon: Sun }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-bg-warm rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <item.icon className="w-5 h-5 text-dark" />
                        </div>
                        <span className="font-bold">{item.title}</span>
                      </div>
                      <Plus className="w-5 h-5 text-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What collagen does for you */}
      <section className="bg-bg-light py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que o colágeno vai fazer por você</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "1. Reduz rugas", text: "Suaviza marcas e linhas de expressão com efeito visível", img: "https://renovabe.com.br/cdn/shop/files/woman-section-action-collagen-1_700x700.jpg?v=1767985260" },
              { title: "2. Aumenta a firmeza", text: "Recupera firmeza e elasticidade com ação profunda", img: "https://renovabe.com.br/cdn/shop/files/woman-section-action-collagen-3_700x700.jpg?v=1767985260" },
              { title: "3. Hidrata de verdade", text: "Devolve o viço, maciez e brilho natural da pele em semanas", img: "https://renovabe.com.br/cdn/shop/files/woman-section-action-collagen-2_700x700.jpg?v=1767986470" },
              { title: "4. Ativa o colágeno", text: "Estimula o colágeno perdido de dentro pra fora", img: "https://renovabe.com.br/cdn/shop/files/woman-section-action-collagen-4_ec0f3f67-9b32-42e6-9e91-f0b632c0c4e3_700x700.jpg?v=1767985878" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-muted">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our collagen is different */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Porque nosso Colágeno é diferente?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Colágeno Verisol®", 
                text: "Estimula a produção natural de colágeno, melhora a firmeza da pele, reduz rugas e fortalece unhas e cabelos", 
                tags: ["RUGAS", "FIRMEZA DA PELE", "ELASTICIDADE"],
                img: "https://renovabe.com.br/cdn/shop/files/ChatGPT_Image_8_de_jan._de_2026_18_16_45_700x700.png?v=1767908429" 
              },
              { 
                title: "Ácido Hialurônico", 
                text: "Retém a hidratação na pele, melhora a elasticidade e promove uma aparência mais preenchida e jovem", 
                tags: ["HIDRATAÇÃO", "PELE JOVEM", "PREENCHIMENTO"],
                img: "https://renovabe.com.br/cdn/shop/files/ChatGPT_Image_8_de_jan._de_2026_15_57_09_700x700.png?v=1767898649" 
              },
              { 
                title: "Vitamina C", 
                text: "Essencial para a síntese de colágeno, atua como antioxidante e combate os radicais livres que envelhecem a pele", 
                tags: ["COLÁGENO", "ANTIOXIDANTE", "LUMINOSIDADE"],
                img: "https://renovabe.com.br/cdn/shop/files/bre023_vrias_laranjas_fatiadas_amontoada_macro_suculencia_ima_1fdb771d-359c-4f43-80d1-760b35ef32a7_2_700x700.png?v=1767970257" 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <div className="aspect-[12/8]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-6 space-y-4">
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Sections */}
      <section className="bg-white py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-bg-light p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-gray-100">
              <img src="https://renovabe.com.br/cdn/shop/files/logo-verisol-3.png?v=1767905929" alt="Verisol" className="w-32 md:w-40 object-contain" referrerPolicy="no-referrer" />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tecnologia Verisol®</h3>
                <p className="text-sm text-muted leading-relaxed">Verisol® é um colágeno bioativo com eficácia clinicamente comprovada, que atua de dentro para fora estimulando a produção natural de colágeno pela pele. Seus peptídeos são facilmente absorvidos e agem diretamente nas células.</p>
              </div>
            </div>
            <div className="bg-bg-light p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 border border-gray-100">
              <img src="https://renovabe.com.br/cdn/shop/files/logo-haplex.png?v=1767907544" alt="Haplex" className="w-32 md:w-40 object-contain" referrerPolicy="no-referrer" />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Tecnologia Haplex Plus™</h3>
                <p className="text-sm text-muted leading-relaxed">Haplex® é um ácido hialurônico de alta pureza e biodisponibilidade, com ação comprovada na hidratação profunda e na melhora da elasticidade da pele. Atua de dentro para fora, ajudando a reter água nas camadas cutâneas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Results */}
      <section className="bg-bg-light py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { time: "1 semana", text: "✅ Pele mais hidratada\n✅ Sensação de bem-estar\n✅ Ativação do colágeno", approval: "89% de aprovação" },
              { time: "2 semanas", text: "✅ Redução de linhas finas\n✅ Pele mais luminosa\n✅ Hidratação aumentada", approval: "92% de aprovação" },
              { time: "4 semanas", text: "✅ Rugas suavizadas\n✅ Firmeza aumentada\n✅ Elasticidade melhorada", approval: "96% de aprovação" },
              { time: "8 semanas", text: "✅ Pele rejuvenescida\n✅ Máxima firmeza\n✅ Beleza radiante", approval: "97% de aprovação" }
            ].map((item, i) => (
              <div key={i} className="bg-dark p-8 rounded-3xl text-white space-y-4">
                <h3 className="text-xl font-bold">{item.time}</h3>
                <p className="text-sm leading-relaxed whitespace-pre-line opacity-80">{item.text}</p>
                <div className="pt-4 border-t border-white/10">
                  <strong className="text-primary">{item.approval}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#c7f1c5] py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {[
              { val: "97%", text: "sentiram melhora na definição dos contornos do rosto" },
              { val: "99%", text: "notaram mais firmeza e elasticidade na pele em poucos dias" },
              { val: "99%", text: "pessoas notaram redução da profundidade de rugas e linhas finas" }
            ].map((item, i) => (
              <div key={i} className={cn(
                "flex items-center gap-6 px-8",
                i !== 2 && "md:border-r border-dark/20"
              )}>
                <span className="text-5xl font-bold text-dark">{item.val}</span>
                <p className="text-sm text-dark font-medium leading-tight">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[10px] text-dark/60 mt-12">
            *Com base em uma pesquisa com mais de 3.000 usuários atuais, avaliando a eficácia autopercebida.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-bg-warm py-16 md:py-24 overflow-hidden">
        <div className="container-narrow relative">
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 lg:left-[55%] lg:top-0 w-32 md:w-48 z-10">
            <img src="https://renovabe.com.br/cdn/shop/files/colageno-png.png?v=1767970257" alt="" className="w-full rotate-[-10deg]" referrerPolicy="no-referrer" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Porque escolher nosso Colágeno?</h2>
              <p className="text-muted">Nosso colágeno age mais rápido e entrega resultados mais profundos do que os suplementos comuns</p>
              <div className="flex flex-col items-center lg:items-start gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#FFB74A] text-[#FFB74A]" />)}
                </div>
                <span className="text-[10px] text-muted">Baseado em 7.979 avaliações de pessoas reais</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 md:p-6 text-left font-bold">Diferenciais</th>
                    <th className="p-4 md:p-6 text-center font-bold bg-bg-warm">Nosso Colágeno</th>
                    <th className="p-4 md:p-6 text-center font-bold text-muted">Comum</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    "Colágeno Verisol® Patenteado",
                    "Ácido Hialurônico Haplex Plus",
                    "Aumenta a firmeza da pele",
                    "Resultados em 4 Semanas",
                    "Estimula o Colágeno"
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="p-4 md:p-6 font-semibold text-dark">{row}</td>
                      <td className="p-4 md:p-6 text-center bg-bg-warm/30">
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-secondary/10 rounded-full">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                      </td>
                      <td className="p-4 md:p-6 text-center">
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-red-100 rounded-full">
                          <X className="w-4 h-4 text-red-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* How to use */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como usar o Colágeno Verisol®?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-12">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Dissolva em água</h4>
                  <p className="text-sm text-muted">Em um copo ou coaqueteleira misture 1 scoop (12g) em 150ml de água</p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center">
                  <Sun className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Tome pela manhã</h4>
                  <p className="text-sm text-muted">Consuma em jejum, ao acordar, para melhor absorção e efeito no organismo</p>
                </div>
              </div>
            </div>

            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://renovabe.com.br/cdn/shop/files/colageno-verisol-tangerina-img-sessao-galeria-unit-3.jpg?v=1768516831" 
                alt="How to use" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-12">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center">
                  <Clock3 className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Use diariamente</h4>
                  <p className="text-sm text-muted">O uso contínuo estimula a produção de colágeno e garante melhores resultados</p>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                <div className="w-12 h-12 bg-bg-warm rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Aguarde os resultados</h4>
                  <p className="text-sm text-muted">Em poucas semanas, note pele mais firme, cabelos e unhas mais fortes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-bg-light py-16 md:py-24">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Tem alguma dúvida?<br />A gente responde.</h2>
              <p className="text-muted">As perguntas mais comuns para você comprar com tranquilidade e confiança.</p>
            </div>
            <div className="space-y-4">
              <FAQItem 
                question="O colágeno realmente ajuda com a flacidez da pele?" 
                answer="Sim! O colágeno atua como um suporte estrutural interno, ajudando a pele a manter firmeza quando usado de forma contínua. Estudos com Colágeno Verisol® mostram que ele contribui para melhorar a elasticidade e densidade da pele."
              />
              <FAQItem 
                question="Já tenho mais de 40 anos, ainda vai ajudar?" 
                answer="Sim! Após os 30 anos, o corpo reduz naturalmente a produção de colágeno, e esse processo se intensifica com o tempo. Por isso, a suplementação pode ser ainda mais relevante para quem tem mais de 40 anos."
              />
              <FAQItem 
                question="Como eu tomo? Qual melhor horário?" 
                answer="Em um copo ou coqueteleira dissolva 12 g (1 medidor) em 150 ml de água gelada, misture até ficar homogêneo. A maioria das nossas clientes toma pela manhã no café ou suco."
              />
              <FAQItem 
                question="Em quanto tempo posso começar a perceber diferença?" 
                answer="Os resultados são progressivos e variam de pessoa para pessoa. Melhorias em firmeza e elasticidade costumam ser mais perceptíveis entre 4 a 12 semanas de uso contínuo."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-16 pb-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Cadastre seu e-mail</h2>
              <p className="text-white/60 max-w-md">Digite seu melhor e-mail e fique por dentro de todos os lançamentos, promoções e dicas de saúde</p>
              <form className="flex gap-4 max-w-md">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 outline-none focus:border-white transition-colors"
                />
                <button className="bg-white text-dark font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                  Enviar
                </button>
              </form>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold">Categorias</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Kits</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Colágeno</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Creatina</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Vitaminas</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Institucionais</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Promoções</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold">Acesso rápido</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><a href="#" className="hover:text-white transition-colors">Meus pedidos</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Rastrear pedido</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-xs text-white/40 text-center md:text-left">
              2026 Renova Be. Todos os direitos reservados. CNPJ: 14.144.597/0001-52<br />
              Av Onze de Agosto, 1451 - Sala 707 | Jardim Ribeiro - Valinhos, SP | CEP: 13.270-190
            </p>
            <div className="flex gap-4">
              <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-419b3ccd84622738d4d29303281597f13d6f74b7b1a505587a815bc2b4166e8c.svg" alt="Visa" className="h-6" />
              <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-60dd14b41f0d1f1bc9700d773395150915091509150915091509150915091509.svg" alt="Mastercard" className="h-6" />
              <img src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-69a3f24c19b4de56e8871f609e73ca7f6d2e2bb9.svg" alt="Paypal" className="h-6" />
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
