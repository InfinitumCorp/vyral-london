export const practices = [
  {
    id: "people",
    index: "01",
    title: "People",
    line: "A public life, held with care.",
    body: "Founders, artists, athletes and public figures. We shape how a name is introduced, defended and remembered — the interviews, the narrative, and the long quiet between headlines.",
  },
  {
    id: "brands",
    index: "02",
    title: "Brands",
    line: "Reputation a company can repeat.",
    body: "Launches, repositioning, and the story a house earns when nobody is watching the campaign. We write the line that sales, culture and the press can all say without distorting it.",
  },
  {
    id: "culture",
    index: "03",
    title: "Culture",
    line: "Rooms, seasons, and what a city feels.",
    body: "Exhibitions, nightlife, ideas and the nights that make London feel current. We connect cultural work to the people who will actually carry it — invited, not shouted.",
  },
  {
    id: "impact",
    index: "04",
    title: "Global impact",
    line: "Purpose that survives a second reading.",
    body: "Coalitions, institutions and companies whose work has to land past one market. We edit purpose until it is precise, then place it where policy and culture overlap.",
  },
] as const;

export type PracticeId = (typeof practices)[number]["id"];

export const engagements = [
  {
    index: "01",
    title: "The Return",
    meta: "Heritage house · Mayfair",
    summary: "A reopening sequenced, not splashed.",
    body: "A room that had been dark. We refused the launch-party story and built a path: one editor inside, then the trade, then the city. The account stayed quieter than the place, which is why it lasted a season.",
  },
  {
    index: "02",
    title: "After Dark",
    meta: "Cultural season · three rooms",
    summary: "One idea, carried from room to room.",
    body: "Three London addresses, a single sentence, and a press path that felt like an invitation. Culture desks came because the work was already in the room — not because a release asked them to.",
  },
  {
    index: "03",
    title: "First Name",
    meta: "Founder · entering public life",
    summary: "The narrative, written before the first question.",
    body: "A personal public life assembled in private: what is said, what is never offered, and which conversations are worth having. By the first profile, every answer had a spine.",
  },
  {
    index: "04",
    title: "The Long Table",
    meta: "Coalition · many capitals",
    summary: "A global story reduced to one clean line.",
    body: "Too many partners, too many slogans. We cut until the work could be said in a sentence a stranger would repeat, then placed that sentence where it would be tested — and still hold.",
  },
] as const;

export const method = [
  {
    index: "01",
    title: "Listen",
    body: "The reputation you already have, said back without flattery.",
  },
  {
    index: "02",
    title: "Frame",
    body: "A sentence the work can live inside — and nothing that fights it.",
  },
  {
    index: "03",
    title: "Place",
    body: "The rooms, editors and moments that will carry it cleanly.",
  },
  {
    index: "04",
    title: "Hold",
    body: "What we protect after the first headline, when the noise moves on.",
  },
] as const;

export const ticker = [
  "People",
  "Brands",
  "Culture",
  "Global impact",
  "London",
  "Public relations",
] as const;
