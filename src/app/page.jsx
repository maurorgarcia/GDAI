import { Hero } from '@/components/site/Hero.jsx';
import { Problems, Services, Process, Work, Faq, CtaBand } from '@/components/site/HomeSections.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Work />
      <Faq />
      <CtaBand />
    </>
  );
}
