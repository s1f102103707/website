import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './index.module.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.container}>
      <h1>ゲーム紹介</h1>

      <Slider {...settings}>
        <div className={styles.gameSection}>
          <h2>オセロゲーム</h2>
          <img src="/public/images/othello.png" alt="オセロゲームの画像" />
          <p>オセロゲームは...（ここにゲームの説明を追加）</p>
          <a href="https://github.com/your_username/othello" target="_blank" rel="noreferrer">
            GitHubで見る
          </a>
        </div>
        <div className={styles.gameSection}>
          <h2>マインスイーパー</h2>
          <img src="/public/images/minesweeper.png" alt="マインスイーパーの画像" />
          <p>マインスイーパーは...（ここにゲームの説明を追加）</p>
          <a href="https://github.com/your_username/minesweeper" target="_blank" rel="noreferrer">
            GitHubで見る
          </a>
        </div>
        <div className={styles.gameSection}>
          <h2>迷路</h2>
          <img src="/public/images/maze.png" alt="迷路の画像" />
          <p>迷路は...（ここにゲームの説明を追加）</p>
          <a href="https://github.com/your_username/maze" target="_blank" rel="noreferrer">
            GitHubで見る
          </a>
        </div>
        {/* 他の画像も同様に追加 */}
      </Slider>
    </div>
  );
};

export default Home;

// import styles from './index.module.css';

// const Home = () => {
//   return (
//     <div className={styles.container}>
//       <h1>ゲーム紹介</h1>

//       <section className={styles.gameSection}>
//         <h2>オセロゲーム</h2>
//         <img src="path_to_othello_image.jpg" alt="オセロゲームの画像" />
//         <p>オセロゲームは...（ここにゲームの説明を追加）</p>
//         <a href="https://github.com/your_username/othello" target="_blank" rel="noreferrer">
//           GitHubで見る
//         </a>
//       </section>

//       <section className={styles.gameSection}>
//         <h2>マインスイーパー</h2>
//         <img src="path_to_minesweeper_image.jpg" alt="マインスイーパーの画像" />
//         <p>マインスイーパーは...（ここにゲームの説明を追加）</p>
//         <a href="https://github.com/your_username/minesweeper" target="_blank" rel="noreferrer">
//           GitHubで見る
//         </a>
//       </section>

//       <section className={styles.gameSection}>
//         <h2>迷路</h2>
//         <img src="path_to_maze_image.jpg" alt="迷路の画像" />
//         <p>迷路は...（ここにゲームの説明を追加）</p>
//         <a href="https://github.com/your_username/maze" target="_blank" rel="noreferrer">
//           GitHubで見る
//         </a>
//       </section>
//     </div>
//   );
// };

// export default Home;
