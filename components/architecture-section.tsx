"use client";

import { motion } from "framer-motion";
import { Brain, Database, RefreshCw, Upload, ArrowRight } from "lucide-react";

const layers = [
  {
    icon: Brain,
    title: "Cérebro Coordenador",
    description:
      "Responsável pela interpretação de linguagem natural e orquestração dos agentes Docker. O centro de comando do pipeline.",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Database,
    title: "Agentes Operacionais",
    description:
      "Unidades autónomas encarregues de tarefas específicas: extração de APIs, limpeza de dados e integração de sistemas.",
    color: "from-cyan-500 to-blue-600",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: RefreshCw,
    title: "Camada de Validação",
    description:
      "Implementa o conceito de Responsabilidade Moral Distribuída, garantindo que cada ação seja auditável e ética.",
    color: "from-emerald-500 to-teal-600",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
];

export function ArchitectureSection() {
  return (
    <section className="py-24 px-4 bg-black/20" id="arquitetura">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Modelo de Três Camadas
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            O Trind-AI opera sob uma arquitetura modular que separa responsabilidades
            e maximiza a resiliência do sistema.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="flex items-center gap-4"
              >
                <div className="glass rounded-xl p-6 w-full lg:w-72 hover:scale-105 transition-transform">
                  <div
                    className={`w-14 h-14 rounded-xl ${layer.iconBg} flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-7 h-7 ${layer.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">
                    {layer.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                {index < layers.length - 1 && (
                  <ArrowRight className="hidden lg:block w-6 h-6 text-slate-600" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Pipeline Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 glass rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold text-slate-100 mb-6 text-center">
            Fluxo do Pipeline ETL
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {[
              { icon: Database, label: "Extração", desc: "APIs / Bases de Dados" },
              { icon: RefreshCw, label: "Transformação", desc: "Limpeza / Validação" },
              { icon: Upload, label: "Carregamento", desc: "SQLite / Dashboard" },
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full glass-strong flex items-center justify-center mb-3">
                      <StepIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <p className="font-semibold text-slate-200">{step.label}</p>
                    <p className="text-xs text-slate-500">{step.desc}</p>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block w-8 h-8 text-slate-600" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
