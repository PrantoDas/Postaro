import Renderable from './Renderable.js';

class RenderingService {
    static render(object) {
        if (!(object instanceof Renderable)) {
            throw new Error("Object does not have a render method.");
        }
        return object.render();
    }
}

export default RenderingService;
