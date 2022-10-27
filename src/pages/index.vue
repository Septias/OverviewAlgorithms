<script lang="ts" setup>
import MarkdownIt from 'markdown-it'
import type { Data } from '~/algorithms'
const marker = new MarkdownIt({ breaks: true })

const algs = reactive({ problems: [] } as unknown as Data)

function create_markdown(content?: string[]) {
  return content ? marker.render(content.join('\n')) : undefined
}
function transform(data: Data) {
  return {
    algorithms: data.algorithms.map((alg) => {
      return {
        ...alg,
        html: create_markdown(alg.function),
      }
    }),
    problems: data.problems.map((prob) => {
      return {
        ...prob,
        html: create_markdown(prob.solution),
      }
    }),
    proofTechnique: data.proofTechnique.map((tech) => {
      return {
        ...tech,
        html: create_markdown(tech.steps),
      }
    }),
  }
}

async function reload() {
  console.log('hi')
  const data: Data = (await import('~/algorithms')).data
  Object.assign(algs, transform(data))
}

const filtered = computed(() => algs.problems.filter(problem => problem.solution))

onUpdated(() => {
  console.log('hi')
  window.MathJax.typesetPromise()
})

onMounted(() => {
  reload()
})

// const yes = () => window.MathJax.typesetPromise()
</script>

<template lang="pug">
.flex.gap-2.justify-center.pb-2
  div.max-width
    div
      h1.text-2xl.font-bold.sticky.top-0.bg-white Algorithms
      .grid.gap-2.grid-cols-2
        .p-2.bg-green-800.rounded.text-white(v-for="alg in algs.algorithms")
          .flex.justify-between.items-center
            h2.text-xl.font-bold {{alg.title}}
            span(v-if="alg.complexity").leading-none.bg-gray-600.p-2.rounded-xl {{alg.complexity}}
          .flex(v-if="alg.solves")
            h2 solves:
            p.ml-2 {{ alg.solves }}
          div.py-1.prose.m-0(v-if="alg.html" v-html="alg.html")

    div
      h1.text-2xl.font-bold.sticky.top-0.bg-white Problems
      .grid.gap-2.grid-cols-2
        .p-2.bg-blue-800.rounded.text-white(v-for="problem in algs.problems")
          .flex.justify-between.items-center
            h2.text-xl.font-bold {{problem.title}}
            span.leading-none.bg-gray-600.p-2.rounded-xl {{problem.lc}}
          div
            p(v-if="problem.given")
              strong Given:
              |
              | {{problem.given}}
            p(v-if="problem.goal")
              strong Goal:
              |
              | {{problem.goal}}
    div
      h1.text-2xl.font-bold.sticky.top-0.bg-white Solutions
      .grid.gap-2.grid-cols-2
        .p-1.rounded.bg-blue-600.text-white(v-for="prb in filtered")
          .flex.justify-between.items-center.text-white.rounded.p-1
            h2.text-xl.font-bold {{prb.title}}
            span.leading-none.bg-gray-600.p-2.rounded-xl {{prb.lc}}
          div.py-1.overflow-auto.prose.m-0(v-if="prb.html" v-html="prb.html")

    div
      h1.text-2xl.font-bold.sticky.top-0.bg-white Proof Techniques
      .grid.gap-2.grid-cols-2
        .p-1.rounded.bg-orange-600.text-white(v-for="tech in algs.proofTechnique")
          .flex.justify-between.items-center.text-white.rounded.p-1
            h2.text-xl.font-bold {{tech.title}}
          div.py-1.overflow-auto.prose.m-0(v-if="tech.html" v-html="tech.html")
</template>

<style lang="sass">
.max-width
  max-width: 1200px

.custom-bg
  background: #b45309

.prose
  p, ul
    margin: 0px

  li
    margin: 5px 0px !important
</style>
