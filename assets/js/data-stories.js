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
