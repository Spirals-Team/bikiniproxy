(function() {
  this.GTM = (function() {
    function GTM() {}

    GTM.addData = function(hash) {
      var data, k, results, v;
      results = [];
      for (k in hash) {
        v = hash[k];
        data = {
          event: k,
          value: v
        };
        results.push(window.dataLayer.push(data));
      }
      return results;
    };

    return GTM;

  })();

}).call(this);
(function() {
  var OmnitureTracking,
    hasProp = {}.hasOwnProperty;

  OmnitureTracking = (function() {
    function OmnitureTracking() {
      window.viewerProfile.feedImagesViewed = 0;
      window.viewerProfile.assetIdViewed = [];
      this.handlers();
      this.HEROSEL_SECTION = 'Hero';
      this.HEROSEL_QUEUE_SECTION = 'HeroQueue';
      this.FEATURED_SECTION = 'FeaturedPeople';
      this.FEED_SECTION = 'LatestTrending';
      this.EXPLORE_SECTION = 'ExploreMore';
      this.SEARCH_SECTION = 'GallerySearch';
      this.SHOW_MORE = 'GalleryShowMore';
      this.HEROSEL_IMAGE_VIEW_COUNT = '1';
      this.IMAGE_POSITION = '1';
    }

    OmnitureTracking.prototype.handlers = function() {
      return this.omnitureSendHandler();
    };

    OmnitureTracking.prototype.sendPageLoad = function(trackingData) {
      if ((typeof s !== "undefined" && s !== null ? s.t : void 0) == null) {
        return;
      }
      s.pageName = trackingData.pageName;
      s.eVar26 = trackingData.editorialProduct;
      s.eVar25 = trackingData.pageTitle;
      s.prop65 = s.prop52 = window.localStorage.prevLocation;
      s.prop67 = 'Hero';
      s.events = "Event71,Event65=1";
      s.t();
      return s.prop65 = s.prop52 = window.localStorage.prevLocation = '';
    };

    OmnitureTracking.prototype.sendTrackingInfo = function(sectionImageAppears, numberofImagesViewed, eventString, props) {
      var assetId, key, sProps, value;
      if (numberofImagesViewed == null) {
        numberofImagesViewed = 1;
      }
      if (props == null) {
        props = {};
      }
      if ((typeof s !== "undefined" && s !== null ? s.tl : void 0) == null) {
        return;
      }
      assetId = window.viewerProfile.currentAssetId ? window.viewerProfile.currentAssetId.toString() : window.viewerProfile.assetId;
      sProps = ['channel', 'events', 'prop10', 'eVar10', 'eVar25', 'eVar26', 'prop29', 'eVar29', 'eVar47', 'eVar68', 'prop67', 'prop70'].concat(Object.keys(props));
      s.linkTrackVars = sProps.join(',');
      s.linkTrackEvents = numberofImagesViewed > 0 && !props.linkTrackevents ? "Event65" : "";
      s.events = numberofImagesViewed > 0 && !props.events ? "Event65=" + numberofImagesViewed : "";
      s.linkName = eventString;
      s.eVar25 = window.viewerProfile.pageTitle;
      s.prop29 = s.eVar29 = assetId;
      s.eVar47 = window.tracking_data.page_name;
      s.eVar68 = props['eVar68'];
      s.prop67 = sectionImageAppears;
      for (key in props) {
        if (!hasProp.call(props, key)) continue;
        value = props[key];
        s[key] = value;
      }
      s.tl(true, 'o', eventString);
      return true;
    };

    OmnitureTracking.prototype.sendShareTrackingInfo = function(eventString, assetId) {
      if ((typeof s !== "undefined" && s !== null ? s.tl : void 0) == null) {
        return;
      }
      s.linkTrackVars = 'channel,events,prop10,eVar10,prop29,eVar29,eVar47,customLink';
      s.linkTrackEvents = s.events = "Event44";
      s.linkName = eventString;
      s.prop29 = s.eVar29 = assetId.toString();
      s.eVar47 = window.tracking_data.page_name;
      s.tl(true, 'o', eventString);
      return true;
    };

    OmnitureTracking.prototype.sendNavHeaderInfo = function(eventString, section) {
      if ((typeof s !== "undefined" && s !== null ? s.tl : void 0) == null) {
        return;
      }
      s.linkTrackVars = 'channel,events,prop10,eVar10,eVar25,eVar26,eVar47,prop70,customLink';
      s.linkTrackEvents = s.events = "Event94";
      s.linkName = eventString;
      s.eVar26 = window.viewerProfile.editorialProduct;
      s.eVar47 = window.tracking_data.page_name;
      s.prop70 = 'D=s_vi';
      s.tl(true, 'o', eventString);
      return true;
    };

    OmnitureTracking.prototype.omnitureSendHandler = function() {
      return $(document).on('track.siteCatalystBeforeSend', (function(_this) {
        return function(e, data) {
          var activeEventExperience, event102, event120, omnitureVars;
          event120 = (window.featuredPeopleLoaded != null) && window.featuredPeopleLoaded ? ",Event120" : "";
          event102 = (window.electionLoaded != null) && window.electionLoaded ? "" : ",Event102";
          omnitureVars = {};
          omnitureVars.events = "Event71,Event65=" + (!s.events ? _this.HEROSEL_IMAGE_VIEW_COUNT : void 0) + event120 + event102;
          omnitureVars.eVar29 = omnitureVars.prop29 = $('#herosel').attr('data-asset-id');
          omnitureVars.eVar26 = window.viewerProfile.editorialProduct;
          omnitureVars.eVar25 = window.viewerProfile.pageTitle;
          omnitureVars.eVar18 = window.tracking_data.nav;
          omnitureVars.eVar23 = window.tracking_data.nav;
          omnitureVars.eVar24 = window.tracking_data.nav;
          omnitureVars.prop65 = omnitureVars.prop52 = window.localStorage.prevLocation;
          omnitureVars.prop67 = 'Hero';
          if (ExperienceTracking.getActiveEventExperience() != null) {
            activeEventExperience = ExperienceTracking.getActiveEventExperience();
            omnitureVars.eVar49 = activeEventExperience;
            omnitureVars.prop49 = activeEventExperience;
          }
          $.extend(data.s, omnitureVars);
          $.extend(data.pageTrackingVariables, omnitureVars);
          return window.localStorage.prevLocation = '';
        };
      })(this));
    };

    return OmnitureTracking;

  })();

  $(function() {
    return window.omnitureTracking = new OmnitureTracking();
  });

}).call(this);
(function() {
  var AdAssetViewed, AssetEmbedded, AssetShared, AssetViewed, FeaturedPeopleInteracted, FeaturedPeopleViewed, FeedsInteracted, FeedsModalInteracted, HeroselInteracted, HeroselModalInteracted, HeroselQueueInteracted, SearchResultsClicked, SearchResultsViewed, SpectrumEvent,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  SpectrumEvent = (function() {
    SpectrumEvent.send = function(data) {
      $.post(window.tracking_data.spectrum_host_three + "signals", JSON.stringify(data));
      return true;
    };

    function SpectrumEvent(trackingContext) {
      var defaults;
      defaults = this.SIGNAL_DEFAULTS || {};
      this.signal = {
        event: defaults.event,
        source: 'getty',
        properties: {
          sub_source: 'gallery',
          page_name: 'blue page',
          url: trackingContext.url,
          referer: trackingContext.referer,
          user_id: trackingContext.userid,
          visitor_id: trackingContext.visitor_id,
          session_id: trackingContext.spectrum_session_id,
          correlation_id: trackingContext.request_id
        }
      };
      this.signal.properties = this.extend(this.signal.properties, defaults.properties);
    }

    SpectrumEvent.prototype.extend = function(object, overrides) {
      var key, val;
      if (overrides) {
        for (key in overrides) {
          val = overrides[key];
          object[key] = val;
        }
      }
      return object;
    };

    SpectrumEvent.prototype.send = function() {
      return this.constructor.send([this.signal]);
    };

    return SpectrumEvent;

  })();

  SearchResultsClicked = (function(superClass) {
    extend(SearchResultsClicked, superClass);

    SearchResultsClicked.prototype.SIGNAL_DEFAULTS = {
      event: 'Search Results Clicked',
      properties: {
        ui_module: 'search results',
        asset_family: 'Editorial'
      }
    };

    function SearchResultsClicked(context, assetId, phrase, resultsCount) {
      SearchResultsClicked.__super__.constructor.call(this, context);
      this.signal.properties.asset_id = String(assetId);
      this.signal.properties.phrase = phrase;
      this.signal.properties.total_number_of_results = resultsCount;
    }

    return SearchResultsClicked;

  })(SpectrumEvent);

  SearchResultsViewed = (function(superClass) {
    extend(SearchResultsViewed, superClass);

    SearchResultsViewed.prototype.SIGNAL_DEFAULTS = {
      event: 'Search Results Viewed',
      properties: {
        ui_module: 'search results',
        asset_family: 'Editorial'
      }
    };

    function SearchResultsViewed(context, phrase, resultsCount) {
      SearchResultsViewed.__super__.constructor.call(this, context);
      this.signal.properties.phrase = phrase;
      this.signal.properties.total_number_of_results = resultsCount;
    }

    return SearchResultsViewed;

  })(SpectrumEvent);

  HeroselInteracted = (function(superClass) {
    extend(HeroselInteracted, superClass);

    HeroselInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Herosel Interacted',
      properties: {
        ui_module: 'herosel'
      }
    };

    function HeroselInteracted(context, uiAction, assetId) {
      HeroselInteracted.__super__.constructor.call(this, context);
      this.signal.properties.ui_action = uiAction;
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
    }

    return HeroselInteracted;

  })(SpectrumEvent);

  HeroselQueueInteracted = (function(superClass) {
    extend(HeroselQueueInteracted, superClass);

    HeroselQueueInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Herosel Queue Interacted',
      properties: {
        ui_module: 'herosel queue'
      }
    };

    function HeroselQueueInteracted(context, uiAction, assetId) {
      HeroselQueueInteracted.__super__.constructor.call(this, context);
      this.signal.properties.ui_action = uiAction;
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
    }

    return HeroselQueueInteracted;

  })(SpectrumEvent);

  HeroselModalInteracted = (function(superClass) {
    extend(HeroselModalInteracted, superClass);

    HeroselModalInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Herosel Modal Interacted',
      properties: {
        ui_module: 'herosel modal'
      }
    };

    function HeroselModalInteracted(context, uiAction, assetId) {
      HeroselModalInteracted.__super__.constructor.call(this, context);
      this.signal.properties.ui_action = uiAction;
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
    }

    return HeroselModalInteracted;

  })(SpectrumEvent);

  FeaturedPeopleInteracted = (function(superClass) {
    extend(FeaturedPeopleInteracted, superClass);

    FeaturedPeopleInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Featured People Interacted',
      properties: {
        ui_module: 'featured people',
        ui_action: 'asset clicked'
      }
    };

    function FeaturedPeopleInteracted(context, personalityId, assetId1) {
      this.assetId = assetId1;
      FeaturedPeopleInteracted.__super__.constructor.call(this, context);
      this.signal.properties.personality_id = personalityId;
      if (assetId) {
        this.signal.properties.asset_id = String(this.assetId);
      }
    }

    return FeaturedPeopleInteracted;

  })(SpectrumEvent);

  FeaturedPeopleViewed = (function(superClass) {
    extend(FeaturedPeopleViewed, superClass);

    function FeaturedPeopleViewed() {
      return FeaturedPeopleViewed.__super__.constructor.apply(this, arguments);
    }

    FeaturedPeopleViewed.prototype.SIGNAL_DEFAULTS = {
      event: 'Featured People Interacted',
      properties: {
        ui_module: 'featured people',
        ui_action: 'featured people viewed'
      }
    };

    return FeaturedPeopleViewed;

  })(SpectrumEvent);

  FeedsInteracted = (function(superClass) {
    extend(FeedsInteracted, superClass);

    FeedsInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Feeds Interacted',
      properties: {
        ui_module: 'feeds',
        ui_action: 'asset clicked'
      }
    };

    function FeedsInteracted(context, assetId) {
      FeedsInteracted.__super__.constructor.call(this, context);
      this.signal.properties.asset_id = String(assetId);
    }

    return FeedsInteracted;

  })(SpectrumEvent);

  FeedsModalInteracted = (function(superClass) {
    extend(FeedsModalInteracted, superClass);

    FeedsModalInteracted.prototype.SIGNAL_DEFAULTS = {
      event: 'Feeds Modal Interacted',
      properties: {
        ui_module: 'feeds modal'
      }
    };

    function FeedsModalInteracted(context, uiAction, assetId) {
      FeedsModalInteracted.__super__.constructor.call(this, context);
      this.signal.properties.ui_action = uiAction;
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
    }

    return FeedsModalInteracted;

  })(SpectrumEvent);

  AdAssetViewed = (function(superClass) {
    extend(AdAssetViewed, superClass);

    AdAssetViewed.prototype.SIGNAL_DEFAULTS = {
      event: 'AdAsset Viewed'
    };

    function AdAssetViewed(context, uiModule, assetId1, paid_ad, ad_size, advertiser_id, campaign_id, creative_id, line_item_id) {
      this.assetId = assetId1;
      AdAssetViewed.__super__.constructor.call(this, context);
      this.signal.properties.ui_module = uiModule;
      if (assetId) {
        this.signal.properties.asset_id = String(this.assetId);
      }
      this.signal.properties.paid_ad = paid_ad;
      this.signal.properties.ad_size = String(ad_size);
      this.signal.properties.advertiser_id = String(advertiser_id);
      this.signal.properties.campaign_id = String(campaign_id);
      this.signal.properties.creative_id = String(creative_id);
      this.signal.properties.line_item_id = String(line_item_id);
    }

    return AdAssetViewed;

  })(SpectrumEvent);

  AssetViewed = (function(superClass) {
    extend(AssetViewed, superClass);

    AssetViewed.prototype.SIGNAL_DEFAULTS = {
      event: 'Asset Viewed'
    };

    function AssetViewed(context, uiModule, assetId1) {
      this.assetId = assetId1;
      AssetViewed.__super__.constructor.call(this, context);
      this.signal.properties.ui_module = uiModule;
      if (this.assetId) {
        this.signal.properties.asset_id = String(this.assetId);
      }
    }

    return AssetViewed;

  })(SpectrumEvent);

  AssetShared = (function(superClass) {
    extend(AssetShared, superClass);

    AssetShared.prototype.SIGNAL_DEFAULTS = {
      event: 'Asset Shared'
    };

    function AssetShared(trackingContext, uiModule, sharedDestination, assetId) {
      AssetShared.__super__.constructor.call(this, trackingContext);
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
      this.signal.properties.ui_module = uiModule;
      this.signal.properties.shared_destination = sharedDestination;
    }

    return AssetShared;

  })(SpectrumEvent);

  AssetEmbedded = (function(superClass) {
    extend(AssetEmbedded, superClass);

    AssetEmbedded.prototype.SIGNAL_DEFAULTS = {
      event: 'Asset Embedded'
    };

    function AssetEmbedded(trackingContext, uiModule, assetId, assetType, is360) {
      AssetEmbedded.__super__.constructor.call(this, trackingContext);
      if (assetId) {
        this.signal.properties.asset_id = String(assetId);
      }
      this.signal.properties.ui_module = uiModule;
      this.signal.properties.content_type = this.content_type(assetType, is360);
      this.signal.properties.version = "2";
    }

    AssetEmbedded.prototype.content_type = function(assetType, is360) {
      if (assetType === "image") {
        if (is360) {
          return "three-sixty image";
        } else {
          return "still image";
        }
      }
    };

    return AssetEmbedded;

  })(SpectrumEvent);

  window.spectrumEvents = {
    SpectrumEvent: SpectrumEvent,
    SearchResultsClicked: SearchResultsClicked,
    SearchResultsViewed: SearchResultsViewed,
    HeroselInteracted: HeroselInteracted,
    HeroselQueueInteracted: HeroselQueueInteracted,
    HeroselModalInteracted: HeroselModalInteracted,
    FeaturedPeopleInteracted: FeaturedPeopleInteracted,
    FeaturedPeopleViewed: FeaturedPeopleViewed,
    FeedsInteracted: FeedsInteracted,
    FeedsModalInteracted: FeedsModalInteracted,
    AssetViewed: AssetViewed,
    AssetShared: AssetShared,
    AssetEmbedded: AssetEmbedded,
    AdAssetViewed: AdAssetViewed
  };

}).call(this);
(function() {
  $(document).safeReady(function() {
    window.observerRegistrationService.add('omni-explore-more-viewed', function() {
      if (!window.explore.inViewport()) {
        return false;
      }
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.EXPLORE_SECTION, 0, 'ExploreMoreView', {
        'events': 'Event72'
      });
    });
    return $('#explore').on('click', function(e) {
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.EXPLORE_SECTION, 0, 'ExploreMore', {
        'events': 'Event28'
      });
    });
  });

}).call(this);
(function() {
  var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  $(document).safeReady(function() {
    var feedCheckRoyaltyAdViewed, feedCheckViewed, getHeroselSlideInfo;
    if ((window.herosel != null) && (window.feed != null)) {
      feedCheckViewed = function() {
        var assetIds, id, signals;
        assetIds = Object.keys(window.feed.unviewedImages).filter(function(id) {
          return $("figure[data-id=" + id + "]").isOnScreen(0.5, 0.5) && (delete window.feed.unviewedImages[id]);
        });
        if (!((typeof s !== "undefined" && s !== null) && assetIds.length > 0)) {
          return false;
        }
        signals = (function() {
          var i, len, results;
          results = [];
          for (i = 0, len = assetIds.length; i < len; i++) {
            id = assetIds[i];
            results.push(new spectrumEvents.AssetViewed(window.tracking_data, 'feeds', id).signal);
          }
          return results;
        })();
        spectrumEvents.SpectrumEvent.send(signals);
        window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.FEED_SECTION, assetIds.length, 'PageScroll');
        return false;
      };
      window.observerRegistrationService.add("feed-items-viewed", feedCheckViewed);
      feedCheckRoyaltyAdViewed = function() {
        var ad, adSize, advertiserId, assetIds, campaignId, creativeId, id, lineItemId, paidAd, ref, signals, value;
        assetIds = {};
        signals = [];
        ref = window.feed.royaltyAds;
        for (id in ref) {
          value = ref[id];
          ad = $("figure[data-ad-id=" + id + "]");
          if (ad.isOnScreen(0.5, 0.5)) {
            advertiserId = ad.attr('data-ad-advertiser-id');
            paidAd = window.paidAd(advertiserId);
            campaignId = ad.attr('data-ad-campaign-id');
            creativeId = ad.attr('data-ad-creative-id');
            adSize = ad.attr('data-ad-size');
            lineItemId = ad.attr('data-ad-line-item-id');
            delete window.feed.royaltyAds[id];
            signals.push(new spectrumEvents.AdAssetViewed(window.tracking_data, 'feeds', id, paidAd, adSize, advertiserId, campaignId, creativeId, lineItemId).signal);
          }
        }
        if (signals.length > 0) {
          spectrumEvents.SpectrumEvent.send(signals);
        }
        return false;
      };
      window.observerRegistrationService.add("feed-royalty-ads-viewed", feedCheckRoyaltyAdViewed);
      $(document).on('feed.addCards', function(e, newCards) {
        var i, id, len, results;
        if (e.namespace === 'addCards') {
          results = [];
          for (i = 0, len = newCards.length; i < len; i++) {
            id = newCards[i];
            results.push(window.feed.unviewedImages[id] = 1);
          }
          return results;
        }
      });
      $(document).on('feed.feedModal', function(e) {
        var alreadyViewed, feedItemId, ref, slide;
        slide = window.feedModal.karousel.currentSlide();
        ref = getHeroselSlideInfo(slide), feedItemId = ref[0], alreadyViewed = ref[1];
        new spectrumEvents.FeedsInteracted(window.tracking_data, feedItemId).send();
        new spectrumEvents.FeedsModalInteracted(window.tracking_data, 'feed modal loaded', feedItemId).send();
        if (alreadyViewed || !feedItemId) {
          return true;
        }
        window.viewerProfile.currentAssetId = feedItemId;
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.FEED_SECTION, 0, 'GalleryLatestZoom', {
          'events': 'Event92',
          'eVar25': window.viewerProfile.pageTitle
        });
      });
      $('#modal').on('karousel.slideChanged', '#feed-modal-slider', function(e) {
        var alreadyViewed, feedItemId, ref, slide;
        slide = window.feedModal.karousel.currentSlide();
        ref = getHeroselSlideInfo(slide), feedItemId = ref[0], alreadyViewed = ref[1];
        if (alreadyViewed || !feedItemId) {
          return true;
        }
        window.viewerProfile.currentAssetId = feedItemId;
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.FEED_SECTION, 1, 'GalleryLatestZoom', {
          'eVar25': window.viewerProfile.pageTitle
        });
      });
      $(document).on('feed.showMore', function(e) {
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.SHOW_MORE, 0, 'ShowMore', {
          'events': 'Event102'
        });
      });
      $(window).on('load', function() {
        var alreadyViewed, assetId, ref;
        ref = getHeroselSlideInfo(), assetId = ref[0], alreadyViewed = ref[1];
        if (alreadyViewed || !assetId) {
          return true;
        }
        new spectrumEvents.AssetViewed(window.tracking_data, 'herosel', assetId).send();
        window.viewerProfile.assetIdViewed.push(assetId);
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 1, 'Herosel');
      });
      $('#herosel').on('karousel.prevClicked karousel.nextClicked', function(e) {
        var sectionName;
        new spectrumEvents.HeroselInteracted(window.tracking_data, 'arrow clicked').send();
        sectionName = e.namespace === "nextClicked" ? 'Gallery-Hero Right' : 'Gallery-Hero Left';
        return window.omnitureTracking.sendTrackingInfo(sectionName, 0, 'ArrowClick', {
          'prop54': sectionName,
          'events': 'Event16'
        });
      });
      $('#herosel').on('caption-expanded', function(e) {
        e.preventDefault();
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'Gallery-Hero Click-Right', {
          'events': 'Event27'
        });
      });
      $('#herosel').on('caption-collapsed', function(e) {
        e.preventDefault();
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'Gallery-Hero Click-Right', {
          'events': 'Event26'
        });
      });
      $(document).on('Gallery.desktopPopup', function(e) {
        var alreadyViewed, assetId, ref, slide;
        slide = window.modalHerosel.karousel.currentSlide();
        ref = getHeroselSlideInfo(slide), assetId = ref[0], alreadyViewed = ref[1];
        new spectrumEvents.HeroselInteracted(window.tracking_data, 'herosel item clicked', assetId).send();
        new spectrumEvents.HeroselModalInteracted(window.tracking_data, 'herosel modal opened').send();
        window.viewerProfile.currentAssetId = assetId;
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'GalleryHeroZoom', {
          'events': 'Event92'
        });
      });
      getHeroselSlideInfo = function(slide) {
        var isViewed;
        slide = slide || (slide = window.herosel.karousel.currentSlide());
        isViewed = slide.hasClass('viewed');
        if (!isViewed) {
          slide.addClass('viewed');
        }
        return [slide.data('asset-id'), isViewed];
      };
      $('#herosel').on('karousel.slideChanged karousel.slidesReplaced', function(e) {
        var alreadyViewed, assetId, events, linkTrackEvents, ref;
        ref = getHeroselSlideInfo(), assetId = ref[0], alreadyViewed = ref[1];
        if (alreadyViewed || !assetId) {
          return true;
        }
        if (indexOf.call(window.viewerProfile.assetIdViewed, assetId) >= 0) {
          return true;
        }
        new spectrumEvents.AssetViewed(window.tracking_data, 'herosel', assetId).send();
        window.viewerProfile.assetIdViewed.push(assetId);
        window.viewerProfile.currentAssetId = assetId;
        window.viewerProfile.pageTitle = $('.title-slide h1').context.title;
        if (window.herosel.karousel.currentSlide().prev().hasClass('interstitial')) {
          events = 'Event71,Event65=1';
          linkTrackEvents = 'Event71,Event65';
        } else {
          linkTrackEvents = 'Event65';
          events = 'Event65=1';
        }
        return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 1, 'Herosel', {
          'events': events,
          'linkTrackEvents': linkTrackEvents
        });
      });
      $('#modal').on('karousel.prevClicked karousel.nextClicked', '#modal-herosel', function(e) {
        return new spectrumEvents.HeroselModalInteracted(window.tracking_data, 'arrow clicked').send();
      });
      $('#modal').on('karousel.slideClicked', '#modal-herosel', function(e, assetId) {
        new spectrumEvents.HeroselModalInteracted(window.tracking_data, 'herosel modal item clicked', assetId).send();
        return true;
      });
      $('#modal').on('ModalClose', function(e) {
        if ($(this).find('#modal-herosel').length === 1) {
          return new spectrumEvents.HeroselModalInteracted(window.tracking_data, 'herosel modal closed').send();
        }
      });
      $('#modal').on('karousel.slideChanged', '#modal-herosel', function(e) {
        var alreadyViewed, assetId, events, linkTrackEvents, modalSlide, ref;
        modalSlide = window.modalHerosel.karousel.currentSlide();
        ref = getHeroselSlideInfo(modalSlide), assetId = ref[0], alreadyViewed = ref[1];
        if (alreadyViewed || !assetId) {
          return true;
        }
        if (indexOf.call(window.viewerProfile.assetIdViewed, assetId) >= 0) {
          return true;
        }
        new spectrumEvents.AssetViewed(window.tracking_data, 'herosel modal', assetId).send();
        window.viewerProfile.assetIdViewed.push(assetId);
        window.viewerProfile.currentAssetId = assetId;
        window.viewerProfile.pageTitle = $('.title-slide h1').last().context.title;
        events = 'Event65=1';
        linkTrackEvents = 'Event65';
        if (modalSlide.prev().hasClass('interstitial')) {
          events = 'Event71,Event65=1';
          linkTrackEvents = 'Event71,Event65';
          window.viewerProfile.pageTitle = modalSlide.prev().find('.title').context.title;
        }
        window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'GalleryHeroselZoom', {
          'events': events,
          'linkTrackEvents': linkTrackEvents
        });
        return true;
      });
      $('#modal').on('click', '.main-carousel .embed-btn', function(e) {
        var assetId, assetType, is360Image;
        assetId = String(window.modalHerosel.karousel.currentSlide().data().assetId);
        assetType = String(window.herosel.karousel.currentSlide().data().assetType);
        is360Image = window.herosel.karousel.currentSlide().data().is360Image;
        new spectrumEvents.AssetEmbedded(window.tracking_data, 'herosel modal', assetId, assetType, is360Image).send();
        return window.omnitureTracking.sendShareTrackingInfo('EmbedIconGallery', window.modalHerosel.karousel.currentSlide().data().assetId);
      });
      $('#modal').on('karousel.prevClicked karousel.nextClicked', '#feed-modal-slider', function(e) {
        var assetId;
        assetId = window.feedModal.karousel.currentSlide().data().assetId;
        return new spectrumEvents.FeedsModalInteracted(window.tracking_data, 'arrow clicked', assetId).send();
      });
      $('#modal').on('karousel.slideClicked', '#feed-modal-slider', function(e) {
        var assetId;
        assetId = window.feedModal.karousel.currentSlide().data().assetId;
        return new spectrumEvents.FeedsModalInteracted(window.tracking_data, 'image clicked', assetId).send();
      });
      $('#modal').on('ModalClose', function(e, elem) {
        var assetId;
        if (elem.id === 'feed-modal-slider') {
          assetId = window.feedModal.karousel.currentSlide().data().assetId;
          return new spectrumEvents.FeedsModalInteracted(window.tracking_data, 'feed modal closed', assetId).send();
        }
      });
      return $('#feed-modal-slider').on('karousel.slideChanged', function(e) {
        var alreadyViewed, assetId, ref;
        ref = getHeroselSlideInfo(), assetId = ref[0], alreadyViewed = ref[1];
        if (alreadyViewed || !assetId) {
          return true;
        }
        if ((assetId != null) && window.viewerProfile.assetIdViewed.indexOf(assetId) === -1) {
          window.viewerProfile.assetIdViewed.push(assetId);
          window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.FEED_SECTION, 1, 'FeedModal');
        }
        return true;
      });
    }
  });

}).call(this);
(function() {
  $(document).safeReady(function() {
    $('#herosel-queue-carousel').on('karousel.nextClicked karousel.prevClicked', function(e) {
      var sectionName;
      new spectrumEvents.HeroselQueueInteracted(window.tracking_data, 'arrow clicked').send();
      sectionName = e.namespace === "nextClicked" ? 'Gallery-Arrow Right' : 'Gallery-Arrow Left';
      return window.omnitureTracking.sendTrackingInfo(sectionName, 0, 'ArrowClick', {
        'prop54': sectionName,
        'events': 'Event16'
      });
    });
    $('#herosel-queue-carousel').on('karousel.slideClicked', function(e, assetId) {
      new spectrumEvents.HeroselQueueInteracted(window.tracking_data, 'queue item clicked', assetId).send();
      return window.localStorage.prevLocation = 'Heroqueue';
    });
    return window.observerRegistrationService.add('herosel-queue-viewed', function() {
      if (!((typeof s !== "undefined" && s !== null) && $('#herosel-queue-carousel').isOnScreen(0.5, 0.5))) {
        return false;
      }
      new spectrumEvents.HeroselQueueInteracted(window.tracking_data, 'herosel queue viewed').send();
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_QUEUE_SECTION, 0, 'GalleryHeroqueueView', {
        'prop54': 'GalleryHeroqueueView',
        'events': 'Event74'
      });
    });
  });

}).call(this);
(function() {
  $(document).safeReady(function() {
    $(document).on('navHeader.Open', function(e, section) {
      return window.omnitureTracking.sendNavHeaderInfo('GalleryOpenTopNav', section);
    });
    $('#primary-nav .contents').on('click', 'a.header-link', function(e) {
      return window.localStorage.prevLocation = "nav_consumer_" + ($(this).data('slug'));
    });
    $('#secondary-nav').on('click', 'a', function(e) {
      return window.omnitureTracking.sendTrackingInfo('Follow', 0, e.currentTarget.id, {
        'events': 'Event113'
      });
    });
    return $('#promotion-nav').on('click', 'a', function(e) {
      return window.localStorage.prevLocation = "nav_consumer_" + ($(this).data('slug'));
    });
  });

}).call(this);
(function() {
  $(document).ready(function() {
    var eventExperience, ref;
    eventExperience = (ref = window.ExperienceTracking) != null ? ref.getActiveEventExperience() : void 0;
    if (eventExperience) {
      if (!window.gettyAdvertisementExtraAdViewedTrackingValues) {
        window.gettyAdvertisementExtraAdViewedTrackingValues = {};
      }
      window.gettyAdvertisementExtraAdViewedTrackingValues.prop49 = eventExperience;
      return window.gettyAdvertisementExtraAdViewedTrackingValues.eVar49 = eventExperience;
    }
  });

  $(document).safeReady(function() {
    return $(document).on('Gallery.galleryLoad', function(e, trackingData) {
      window.tracking_data.page_name = trackingData.pageName;
      window.viewerProfile.currentAssetId = trackingData.assetId;
      window.viewerProfile.pageTitle = trackingData.pageTitle;
      window.viewerProfile.editorialProduct = trackingData.editorialProduct;
      return window.omnitureTracking.sendPageLoad(trackingData);
    });
  });

}).call(this);
(function() {
  $(document).safeReady(function() {
    $('#featured-people').on('click', '.personality', function(e) {
      var personality;
      personality = $(e.target).closest('.personality');
      new spectrumEvents.FeaturedPeopleInteracted(window.tracking_data, personality.data('personality-id'), personality.data('asset-id')).send();
      return window.localStorage.prevLocation = 'Body_Consumer_FeaturedAthletes';
    });
    return window.observerRegistrationService.add('featured-people-viewed', function() {
      var visiblePeople;
      visiblePeople = $('.feature-container').find('img:visible');
      if (!((typeof s !== "undefined" && s !== null) && (visiblePeople.length > 0) && $(visiblePeople[0]).isOnScreen(0.5, 0.5))) {
        return false;
      }
      window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.FEATURED_SECTION, 0, 'PageScroll', {
        'events': 'Event120'
      });
      new spectrumEvents.FeaturedPeopleViewed(window.tracking_data).send();
      return true;
    });
  });

}).call(this);
(function() {
  var setUpRoyaltyTracking;

  setUpRoyaltyTracking = function(assetSelector, extraEventsToTriggerRoyaltyTracking) {
    var eventName, i, len, results, trackRoyalties;
    if (extraEventsToTriggerRoyaltyTracking == null) {
      extraEventsToTriggerRoyaltyTracking = [];
    }
    trackRoyalties = function() {
      if (window.gettyAdLoader == null) {
        return;
      }
      return $(".ad-container").each(function(index, adContainer) {
        return $(assetSelector + "[data-asset-id]:not(.royalty-tracked)").add($(assetSelector + " *[data-asset-id]:not(.royalty-tracked)")).filter(function(index, element) {
          return $(element).isOnScreen(0.2, 0.5);
        }).each(function(index, element) {
          $(element).addClass("royalty-tracked");
          $(document).trigger("ad.royalties", $(element).data("asset-id"));
          return true;
        });
      });
    };
    $(document).on("ad.rendered", function() {
      trackRoyalties();
      return true;
    });
    window.observerRegistrationService.add("royaltyTrackingListener", function() {
      trackRoyalties();
      return false;
    });
    results = [];
    for (i = 0, len = extraEventsToTriggerRoyaltyTracking.length; i < len; i++) {
      eventName = extraEventsToTriggerRoyaltyTracking[i];
      results.push($(document).on(eventName, function() {
        trackRoyalties();
        return true;
      }));
    }
    return results;
  };

  $(document).ready(function() {
    switch (ExperienceTracking.getActiveEventExperience()) {
      case "BluePage-ExpA":
        return setUpRoyaltyTracking(".main-gallery");
      case "BluePage-ExpB":
        return setUpRoyaltyTracking(".simple-herosel .swiper-slide-active", ["simple-herosel.slide-change"]);
      default:
        return setUpRoyaltyTracking(".main-carousel .carousel-current", ["Herosel.slideChanged"]);
    }
  });

}).call(this);
(function() {
  $(document).safeReady(function() {
    return $(document).on('search-results-loaded', function(_e, phrase, resultsCount) {
      var props;
      window.searchResults || (window.searchResults = {});
      window.searchResults.phrase = phrase;
      window.searchResults.resultsCount = resultsCount;
      new spectrumEvents.SearchResultsViewed(window.tracking_data, window.searchResults.phrase, window.searchResults.resultsCount).send();
      props = {
        'events': 'Event85',
        'prop2': window.searchResults.phrase,
        'eVar2': window.searchResults.phrase,
        'eVar23': 'GallerySearch',
        'eVar24': 'GallerySearch',
        'eVar29': '',
        'prop29': ''
      };
      window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.SEARCH_SECTION, 0, 'GallerySearch', props);
      return $('div.search-results-grid-item').find('img').on('click', function() {
        return new spectrumEvents.SearchResultsClicked(window.tracking_data, this.getAttribute('data-asset-id'), window.searchResults.phrase, window.searchResults.resultsCount).send();
      });
    });
  });

}).call(this);
(function() {
  $(document).safeReady(function() {
    $(document).on('bluePage.trackSocial', function(e, section, socialApp, assetId) {
      if (assetId != null) {
        new spectrumEvents.AssetShared(window.tracking_data, section, socialApp, assetId).send();
        return window.omnitureTracking.sendShareTrackingInfo(socialApp + 'IconGallery', assetId);
      }
    });
    $(document).on('social.followModalShown', function(e) {
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'PostShareModal', {
        'events': 'Event112',
        'eVar68': 'Post Share Modal'
      });
    });
    $(document).on('social.followModalLike', function(e) {
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'PostShareModalLike', {
        'events': 'Event113'
      });
    });
    $(document).on('social.followModalFollow', function(e) {
      return window.omnitureTracking.sendTrackingInfo(window.omnitureTracking.HEROSEL_SECTION, 0, 'PostShareModalFollow', {
        'events': 'Event113'
      });
    });
    return $('#social_banner').on('click', '.embed', function(e) {
      var assetId, assetType, is360Image;
      assetId = String(window.herosel.karousel.currentSlide().data().assetId);
      assetType = String(window.herosel.karousel.currentSlide().data().assetType);
      is360Image = window.herosel.karousel.currentSlide().data().is360Image;
      new spectrumEvents.AssetEmbedded(window.tracking_data, 'herosel', assetId, assetType, is360Image).send();
      return window.omnitureTracking.sendShareTrackingInfo('EmbedIconGallery', window.herosel.karousel.currentSlide().data().assetId);
    });
  });

}).call(this);
(function() {


}).call(this);
