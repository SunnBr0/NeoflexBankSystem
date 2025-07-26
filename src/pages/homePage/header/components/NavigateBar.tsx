import { words } from '../../../../lang/lang';

export const NavigateBar = () => {
  return (
    <>
      <a href='/' className="nav-bar__header">{words.homePage.navigation.UK.logo}</a>
      <nav className="nav-bar__section">
        <ul className="nav-bar__list">
          {Object.entries(words.homePage.navigation.UK.siteSections).map(
            ([key, url],index) => (
              <li key={`${key}-${index}`} className="nav-bar__text">
                <a href={url}>{key}</a>
              </li>
            )
          )}
        </ul>
      </nav>
      <button className="nav-bar__button">
        {words.homePage.navigation.UK.button}
      </button>
    </>
  );
};
