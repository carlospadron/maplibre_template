"use client";

import React from 'react';
import Navigation from '@/components/Navigation';
import Map from '@/components/Map';

const Home: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Navigation />
      <div style={{ flex: 1 }}>
        <Map />
      </div>
    </div>
  );
};

export default Home;