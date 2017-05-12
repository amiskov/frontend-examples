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

Нужно перебрать каждую статью и вернуть только массив объектов для формирования селекта. Чтоб в `<option>` были айдишник для `value` и `title` для текста:

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