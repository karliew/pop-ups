/**
 * PopUps
 *
 * A flexible popup component that supports stuff like
 * modals, navs, full viewport elements, and full viewport 
 * Vimeo vis.
 *
 * Instances triggered via data attributes.
 *
 * @version: 1.2 (added aria support)
 * @author  Stephen Scaff
 * @example 
 *  // Pop Up Trigger
 *  <a href="" data-popup="modal-popup">Poppin and Rockin</a> 
 *  // Pop Up Element     
 *  <article id="modal-popup">Rock it don't stop</article>
 */

var PopUps = (function() {


  /**
   * Settings
   */
  var settings = {
    autoOpen: $('[data-popup-init]'),
    openLink: $('[data-popup]'),
    closeLink: $('.js-close-popup'),
    body: $(document.body),
    vimeoID: $('[data-vimeo-id]'),
    videoHolder:  $('.popup__vid'),
    self: null
  };

  return {
 
    /**
     * Init Popups
     */
    init: function() {
      s = settings;
      this.bindEvents();
    },

    /**
     * Bind Events
     */
    bindEvents: function(){
      
      // Auto Open
      if (typeof s.autoOpen.data('popup-init') !== 'undefined'){
        PopUps.autoOpenPopUp();
      }

      // Opener
      s.openLink.on( 'click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        s.self = this;
        PopUps.openPopUp();
        console.log(s.self);

        // If popup has data-vid
        if(s.vimeoID) { 
          PopUps.playVideo();
        }
      });
      
      // Close Link
      s.closeLink.on( 'click', function(e) {
        e.preventDefault();
        PopUps.closePopUp();
        PopUps.stopVideo();
      });

      // Close on escape
      s.body.on("keyup click", function(e) {
        if (s.body.hasClass('popup--is-open') && e.which === 27) {
          PopUps.closePopUp();
          PopUps.stopVideo();
        } 
      });
    },

    /**
     * Auto Open
     */
    autoOpenPopUp: function(){
      s.autoOpen.addClass('is-open');
      s.body.addClass('popup--auto-open');
    },

    /**
     * Open PopUps
     */
    openPopUp: function(){
      var popup = $(s.self).attr('data-popup');
      
      // Make sure we close any rouge autoOpens
      s.autoOpen.removeClass('is-open');

      // now, let's open that shit
      $('#'+popup).addClass('is-open');
      s.body.addClass('popup--is-open');
    },
    
    /**
     * Close Popups
     */
    closePopUp: function(){
      var popup = $(s.self).attr('data-popup');
      $('#'+popup).removeClass('is-open');
      s.body.removeClass('popup--is-open popup--auto-open');
      //s.body.removeClass('popup--auto-open');
    },

    /**
     * Play Video
     * Supports Vimeo for the full viewport vids
     */
    playVideo: function(){
      var vimeoID = $(s.self).attr('data-vimeo-id'), 
          vimeoURL = 'https://player.vimeo.com/video/',
          vimeoPath = vimeoURL+vimeoID,
          vimeoColor = $(s.self).data('vimeo-color'); 

      $.getJSON('http://www.vimeo.com/api/oembed.json?url=' + encodeURIComponent(vimeoPath) + '&title=0&byline=0&color=' + vimeoColor + '&autoplay=1&callback=?', 
        
        function(data){
          s.videoHolder.html(data.html);
        });
    },

    /**
     * Stop Video2
     */
    stopVideo: function(){
       $(".popup__vid").empty();
    },
  };
})();

PopUps.init();
