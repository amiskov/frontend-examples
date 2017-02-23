import $ from 'jquery';

/**
 * Ждет загрузки пачки картинок.
 *
 * @param $images jQuery collection of images
 * @returns {Promise} jQuery Deferred Promise Object
 * @example
 * $.when($('img')).done(function() { alert('Loaded'); });
 */
function onImagesLoad($images) {
    const mainDeferred = $.Deferred(),
          imgPromises  = [];

    $images.each(function (i, img) {
        const imgDeferred = $.Deferred();

        $(img).on('load error', imgDeferred.resolve);

        imgPromises.push(imgDeferred.promise());
    });

    // $.when ждет промисов в аргументах.
    // У нас есть массив промисов для каждой картинки и через .apply мы каждый передадим как аргумент:
    $.when.apply($, imgPromises).done(function () {
        mainDeferred.resolve();
    });

    return mainDeferred.promise();
}

