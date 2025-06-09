import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/ui/HeroSection';
import CategoryShowcase from '../components/ui/CategoryShowcase';
import FeaturedProducts from '../components/ui/FeaturedProducts';
import PromoSection from '../components/ui/PromoSection';
import NewsletterSection from '../components/ui/NewsletterSection';

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <PromoSection />
      <CategoryShowcase />
      <FeaturedProducts />
      <NewsletterSection />
    </Layout>
  );
};

export default Home;