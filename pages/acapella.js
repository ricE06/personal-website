
// page for things related to next sing

import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import { Section } from '../components/section';

export default function Home() {
  return (
    <Layout pageName='acapella'>
      <div className='flex flex-row justify-center pb-10'>
        <h1 className='text-4xl font-bold'>Acapella / Next Sing</h1>
      </div>
      <div className='space-y-10'>
        <Section header=''>
          <p>
            Here I plan to host arrangements I write for Next Sing (or any other acapella groups in the future).
            If you are part of my group, the version of the score posted here is <i>always</i> the most up to date version
            (i.e. the "correct" one).
          </p>
        </Section>

        <Section header="Fall 2025 - It's Quiet Uptown (from HAMILTON)">
          <p>
            <i>Artist: Lin-Manuel Miranda, arr. Eric Zhan</i>
            <br/>
            <i>Difficulty: Beginner / Intermediate</i>
            <br/>
            <i>Parts: SATB + Solo Voice</i>
            <br/>
            <i>Length: 4m30s</i>
          </p>
          <p>
            What a hauntingly beautiful song. Alexander, having publicized his own infidelity in his relationship 
            and lost his son Philip in a duel, attempts to win back the only remaining person in his life: Eliza.
            We hear their immense grief and his desperate pleads for forgiveness, as a haunting arpeggiated ostinato unrelentingly
            trickles down like tears. I especially love hearing the ensemble throughout the number... really, Lin-Manuel Miranda
            is a genius for capturing the feeling of relief that accompanies being forgiven so perfectly.
          </p>
          <p>
            <i>Forgiveness, can you imagine?</i>
          </p>
          <p>
            <Link href='/acapella/its-quiet-uptown.pdf'><ba>View the arrangement</ba></Link>
            <span> (last updated: 08/29/25)</span>
          </p>
        </Section>

        <Section header="Fall 2025 - Never Gonna Let You Go">
          <p>
            <i>Artist: Sergio Mendes, arr. Eric Zhan</i>
            <br/>
            <i>Difficulty: Intermediate / Advanced</i>
            <br/>
            <i>Parts: SATB + Solo Voice (Male) + Solo Voice (Female)</i>
            <br/>
            <i>Length: 4m35s</i>
          </p>
          <p>
            No, it's not <i>that</i> song. This is instead an 80s hit by Brazilian bandleader Sergio Mendes,
            and spent <i>four weeks</i> topping the Billboard charts. Legendary stuff, especially for a song containing nineteen key changes!
            What in the world? (Apparently Rick Beato even made a video on the harmonical complexity of it all.) Would a song like this
            released today become as mainstream... I unfortunately doubt it. Also, can we talk about how Joe Pizzulo (singer) reaches 
            an incredibly high Db5 and mostly sings higher than the female lead Leeza Miller? Completely inhuman sorcery.
          </p>
          <p>
            <i>I'm never gonna let you go, I'm gonna hold you in my arms forever...</i>
          </p>
          <p>
            <Link href='/acapella/never-gonna-let-you-go.pdf'><ba>View the arrangement (unfinished WIP)</ba></Link>
            <span> (last updated: 07/06/25)</span>
          </p>
        </Section>

        <Section header="Spring 2025 - blue x Until I Found You">
          <p>
            <i>Artists: yung kai and Stephen Sanchez, arr. Eric Zhan and Freya Edholm</i>
            <br/>
            <i>Difficulty: Intermediate</i>
            <br/>
            <i>Parts: SATB</i>
            <br/>
            <i>Length: 3m10s</i>
          </p>
          <p>
            I think I've earned as a reputation as the guy who knows only songs in 6/8... I guess it's deserved.
            To date, blue is still my favorite song of all time. The artist has mentioned in interviews
            that he was inspired by C-drama love stories, and I can definitely see and feel that influence.
            It screams of longing, and the unique melodic line at the start of the chorus (jumping down a fifth) 
            feels almost like a sigh of defeat or daydreaming about could have been.
            Doing a mashup with another song 
            came naturally after the realization that both songs share a similar "shape" to the chorus.
            I will admit I got a bit lucky... I didn't actually try putting both choruses together simultaneously
            until I was over halfway done with the other sections of the arrangement. Had it not worked out,
            I'm unsure what I would've done.
          </p>
          <p>
            <i>I was lost within the darkness, but then I found her... I found you</i>
          </p>
          <p>
            <Link href='/acapella/blue-x-until-found-you.pdf'><ba>View the arrangement</ba></Link>
            <span> (last updated: 04/05/25)</span>
          </p>
        </Section>

      </div>
    </Layout>
  );
}
