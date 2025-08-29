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

export function calculateDeliveryCost(totalPrice: number) {
  if (totalPrice <= 0) return 0;

  if (totalPrice > 0 && totalPrice <= 35) return 7.5;

  if (totalPrice > 35 && totalPrice <= 70) return 5;

  if (totalPrice > 70) return 3.5;

  return 5;
}

export const API_URL = import.meta.env.VITE_API_BASE_URL;
