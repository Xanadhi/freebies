import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';

import '/imports/startup/client';

import App from '../imports/ui/layouts/App.jsx';

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('render-target'));
})
