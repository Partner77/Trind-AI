"use client";

import { motion, AnimatePresence } from "framer-motion";

interface CodeMorphingProps {
  state: "error" | "healing" | "healthy";
}

const codeStates = {
  error: {
    highlight: "bg-red-500/20 border-red-500/50",
    code: `API_URL = "https://jsonplaceholder.typicode.com/postsX"
#                                              ^^^^^ ERRO`,
  },
  healing: {
    highlight: "bg-amber-500/20 border-amber-500/50",
    code: `# LLM Diagnóstico: URL com sufixo corrompido
# Aplicando Patch Regex...
url = re.sub(r'posts[A-Z]+$', 'posts', API_URL)`,
  },
  healthy: {
    highlight: "bg-emerald-500/20 border-emerald-500/50",
    code: `API_URL = "https://jsonplaceholder.typicode.com/posts"
# PATCH APLICADO COM SUCESSO ✓`,
  },
};

export function CodeMorphing({ state }: CodeMorphingProps) {
  const currentState = codeStates[state];

  return (
    <div className="glass rounded-xl overflow-hidden h-full">
      {/* Code Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-slate-400 font-mono ml-2">
          extractor.py - Patch em Tempo Real
        </span>
      </div>

      {/* Code Body */}
      <div className="p-4 bg-black/40 h-[calc(100%-48px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={state}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`rounded-lg border p-4 ${currentState.highlight}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  state === "error"
                    ? "bg-red-400"
                    : state === "healing"
                    ? "bg-amber-400 animate-pulse"
                    : "bg-emerald-400"
                }`}
              />
              <span className="text-xs font-mono text-slate-400">
                {state === "error"
                  ? "Código Defeituoso Detetado"
                  : state === "healing"
                  ? "Auto-Cura em Progresso..."
                  : "Código Reparado"}
              </span>
            </div>
            <pre className="font-mono text-sm text-slate-200 whitespace-pre-wrap leading-relaxed">
              {currentState.code}
            </pre>
          </motion.div>
        </AnimatePresence>

        {/* Code context */}
        <div className="mt-4 text-xs text-slate-500 font-mono">
          <div className="opacity-50">
            <span className="text-purple-400">def</span>{" "}
            <span className="text-blue-400">extract_data</span>
            <span className="text-slate-300">(self):</span>
          </div>
          <div className="opacity-50 pl-4">
            <span className="text-slate-400">response = requests.get(API_URL)</span>
          </div>
          <div className="opacity-50 pl-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-slate-400">response.json()</span>
          </div>
        </div>
      </div>
    </div>
  );
}
