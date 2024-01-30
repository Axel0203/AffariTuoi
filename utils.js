function getRandomAndRemove(array) {
    if (array.length === 0) {
        console.error("L'array è vuoto.");
        return null;
    }
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    array.splice(randomIndex, 1);
    return randomElement;
}

function getRandomElementFromArray(array) {
    if (Array.isArray(array) && array.length > 0) {
      const randomIndex = Math.floor(Math.random() * array.length);
      return array[randomIndex];
    } else {
      console.error("Input is not a non-empty array");
      return undefined;
    }
}