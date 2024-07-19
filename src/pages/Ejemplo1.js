import { EjemploProps1, EjemploProps2, EjemploProps3, EjemploProps4, EjemploProps5 } from "../compontens/Props";



const nombre2 = 'Laura';
const frutas = ['Manzana', 'Bananas', 'Palta', 'Naranjas'];

const equipos = ['Argentina', 'Colombia', 'Uruguay', 'Canada']

 const mostrarValor = valor =>{
    console.log(valor)
}

const Ejemplo1 = (props) => {
    return (
        <div>
            <h1>Ejemplos de Propiedades</h1>
            {/*propiedad simple y reutilizar*/}
            <EjemploProps1 nombre='Flavia' />
            <EjemploProps1 nombre={nombre2} />
            {/*listar elementos (array)*/}
            <EjemploProps2 elementos={frutas} />
            <EjemploProps2 elementos={equipos} />
            {/*multiples propiedades -  destructuring*/}
            <EjemploProps3 titulo="Hola soy el titulo" subtitulo='subtitulo bien grande!' cuerpo='Hola el contenido de esta noticia.' />
            {/*funcion*/}
            <EjemploProps4 cambiarvalor={mostrarValor} />
            
            {/*este no anda porque si o si necesita de cambiarvalor (es el manejador)*/}
            <EjemploProps4 />
            
            {/*como lo requiere si o si podemos tb pasarle una funcion vacia*/}
            <EjemploProps4 cambiarvalor={() => {}} />

            <EjemploProps5 eventoClick={mostrarValor} />
            
            {/* si no le coloque la props eventoclick no se exploto react a diferencia del ejemplo4*/}
            <EjemploProps5 />

        </div>
    )
}

export default Ejemplo1;