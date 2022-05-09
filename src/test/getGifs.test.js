import { getGift } from "../helpers/getGifs"

describe('Probando el getGifs', () => {

    test('probando el getGifs fetch', async () => {
        const data = await getGift('One Punch');

        expect(data.length).toBe(10);
    });

    test('probando el getGifs fetch', async () => {
        const data = await getGift('');

        expect(data.length).toBe(0);
    })
})