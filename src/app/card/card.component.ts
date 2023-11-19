import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from "./item";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private idCounter: number = 3;

  items: Item[] = [
    { id: 0, name: 'Product A', price: 10 },
    { id: 1, name: 'Product B', price: 15 },
    { id: 2, name: 'Product C', price: 20 },
  ];

  // Define a signal for the list of items
  itemList: WritableSignal<Item[]> = signal(this.items);

  // Define a computed value for the total price
  totalPrice:  Signal<number> = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });

  addItem(item: Item): void {
    let itemAdded: Item = {
      id: this.idCounter++,
      name: item.name,
      price: item.price
    }

    this.itemList.set(this.itemList().concat([{...itemAdded}]));
    console.log('les items',  this.itemList());
  }
}
