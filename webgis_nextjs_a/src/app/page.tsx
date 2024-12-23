// filepath: /home/carlos/Documents/maplibre_template/webgis_nextjs_a/src/app/page.tsx
"use client";

import React from 'react';
import { Layout } from 'antd';
import Navigation from '@/components/Navigation';
import Map from '@/components/Map';

const { Header, Sider, Content } = Layout;

const Home: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header style={{ padding: '0 16px', fontSize: '24px', fontWeight: 'bold', color: 'black', backgroundColor: 'white' }}>
        Webgis
      </Header>
      <Layout>
        <Sider width={150}>
          <Navigation />
        </Sider>
        <Content>
          <Map />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;