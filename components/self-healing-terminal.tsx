"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LogLine {
  text: string;
  type: "info" | "error" | "success" | "warning" | "header";
  timestamp: string;
}

const terminalLogs: LogLine[] = [
  { timestamp: "17:37:22", text: "=".repeat(58), type: "header" },
  { timestamp: "17:37:22", text: "   SERVER ORQUESTRADOR TRIND-AI INICIADO (Modo Contínuo)", type: "header" },
  { timestamp: "17:37:22", text: "=".repeat(58), type: "header" },
  { timestamp: "17:37:22", text: "--- [INÍCIO DO CICLO ETL ORQUESTRADO #1] ---", type: "info" },
  { timestamp: "17:37:22", text: "A invocar o agente 'Extractor'...", type: "info" },
  { timestamp: "17:37:22", text: "Falha catastrófica no 'Extractor'. (Exit Code 1)", type: "error" },
  { timestamp: "17:37:22", text: "Falha na API: 404 - Not Found", type: "error" },
  { timestamp: "17:37:22", text: "=== INICIAÇÃO DO MÓDULO DE AUTO-CURA (Simulação LLM) ===", type: "warning" },
  { timestamp: "17:37:22", text: "Diagnóstico LLM: Conectividade rejeitada (404/URL)", type: "warning" },
  { timestamp: "17:37:23", text: "Plano de Ação: Aplicar Patch Dinâmico no Código Fonte...", type: "warning" },
  { timestamp: "17:37:23", text: "Auto-Cura Concluída: Patch regex injetado no código vivo!", type: "success" },
  { timestamp: "17:37:23", text: "O pipeline recuperou o 'Extractor'. A reiniciar...", type: "success" },
  { timestamp: "17:37:23", text: "A invocar o agente 'Extractor'...", type: "info" },
  { timestamp: "17:37:23", text: "'Extractor' terminou com sucesso (SAUDÁVEL)", type: "success" },
  { timestamp: "17:37:23", text: "A invocar o agente 'Transformer'...", type: "info" },
  { timestamp: "17:37:23", text: "'Transformer' terminou com sucesso (SAUDÁVEL)", type: "success" },
  { timestamp: "17:37:23", text: "A invocar o agente 'Loader'...", type: "info" },
  { timestamp: "17:37:23", text: "'Loader' terminou com sucesso (SAUDÁVEL)", type: "success" },
  { timestamp: "17:37:23", text: "--- [FIM DO CICLO #1]. Sistema Estável. ---", type: "success" },
];

export function SelfHealingTerminal({
  onStateChange,
}: {
  onStateChange?: (state: "error" | "healing" | "healthy") => void;
}) {
  const [visibleLogs, setVisibleLogs] = useState<LogLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  const getLogColor = (type: LogLine["type"]) => {
    switch (type) {
      case "error":
        return "text-red-400";
      case "success":
        return "text-emerald-400";
      case "warning":
        return "text-amber-400";
      case "header":
        return "text-cyan-400";
      default:
        return "text-slate-300";
    }
  };

  const getCurrentState = (): "error" | "healing" | "healthy" => {
    if (currentIndex < 7) return "error";
    if (currentIndex < 12) return "healing";
    return "healthy";
  };

  useEffect(() => {
    if (currentIndex >= terminalLogs.length) {
      setTimeout(() => {
        setVisibleLogs([]);
        setCurrentIndex(0);
      }, 4000);
      return;
    }

    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setVisibleLogs((prev) => [...prev, terminalLogs[currentIndex]]);
      setCurrentIndex((prev) => prev + 1);
      onStateChange?.(getCurrentState());
      setIsAnimating(false);
    }, currentIndex < 5 ? 300 : currentIndex < 12 ? 500 : 250);

    return () => clearTimeout(timeout);
  }, [currentIndex, onStateChange]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <div className="glass rounded-xl overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-slate-400 font-mono ml-2">
          main_orchestrator.py - Cérebro Coordenador
        </span>
        <div className="ml-auto flex items-center gap-2">
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-2 h-2 bg-emerald-400 rounded-full"
            />
          )}
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="h-80 overflow-y-auto p-4 bg-black/40 terminal-text"
      >
        <AnimatePresence>
          {visibleLogs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`${getLogColor(log.type)} mb-1`}
            >
              <span className="text-slate-500">[{log.timestamp}]</span>{" "}
              <span className="text-slate-400">[ORQUESTRADOR]</span>{" "}
              <span>{log.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {visibleLogs.length === 0 && (
          <span className="text-slate-500">Aguardando início do ciclo ETL...</span>
        )}
      </div>
    </div>
  );
}
