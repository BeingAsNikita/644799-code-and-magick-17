'use strict';

var setup = document.querySelector('.hidden');
setup.classList.remove('hidden');

var names = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var secondNames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColors = ['black','red','blue','yellow','green']

var getName = function(firstWord, secondWord) {
  return firstWord[Math.ceil(Math.random()*(firstWord.length-1))] + ' ' + secondWord[Math.ceil(Math.random()*(secondWord.length-1))];
}

var getColors = function(colors) {
  return colors[Math.ceil(Math.random()*(colors.length-1))]
}

var wizards = [
  {
    name: getName(names, secondNames),
    coatColor: getColors(coatColors),
    eyesColor: getColors(eyesColors)
  },
  {
    name: getName(names, secondNames),
    coatColor: getColors(coatColors),
    eyesColor: getColors(eyesColors)
  },
  {
    name: getName(names, secondNames),
    coatColor: getColors(coatColors),
    eyesColor: getColors(eyesColors)
  },
  {
    name: getName(names, secondNames),
    coatColor: getColors(coatColors),
    eyesColor: getColors(eyesColors)
  }
]

console.log(wizards);
