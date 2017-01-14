# Pop Ups
Pop Ups is a simple and flexible pop up component for creating stuff like full viewport elements, Vimeo Videos, modals, and so on. This is more of a component that a plugin, but you can easily edit the js module to expose an api with the settings object.

The component works via an id on the PopUp element that matches a click handler including the ```[data-popup='my-modal']``` attribute. CSS handles all the interaction and positioning. A page can inlcude as many instances as you'd like.

Close your PopUp with the ```js-close-popup``` class.

### Launch A Full Viewport Nav Thing

*As seen on*
- [Formidable's Open Source Filter](http://formidable.com/open-source/)
- [DNA Seattle's Blog Filters](http://dnaseattle.com/blog)

```html
<!-- Full Viewport Nav Pop Up -->
<section id="nav-popup" class="popup" aria-hidden="true">  
  <!-- Full Viewport Nav Pop Up -->
  <button class="popup__close js-close-popup" aria-label="Close">
    <div class="popup__x"></div>
  </button>
  <!-- Nav List -->
  <nav class="nav">
    <ul class="nav-list">
      <li><a class="nav-list__link" href="">Home</a></li>
      <li><a class="nav-list__link" href="">About</a></li>
      <li><a class="nav-list__link" href="">Services</a></li>
      <li><a class="nav-list__link" href="">Blog</a></li>
    </ul>
  </nav>
</section>
```

### Launch A Full Viewport Video
PopUps inlcudes support for launching full viewport Vimeo vids. Just add a Vimeo ID on the PopUp click handler's ```data-vimeo-id=""```. You can also style Vimeo UI by adding a hex value to the ```data-vimeo-color=""``` attribute.

*Seen On*
- [Ink & Volt's Masthead video](http://inkandvolt.com)

```html
<!-- Launch My Video -->
<button type="button" name="button" class="play-button" data-popup="my-video" data-vimeo-id="72949159" data-vimeo-color="21bfd2"><i class="icon-play"></i></button>

<!-- My Video Structre -->
<section id="my-video" class="popup" aria-hidden="true">  
  <button class="popup__close js-close-popup" aria-label="Close">
    <div class="popup__x"></div>
  </button> 
  <div class='flex-vid vimeo popup__vid'></div>
</section>
```
### Launch A Modal
Use PopUps for a basic modal, basic styles in ```_modal.scss```

```html
<!-- Modal Link -->
<a class="btn" data-popup="my-modal">Launch My Modal</a>

<!-- My Modal Set Up -->
<section class="popup" aria-hidden="true">  
  <button class="popup__close js-close-popup" aria-label="Close">
    <div class="popup__x"></div>
  </button> 
  <!-- The Modal -->
  <section class="modal modal--signup">
    <div class="modal__col has-bg">
      <figure class="modal__bg" style="background-image: url(https://source.unsplash.com/HpiYsNBORAw/1500x1200)"></figure>
    </div>
    <div class="modal__col">
      <div class="modal__content">
        <h2 class="modal__title">What's Up Playas?</h2>
        <p class="modal__text">Peep this modal jaun right here.</p>
      </div>
    </div>
  </section>
</section>
```
### Launch On Load

Just add the attribute ```data-popup-init``` to the PopUp element

```html
<!-- Auto launch PopUp on load -->
<section id="verify-modal" class="popup" aria-hidden="true" data-popup-init></section>
```