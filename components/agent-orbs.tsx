"use client";

import { motion } from "framer-motion";
import { Database, RefreshCw, Upload } from "lucide-react";

interface AgentOrbsProps {
  state: "error" | "healing" | "healthy";
}

const agents = [
  {
    name: "Extrator",
    icon: Database,
    description: "Extração de APIs",
    delay: 0,
  },
  {
    name: "Transformador",
    icon: RefreshCw,
    description: "Validação e Limpeza",
    delay: 0.1,
  },
  {
    name: "Carregador",
    icon: Upload,
    description: "Persistência em BD",
    delay: 0.2,
  },
];

export function AgentOrbs({ state }: AgentOrbsProps) {
  const getOrbStyles = () => {
    switch (state) {
      case "error":
        return {
          glow: "shadow-red-500/40",
          bg: "from-red-500/20 to-red-600/10",
          border: "border-red-500/30",
          iconColor: "text-red-400",
          animation: "animate-shake",
        };
      case "healing":
        return {
          glow: "shadow-amber-500/40",
          bg: "from-amber-500/20 to-amber-600/10",
          border: "border-amber-500/30",
          iconColor: "text-amber-400",
          animation: "",
        };
      case "healthy":
        return {
          glow: "shadow-emerald-500/40",
          bg: "from-emerald-500/20 to-emerald-600/10",
          border: "border-emerald-500/30",
          iconColor: "text-emerald-400",
          animation: "",
        };
    }
  };

  const styles = getOrbStyles();

  return (
    <div className="flex flex-wrap justify-center gap-8 py-8">
      {agents.map((agent, index) => {
        const Icon = agent.icon;
        return (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: agent.delay, duration: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              animate={
                state === "healthy"
                  ? {
                      y: [0, -8, 0],
                    }
                  : state === "error"
                  ? {
                      x: [-2, 2, -2, 2, 0],
                    }
                  : {
                      scale: [1, 1.05, 1],
                    }
              }
              transition={{
                duration: state === "error" ? 0.4 : 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.3,
              }}
              className={`
                relative w-24 h-24 rounded-full
                glass border ${styles.border}
                bg-gradient-to-br ${styles.bg}
                flex items-center justify-center
                shadow-lg ${styles.glow}
                ${styles.animation}
              `}
            >
              {/* Inner glow */}
              <div
                className={`absolute inset-2 rounded-full bg-gradient-to-br ${styles.bg} blur-sm`}
              />
              <Icon className={`relative w-10 h-10 ${styles.iconColor}`} />
            </motion.div>
            <div className="text-center">
              <p className="font-semibold text-sm text-slate-200">{agent.name}</p>
              <p className="text-xs text-slate-500">{agent.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
