(function() {
  var FeaturedPeople;

  FeaturedPeople = (function() {
    function FeaturedPeople() {
      this.featuredPeople = $('#featured-people');
      this.editorialProduct = this.featuredPeople.data("editorialProduct");
    }

    FeaturedPeople.prototype.reload = function(personalityId, editorialProduct) {
      if ($('.feature-container').get(0)) {
        return this.load(personalityId, editorialProduct);
      }
    };

    FeaturedPeople.prototype.load = function(personId, editorialProduct) {
      this.featuredPeople.find('.content').empty().append('<div class="related-people-spinner"></div>');
      this.spinner || (this.spinner = new BlueSpinner(this.featuredPeople.find('.related-people-spinner')[0]));
      this.spinner.start();
      if (!(personId === void 0 || editorialProduct === void 0)) {
        if (personId === void 0) {
          personId = 0;
        }
        return this.getPeople(personId, editorialProduct).done((function(_this) {
          return function(html) {
            _this.featuredPeople.find('.content').append(html);
            window.featuredPeopleLoaded = true;
            if ($(html).children().length > 0) {
              if (!window.Util.supportsCSS('object-fit')) {
                window.Util.applyObjectFitShim(_this.featuredPeople.find('.personality figure'));
              }
              _this.featuredPeople.data('featured-person-id', personId);
              _this.featuredPeople.show();
              return _this.clickHandler();
            } else {
              return _this.featuredPeople.hide();
            }
          };
        })(this)).always((function(_this) {
          return function() {
            return _this.spinner.stop();
          };
        })(this));
      }
    };

    FeaturedPeople.prototype.getPeople = function(personalityId, editorialProduct) {
      return $.ajax({
        url: "/consumer/cache/related-people/" + personalityId + "/" + editorialProduct,
        personalityPage: window.is_personality(),
        error: function(e) {}
      });
    };

    FeaturedPeople.prototype.inViewport = function() {
      return this.featuredPeople.isOnScreen(0.5, 0.5);
    };

    FeaturedPeople.prototype.clickHandler = function() {
      $('.feature-container').on('click', 'a.personality', function(e) {
        e.preventDefault();
        return window.location.href = $(this).attr('href');
      });
      $('.feature-container').on('contextmenu', 'a.personality', function(e) {
        return false;
      });
      return $('.feature-container').on('dragstart', 'a.personality', function(e) {
        return false;
      });
    };

    FeaturedPeople.prototype.setup = function() {
      if ($('.feature-container').length > 0) {
        window.featuredPeopleLoaded = true;
        window.featured.clickHandler();
        return true;
      }
      return $(document).on('Herosel.load', function(event, slide) {
        var $slide, newPersonId, personId;
        if (slide == null) {
          return true;
        }
        $slide = $(slide);
        newPersonId = $slide.data('personalityId');
        personId = $('#feature.container').data('featured-person-id');
        if (personId && personId !== newPersonId) {
          window.featured.load(newPersonId, $slide.data('editorialProduct'));
        }
        return true;
      });
    };

    return FeaturedPeople;

  })();

  window.FeaturedPeople = FeaturedPeople;

  $(document).on('ready', function() {
    var e;
    try {
      window.featured = new FeaturedPeople();
    } catch (error) {
      e = error;
    }
    return window.featured.setup();
  });

}).call(this);
