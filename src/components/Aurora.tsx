/**
 * Full-page animated aurora / mesh-gradient backdrop.
 * Three slow-drifting blurred color blobs + a subtle film-grain overlay.
 * Fixed and pointer-events-none so it never interferes with content.
 */
export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Base wash */}
      <div className="absolute inset-0 bg-white dark:bg-[#050609]" />

      {/* Drifting color blobs */}
      <div className="animate-aurora-a absolute -top-1/4 -left-1/4 h-[70vmax] w-[70vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.13),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.28),transparent_60%)]" />
      <div className="animate-aurora-b absolute -right-1/4 top-1/3 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.22),transparent_60%)]" />
      <div className="animate-aurora-c absolute bottom-0 left-1/4 h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.07),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.20),transparent_60%)]" />

      {/* Fine grid for structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(120,120,160,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,120,160,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Film grain */}
      <div className="grain absolute inset-0 opacity-[0.05] mix-blend-overlay dark:opacity-[0.08]" />

      {/* Soft vignette for depth in dark mode */}
      <div className="absolute inset-0 hidden bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55))] dark:block" />
    </div>
  );
}
