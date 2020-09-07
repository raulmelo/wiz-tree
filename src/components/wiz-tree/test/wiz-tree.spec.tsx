import { newSpecPage } from '@stencil/core/testing';
import { WizTree } from '../wiz-tree';

describe('wiz-tree', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WizTree],
      html: `<wiz-tree></wiz-tree>`,
    });
    expect(page.root).toEqualHtml(`
      <wiz-tree>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wiz-tree>
    `);
  });
});
