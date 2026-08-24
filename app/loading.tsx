export default function Loading() {
  return (
    <div className="pt-40 pb-24">
      <div className="container">
        <div className="mx-auto flex max-w-lg flex-col items-center gap-6">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div className="absolute inset-y-0 w-1/3 animate-[loading_1.4s_ease-in-out_infinite] rounded-full bg-brand-red-500" />
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-steel-500">
            Routing cargo…
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
