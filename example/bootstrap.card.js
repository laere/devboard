import devboard from '../';
import React from 'react';

import { sourceLink } from './misc';
import ProgressBar from './ProgressBar';
import Button from './Button';
import Label from './Label';

var definecard = devboard.ns('3. Bootstrap Example');

definecard(`
This page is intended to give you an overview of what it might be like to use
Devboard to build an interactive style guide for your component library.
`);

sourceLink(definecard, __dirname, __filename);

definecard(
  'Labels',
  `
  A simple display of bootstrap labels.

  * default
  * primary
  * success
  * info
  * warning
  * danger
  `,
  (
    <div>
      <Label kind="default">default</Label>
      <Label kind="primary">primary</Label>
      <Label kind="success">success</Label>
      <Label kind="info">info</Label>
      <Label kind="warning">warning</Label>
      <Label kind="danger">danger</Label>
      <Label kind="link">link</Label>
    </div>
  )
);

definecard(
  'Buttons',
  `
  A simple display of bootstrap buttons.

  * default
  * primary
  * success
  * info
  * warning
  * danger
  * link
  `,
  <div style={{textAlign: 'center'}}>
    <Button kind="default">default</Button>
    <Button kind="primary">primary</Button>
    <Button kind="success">success</Button>
    <Button kind="info">info</Button>
    <Button kind="warning">warning</Button>
    <Button kind="danger">danger</Button>
    <Button kind="link">link</Button>
  </div>
);

definecard(
  'Progress Bars',
  `
  A variety of progress bars
  `,
  ({state}) => <div>
    <ProgressBar n={40} label />
    <ProgressBar n={60} type="success" />
    <ProgressBar n={35} type="danger" striped />
    <ProgressBar n={70} type="warning" striped animated />
    <ProgressBar n={state} type="info" label striped animated />
  </div>,
  {
    state: 0,
    onTick: ({setState}) => setState(s => (s + 1) % 100),
    tickInterval: 200
  }
);
