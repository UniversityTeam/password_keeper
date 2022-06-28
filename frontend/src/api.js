import { Metacom } from "metacom";

export const MetaApi = (function () {
    let api;
    async function createInstance() {
        const metacom = Metacom.create("ws://localhost:8001");
        await metacom.load('auth');
        return metacom.api;
    }

    return {
        async getInstance() {
            if (!api) {
                api = await createInstance();
            }
            return api;
        },
    };
})();