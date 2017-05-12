# Примеры синтаксического сахара ES2015+
## Возврат объекта из колбэка
Было:
```js
const options = this.props.articles.map(function(article) {
    return {
        label: article.title,
        value: article.id
    }
});
```

Стало:

```js
const options = this.props.articles.map(article => ({
    label: article.title,
    value: article.id
}));
```

Круглые скобки в `article => ({})` нужны, чтобы сказать интерпретатору, что это выражение, а не нотация тела функции-стрелки. Это выражение вычисляется и сразу мы получаем результат — объект.