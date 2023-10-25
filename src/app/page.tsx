import Image from 'next/image'
import styles from './page.module.css'

import {Quadrado} from './components/quadrado'
import {Titulo} from './components/titulo'
import {Botao} from './components/botao'
import {Listaitens} from './components/listaitens'
import {Paragrafo} from './components/paragrafo'
import { Cabecalho } from './components/cabecalho'
import { Imag } from './components/imag'
import { Footer } from './components/footer'

export default function home() {
  return (
    <main>
      <Quadrado />
      <Titulo />
      <Botao />
      <Listaitens />
      <Paragrafo />
      <Cabecalho />
      <Imag/>
      <Footer />
    </main>
  );
}