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
              <img
                width="304"
                alt="スクリーンショット 2024-01-09 131309"
                src="https://github.com/s1f102103707/website/assets/85672513/d4881554-8698-46b8-9d7a-436b07bb4a8e"
              />
              <p>環境：TypeScript,React</p>
              <p>作成期間：1週間</p>
              <p>作成趣旨：プログラミングに慣れるため。</p>
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
              <img
                width="350"
                alt="スクリーンショット 2024-01-09 131220"
                src="https://github.com/s1f102103707/website/assets/85672513/6858944c-d71b-40ae-9c01-1e10890fc8a1"
              />
              <p>環境：TypeScript,React</p>
              <p>作成期間：3週間</p>
              <p>作成趣旨：マインスイーパーがどんなシステムで動いているのか気になった。</p>
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
              <img
                width="407"
                alt="スクリーンショット 2024-01-09 131120"
                src="https://github.com/s1f102103707/website/assets/85672513/1b0966b8-4ca1-4995-b68f-aac2ea641d7d"
              />
              <p>環境：TypeScript,React</p>
              <p>作成期間：2週間</p>
              <p>作成趣旨：迷路の自動探索は第一次AIブームのスタートで作ってみてみたかった。</p>
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
