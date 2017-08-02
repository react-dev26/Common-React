'use strict';
class MatterportTour {
  constructor($iframes, $toggles) {
    this.$iframes = $iframes;
    this.$toggles = $toggles;
    this.currentActiveTour = 0;
    this.attachHandlers();
  }

  attachHandlers() {
    const self = this;
    this.$toggles.click(function() {
      self.toggleActiveTour(this);
    });
  }

  toggleActiveTour(toggleButton) {
    this.deactivateTour();
    this.updateCurrentActiveTourIndex(toggleButton);
    this.activateTour();
  }

  updateCurrentActiveTourIndex(toggleButton) {
    this.currentActiveTour = $(toggleButton).index();
  }

  deactivateTour() {
    this.$iframes.eq(this.currentActiveTour).removeClass('active');
    this.$toggles.eq(this.currentActiveTour).removeClass('active');
  }

  activateTour() {
    this.$iframes.eq(this.currentActiveTour).addClass('active');
    this.$toggles.eq(this.currentActiveTour).addClass('active');
  }
}
