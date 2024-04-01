import { createRoutesView, Link } from 'atomic-router-react';
import { routing } from '@context/router';

import Login from './Login';
import Registration from './Registration';
import Dashboard from './Dashboard';
import Projects from './Projects';
import ProcessCreate from './ProcessCreate';
import Processes from './Processes';
import Dashboards from './Dashboards';
import Forbidden from './Forbidden';

const RoutesView = createRoutesView({
  routes: [
    { route: routing.login, view: Login },
    { route: routing.registration, view: Registration },
    { route: routing.dashboard, view: Dashboard },
    { route: routing.processCreate, view: ProcessCreate },
    { route: routing.processesList, view: Processes },
    { route: routing.projects, view: Projects },
    { route: routing.dashboards, view: Dashboards },
    { route: routing.forbidden, view: Forbidden }
  ],

  otherwise() {
    return (
      <div>
        <h2>Page not found!</h2>

        <p>
          <Link to={routing.login}>Login</Link>
        </p>
        <p>
          <Link to={routing.registration}>Registration</Link>
        </p>
        <p>
          <Link to={routing.dashboard}>Dashboard</Link>
        </p>
        <p>
          <Link to={routing.processesList}>Список процессов</Link>
        </p>
        <p>
          <Link to={routing.processCreate}>Создание процесса</Link>
        </p>
        <p>
          <Link to={routing.projects}>Проекты</Link>
        </p>
      </div>
    );
  }
});

export default RoutesView;