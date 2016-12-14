import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Iframe from '@ox2/iframe/Iframe';

const styles = {
  wrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  },
};

storiesOf('📘', module)
  .add('Docs', () => (
    <div style={styles.wrapper}>
      <Iframe url={'docs/index.html'} />
    </div>
  ));
