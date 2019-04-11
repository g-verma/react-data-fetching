import React, { Fragment } from 'react';

import FetchApproach from './FetchApproach';
import AxiosApproach from './AxiosApproach';
import AsyncAwaitApproach from './AsyncAwaitApproach';
import HigherOrderComponentApproach from './HigherOrderComponentApproach';
import RenderPropApproach from './RenderPropApproach';
import List from './ownApi';

const App = () =>
  <Fragment>
    <List />
  </Fragment>
  // <RenderPropApproach />
  // <FetchApproach />
  // <AxiosApproach />
  // <AsyncAwaitApproach />
  // <HigherOrderComponentApproach />
  // <RenderPropComponentApproach />

export default App;
