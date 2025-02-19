'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
  1.Розідялю на classLine -> строки з даними 1 класу
  2.Видаляю бокові space
  3.Перевірка на пусті classLine
  4.Закидаю в об'єкт поле + значення (видаляю для них space якщо залишились)
*/

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((str) => str.trim())
    .filter((classLine) => classLine !== '')
    .reduce((object, classLine) => {
      const [key, values] = classLine.split(':');

      object[key.trim()] = values.trim();

      return object;
    }, {});
}
module.exports = convertToObject;
