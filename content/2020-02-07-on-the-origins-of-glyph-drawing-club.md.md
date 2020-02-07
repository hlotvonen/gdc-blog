---
title: On the origins of Glyph Drawing Club
date: 2020-02-07T11:33:05.777Z
cover: assets/cover-otoogdc.jpg
slug: on-the-origins-of-glyph-drawing-club
category: article
tags:
  - glyphdrawingclub
---
In 2017 [Shick Toikka](https://www.schick-toikka.com/) asked me and my friends at [GRMMXI](https://grmmxi.fi/) to create a chapter to showcase one of their typefaces ([Saol Text](https://www.schick-toikka.com/saol-text)) for their upcoming specimen book of their retail typefaces. With GRMMXI we decided that each one of us would design a spread. For my spread I wanted to show some appreciation to the less used typographic symbols that are hidden in the "glyphs" tab in InDesign. A typeface might have several hundred different glyphs (in the case of Saol Text it's 482) that are meticulously hand-crafted with fun little details but how often do designers use more than what can be seen on their keyboard? I think that part of type designers' work goes unnoticed far too often. When is the last time you have used the unicode 2021 DOUBLE DAGGER ‡ symbol for example? To have an excuse to use these symbols and because I had been making ASCII art with classic Amiga ASCII style for a couple years, I thought it could be fun to try to make ASCII-like illustrations with Saol Text utilising the full range of typographic symbols from the glyph map.

![Page I made with GRMMXI for Merged Contours type specimen book by Shick Toikka](assets/bookpage.jpg "Page I made with GRMMXI for Merged Contours type specimen book by Shick Toikka")

So, I opened up InDesign, created a grid and tried my best to make this variable width body text typeface work like an ASCII font, but to my disappointment it was *so* annoyingly difficult to make InDesign behave the way I wanted it to (which is to insert any glyph from the font into any place on the page), that I gave up. It was just too cumbersome to click a glyph to insert it from the “glyphs” tab in InDesign every time I wanted to use some special symbol – especially in the case of ASCII art where you have to do that hundreds or thousands of times to form a picture – and get everything to line up nicely. I did manage to make a small ASCII-like illustration with Saol Text, but that was only after copy&pasting an old Amiga ASCII picture I had made and then simply changing the font. Sorry Shick Toikka for my low effort, but I blame the tools.

After that, I dreamed of making my own tool that would behave like an old school ASCII art editor (such as [PabloDraw](http://picoe.ca/products/pablodraw/)) that would do a couple of simple things:

1. Have the full glyph map of the font file easily accessible.
2. To be able to map any glyph to your keyboard, so for example the DOUBLE DAGGER symbol could be inserted with a simple press of a key.
3. Have the layout based on a text mode grid, allowing me to line up even variable width fonts and to insert glyphs into any spot on the page.
4. And finally, to be able to use the tool with any font – basically allowing me to utilise the workflow of ASCII art, but with any font, instead of just a couple platform specific fonts like how it exists in ASCII art editors.

For a while it was just an idea that "ok someday I’ll make it somehow". It wasn’t until my second year studying for my masters, at the Sandberg Instituut in Amsterdam, that I finally said "fuck everything else, let’s make it". I had no idea how though, as I had only ever made simple websites thus had no knowledge of software or application development. But then one night while I was in Helsinki at a party I mentioned the idea to my friend Ian. He got excited and in a few months we had a working prototype, all thanks to his programming skills and ideas in realising the project. I can’t thank him enough for his help.

We finally released the editor publicly a year ago in 2018 as part of my graduation exhibition in De School Amsterdam. I had also invited people to submit illustrations and experiments made with the editor for a collaborative 100-page, Risograph-printed zine that ended up being filled with amazing work from 27 artists worldwide (**Glyph Drawing Club User Guide v.1.0.0.**).

![Glyph Drawing Club User Guide v.1.0.0.](assets/gdc-zine-1.jpg "Glyph Drawing Club User Guide v.1.0.0.")

Since then, I’ve released many new features and updates to the site, and GlyphDrawing.Club has grown from a simple editor into a very capable modular design tool. Most notable features since the User Guide 1.0.0. and launch have been the addition of vector export, layers and coloring tools along with many smaller features that enhance the workflow. With all the features that are now in place I feel like I finally have what I initially wanted; to place that damned DOUBLE DAGGER (and in fact any glyph from any font) to any place on a page, and all of that with relative ease. I can finally have an ASCII art workflow with a font of my choosing, and use the fonts for their full potential in a modular way.

![Early version of Tesserae Regular](assets/tesserae.png "Early version of Tesserae Regular")

Even though the idea for the editor was to be able to drop any font into it and do some typography or post-ASCII illustrations or even classic ASCII art with more obscure ASCII art fonts, almost no-one, myself included, has used the editor for those purposes (yet). When I released the editor the first default font it gives you is a font I made called Tesserae Regular. It was meant to be a vectorised version of the classic [Commodore 64 PETSCII font](https://www.wikiwand.com/en/PETSCII), which is a square monospace font and includes geometric symbols that visually connect to each other almost regardless of how they are placed. Tesserae is based on a 4x4 grid and all shapes start and/or end at one of those grid intersections, so inadvertently it ended up looking more like an extended [Truchet tile system](https://www.wikiwand.com/en/Truchet_tiles) rather than a vectorised PETSCII font. Truchet tiles are square tiles split by a diagonal line into two triangles, and from tiling a surface with the same repeating pattern that is simply rotated with a multiple of 90 degrees, you can get some visually hypnotising patterns. Tesserae works in the same way, but instead of using a single square pattern, you have over 700 different patterns (combine that with rotating, 4 layers, inverted shapes, different colors, etc.), so the possibilities for any kind of modular design work are almost literally endless. It’s very fun and satisfying to use, and that’s why the editor is used for all kinds of modular design and less for text art or typography.

Not that I complain! I’ve seen people make amazing things with it from expressive custom type design to crazy elaborate illustrations, and I’ve also had the pleasure of teaching design with the editor in a few different schools and events, and it’s been awe-inspiring to see people from all over the world make things with the editor which I couldn’t have dreamed of, like some of the work submitted for this zine. It’s been a good year and I can’t wait to see what else is still to come.

<hr />

*This text was originally published in the Glyph Drawing Club User Guide v.2.0.0. in 2019.*
