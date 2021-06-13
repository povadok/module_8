// 8. переборка Map

let newMap = new Map();
newMap.set(1, 'first');
newMap.set('second', 2);
newMap.set('third', '3');
newMap.set(4, 4);
for (let key of newMap.keys()) {
  console.log(`ключ - ${key}, значение ${newMap.get(key)}`)
}