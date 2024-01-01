import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>ゲーム紹介</h1>

      <section className={styles.gameSection}>
        <h2>オセロゲーム</h2>
        <img src="path_to_othello_image.jpg" alt="オセロゲームの画像" />
        <p>オセロゲームは...（ここにゲームの説明を追加）</p>
        <a href="https://github.com/your_username/othello" target="_blank">
          GitHubで見る
        </a>
      </section>

      <section className={styles.gameSection}>
        <h2>マインスイーパー</h2>
        <img src="path_to_minesweeper_image.jpg" alt="マインスイーパーの画像" />
        <p>マインスイーパーは...（ここにゲームの説明を追加）</p>
        <a href="https://github.com/your_username/minesweeper" target="_blank">
          GitHubで見る
        </a>
      </section>

      <section className={styles.gameSection}>
        <h2>迷路</h2>
        <img src="path_to_maze_image.jpg" alt="迷路の画像" />
        <p>迷路は...（ここにゲームの説明を追加）</p>
        <a href="https://github.com/your_username/maze" target="_blank">
          GitHubで見る
        </a>
      </section>
    </div>
  );
};

export default Home;
