import { newE2EPage } from '@stencil/core/testing';

describe('wiz-tree', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wiz-tree></wiz-tree>');

    const element = await page.find('wiz-tree');
    expect(element).toHaveClass('hydrated');
  });
});
