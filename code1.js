gdjs.GameCode = {};
gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDTransitionObjects1= [];
gdjs.GameCode.GDTransitionObjects2= [];
gdjs.GameCode.GDTransitionObjects3= [];
gdjs.GameCode.GDTransitionObjects4= [];
gdjs.GameCode.GDDarkenObjects1= [];
gdjs.GameCode.GDDarkenObjects2= [];
gdjs.GameCode.GDDarkenObjects3= [];
gdjs.GameCode.GDDarkenObjects4= [];
gdjs.GameCode.GDvignetteObjects1= [];
gdjs.GameCode.GDvignetteObjects2= [];
gdjs.GameCode.GDvignetteObjects3= [];
gdjs.GameCode.GDvignetteObjects4= [];
gdjs.GameCode.GDFloorObjects1= [];
gdjs.GameCode.GDFloorObjects2= [];
gdjs.GameCode.GDFloorObjects3= [];
gdjs.GameCode.GDFloorObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDGunObjects1= [];
gdjs.GameCode.GDGunObjects2= [];
gdjs.GameCode.GDGunObjects3= [];
gdjs.GameCode.GDGunObjects4= [];
gdjs.GameCode.GDBulletObjects1= [];
gdjs.GameCode.GDBulletObjects2= [];
gdjs.GameCode.GDBulletObjects3= [];
gdjs.GameCode.GDBulletObjects4= [];
gdjs.GameCode.GDPirateEnemyObjects1= [];
gdjs.GameCode.GDPirateEnemyObjects2= [];
gdjs.GameCode.GDPirateEnemyObjects3= [];
gdjs.GameCode.GDPirateEnemyObjects4= [];
gdjs.GameCode.GDSpawnPointsObjects1= [];
gdjs.GameCode.GDSpawnPointsObjects2= [];
gdjs.GameCode.GDSpawnPointsObjects3= [];
gdjs.GameCode.GDSpawnPointsObjects4= [];
gdjs.GameCode.GDPirateSpawnPointsObjects1= [];
gdjs.GameCode.GDPirateSpawnPointsObjects2= [];
gdjs.GameCode.GDPirateSpawnPointsObjects3= [];
gdjs.GameCode.GDPirateSpawnPointsObjects4= [];
gdjs.GameCode.GDHealthBar_9595EnemyObjects1= [];
gdjs.GameCode.GDHealthBar_9595EnemyObjects2= [];
gdjs.GameCode.GDHealthBar_9595EnemyObjects3= [];
gdjs.GameCode.GDHealthBar_9595EnemyObjects4= [];
gdjs.GameCode.GDWallCollisionObjects1= [];
gdjs.GameCode.GDWallCollisionObjects2= [];
gdjs.GameCode.GDWallCollisionObjects3= [];
gdjs.GameCode.GDWallCollisionObjects4= [];
gdjs.GameCode.GDRedFlatBarObjects1= [];
gdjs.GameCode.GDRedFlatBarObjects2= [];
gdjs.GameCode.GDRedFlatBarObjects3= [];
gdjs.GameCode.GDRedFlatBarObjects4= [];
gdjs.GameCode.GDEXP_9595PointObjects1= [];
gdjs.GameCode.GDEXP_9595PointObjects2= [];
gdjs.GameCode.GDEXP_9595PointObjects3= [];
gdjs.GameCode.GDEXP_9595PointObjects4= [];
gdjs.GameCode.GDStatsObjects1= [];
gdjs.GameCode.GDStatsObjects2= [];
gdjs.GameCode.GDStatsObjects3= [];
gdjs.GameCode.GDStatsObjects4= [];
gdjs.GameCode.GDPowerButtonObjects1= [];
gdjs.GameCode.GDPowerButtonObjects2= [];
gdjs.GameCode.GDPowerButtonObjects3= [];
gdjs.GameCode.GDPowerButtonObjects4= [];
gdjs.GameCode.GDFireRateButtonObjects1= [];
gdjs.GameCode.GDFireRateButtonObjects2= [];
gdjs.GameCode.GDFireRateButtonObjects3= [];
gdjs.GameCode.GDFireRateButtonObjects4= [];
gdjs.GameCode.GDAccuracyButtonObjects1= [];
gdjs.GameCode.GDAccuracyButtonObjects2= [];
gdjs.GameCode.GDAccuracyButtonObjects3= [];
gdjs.GameCode.GDAccuracyButtonObjects4= [];
gdjs.GameCode.GDWaveNumberObjects1= [];
gdjs.GameCode.GDWaveNumberObjects2= [];
gdjs.GameCode.GDWaveNumberObjects3= [];
gdjs.GameCode.GDWaveNumberObjects4= [];
gdjs.GameCode.GDShadowObjects1= [];
gdjs.GameCode.GDShadowObjects2= [];
gdjs.GameCode.GDShadowObjects3= [];
gdjs.GameCode.GDShadowObjects4= [];
gdjs.GameCode.GDDropObjects1= [];
gdjs.GameCode.GDDropObjects2= [];
gdjs.GameCode.GDDropObjects3= [];
gdjs.GameCode.GDDropObjects4= [];
gdjs.GameCode.GDMovementObjects1= [];
gdjs.GameCode.GDMovementObjects2= [];
gdjs.GameCode.GDMovementObjects3= [];
gdjs.GameCode.GDMovementObjects4= [];
gdjs.GameCode.GDAimingObjects1= [];
gdjs.GameCode.GDAimingObjects2= [];
gdjs.GameCode.GDAimingObjects3= [];
gdjs.GameCode.GDAimingObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Aiming"), gdjs.GameCode.GDAimingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Movement"), gdjs.GameCode.GDMovementObjects1);
{for(var i = 0, len = gdjs.GameCode.GDMovementObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMovementObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDAimingObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDAimingObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.GameCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("PirateSpawnPoints"), gdjs.GameCode.GDPirateSpawnPointsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.GameCode.GDTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallCollision"), gdjs.GameCode.GDWallCollisionObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDFloorObjects1.length !== 0 ? gdjs.GameCode.GDFloorObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDWallCollisionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWallCollisionObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDPirateSpawnPointsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPirateSpawnPointsObjects1[i].hide();
}
}{gdjs.evtsExt__CameraShake__SetLayerRotationAmplitude.func(runtimeScene, 1, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetDefaultZoomAmplitude.func(runtimeScene, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.func(runtimeScene, 1, 1, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__SetLayerShakingFrequency.func(runtimeScene, 5, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}{for(var i = 0, len = gdjs.GameCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects1Objects = Hashtable.newFrom({"PirateEnemy": gdjs.GameCode.GDPirateEnemyObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects1);
gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setZOrder((gdjs.GameCode.GDPlayerObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.GameCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects1[i].setZOrder((gdjs.GameCode.GDBulletObjects1[i].getPointY("")));
}
for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects1[i].setZOrder((gdjs.GameCode.GDPirateEnemyObjects1[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDGunObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects1[i].setZOrder((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getZOrder()) + 1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects1Objects, false);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateSpawnPointsObjects3Objects = Hashtable.newFrom({"PirateSpawnPoints": gdjs.GameCode.GDPirateSpawnPointsObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects3Objects = Hashtable.newFrom({"PirateEnemy": gdjs.GameCode.GDPirateEnemyObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects3Objects = Hashtable.newFrom({"HealthBar_Enemy": gdjs.GameCode.GDHealthBar_9595EnemyObjects3});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PirateSpawnPoints"), gdjs.GameCode.GDPirateSpawnPointsObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateSpawnPointsObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPirateSpawnPointsObjects3 */
gdjs.GameCode.GDHealthBar_9595EnemyObjects3.length = 0;

gdjs.GameCode.GDPirateEnemyObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects3Objects, (( gdjs.GameCode.GDPirateSpawnPointsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateSpawnPointsObjects3[0].getPointX("")), (( gdjs.GameCode.GDPirateSpawnPointsObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateSpawnPointsObjects3[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects3[i].getBehavior("Health").SetMaxHealthOp(2 + Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) / 3), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects3[i].getBehavior("Health").SetHealth((gdjs.GameCode.GDPirateEnemyObjects3[i].getBehavior("Health").MaxHealth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects3Objects, (( gdjs.GameCode.GDPirateEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects3[0].getPointX("")), (( gdjs.GameCode.GDPirateEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects3[0].getPointY("")), "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.GameCode.GDHealthBar_9595EnemyObjects3.length !== 0 ? gdjs.GameCode.GDHealthBar_9595EnemyObjects3[0] : null), (gdjs.GameCode.GDPirateEnemyObjects3.length !== 0 ? gdjs.GameCode.GDPirateEnemyObjects3[0] : null));
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects3[i].getBehavior("Resizable").setSize(50, 29);
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Spawn");
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects3Objects = Hashtable.newFrom({"HealthBar_Enemy": gdjs.GameCode.GDHealthBar_9595EnemyObjects3});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects2Objects = Hashtable.newFrom({"PirateEnemy": gdjs.GameCode.GDPirateEnemyObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects2Objects = Hashtable.newFrom({"HealthBar_Enemy": gdjs.GameCode.GDHealthBar_9595EnemyObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HealthBar_Enemy"), gdjs.GameCode.GDHealthBar_9595EnemyObjects2);
/* Reuse gdjs.GameCode.GDPirateEnemyObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects2Objects, (gdjs.GameCode.GDPirateEnemyObjects2.length !== 0 ? gdjs.GameCode.GDPirateEnemyObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHealthBar_9595EnemyObjects2 */
/* Reuse gdjs.GameCode.GDPirateEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHealthBar_9595EnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBar_9595EnemyObjects2[i].setWidth(((( gdjs.GameCode.GDPirateEnemyObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) / (( gdjs.GameCode.GDPirateEnemyObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects2[0].getBehavior("Health").MaxHealth((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))) * 12);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects2Objects = Hashtable.newFrom({"HealthBar_Enemy": gdjs.GameCode.GDHealthBar_9595EnemyObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects1Objects = Hashtable.newFrom({"EXP_Point": gdjs.GameCode.GDEXP_9595PointObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HealthBar_Enemy"), gdjs.GameCode.GDHealthBar_9595EnemyObjects2);
gdjs.copyArray(gdjs.GameCode.GDPirateEnemyObjects1, gdjs.GameCode.GDPirateEnemyObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects2Objects, (gdjs.GameCode.GDPirateEnemyObjects2.length !== 0 ? gdjs.GameCode.GDPirateEnemyObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHealthBar_9595EnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDHealthBar_9595EnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBar_9595EnemyObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDPirateEnemyObjects1 */
gdjs.GameCode.GDEXP_9595PointObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects1Objects, (( gdjs.GameCode.GDPirateEnemyObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects1[0].getPointX("")), (( gdjs.GameCode.GDPirateEnemyObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy Spawn");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wave");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Wave") > 30;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("WaveNumber"), gdjs.GameCode.GDWaveNumberObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDWaveNumberObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWaveNumberObjects2[i].setString("Wave: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1))));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Wave");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPirateEnemyObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPirateEnemyObjects2[i].isCurrentAnimationName("Hurt")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPirateEnemyObjects2[k] = gdjs.GameCode.GDPirateEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPirateEnemyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPirateEnemyObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects2[i].addForceTowardObject((gdjs.GameCode.GDPlayerObjects2.length !== 0 ? gdjs.GameCode.GDPlayerObjects2[0] : null), 15, 0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Enemy Spawn") > 3 / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1));
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPirateEnemyObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("HealthBar_Enemy"), gdjs.GameCode.GDHealthBar_9595EnemyObjects3);
gdjs.GameCode.GDPirateEnemyObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPirateEnemyObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPirateEnemyObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDHealthBar_95959595EnemyObjects3Objects, (gdjs.GameCode.GDPirateEnemyObjects3.length !== 0 ? gdjs.GameCode.GDPirateEnemyObjects3[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDHealthBar_9595EnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBar_9595EnemyObjects3[i].setPosition((( gdjs.GameCode.GDPirateEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects3[0].getPointX("HealthBar")),(( gdjs.GameCode.GDPirateEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects3[0].getPointY("HealthBar")));
}
}{for(var i = 0, len = gdjs.GameCode.GDHealthBar_9595EnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDHealthBar_9595EnemyObjects3[i].setZOrder((( gdjs.GameCode.GDPirateEnemyObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPirateEnemyObjects3[0].getZOrder()) + 5);
}
}}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects2 */
/* Reuse gdjs.GameCode.GDPirateEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPirateEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPirateEnemyObjects2[i].getBehavior("Health").Hit(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Power")), true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPirateEnemyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPirateEnemyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPirateEnemyObjects1[k] = gdjs.GameCode.GDPirateEnemyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPirateEnemyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects3Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.GameCode.GDBulletObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);
{for(var i = 0, len = gdjs.GameCode.GDGunObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects3[i].setPosition((( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointX("Gun")),(( gdjs.GameCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects3[0].getPointY("Gun")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects3);
{for(var i = 0, len = gdjs.GameCode.GDGunObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects3[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects3);
{for(var i = 0, len = gdjs.GameCode.GDGunObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects3[i].rotateTowardAngle(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, 2, "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), 0, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = !(gdjs.evtTools.systemInfo.isMobile());
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, 2, "Secondary", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) > 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects3);
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects3);
{for(var i = 0, len = gdjs.GameCode.GDGunObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects3[i].getBehavior("FireBullet").Fire((gdjs.GameCode.GDGunObjects3[i].getPointX("BulletPoint")), (gdjs.GameCode.GDGunObjects3[i].getPointY("BulletPoint")), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects3Objects, (gdjs.GameCode.GDGunObjects3[i].getAngle()), 200, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGunObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDGunObjects3[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGunObjects3[k] = gdjs.GameCode.GDGunObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDGunObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGunObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "Gun", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(0.8, 1));
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.1, 0, 0.05, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.GameCode.GDGunObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.1, 3, 3, 1, 0.05, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.GameCode.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBulletObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, 400, true);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBulletObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBulletObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallCollisionObjects1Objects = Hashtable.newFrom({"WallCollision": gdjs.GameCode.GDWallCollisionObjects1});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallCollision"), gdjs.GameCode.GDWallCollisionObjects1);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDWallCollisionObjects1Objects, false);
}
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


gdjs.GameCode.eventsList9(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects1Objects = Hashtable.newFrom({"PirateEnemy": gdjs.GameCode.GDPirateEnemyObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PirateEnemy"), gdjs.GameCode.GDPirateEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPirateEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects3Objects = Hashtable.newFrom({"EXP_Point": gdjs.GameCode.GDEXP_9595PointObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects3Objects = Hashtable.newFrom({"EXP_Point": gdjs.GameCode.GDEXP_9595PointObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects3});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Darken"), gdjs.GameCode.GDDarkenObjects3);
{for(var i = 0, len = gdjs.GameCode.GDDarkenObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDDarkenObjects3[i].drawRectangle(0, gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "LevelUp", 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "LevelUp", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "LevelUp", 0));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("EXP_Point"), gdjs.GameCode.GDEXP_9595PointObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, 50, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDEXP_9595PointObjects3 */
/* Reuse gdjs.GameCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDEXP_9595PointObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEXP_9595PointObjects3[i].addForceTowardObject((gdjs.GameCode.GDPlayerObjects3.length !== 0 ? gdjs.GameCode.GDPlayerObjects3[0] : null), 100, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EXP_Point"), gdjs.GameCode.GDEXP_9595PointObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDEXP_95959595PointObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects3Objects, 3, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDEXP_9595PointObjects3 */
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.GameCode.GDRedFlatBarObjects3);
{for(var i = 0, len = gdjs.GameCode.GDEXP_9595PointObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDEXP_9595PointObjects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CurrentEXP").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRedFlatBarObjects3[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxEXP")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDRedFlatBarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRedFlatBarObjects3[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CurrentEXP")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CurrentEXP")) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxEXP"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RedFlatBar"), gdjs.GameCode.GDRedFlatBarObjects2);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "LevelUp");
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CurrentEXP").setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxEXP").setNumber(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxEXP")) * 1.5));
}{for(var i = 0, len = gdjs.GameCode.GDRedFlatBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRedFlatBarObjects2[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("CurrentEXP")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDRedFlatBarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRedFlatBarObjects2[i].SetMaxValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("MaxEXP")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPowerButtonObjects1, gdjs.GameCode.GDPowerButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects2[k] = gdjs.GameCode.GDPowerButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Power").add(1);
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDFireRateButtonObjects1, gdjs.GameCode.GDFireRateButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFireRateButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFireRateButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFireRateButtonObjects2[k] = gdjs.GameCode.GDFireRateButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFireRateButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FireRate").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects2[i].getBehavior("FireBullet").SetCooldownOp((gdjs.GameCode.GDGunObjects2[i].getBehavior("FireBullet").Cooldown((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 0.9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDAccuracyButtonObjects1, gdjs.GameCode.GDAccuracyButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAccuracyButtonObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDAccuracyButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAccuracyButtonObjects2[k] = gdjs.GameCode.GDAccuracyButtonObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDAccuracyButtonObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gun"), gdjs.GameCode.GDGunObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Accuracy").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDGunObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGunObjects2[i].getBehavior("FireBullet").SetAngleVarianceOp((gdjs.GameCode.GDGunObjects2[i].getBehavior("FireBullet").AngleVariance((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 0.9, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Stats"), gdjs.GameCode.GDStatsObjects1);
{for(var i = 0, len = gdjs.GameCode.GDStatsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStatsObjects1[i].setText("Power: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Power"))) + "\nFire Rate: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("FireRate"))) + "\nAccuracy: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getChild("Accuracy"))));
}
}}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("AccuracyButton"), gdjs.GameCode.GDAccuracyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FireRateButton"), gdjs.GameCode.GDFireRateButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PowerButton"), gdjs.GameCode.GDPowerButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPowerButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPowerButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPowerButtonObjects1[k] = gdjs.GameCode.GDPowerButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPowerButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFireRateButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDFireRateButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFireRateButtonObjects1[k] = gdjs.GameCode.GDFireRateButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFireRateButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDAccuracyButtonObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDAccuracyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDAccuracyButtonObjects1[k] = gdjs.GameCode.GDAccuracyButtonObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDAccuracyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "LevelUp");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "LevelUp");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


gdjs.GameCode.eventsList12(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDTransitionObjects1.length = 0;
gdjs.GameCode.GDTransitionObjects2.length = 0;
gdjs.GameCode.GDTransitionObjects3.length = 0;
gdjs.GameCode.GDTransitionObjects4.length = 0;
gdjs.GameCode.GDDarkenObjects1.length = 0;
gdjs.GameCode.GDDarkenObjects2.length = 0;
gdjs.GameCode.GDDarkenObjects3.length = 0;
gdjs.GameCode.GDDarkenObjects4.length = 0;
gdjs.GameCode.GDvignetteObjects1.length = 0;
gdjs.GameCode.GDvignetteObjects2.length = 0;
gdjs.GameCode.GDvignetteObjects3.length = 0;
gdjs.GameCode.GDvignetteObjects4.length = 0;
gdjs.GameCode.GDFloorObjects1.length = 0;
gdjs.GameCode.GDFloorObjects2.length = 0;
gdjs.GameCode.GDFloorObjects3.length = 0;
gdjs.GameCode.GDFloorObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDGunObjects1.length = 0;
gdjs.GameCode.GDGunObjects2.length = 0;
gdjs.GameCode.GDGunObjects3.length = 0;
gdjs.GameCode.GDGunObjects4.length = 0;
gdjs.GameCode.GDBulletObjects1.length = 0;
gdjs.GameCode.GDBulletObjects2.length = 0;
gdjs.GameCode.GDBulletObjects3.length = 0;
gdjs.GameCode.GDBulletObjects4.length = 0;
gdjs.GameCode.GDPirateEnemyObjects1.length = 0;
gdjs.GameCode.GDPirateEnemyObjects2.length = 0;
gdjs.GameCode.GDPirateEnemyObjects3.length = 0;
gdjs.GameCode.GDPirateEnemyObjects4.length = 0;
gdjs.GameCode.GDSpawnPointsObjects1.length = 0;
gdjs.GameCode.GDSpawnPointsObjects2.length = 0;
gdjs.GameCode.GDSpawnPointsObjects3.length = 0;
gdjs.GameCode.GDSpawnPointsObjects4.length = 0;
gdjs.GameCode.GDPirateSpawnPointsObjects1.length = 0;
gdjs.GameCode.GDPirateSpawnPointsObjects2.length = 0;
gdjs.GameCode.GDPirateSpawnPointsObjects3.length = 0;
gdjs.GameCode.GDPirateSpawnPointsObjects4.length = 0;
gdjs.GameCode.GDHealthBar_9595EnemyObjects1.length = 0;
gdjs.GameCode.GDHealthBar_9595EnemyObjects2.length = 0;
gdjs.GameCode.GDHealthBar_9595EnemyObjects3.length = 0;
gdjs.GameCode.GDHealthBar_9595EnemyObjects4.length = 0;
gdjs.GameCode.GDWallCollisionObjects1.length = 0;
gdjs.GameCode.GDWallCollisionObjects2.length = 0;
gdjs.GameCode.GDWallCollisionObjects3.length = 0;
gdjs.GameCode.GDWallCollisionObjects4.length = 0;
gdjs.GameCode.GDRedFlatBarObjects1.length = 0;
gdjs.GameCode.GDRedFlatBarObjects2.length = 0;
gdjs.GameCode.GDRedFlatBarObjects3.length = 0;
gdjs.GameCode.GDRedFlatBarObjects4.length = 0;
gdjs.GameCode.GDEXP_9595PointObjects1.length = 0;
gdjs.GameCode.GDEXP_9595PointObjects2.length = 0;
gdjs.GameCode.GDEXP_9595PointObjects3.length = 0;
gdjs.GameCode.GDEXP_9595PointObjects4.length = 0;
gdjs.GameCode.GDStatsObjects1.length = 0;
gdjs.GameCode.GDStatsObjects2.length = 0;
gdjs.GameCode.GDStatsObjects3.length = 0;
gdjs.GameCode.GDStatsObjects4.length = 0;
gdjs.GameCode.GDPowerButtonObjects1.length = 0;
gdjs.GameCode.GDPowerButtonObjects2.length = 0;
gdjs.GameCode.GDPowerButtonObjects3.length = 0;
gdjs.GameCode.GDPowerButtonObjects4.length = 0;
gdjs.GameCode.GDFireRateButtonObjects1.length = 0;
gdjs.GameCode.GDFireRateButtonObjects2.length = 0;
gdjs.GameCode.GDFireRateButtonObjects3.length = 0;
gdjs.GameCode.GDFireRateButtonObjects4.length = 0;
gdjs.GameCode.GDAccuracyButtonObjects1.length = 0;
gdjs.GameCode.GDAccuracyButtonObjects2.length = 0;
gdjs.GameCode.GDAccuracyButtonObjects3.length = 0;
gdjs.GameCode.GDAccuracyButtonObjects4.length = 0;
gdjs.GameCode.GDWaveNumberObjects1.length = 0;
gdjs.GameCode.GDWaveNumberObjects2.length = 0;
gdjs.GameCode.GDWaveNumberObjects3.length = 0;
gdjs.GameCode.GDWaveNumberObjects4.length = 0;
gdjs.GameCode.GDShadowObjects1.length = 0;
gdjs.GameCode.GDShadowObjects2.length = 0;
gdjs.GameCode.GDShadowObjects3.length = 0;
gdjs.GameCode.GDShadowObjects4.length = 0;
gdjs.GameCode.GDDropObjects1.length = 0;
gdjs.GameCode.GDDropObjects2.length = 0;
gdjs.GameCode.GDDropObjects3.length = 0;
gdjs.GameCode.GDDropObjects4.length = 0;
gdjs.GameCode.GDMovementObjects1.length = 0;
gdjs.GameCode.GDMovementObjects2.length = 0;
gdjs.GameCode.GDMovementObjects3.length = 0;
gdjs.GameCode.GDMovementObjects4.length = 0;
gdjs.GameCode.GDAimingObjects1.length = 0;
gdjs.GameCode.GDAimingObjects2.length = 0;
gdjs.GameCode.GDAimingObjects3.length = 0;
gdjs.GameCode.GDAimingObjects4.length = 0;

gdjs.GameCode.eventsList16(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
