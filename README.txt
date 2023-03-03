#video-widget

#1 Сopy two files from repo: video-widget.css & video-widget.min.js
and place next to the index.html

#2 Place these <link> tags in the <head>:

<!-- Styles for this video widget -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>
<link href="video-widget/video-widget.css" rel="stylesheet" />

#3 Place these <script> tags before the closing </body>:

<!-- Scripts for this video widget -->
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
<script src="video-widget/video-widget.min.js"></script>