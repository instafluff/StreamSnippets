**StreamSnippets** Stream Overlay to Display Top Twitch Clips for any stream using Twitch commands!

# StreamSnippets
We built this Stream Overlay for Twitch Clip Highlights live on Twitch for The Comfy Corner!

## Instafluff ##
> *Like these projects? The best way to support my open-source projects is by becoming a Comfy Sponsor on GitHub!*

> https://github.com/sponsors/instafluff

> *Come and hang out with us at the Comfiest Corner on Twitch!*

> https://twitch.tv/instafluff

## Instructions ##

Add this as a 1280x720 Browser Source and replace `yourchannel` with your Twitch username!

[https://www.instafluff.tv/StreamSnippets?channel=yourchannel](https://www.instafluff.tv/StreamSnippets?channel=YOURCHANNEL)

```
For example:
https://www.instafluff.tv/StreamSnippets?channel=instafluff
```

And then use any of the following chat commands:
- **!topclip (channel) [number of clips to show]** - Shows a weighted-random top clip from the channel
- **!showclip (link or ID)** - Show specific clip
- **!hideclip** - Stop the clip
- (with `chat=true` enabled) **Any Twitch clip link in Chat** - Shows the clip if it is shared by the Broadcaster or Moderator

```
For example:
!topclip instafluff 5
!showclip https://clips.twitch.tv/CarelessPricklyMomEagleEye
```

## Optional Parameters ##

- Detect Clip Link in Chat `chat=true` (Broadcaster & Mods Only)

```
For example:
https://www.instafluff.tv/StreamSnippets?channel=instafluff&chat=true
```

## Credits ##

Special Thanks to circular17 for the help with the weighted random index picker!

Thank you too all the participants of this project!

****
