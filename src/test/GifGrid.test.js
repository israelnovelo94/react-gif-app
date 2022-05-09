import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../Componentes/GifGrid';
import { useFetchGif } from '../hooks/useFetchGif';
jest.mock('../hooks/useFetchGif');

describe('Probando el GifGrid', () => {


    test('snapshot del GifGrid', () => {
        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        });
        const category = 'One Punch'
        const wrapper = shallow(<GifGrid category={category} />); 
        expect( wrapper ).toMatchSnapshot();
    });

    test('simulando el uso del useFetchGif', () => {
        const gifs = [{
            id: 1,
            url: "www.google.com",
            title: "TEST"
        }]
        useFetchGif.mockReturnValue({
            data: gifs,
            loading: false
        });
        const category = 'One Punch'
        const wrapper = shallow(<GifGrid category={category} />); 
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);


    });

});