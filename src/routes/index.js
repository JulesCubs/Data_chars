import Header  from '../templates/Header';
import Home from '../pages/home';
import Character from '../pages/character';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

//rutas
const routes = {
    '/': Home, // establecemos la ruta:hace render de Home
    '/:id': Character, // ruta con valor dinamico id: hace render en los personajes
    '/contact': 'Contact', // establecemos la ruta: y este hace render de Contact
}

//manejador(obtener valores y como utilizarlos)
const router = async () => {
    const header = null || document.getElementById('header'); // Elemento header hacia donde voy hacer el render
    const content = null || document.getElementById('content'); // Elemento content hacia donde voy hacer el render

    header.innerHTML = await Header(); 

    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : error404;
    content.innerHTML = await render();
};

export default router;