import styles from './App.module.scss'
import { MemoCards } from './components/MemoCards/MemoCards'

function App() {
  return (
    <div className={styles.app}>
      <MemoCards/>
    </div>
  );
}

export default App;
