import './pageNotFound.css';
import {Link, useHistory} from 'react-router-dom';

function PageNotFound() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="pageNotFound">
      <h2 className="pageNotFound__title">404</h2>
      <p className="pageNotFound__text">Страница не найдена</p>
      <Link className='pageNotFound__link' onClick={handleGoBack}>Назад</Link>
    </div>
  );
}

export default PageNotFound;
