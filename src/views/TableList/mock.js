function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateProduction(parts) {
    var altenList = []
    var altenFeature = ["Seam","Slot","Hole"]
    var st = ["success", "danger", "warning"]
    for (var x= 0; x < parts; x++){
        var altenProduction = {
                name: altenFeature[getRandom(0,3)],
                controls: {
                    values :[]
                },
                len : getRandom(1,4),
                stat: st[getRandom(0,3)]
            }

        for (var i = 0; i < altenProduction.len; i++) {
            var val = {
                x: [getRandomFloat(0,10),getRandomFloat(0,10),getRandom(0,3)],
                y: [getRandomFloat(0,10),getRandomFloat(0,10),getRandom(0,3)],
                z: [getRandomFloat(0,10),getRandomFloat(0,10),getRandom(0,3)],
                diameter: [getRandomFloat(0,10),getRandomFloat(0,10),getRandom(0,3)]
            }
            altenProduction.controls.values.push(val);
        }
        altenList.push(altenProduction)
    }
    return altenList;
}