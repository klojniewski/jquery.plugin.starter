/*global jQuery */
(function ($) {
    "use strict";
    var pluginName  =   "pluginName",
        defaults    =   {
            defaultOptionName:       'defaultOptionValue'
        };
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.$element = $(this.element);
        this.options = options;
        this.metadata = this.$element.data('options');
        this.settings = $.extend({}, defaults, this.options, this.metadata);
        this.init();
    }
    Plugin.prototype = {
        init: function () {
            this.somePrivateMethod();
            this.otherPrivateMethod();
        },
        somePrivateMethod: function () {
            var that = this;
            that.$element.find('input').on("change", function () {
                that.$element.find('.' + that.settings.defaultOptionName).removeClass(that.settings.defaultOptionName);
            });
        },
        otherPrivateMethod: function () {
            return false;
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));