import { System } from "../../node_modules/ecsy/build/ecsy.module.js";
import { Ball, Dissolve, Object3D } from "../Components/components.mjs";

export class DissolveSystem extends System {
  execute(delta) {
    var entities = this.queries.entities.results;

    //Queries
    for (let i = 0; i < entities.length; i++) {
      var entity = entities[i];
      var dissolve = entity.getMutableComponent(Dissolve);
      var object = entity.getComponent(Object3D).object;
      object.material.opacity = dissolve.value;
      object.material.transparent = true;

      dissolve.value -= delta * dissolve.speed;
      if (dissolve.value <= 0) {
        entity.remove();
      }
    }
  }
}

DissolveSystem.queries = {
  entities: {
    components: [Ball, Dissolve, Object3D],
    listen: {
      added: true
    }
  }
};
