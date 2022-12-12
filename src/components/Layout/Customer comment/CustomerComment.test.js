import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { server } from '__mocks__/server';
import { rest } from 'msw';
import CustomerComment from './CustomerComment';

test('should CustomerComment run correctly', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            data: [
              {
                _id: 126559,
                title: 'The 11 Standout Models of Spring-Summer 2023',
                image: 'blog/3500.webp',
                author: 'ANDRÉ-NAQUIAN',
                content:
                  'This season’s runways seemed to be brimming with Cinderella stories: A woman who was scouted on the street in Missouri as a young teenager made her runway debut for Proenza Schouler, a teenager cemented their remarkable transition from viral comedian on TikTok to bona fide high-fashion model, and a non-binary model strut for a slew of prestigious houses.Some of the most exciting names were models who made their debuts a year or two ago. The move signals a commitment from designers to fostering exciting new talent. Below, a guide to eleven models who added memorable sparks to the season’s collections.Photo: Courtesy of Courreges1/11Sun MizrahiAge: 24Agency: Inch Models ManagementHometown: Tel Aviv, IsraelSeason Highlights: Dior, Hermès, Botega Venetta, FendiInstagram: @sunmizrahiiSun Mizrahi is the daughter of the Israeli former professional football player Alon Mizrahi, but she’s making a name for herself. She only started modeling a year ago and already has an impressively stacked résumé. She has fronted a campaign for Blue Marine and walked for Y Project, Lemaire, Fendi, and Botega Venetta. Her true breakthrough moment came when she opened Jacquemus’s Le Papier show, which took place in South France in June. Not too long after, she appeared in the ad campaign for the French designer’s buzzed about collaboration with sportswear giant Nike. This season she appeared in a whopping 23 shows—six of them being Dior, Hermès, Bottega Venetta, Fendi, Michael Kors, and Tommy Hilfiger.Photo: Filippo Fior / Gorunway.com2/11Ava ChristianAge: 18Agency: Mother ModelsHometown: Wentzville, MissouriSeason Highlights: Miu Miu, Fendi, Proenza SchoulerInstagram: @avaa.christianThis Midwest beauty was scouted four years ago—by the St. Louis–based agency Mother Models— but made her runway debut at Proenza Schouler this season. It was certainly worth the wait. The 18-year-old was the toast of fashion month, appearing in prestigious shows such as Miu Miu, Loewe, Lanvin, Fendi, and Sacai. Christian brought naturalistic confidence and beauty to every catwalk she graced, offering up soft visions of beauty. And don’t call her winning streak beginner’s luck. This Missourian is fast-becoming Europe’s cream of the crop. She certainly has staying power.Photo: Daniele Oberrauch / Gorunway.com3/11Annemary AderibigbeAge: 22Agency: Milk ManagementHometown: Amsterdam, NetherlandsSeason Highlights: Tom Ford, YSL, VersaceInstagram: @annemaryaderibigbeWith a shoot for Vogue Scandinavia under her belt, Dutch model Annemarry Aderibigbe kicked off a knockout season by walking for Brandon Maxwell. During the European collections, she donned ’90s-flavored cornrows at Sacai and Victoria Beckham, and crinkled, almost wet hair for Ludovic de Saint Sernin. The elegant beauty appeared in an impressive 17 shows this season. We’re guessing she’ll easily beat this new personal record next season.',
              },
              {
                _id: 126560,
                title: 'Is My Body About to Go Out of Style?',
                image: 'blog/4800.webp',
                author: 'Marielle Elizabeth',
                content:
                  'It’s been six months since Kim Kardashian informed the world that she lost 16 pounds in three weeks in order to fit into Marilyn Monroe’s dress for the Met Gala. For me, it marked a shift in tone, a proverbial Kardashian in the coal mine, ushering in the end of an era that at least claimed to celebrate curvy bodies.It would be unfair to wholly blame one celebrity’s diet for this paradigm shift, but Kardashian’s weight loss is not the only crack in the veneer of body inclusion. I see those fractures in the repeated emphasis on quote-unquote getting your body back post-pandemic; the plus-size lines that have been pulled or the promise of expanding sizes that simply never came; and more recently, the return of Y2K fashion, a style synonymous with low-rise jeans and thinness. The aspirational body was moving on from thick thighs, hourglass curves, and the so-called BBL-era—a time when plastic surgery was used to add curves instead of taking them away, long before Kardashian shimmied up the steps of The Met with Monroe’s dress clinging to her new slimmer figure. (To be clear: that standard was still an unattainable ideal, but it was when we saw increased representation and celebration of larger bodies).AdChoicesADVERTISING',
              },
              {
                _id: 126561,
                title: 'Why Do Final Girls Always Have Killer Style?',
                image: 'blog/5800.webp',
                author: 'Christian Allaire',
                content:
                  'In Wes Craven’s masterful 1996 horror film, Scream, one of the last people standing is Sidney Prescott (Neve Campbell), who narrowly escapes the knife-wielding Ghostface killer while wearing a Canadian tuxedo. A popular look of the ’90s, the outfit has become even more iconic in the years that have followed. It’s frequently replicated every year for Halloween, right down to the bloodstained denim jacket. She’s not the only final girl that has good style: Halloween’s Laurie Strode (Jamie Lee Curtis) has become an easily re-creatable Halloween favorite thanks to her torn blue button-up shirt and flared jeans. If a main heroine wants to claw their way out of a movie alive, it’s clear that there’s a formula to do so: Dress to kill.Over the years, these so-called final girls have consistently delivered ensembles that are just as strong as their survival skills. No matter if it’s a chainsaw-carrying psychopath or a cherub-mask-wearing serial killer, horror villains have proven no match for their victims and their spicy wardrobes. In 2003’s The Texas Chainsaw Massacre, for instance, Erin (Jessica Biel) embodies a country-girl vibe with her knotted tank top and low-rise bell-bottoms—a thoughtful nod to the same outfit that Sally (Marilyn Burns) wore in the original 1974 film. In the Scream franchise, the ruthless journalist Gale Weathers (Courteney Cox) defeats many Ghostfaces in her sleek wardrobe of power suits and TV-broadcast-ready dresses.Jamie Lee Curtis in Halloween',
              },
              {
                _id: 126562,
                title: 'World Cup Worthy Looks in Street Style ',
                image: 'blog/blog_img5.jpg',
                author: 'IRENE KIM',
                content:
                  'The World Cup is on and to get in the mood we’re rounding up the best football looks in street style to keep you looking as cool as Héctor Bellerin. Rep the team of your choice with a jersey, track pant, or sports band on and off the season and follow along as our Street Style Trend Tracker tags the best looks from the season.',
              },
            ],
          })
        );
      }
    )
  );

  render(<CustomerComment />);
  expect(await screen.findByTestId('blog-element'));
});

test('should customer comment render failed', async () => {
  server.use(
    rest.get(
      `https://vnguyen.xyz/huy/day17/apis/index.php`,
      (_req, res, ctx) => {
        return res(ctx.status(400), ctx.json({}));
      }
    )
  );

  render(<CustomerComment />);
  expect(await screen.findByTestId('error-fetch'));
});
