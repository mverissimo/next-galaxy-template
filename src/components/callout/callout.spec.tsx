import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Callout } from '.';

describe('@components: Callout', () => {
  it('should render a custom title', () => {
    let title = 'Custom title';

    render(
      <Callout title={title} data-testid="Callout">
        Callout
      </Callout>
    );

    expect(screen.getByTestId('Callout')).toHaveTextContent(title);
  });
});
