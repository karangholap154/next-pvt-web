export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24 pb-16 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="animate-pulse rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <div className="h-10 w-48 rounded-full bg-white/10" />
              <div className="space-y-3">
                <div className="h-12 w-full max-w-2xl rounded-2xl bg-white/10" />
                <div className="h-6 w-full max-w-xl rounded-2xl bg-white/10" />
                <div className="h-6 w-5/6 rounded-2xl bg-white/10" />
              </div>
              <div className="flex gap-3">
                <div className="h-11 w-28 rounded-full bg-white/10" />
                <div className="h-11 w-36 rounded-full bg-white/10" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-5">
                    <div className="mb-3 h-1.5 w-14 rounded-full bg-white/10" />
                    <div className="h-8 w-12 rounded-lg bg-white/10" />
                    <div className="mt-4 h-4 w-24 rounded-lg bg-white/10" />
                    <div className="mt-2 h-3 w-28 rounded-lg bg-white/10" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-6">
              <div className="space-y-4">
                <div className="h-5 w-40 rounded-full bg-white/10" />
                <div className="h-8 w-64 rounded-2xl bg-white/10" />
                <div className="space-y-3 pt-2">
                  <div className="h-16 rounded-2xl bg-white/10" />
                  <div className="h-16 rounded-2xl bg-white/10" />
                  <div className="h-16 rounded-2xl bg-white/10" />
                </div>
                <div className="h-28 rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/75 shadow-2xl shadow-black/20">
              <div className="aspect-[16/10] bg-white/10" />
              <div className="space-y-4 p-5 sm:p-6">
                <div className="flex gap-2">
                  <div className="h-7 w-24 rounded-full bg-white/10" />
                  <div className="h-7 w-20 rounded-full bg-white/10" />
                </div>
                <div className="h-7 w-5/6 rounded-lg bg-white/10" />
                <div className="h-4 w-full rounded-lg bg-white/10" />
                <div className="h-4 w-11/12 rounded-lg bg-white/10" />
                <div className="flex flex-wrap gap-2">
                  <div className="h-7 w-20 rounded-full bg-white/10" />
                  <div className="h-7 w-24 rounded-full bg-white/10" />
                  <div className="h-7 w-16 rounded-full bg-white/10" />
                </div>
                <div className="h-11 rounded-2xl bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}