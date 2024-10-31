import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://images.tcdn.com.br/img/img_prod/747391/miniatura_mclaren_ford_mp4_8_ayrton_senna_winner_european_gp_1993_1_18_minichamps_2775_1_d9fa140bcc83ef70904182592c3d86f8.jpeg">
        Miniatura Mclaren Ayrton Senna.
      </Post>
    </div>
  );
}

export default App;
