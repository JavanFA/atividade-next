import Image from 'next/image'
import styles from './page.module.css'

import {Quadrado} from './components/quadrado'

export default function home() {
  return (
    <main>
      <Quadrado />
    </main>
  );
}