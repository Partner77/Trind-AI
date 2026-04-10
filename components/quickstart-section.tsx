"use client";

import { motion } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Clone o Repositório",
    command: "git clone https://github.com/Partner77/Trind-AI.git && cd Trind-AI",
  },
  {
    number: "02",
    title: "Execute o Orquestrador",
    command: "python main_orchestrator.py",
  },
  {
    number: "03",
    title: "Abra o Dashboard",
    command: "# Abra app/index.html no navegador",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
      aria-label="Copiar comando"
    >
      {copied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-slate-400" />
      )}
    </button>
  );
}

export function QuickStartSection() {
  return (
    <section className="py-24 px-4" id="instalacao">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Comece em Minutos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            O Trind-AI foi desenhado para ser simples de executar. Siga estes três
            passos e observe a magia da auto-cura em ação.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-emerald-400">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-slate-100 mb-3">
                    {step.title}
                  </h3>
                  <div className="flex items-center gap-2 bg-black/40 rounded-lg px-4 py-3 border border-white/5">
                    <Terminal className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <code className="text-sm text-emerald-400 font-mono flex-1 overflow-x-auto">
                      {step.command}
                    </code>
                    <CopyButton text={step.command} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-slate-500 mb-4">Stack Técnica</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python 3.x", "SQLite3", "Docker", "HTML5", "JavaScript", "Bootstrap"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full glass text-sm text-slate-300"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
