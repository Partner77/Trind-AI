"use client";

import { motion } from "framer-motion";
import {
  Container,
  Cpu,
  Shield,
  Zap,
  GitBranch,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Container,
    title: "Contêineres Docker",
    description:
      "Agentes isolados em contêineres garantem portabilidade e segurança. O conhecimento do agente permanece intacto independentemente do servidor.",
  },
  {
    icon: Cpu,
    title: "Sistemas Multiagentes",
    description:
      "Arquitetura distribuída com agentes autónomos especializados: Extrator, Transformador e Carregador trabalhando em harmonia.",
  },
  {
    icon: Zap,
    title: "Auto-Cura Inteligente",
    description:
      "Deteção cirúrgica de falhas com reparação regenerativa. O sistema injeta patches no código-fonte em tempo real usando LLM.",
  },
  {
    icon: Shield,
    title: "Validação Ética",
    description:
      "Camada de responsabilidade moral distribuída. Cada ação automatizada é auditável, garantindo integridade dos dados.",
  },
  {
    icon: GitBranch,
    title: "Pipeline ETL Resiliente",
    description:
      "Extração, transformação e carga automatizados com tolerância a falhas. Zero intervenção manual necessária.",
  },
  {
    icon: Activity,
    title: "Monitorização em Tempo Real",
    description:
      "Dashboard visual com telemetria dos agentes. Acompanhe o estado de saúde do pipeline a qualquer momento.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 px-4" id="recursos">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Arquitetura de Ponta
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Construído sobre pilares tecnológicos sólidos: orquestração de agentes,
            automação inteligente e ética distribuída.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-6 hover:bg-white/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
