
import { Grid } from '@mui/material'
import styles from './page.module.css'
import SalaryCalc from '@/components/SalaryCalc'

export default function Home() {
  return (
    <main className={styles.main}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={10} sm={8} md={6}>
          <SalaryCalc />
        </Grid>
      </Grid>
    </main>
  )
}
