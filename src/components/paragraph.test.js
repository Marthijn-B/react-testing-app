// Testing file for the component paragraph

import React from 'react';
import { render } from '@testing-library/react';

import Paragraph from './paragraph';

it('renders I can test text', () => {
  const { getByText } = render(<Paragraph />);
  expect(getByText('This is a paragraph with text so I can test')).toBeInTheDocument();
});
// turns out that you need the whole text in the single quotes to pass
// Not search by 'I can test' - Will return a failed test
