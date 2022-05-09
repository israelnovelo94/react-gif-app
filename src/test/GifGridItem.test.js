import { shallow } from "enzyme"
import { GifGridItem } from "../Componentes/GifGridItem"

describe('Probando el GifGridItem', () => {
    
    const title = 'Titulo';
    const url   = 'www.google.com';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Prueba de snapshot del componente', () => {


        expect( wrapper ).toMatchSnapshot();
    });

    test('Verificando que llegue el titulo', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Verificando los atributos de la imagen', () => {
        const img = wrapper.find('img');
        // console.log(img.html());

        expect(img.prop('src')).toBe(url);
        expect(img.props().alt).toBe(title);
    });

    test('Verificar que tenga la clase animate__fadeInDown', () => {
        const div = wrapper.find('div');

        // console.log(div.hasClass('animate__fadeInDown'));

        expect(div.hasClass('animate__fadeInDown')).toBe( true )
    })
}) 