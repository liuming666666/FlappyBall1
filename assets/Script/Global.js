//开启物理引擎
cc.director.getPhysicsManager().enabled = true;
cc.director.getPhysicsManager().gravity = cc.v2(0, -2600);
/*cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit |
    cc.PhysicsManager.DrawBits.e_pairBit |
    cc.PhysicsManager.DrawBits.e_centerOfMassBit |
    cc.PhysicsManager.DrawBits.e_jointBit |
    cc.PhysicsManager.DrawBits.e_shapeBit
;*/
