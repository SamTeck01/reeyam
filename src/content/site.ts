export type Ratio = "4/5" | "3/4" | "1/1" | "16/10";
export type Photo = { src?: string; video?: string; alt: string; ratio: Ratio; caption?: string; label: string };
export type TimelineItem = { label: string; title: string; body: string; highlight?: boolean };
export type Noticed = { title: string; body: string };
export type Wish = { her: string; me: string };
export type OrdinaryLine = { text: string; indent?: boolean; italic?: boolean; accent?: boolean };

// Put files in public/photos and set src to e.g. "/photos/01.webp". Empty src shows a placeholder.
// Pass video: "/photos/NN.mp4" to show a muted looping clip (src is then its poster).
const photo = (n: string, ratio: Ratio, caption?: string, src = "", video?: string): Photo => ({
  src,
  video,
  alt: video ? "A short video of Reeyam" : "Reeyam",
  ratio,
  caption,
  label: `Photo ${n} · ${ratio.replace("/", ":")}`,
});

export const site = {
  names: { her: "Reeyam", me: "Samad" },
  birthday: "1 October",
  meta: { title: "For Reeyam", description: "A short book for one reader." },
  colors: {
    paper: "#F3ECE1",
    paperAlt: "#EBE2D4",
    paperDeep: "#E7DCCB",
    photoSlot: "#E3D8C8",
    ink: "#231915",
    inkBody: "#3A2C25",
    muted: "#6B5B50",
    rule: "#D6C8B7",
    accent: "#7A2A2E",
    night: "#1C1512",
    nightInk: "#E4D8C9",
    nightAccent: "#D7A89C",
    card: "#FBF7F0",
    cardBorder: "#DDD0BF",
  },

  hero: {
    eyebrow: "A short book for one reader",
    line1: "Happy birthday,",
    line2: "Reeyam.",
    sub: "Today is about you.",
    photo: photo("01", "4/5", "Reeyam · Ashake mi", "/photos/01.webp"),
    scrollCue: "Take your time",
  },

  prologue: {
    eyebrow: "Prologue",
    title: "Before you read anything —",
    paragraphs: [
      "I build things for a living. For once, I wanted to build something that was only for you.",
    ],
    closing: "There’s no rush. Read it the way you read your novels: slowly, one chapter at a time.",
  },

  timelineHeading: { eyebrow: "Chapter one", title: "How we", italic: "happened" },
  timeline: [
    { label: "First", title: "It started on LinkedIn.", body: "Of all places. People go there to talk about careers and CVs, and somehow I found you there." },
    { label: "Then", title: "We started talking.", body: "Nothing dramatic. Just conversations that kept lasting a little longer than the last one." },
    { label: "Slowly", title: "We got comfortable.", body: "You’re quiet with most people. Somewhere along the way, you started letting me in — a little at a time." },
    { label: "20 August 2026", title: "We made it official.", body: "It felt less like starting something new and more like saying out loud what was already true.", highlight: true },
    { label: "Since then", title: "Everything else.", body: "Which, it turns out, is my favourite part. More on that in chapter five." },
  ] satisfies TimelineItem[],

  noticedHeading: { eyebrow: "Chapter two", title: "Things I’ve", italic: "noticed", after: "about you", sub: "Not compliments. Just things I see." },
  noticed: [
    { title: "You remind me to pray.", body: "The very first thing you ever asked me was “You’ve prayed?” It might feel small to you. It isn’t small to me." },
    { title: "You check on me.", body: "When work is heavy or money is being money, you notice before I say much. And you ask." },
    { title: "You let me in.", body: "I know you’re private. So when you tell me what’s on your mind, it feels like being trusted with something." },
    { title: "Your random pictures and videos.", body: "Some of my favourite notifications, if I’m being honest." },
    { title: "You make normal conversations feel like something.", body: "We can be talking about absolutely nothing, and I still won’t want it to end." },
  ] satisfies Noticed[],

  youSaid: {
    eyebrow: "Chapter three",
    title: "Things",
    italic: "you",
    after: "said",
    intro: "You’ve told me what you love and what you can’t stand. I wrote it down, ife mi.",
    hint: "Tap each one — I left a reply.",
    herLabel: "You said…",
    meLabel: "Me —",
    wishes: [
      { her: "I love being cared for.", me: "Noted, iyawo mi. Consider this me caring — in code." },
      { her: "I love being surprised.", me: "You’re scrolling through one." },
      { her: "It’s we, not you.", me: "You said it when I was scared to tell you something. I haven’t forgotten, ayo okan mi." },
      { her: "I want you to be the first person to wish me.", me: "Midnight. Check who texted first." },
    ] satisfies Wish[],
    answerLead: "And when I asked you why you said yes",
    // Keep her exact wording.
    answer: [
      "Because I saw the potentials of my dream husband in you.",
      "I saw how responsible and caring you are.",
      "And you are the perfect taste I desire in a man.",
    ],
    answerBy: "— Reeyam",
    answerReplyLabel: "What I thought when I read that",
    answerReply: [
      "I’ve read it more times than I’ll admit.",
      "I don’t know if I’m all of that yet. But you saw something in me before I could fully see it myself — and I’d like to keep proving you right.",
    ],
  },

  galleryHeading: { eyebrow: "Chapter four", title: "Pictures", italic: "" },
  // Order matters: 02 … 09 map to the editorial grid slots.
  gallery: [
    photo("02", "4/5", undefined, "/photos/02.webp"),
    photo("03", "3/4", undefined, "/photos/03.webp", "/photos/03.mp4"),
    photo("04", "3/4", undefined, "/photos/04.webp", "/photos/04.mp4"),
    photo("05", "1/1", undefined, "/photos/05.webp"),
    photo("06", "16/10", undefined, "/photos/06.webp"),
    photo("07", "4/5", undefined, "/photos/07.webp", "/photos/07.mp4"),
    photo("08", "4/5", undefined, "/photos/08.webp", "/photos/08.mp4"),
    photo("09", "3/4", undefined, "/photos/09.webp"),
  ] satisfies Photo[],

  ordinary: {
    eyebrow: "Chapter five",
    title: "The ordinary",
    italic: "things",
    lines: [
      { text: "“Have you prayed?”" },
      { text: "“What did you eat today?”", indent: true, italic: true },
      { text: "“How fine are you?” “80 percent.”" },
      { text: "Money being money.", indent: true },
      { text: "Cold Viju milk." },
      { text: "A picture sent for no reason at all.", indent: true, italic: true },
      { text: "Knowing that whatever happens, you’re one message away.", italic: true, accent: true },
    ] satisfies OrdinaryLine[],
    // Segments wrapped in *asterisks* render italic.
    closing: [
      "But in your K-dramas, people rarely say “I care about you” out loud. They ask, *“Have you eaten?”* I think we’ve been speaking that language for a while now.",
      "When I think about us, I don’t think about big moments. I think about this. These are the ones I keep.",
    ],
  },

  letter: {
    eyebrow: "Chapter six",
    title: "A",
    italic: "letter",
    greeting: "Reeyam, Ashake mi,",
    paragraphs: [
      "I’ve started this letter more times than I want to admit, so I’ll keep it simple.",
      "You found me on LinkedIn, of all places. And somewhere between “You’ve prayed?” and “80 percent”, you became my favourite part of the day.",
      "I know you don’t let people in easily. Thank you for letting me in — for checking on me, for reminding me to pray, for “It’s we, not you.” I see all of it.",
      "You said you saw the potential of your dream husband in me. I’d like to keep proving you right.",
      "This new year, I hope you find peace, read a novel that stays with you, and see Korea — with me.",
    ],
    closing: "Happy birthday, ife mi.",
    signature: "— Samad",
  },

  epilogue: {
    eyebrow: "Epilogue",
    title: "One more thing…",
    button: "Open it →",
    showDataJoke: true,
    cardTitle: "Happy birthday, iyawo mi.",
    card: [
      "Thank you for choosing me. Out of everyone on LinkedIn, you picked the guy who made you a website.",
    ],
    dataJoke: "You also told me you hate being bored, being lonely, and being without data. Two out of three, I’ve got covered. The third one… let’s just say your boyfriend is working on it.",
    cardAfter: ["Today I want you at 100 percent. No “still loading”."],
    cardSign: "Your boyfriend has done his part. 😂",
    candleHint: "Make a wish, then tap the candle",
    candleDone: "Wish saved. I won’t ask what it was.",
    footer: ["Built by hand, line by line,", "for one reader — Ashake mi."],
  },
} as const;
