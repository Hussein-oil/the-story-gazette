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
 * @property {string[]} body        Paragraph texts.
 */
/* ---------- stories ---------- */
const STORIES = [
  { id:"a1-1", level:"A1", motif:"door", title:"The Red Door", author:"E. Hartwell",
    blurb:"A quiet man, a small bird, and a door the colour of morning. Sometimes a friend is the smallest thing in the garden.",
    body:[
      "Tom lives in a small town. His house is white. The door is red. Every morning, he opens the red door. He looks at the sky. The sky is blue. A small bird sits on the wall. The bird is brown.",
      "\"Good morning, bird,\" says Tom. The bird looks at him. Then it flies away. Tom walks to the shop. He buys bread and milk. The shop is near the park. In the park, children play. A dog runs after a ball. Tom smiles. He likes the park.",
      "At noon, Tom goes home. He opens the red door again. He makes tea. He sits by the window. The brown bird comes back. It sits on the wall. Tom is happy. \"You are my friend,\" he says. The bird sings a little song. Tom drinks his tea. It is a good day."
    ]},
  { id:"a1-2", level:"A1", motif:"cat", title:"Anna and the Cat", author:"M. Foley",
    blurb:"Pip the cat likes milk and sleep. But one afternoon Pip is gone, and a small search begins in the garden.",
    body:[
      "Anna has a cat. The cat is black and white. Its name is Pip. Pip is small. Pip likes milk. Every day, Anna gives Pip some milk. Pip drinks the milk. Then Pip sleeps on the bed.",
      "One day, Pip is not in the house. Anna looks in the kitchen. No cat. She looks under the bed. No cat. She looks in the garden. There is Pip! Pip is in a tree. \"Come down, Pip,\" says Anna. But Pip does not come down.",
      "Anna gets a chair. She stands on the chair. She takes Pip in her arms. \"You are a bad cat,\" she says. But she is not angry. She loves Pip. They go into the house. Anna gives Pip some milk. Pip is happy now. Pip sleeps on the bed again."
    ]},
  { id:"a1-3", level:"A1", motif:"market", title:"A Day at the Market", author:"R. Okonkwo",
    blurb:"On Saturday the market is full of colour and noise. Mrs. Lee has a basket, a few coins, and a soft spot for one pink flower.",
    body:[
      "It is Saturday. Mrs. Lee goes to the market. The market is big. There are many people. There are red apples and green pears. There is yellow cheese and fresh fish. Mrs. Lee has a basket.",
      "\"How much is the bread?\" she asks. \"Two coins,\" says the man. Mrs. Lee buys the bread. She buys apples too. The apples are sweet. She buys some fish for dinner.",
      "A little girl sells flowers. The flowers are white and pink. \"Please buy a flower,\" says the girl. Mrs. Lee buys one pink flower. She gives the girl a coin. \"Thank you,\" says the girl.",
      "Mrs. Lee goes home. Her basket is full. She is tired but happy. At home, she puts the flower in water. The kitchen smells good."
    ]},
  { id:"a1-4", level:"A1", motif:"appletree", title:"The Apple Tree", author:"H. Blake",
    blurb:"An old tree, a yellow bird, and a cool red apple. Tom finds that the best things in life are already growing outside the door.",
    body:[
      "Tom has a small garden behind his house. In the garden, there is a big tree. The tree is very old. It has green leaves and many red apples. Tom loves the tree. Every morning, he goes outside and looks at it.",
      "One day, Tom sees a small yellow bird in the tree. The bird sits on a branch and sings. Tom stands under the tree and listens. The song is beautiful. He does not move. The bird looks at him and sings again.",
      "Tom picks one red apple from the tree. It is sweet and cold. He eats it slowly. Then a cat walks into the garden. The cat sees the bird and stops. But the bird flies away. The cat sits under the tree and looks at Tom.",
      "In the afternoon, Tom's sister, Lisa, comes to the garden. She looks at the tree. \"It is beautiful!\" she says. Tom gives her an apple. They sit under the tree together. The sun is warm. It is a good afternoon."
    ]},
  { id:"a1-5", level:"A1", motif:"shoe", title:"New Shoes", author:"D. Pierce",
    blurb:"Mia needs new shoes for school. At the shop there are many colours, but only one pair feels just right.",
    body:[
      "Mia is seven years old. Her old shoes are too small. Her feet hurt. \"You need new shoes,\" says her mother. On Saturday, they go to the shop. The shop is in town.",
      "There are many shoes in the shop. Some are red. Some are blue. Some are black. Mia likes the red shoes. She tries them on. They are too big. She tries blue shoes. They are good. She walks in them. They feel nice.",
      "\"I like the blue shoes,\" says Mia. Her mother smiles. \"Then we take the blue shoes,\" she says. They pay the man at the desk. Mia carries the box. She is very happy. On Monday, she wears her new blue shoes to school."
    ]},
  { id:"a1-6", level:"A1", motif:"family", title:"My Family", author:"K. Adeyemi",
    blurb:"Sam draws a picture of his family. Mum, Dad, his sister, and the dog all live in one small, happy house.",
    body:[
      "My name is Sam. I am eight years old. I live in a small house. The house is green. I live with my family. I love my family.",
      "I have a mother and a father. My mother is a teacher. My father is a cook. I have one sister. Her name is Lily. She is five years old. We have a dog too. The dog is brown. Its name is Max.",
      "In the morning, we eat breakfast together. We eat bread and eggs. My father makes tea. In the evening, we sit and talk. Lily plays with Max. The house is small, but we are happy. I love my home."
    ]},
  { id:"a1-7", level:"A1", motif:"rain", title:"A Rainy Day", author:"E. Frost",
    blurb:"It rains all day, so Ben cannot play outside. But inside the warm house there is a game, a book, and hot soup.",
    body:[
      "It is morning. Ben looks out of the window. The sky is grey. It is raining. The rain falls on the street. \"I cannot play outside today,\" says Ben. He is sad.",
      "\"Do not be sad,\" says his mother. \"We can play inside.\" They play a game on the floor. Then they read a book about a lion. The book is funny. Ben laughs. The rain falls on the window, but the house is warm.",
      "At noon, his mother makes hot soup. The soup is good. Ben eats it all. After lunch, the rain stops. The sun comes out. Ben runs into the garden. The grass is wet. He jumps in the water. Now Ben is happy again."
    ]},
  { id:"a1-8", level:"A1", motif:"dog", title:"The Big Dog", author:"R. Salas",
    blurb:"A big dog stands at the gate, and Nora is afraid. Then she learns that big does not always mean dangerous.",
    body:[
      "Nora walks to school every day. On the way, there is a small house. A big dog lives there. The dog is black. It is very big. Nora is afraid of the dog.",
      "One morning, the dog is at the gate. It looks at Nora. Nora stops. She does not move. The dog opens its mouth. But it does not bark. It wags its tail. An old man comes out of the house. \"Do not be afraid,\" he says. \"His name is Rocky. He is a good dog.\"",
      "Nora puts out her hand slowly. The dog smells her hand. Then it licks her fingers. Nora laughs. The dog is not bad. It is friendly. Now, every morning, Nora says hello to Rocky. They are friends."
    ]},
  { id:"a1-9", level:"A1", motif:"pencil", title:"At School", author:"M. Ortega",
    blurb:"It is the first day at a new school. Leo is nervous, until a boy with a red pencil sits down beside him.",
    body:[
      "Today is Leo's first day at his new school. He is nine years old. He puts on his bag. He walks to school with his father. Leo is nervous. He does not know the other children.",
      "The classroom is big. There are many desks. The teacher is kind. Her name is Miss Park. \"Sit here, Leo,\" she says. Leo sits at a desk near the window. A boy sits next to him. The boy has a red pencil.",
      "\"Hello. My name is Tom,\" says the boy. \"Do you want to play at lunch?\" Leo smiles. \"Yes, please,\" he says. At lunch, they play football. They run and laugh. Now Leo has a friend. He likes his new school."
    ]},
  { id:"a1-10", level:"A1", motif:"bus", title:"The Late Bus", author:"S. Nair",
    blurb:"Grace runs to the bus stop, but the bus is gone. Waiting for the next one brings an unexpected new friend.",
    body:[
      "It is eight o'clock. Grace must go to work. She runs to the bus stop. But the bus is not there. It is gone. Grace is late. \"Oh no,\" she says. She looks at her watch.",
      "Grace sits on the bench. She waits for the next bus. A woman sits next to her. The woman is old. She has a big bag. \"The bus is always late,\" says the woman. She smiles. Grace smiles too.",
      "They talk about the weather. They talk about the town. The time goes fast. Soon, the next bus comes. Grace and the woman get on the bus. They sit together. Grace is late for work, but she has a new friend. It is a good morning after all."
    ]},
  { id:"a1-11", level:"A1", motif:"boat", title:"The Little Boat", author:"P. Hale",
    blurb:"At the lake, a father and son sail a small paper boat. When the wind takes it away, they make a new one.",
    body:[
      "It is a sunny day. Jack and his father go to the lake. The water is blue and calm. Jack has a little boat. The boat is white. It is made of paper. His father made it for him.",
      "Jack puts the boat on the water. The wind blows. The boat moves slowly. \"Look, it sails!\" says Jack. He is happy. The boat goes far on the water. Jack and his father watch it.",
      "Then a big wind comes. The boat falls over. It gets wet. The paper boat is gone. Jack is sad. But his father takes more paper. \"We can make a new one,\" he says. They sit on the grass. Together, they make a new boat. Jack smiles again."
    ]},
  { id:"a1-12", level:"A1", motif:"friends", title:"My Best Friend", author:"T. Bauer",
    blurb:"Every day after school, Ella and Zoe meet under the big tree. Today, one of them has good news and bad news.",
    body:[
      "Ella has a best friend. Her name is Zoe. They are both ten years old. Every day after school, they meet under the big tree in the park. They sit and talk. They share their food.",
      "Today, Zoe looks sad. \"What is wrong?\" asks Ella. \"I have good news and bad news,\" says Zoe. \"The good news is, my family has a new house. The bad news is, the house is in another town. I must move away.\"",
      "Ella is very sad. She does not want Zoe to go. But Zoe takes her hand. \"We can write letters,\" she says. \"And you can visit me in the summer.\" Ella smiles a little. \"Yes,\" she says. \"You are my best friend. Always.\" They sit under the tree until the sun goes down."
    ]},
  { id:"a1-13", level:"A1", motif:"snowman", title:"The First Snow", author:"L. Kowalski",
    blurb:"One winter morning the whole town is white. Two children run outside to build their very first snowman.",
    body:[
      "It is winter. The air is very cold. One morning, Nina wakes up. She looks out of the window. Everything is white! Snow is on the trees. Snow is on the cars. Snow is on the street.",
      "\"Snow! It is the first snow!\" says Nina. She wakes up her little brother, Leo. They put on warm coats. They put on hats and gloves. They run outside. The snow is soft and cold. They are very happy.",
      "Nina and Leo make a big ball of snow. Then they make another ball. They put one ball on top of the other. They make a snowman! They give it two stones for eyes and a stick for a nose. \"Hello, snowman,\" says Leo. They laugh. It is a cold but wonderful day."
    ]},
  { id:"a1-14", level:"A1", motif:"cake", title:"The Birthday Cake", author:"C. Mendez",
    blurb:"Dad and the children make a cake for Mum's birthday. The kitchen gets messy, but the surprise is perfect.",
    body:[
      "Today is a special day. It is Mum's birthday. Dad has an idea. \"Let's make a cake,\" he says to the children. Amy and Ben are happy. They want to help.",
      "They get eggs, flour, sugar, and butter. Dad mixes them in a big bowl. Amy puts in the sugar. Ben breaks the eggs. The kitchen is a mess! There is flour on the table and on the floor. They laugh.",
      "They put the cake in the oven. Soon, the kitchen smells very good. The cake is ready. It is brown and warm. They put a candle on top. When Mum comes home, they sing \"Happy Birthday.\" Mum is surprised and happy. The cake is sweet, and the day is perfect."
    ]},
  { id:"a1-15", level:"A1", motif:"seedling", title:"The Garden", author:"A. Devi",
    blurb:"Grandpa gives Omar some small seeds. Omar plants them, waters them, and learns that good things take time.",
    body:[
      "Omar visits his grandpa in the summer. Grandpa has a big garden. There are flowers and vegetables. There are red tomatoes and green beans. Omar loves the garden.",
      "One day, Grandpa gives Omar some small seeds. \"Plant these,\" he says. Omar puts the seeds in the ground. He gives them water. \"When will they grow?\" he asks. \"Be patient,\" says Grandpa. \"Good things take time.\"",
      "Every day, Omar gives the seeds water. He waits and waits. Nothing happens. Then, after many days, he sees something green. Small plants come out of the ground! Omar is very happy. \"They are growing!\" he shouts. Grandpa smiles. \"Yes,\" he says. \"You are a good gardener now.\""
    ]},
  { id:"a1-16", level:"A1", motif:"pawbowl", title:"The Hungry Cat", author:"J. Bennett",
    blurb:"A small grey cat comes to Maria's door every night. She gives it milk, and soon it has a name and a home.",
    body:[
      "Maria lives near the sea. One cold night, she hears a small noise at the door. \"Meow.\" She opens the door. A little grey cat is there. It is thin and hungry. It looks at Maria with big eyes.",
      "\"Are you hungry, little cat?\" says Maria. She gives the cat some milk and some fish. The cat eats fast. Then it is happy. It sits by the warm fire. Maria is happy too. She is not alone now.",
      "The next night, the cat comes again. And the next night too. Maria gives it a name. She calls it Smoky, because it is grey. Now Smoky lives with Maria. Every evening, they sit by the fire together. Maria has a new friend."
    ]},
  { id:"a1-17", level:"A1", motif:"city", title:"The Trip to the City", author:"H. Lindqvist",
    blurb:"Sofia takes the train to the big city for the first time. It is loud and busy, but full of wonderful things.",
    body:[
      "Sofia lives in a small village. Today, she goes to the big city. It is her first time. She is excited. She takes the train. The train is fast. Sofia looks out of the window. She sees fields and rivers.",
      "The city is very big. There are tall buildings. There are many cars and many people. It is loud. Sofia holds her mother's hand. \"Stay close,\" says her mother. They walk in the busy streets.",
      "They visit a big park. They eat ice cream. The ice cream is cold and sweet. They see a museum with old things. Sofia likes the city, but it is tiring. In the evening, they take the train home. Sofia falls asleep on the train. It is a big day."
    ]},
  { id:"a1-18", level:"A1", motif:"hat", title:"The Lost Hat", author:"G. Russo",
    blurb:"The wind takes Peter's favourite hat down the street. He chases it, with help from some friendly strangers.",
    body:[
      "Peter has a favourite hat. It is blue with white stars. He wears it every day. One windy morning, he walks to the park. Suddenly, a big wind comes. It takes his hat! The hat flies away.",
      "\"My hat!\" shouts Peter. He runs after it. The hat goes down the street. A woman tries to catch it. She misses. A boy on a bike tries too. He misses. The hat goes up and up.",
      "Then the hat falls into a tree. A man is near the tree. He is tall. He puts up his hand and catches the hat. \"Is this yours?\" he asks Peter. \"Yes! Thank you!\" says Peter. He puts on his hat. It is safe now. Peter holds it tight all the way home."
    ]},
  { id:"a1-19", level:"A1", motif:"teapot", title:"Tea with Grandma", author:"W. Tanaka",
    blurb:"Every Sunday, Lucy visits her grandma. They drink tea, eat biscuits, and look at old photographs together.",
    body:[
      "Every Sunday, Lucy visits her grandma. Grandma lives in a small house near the river. The house is old but warm. Lucy loves to go there. Grandma always smiles when she sees her.",
      "Grandma makes tea. The tea is hot and sweet. They eat biscuits too. The biscuits are soft. They sit by the window and talk. Lucy tells Grandma about school. Grandma listens carefully.",
      "After tea, Grandma takes out an old box. Inside, there are many photographs. \"This is your mother when she was a girl,\" says Grandma. Lucy looks at the photos. She laughs. They are very old. Lucy loves Sundays with Grandma. It is her favourite day of the week."
    ]},
  { id:"a1-20", level:"A1", motif:"football", title:"The Football Game", author:"F. Mbeki",
    blurb:"Carlos and his friends play football in the street. His team is losing, until the very last minute.",
    body:[
      "It is Saturday afternoon. Carlos and his friends play football in the street. The sun is warm. There are six boys. They make two teams. Carlos is in the red team. His friend Diego is in the blue team.",
      "The game starts. The blue team is good. They score one goal. Then they score another goal. The red team is losing, two to zero. Carlos is tired. But he does not stop. He runs and runs.",
      "In the last minute, Carlos gets the ball. He runs fast. He kicks the ball hard. Goal! Then he scores again. Now it is two to two! The boys cheer. \"Good game!\" says Diego. They are all hot and tired, but happy. They sit on the ground and drink water together."
    ]},
  { id:"a1-21", level:"A1", motif:"clock", title:"The Old Clock", author:"N. Petrov",
    blurb:"An old clock in the hall has been silent for years. Today, a curious girl and her grandfather make it tick again.",
    body:[
      "In Anna's house, there is an old clock. It stands in the hall. It is tall and brown. But it is quiet. It does not work. It has not worked for many years. Anna looks at it every day.",
      "\"Why is the clock quiet?\" Anna asks her grandfather. \"It is old and broken,\" he says. \"But maybe we can fix it.\" They open the small door at the front. Inside, there are many little parts. Some are covered in dust.",
      "Grandfather cleans the parts. He works slowly and carefully. Anna watches him. After a long time, he moves a small wheel. Suddenly, the clock makes a sound. \"Tick, tock. Tick, tock.\" The clock works again! Anna claps her hands. \"It is alive!\" she says. Now the old clock ticks in the hall every day."
    ]},
  { id:"a1-22", level:"A1", motif:"beach", title:"A Day at the Beach", author:"O. Larsson",
    blurb:"The Costa family spends a hot summer day at the beach, swimming, building castles, and watching the sun go down.",
    body:[
      "It is a hot summer day. The Costa family goes to the beach. There is Mum, Dad, and two children, Rosa and Mateo. The sky is blue. The sea is big and beautiful. The sand is yellow and warm.",
      "The children run to the water. The water is cold but nice. They swim and play. Then they make a castle in the sand. The castle is big. They use shells for windows. Dad helps them. Mum reads a book under an umbrella.",
      "At lunch, they eat sandwiches and fruit. The food tastes good. In the afternoon, they look for shells. Rosa finds a pink one. Mateo finds a white one. In the evening, the sun goes down. The sky is red and orange. \"What a wonderful day,\" says Mum. They go home tired and happy."
    ]},
  { id:"a1-23", level:"A1", motif:"book", title:"The New Book", author:"B. Okafor",
    blurb:"Tom does not like reading, until the librarian gives him a book about dragons that he simply cannot put down.",
    body:[
      "Tom does not like books. He thinks they are boring. He likes television and games. One day, his teacher takes the class to the library. The library is big. There are books everywhere.",
      "Tom does not know what to read. The librarian is a kind woman. \"What do you like?\" she asks. \"I like dragons,\" says Tom. The librarian smiles. She gives him a book. On the cover, there is a big red dragon. \"Try this one,\" she says.",
      "Tom opens the book. He starts to read. The story is exciting! There are dragons, castles, and brave children. Tom reads and reads. He does not want to stop. \"This is a good book,\" he says. Now Tom loves books. Every week, he visits the library for a new story."
    ]},
  { id:"a1-24", level:"A1", motif:"bench", title:"A Walk in the Park", author:"S. Ferraro",
    blurb:"On a bright spring morning, an old man and his granddaughter feed the ducks and enjoy the simple things.",
    body:[
      "It is a bright spring morning. Mr. Green is an old man. He walks in the park with his granddaughter, Ivy. The grass is green. The flowers are red and yellow. The birds sing in the trees.",
      "They walk to the small lake. There are ducks on the water. The ducks are brown and white. Ivy has some bread. She gives it to the ducks. The ducks come close. They eat the bread fast. Ivy laughs.",
      "Mr. Green and Ivy sit on a bench. They watch the ducks. The sun is warm on their faces. \"I love the park, Grandpa,\" says Ivy. \"I love it too,\" says Mr. Green. \"Simple things are the best things.\" They sit together for a long time. It is a happy morning."
    ]},
  { id:"a1-25", level:"A1", motif:"candle", title:"The Power Cut", author:"R. Hassan",
    blurb:"The lights go out one evening, and the house is dark. But a few candles turn an ordinary night into a special one.",
    body:[
      "It is evening. The Khan family is at home. Suddenly, all the lights go out. The house is dark. The television stops. \"Oh no, a power cut,\" says Dad. The children, Sara and Ali, are a little afraid.",
      "Mum is calm. \"Do not worry,\" she says. She finds some candles. She lights them. The room is soft and warm now. The candles make small shadows on the wall. Sara thinks it is beautiful.",
      "They cannot watch television. So they sit together. Dad tells a funny story. They all laugh. Then they play a game with their hands and the shadows. It is fun. Later, the lights come back. But the children are sad. \"I liked the dark,\" says Ali. It was a special night."
    ]},
  { id:"a1-26", level:"A1", motif:"icecream", title:"The Ice Cream", author:"V. Costa",
    blurb:"On a hot day, Leo wants ice cream. He has just enough money, but a small friend needs his help first.",
    body:[
      "It is a very hot day. Leo walks in the town. He is hot and thirsty. He sees an ice cream shop. He wants an ice cream. He has some money in his pocket. He counts it. He has just enough.",
      "Leo stands in the line. In front of him, there is a little boy. The boy wants ice cream too. But the boy does not have enough money. He is sad. He starts to cry. Leo looks at him.",
      "Leo thinks for a moment. Then he smiles. \"Here,\" he says. He gives some of his money to the boy. Now the boy can buy a small ice cream. The boy is very happy. \"Thank you!\" he says. Leo buys a small ice cream too. It is not big, but it tastes very sweet. Helping people feels good."
    ]},
  { id:"a1-27", level:"A1", motif:"box", title:"Moving Day", author:"T. Andersen",
    blurb:"Emma's family moves to a new house. She is sad to leave, but her new room has a wonderful surprise.",
    body:[
      "Today is moving day. Emma's family is moving to a new house. There are many boxes everywhere. Big men carry the boxes to a truck. Emma is sad. She loves her old house. She does not want to go.",
      "They drive to the new house. It is bigger than the old one. There is a garden with a tree. Emma walks inside. The rooms are empty. Her feet make a loud noise on the floor. She goes up the stairs to her new room.",
      "Emma opens the door of her room. There is a big window. She looks out. She can see the whole town and the hills. The sun comes in. \"This is my room,\" she says. She smiles for the first time today. Maybe the new house is not so bad. Maybe it is good."
    ]},
  { id:"a1-28", level:"A1", motif:"nest", title:"The Bird's Nest", author:"L. Moreau",
    blurb:"Two children find a baby bird on the ground. With care and patience, they help it back to its home.",
    body:[
      "Mia and Sam play in the garden. Under the big tree, they find something small. It is a baby bird. It is on the ground. It cannot fly. It makes a small, sad sound. \"Poor little bird,\" says Mia.",
      "The children look up. High in the tree, there is a nest. \"The bird fell from the nest,\" says Sam. \"We must help it.\" But the nest is very high. They cannot reach it. They think hard about what to do.",
      "Sam gets a small box. Mia puts some soft grass in it. They put the baby bird in the box. They put the box on a low branch, near the nest. They wait and watch. Soon, the mother bird comes. She feeds her baby. Mia and Sam are very happy. They saved the little bird."
    ]},
  { id:"a1-29", level:"A1", motif:"sunrise", title:"The Early Morning", author:"D. Yamada",
    blurb:"Kenji wakes up before everyone else. In the quiet, early light, he discovers a peaceful new part of the day.",
    body:[
      "One morning, Kenji wakes up early. It is very early. The clock says five o'clock. The house is quiet. Everybody is asleep. His mother, his father, and his sister all sleep. Only Kenji is awake.",
      "Kenji gets up. He goes to the window. Outside, the sky is grey and pink. The sun is coming up slowly. The street is empty. There are no cars. There are no people. A single bird sings in a tree. It is very calm.",
      "Kenji likes this quiet time. He sits and watches the sun. The sky turns from pink to yellow to blue. Slowly, the town wakes up. He hears the first car. He hears a door. Soon his family will wake up too. But for now, the morning is only his. It is a peaceful start to the day."
    ]},
  { id:"a1-30", level:"A1", motif:"fish", title:"The Fisherman", author:"P. Nilsen",
    blurb:"Old Tom fishes at the river every day but never catches anything. Today, a young boy shows him a new trick.",
    body:[
      "Old Tom likes to fish. Every day, he goes to the river. He sits on the bank with his rod. He waits and waits. But he never catches a fish. The fish do not come. Tom is not lucky. But he is happy to sit by the water.",
      "One day, a young boy comes. He sits near Tom. He also has a fishing rod. \"Hello,\" says the boy. \"Hello,\" says Tom. \"I never catch any fish,\" says Tom sadly. The boy looks at Tom's line. \"Your bread is too big,\" he says. \"Use small pieces.\"",
      "Tom puts a small piece of bread on his hook. He puts the line in the water. He waits. Soon, the line moves! Tom pulls. It is a fish! A big silver fish! Tom laughs loudly. \"Thank you, my friend!\" he says to the boy. It is his first fish, and it is the best day."
    ]},
  { id:"a1-31", level:"A1", motif:"cookies", title:"The New Neighbour", author:"A. Reyes",
    blurb:"A new family moves in next door. Shy little Nadia is not sure about them, until she smells fresh cookies.",
    body:[
      "A new family moves in next door. Nadia watches them from her window. There is a mother, a father, and a girl. The girl looks the same age as Nadia. But Nadia is shy. She does not say hello.",
      "The next day, there is a knock at the door. Nadia's mother opens it. It is the new family. The mother holds a plate. On the plate, there are cookies. They smell wonderful. \"Hello, we are your new neighbours,\" she says. \"These are for you.\"",
      "The new girl smiles at Nadia. \"My name is Lina,\" she says. \"Do you want to play?\" Nadia is not shy now. \"Yes!\" she says. They eat the warm cookies together. Then they play in the garden all afternoon. Now Nadia has a new friend right next door."
    ]},
  { id:"a1-32", level:"A1", motif:"test", title:"The Spelling Test", author:"M. Bianchi",
    blurb:"Sam is worried about his spelling test. With his sister's help and a lot of practice, he is ready for Friday.",
    body:[
      "Sam has a spelling test on Friday. He is worried. Spelling is hard for him. There are ten difficult words. He must learn them all. He looks at the words. He does not know them. He feels sad.",
      "His big sister, Kate, helps him. \"Do not worry,\" she says. \"We can practise.\" Every evening, they study together. Kate says a word. Sam writes it. Sometimes it is wrong. But he tries again. Slowly, he learns the words.",
      "Friday comes. Sam sits at his desk. The teacher says the words. Sam writes them carefully. He remembers his practice. He feels good. On Monday, the teacher gives back the test. Sam has nine words right! He is so happy. \"Well done,\" says his teacher. Sam runs home to tell Kate."
    ]},
  { id:"a1-33", level:"A1", motif:"tent", title:"The Camping Trip", author:"H. Fischer",
    blurb:"The Lopez family sleeps in a tent in the hills. At night, far from the city, the sky is full of stars.",
    body:[
      "The Lopez family goes camping. They drive to the hills. There are tall green trees and a clear river. They find a good place. Dad and the children put up the tent. It is hard work, but it is fun. Mum makes a fire.",
      "In the day, they walk in the hills. They see a deer. They see many birds. They swim in the cold river. The water is fresh. For dinner, they cook food on the fire. The food tastes very good outside.",
      "At night, it is very dark. There are no city lights here. The family lies on the grass. They look up at the sky. There are so many stars! \"I cannot count them all,\" says little Sofia. The stars are bright and beautiful. They have never seen so many. It is a magical night in the hills."
    ]},
  { id:"a1-34", level:"A1", motif:"mouse", title:"The Cat and the Mouse", author:"J. Walsh",
    blurb:"A lazy house cat meets a clever little mouse. Instead of a chase, something surprising happens between them.",
    body:[
      "In an old house, there lives a cat. The cat is grey and lazy. It sleeps all day. In the same house, there lives a small mouse. The mouse is brown and quick. It lives in a hole in the wall. The cat and the mouse never meet.",
      "One night, the cat is awake. It is hungry. The mouse comes out of its hole. It looks for food. The cat sees the mouse. The mouse sees the cat. They both stop. The mouse is afraid. But the cat is too tired to run.",
      "\"Please do not eat me,\" says the mouse. The lazy cat yawns. \"I am too tired tonight,\" it says. \"Find some food and go home.\" The mouse is surprised. It finds some bread and runs back to its hole. From that night, the cat and the mouse are not friends, but they are not enemies. They live in peace."
    ]},
  { id:"a1-35", level:"A1", motif:"umbrella", title:"The Umbrella", author:"S. Patel",
    blurb:"It starts to rain at the bus stop and Grace has no umbrella. A kind stranger shares hers and brightens the day.",
    body:[
      "Grace waits at the bus stop. The sky is grey. Suddenly, it starts to rain. The rain is heavy. Grace does not have an umbrella. She gets wet. She is cold. She wants the bus to come fast.",
      "A woman stands next to Grace. The woman has a big blue umbrella. She sees that Grace is wet. \"Come under my umbrella,\" she says kindly. Grace moves closer. Now she is dry. \"Thank you very much,\" says Grace. The woman smiles.",
      "They talk while they wait. The woman is friendly. Soon, the bus comes. They both get on. Before she leaves, Grace says, \"Thank you for the umbrella.\" \"It is nothing,\" says the woman. \"We must help each other.\" Grace sits on the bus. She is warm and happy. A small kindness can make a grey day bright."
    ]},
  { id:"a1-36", level:"A1", motif:"soup", title:"The Vegetable Soup", author:"C. Nguyen",
    blurb:"Grandma teaches Lily how to make her famous vegetable soup, one carrot and one potato at a time.",
    body:[
      "It is a cold day. Lily is at her grandma's house. \"Let's make soup,\" says Grandma. \"My famous vegetable soup.\" Lily is excited. She loves to help in the kitchen. First, they go to the market. They buy carrots, potatoes, and onions.",
      "Back home, they wash the vegetables. Grandma cuts the carrots. \"Be careful with the knife,\" she says. Lily puts the pieces in a big pot. They add water and a little salt. Then they put the pot on the stove. The water gets hot.",
      "They wait. Slowly, the kitchen fills with a good smell. After one hour, the soup is ready. Grandma gives Lily a bowl. Lily tastes it. \"Mmm! It is delicious!\" she says. They eat the warm soup together by the window. Now Lily knows how to make Grandma's famous soup."
    ]},
  { id:"a1-37", level:"A1", motif:"window", title:"The Broken Window", author:"O. Schmidt",
    blurb:"Max kicks his ball through a window by accident. He is scared, but telling the truth is the right thing to do.",
    body:[
      "Max plays football in the garden. He kicks the ball hard. Too hard! The ball flies high. It goes over the fence. Crash! It breaks Mr. Brown's window. Max is scared. His heart beats fast. He wants to run away and hide.",
      "Max stands still. He thinks. \"It is wrong to run away,\" he says to himself. \"I must tell the truth.\" Slowly, he walks to Mr. Brown's house. He knocks on the door. His hands shake a little. Mr. Brown opens the door.",
      "\"I am sorry, Mr. Brown,\" says Max. \"I broke your window with my ball. It was an accident.\" Mr. Brown looks at the window. Then he looks at Max. He smiles. \"Thank you for telling me the truth, Max,\" he says. \"You are an honest boy. Let's fix it together.\" Max feels much better now."
    ]},
  { id:"a1-38", level:"A1", motif:"leaf", title:"Autumn Leaves", author:"E. Larsson",
    blurb:"In autumn, the leaves turn red and gold and fall to the ground. Two children play in the big, crunchy piles.",
    body:[
      "It is autumn. The weather is cool. In the park, the trees are beautiful. The leaves are not green now. They are red, orange, and gold. The leaves fall from the trees. They cover the ground like a soft blanket.",
      "Ben and Anna come to the park. They love autumn. They run through the leaves. The leaves make a nice sound under their feet. \"Crunch, crunch, crunch.\" They laugh. Anna picks up a big red leaf. \"Look how pretty it is,\" she says.",
      "They make a big pile of leaves. It is very high. Then Ben jumps in! The leaves fly everywhere. Anna jumps in too. They play for a long time. When they go home, they take some pretty leaves with them. Autumn is a wonderful time of the year."
    ]},
  { id:"a1-39", level:"A1", motif:"hourglass", title:"The Long Wait", author:"F. Romano",
    blurb:"Daniel waits all week for his grandfather to visit. The days feel slow, but the wait is worth it in the end.",
    body:[
      "Daniel is happy. His grandfather is coming to visit. But he is coming on Saturday. Today is only Monday. Daniel must wait for five days. For a small boy, five days is a very long time.",
      "On Monday, the day is slow. On Tuesday, it is slow too. Daniel looks at the clock every day. \"Is it Saturday yet?\" he asks his mother. \"No, not yet,\" she says with a smile. \"Be patient.\" Wednesday and Thursday pass. Daniel counts the days on his fingers.",
      "Finally, it is Saturday! Daniel wakes up early. He waits by the window. Then he sees a car. It is Grandfather! Daniel runs to the door. \"Grandpa!\" he shouts. He hugs him tight. Grandfather has a small gift for him. The long wait is over. And it was worth every day."
    ]},
  { id:"a1-40", level:"A1", motif:"bottle", title:"The Message in the Bottle", author:"N. Olsen",
    blurb:"Walking by the sea, Mia finds a glass bottle in the sand. Inside is a letter from a faraway friend.",
    body:[
      "Mia walks by the sea. The sand is wet. She looks for shells. Then she sees something. It is a glass bottle. It is in the sand. There is paper inside the bottle. Mia is curious. She picks it up.",
      "Mia opens the bottle. She takes out the paper. It is a letter! She reads it. \"Hello, my name is Pablo. I live far away across the sea. I am ten years old. I like football and dogs. Please write to me.\" There is an address at the end.",
      "Mia runs home. She is excited. She writes a letter back to Pablo. \"Hello Pablo, my name is Mia. I found your bottle. I like to read and swim.\" She puts her letter in the post. Now Mia waits. Soon, maybe, she will have a new friend across the sea."
    ]},
  { id:"a1-41", level:"A1", motif:"gift", title:"The Surprise Visit", author:"G. Costa",
    blurb:"Liam misses his cousin who lives in another city. One ordinary afternoon, there is a knock at the door.",
    body:[
      "Liam has a cousin. His name is Jack. But Jack lives in another city, far away. Liam does not see him often. He misses Jack a lot. They like the same games. They always have fun together.",
      "One afternoon, Liam is bored. He sits at home. It is a normal, quiet day. Then he hears a knock at the door. \"Who is it?\" he thinks. His mother opens the door. Liam looks. He cannot believe his eyes!",
      "It is Jack! His cousin is here! \"Surprise!\" shouts Jack. Liam is so happy. \"What are you doing here?\" he asks. \"We came to visit you for the weekend,\" says Jack. Liam laughs. The boring day is now the best day. They run upstairs to play together. Two whole days of fun!"
    ]},
  { id:"a1-42", level:"A1", motif:"star", title:"The Night Light", author:"B. Adeyemi",
    blurb:"Little Tom is afraid of the dark. His father gives him a special small lamp that makes the night friendly.",
    body:[
      "Little Tom is five years old. Every night, he goes to bed. But Tom is afraid of the dark. When his mother turns off the light, the room is black. Tom thinks he sees monsters. He cannot sleep. He calls for his parents.",
      "His father has an idea. He goes to the shop. He buys a small lamp. It is a night light. It is shaped like a yellow star. \"This is for you, Tom,\" he says. He puts it next to the bed. He turns it on. It makes a soft, warm light.",
      "Now the room is not black. Tom can see his toys and his books. There are no monsters. Only soft shadows. Tom feels safe. \"Thank you, Dad,\" he says. He closes his eyes. The little star shines all night. Tom sleeps well now. He is not afraid of the dark anymore."
    ]},
  { id:"a1-43", level:"A1", motif:"glass", title:"The Lemonade Stand", author:"K. Johansson",
    blurb:"On a hot summer day, two friends sell lemonade outside their house to save for a new football.",
    body:[
      "It is summer. The day is very hot. Two friends, Amy and Tom, want a new football. But they have no money. \"Let's make lemonade and sell it,\" says Amy. It is a good idea. They make a stand outside the house with a small table.",
      "They make the lemonade. They use lemons, water, and sugar. It is cold and sweet. They put a sign on the table. The sign says: \"Cold Lemonade. One coin.\" Then they wait for people. The sun is hot. Many people walk by.",
      "\"Lemonade! Cold lemonade!\" they call. A man stops. He is thirsty. He buys a cup. \"Delicious!\" he says. Then more people come. A woman, two children, an old man. Soon, all the lemonade is gone. Amy and Tom count their coins. They have enough! They run to buy their new football. Hard work is good."
    ]},
  { id:"a1-44", level:"A1", motif:"kite", title:"The Kite", author:"S. Marchetti",
    blurb:"Grandpa helps Nina fly a kite for the first time. They run in the field until it lifts high into the wind.",
    body:[
      "Nina has a new kite. It is red and yellow. Today, the wind is strong. It is a good day to fly a kite. Nina and her grandpa go to a big, open field. There are no trees in the middle. There is a lot of space.",
      "Nina holds the kite. Grandpa holds the string. \"Run, Nina, run!\" he says. Nina runs fast. Grandpa lets go of the kite. But the kite falls down. They try again. The kite goes up, then falls again. Nina is a little sad.",
      "\"Do not give up,\" says Grandpa. \"Try one more time.\" Nina runs again, faster this time. The wind catches the kite. It goes up, up, up! \"It is flying!\" shouts Nina. The kite dances high in the blue sky. Nina holds the string tight. She laughs. \"I am flying a kite!\" It is a perfect, windy day."
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
    ]},

  /* ---------- A2 — Elementary (everyday past and future) ---------- */
  { id:"a2-5", level:"A2", motif:"umbrella", title:"The Borrowed Umbrella", author:"R. Doyle",
    blurb:"Maria forgets her umbrella on a rainy day. A stranger shares his — and a small kindness travels further than either of them expects.",
    body:[
      "It was a grey afternoon in October. Maria left her office at five o'clock. When she reached the door, she saw the rain. It was heavy and cold. She looked in her bag, but her umbrella was not there. She had left it at home that morning.",
      "Maria waited under the roof of the building. The bus stop was far away, and she did not want to get wet. Many people walked past with their umbrellas. Then a young man stopped next to her. \"Are you going to the station?\" he asked. \"Yes,\" said Maria. \"Me too,\" he said. \"We can share my umbrella.\"",
      "They walked together to the station. The umbrella was small, so their shoulders got a little wet, but they laughed about it. The man's name was Peter. He worked in a shop near Maria's office. At the station, he gave her the umbrella. \"Take it,\" he said. \"You can give it back another day.\"",
      "The next week, Maria saw Peter again. She returned his umbrella with a small box of chocolates inside the bag. \"Thank you for the rainy day,\" she said. Peter smiled. After that, they often had coffee together. \"Next time it rains,\" Maria said, \"I will bring two umbrellas — one for me and one for a stranger.\""
    ]},
  { id:"a2-6", level:"A2", motif:"cake", title:"The Cooking Class", author:"N. Park",
    blurb:"Tom can cook nothing except toast. He joins a class to surprise his family, and learns that mistakes can taste quite good.",
    body:[
      "Tom was twenty-five years old, and he could not cook. Every evening he ate bread, eggs, or food from a box. His sister always laughed at him. \"One day you will learn,\" she said. Tom decided she was right. He saw a poster for a cooking class on Tuesday evenings, and he signed up.",
      "The first class was difficult. The teacher, Mrs. Lin, showed everyone how to make soup. Tom cut the onions too big. He put in too much salt. When he tried to taste it, it was terrible. \"Don't worry,\" said Mrs. Lin kindly. \"Everybody makes mistakes at the beginning. Try again next week.\"",
      "Tom went home and practised. He made the same soup three times. The first time was bad, the second time was better, and the third time was actually good. At the next class, Mrs. Lin taught the group how to bake a simple cake. Tom was careful this time. He read every step twice.",
      "On Sunday, Tom invited his family for dinner. He made soup and a chocolate cake. The cake was not perfect — one side was higher than the other — but it tasted wonderful. His sister ate two pieces. \"Who made this?\" she asked. \"I did,\" said Tom proudly. \"And next month, I am going to learn how to make bread.\""
    ]},
  { id:"a2-7", level:"A2", motif:"dog", title:"The Dog at the Station", author:"G. Hill",
    blurb:"Every evening a brown dog waits by the station gate. A schoolgirl wants to know why, and her question brings a quiet ending to a long wait.",
    body:[
      "Every evening, a brown dog sat near the gate of the small station. It did not bark. It did not move much. It just watched the people who came off the train. When the last train left, the dog walked away slowly. The next evening, it came back again.",
      "A schoolgirl named Aisha saw the dog every day. She wanted to know why it waited there. One evening, she asked the old man who worked at the station. \"That dog belongs to Mr. Grant,\" he said. \"Mr. Grant went to work in another city three months ago. The dog still waits for him to come home.\"",
      "Aisha felt sad. After that, she brought a little food for the dog every evening. The dog learned to trust her. It wagged its tail when it saw her, but it always turned back to watch the train. It had not forgotten its owner.",
      "Then, one cold evening in winter, a man stepped off the last train. The dog jumped up and ran to him, barking with joy. It was Mr. Grant. He had come back to live in the town again. He knelt down and held his dog. \"I am sorry I was away so long,\" he said. Aisha watched from the gate and smiled. The long wait was over."
    ]},
  { id:"a2-8", level:"A2", motif:"beach", title:"The Trip to the Coast", author:"S. Reed",
    blurb:"The Akkad family takes the early train to the sea. The day brings sandcastles, a runaway hat, and a promise to return when summer comes.",
    body:[
      "On Saturday morning, the Akkad family woke up early. They were going to the coast for the day. Mr. Akkad made sandwiches, and the two children, Lena and Sami, packed their bags with towels and toys. They took the eight o'clock train. Through the window, the city slowly changed into green fields.",
      "When they arrived, the children ran straight to the beach. The sea was bright blue, and the sand was warm. Sami built a big sandcastle, and Lena collected small shells in a paper cup. Their parents sat under a large umbrella and drank tea from a flask.",
      "In the afternoon, the wind grew stronger. Suddenly, it lifted Sami's hat and carried it across the sand. He ran after it, but the hat rolled into the water. A friendly old man caught it with his stick and gave it back. \"The sea wanted to borrow it,\" he said, and everyone laughed.",
      "By six o'clock, the family was tired and happy. Their faces were warm from the sun. On the train home, the children fell asleep against their mother. \"Can we come back?\" Lena asked sleepily. \"Yes,\" said her father. \"We will come again in the summer, when the days are long.\""
    ]},
  { id:"a2-9", level:"A2", motif:"gift", title:"The Wrong Parcel", author:"L. Cross",
    blurb:"A parcel arrives at Karim's door with the wrong name. Returning it leads him up one flight of stairs and into an unexpected friendship.",
    body:[
      "One morning, the postman knocked on Karim's door. He gave Karim a large brown parcel. \"Thank you,\" said Karim. But when he looked at the name on the box, it was not his. The parcel was for \"Mrs. E. Halim, Flat 9.\" Karim lived in Flat 4, and the postman had already gone.",
      "Karim did not know Mrs. Halim, but he decided to take the parcel to her. He climbed the stairs to the top floor and knocked on the door of Flat 9. An old woman opened it slowly. \"I think this is for you,\" said Karim. The woman's face lit up. \"Oh, wonderful! It is a birthday present for my grandson. I was worried it was lost.\"",
      "Mrs. Halim invited Karim in for a cup of tea. She told him that she lived alone and did not see many people. Her grandson lived far away, but he was coming to visit next week. Karim stayed for half an hour. They talked about the building, the weather, and her small garden on the balcony.",
      "When Karim got up to leave, Mrs. Halim gave him a bag of homemade cookies. \"For your help,\" she said. After that day, Karim often visited Flat 9. Sometimes the wrong parcel, he thought, arrives at exactly the right door."
    ]},

  /* ---------- B1 — Intermediate (longer narrative, feeling) ---------- */
  { id:"b1-4", level:"B1", motif:"quill", title:"The Letter He Never Sent", author:"M. Ellory",
    blurb:"Clearing his late father's desk, Daniel finds a letter written with love and never posted — and understands, too late and just in time, the man his father had been.",
    body:[
      "After his father died, Daniel spent a quiet week clearing the old house. It was slow work, full of small surprises: a drawer of broken watches, a box of photographs, a coat that still smelled faintly of pipe smoke. His father had been a careful, silent man, and the house was full of things he had kept but never explained.",
      "In the bottom drawer of the writing desk, Daniel found an envelope that had never been opened. It was addressed to his mother, in his father's neat handwriting, and dated forty years before — a few months before they were married. The stamp had been stuck on, but the letter had never been posted.",
      "Daniel sat down and read it. In the letter, his young father wrote about his fears and his hopes, about how he was not sure he deserved her, about the kind of life he wanted them to build together. It was tender and uncertain in a way that Daniel had never once seen in the quiet man who had raised him. He read it twice, and then he understood: his father had felt everything, and had simply never found the words to say it aloud.",
      "Daniel did not know why the letter had never been sent. Perhaps his father had been too shy, or had decided that some things were better shown than spoken. That evening, Daniel did something he had not done in years. He took out a sheet of paper and began to write a letter of his own — to his daughter, who was still young enough to read it one day and know exactly how much she was loved."
    ]},
  { id:"b1-5", level:"B1", motif:"bench", title:"The Bench by the Lake", author:"P. Nolan",
    blurb:"An old man feeds the birds from the same bench every morning. When a young runner finally stops to talk, she learns why that small wooden seat means everything.",
    body:[
      "Every morning, an old man sat on the same wooden bench beside the lake. He always arrived at eight o'clock, opened a paper bag, and fed the birds with small pieces of bread. The pigeons and ducks seemed to know him. They gathered around his feet as if he were an old friend.",
      "A young woman named Hana ran past the bench every day on her morning exercise. For weeks she only nodded at the old man. But one cold morning, she stopped to catch her breath and sat down beside him. They began to talk, first about the birds, and then about other things.",
      "The old man told her that his name was Mr. Osei, and that he had come to this bench every morning for eleven years. \"My wife and I used to sit here together,\" he said. \"She loved to feed the birds. When she passed away, I decided to keep coming. As long as I feed them, it feels as if a part of her is still here.\" Hana did not know what to say, so she simply sat with him in the quiet.",
      "After that, Hana often stopped to talk with Mr. Osei. Then, one spring, he was not there. The bench stood empty for many mornings. Hana asked at the little café nearby and learned that the old man had died peacefully in his sleep. The next morning, she bought a small bag of bread, sat down on the bench, and fed the birds herself. It felt like the right thing to do."
    ]},
  { id:"b1-6", level:"B1", motif:"teapot", title:"The Tea House", author:"K. Auberon",
    blurb:"Rushing between meetings, a busy traveller steps into a tiny tea house to escape the rain — and the old owner teaches her, without a single lesson, how to slow down.",
    body:[
      "Lara was always in a hurry. She travelled from city to city for her work, and her days were a long list of trains, meetings, and messages. One rainy afternoon, with an hour to spare before her next appointment, she stepped into a small tea house to stay dry. It was quiet inside, and it smelled of jasmine and warm wood.",
      "An old woman ran the tea house alone. She moved slowly, without hurry, as if time belonged to her and not the other way around. She brought Lara a pot of green tea and a single white cup. \"The first cup is too hot to drink,\" she said gently. \"You must wait. Good tea cannot be rushed.\"",
      "Lara was used to drinking her coffee quickly, between phone calls. But here there were no phone calls, only the sound of the rain on the window and the soft warmth of the cup in her hands. She waited. When at last she drank, the tea was delicate and clean, and she realised she could not remember the last time she had simply sat and tasted something.",
      "She stayed far longer than she had planned and almost missed her meeting. But something had changed. Over the following months, Lara began to leave small spaces in her days — ten minutes here, half an hour there — to sit and do nothing at all. She never forgot the old woman's words. Some things, she had learned, cannot be rushed, and they are usually the things that matter most."
    ]},
  { id:"b1-7", level:"B1", motif:"boat", title:"The Ferryman", author:"T. Vasquez",
    blurb:"To reach the market, young Mateo must cross the wide river with an old ferryman who refuses to be hurried — and who teaches the boy to read the water's moods.",
    body:[
      "Twice a week, Mateo crossed the wide river to sell vegetables at the market on the other side. There was no bridge, only an old ferryman named Tomás and his flat wooden boat. Mateo was always impatient. He wanted to cross quickly, sell his goods, and come home before the heat of the day.",
      "But Tomás was never in a hurry. He studied the river before he pushed off from the bank, watching the colour of the water and the way the birds flew low or high. Sometimes he waited a long time before he began to row. \"Why are we waiting?\" Mateo would ask. \"The river is talking,\" Tomás would answer. \"It is wise to listen.\"",
      "One morning, Mateo arrived at the bank in a great rush. Storm clouds were gathering, but he was sure there was time to cross. Tomás shook his head and refused to take the boat out. Mateo was angry and decided to find another way upstream. An hour later, a sudden storm turned the river wild and grey. If he had crossed, his small boat would surely have been lost.",
      "After that day, Mateo stopped arguing with the old ferryman. He began to watch the river too — its colours, its currents, its silences. By the end of the summer, he could read the water almost as well as Tomás. He understood at last that patience was not wasted time. On the river, it was the difference between arriving safely and not arriving at all."
    ]},
  { id:"b1-8", level:"B1", motif:"city", title:"The Newcomer", author:"D. Frey",
    blurb:"Alone in an enormous city, Yusuf counts the days until he can leave. Then a series of small kindnesses slowly turns a place into a home.",
    body:[
      "When Yusuf first arrived in the city, it frightened him. He had grown up in a small town where everyone knew his name, and now he was surrounded by millions of strangers who never looked up. The buildings were tall and grey, the streets were loud, and in the evenings his small flat felt very empty. He counted the months until he could go home.",
      "At first, every day was the same. He went to work, he came back, and he spoke to almost no one. But slowly, small things began to change. The woman at the bakery learned that he liked the bread with sesame seeds and kept one for him each morning. A man on the bus showed him a faster way to get to the river. His neighbour, an elderly tailor, invited him in for coffee one cold evening.",
      "None of these people were close friends, and yet together they made the huge city feel a little smaller. Yusuf began to recognise faces. He started to say good morning, to ask how people were, to remember the names of their children. The grey streets did not change, but the way he walked through them did. He no longer felt invisible.",
      "A year later, a new young man started at Yusuf's workplace. He looked lost and nervous, exactly as Yusuf had once felt. At lunchtime, Yusuf sat down beside him and asked where he was from. \"The city is big,\" Yusuf said with a smile, \"but it gets smaller once you know a few people. Let me show you around.\" And he realised, with some surprise, that he was no longer counting the days until he could leave."
    ]},

  /* ---------- B2 — Upper-intermediate (nuance and atmosphere) ---------- */
  { id:"b2-4", level:"B2", motif:"window", title:"The Open Window", author:"R. Sinclair",
    blurb:"Each spring, Agnes opens the upstairs window and waits. Her new lodger assumes it is mere habit — until the evening he finally understands what the open window is for.",
    body:[
      "Every year, on the first warm evening of spring, Agnes climbed the stairs of the old house and opened the window of the upstairs room. She did it without explanation, as though it were as natural as turning on a light, and she left it open until the cold returned in autumn. The lodgers who came and went over the years grew used to the habit and never thought to question it.",
      "The newest of them was a quiet young man named Thomas, who rented the small room at the back. He noticed the open window in the front room but said nothing; he had learned that old houses, like old people, keep their own customs. Still, he wondered. The room was never used. There was only a chair by the window, an empty vase, and a photograph turned to face the glass.",
      "One evening in June, unable to sleep, Thomas passed the open door and saw Agnes sitting in the chair, looking out into the dark garden. She was not sad, exactly, but there was a stillness about her that made him pause. \"My son went to sea forty years ago,\" she said, without turning around, as if she had been expecting him. \"He always came home in the spring. I open the window so that he will know the way.\"",
      "Thomas understood then that the boy had never come back, and that Agnes had long ago accepted this in every part of herself except one. The open window was not hope, not really; it was something quieter and more durable — a form of love that had simply refused to close. He said nothing. He sat down on the floor beside her chair, and together they watched the garden, where the evening air moved softly through the open window and out again into the night."
    ]},
  { id:"b2-5", level:"B2", motif:"candle", title:"By Candlelight", author:"M. Halloran",
    blurb:"When the storm takes the power for three nights, a street of strangers must share its candles — and discovers, in the dark, the neighbours it had forgotten it owned.",
    body:[
      "The storm took the power on a Thursday evening, and for three days the whole street lived by candlelight. At first, people were annoyed. They stood at their windows, watching the dead street lamps, and complained about the food spoiling in their silent refrigerators. The modern world had simply switched off, and no one quite knew what to do with the sudden, enormous quiet.",
      "On the first night, the houses kept to themselves, each glowing faintly behind its curtains like a separate little island. But candles, it turned out, ran out quickly, and matches even faster. By the second evening, people had begun to knock on one another's doors. Mrs. Okafor at number eight had a whole box of candles; the students at number three had a camping stove and offered hot tea to anyone who came.",
      "Something rather wonderful happened on that second night. With their screens dark and their devices dead, the neighbours had nothing to do but talk to one another. They gathered in doorways and front gardens, faces lit warmly from below, and discovered, often for the first time, who actually lived beside them. Children who had never met played together in the candlelit street, and old grievances seemed faintly ridiculous in the dark.",
      "When the power returned on the fourth day, the street flooded back into its ordinary brightness, and the televisions and computers hummed back to life. People drifted indoors again. And yet something remained. Now they nodded to one another in the morning; they remembered names. Mr. Adesso, who had lived alone and unnoticed for years, was invited to dinner at number eight. The light had come back, but, oddly, it was the darkness they would remember."
    ]},
  { id:"b2-6", level:"B2", motif:"nest", title:"The Empty Nest", author:"E. Brandt",
    blurb:"With both children gone and the house suddenly too large, Margaret watches a pair of swallows build under the eaves — and learns something about what is left when the building is done.",
    body:[
      "The house had always been loud. For twenty years it had been full of the noise of two children — slamming doors, music through the walls, the endless traffic of friends and homework and arguments and laughter. Now both children had grown up and moved away, one to a university in the north and the other to a job across the sea, and the house had fallen into a silence that Margaret found almost physical, like a change in the weather.",
      "She and her husband moved through the large rooms more quietly now, unsure what to do with all the space. They had looked forward to this freedom for years, and yet, when it finally came, it felt less like freedom than like loss. The children's bedrooms stayed exactly as they had left them, doors half open, waiting for occupants who were not coming back.",
      "That spring, a pair of swallows began to build a nest under the eaves above the kitchen window. Margaret watched them through the glass each morning as she drank her coffee. They worked tirelessly, carrying tiny beakfuls of mud and straw, until the small cup of a nest was finished. Eggs appeared, then chicks, then a frantic, exhausting season of feeding. Margaret found herself strangely invested, as though the little drama outside her window were her own.",
      "In late summer, the young swallows tested their wings, circled the garden once or twice, and were gone. The nest, so painstakingly built, sat empty under the eaves. Margaret expected the parent birds to grieve, but they did not. They rested. They flew for the pleasure of flying. And watching them turn lazily against the evening sky, Margaret understood, with a quiet that surprised her, that the building had never been the point. The flying was. Perhaps, she thought, it was time she and her husband learned to fly a little too."
    ]},
  { id:"b2-7", level:"B2", motif:"leaf", title:"The Turning of the Year", author:"C. Mowbray",
    blurb:"The head gardener has tended the great estate for half a century. As autumn strips the trees he has loved, he must decide what it means to hand a living thing to someone else.",
    body:[
      "Autumn came early that year, and the great trees of the estate began to turn almost overnight. For fifty years, Hollis had been the head gardener here, and he knew every one of them as a man knows old companions — the copper beech that caught fire in October, the oaks that held their leaves stubbornly into winter, the single ginkgo that dropped all its gold in one afternoon, as if it had decided the season was over.",
      "He was eighty-one now, and his hands had grown unreliable. The owners of the estate, who were kind, had hired a young woman to learn the work and, in time, to take it on. Her name was Priya, and she was clever and eager, but Hollis watched her with a private, unreasonable jealousy. How could she possibly understand what these grounds had cost him — the frosts survived, the storms repaired, the slow decades of patience that no diploma could teach?",
      "He had meant to teach her only the practical things: pruning, drainage, the calendar of the seasons. But as the weeks passed and the leaves fell, he found himself telling her other things as well — which corner of the garden his late wife had loved, where he had buried the old dog, why he always left one bed to grow wild. Priya listened, and asked good questions, and did not pretend to feel what she did not yet feel. Hollis found, to his surprise, that he respected her for it.",
      "On his last morning, Hollis walked the grounds alone in the cold light. The trees stood half bare, beautiful and indifferent, already turning their attention to a spring he might not see. He understood, at last, that a garden does not belong to its gardener; it merely passes through his care on its way to someone else's. He found Priya raking leaves by the beech and handed her his keys. \"Leave the far bed wild,\" he said. \"It likes to make its own decisions.\" She smiled, and promised that she would."
    ]},
  { id:"b2-8", level:"B2", motif:"fish", title:"The Fisherman's Catch", author:"A. Sorensen",
    blurb:"A struggling fisherman hauls up the largest fish of his life — and an old village belief forces him to choose between the meal his family needs and a promise made to the sea.",
    body:[
      "The village had lived by the sea for as long as anyone could remember, and the sea, in return, had taught it a thousand small rules. One of the oldest was this: if a man caught a fish larger than himself, he was to return it to the water, for such a fish was said to belong to the deep and to bring misfortune to any house that kept it. Most of the young men laughed at the old belief. Niels, who was not young and not laughing, was not so sure.",
      "It had been a poor season. The nets came up light, week after week, and Niels's family had grown used to thin soup and the quiet, hungry patience of people who do not complain. So when, one grey morning, his line went suddenly heavy and he hauled up a fish longer than his own body, gleaming and enormous, his first feeling was not fear but a desperate, practical joy. Here was food for a month. Here was the answer to every anxious calculation he had made in the dark.",
      "But as the great fish lay shining and slowly dying in the bottom of his boat, the old rule returned to him, and with it a discomfort he could not argue away. He thought of his grandfather, who had believed such things, and of the families in the village histories who were said to have ignored the sea and paid for it. He told himself he was a modern man, that hunger was real and superstition was not. And still his hands would not move to bring the fish ashore.",
      "In the end, Niels did something he could not fully explain, then or later. He cut the line, took up the great fish in both arms, and let it slide back into the cold grey water, where it hung motionless for a moment before vanishing into the dark. He rowed home with an empty boat and a strange lightness in his chest. He did not know whether he had been wise or merely foolish. But that winter the season turned, the nets came up full again, and Niels never once spoke of the fish he had let go."
    ]},

  /* ---------- C1 — Advanced (literary prose and complexity) ---------- */
  { id:"c1-5", level:"C1", motif:"hourglass", title:"The Keeper of Hours", author:"J. Ashford",
    blurb:"For decades he has wound the cathedral clock that orders the life of an entire town. As his own time runs short, he confronts the difference between measuring the hours and inhabiting them.",
    body:[
      "For thirty-seven years, it had been Elias Crane's task to keep the great cathedral clock. Twice a week he climbed the two hundred and forty steps of the tower, oiled the vast iron mechanism, adjusted its weights, and corrected, by a matter of seconds, the time by which an entire town arranged its living. Shops opened, trains departed, lovers met and parted, the dead were buried — all of it ordered, however invisibly, by the precision of a man most of the town had never seen.",
      "Crane took an austere pride in this invisibility. He had no family and few acquaintances, and he had come to regard the clock not as a machine he tended but as a discipline he served. Its accuracy was a kind of morality to him. A clock that lost even a minute a week was, in his private vocabulary, a dishonest clock, and dishonesty in the measurement of time struck him as a small but genuine sin against the people who trusted it without thinking.",
      "It was therefore a particular cruelty that, in his seventy-first year, Crane began to feel his own time misbehaving. The doctors used careful, padded language, but the meaning beneath it was plain enough. He found, climbing the tower now, that he had to stop on the landings to breathe, and that the great brass pendulum, swinging with its serene indifference, had begun to seem less like a servant than like a rival, counting out a sum that would not come out in his favour.",
      "One winter evening, alone at the top of the tower, Crane did something he had never permitted himself before. He stopped the clock. He laid his hand against the cold mechanism and held the pendulum still, and for the space of perhaps three minutes the town below went on living without its appointed time. Nothing collapsed. The trains, he supposed, ran more or less as usual; the lovers met; the bells of lesser churches kept their own imperfect hours. The discovery did not anger him, as once it might have. It humbled him, and then, unexpectedly, it set him free.",
      "He restarted the clock — accurately, of course; old habits do not die so easily — and made his slow way down the steps for what he sensed might be one of the last times. He had spent his life, he understood now, measuring the hours with such devotion that he had forgotten to live inside a single one of them. In the months that remained, he resolved, he would do a little less measuring. He would sit in the sun when there was sun. He would let the clock, for once, keep time for him, instead of the other way around."
    ]},
  { id:"c1-6", level:"C1", motif:"star", title:"The Astronomer's Daughter", author:"N. Belkin",
    blurb:"Raised beneath her father's telescope, Sofia spends her life calculating the distances of stars. Only after his death does she reckon with the nearer distances she allowed to grow between them.",
    body:[
      "Sofia had been raised under the stars, quite literally. Her father was an astronomer of modest reputation and immodest devotion, and the defining structure of her childhood had been the observatory he had built on the hill behind their house — a small white dome that opened, on clear nights, like an eye turned upward. She had learned the constellations before she learned to read, and she had grown up believing, without ever being told, that the things worth knowing were always very far away.",
      "She became an astronomer herself, a far more distinguished one than her father had been. Her particular field was the measurement of cosmic distances, the patient calculation of how impossibly far the faint lights of galaxies lay from the earth and from one another. She was admired for her rigour, her refusal of sentiment, her ability to contemplate without flinching the vast and indifferent emptiness in which everything that mattered was suspended like dust.",
      "She and her father had grown apart in the ordinary, unremarkable way of busy people. There was no rupture, only distance — the missed visits, the brief calls, the conversations that stayed safely on the subject of work. She told herself that they understood each other, that their shared vocation was itself a kind of intimacy, and that there would be time, eventually, to say the things that did not fit into discussions of red shift and parallax. She was, in this single calculation, catastrophically wrong.",
      "He died in the spring, alone in the observatory, where they found him in the morning with the dome still open to a sky long since gone pale. Among his papers Sofia discovered a notebook in which, alongside his careful observations, he had recorded smaller things: the date she had first named a star, a remark she had made as a child, the times of her visits and, beneath the last of them, a single line — \"Too long since the last.\" He had been measuring a distance too, it seemed, and grieving it, in his silent way, for years.",
      "Sofia kept the observatory. On clear nights she still opened the dome and turned the great lens outward toward the unreachable lights, but she did so now with a changed understanding. She had spent her life mastering the distances that could be crossed by no one and survived by everyone, and had failed to attend to the one short distance, the few miles of road between two houses, that a single afternoon's effort might at any time have closed. The stars, she had always known, were very far away. It was the nearer distances, she had learned too late, that broke the heart."
    ]},
  { id:"c1-7", level:"C1", motif:"glass", title:"The Last Commission", author:"S. Varga",
    blurb:"A dying master glassblower is asked to make one final piece. Pursuing the perfection he has chased all his life, he must decide whether flawlessness or fragility is the truer mark of his art.",
    body:[
      "Master Vidal had blown glass for sixty years, and in that time his hands had made objects of such clarity that collectors spoke of them in the hushed tones usually reserved for the dead. He had long since stopped working for money. He worked, when he worked at all now, for the single, receding aim that had governed his entire life: the making of one perfect thing, one vessel without flaw, in which the difference between the glass and the light it held would finally disappear.",
      "He was old now, and ill, and he knew that the furnace, which had been the centre of his existence, would soon be too much for him. So when a young curator wrote to request a final piece for a great museum — a last Vidal, to close the collection — he understood it for what it was: not a commission but an epitaph, the last sentence of a life's long argument with imperfection. He accepted. He had, he calculated, the strength for perhaps one more attempt.",
      "For weeks he prepared. He chose his sand and his ash with the care of a man choosing the words on his own gravestone. And then, over a succession of failing evenings, he tried. Each piece emerged very nearly flawless and was, by his merciless standard, a failure: a faint wave in the surface, a bubble no larger than a grain of pollen, a thickening at the lip that only he would ever have detected. He shattered each one against the stone floor, and the shards collected at his feet like a glittering record of his refusal to be satisfied.",
      "On what he knew would be his final night at the furnace, exhausted past the point of pride, he gathered the molten glass and blew without calculation, almost without will, simply following the breath and the heat and the sixty years in his hands. The vessel that cooled before him was not perfect. It carried, near its base, a single thread of imperfection, a faint internal line where the glass had folded against itself — a flaw, unmistakably, and yet one that caught the light in a way no flawless piece of his ever had, scattering it into a soft and living shimmer.",
      "He sat for a long time and looked at it. He could break it, as he had broken all the others, and make, perhaps, one last attempt at the unattainable. Or he could let it stand. In the end he wrapped it carefully and sent it to the museum exactly as it was, the flaw and all. With it he enclosed a brief note, the only artistic statement he had made in sixty years of silence. \"I spent my life,\" it read, \"trying to remove myself from the glass. I understand now that the small imperfection is the only place where I am visible. Keep it. It is the closest I came to the truth.\""
    ]},
  { id:"c1-8", level:"C1", motif:"ear", title:"The Listener", author:"O. Mancini",
    blurb:"An archivist devotes his career to recording sounds before they vanish from the world. Cataloguing the disappearance of everything, he is ambushed by the one recording he never meant to keep.",
    body:[
      "Aldo Renner had spent the better part of his life recording sounds that were about to disappear. He was, by profession, an acoustic archivist, which meant that he travelled the world with his equipment capturing the noises that progress was quietly erasing: the call of a ferryman on a river soon to be bridged, the particular clatter of a dying industry, the dialect songs of villages whose last speakers were very old. He preserved, on careful magnetic tape, an enormous library of vanishings.",
      "He regarded his work with a scientist's detachment and a mourner's seriousness. The world, he believed, was growing not only quieter but more uniform, its thousand local voices replaced by the same few global sounds, and someone, he felt, ought to keep the record. He did not sentimentalise this. He simply catalogued it — the date, the place, the source, the thing itself — and filed each recording in its labelled box, a museum of acoustic ghosts that almost no one ever came to hear.",
      "In his later years, going through the older reels to transfer them before the tape decayed, he came upon a recording he had no memory of making. It was domestic, unlabelled, evidently captured by accident while testing a new microphone decades before: the ordinary sound of a kitchen on a morning long gone. A kettle. The scrape of a chair. And then, unmistakably, the voice of his wife, dead now for eleven years, saying something trivial about the weather and laughing at her own remark.",
      "He had thousands of hours of the world's disappearances neatly preserved, and not one of them had ever touched him as this accidental fragment did. He had not been trying to keep her. He had been testing a microphone. And yet here she was — not a memory, which softens and rearranges itself, but the actual air her actual voice had moved on an actual morning he could no longer otherwise recall. He played it once and could not, for a long while, bring himself to play it again.",
      "Renner had built a career on the conviction that sounds should be preserved because they were vanishing. He understood now that he had had the reasoning exactly backwards. It was not the rarity of a sound that made it worth keeping; it was the love. The ferryman's call, the dying dialects, the industrial clamour — all of it had mattered to someone, in the way the unremarkable noise of his own kitchen had mattered, immeasurably, to him. He labelled the reel at last, in his neat archivist's hand, and then, for the first time in his professional life, he made an exception to his own system and took one recording home."
    ]},
  { id:"c1-9", level:"C1", motif:"sunrise", title:"An Ordinary Light", author:"H. Calloway",
    blurb:"A man who has spent his life waiting for some grand revelation walks down to the estuary at dawn — and finds, in the most ordinary of mornings, the thing he had been looking for all along.",
    body:[
      "Gabriel Hayes had spent the greater part of his sixty years waiting for something to happen to him. Not a specific thing — he could never have named it — but some arrival, some clarifying event, after which his life would at last assume the shape and significance he had always felt it was withholding. He had been, by every external measure, fortunate: work that was respected, a marriage that was kind, children who turned out well. And still, underneath it all, there had persisted a faint, patient expectation, the sense of a guest who had not yet come.",
      "He had looked for this arrival in the usual places. He had read the serious books and sat, for a time, with the serious teachers. He had travelled to mountains and to cities supposed to hold the secret. He had felt, on occasion, the near approach of something vast, and had reached for it, and found his hand closing on nothing. By his sixtieth year he had more or less given the matter up, with the quiet, unspoken disappointment of a man folding away a map he has finally admitted leads nowhere.",
      "It was during this period of surrender, of all times, that he formed the habit of walking down to the estuary before dawn. He told himself it was for his health, or for the sleep he no longer reliably had, but in truth he went for no reason he could defend. He simply walked, in the cold and the dark, to the place where the river widened and met the sea, and stood there, an ageing man in a heavy coat, and waited, out of nothing more than habit now, for the light.",
      "One morning — an entirely ordinary morning, indistinguishable from a hundred others — the sun came up over the flat grey water, and Gabriel, watching it, was overtaken by a feeling so quiet and so complete that he almost failed to notice it arriving. There was no revelation in it, no voice, no vast unveiling. There was only the light coming slowly across the mud and the water, the cry of an early bird, the cold air in his chest, and the wholly unremarkable fact of his being alive and present to witness it. And he understood, with a calm that astonished him, that this was all there had ever been to wait for.",
      "He went back the next morning, and the morning after that, and the light was always, in its small way, enough. The great arrival he had awaited for sixty years had been arriving, he saw now, every single day of his life, unannounced and unregarded, in exactly this form — in ordinary mornings, ordinary light, the ordinary and inexhaustible gift of the next breath. He had spent his life expecting a miracle and overlooking the one he was given. He was not sorry. There was, he reflected, walking home as the town woke around him, still a little time in which to pay attention."
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
