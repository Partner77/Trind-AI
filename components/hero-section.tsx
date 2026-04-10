"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Play } from "lucide-react";
import { SelfHealingTerminal } from "./self-healing-terminal";
import { CodeMorphing } from "./code-morphing";
import { AgentOrbs } from "./agent-orbs";

export function HeroSection() {
  const [systemState, setSystemState] = useState<"error" | "healing" | "healthy">(
    "error"
  );

  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden" id="demo">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-emerald-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Sistemas Multiagentes + Auto-Cura</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6 leading-tight text-balance">
            Engenharia de Resiliência
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              e Auto-Cura de Pipelines
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
            Uma arquitetura ETL distribuída que deteta falhas automaticamente e injeta
            correções em tempo real. Elimine a latência de manutenção e transforme o
            seu fluxo de dados num organismo dinâmico e inteligente.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Partner77/Trind-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/25"
            >
              <Github className="w-5 h-5" />
              <span>Explorar Repositório</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#arquitetura"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-slate-200 font-semibold hover:bg-white/10 transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Ver Arquitetura</span>
            </a>
          </div>
        </motion.div>

        {/* Agent Orbs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AgentOrbs state={systemState} />
        </motion.div>

        {/* Terminal Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <SelfHealingTerminal onStateChange={setSystemState} />
            <CodeMorphing state={systemState} />
          </div>

          {/* Status Indicator */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className={`w-3 h-3 rounded-full transition-colors ${
                systemState === "error"
                  ? "bg-red-500 animate-pulse"
                  : systemState === "healing"
                  ? "bg-amber-500 animate-pulse"
                  : "bg-emerald-500"
              }`}
            />
            <span className="text-sm text-slate-400">
              {systemState === "error"
                ? "Falha Detetada - Aguardando Auto-Cura"
                : systemState === "healing"
                ? "Módulo de Auto-Cura Ativo"
                : "Sistema Estável - Todos os Agentes Saudáveis"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
