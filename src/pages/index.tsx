import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>ポートフォリオ</h1>
      <p>
        こんにちは。<strong>原田康太</strong>
        と申します。現在、東洋大学情報連携学部情報連携学科のデザインコースで<strong>UI, UX</strong>
        を学びながら、
        <strong>TypeScript</strong>
        を主に学んでいます。本格的にプログラミングをやり始めたのは2023年6月ごろからスタート。
        TS以外に<strong>Python,HTML,CSS,JavaScript</strong>を学びました。 下の画像のゲームはすべて
        <strong>TS</strong>と<strong>React</strong>で書いております。
      </p>

      <Splide
        options={{
          type: 'slide',
          perPage: 1,
          autoplay: false,
          interval: 1000,
          loop: true,
        }}
      >
        <SplideSlide>
          <section className={styles.gameSection}>
            <div className={styles.gameContent}>
              <h2>オセロゲーム</h2>
              <img src="/images/othello.png" alt="オセロゲームの画像" />
              <p>使用言語：TypeScript</p>
              <p>フレームワーク：React</p>
              <p>作成期間：1週間</p>
              <a href="https://s1f102103707.github.io/othello2/" target="_blank" rel="noreferrer">
                リンクはこちら
              </a>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className={styles.gameSection}>
            <div className={styles.gameContent}>
              <h2>マインスイーパー</h2>
              <img src="/images/minesweeper.png" alt="マインスイーパーの画像" />
              <p>使用言語：TypeScript</p>
              <p>フレームワーク：React</p>
              <p>作成期間：3週間</p>
              <a
                href="https://s1f102103707.github.io/minesweeper/"
                target="_blank"
                rel="noreferrer"
              >
                リンクはこちら
              </a>
            </div>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className={styles.gameSection}>
            <div className={styles.gameContent}>
              <h2>迷路</h2>
              <img src="/images/maze.png" alt="迷路の画像" />
              <p>使用言語：TypeScript</p>
              <p>フレームワーク：React</p>
              <p>作成期間：2週間</p>
              <a href="https://s1f102103707.github.io/maze2/" target="_blank" rel="noreferrer">
                リンクはこちら
              </a>
            </div>
          </section>
        </SplideSlide>
        {/* 他のゲームのセクションも同様に作成 */}
      </Splide>
    </div>
  );
};

export default Home;
