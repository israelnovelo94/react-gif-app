import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../Componentes/AddCategory';

describe('Probando el <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })
    
    test('Probando el Snapshot', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('Probando cambiar el valor de la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('Simulando un submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('llamar el setCategories y limpiar el input', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: {value}});

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function));

        expect(input.prop('value')).toBe('');
    })
})