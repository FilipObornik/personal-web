"use client";

interface ConnectionStatusProps {
  isConnected: boolean;
}

export default function ConnectionStatus({ isConnected }: ConnectionStatusProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div
        className={`w-2.5 h-2.5 rounded-full ${
          isConnected ? "bg-green-500" : "bg-red-500 animate-pulse"
        }`}
      />
      <span className="text-white/60">
        {isConnected ? "Připojeno" : "Odpojeno"}
      </span>
    </div>
  );
}
