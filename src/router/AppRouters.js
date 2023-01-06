import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useGetCategories } from 'store/selectors/common';

// eslint-disable-next-line import/no-cycle
import AboutPage from '../pages/AboutUs';

export const history = createBrowserHistory();

function AppRouter(props) {
  const categories = useGetCategories();

  if (categories.length <= 0) {
    return <p>Loading...</p>;
  }

  const { classes } = props;
  const navClass = `${classes.nav_categories} nav-link`;

  return (
    <Router history={history}>
      <Nav defaultActiveKey="/home" as="ul" data-testid="category-element">
        <Nav.Item>
          <NavLink to="/" exact className={navClass}>
            Home
          </NavLink>
        </Nav.Item>
        {categories &&
          categories.map((category) => (
            <Nav.Item key={category._id} as="li">
              <Nav.Link className={classes.nav_categories} href="/">
                {category.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        <NavLink to="/about" exact className={navClass}>
          About
        </NavLink>
      </Nav>
      <Switch>
        <Route path="/" />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
