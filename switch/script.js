let animal = prompt(`Обери тварину chicks,dogs,fish,frogs,lions,cows`)
switch (animal) {
    case `chicks`:
        alert(`peep peep`);
    break;
    case `dogs`:
        alert(`arf arf`);
    break;
    case `fish`:
        alert(`splosh!`);
    break;
    case `frogs`:
        alert(`quack-quack`);
    break;
    case `lions`:
        alert(`r-r-r`);
    break;
    case `cows`:
        alert(`mooo`);
    break;
    default:
        alert(`Немає такої тварини`)
}
