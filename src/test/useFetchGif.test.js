const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGif } = require("../hooks/useFetchGif");

describe('Probando el custom Hook useFetchGif', () => {

    test('Probando el useFetchGif', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGif('One Punch'));

        //  console.log(result);
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGif('One Punch'));
        await waitForNextUpdate();
        //  console.log(result);
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});