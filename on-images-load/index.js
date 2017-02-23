import $ from 'jquery';

function onImagesLoad($images) {
    const mainDeferred = $.Deferred(),
          imgPromises  = [];

    $images.each(function (i, img) {
        const imgDeferred = $.Deferred();

        $(img).on('load error', imgDeferred.resolve);

        imgPromises.push(imgDeferred.promise());
    });

    // С помощью .apply преобразуем массив промисов в аргументы для when
    $.when.apply($, imgPromises).done(function () {
        mainDeferred.resolve();
    });

    return mainDeferred.promise();
}

