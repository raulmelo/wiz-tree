import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wiz-tree',
  styleUrl: 'wiz-tree.css',
  shadow: true,
})
export class WizTree {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
