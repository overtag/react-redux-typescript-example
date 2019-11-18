import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { ScreenRegistration } from './ScreenRegistration';
import { ScreenConfirmation } from './ScreenConfirmation';
import { ScreenCompleted } from './ScreenCompleted';

interface Props {}

export class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <Route exact path='/' render={() => <ScreenRegistration />} />
        <Route exact path='/confirmation' render={() => <ScreenConfirmation />} />
        <Route exact path='/congratulation' render={() => <ScreenCompleted />} />
      </Router>
    );
  }
}
