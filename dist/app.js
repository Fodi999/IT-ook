"use strict";
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.currentSectionIndex = 0;
        this.isThrottled = false;
        this.sections = Array.from(document.querySelectorAll('.fullscreen-section'));
        this.init();
    }
    Portfolio.prototype.init = function () {
        var _this = this;
        window.addEventListener('wheel', function (event) { return _this.onScroll(event); });
    };
    Portfolio.prototype.onScroll = function (event) {
        var _this = this;
        if (this.isThrottled)
            return;
        this.isThrottled = true;
        if (event.deltaY > 0) {
            this.scrollToNextSection();
        }
        else {
            this.scrollToPreviousSection();
        }
        setTimeout(function () {
            _this.isThrottled = false;
        }, 1000); // Adjust the timeout to control the scroll speed
    };
    Portfolio.prototype.scrollToNextSection = function () {
        if (this.currentSectionIndex < this.sections.length - 1) {
            this.currentSectionIndex++;
            this.scrollToCurrentSection();
        }
    };
    Portfolio.prototype.scrollToPreviousSection = function () {
        if (this.currentSectionIndex > 0) {
            this.currentSectionIndex--;
            this.scrollToCurrentSection();
        }
    };
    Portfolio.prototype.scrollToCurrentSection = function () {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    return Portfolio;
}());
document.addEventListener('DOMContentLoaded', function () {
    new Portfolio();
});
