/*!
 * jQuery.bounds
 * authors: Andrew Powell, Robert Krahn
 *
 * This version is adapted from Andrew Powell's bounds function in jQuery UI:
 * http://goo.gl/7ByPv
 *
 */

;(function($) {

    function Bounds() {}

    Bounds.prototype.left = Number.POSITIVE_INFINITY;
    Bounds.prototype.top = Number.POSITIVE_INFINITY;
    Bounds.prototype.right = Number.NEGATIVE_INFINITY;
    Bounds.prototype.bottom = Number.NEGATIVE_INFINITY;
    Bounds.prototype.width = function() { return this.right - this.left; };
    Bounds.prototype.height = function() { return this.bottom - this.toph; },
    Bounds.prototype.toString = function() { return JSON.stringify(this); };
    Bounds.prototype.show = function (ms) {
        var div = $('<div/>').css({
            position: 'absolute',
            left: this.left + 'px',
            top: this.top + 'px',
            width: (this.right - this.left) + 'px',
            height: (this.bottom - this.top) + 'px',
            outline: 'red 1px solid'
        }).appendTo('body');
        setTimeout(div.remove.bind(div), ms || 1000);
    };

    $.fn.bounds = function(options) {
        /*
         * Get the bounds of HTMLElement(s)
         * options: {withPadding: BOOL, withMargin: BOOL}
         */
        var withMargin = options && options.withMargin,
            withPadding = (options && options.withPadding) || withMargin,
            bounds = new Bounds();

        this.each(function (i,el) {
            var elQ = $(el),
                off = elQ.offset();
            if (withPadding) {
                off.right = off.left + elQ.outerWidth(withMargin);
                off.bottom = off.top + elQ.outerHeight(withMargin);
            } else {
                off.right = off.left + elQ.width();
                off.bottom = off.top + elQ.height();
            }
            if (off.left < bounds.left) {
                bounds.left = off.left;
            }
            if (off.top < bounds.top) {
                bounds.top = off.top;
            }
            if (off.right > bounds.right) {
                bounds.right = off.right;
            }
            if (off.bottom > bounds.bottom) {
                bounds.bottom = off.bottom;
            }
        });
        return bounds;
    };

})(jQuery);
