import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add an item to the itemList', () => {
    const itemToAdd = { id: 3, name: 'Product D', price: 25 };
    const initialItemCount = component.itemList().length;

    component.addItem(itemToAdd);

    expect(component.itemList().length).toBe(initialItemCount + 1);
    expect(component.itemList()[initialItemCount]).toEqual(itemToAdd);
  });

  it('should calculate the total price correctly', () => {
    const totalPrice = component.totalPrice();
    const expectedTotalPrice = component.items.reduce((acc, curr) => acc + curr.price, 0);

    expect(totalPrice).toBe(expectedTotalPrice);
  });

});
