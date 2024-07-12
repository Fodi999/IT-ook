class Portfolio {
    private sections: HTMLElement[];
    private currentSectionIndex: number = 0;
    private isThrottled: boolean = false;

    constructor() {
        this.sections = Array.from(document.querySelectorAll('.fullscreen-section'));
        this.init();
    }

    private init() {
        window.addEventListener('wheel', (event) => this.onScroll(event));
        this.addClickHandlers();
    }

    private onScroll(event: WheelEvent) {
        if (this.isThrottled) return;
        this.isThrottled = true;

        if (event.deltaY > 0) {
            this.scrollToNextSection();
        } else {
            this.scrollToPreviousSection();
        }

        setTimeout(() => {
            this.isThrottled = false;
        }, 1000); // Adjust the timeout to control the scroll speed
    }

    private scrollToNextSection() {
        if (this.currentSectionIndex < this.sections.length - 1) {
            this.currentSectionIndex++;
            this.scrollToCurrentSection();
        }
    }

    private scrollToPreviousSection() {
        if (this.currentSectionIndex > 0) {
            this.currentSectionIndex--;
            this.scrollToCurrentSection();
        }
    }

    private scrollToCurrentSection() {
        this.sections[this.currentSectionIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    private addClickHandlers() {
        const clickableText = document.querySelectorAll('.clickable');
        clickableText.forEach((element) => {
            element.addEventListener('click', () => {
                const link = element.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Portfolio();
});













