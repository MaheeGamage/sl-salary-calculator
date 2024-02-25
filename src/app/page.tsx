
import styles from './page.module.css'
import SalaryCalc from '@/components/SalaryCalc'

export default function Home() {
  return (
    <main className={styles.main}>
      <SalaryCalc />
    </main>
  )
}
