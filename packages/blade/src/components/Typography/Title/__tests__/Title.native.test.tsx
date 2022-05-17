import React from 'react';
import renderWithTheme from '../../../../_helpers/testing/renderWithTheme.native';
import Title from '../';

beforeAll(() => jest.spyOn(console, 'error').mockImplementation());
afterAll(() => jest.restoreAllMocks());

describe('<Title />', () => {
  it('should render Title with default properties', () => {
    const displayText = 'Displaying Landing Screen Title';
    const { toJSON, getByText } = renderWithTheme(<Title>{displayText}</Title>);
    expect(getByText('Displaying Landing Screen Title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render Title with variant "small"', () => {
    const displayText = 'Displaying Landing Screen Title';
    const { toJSON, getByText } = renderWithTheme(
      <Title type="normal" variant="small">
        {displayText}
      </Title>,
    );
    expect(getByText('Displaying Landing Screen Title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render Title with variant "medium"', () => {
    const displayText = 'Displaying Landing Screen Title';
    const { toJSON, getByText } = renderWithTheme(
      <Title type="muted" variant="medium">
        {displayText}
      </Title>,
    );
    expect(getByText('Displaying Landing Screen Title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should render Title with variant "large"', () => {
    const displayText = 'Displaying Landing Screen Title';
    const { toJSON, getByText } = renderWithTheme(
      <Title type="subdued" variant="large">
        {displayText}
      </Title>,
    );
    expect(getByText('Displaying Landing Screen Title')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
