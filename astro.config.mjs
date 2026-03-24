// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

export default defineConfig({
  site: 'https://greatsong.github.io',
  base: '/ai-basic-textbook-teacher',
  server: { port: 4026 },
  integrations: [
    starlight({
      title: 'AI 기초 지도서',
      description: '인공지능 기초 — 교사용 수업 지도서',
      defaultLocale: 'root',
      locales: {
        root: { label: '한국어', lang: 'ko' },
      },
      expressiveCode: {
        plugins: [pluginCollapsibleSections()],
      },
      sidebar: [
        {
          label: '📋 시작 가이드',
          items: [
            { label: '지도서 사용법', slug: 'guide/how-to-use' },
            { label: '수업 전 준비', slug: 'guide/preparation' },
          ],
        },
        {
          label: 'Part 1 — AI의 시작',
          items: [
            { label: '1차시: 기계가 생각할 수 있는가?', slug: 'lessons/part1/lesson-01' },
            { label: '2차시: 기계가 스스로 학습할 수 있는가?', slug: 'lessons/part1/lesson-02' },
          ],
        },
        {
          label: 'Part 2 — 신경망의 비밀',
          items: [
            { label: '3차시: AI의 겨울을 이겨낸 알고리즘의 발견', slug: 'lessons/part2/lesson-03' },
            { label: '4차시: "잘 학습됐다"는 것을 어떻게 알 수 있을까?', slug: 'lessons/part2/lesson-04' },
          ],
        },
        {
          label: 'Part 3 — 학습의 원리',
          items: [
            { label: '5차시: 오차 줄이는 방향으로 나아가는 방법', slug: 'lessons/part3/lesson-05' },
            { label: '6차시: 오차를 줄이는 과정을 자동화하려면', slug: 'lessons/part3/lesson-06' },
          ],
        },
        {
          label: 'Part 4 — 언어를 이해하는 AI',
          items: [
            { label: '7차시: 단어를 숫자로 표현하면 계산할 수 있다', slug: 'lessons/part4/lesson-07' },
            { label: '8차시: ChatGPT의 작동 원리, 다음 단어 맞추기', slug: 'lessons/part4/lesson-08' },
          ],
        },
        {
          label: 'Part 5 — 확장 모듈',
          items: [
            { label: '9차시: 퍼셉트론에서 ChatGPT까지, 인공지능 연구의 역사', slug: 'lessons/part5/lesson-09' },
            { label: '10차시: 같은 질문, 다른 깊이', slug: 'lessons/part5/lesson-10' },
          ],
        },
        {
          label: '📎 부록',
          items: [
            { label: '평가 루브릭', slug: 'appendix/rubric' },
            { label: '예시 답안', slug: 'appendix/sample-answers' },
            { label: '학생 관찰 기록', slug: 'appendix/observation' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
