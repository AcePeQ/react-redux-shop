import { IMenuItem } from "../features/Menu/menuSlice";

export function currencyFormater(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function sliceArrayIntoRows(array: IMenuItem[], itemCount: number) {
  const newArray = [];

  for (let i = 0; i < array.length; i += itemCount) {
    newArray.push(array.slice(i, i + itemCount));
  }

  return newArray;
}
