import SearchForm from "./SearchForm/searchForm";
import MoviesCardList from "./MoviesCardList/moviesCardList";


function Movies() {
  return (
    <main>
      <SearchForm/>
      <MoviesCardList isInFavourites={false}/>
    </main>
  );
}

export default Movies;
