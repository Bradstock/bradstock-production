---
template: blocks
title: Examples of Blocks
blocks:
  - template: hero
    component: hero
    background: ''
    title: 'Hero '
    subtitle: Hero has a subtitle and background image
    background_image: /images/pawel-czerwinski-NR7ZrUuVB3Q-unsplash.jpg
  - template: text-and-image
    component: text_and_image
    tai_image: /images/pawel-czerwinski-NR7ZrUuVB3Q-unsplash.jpg
    background: dark
    orientation: Image Right
    title: Text and Image
    content: >-
      content has an image and text in two columns<br><br>you can change the
      background colour of the text<br><br>and the position of the image to the
      right or left 
    alt: Bubbles
  - template: table
    component: table
    title: Table
    col1:
      title: col 1
      content: Has text and image options
      col_image: /images/logo-good-steer.png
    col2:
      title: col 2
      content: content
      col_image: /images/41984dd6a3327c2e96ed-1536x552.png
    col3:
      title: col 3
      content: content
      col_image: /images/pqt-logo.png
  - template: title-button
    component: title_button
    background: dark
    title: Title Button
    subtitle: >-
      has a button and title option, must choose whether the link is internal or
      external
    button:
      label: Label
      url: 'https://www.google.com'
      button_type: External
  - template: text-area
    component: text_area
    text_area: |-
      ## text area

      can do a ton of stuff with the wisywig editor

      ![Alt](/images/1268877_502150969868059_1409849511_o.jpg "Title")

      # Image

      ##### 

      can choose Center and then the width 25% 50% or 75%

      or left and right

      which are smaller
  - template: image
    component: image
    position: Center
    image: /images/1270557_504084633008026_916297456_o.jpg
    alt: face
    image_center_width: 25%
  - template: text-area
    component: text_area
    text_area: |-
      ## Iframe 

      use a url and choose a height
  - template: iframe
    component: iframe
    url: 'https://www.lipsum.com/feed/html'
    iframe_height: '1000'
  - template: gallery
    component: gallery
    gallery_field_group: []
  - template: button
    component: button
    button:
      label: Button Example
      url: 'https://www.google.com'
      button_type: External
  - template: tag
    tag: tag
_template: blocks_page
---

