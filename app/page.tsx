import Card from '../components/Card';
import Trending from '../components/Trending';
import './page.scss';
import Signup from './signup/page';

export const metadata = {
  title: "Home"
}

const categoryArray = [
  {
    title: 'Popular',
    apiUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  },
];

const getCardsByCategory = async (api: any) => {
  const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTA1Y2IzMGFjZGE2Y2YyMjFlMzRiMmUzYzczOWVjYSIsInN1YiI6IjYyZDcxMTcyZTE5NGIwMDA0ZTY5MmEyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PaS1BTh9EQobNMyjdJE837rRt3trS6K5ZGe3OlgvtDI'
    }
  };

  const res = await fetch(url, options)

  const data = await res.json();

  const cardComponents = data.results.map((movie: any, i: any) => <Card key={i} {...movie} />);

  return cardComponents;
};

export default async function Home() {
  const trendingMoviesRes = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`);
  const trendingMoviesData = await trendingMoviesRes.json();
  return (
    <>
      <Signup />
      <div>
        <Trending movies={trendingMoviesData.results} />
        {
          await Promise.all(categoryArray.map(async (category) => (
            <div key={category.title} className="categoryContainer">
              <h2 className="categoryTitle">{category.title}</h2>
              <div className="cardContainer">
                {await getCardsByCategory(category.apiUrl)}
              </div>
            </div>
          )))
        }
      </div>
    </>
  );
}
