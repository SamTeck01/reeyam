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
    photo: photo("01", "4/5", "Reeyam", "/photos/01.webp"),
    scrollCue: "Take your time",
  },

  prologue: {
    eyebrow: "Prologue",
    title: "Before you read anything —",
    paragraphs: [
      "I could have bought you something and wrapped it. People do that every day.",
      "But I build things for a living, and for once I wanted to build something that was only for you. Not for a client. Not for a portfolio. For you.",
      "So this is it — a small corner of the internet with your name on it.",
    ],
    closing: "There’s no rush. Read it the way you read your novels: slowly, one chapter at a time.",
  },

  timelineHeading: { eyebrow: "Chapter one", title: "How we", italic: "happened" },
  timeline: [
    { label: "First", title: "It started on LinkedIn.", body: "Of all places. People go there to talk about careers and CVs, and somehow I found you there." },
    { label: "Then", title: "We started talking.", body: "Nothing dramatic. Just conversations that kept lasting a little longer than the last one." },
    { label: "Slowly", title: "We got comfortable.", body: "You’re quiet with most people. Somewhere along the way, you stopped being quiet with me." },
    { label: "Along the way", title: "We learned each other.", body: "What you like, what you can’t stand, what makes you laugh, what you watch when you’re bored — which, I’ve learned, you hate being." },
    { label: "20 August 2026", title: "We made it official.", body: "It felt less like starting something new and more like saying out loud what was already true.", highlight: true },
    { label: "Since then", title: "Everything else.", body: "Which, it turns out, is my favourite part. More on that in chapter five." },
  ] satisfies TimelineItem[],

  noticedHeading: { eyebrow: "Chapter two", title: "Things I’ve", italic: "noticed", after: "about you", sub: "Not compliments. Just things I see." },
  noticed: [
    { title: "You remind me to pray.", body: "Even on the days I’m tired or distracted. It might feel small to you. It isn’t small to me." },
    { title: "The way you talk to me.", body: "There’s a softness in how you say things to me that I don’t think everyone gets to hear. I notice it every time." },
    { title: "When you tell me what’s on your mind.", body: "I know you’re private. So when you open up about your day, or something that’s bothering you, I don’t take it lightly. It feels like being trusted with something." },
    { title: "How quiet you are — and how much is going on underneath.", body: "You don’t announce yourself. You don’t need to. The more I learn you, the more I realise there’s still so much to learn." },
    { title: "You check on me.", body: "When work is stressing me, or money is being money, you notice before I say much. And you ask. That means more than you know." },
    { title: "Your random pictures and videos.", body: "Your food, something you saw, a short clip with zero context. Some of my favourite notifications, if I’m being honest." },
    { title: "Your little jokes.", body: "The ones that come out of nowhere. You’re funnier than people give you credit for, and I like that I get to see that side of you." },
    { title: "You make normal conversations feel like something.", body: "We can be talking about absolutely nothing, and I still won’t want it to end." },
  ] satisfies Noticed[],

  youSaid: {
    eyebrow: "Chapter three",
    title: "Things",
    italic: "you",
    after: "said",
    intro: "You once told me what your dream husband would be like. I wrote it down.",
    hint: "Tap each one — I left a reply.",
    herLabel: "Someone…",
    meLabel: "Me —",
    wishes: [
      { her: "who’s independent.", me: "Noted. I’m building — literally. You’re scrolling through the proof." },
      { her: "who’ll be my gist partner.", me: "Then I’m afraid you’re stuck with me. You bring the gist, I’ll bring the reactions." },
      { her: "I can gossip with.", me: "Say less. I’m already listening." },
      { her: "who can make me happy even when I’m annoyed.", me: "Working on it. Let’s see if this website counts." },
      { her: "who knows how to comfort me when I’m going through something.", me: "I’m still learning what comforts you. But I’m paying attention, and I’ll keep paying attention." },
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
      { text: "Random conversations that go nowhere and somehow last hours." },
      { text: "“What did you eat today?”", indent: true, italic: true },
      { text: "“Have you prayed?”" },
      { text: "Work stressing one of us. Sometimes both.", indent: true },
      { text: "Money being money." },
      { text: "A joke that only makes sense to us.", indent: true, italic: true },
      { text: "A picture sent for no reason at all." },
      { text: "Both of us online at the same time, saying nothing important.", indent: true },
      { text: "Knowing that whatever happens, you’re one message away.", italic: true, accent: true },
    ] satisfies OrdinaryLine[],
    // Segments wrapped in *asterisks* render italic.
    closing: [
      "None of these would make it into a film.",
      "But in your K-dramas, people rarely say “I care about you” out loud. They ask, *“Have you eaten?”* I think we’ve been speaking that language for a while now.",
      "When I think about us, I don’t think about big moments. I think about this. These are the ones I keep.",
    ],
  },

  letter: {
    eyebrow: "Chapter six",
    title: "A",
    italic: "letter",
    greeting: "Reeyam,",
    paragraphs: [
      "I’ve started this letter more times than I want to admit. Everything I wrote either sounded too small or like something off a greeting card, and you deserve better than a greeting card. So I’ll just say it the way I’d say it to you.",
      "I’m grateful I met you. I still find it funny that it happened on LinkedIn, but I’m glad I was paying attention that day.",
      "I love the way we happened. Nobody rushed anything. We talked, we got comfortable, we learned each other — and somewhere in there you became one of the most important parts of my day without me noticing exactly when.",
      "I know you’re private. I know you don’t let people in easily. So I don’t take it for granted that you’ve let me into your world — your days, your moods, your random pictures, the things on your mind. That’s trust, and I want to keep deserving it.",
      "Thank you for how you care for me. For checking on me when work is heavy. For reminding me to pray. For noticing when something is off before I say it. You do these things quietly, the way you do most things, but I see them. All of them.",
      "I don’t need you to be perfect. I’m not. There’ll be days one of us is tired, days we get on each other’s nerves, days things don’t go the way we planned. I’m not scared of those days. I just want to keep learning you — the parts I already know, and the parts I haven’t met yet.",
      "This is my first time doing any of this. Being someone’s boyfriend. Writing someone a letter like this. I’m glad it’s you I get to learn it with.",
      "You told me you saw the potential of your dream husband in me. I’ve thought about that a lot. It makes me want to be better — for myself first, and for us.",
      "For this new year of yours, I hope you find peace, the real kind. I hope you get happiness that doesn’t depend on anyone — and plenty more of the kind that does. I hope you grow into everything you’ve been praying for. I hope you travel somewhere new, read a novel that stays with you, watch a drama that makes you cry for no reason, meet people worth meeting, and try all the things you’ve been curious about.",
      "And I’m excited — really excited — for all the memories we haven’t made yet.",
    ],
    closing: "Happy birthday, Reeyam.",
    signature: "— Samad",
  },

  epilogue: {
    eyebrow: "Epilogue",
    title: "One more thing…",
    button: "Open it →",
    showDataJoke: true,
    cardTitle: "Happy birthday, my baby.",
    card: [
      "Thank you for choosing me. Out of everyone on LinkedIn, you picked the guy who made you a website.",
      "You said you wanted someone who could make you happy even when you’re annoyed. So if you’re smiling right now, I’m counting that as a point for me.",
    ],
    dataJoke: "You also told me you hate being bored, being lonely, and being without data. Two out of three, I’ve got covered. The third one… let’s just say your boyfriend is working on it.",
    cardAfter: ["Now go and enjoy your day. Eat something nice. Let people celebrate you."],
    cardSign: "Your boyfriend has done his part. 😂",
    candleHint: "Make a wish, then tap the candle",
    candleDone: "Wish saved. I won’t ask what it was.",
    footer: ["Built by hand, line by line,", "for one reader."],
  },
} as const;
