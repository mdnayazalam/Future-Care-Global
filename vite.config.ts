import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(import.meta.dirname, 'index.html'),
          privacyPolicy: path.resolve(import.meta.dirname, 'privacy-policy.html'),
          termsEngagement: path.resolve(import.meta.dirname, 'terms-of-engagement.html'),
          blogIndex: path.resolve(import.meta.dirname, 'blog/index.html'),
          findJobs: path.resolve(import.meta.dirname, 'blog/how-to-find-jobs-in-delhi-ncr.html'),
          agenciesHire: path.resolve(import.meta.dirname, 'blog/how-recruitment-agencies-help-companies-hire.html'),
          resumePrep: path.resolve(import.meta.dirname, 'blog/how-to-prepare-a-resume-for-jobs-in-delhi.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
