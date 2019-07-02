'use strict';

var setup = document.querySelector('.hidden');
setup.classList.remove('hidden');

var names = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var secondNames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColors = ['black','red','blue','yellow','green']

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

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
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');
