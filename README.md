# SEEker

This a single-page, full-stack application that crowdsources the transcription of images from old dictionaries with handwritten entries for Signed English vocabulary. Users are shown an image that contains the sign, headword(s), and a description of the sign.

The user is asked to transcribe the headword and the other relevant text into the pertinent text boxes. When the user clicks **Add Image**, the image’s status is changed to *pending*, a card is created for it, and it is moved to the **Review** section.

In the **Review** section, the user can either click **Save**, which changes the status to *completed* and moves the card to the **Saved Contributions** section, or **Reject**, which removes all the statuses and puts the image back in the pool for transcription.

Once the card has been moved to **Saved Contributions**, the user no longer has access to modify the card.

## Built With

* Back end
  * [imgbb](https://imgbb.com/)
    * Image-hosting service.
  * [mysql](https://www.npmjs.com/package/mysql)
  * [Node.js](https://nodejs.org/en/)
  * [Express](https://www.npmjs.com/package/express)
  * [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
    * A package for using templates to dynamically generate HTML pages.
  * JavaScript
* Front end
  * jQuery
  * [PaperCSS](https://www.getpapercss.com/)
  * [Animate.css](https://daneden.github.io/animate.css/)
  * [Hatchful](https://hatchful.shopify.com/)
    * A service for generating logos.
  * [Color Calculator](https://www.sessions.edu/color-calculator/)
    * A service for finding complementary colors.

## Who maintains the project
This project was created by [Rafael Treviño](https://github.com/rafaeltrevino/) as part of the Full-Stack Web Developer Coding Boot Camp program offered at the [George Washington University](https://bootcamp.cps.gwu.edu/coding/) in Arlington, Virginia.