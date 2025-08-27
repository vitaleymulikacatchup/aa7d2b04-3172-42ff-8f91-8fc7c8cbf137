"use client";
import Image from 'next/image';
import { Carousel } from '@/components/carousels/Carousel';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import GalleryBento from '@/components/bento/galleryBento/GalleryBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { animatedItems } from './mockData';

const Home = () => {
  return (
    <div>
      <section id='hero' className='h-screen flex flex-col justify-center items-center'>
        <SimpleHero
          title='Welcome to QuantumFrame Photography'
          description='Capturing moments with a futuristic lens'
          primaryButtonText='View Portfolio'
          secondaryButtonText='Contact Us'
        />
      </section>
      <section id='about' className='py-16 bg-opacity-25 backdrop-blur-md text-center'>
        <MinimalAbout description='A passionate photographer with a vision for the extraordinary.' />
      </section>
      <section id='portfolio' className='py-16'>
        <GalleryBento
          items={animatedItems}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
        />
      </section>
      <section id='services' className='py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {/* Service cards are added here */}
        </div>
      </section>
      <section id='testimonials' className='py-16'>
        <div className='text-center'>
          {/* Testimonials will be displayed here */}
        </div>
      </section>
      <section id='contact' className='py-16' style={{ background: '#0A0D1A' }}>
        {/* Contact form goes here */}
      </section>
      <SimpleFooter
        columns={[
          { title: 'Get in Touch', items: [{ label: 'Privacy Policy', onClick: () => {} }] }
        ]}
        copyrightText='© 2023 QuantumFrame Photography'
        onPrivacyClick={() => {}}
      />
    </div>
  );
};

export default Home;