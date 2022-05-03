import { shallow } from "enzyme"
import { GifGridItem } from "../Componentes/GifGridItem"

describe('Probando el GifGridItem', () => {

    test('Prueba de snapshot del componente', () => {
        const wrapper = shallow(<GifGridItem />);

        expect( wrapper ).toMatchSnapshot();
    })
})