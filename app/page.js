"use client";

import InstallPWAButton from "./components/InstallPWAButton";
import ServiceWorkerRegister from "./components/ServiceWorkerRegister";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 gap-6">
      
      <ServiceWorkerRegister />

      <h1 className="text-3xl font-bold">Offline Notes PWA</h1>

      <p className="text-gray-600 text-center max-w-md">
        This Progressive Web App can be installed and works offline.
      </p>

      {/* 🔽 Reference Install Button */}
      <InstallPWAButton />

    </main>
  );
}
