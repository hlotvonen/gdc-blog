---
title: Moebius ANSI & ASCII Art editor with custom font support!
date: 2020-02-27T13:55:23.647Z
cover: assets/makeascii.png
slug: moebius-ansi-ascii-art-editor-with-custom-font-support
category: editor
tags:
  - ascii&ansi fonts
---
**UPDATE 19.03.2021: There's a few quality of life upgrades to both Fontraption and Moebius, so this guide is a bit outdated. I'll update it when I manage to get a bug free build of Moebius working :)**

Ever since I started making ASCII a few years back with [PabloDraw](http://picoe.ca/products/pablodraw/) I wished that I could modify the fonts or use other fonts than the "standard" IBM PC or Amiga fonts, just to make some small modifcations to the letters or shapes, or to create entirely new text art fonts. 

![ANSI with modified font: The Core by Raider (Shade) https://16colo.rs/pack/shade5/RD-CORE1.XB](assets/RD-CORE1.XB.png "ANSI with modified font: The Core by Raider (Shade) https://16colo.rs/pack/shade5/RD-CORE1.XB")

Digging into the archives, I realized that modifying fonts *was* actually possible back in the day in some obscure oldschool DOS based ANSI/ASCII editors such as the [Empathy ANSI editor](http://artscene.textfiles.com/viewers/dos/). These programs probably never took though off because files with modified fonts had to be saved as basically screen dump data, rather than as *text*, so you had to have a specific program or system to properly decode and display these files. Nonetheless there are [some interesting artwork made with modified fonts](https://16colo.rs/tags/content/custom%20font), but the amount (70+) is minuscule compared to regular ANSI & ASCII art of which there are tens of thousands.

On top of modified fonts, there are also thousands of interesting oldschool bitmap fonts from strange vintage pc clones and other machines or made by bitmap font hobbyists, all packed with their own weird little quirks and characteristics. Sadly most of them never saw the light in any serious ASCII or ANSI reproduction.

My main problem was that modern GUI based ASCII and ANSI editors such as PabloDraw don't have the possibility to load or modify fonts. Fortunately, last year [Andy Herbert](https://github.com/andyherbert) published Moebius, an **amazing** ANSI & ASCII editor made with modern day javascript. While the official version also doesn't have support for "non-standard" ASCII or ANSI fonts, it's [open source](https://github.com/blocktronics/moebius), which meant that I could add support for custom fonts myself. 

![Character set from "fire's cool! yeah!" by "agent_42" https://16colo.rs/pack/cia-50-a/42_FIRE.ADF](assets/Screen Shot 2020-03-10 at 19.27.20.png "Character set from \\"fire's cool! yeah!\\" by \\"agent_42\\" https://16colo.rs/pack/cia-50-a/42_FIRE.ADF")

Below are the download links to the modified Moebius application with custom font support, so if you want to create ASCII or ANSI art with your own custom made bitmap font or with one of the hundreds of fonts from [VileR's Ultimate Oldschool PC Font Pack](https://int10h.org/blog/2016/01/the-ultimate-oldschool-pc-font-pack-v10/), you can do it with this version:

* Download packages [Windows, Linux, Mac](https://drive.google.com/open?id=1ggclfhvQnwala1Y5xMo64hyoQsEvMUem)
* Source code: [Github](https://github.com/hlotvonen/moebius-customfont)

All credits go to the creator of Moebius, [Andy Herbert](http://www.andyh.org/moebius/), and to [VileR](https://int10h.org/) for the Ultimate Oldschool PC Font Pack. 

If you have suggestions for adding more fonts, let me know! You can email me at hlotvonen@gmail.com

# How to use the Ultimate Oldschool PC Font Pack in Moebius

1. Install Moebius on your computer from one of the packages above.
2. Open a new file
3. Go to View -> Change font -> The Ultimate Oldschool PC Font Pack -> Choose a font from the list
4. If you want to preview the fonts easier, check out the steps below under "How to create your own custom bitmap fonts and preview fonts from the Ultimate Pack"

# How to use custom fonts in Moebius

1. Install Moebius on your computer from one of the packages above.
2. Open a new file
3. Go to View -> Load Custom Font... -> Choose a bitmap font file ("fontfile.F16" for example)
4. Save your files as XBIN (instead of default ANS) to work on them later.

**Notes:** 

* Moebius supports any bitmap font file with extensions "F06", "F07", "F08", "F10", "F12", "F14", "F16", "F18", "F19", "F20", "F22", "F24", "F26", "F28", "F30" and "F32".
* Large scale fonts (files that have extensions .F32 for example) break the UI a little bit but should still be usable! Optimal size is .F16
* The Ultimate Oldschool PC Font Pack is just a huge list of fonts, not organised in any way... so I recommend checking them out first with Fontraption (check below)
* You should save your files as .XB (XBIN) files.
* The custom font option is not thoroughly tested, so let me know if you find any bugs.
* The custom font option is also not tested when doing a joint session with someone else over network connection, so be wary!
* If you open an XBIN file, then change the font, you can go back to the original font present in the XBIN by View -> Reset to default font...
* You can also export the font used from the file from View -> Export Font...
* You can also share your artwork online (for a limited time) at [16colo.rs](https://16colo.rs). Just go File -> Share Online (XBIN)

# How to create your own custom bitmap fonts and preview fonts from the Ultimate Pack

In addition to creating the Ultimate Oldschool PC Font Pack, VileR also has made a fantastic little dos program called [Fontraption](https://int10h.org/blog/2019/05/fontraption-vga-text-mode-font-editor/). It's a really great and easy to use VGA Text Mode Font Editor. You can also use it to preview any font in The Ultimate Oldschool PC Font Pack with it, and all the fonts from the pack are included already in Fontraption. 

![Fontraption interface](assets/fontraption.png "Fontraption interface")

## How to install & use Fontraption

* Check out the full installation guide at <https://int10h.org/blog/2019/05/fontraption-vga-text-mode-font-editor/>. You can run Fontraption with any OS using DosBox. Make sure to follow the "DOSBox Requirements" part.

  * If you are using Mac, I recommend placing Fontraption in your /username/ folder. For me it's in "~/heikkilotvonen/DOSBOX/FONTRA", then it's easier for you to mount the correct folder in DosBox. I also recommend renaming the Fontraption folder from "fontraption_v1.0" to FONTRA (DOS doesn't like file or folder names longer than 6 characters). If you use these steps it's easier for you to mount & run the program in DosBox the following way:

  ```shell
  mount C ~/DOSBOX/FONTRA
  C:
  FRAPT.COM
  ```
* To Preview fonts from The Ultimate Oldschool PC Font Pack, in Fontraption press `CTRL+L` or `F3` to Load, then press `Tab` , navigate to the FONTS folder with `arrow keys`, hit `enter` to enter the folder, and then load the font by hitting `enter`.
* Using the program is really simple, but it's worth also checking out this video tutorial: <https://www.youtube.com/watch?v=aEGT7A5RVRU>
* After you've made your own font, simply save the file in Fontraption with `F2` or `CTRL+S` , and then you can open it with Moebius using the instructions above.

# Endnote

For any requests or questions about Moebius or Fontraption, don't hesitate to ask me! You can message me on Instagram or at hlotvonen@gmail.com. I hope to see some cool custom font ASCII!
