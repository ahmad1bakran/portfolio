export default function LangLoading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#000000]">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-emerald-500/80"
        aria-hidden
      />
    </div>
  );
}
