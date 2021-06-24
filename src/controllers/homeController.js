const HOME_INDEX_VIEW = 'home';
const AUTH_HEADER = 'authorization';

export default class HomeController {
    constructor() {
    }

    async index(req, res) {
        let bearerToken = req.headers[AUTH_HEADER];

        res.render(HOME_INDEX_VIEW, {
            token: bearerToken
        });
    }
}