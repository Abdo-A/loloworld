import React from "react";
const getLyrics = id => {
  let neededLyrics = lyrics.filter(songLyrics => {
    return songLyrics.id === id;
  });
  return neededLyrics[0].lyrics;
};

const lyrics = [
  {
    id: 1,
    name: "I need a doctor",
    lyrics: (
      <p>
        I'm about to lose my mind<br />You've been gone for so long<br />I'm
        running out of time<br />I need a doctor<br />Call me a doctor<br />I
        need a doctor, doctor<br />To bring me back to life<br />
        <br />[Verse 1: Eminem]<br />I told the world one day I would pay it
        back<br />Say it on tape, and lay it, record it<br />So that one day I
        could play it back<br />But I don't even know if I believe it when I'm
        saying that<br />Y'all starting to creep in, everyday it's so grey and
        black<br />Hope, I just need a ray of that<br />Cause no one see's my
        vision when I play it for 'em<br />They just say it's whack<br />They
        don't know what dope is<br />And I don't know if I was awake or asleep<br />When
        I wrote this<br />All I know is you came to me when I was at my lowest<br />You
        picked me up, breeding life in me<br />I owe my life to you<br />But for
        the life of me, I don't see why you don't see like I do<br />But it just
        dawned on me you lost a son<br />See this light in you, it's dark<br />Let
        me turn on the lights and brighten me and enlighten you<br />I don't
        think you realize what you mean to me<br />Not the slightest clue<br />Cause
        me and you were like a crew<br />I was like your sidekick<br />You gon'
        either wanna fight me when I get off this f*cking mic<br />Or you gon'
        hug me<br />But I'm not an option, there's nothing else I can do
        cause&hellip;<br />
        <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
        been gone for so long<br />I'm running out of time<br />I need a doctor<br />Call
        me a doctor<br />I need a doctor, doctor<br />To bring me back to life<br />
        <br />[Verse 2: Eminem]<br />It hurts when I see you struggle<br />You
        come to me with ideas<br />You say they're just pieces so I'm puzzled<br />Cause
        the sh*t I hear is crazy<br />But you're either getting lazy or you
        don't believe in you no more<br />Seems like your own opinions, not one
        you can form<br />Can't make a decision you keep questioning yourself<br />Second
        guessing and it's almost like you're begging for my help<br />Like I'm
        your leader<br />You're supposed to f*cking be my mentor<br />I can
        endure no more<br />I demand you remember who you are<br />It was you,
        who believed in me<br />When everyone was telling you don't sign me<br />Everyone
        at the f*cking label, let's tell the truth<br />You risked your career
        for me<br />I know it as well as you<br />Nobody wanted to f*ck with the
        white boy<br />Dre, I'm crying in this booth<br />You saved my life, now
        maybe it's my turn to save yours<br />But I can never repay you, what
        you did for me is way more<br />But I ain't giving up faith and you
        ain't giving up on me<br />Get up Dre, I'm dying, I need you, come back
        for f*ck's sake<br />
        <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
        been gone for so long<br />I'm running out of time<br />I need a doctor<br />Call
        me a doctor<br />I need a doctor, doctor<br />To bring me back to life<br />Bring
        me back to life<br />Bring me back to life<br />
        <br />(I need a doctor, doctor<br />To bring me back to life)<br />
        <br />[Verse 3: Dr. Dre]<br />It literally feels like a lifetime ago<br />But
        I still remember the sh*t like it was just yesterday though<br />You
        walked in, yellow jump suit<br />Whole room, cracked jokes<br />Once you
        got inside the booth, told you, like smoke<br />Went through friends,
        some of them I put on<br />But they just left, they said they was riding
        to the death<br />But where the f*ck are they now<br />Now that I need
        them, I don't see none of them<br />All I see is slim<br />F*ck all you
        fair-weather friends<br />All I need is him<br />F*cking backstabbers<br />When
        the chips were down you just laughed at us<br />Now you bout to feel the
        f*cking wrath of aftermath, fagots<br />You gon' see us in our lab
        jackets and ask us where the f*ck we been?<br />You can kiss my
        indecisive ass crack maggots and the crackers ass<br />Little crack a
        jack beat making whack math<br />Backwards producers, I'm back bastards<br />One
        more CD and then I'm packing up my bags and as I'm leaving<br />I'll
        guarantee they scream Dre don't leave us like that man cause&hellip;<br />
        <br />[Chorus: Skylar Grey]<br />I'm about to lose my mind<br />You've
        been gone for so long<br />I'm running out of time<br />I need a doctor<br />Call
        me a doctor<br />I need a doctor, doctor<br />To bring me back to life
      </p>
    )
  }
];

export { getLyrics };
