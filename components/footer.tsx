"use client";

import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">T</span>
              </div>
              <span className="text-lg font-bold text-slate-100">Trind-AI</span>
            </div>
            <p className="text-sm text-slate-500 text-center md:text-left">
              Arquitetura ETL resiliente com Auto-Cura
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Partner77/Trind-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Repositório</span>
            </a>
            <a
              href="#demo"
              className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Ver Demo</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            Projeto Integrador I - Instituto Federal de Educação, Ciência e Tecnologia
          </p>
          <p className="text-sm text-slate-500">
            Desenvolvido por Asafe Tork - 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
