import './profile.css';

function Profile() {

  //const []
  return (
    <>
      <section className="profile">
        <h1 className="profile__title">Привет, Наталья!</h1>
        <form className="profile__person" novalidate>
          <label className="profile__input-area">
            <span className="profile__text">Имя</span>
            <input type="text" name="personName" className="profile__input" placeholder='Наталья' required />
          </label>
          <label className="profile__input-area">
            <span className="profile__text">E-mail</span>
            <input type="text" name="personEmail" className="profile__input" placeholder="natalek@ya.ru" required />
          </label>
          <button type="submit" className="profile__button-edit">Редактировать</button>
          <button type="button" className="profile__button-exit">Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
};

export default Profile;

