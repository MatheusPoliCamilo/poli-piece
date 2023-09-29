
if (typeof gdjs.evtsExt__BoidsMovement__DefineJavaScript !== "undefined") {
  gdjs.evtsExt__BoidsMovement__DefineJavaScript.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__BoidsMovement__DefineJavaScript = {};


gdjs.evtsExt__BoidsMovement__DefineJavaScript.userFunc0xa9f8e0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.__boidsExtension = gdjs.__boidsExtension || {};

/**
 * A vector
 * @param {float} x - coordinate of the vectors starting position
 * @param {float} y - coordinate of the vectors starting position
 * @constructor
 */
gdjs.__boidsExtension.Vector =  /** @class */ (function () {
  
  /**
   * Create a vector.
   * @param {number} x
   * @param {number} y
   */
  function Vector(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {Vector} this object
   */
  Vector.prototype.set = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  /**
   * Adds a velocity to this vector
   * @param {Vector} referenceVector gets the velocity to be added
   * @returns {Vector} this object
   */
  Vector.prototype.add = function (referenceVector) {
    this.x += referenceVector.x;
    this.y += referenceVector.y;

    return this;
  }

  /**
   * Normalize the vector
   * @returns {Vector}
   */
  Vector.prototype.normalize = function () {
    var len = this.magnitude();
    if (len !== 0) this.multiply(1 / len);
    return this;
  }

  /**
   * Multiply vectors verticies
   * @param {float} amount
   * @returns {Vector}
   */
  Vector.prototype.multiply = function (amount) {
    this.x *= amount;
    this.y *= amount;
    return this;
  }

  /**
   * Divide vectors verticies
   * @param {float} amount
   * @returns {Vector}
   */
  Vector.prototype.divide = function (amount) {
    this.x /= amount;
    this.y /= amount;

    return this;
  }

  /**
   * Subtracts vectors verticies from a reference vector
   * @param {Vector} referenceVector
   * @returns {Vector}
   */
  Vector.prototype.subtract = function (referenceVector) {
    this.x -= referenceVector.x;
    this.y -= referenceVector.y;

    return this;
  }

  /**
   * Limits Vectors speed
   * @returns {Vector}
   */
  Vector.prototype.limit = function limit(max) {
    var mSq = this.magnitudeSquare();
    if (mSq > max * max) {
      this.divide(Math.sqrt(mSq)).multiply(max);
    }
    return this;
  }

  /**
   * Calculate the vectors direction
   * @returns {float}
   */
  Vector.prototype.heading = function () {
    let h = Math.atan2(this.y, this.x);
    return h;
  }

  /**
   * Calculate the vectors magnitude squared
   * @returns {float}
   */
  Vector.prototype.magnitudeSquare = function () {
    var x = this.x;
    var y = this.y;
    return x * x + y * y;
  };

  /**
   * Calculate the vectors magnitude
   * @returns {float}
   */
  Vector.prototype.magnitude = function () {
    return Math.sqrt(this.magnitudeSquare());
  }
  
  return Vector;
}());

/**
 * A boid agent
 * Methods for Separation, Cohesion, Alignment added
 * Inspired from The Nature of Code - Daniel Shiffman
 * http://natureofcode.com
 * 
 * Original source code:
 * https://github.com/nature-of-code/noc-examples-processing/blob/master/chp06_agents/NOC_6_09_Flocking/Boid.pde
 */
gdjs.__boidsExtension.Boid =  /** @class */ (function () {

  /**
   * Create a boid agent.
   * @parameter {gdjs.RuntimeBehavior} behavior
   */
  function Boid(behavior) {
    /** @type {gdjs.RuntimeBehavior} */
    this.behavior = behavior;
    this.acceleration = new gdjs.__boidsExtension.Vector(0, 0);
    this.velocity = new gdjs.__boidsExtension.Vector(gdjs.randomFloatInRange(-1, 1), gdjs.randomFloatInRange(-1, 1));
    this.separationDirection = new gdjs.__boidsExtension.Vector(0, 0);
    this.alignmentDirection = new gdjs.__boidsExtension.Vector(0, 0);
    this.cohesionDirection = new gdjs.__boidsExtension.Vector(0, 0);
    this.customIntentsDirectionSum = new gdjs.__boidsExtension.Vector(0, 0);
    this.separateWorkingVector = new gdjs.__boidsExtension.Vector(0, 0);
  }

  /**
   * Add a custom intent.
   * @param {Boid} boid
   * @param {number} directionX
   * @param {number} directionY
   * @param {number} weight
   */
  Boid.prototype.addIntent = function (directionX, directionY, weight) {

    if (directionX === 0 && directionY === 0) {
      return;
    }

    const length = Math.hypot(directionX, directionY);
    const unitX = directionX / length;
    const unitY = directionY / length;

    this.customIntentsDirectionSum.x += unitX * weight;
    this.customIntentsDirectionSum.y += unitY * weight;
  }

  /**
   * Vector between 2 boids.
   * @param {Boid} boid
   * @param {Vector} vector the vector to return the result
   * @returns {Vector} vector
   */
  Boid.prototype.getVectorTo = function (boid, vector) {
    const object = this.behavior.owner;
    const otherObject = boid.behavior.owner;
    let x = otherObject.x - object.x;
    let y = otherObject.y - object.y;
    vector.set(x, y);
    return vector;
  }

  /**
   * Applys the three rules of boids
   */
  Boid.prototype.flock = function () {
    const separationDirection = this.separate();
    const alignmentDirection = this.align();
    const cohesionDirection = this.cohesion();

    separationDirection.multiply(this.behavior.SeparationWeight());
    alignmentDirection.multiply(this.behavior.AlignmentWeight());
    cohesionDirection.multiply(this.behavior.CohesionWeight());

    const direction = separationDirection.add(alignmentDirection).add(cohesionDirection).add(this.customIntentsDirectionSum);
    this.acceleration.add(this.steer(direction));

    this.customIntentsDirectionSum.set(0, 0);
  }

  /**
   * Apply the acceleration from the steer force.
   */
  Boid.prototype.move = function () {
    const object = this.behavior.owner;
    const timeDelta = object.getElapsedTime(object.getInstanceContainer()) / 1000;
    this.acceleration.multiply(timeDelta);

    const previousVelocityX = this.velocity.x;
    const previousVelocityY = this.velocity.y;

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.behavior.MaxSpeed());
    this.acceleration.set(0, 0);

    if (this.behavior.ShouldRotate()) {
      let theta = this.velocity.heading() * 180 / Math.PI;
      object.setAngle(theta);
    }
    // Verlet integration
    object.setX(object.x + (previousVelocityX + this.velocity.x) / 2 * timeDelta);
    object.setY(object.y + (previousVelocityY + this.velocity.y) / 2 * timeDelta);
  }

  /**
   * Calculates and applies steering force towards a direction
   * @param desiredDirection {Vector}
   * @return {Vector} alignment force
   */
  Boid.prototype.steer = function (desiredDirection) {
    desiredDirection.normalize();
    desiredDirection.multiply(this.behavior.MaxSpeed());
    let steer = desiredDirection.subtract(this.velocity);
    steer.limit(this.behavior.MaxAcceleration());
    return steer;
  }

  /**
   * Separation: checks for nearby boids.
   * @return {Vector} separation direction
   */
  Boid.prototype.separate = function () {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {gdjs.__boidsExtension.BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const separationRadius = this.behavior.SeparationRadius();
    this.separationDirection.set(0, 0);
    let diff = this.separateWorkingVector;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, separationRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      const otherObject = boid.behavior.owner;
      const distance = object.getDistanceToObject(otherObject);
      if (distance > 0) {
        diff = boid.getVectorTo(this, diff);
        diff.normalize();
        diff.divide(distance);
        this.separationDirection.add(diff);
      }
    }
    if (this.separationDirection.magnitudeSquare() > 0) {
      this.separationDirection.normalize();
    }
    return this.separationDirection;
  }

  /**
   * Alignment: calculate the average velocity for every nearby boid in the system
   * @return {Vector} alignment direction
   */
  Boid.prototype.align = function () {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {gdjs.__boidsExtension.BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const alignmentRadius = this.behavior.AlignmentRadius();
    this.alignmentDirection.set(0, 0);
    let count = 0;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, alignmentRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      this.alignmentDirection.add(boid.velocity);
      count++;
    }
    if (count > 0) {
      this.alignmentDirection.normalize();
    }
    return this.alignmentDirection;
  }

  /**
   * Cohesion: calculate direction vector towards the average location of all nearby boids
   * @return {Vector} cohesion direction
   */
  Boid.prototype.cohesion = function () {
    const runtimeScene = this.behavior.owner.getInstanceContainer();
    /** @type {gdjs.__boidsExtension.BoidsManager} */
    const manager = runtimeScene.__boidsExtension.boidsManager;
    const cohesionRadius = this.behavior.CohesionRadius();
    let count = 0;
    let sumX = 0;
    let sumY = 0;
    const object = this.behavior.owner;

    const nearbyBoids = manager.getAllBoidsAround(this, cohesionRadius);
    for (let i = 0; i < nearbyBoids.length; i++) {
      const boid = nearbyBoids[i];
      const otherObject = boid.behavior.owner;
      sumX += otherObject.getCenterXInScene();
      sumY += otherObject.getCenterYInScene();
      count++;
    }
    if (count > 0) {
      sumX /= count;
      sumY /= count;

      // A vector pointing from the position to the target
      this.cohesionDirection.set(
        sumX - object.getCenterXInScene(),
        sumY - object.getCenterYInScene()
      )
    }
    return this.cohesionDirection.normalize();
  }

  return Boid;
}());

/**
 * A boids manager
 */
gdjs.__boidsExtension.BoidsManager =  /** @class */ (function () {
  /**
   * Create a manager.
   */
  function BoidsManager() {
    /**
     * @type {Map<string, gdjs.__boidsExtension.Boid>}
     */
    this.boids = new Map();
    this.boidsRBush = new rbush();
  }

  /**
   * Create and register a boid.
   * @param {gdjs.RuntimeBehavior} behavior
   * @returns {Boid} the created Boid
   */
  BoidsManager.prototype.add = function (behavior) {
    const boid = new gdjs.__boidsExtension.Boid(behavior);
    this.boids.set(behavior.owner.id, boid);
    this.addToRBush(boid);
    return boid;
  }

  /**
   * Add a boid to the R-Tree.
   * @param {Boid} boid
   */
  BoidsManager.prototype.addToRBush = function (boid) {
    if (boid.currentRBushAABB) {
      boid.currentRBushAABB.updateAABBFromOwner();
    }
    else {
      boid.currentRBushAABB = new gdjs.BehaviorRBushAABB(
        boid.behavior
      );
    }
    this.boidsRBush.insert(boid.currentRBushAABB);
  }

  /**
   * Unregister the boid.
   * @param {gdjs.RuntimeBehavior} behavior
   */
  BoidsManager.prototype.remove = function (behavior) {
    this.boids.delete(behavior.owner.id);

    this.removeFromRBush(behavior.__boidsExtension.boid.currentRBushAABB);
  }

  /**
   * Remove a boid from the R-Tree.
   * @param {Boid} boid
   */
  BoidsManager.prototype.removeFromRBush = function (boid) {
    this.boidsRBush.remove(boid.currentRBushAABB);
  }

  /**
   * Move all instances.
   */
  BoidsManager.prototype.moveAll = function () {
    this.boids.forEach(boid => boid.flock());
    this.boids.forEach(boid => {
      boid.move();
      this.removeFromRBush(boid);
      this.addToRBush(boid);
    });
  }

  /**
   * Returns all the boids around the specified boid.
   * @param {Boid} boid
   * @param {number} radius
   * @return {Boid[]} An array with all boids near the object.
   */
  BoidsManager.prototype.getAllBoidsAround = function (boid, radius, results) {
    const object = boid.behavior.owner;

    const x = object.getCenterXInScene();
    const y = object.getCenterYInScene();
    const searchArea = gdjs.staticObject(
      gdjs.__boidsExtension.BoidsManager.prototype.getAllBoidsAround
    );
    searchArea.minX = x - radius;
    searchArea.minY = y - radius;
    searchArea.maxX = x + radius;
    searchArea.maxY = y + radius;
    // TODO The R-Tree should not allocate an array.
    const nearbys = this.boidsRBush.search(searchArea);

    const radiusSq = radius * radius;
    const result = gdjs.staticArray(
      gdjs.__boidsExtension.BoidsManager.prototype.getAllBoidsAround
    );
    result.length = 0;
    // Cap the number of boids between 20 and 40.
    const step = Math.ceil(nearbys.length / 40);
    for (let i = 0; i < nearbys.length; i += step) {
      const behavior = nearbys[i].behavior;
      const otherObject = behavior.owner;
      if (object === otherObject) {
        continue;
      }
      const distanceSq = object.getSqDistanceToObject(otherObject);
      if (distanceSq < radiusSq) {
        result.push(behavior.__boidsExtension.boid);
      }
    }
    return result;
  }

  return BoidsManager;
}());

};
gdjs.evtsExt__BoidsMovement__DefineJavaScript.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__BoidsMovement__DefineJavaScript.userFunc0xa9f8e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__BoidsMovement__DefineJavaScript.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("__BoidsMovement_ClassesDefined"), false);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("__BoidsMovement_ClassesDefined"), true);
}
{ //Subevents
gdjs.evtsExt__BoidsMovement__DefineJavaScript.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__BoidsMovement__DefineJavaScript.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__BoidsMovement__DefineJavaScript.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__BoidsMovement__DefineJavaScript.registeredGdjsCallbacks = [];