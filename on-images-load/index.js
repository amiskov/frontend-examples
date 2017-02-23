import $ from 'jquery';

/**
 * Waits until images are loaded
 *
 * @param $images jQuery collection of images
 * @example
 * // Show alert message after images loading
 * onImagesLoad($('img')).done(function() { alert('Loaded'); });
 * @returns {Promise} jQuery Deferred Promise Object
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
    // У нас есть массив промисов для каждой картинки и через .apply мы каждый его элемент передадим как аргумент:
    $.when.apply($, imgPromises).done(function () {
        mainDeferred.resolve();
    });

    return mainDeferred.promise();
}

