import 'es6-promise/auto';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const MOUNT_NODE = document.getElementById('root');
render(<App />, MOUNT_NODE);
