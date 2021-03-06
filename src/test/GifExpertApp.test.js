import { shallow } from 'enzyme';
import GifExpertApp from "../Componentes/GifExpertApp";

describe('Prueba del GifExpertApp', () => {

    test('snapshot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('snapshot', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length);
    });
});