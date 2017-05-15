# Примеры синтаксического сахара ES2015+
## Возврат объекта из колбэка
Имеется массив статей с разными свойствами:

```js
const articles = [
    {
        "id": "56c782f18990ecf954f6e027",
        "date": "2016-06-09T15:03:23.000Z",
        "title": "Ololo Article",
        "text": "Article text", 
    },
    {
        // ...
    }
];
```

Нужно его перебрать и вернуть только массив объектов для формирования селекта, чтоб в `<option value="">...</option>` положить айдишник для `value` и `title` для текста:

```js
[
    {
        label: 'Article title',
        value: 'Article id'
    },
    {
        // ...
    }
]
```

Было:

```js
const options = articles.map(function(article) {
    return {
        label: article.title,
        value: article.id
    }
});
```

Стало:

```js
const options = articles.map(article => ({
    label: article.title,
    value: article.id
}));
```

Круглые скобки в `article => ({})` нужны, чтобы сказать интерпретатору, что это выражение, а не нотация тела функции-стрелки. Это выражение вычисляется и сразу мы получаем результат — объект.

## Сокращенный синтаксис для свойств объекта
Когда у нас есть переменная и мы хотим добавить ее значение в свойство объекта с таим же именем можно делать так: 

```js
let length = 50;

const obj = { length }; // аналогично `length: length`
console.log(obj.length); // => 30
```

Интерпретатор найдет переменную `length` в текущем окружении и запишет ее значение в свойство `length` объекта.

Еще можно на ходу вычислять значение, которое будет записано как свойство объекта. Например:

```js
let someString = 'length';
const obj = { [someString]: 30 }; // возьмем значение `somString` и запишем в итоге `length: 30`
console.log(obj.length); // => 30
```

Бывает удобно, когда в функцию приходит параметр и нужно что-то сделать с объектом, где есть свойство с таким же именем:

```js
handleChange = type => ev => { // пусть type='user', например
    const {value} = ev.target;
    // ...
    this.setState({
        [type]: value // будет `user: value`
    });
}
```

Есть [подробня статья](http://www.benmvp.com/learning-es6-enhanced-object-literals/) про это.