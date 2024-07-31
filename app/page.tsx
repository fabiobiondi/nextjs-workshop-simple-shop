import ContactForm from '@/components/widgets/contact-form';
import Hero from '@/components/widgets/hero';
import LatestProducts from '@/components/widgets/latest-products';
import Stats from '@/components/widgets/stats';
import Divider from '@/components/utilities/divider';
import Loader from '@/components/utilities/loader';
import { Suspense } from 'react';

// Enable Static rendering
// export const dynamic = 'force-static'

export default function Home() {
  return (
    <main>
      <Hero />
      <Divider/>
      <Stats />
      <Divider/>
      <Suspense fallback={<Loader />}>
        <LatestProducts />
      </Suspense>
      <Divider/>
      <ContactForm />
    </main>
  );
}
