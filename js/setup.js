'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var WIZARD_QUANTITY = 4;
var names = ['Иван','Хуан Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var secondNames = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var coatColors = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColors = ['black','red','blue','yellow','green']
var fireBallColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']

var similarListElement = setup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupWizard = document.querySelector('.setup-wizard');
var setupWizardCoat = setupWizard.querySelector('.wizard-coat');
var setupWizardCoatInput = document.querySelector('.setup-wizard-form').querySelector('[name="coat-color"]');
var setupWizardEyes =  setupWizard.querySelector('.wizard-eyes');
var setupWizardEyesInput = document.querySelector('.setup-wizard-form').querySelector('[name="eyes-color"]');
var setupFireBall = setup.querySelector('.setup-fireball-wrap');
var setupFireBallInput = document.querySelector('.setup-wizard-form').querySelector('[name="fireball-color"]');
var userName = setup.querySelector('.setup-user-name');
var setupSubmit = setup.querySelector('.setup-submit');

var getName = function(firstWord, secondWord) {
  return firstWord[Math.ceil(Math.random()*(firstWord.length-1))] + ' ' + secondWord[Math.ceil(Math.random()*(secondWord.length-1))];
};

var getColors = function(colors) {
  return colors[Math.ceil(Math.random()*(colors.length-1))]
};

var changeColor = function(thing, input, value) {
  if (thing.tagName === "use") {
    thing.style.fill = value;
  }
  thing.style.backgroundColor = value;
  input.value = value;
}

var getWizardsArray = function(quantity) {
  var result = [];
  for (var i = 0; i < quantity; i++) {
    result.push({
      name: getName(names, secondNames),
      coatColor: getColors(coatColors),
      eyesColor: getColors(eyesColors)
    })
  }
  return result
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderWizards = function(count) {
  var fragment = document.createDocumentFragment();
  var wizards = getWizardsArray(count);

  for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
  };

  similarListElement.appendChild(fragment);

  setup.querySelector('.setup-similar').classList.remove('hidden');
};

var openSetup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupEscPress);
};

var closeSetup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
};

var onSetupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE || userName.onfocus !== null) {
    closeSetup();
  }
};

setupOpen.addEventListener('click', function() {
  openSetup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openSetup();
  }
});

setupClose.addEventListener('click', function() {
  closeSetup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSetup();
  }
});

setupWizardCoat.addEventListener('click', function() {
  changeColor(setupWizardCoat, setupWizardCoatInput, getColors(coatColors));
});

setupWizardEyes.addEventListener('click', function() {
  changeColor(setupWizardEyes, setupWizardEyesInput, getColors(eyesColors));
});

setupFireBall.addEventListener('click', function() {
  changeColor(setupFireBall, setupFireBallInput, getColors(fireBallColors));
});

setupSubmit.addEventListener('click', function() {
  setupSubmit.submit();
});

renderWizards(WIZARD_QUANTITY);


