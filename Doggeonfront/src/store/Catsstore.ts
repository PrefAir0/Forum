import { createStore, createEffect, createEvent } from "effector";
import { addCat, fetchCats } from "../service/catService";
import type { Cat } from "../types/cats"; //если что это мб не робит

export const addNewCat = createEvent<{
    name: string;
    age: number;
    breed: string;
}>();

export const loadCatsFx = createEffect(async () => {
    const cats = await fetchCats();
    return cats;
});

export const addCatFx = createEffect(
    async (cat: { name: string; age: number; breed: string }) => {
        const newCat = await addCat(cat.name, cat.age, cat.breed);
        return newCat;
    }
);

export const $cats = createStore<Cat[]>([])
    .on(loadCatsFx.doneData, (_, cats) => cats)
    .on(addCatFx.doneData, (state, newCat) => [...state, newCat]);

addNewCat.watch((cat) => {
    addCatFx(cat);
});

