import React from 'react';
import Cursos from '../components/Cursos';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Home() {
  return (
    <>
      <Hero/>
      <Info/>
      <Cursos/>
      <Form/>
    </>
  );
}
