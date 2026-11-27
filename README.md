# 27 November 2026 — The World in One Image

A newspaper front-page poster summing up the world news of Friday 27 November 2026 in a single 1024×1024 image.

## The six stories

1. **Kim vows to expand nuclear arsenal** — North Korea's leader pledges a bigger nuclear programme.
2. **Thanksgiving storm cuts power** — A fierce storm knocks out power for hundreds of thousands on the US East Coast.
3. **EU split over budget and Ukraine loan** — Leaders wrestle over a €1.6 trillion budget and a $49bn loan to Ukraine.
4. **Trump tells Putin to pull back** — Trump says he asked Putin to end military aggression across Europe.
5. **Tanker capsizes off Ibiza** — A diesel tanker sinks off Ibiza; a crew member dies.
6. **UK calls up reservists** — Britain mobilises military reservists for the first time since the Cold War.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the poster image held in this repository — to `/output/entry.png`. The image is located through `import.meta.url`, so the copy works from any working directory. Run locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entry

Built for the make.fun competition [news-image-20261127](https://make.fun/c/news-image-20261127) — "Sum up 27 November's world news in one image".
