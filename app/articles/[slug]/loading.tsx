export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 h-10 w-44 animate-pulse rounded-full bg-white/10" />
        <div className="animate-pulse overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6 p-6 sm:p-8 lg:p-10">
              <div className="h-10 w-44 rounded-full bg-white/10" />
              <div className="space-y-3">
                <div className="h-12 w-full max-w-4xl rounded-2xl bg-white/10" />
                <div className="h-12 w-5/6 rounded-2xl bg-white/10" />
                <div className="h-6 w-full max-w-3xl rounded-2xl bg-white/10" />
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="h-7 w-24 rounded-full bg-white/10" />
                <div className="h-7 w-20 rounded-full bg-white/10" />
                <div className="h-7 w-24 rounded-full bg-white/10" />
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 sm:p-6">
                <div className="h-6 w-40 rounded-full bg-white/10" />
                <div className="mt-5 space-y-3">
                  <div className="h-5 w-full rounded-lg bg-white/10" />
                  <div className="h-5 w-11/12 rounded-lg bg-white/10" />
                  <div className="h-5 w-10/12 rounded-lg bg-white/10" />
                  <div className="h-5 w-4/5 rounded-lg bg-white/10" />
                </div>
              </div>
            </div>

            <div className="space-y-5 border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div className="aspect-[4/3] rounded-3xl bg-white/10" />
              <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-5 sm:p-6">
                <div className="h-6 w-32 rounded-full bg-white/10" />
                <div className="mt-4 grid gap-3">
                  <div className="h-16 rounded-2xl bg-white/10" />
                  <div className="h-16 rounded-2xl bg-white/10" />
                  <div className="h-16 rounded-2xl bg-white/10" />
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-white/5 p-5 sm:p-6">
                <div className="h-5 w-36 rounded-full bg-white/10" />
                <div className="mt-3 h-4 w-full rounded-lg bg-white/10" />
                <div className="mt-2 h-11 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}