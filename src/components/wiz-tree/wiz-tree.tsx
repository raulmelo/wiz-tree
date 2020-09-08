import { Component, h, Prop, Element, Host, Event, Watch, EventEmitter } from '@stencil/core';
import { EventDataChild, itemTreeModel } from './wiz-tree-models'
@Component({
  tag: 'wiz-tree',
  styleUrl: 'wiz-tree.css',
  shadow: true,
})
export class WizTree {
  @Element() el: HTMLElement;

  @Prop() fetchdata: boolean = false;
  @Prop() list: itemTreeModel[];
  @Prop() setchild: EventDataChild;

  // eventos
  @Event() handleSelected: EventEmitter<{data: any, label: string | number}[]>;
  @Event() requestData: EventEmitter<EventDataChild>;


  @Watch('setchild')
  addChild(newValue: EventDataChild) {
    try {
      this.toggleLoading(newValue.id, true);
      this.changeValueList('child', newValue.child, newValue.id);
    }
    catch (error) {
      console.error(error, 'Não foi possível atualizar.');
    }
  }

  ///////////////////////////////////////////////
  // Add or Remove Loading
  // @id identificador passado para o componente
  // @showChild preserva filhos visiveis
  ///////////////////////////////////////////////
  toggleLoading(id: string, showChild = false) {
    const webItemSelected = this.el.shadowRoot.querySelector('li[data-index="' + id + '"]');
    const hasLoad = webItemSelected.classList.contains('wizTree__loading');
    if (hasLoad) {
      webItemSelected.classList.remove('wizTree__loading');
      if (showChild) {
        this.changeValueList('open', true, id);
      }
      return;
    }
    webItemSelected.classList.add('wizTree__loading');
  }


  openChild(valueSelected: itemTreeModel, id: string) {
    if (this.fetchdata && !valueSelected.child.length && !valueSelected.disabledChild) {
      const webItemSelected = this.el.shadowRoot.querySelector('li[data-index="' + id + '"]');
      webItemSelected.classList.add('wizTree__loading');
      this.requestData.emit({
        id,
        data: valueSelected,
        child: []
      });
      return;
    }
    // Has child end child has length
    if (valueSelected.child?.length) {
      this.changeValueList('open', !valueSelected.open, id);
    }
  }

  changeValueList(param: string, value: any, id: string) {
    this.list = this.list.map((item, index) => {
      return this.setValueItem(item, param, value, id, index.toString());
    });
  }

  setValueItem(item: itemTreeModel, param: string, value: any, idSelected: string, currentId: string) {
    if (idSelected === currentId) {
      item[param] = value;
      return item
    }
    if (item.child?.length) {
      item.child.map((itemChild: itemTreeModel, index: number) => {
        return this.setValueItem(itemChild, param, value, idSelected, `${currentId}-${index}`);
      });
    }
    return item;
  }

  selectedValue(item: itemTreeModel, idSelected: string) {
    const value = !item.selected;
    this.changeValueList('selected', value, idSelected);
    if (item.selected && item.open) {
      const webComponent = this.el.shadowRoot.querySelector('li[data-index="' + idSelected + '"]');
      const qtdChildrens = webComponent.querySelector('ul').childElementCount;
      for (let index = 0; index < qtdChildrens; index++) {
        this.changeValueList('selected', value, idSelected + '-' + index);
      }
    }
    this.getSelected();
  }

  getSelected() {
    let newList = [];
    // sub function loop all list, sublist end child
    const getChild = (itensChild: itemTreeModel[]) => {
      itensChild.forEach((itemChild: itemTreeModel) => {
        if (itemChild.selected) {
          newList.push({
            data: itemChild.data ? itemChild.data : {},
            label: itemChild.label
          });
        }
        if (itemChild.child?.length) {
          getChild(itemChild.child);
        }
      });
    };
    this.list.forEach((element: itemTreeModel) => {
      if (element.selected) {
        newList.push({
          data: element.data ? element.data : {},
          label: element.label
        });
      }
      if (element.child?.length) {
        getChild(element.child);
      }
    });
    this.handleSelected.emit(newList);
  }

  // Percorrer por elementos filhos
  wizTreeChild(treeItem: itemTreeModel, id: string) {
    return (
      <li role="listitem" data-index={id}>

        <span
          title={treeItem.open ? 'clique para fechar' : 'Clique para abrir'}
          aria-label="Seta para navegar abaixo"
          onClick={ () => this.openChild(treeItem, id)}
          // TODO: FAZER TESTE SEM DISABLEDCHILD
          class={`wizTree__arrow ${treeItem.open ? 'wizTree__arrow--active' : ''} ${treeItem?.disabledChild ? 'wizTree__arrow--disabledChild' : ''}`}
        ><span></span></span>
        <label
          onClick={ () => this.selectedValue(treeItem, id)}
          title={`Selecionar ${treeItem.label}`}
          aria-label={`Campo para selecionar ${treeItem.label}`}
        >
          <span class={`wizTree__check ${treeItem.selected ? ' wizTree__check--active' : ''}`}>
            <span class='wizTree__check--icon' aria-label="caixa para selecionar"></span>
          </span>
          {treeItem.label}
        </label>
        {!treeItem.disabledChild ?
          <ul
            role="list"
            aria-hidden={`${treeItem.open ? 'false' : 'true'}`}
            class={treeItem.open ? 'open' : ''}
          >
            {treeItem.child.length ?
              treeItem.child.map((item: itemTreeModel, idChild: number) => this.wizTreeChild(item, `${id}-${idChild.toString()}`))
            : ''}
          </ul>
          : ''
        }
      </li>
    )
  }
  ;


  render() {
    return (
      <Host>
        <div class="wizTree">
          {this.list.length ?
            <div class="wizTree__content">
              {this.list.map((item: itemTreeModel, id: number) => <ul role="list" >{this.wizTreeChild(item, id.toString())}</ul>)}
            </div>
          : ''}
        </div>
      </Host>
    );
  }

}
