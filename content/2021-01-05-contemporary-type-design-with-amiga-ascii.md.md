---
title: Contemporary type design with Amiga ASCII
date: 2021-01-05T16:44:46.140Z
cover: assets/topaz-cover.png
slug: contemporary-type-design-with-amiga-ascii
category: tutorial
tags:
  - ascii&ansi fonts
  - type design
---
My favourite source of type design inspiration is to browse Amiga ASCII archives at [asciiarena](http://www.asciiarena.se/) and [16colo.rs](https://16colo.rs/). In those archives there is just an endless amount of really wild but mostly well made lettering and logos, and the strangest thing is that they are mostly made by teenagers in the 90's! 

One of the ideas behind Glyph Drawing Club was to be able to emulate the style of Amiga ASCII specifically, but with "smooth" vector lines instead of pixelated bitmap fonts, and the "Tesserae" font supplied with Glyph Drawing Club is kind of answer to that. But there's still something in the raw interfaces of ascii art editors and in the extremely limited selection of shapes in Amiga ASCII that can't really be replicated. I wanted to keep the type design process in the old school ascii art editors and only afterwards transform the logo into something more contemporary. Thus, I modified the original Amiga ASCII font Topaz (ttf version by <https://www.trueschool.se/>) into a "contemporary" version with straight interconnecting lines and ligatures.  Now I can do ASCII type in an ascii art editor, copy paste the ASCII into Illustrator, and then change the font into the new modified version of Topaz and get a filled, more contemporary look. If you want to do the same, I have written a small technical tutorial & shared the font so you can do the same!

![Amiga ASCII into smooth vectorised format. ](assets/eccoArtboard 1.png "Amiga ASCII into smooth vectorised format.")

1. Download & install [Moebius ASCII art editor](https://blocktronics.github.io/moebius/).
2. In Moebius change the font to Topaz 2+ from \`View -> Change Font -> Amiga -> Amiga Topaz 2+\` and draw something. 

   **Helpful tips to draw ASCII:** 

   * configure the top key mappings to include at least / \ | and any other symbol that is hard to type fast. If you use Mac, make sure your F1, F2 keys work as function keys (System Preferences -> Keyboard).
   * You can select an area by dragging your mouse across the drawing. You can move this selection by pressing \`m\` and "stamp" it with \`s\`. You can also press \`t\` to make the selection "transparent" and \`u\` to paste it under.

![Some design in Moebius.](assets/Screenshot 2021-01-05 at 20.16.57.png "Some design in Moebius.")

1. Select your design and copy it to your clipboard (\`cmd/ctrl+c\`).
2. Open Illustrator, create a new text box and paste the ASCII into it. 
3. Download & install TesseraeTopaz8x16 font from [here](https://drive.google.com/file/d/1RUj1nNT8RXK3c31VioMmV4yX0U8OXcIL/view?usp=sharing). 
4. Change the font into TesseraeTopaz8x16. Make sure in your paragraph styles the line height is the same as font size and there's no kerning values or other offsets / shifts. 
5. Select everything & merge the paths. If you want a "filled" version, and not outlined version, just ungroup the vectors, select the outer path and delete it. Now you should have a smooth vectorized version of your ASCII drawing!

*Note:*

I've added several ligatures and made some "text art" modifications to the TesseraeTopaz8x16 font. For example letters `h, y, k, t, Y, X, v, V, i, l, z, Z` are heavily modified to allow continuous shapes. Ligatures such as `._` and `_.`  makes underscore 150% times it's width so it lines up with the `|` symbol below it.
