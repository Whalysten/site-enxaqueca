"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Shield, Clock, Users, Zap, Heart, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EnxaquecaLanding() {
  const [timeLeft, setTimeLeft] = useState(5 * 60) // 5 minutes in seconds
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Countdown timer that resets every 5 minutes
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 5 * 60 // Reset to 5 minutes
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const benefits = [
    {
      icon: Heart,
      title: "Método Natural",
      desc: "Sem medicamentos ou efeitos colaterais prejudiciais",
    },
    {
      icon: Zap,
      title: "Resultados Rápidos",
      desc: "Primeiros resultados visíveis em apenas 7 dias",
    },
    {
      icon: Users,
      title: "Comprovado",
      desc: "Testado e aprovado por centenas de mulheres",
    },
    {
      icon: Shield,
      title: "Suporte Diário",
      desc: "Acompanhamento personalizado durante todo o desafio",
    },
    {
      icon: CheckCircle,
      title: "Sem Medicamentos",
      desc: "Abordagem 100% natural e segura",
    },
    {
      icon: Clock,
      title: "21 Dias",
      desc: "Transformação completa em apenas 3 semanas",
    },
  ]

  const testimonials = [
    {
      name: "Joana Vidal",
      text: "Meninas, essa de ficar com dor de cabeça assim que acordar e tomar remédio já fez uma diferença no dia. Tomei o shot e fiquei sem dor por uma hora. Já para o trabalho mais disposta e passei o dia sem dor!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7HyRLVcPFENEhek6mXgiCW9sFtGv2T.png",
    },
    {
      name: "Fátima Nascimento",
      text: "Resumo dos 7 dias sem dor de cabeça: 1 hora sem dor, aumentei a ingestão de água, comer mais, shot, parar de tomar remédios. Bom dia! 🌸",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NybJDfNZ4iZVnkprGiDwzUa09e9YXZ.png",
    },
    {
      name: "Participante do Grupo",
      text: "Feliz que fazem 14 dias sem crises, sem dores, sem analgésicos, seguindo as dicas do dr. Voltei com o exercício físico e não senti dor de cabeça. Feliz com os resultados até aqui!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xDgehpn4ScSQw4cZKYy667oSLtQ3ZO.png",
    },
    {
      name: "Lidyane Freita",
      text: "Eu sou uma enxaquecosa menstrual. E esse mês com as dicas consegui passar o mês sem dor forte, consegui controlar bastante com o chá de gengibre. Muito obrigada pelos ensinamentos!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3bCaRjqZlwsxc8KQm2Gn15aypK42MS.png",
    },
    {
      name: "Rosa Oliveira",
      text: "Aos 58 anos pensava que teria que conviver com isso para sempre. O desafio me devolveu a qualidade de vida!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-67aqMjqKb7BsZqdvcP21GbO7xK7syE.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated Space-Tech Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles-space">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="particle-space"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${15 + Math.random() * 25}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header - Oferta Desbloqueada */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 p-4 md:p-6"
      >
        <div className="glass-neon-card neon-pulse-border mx-auto max-w-5xl text-center p-4 md:p-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl animate-bounce">🎉</span>
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-cyan-300">
              Parabéns! Você desbloqueou R$80,00 de desconto exclusivo
            </span>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-purple-300 font-medium">no Desafio Enxaquecosa Sem Dor</p>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative z-10 px-4 md:px-6 pb-28 md:pb-12">
        {/* Hero Section - Headline Principal */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 leading-tight max-w-6xl mx-auto">
            <span className="gradient-text-shine">
              ACABE COM SUAS CRISES DE ENXAQUECA EM 21 DIAS COM UM MÉTODO NATURAL E COMPROVADO POR CENTENAS DE MULHERES
            </span>
          </h1>
        </motion.section>

        {/* Seção de Benefícios - Cards Flutuantes */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * index,
                  ease: "easeOut",
                }}
                className="glass-neon-card floating-card-enhanced p-4 md:p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="neon-icon-wrapper mb-4">
                  <benefit.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-sm md:text-base lg:text-lg mb-2 text-cyan-300">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Oferta Exclusiva - Bloco Visual Principal */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <div className="glass-neon-card neon-glow-border max-w-3xl mx-auto text-center p-6 md:p-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-cyan-300">OFERTA EXCLUSIVA</h2>
            <div className="mb-4">
              <span className="text-xl md:text-2xl text-gray-400 line-through opacity-30 font-medium">De R$99,90</span>
            </div>
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-purple-400 mb-6 neon-text-glow">
              R$19,90
            </div>
            <p className="text-sm md:text-base text-cyan-200 font-medium">
              Desconto aplicado automaticamente - Restam apenas 7 kits promocionais
            </p>
          </div>
        </motion.section>

        {/* Contador Regressivo Fake */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-12 md:mb-16"
        >
          <div className="text-center">
            <p className="text-lg md:text-2xl mb-6 text-red-400 font-bold animate-pulse">⚠️ Sua oferta expira em</p>
            <div className="holographic-timer text-5xl md:text-7xl lg:text-8xl font-mono font-bold">
              {formatTime(timeLeft)}
            </div>
          </div>
        </motion.section>

        {/* Botão de Compra Chamativo */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16 md:mb-20 text-center"
        >
          <Button
            asChild
            className="cta-button-enhanced text-xl md:text-2xl px-8 md:px-16 py-6 md:py-8 rounded-full font-bold group"
          >
            <a href="https://go.tribopay.com.br/kounzjibvx" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-3">
                🚀 Começar Agora o Desafio Sem Dor!
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </a>
          </Button>
        </motion.section>

        {/* Garantia de 7 Dias */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="glass-neon-card max-w-3xl mx-auto text-center p-6 md:p-10">
            <div className="guarantee-seal w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-2xl">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">GARANTIA RISCO ZERO</h3>
            <p className="text-lg md:text-xl text-cyan-200 leading-relaxed">
              Teste o desafio por 7 dias. Se não funcionar, devolvemos cada centavo.
            </p>
          </div>
        </motion.section>

        {/* Depoimentos - Slider Futurista */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-300">O que nossas alunas dizem</h2>
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-neon-card p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-cyan-400 shadow-lg"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl mb-4 text-cyan-100 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <p className="font-bold text-cyan-300 text-lg">- {testimonials[currentTestimonial].name}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.section>
        {/* Footer - Termos Legais */}
        <footer className="relative z-10 mt-16 border-t border-cyan-800/30">
          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Links Legais */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6">
              <a
                href="#termos"
                className="text-cyan-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
              >
                Termos de Uso
              </a>
              <span className="hidden md:block text-cyan-600">|</span>
              <a
                href="#privacidade"
                className="text-cyan-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
              >
                Política de Privacidade
              </a>
              <span className="hidden md:block text-cyan-600">|</span>
              <a
                href="#contato"
                className="text-cyan-300 hover:text-purple-400 transition-colors duration-300 text-sm md:text-base"
              >
                Contato
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm md:text-base mb-2">
                © 2024 Desafio Enxaquecosa Sem Dor. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs md:text-sm">
                Este produto não substitui o acompanhamento médico. Consulte sempre um profissional de saúde.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="glass-neon-card mt-6 p-4 md:p-6">
              <p className="text-gray-300 text-xs md:text-sm text-center leading-relaxed">
                <strong className="text-cyan-300">Aviso Legal:</strong> Os resultados podem variar de pessoa para
                pessoa. As informações contidas neste site não constituem aconselhamento médico e são apenas para fins
                educacionais. Sempre consulte um profissional de saúde qualificado antes de fazer mudanças em sua rotina
                de saúde.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent md:hidden z-50 backdrop-blur-sm">
        <Button asChild className="cta-button-mobile w-full text-lg py-4 rounded-full font-bold">
          <a href="https://go.tribopay.com.br/kounzjibvx" target="_blank" rel="noopener noreferrer">
            🚀 Começar Agora - R$19,90
          </a>
        </Button>
      </div>
    </div>
  )
}
