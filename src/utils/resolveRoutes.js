const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validroute = route === '/' ? route : '/:id';
        return validroute;
    }
    return `${route}`;
};

export default resolveRoutes;