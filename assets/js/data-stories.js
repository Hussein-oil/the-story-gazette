/**
 * @file Story library data, CEFR levels A1-C1.
 *
 * @typedef {"A1"|"A2"|"B1"|"B2"|"C1"} CefrLevel
 *
 * @typedef {Object} Story
 * @property {string} id            Unique id, e.g. "a1-1".
 * @property {CefrLevel} level      CEFR reading level.
 * @property {string} motif         Key into the engraving motif map `M` (covers.js).
 * @property {string} title
 * @property {string} author
 * @property {string} blurb         One-sentence teaser shown on the detail page.
 * @property {(string|string[])[]} [images]  Illustration path per paragraph index; an array entry renders the images side by side.
 * @property {[number,number]} [imgSize]     Intrinsic [width,height] of this story's illustrations.
 * @property {string[]} body        Paragraph texts.
 */
/* ---------- stories ---------- */
const STORIES = [
  { id:"a1-1", level:"A1", motif:"door", title:"The Red Door", author:"E. Hartwell",
    blurb:"A quiet man, a small bird, and a door the colour of morning. Sometimes a friend is the smallest thing in the garden.",
    images:["images/A1/The red door/1.webp",["images/A1/The red door/2.webp","images/A1/The red door/3.webp"],"images/A1/The red door/4.webp"],
    imgSize:[2816,1536],
    body:[
      "Tom lives in a small town. His house is white. The door is red. Every morning, he opens the red door. He looks at the sky. The sky is blue. A small bird sits on the wall. The bird is brown.",
      "\"Good morning, bird,\" says Tom. The bird looks at him. Then it flies away. Tom walks to the shop. He buys bread and milk. The shop is near the park. In the park, children play. A dog runs after a ball. Tom smiles. He likes the park.",
      "At noon, Tom goes home. He opens the red door again. He makes tea. He sits by the window. The brown bird comes back. It sits on the wall. Tom is happy. \"You are my friend,\" he says. The bird sings a little song. Tom drinks his tea. It is a good day."
    ]},
  { id:"a1-2", level:"A1", motif:"cat", title:"Anna and the Cat", author:"M. Foley",
    blurb:"Pip the cat likes milk and sleep. But one afternoon Pip is gone, and a small search begins in the garden.",
    images:["images/A1/Anna and the Cat/1.webp","images/A1/Anna and the Cat/2.webp","images/A1/Anna and the Cat/3.webp"],
    imgSize:[1672,941],
    body:[
      "Anna has a cat. The cat is black and white. Its name is Pip. Pip is small. Pip likes milk. Every day, Anna gives Pip some milk. Pip drinks the milk. Then Pip sleeps on the bed.",
      "One day, Pip is not in the house. Anna looks in the kitchen. No cat. She looks under the bed. No cat. She looks in the garden. There is Pip! Pip is in a tree. \"Come down, Pip,\" says Anna. But Pip does not come down.",
      "Anna gets a chair. She stands on the chair. She takes Pip in her arms. \"You are a bad cat,\" she says. But she is not angry. She loves Pip. They go into the house. Anna gives Pip some milk. Pip is happy now. Pip sleeps on the bed again."
    ]},
  { id:"a1-3", level:"A1", motif:"market", title:"A Day at the Market", author:"R. Okonkwo",
    blurb:"On Saturday the market is full of colour and noise. Mrs. Lee has a basket, a few coins, and a soft spot for one pink flower.",
    images:["images/A1/A Day at the Market/1.webp","images/A1/A Day at the Market/2.webp","images/A1/A Day at the Market/3.webp","images/A1/A Day at the Market/4.webp"],
    imgSize:[2816,1536],
    body:[
      "It is Saturday. Mrs. Lee goes to the market. The market is big. There are many people. There are red apples and green pears. There is yellow cheese and fresh fish. Mrs. Lee has a basket.",
      "\"How much is the bread?\" she asks. \"Two coins,\" says the man. Mrs. Lee buys the bread. She buys apples too. The apples are sweet. She buys some fish for dinner.",
      "A little girl sells flowers. The flowers are white and pink. \"Please buy a flower,\" says the girl. Mrs. Lee buys one pink flower. She gives the girl a coin. \"Thank you,\" says the girl.",
      "Mrs. Lee goes home. Her basket is full. She is tired but happy. At home, she puts the flower in water. The kitchen smells good."
    ]},
  { id:"a1-4", level:"A1", motif:"tree", title:"The Apple Tree", author:"H. Blake",
    blurb:"An old tree, a yellow bird, and a cool red apple. Tom finds that the best things in life are already growing outside the door.",
    body:[
      "Tom has a small garden behind his house. In the garden, there is a big tree. The tree is very old. It has green leaves and many red apples. Tom loves the tree. Every morning, he goes outside and looks at it.",
      "One day, Tom sees a small yellow bird in the tree. The bird sits on a branch and sings. Tom stands under the tree and listens. The song is beautiful. He does not move. The bird looks at him and sings again.",
      "Tom picks one red apple from the tree. It is sweet and cold. He eats it slowly. Then a cat walks into the garden. The cat sees the bird and stops. But the bird flies away. The cat sits under the tree and looks at Tom.",
      "In the afternoon, Tom's sister, Lisa, comes to the garden. She looks at the tree. \"It is beautiful!\" she says. Tom gives her an apple. They sit under the tree together. The sun is warm. It is a good afternoon."
    ]},
  { id:"a2-1", level:"A2", motif:"key", title:"The Lost Key", author:"J. Marlowe",
    blurb:"Daniel is late, and his key is nowhere to be found. The rescue comes from the last place he thought to look: next door.",
    body:[
      "Daniel was late for work. He put on his coat and looked for his key. It was not on the table. It was not in his pocket. He looked everywhere, but he could not find it.",
      "\"Where did I leave it?\" he asked himself. He remembered the night before. He had come home in the rain. He had been very tired. Perhaps the key was still in the door? He ran outside, but the key was not there.",
      "Then he saw his neighbour, Mrs. Carter. She was holding something shiny. \"Is this yours?\" she asked with a smile. \"I found it on the path last night.\" It was his key! Daniel was so happy. \"Thank you so much,\" he said. \"You saved my morning.\"",
      "He took the key, locked the door carefully, and hurried to the bus. This time, he was only a little late."
    ]},
  { id:"a2-2", level:"A2", motif:"train", title:"The Night Train", author:"S. Bellamy",
    blurb:"A girl travels alone toward the mountains. An old man with a newspaper makes her a quiet promise about the morning.",
    body:[
      "The night train left the city at ten o'clock. Sara sat by the window with a small bag on her knees. Outside, the lights of the houses grew smaller and smaller. Soon there was only darkness and the sound of the wheels.",
      "An old man sat opposite her. He was reading a newspaper. After some time, he looked up. \"Are you travelling far?\" he asked kindly. \"To the mountains,\" said Sara. \"My grandmother lives there. I have not seen her for two years.\"",
      "The old man nodded. \"The mountains are beautiful in the morning,\" he said. \"When the sun comes up, you will see the snow on the high peaks.\" Sara smiled. She closed her eyes and tried to sleep. The train moved through the quiet night.",
      "When she woke up, the sky was turning pink, and far away she could see the mountains, white and bright, just as the old man had promised."
    ]},
  { id:"a2-3", level:"A2", motif:"map", title:"The Old Map", author:"P. Greaves",
    blurb:"Behind the old books, James finds a yellow map with a small red cross. What waits at the river is not gold, but something he keeps forever.",
    body:[
      "In the corner of the library, behind the old books, James found a map. It was very old. The paper was yellow and soft. There were strange marks on it, and a small red cross near the river.",
      "\"What is this place?\" he thought. He showed the map to his sister, Lucy. \"Maybe it is treasure,\" she said with bright eyes. \"Let's find out!\" The next morning, they took the map and walked to the river.",
      "They followed the old path between the trees. The map was difficult to read, but at last they came to a big stone near the water. Lucy looked behind the stone. There was a small metal box!",
      "Inside the box, there was no gold. There were old letters and a photograph of two children, long ago. \"It is not treasure,\" said James quietly. \"It is a memory.\" They put the box back, but they kept the map forever."
    ]},
  { id:"a2-4", level:"A2", motif:"lamp", title:"The Birthday Surprise", author:"T. Lawson",
    blurb:"Omar has an idea, a few friends, and very little money. Sometimes the best gifts are the ones nobody had to buy.",
    body:[
      "It was Emma's birthday next Saturday. Her friend, Omar, wanted to make it special. He knew that Emma loved flowers, books, and chocolate cake. But he did not have much money, and the shops were very expensive. He thought about it for two days. Then he had an idea. He called their other friends — Yuki, Carlos, and Sophie — and told them his plan. They all agreed. It was going to be a good surprise.",
      "On Friday afternoon, they met at Omar's house. Yuki brought flowers from her garden: yellow and white ones. Carlos made a chocolate cake at home. It was not very beautiful, but it smelled wonderful. Sophie found a small book of poems in a second-hand shop and wrapped it in blue paper. Omar cleaned his kitchen and put a white cloth on the table. By seven o'clock, everything was ready.",
      "They sent a message to Emma and asked her to come to Omar's house. They said only that they needed her help with something. Emma was a little surprised, but she came. When she opened the door, the room was dark. Then the lights came on. All her friends shouted \"Happy birthday!\" Emma stopped. She looked at the flowers, the cake, and the small blue present on the table. Her eyes became wet. \"I didn't know you remembered,\" she said quietly.",
      "They had dinner together. Carlos's cake was a little too sweet, but everyone ate two pieces. Yuki told a funny story about the flowers — she had to carry them on the bus, and a woman thought she was going to a wedding. They all laughed. After dinner, Emma opened her present. She read the first poem out loud. It was about friendship. Nobody spoke when she finished. Then Omar smiled and said, \"Shall we have more cake?\"",
      "Emma stayed until late. When she left, she hugged everyone at the door. The night was cold and the street was quiet. She walked home slowly. She moved to the city only one year ago, and sometimes she felt lonely. But tonight was different. She put her hand in her coat pocket and felt the small book. She smiled and walked faster."
    ]},
  { id:"b1-1", level:"B1", motif:"lighthouse", title:"The Lighthouse Keeper", author:"A. Whitlock",
    blurb:"For thirty years Edward has kept the light on Grey Rock. On the worst night of the year, a small steady flame becomes everything.",
    body:[
      "For thirty years, Edward had kept the lighthouse on Grey Rock. Every evening, as the sun sank into the sea, he climbed the narrow stairs and lit the great lamp. Its light turned slowly through the night, warning ships of the dangerous rocks below.",
      "Edward lived alone, but he was never truly lonely. He knew every bird that nested on the cliffs and every change in the colour of the water. The sailors who passed never saw his face, yet they trusted him completely. His light meant that someone was watching, that the way home was safe.",
      "One stormy night, the wind screamed and the waves rose like grey mountains. Through the rain, Edward saw a small fishing boat in trouble, too close to the rocks. He could not reach it, but he did the only thing he could: he kept the lamp burning, bright and steady. The fishermen saw the light and turned their boat just in time.",
      "The next morning, the sea was calm again. A young fisherman climbed up to the lighthouse to say thank you. \"We would have died without your light,\" he said. Edward only smiled. \"That is why I am here,\" he answered. \"A light is a small thing, but on a dark night, it can be everything.\""
    ]},
  { id:"b1-2", level:"B1", motif:"clock", title:"The Clockmaker's Daughter", author:"L. Renner",
    blurb:"In a shop full of ticking hearts, Mira inherits her father's craft, and learns why a single tiny spring can return a man his grandfather.",
    body:[
      "In a quiet street in the old town, there was a small shop full of clocks. They covered every wall, and all day long they ticked together like a hundred small hearts. The shop belonged to Mr. Albrecht, an old clockmaker, and his daughter, Mira.",
      "Mira had grown up among the clocks. She knew how to open them, clean them, and listen to their tiny voices. Her father had taught her that every clock had a character of its own. \"Some are nervous, some are lazy, and some are proud,\" he used to say with a smile.",
      "When her father became ill, the work of the shop fell to Mira. Many customers were surprised to find a young woman behind the counter. \"Can she really fix a clock?\" they whispered. But when they saw how carefully she worked, their doubts disappeared.",
      "One day, a rich man brought in a clock that no one in the city could repair. It had belonged to his grandfather, and it had been silent for many years. Mira worked on it for three days. She found a broken spring, no bigger than a hair, deep inside the machine.",
      "When she finished, the clock began to tick again, soft and steady. The man had tears in his eyes. \"You have given my grandfather back to me,\" he said. And Mira understood, at last, why her father loved his work so much."
    ]},
  { id:"b1-3", level:"B1", motif:"ship", title:"Letters from the Sea", author:"C. Doran",
    blurb:"An old sailor's letters teach his niece about distant ports, and about the one harbour he most wanted to reach.",
    body:[
      "Every summer, when she was young, Helen visited her uncle by the sea. He had once been a sailor, and his house was full of strange objects from faraway places: shells, maps, and a brass telescope that smelled of salt.",
      "The thing Helen loved most was a wooden box of letters. They had been written by her uncle to his family, many years before, from ships all over the world. In them, he described storms and quiet seas, foreign ports and the friends he had made. Helen read them again and again until she knew them almost by heart.",
      "\"Why did you stop sailing?\" she asked him one evening, as they watched the waves. The old man was quiet for a moment. \"Because one day I realised that the place I most wanted to reach was home,\" he said. \"The sea taught me many things, but it also taught me what I had left behind.\"",
      "Years later, when her uncle had died, Helen found the box of letters again. This time she added one of her own, written to him, full of all the things she had never said. She did not post it, of course. She simply placed it in the box with the others and closed the lid gently, as if she were closing a door between two worlds."
    ]},
  { id:"b2-1", level:"B2", motif:"house", title:"The House on Marsh Lane", author:"V. Ashcombe",
    blurb:"A writer buys a house the village would rather forget. What she finds inside is not ghosts, but the traces of those who lived and lost there.",
    body:[
      "No one had lived in the house on Marsh Lane for nearly twenty years, and the village had grown used to its silence. Children dared one another to touch its gate; older people simply looked away when they passed, as though the building reminded them of something they preferred to forget.",
      "When Clara bought the house, the villagers were polite but distant. She was an outsider, a writer from the city who claimed she wanted \"peace and quiet.\" What she found instead was a house full of voices, not ghosts exactly, but the traces of the people who had lived there: a child's height marked in pencil on a doorframe, initials carved into a windowsill, a faded photograph left in a drawer.",
      "As the weeks passed, Clara became curious. She began to ask questions in the village shop, and slowly the story came out. The house had belonged to a family that had lost everything in a single hard winter. After that, the place had simply been left to the damp and the wind.",
      "Clara could have sold the house and moved on. Instead, she stayed. She repaired the broken windows and planted a garden where the marsh had crept too close. Little by little, the villagers began to visit. They brought stories of their own, and the house, which had been a monument to loss, slowly became something else: a place where the past was remembered without fear."
    ]},
  { id:"b2-2", level:"B2", motif:"gears", title:"The Watchmaker of Vienna", author:"H. Strauss",
    blurb:"The finest watchmaker in Vienna measures time for everyone but himself, until a clumsy apprentice teaches him how to spend it.",
    body:[
      "Herr Brandt was, by any reasonable measure, the finest watchmaker in Vienna. His instruments were so precise that the city's musicians used them to keep time, and so beautiful that wealthy families passed them down from one generation to the next. Yet for all his skill, Herr Brandt was a deeply unhappy man.",
      "The problem, as he saw it, was time itself. He spent his days measuring it, dividing it into ever smaller pieces, and yet he felt that his own life was slipping through his fingers, unmeasured and unlived. He had no family, few friends, and no memory of the last time he had laughed without thinking of work.",
      "One winter, a young apprentice named Lotte came to work in his shop. She was clumsy at first, and impatient, but she possessed something that Herr Brandt had lost long ago: a sense of wonder. She would hold a finished watch to her ear and listen as though it were telling her a secret. She asked endless questions, not about how watches worked, but about why they mattered.",
      "Slowly, almost against his will, Herr Brandt began to change. He started to take walks in the afternoon. He noticed the light on the river and the sound of bells across the city. When at last he gave Lotte her own bench in the shop, he realised that the most valuable thing he had ever made was not a watch at all, but the time he had finally learned to spend."
    ]},
  { id:"b2-3", level:"B2", motif:"mountains", title:"Smoke over the Valley", author:"D. Petrova",
    blurb:"As wildfire crawls down the mountain, an old man refuses to leave his orchard. His granddaughter stays to learn what the land remembers.",
    body:[
      "The fire had started somewhere high in the mountains, and for three days the wind had carried it steadily down toward the valley. From the village, the people watched the line of smoke grow thicker, an orange glow appearing at night above the dark shape of the hills.",
      "Most of the younger families had already packed their cars and left. But old Mr. Sava refused to go. He had lived in the same stone house all his life, as had his father before him, and he could not imagine abandoning the orchard he had spent fifty years tending. \"The trees cannot run,\" he said simply. \"So neither will I.\"",
      "His granddaughter, Mira, stayed with him, though she was afraid. Together they cleared the dry grass around the house and soaked the roof with water from the well. They worked until their hands were raw and the sky had turned the colour of rust. When the fire finally reached the edge of their land, they stood together and watched, ready to run if they had to.",
      "But the wind changed. In the cool of the early morning, rain began to fall, light at first, then heavy and steady, and the fire died into hissing smoke. The orchard was scorched at its edges, but it had survived. Mr. Sava knelt and touched the wet earth. \"You see,\" he said quietly to his granddaughter, \"the land remembers those who stay.\""
    ]},
  { id:"c1-1", level:"C1", motif:"map", title:"The Cartographer's Confession", author:"A. Reyes",
    blurb:"For forty years he drew coastlines he had never seen. Near the end, the most honest map he ever made was of the limits of his own knowledge.",
    body:[
      "For the better part of forty years, Augustin Reyes had drawn maps for an empire that no longer existed. He had charted coastlines that other men had only glimpsed through fog, named rivers that no European had previously crossed, and filled the blank spaces of distant continents with mountains, forests, and the occasional, half-imagined beast. His maps hung in palaces and naval academies; his reputation was, in the language of his time, beyond reproach.",
      "And yet, in the quiet of his study, Augustin kept a secret that would have destroyed him. Many of the lands he had drawn so confidently, he had never seen. He had inferred them, guessed at them, stitched them together from the contradictory reports of sailors who were often drunk and always exaggerating. Where the evidence ran out, he had simply continued the line, trusting that the world would be kind enough to match his imagination.",
      "Most of the time, it was. But occasionally, ships sailed by his maps and found nothing where he had promised a harbour, or rocks where he had drawn open water. Men had died, he understood, following the elegant certainty of his ink. This knowledge sat in him like a stone.",
      "Near the end of his life, Augustin began a final map, not of any real place, but of the limits of his own knowledge. He marked, with painful honesty, every coast he had invented and every river he had imagined. He labelled the vast interior of his most famous continent with a single phrase, repeated in his careful hand: \"Here I did not know.\" It was, he thought, the truest thing he had ever drawn. He left it unsigned, and asked that it be burned. His apprentice, who loved him, did not."
    ]},
  { id:"c1-2", level:"C1", motif:"tree", title:"An Inheritance of Silence", author:"E. Vance",
    blurb:"After eleven years of estrangement, Eleanor inherits her quiet aunt's house, and discovers that silence was never the same thing as indifference.",
    body:[
      "When the lawyer's letter arrived, Eleanor had not spoken to her family in eleven years. The estrangement had been gradual rather than dramatic, not a single quarrel but a slow accumulation of unanswered calls and unsaid things, until the silence between them had hardened into something that felt permanent. So it was with a peculiar sense of unreality that she read that her aunt Margaret had died and left her the house in the country, along with everything in it.",
      "She had not expected to be remembered at all. Margaret had always been the most reserved of her relatives, a woman who measured her words as though they were expensive, and who had watched the family's quarrels from a distance with an expression that gave nothing away. Eleanor had assumed, in the careless way of the young, that her aunt simply did not care.",
      "The house, when she finally visited, told a different story. In the attic, Eleanor found boxes carefully labelled in Margaret's handwriting, each containing things that belonged to a different member of the family: a child's drawing, a wedding invitation, a newspaper clipping about a graduation. Her aunt, it seemed, had been quietly collecting the family's life for decades, preserving the very connections that the rest of them had been so careless to break.",
      "At the bottom of one box, Eleanor found a letter addressed to her, written years before, and never sent. It was brief. \"I am not good with words,\" her aunt had written, \"so I have kept things instead. When you are ready, they will tell you that you were always loved.\" Eleanor sat on the dusty floor of the attic for a long time. The silence around her, she realised, had never been emptiness. It had been a kind of waiting."
    ]},
  { id:"c1-4", level:"C1", motif:"book", title:"The Untranslatable", author:"I. Nakamura",
    blurb:"Forty years translating one poet's work, Emi has been praised for her precision. A dead man's notebook teaches her what she has been feeling all her life but had never managed to name.",
    body:[
      "For forty years, Emi Yoshida had been the voice through which a British poet spoke to Japanese readers. She had translated all seven of Aldous Gray's collections, working with the slow, exacting patience of someone who understood that a single mistranslated word could corrupt an entire poem the way a crack corrupts a bell. Literary critics had praised her versions as \"scrupulously faithful\" and \"quietly revelatory.\" When Gray died, it was to Emi that his estate sent the boxes of private papers, with a note saying that they could think of no one more fitting to receive them.",
      "Among the notebooks, she found one dedicated entirely to his most famous poem, \"The Leaving.\" She had translated it a dozen times over the decades, revising slightly with each new edition, and she had always rendered its central word — a plain English word of seven letters — as a Japanese term meaning a profound longing for something absent. It was the obvious choice; every Japanese translator of Gray had made the same one. But reading his notes, she discovered that the word had been chosen to mean something far more specific: the ache of knowing that something was never fully possessed even in the moment of having it — not lost, precisely, but perpetually just beyond complete grasp.",
      "There was, she understood immediately, no single Japanese word for this. She spent three weeks searching, filling notebooks with candidates and crossing each one out in turn. None of them held the right weight — that particular combination of presence and insufficiency that Gray had intended. She wrote to other translators, two in Germany and one in Brazil, all of whom had rendered the same poem. They had all made the same error. None of them had thought to look for a word that did not exist in their own language.",
      "It was during one of these searching evenings, with open notebooks covering every surface of her desk, that she recognised what she had been feeling for most of her adult life. She had never married. She had spent her years giving voice to another person's vision, finding the closest available approximations and accepting their inadequacy as though it were a natural law rather than a choice. The sensation Gray had been writing about — the impossible gulf between wanting and having, even in the act of having — was not a literary problem she had encountered in a dead man's notebook. It was the texture of her own experience, left unnamed for decades.",
      "The new translation she produced was accompanied by an explanatory note that ran to four dense pages, longer than the poem itself. In it, she did not simply define the word; she circled it, approached it from multiple angles, offered historical contexts, negations, and the testimonies of other languages that had come close but not quite arrived. Her editor, a practical woman, asked if she might consider shortening it. Emi considered this for a moment and then, for the first time in forty years, declined. \"It is not a note,\" she said quietly. \"It is the translation.\" The edition was published the following spring. Critics called the accompanying note unprecedented, excessive, and essential. Emi read their responses with the same steady attention she had always given to Gray's poetry, and found that for once the praise did not satisfy her and the criticism did not sting. She had, at last, written something entirely her own."
    ]},
  { id:"c1-3", level:"C1", motif:"theatre", title:"The Last Performance", author:"V. Mercer",
    blurb:"A forgotten actress is offered a role of a single scene. In a few minutes of stage light, she rediscovers what the work was always for.",
    body:[
      "Vivienne Mercer had been a great actress, once. The theatres of three continents had emptied their seats for her; critics had exhausted their vocabularies trying to describe what she did on a stage. But that had been a long time ago, and the public, which adores nothing so much as a new face, had gradually forgotten the old one. By the time she was seventy, Vivienne lived alone in a small flat above a bakery, surrounded by the photographs of a woman who no longer seemed to exist.",
      "When a young director approached her about a new play, she assumed at first that it was a mistake, or worse, an act of charity. The role was small, an old woman who appears in a single scene and speaks for no more than a few minutes. Vivienne nearly refused. Her pride, which had survived everything else, recoiled at the idea of returning to the stage as a footnote.",
      "But something in the lines stayed with her. The character, like Vivienne herself, was a person whom the world had decided to overlook, and the few minutes she was given were her only chance to insist that she had existed, that she had mattered. Vivienne understood the part completely, because she was living it.",
      "On opening night, she walked onto the stage for the first time in fifteen years. The audience, who did not recognise her, grew quiet not out of respect but out of attention, for there was something in the way this old woman held the silence that made them lean forward in their seats. When she finished, there was a pause, the rarest and most honest of all theatrical sounds, before the applause began.",
      "Vivienne stood very still in the light. She had not come back to be remembered, she realised. She had come back to remind herself of what she had always known: that the work, and not the fame, had been the point all along."
    ]}
];

const LEVELS = ["A1","A2","B1","B2","C1"];
const LEVEL_DESC = {
  A1:"Beginner — short sentences, present tense",
  A2:"Elementary — everyday past and future",
  B1:"Intermediate — longer narrative, feeling",
  B2:"Upper-intermediate — nuance and atmosphere",
  C1:"Advanced — literary prose and complexity"
};
const ACCENTS = { A1:"#5b7d4f", A2:"#3f6b8a", B1:"#a63422", B2:"#8a5a1f", C1:"#5a3a6b" };
