import {React, useEffect, useState} from "react";
import {SHORT_MOVIES_LENGTH} from '../../utils/Constants';
import Header from '../Header/header';
import Preloader from './Preloader/preloader';
import NothingFound from './NothingFound/nothingFound';
import SearchForm from "./SearchForm/searchForm";
import MoviesCardList from "./MoviesCardList/moviesCardList";
import Footer from '../Footer/footer';

function Movies({type, isLoading, cards, refreshCards, handleCardSave, handleCardRemove, isInFavourites}) {
  const [searchValue, setSearchValue] = useState('');
  const [isShortDurations, setIsShortDurations] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [searchCount, setSearchCount] = useState(0);

  useEffect(() => {
    setVisibleCards(filterCards(cards));
  }, [cards, searchCount]);

  function handleSearchCards() {
    refreshCards();
    setSearchCount((c) => c + 1);
  }

  function filterCards(card) {
    return card
      .filter((card) => {
        return (card.nameRU.toUpperCase().includes(searchValue.toUpperCase()) || card.nameEN.toUpperCase().includes(searchValue.toUpperCase())) && ((isShortDurations && card.duration <= SHORT_MOVIES_LENGTH) || !isShortDurations);
      });
  }

  return (
    <>
      <Header loggedIn={true}/>
      <main>
        <SearchForm key={`${type}-search-form`} type={`${type}-search-form`} searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    isShortDurations={isShortDurations} setIsShortDurations={setIsShortDurations}
                    onSearchCards={handleSearchCards}
                    isResetWhenReload={isInFavourites}/>
        {(() => {
          if (isLoading) {
            return (<Preloader/>)
          } else if (searchCount > 0 && visibleCards.length === 0) {
            return (<NothingFound/>)
          } else {
            return (<MoviesCardList key={`${type}-cards`} isInFavourites={isInFavourites} cards={visibleCards}
                                    handleCardSave={handleCardSave} handleCardRemove={handleCardRemove}/>)
          }
        })()}
      </main>
      <Footer/>
    </>);
}

export default Movies;
