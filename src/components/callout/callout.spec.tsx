import { render, screen } from '@testing-library/react';

import { Callout } from '.';

describe('@components: Callout', () => {
  it('should render a custom title', () => {
    let title = 'Custom title';

    render(
      <Callout title={title}>
        <span>Callout</span>
      </Callout>
    );

    expect(screen.getByText(title)).toHaveTextContent(title);
  });
});
