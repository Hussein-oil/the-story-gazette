/**
 * @file Tech section data: programming and computer-literacy stories with glossaries.
 *
 * @typedef {Object} TechTerm
 * @property {string} term  The glossary term.
 * @property {string} def   Its plain-language definition.
 *
 * @typedef {Object} TechStory
 * @property {string} id            Unique id, e.g. "tp-z1".
 * @property {("prog"|"comp")} cat  Category: programming or computer.
 * @property {("Zero"|"Beginner"|"Intermediate"|"Advanced"|"Pro")} level
 * @property {string} motif         Key into the engraving motif map `M` (covers.js).
 * @property {string} title
 * @property {string} author
 * @property {string} blurb
 * @property {string[]} body        Paragraph texts.
 * @property {TechTerm[]} terms     Glossary shown after the story.
 */
/* ---------- Tech section data ---------- */
const TECH_LEVELS=['Zero','Beginner','Intermediate','Advanced','Pro'];
const TECH_LEVEL_DESC={
  prog:{Zero:'General Overview',Beginner:'Frontend Web',Intermediate:'Backend',Advanced:'Full Stack',Pro:'Expert Level'},
  comp:{Zero:'Computing Basics',Beginner:'Hardware',Intermediate:'OS & Networking',Advanced:'Systems & Security',Pro:'Advanced CS'}
};
const TECH_ACCENTS={
  prog:{Zero:'#4a7c59',Beginner:'#2e6da4',Intermediate:'#9e3a2f',Advanced:'#6b4a9e',Pro:'#b07820'},
  comp:{Zero:'#5a6b42',Beginner:'#1d5f8a',Intermediate:'#8a3020',Advanced:'#5a3888',Pro:'#966414'}
};

const TECH_STORIES=[
  /* ── PROGRAMMING ─────────────────────────────── */
  {id:'tp-z1',cat:'prog',level:'Zero',motif:'book',title:'The Recipe Book',author:'NovaHubs Tech',
   blurb:'What is a program? A simple story about instructions, computers, and the art of writing code.',
   body:[
     "Every morning, Sara makes coffee. She follows the same steps: fill the kettle, boil the water, add coffee to the cup. These steps are a recipe. A recipe tells you what to do, one step at a time.",
     "A computer program is like a recipe. It is a list of instructions. The computer reads the instructions and follows them — first this, then that. The computer never forgets a step, and it never makes a mistake — if the recipe is correct.",
     "Writing a program is called coding. The person who writes code is a programmer. The language they use is a programming language. There are many programming languages, just as there are many human languages. Each one is designed for a different purpose."
   ],
   terms:[
     {term:'Program',def:'A set of instructions a computer follows to complete a task.'},
     {term:'Code',def:'The text a programmer writes to create a program.'},
     {term:'Coding',def:'The act of writing a program in a programming language.'},
     {term:'Programmer',def:'A person who writes code.'},
     {term:'Programming Language',def:'A formal language used to write instructions for a computer, such as Python or JavaScript.'},
     {term:'Algorithm',def:'A step-by-step method for solving a problem.'},
     {term:'Instruction',def:'A single command in a program that the computer executes.'}
   ]},
  {id:'tp-z2',cat:'prog',level:'Zero',motif:'lamp',title:'The Library Building',author:'NovaHubs Tech',
   blurb:'How computers store data — from files and folders to memory and storage.',
   body:[
     "A large library has millions of books, each in a specific place — organized by shelves, sections, and floors. A computer works the same way. It stores information in a very organized structure so that it can find anything instantly.",
     "Information in a computer is called data. A document, a photo, or a song — these are all data. Data is saved in files, and files are stored in folders. Folders can be inside other folders, just like sections inside a library.",
     "A computer has two kinds of memory. One is fast but temporary — it holds what you are working on right now. The other is permanent — it keeps your files when you turn the computer off. Think of it as a desk and a cabinet. Work happens on the desk. Saved files go in the cabinet."
   ],
   terms:[
     {term:'Data',def:'Information stored or processed by a computer.'},
     {term:'File',def:'A named collection of data stored on a computer.'},
     {term:'Folder',def:'A container that organizes files on a computer.'},
     {term:'Storage',def:'Permanent space where files are saved even when the computer is off.'},
     {term:'Memory (RAM)',def:'Fast, temporary space the computer uses while a program is running.'},
     {term:'Input',def:'Data or a command that goes into a computer.'},
     {term:'Output',def:'The result that comes out of a computer after processing.'}
   ]},
  {id:'tp-b1',cat:'prog',level:'Beginner',motif:'quill',title:'The Skeleton of the Web',author:'NovaHubs Tech',
   blurb:'An introduction to HTML — the language that gives every webpage its structure.',
   body:[
     "When you open a website, you see text, pictures, and buttons. But what is underneath all of this? The answer is HTML. HTML is a language that tells the browser what to place on a page. Every website starts with HTML.",
     "HTML uses tags. A tag is a short instruction written inside angle brackets. The tag <h1> means 'this is a large heading.' The tag <p> means 'this is a paragraph.' Tags come in pairs — an opening tag and a closing tag — and the content goes between them.",
     "A webpage is built like a house. HTML is the frame — the walls and the roof. Without HTML, there is nothing to see. You later add CSS to paint the walls, and JavaScript to open the doors. But HTML always comes first. It is the skeleton of every page on the internet."
   ],
   terms:[
     {term:'HTML',def:'HyperText Markup Language — the language that defines the structure of a webpage.'},
     {term:'Tag',def:'A keyword written inside angle brackets, like <p> or <h1>, that marks up content.'},
     {term:'Element',def:'A complete HTML unit with an opening tag, content, and a closing tag.'},
     {term:'Browser',def:'The application used to view websites, such as Chrome, Firefox, or Safari.'},
     {term:'Attribute',def:'Extra information added inside an opening tag, such as class="title".'},
     {term:'Heading',def:'A title on a webpage, marked with tags from <h1> (largest) to <h6> (smallest).'},
     {term:'Paragraph',def:'A block of text on a webpage, marked with the <p> tag.'}
   ]},
  {id:'tp-b2',cat:'prog',level:'Beginner',motif:'map',title:'Painting the Web',author:'NovaHubs Tech',
   blurb:'What CSS does and why every website needs it to look good.',
   body:[
     "Imagine a house with no paint, no curtains, and bare concrete walls. That is what a website looks like without CSS. CSS stands for Cascading Style Sheets. It is the language that makes websites visually appealing — controlling colors, fonts, spacing, and layout.",
     "CSS works with rules. Each rule has a selector and a declaration. The selector chooses which HTML element to style. The declaration says what to change. You can change the color, the size, the margin, the border, and much more — all without touching the HTML.",
     "CSS can also control layout — where things appear on the page. A menu on the left, a photo on the right, a footer at the bottom. Modern websites use layout systems called Flexbox and CSS Grid. These tools make it straightforward to design a page that works on any screen size."
   ],
   terms:[
     {term:'CSS',def:'Cascading Style Sheets — the language used to style and visually design webpages.'},
     {term:'Style',def:'A visual property applied to an HTML element, such as color or font size.'},
     {term:'Selector',def:'The part of a CSS rule that targets which HTML element to style.'},
     {term:'Property',def:'The visual characteristic to change in CSS, such as color or margin.'},
     {term:'Value',def:'The setting applied to a CSS property, such as red or 16px.'},
     {term:'Class',def:'A reusable name given to HTML elements so CSS can target and style them.'},
     {term:'Layout',def:'How elements are positioned and arranged on a page using CSS.'}
   ]},
  {id:'tp-i1',cat:'prog',level:'Intermediate',motif:'key',title:'The Restaurant Kitchen',author:'NovaHubs Tech',
   blurb:'How the web really works — clients, servers, requests, and responses explained.',
   body:[
     "Think of a restaurant. You sit at a table, look at the menu, and order your food. A waiter takes your order to the kitchen. The kitchen prepares the meal and sends it back to your table. This is exactly how the internet works.",
     "Your browser is the customer. The website's server is the kitchen. Your browser sends a request — 'please give me this page.' The server receives the request, prepares the data, and sends a response. This exchange follows a set of rules called HTTP.",
     "The address of a website — such as www.example.com — is called a URL. When you type a URL, your browser asks a DNS system to translate it into a numerical address. It then connects to the correct server. The server runs code, fetches data from a database, and builds the page — all in less than one second."
   ],
   terms:[
     {term:'Server',def:'A computer that stores and delivers website data to clients over the internet.'},
     {term:'Client',def:'The browser or device that sends requests to a server.'},
     {term:'Request',def:'A message sent by a client to ask a server for data.'},
     {term:'Response',def:'The data and status code the server sends back after receiving a request.'},
     {term:'HTTP',def:'HyperText Transfer Protocol — the rules governing how data is sent between clients and servers.'},
     {term:'URL',def:'Uniform Resource Locator — the full address of a resource on the web.'},
     {term:'Backend',def:'The server-side code, databases, and logic invisible to the user.'}
   ]},
  {id:'tp-i2',cat:'prog',level:'Intermediate',motif:'clock',title:'The Filing Cabinet',author:'NovaHubs Tech',
   blurb:'What databases are, how tables work, and why SQL is the language of data.',
   body:[
     "A large company has thousands of employees. Each person has a name, a job title, a salary, and a start date. Keeping all this on paper would fill an entire room. Instead, companies use databases — organized systems for storing and retrieving large amounts of information.",
     "Inside a database, data lives in tables. A table looks like a spreadsheet: rows and columns. Each row is one record — one employee, one product, one order. Each column holds one type of information, such as 'Name' or 'Date.' A single database can hold millions of rows across dozens of tables.",
     "To retrieve information, you write a query using a language called SQL. A query is a precise question: 'Give me all orders placed after January 2024 with a value above 100.' SQL finds the right rows and returns them instantly. Nearly every website and application you use runs on a database behind the scenes."
   ],
   terms:[
     {term:'Database',def:'An organized system for storing, managing, and retrieving large amounts of data.'},
     {term:'Table',def:'A grid structure inside a database made up of rows and columns.'},
     {term:'Row',def:'A single complete record in a database table.'},
     {term:'Column',def:'A named category of data in a table, such as Name or Price.'},
     {term:'Query',def:'A command that asks a database to return or modify specific data.'},
     {term:'SQL',def:'Structured Query Language — the standard language for working with relational databases.'},
     {term:'Record',def:'A single entry of data stored as one row in a database table.'}
   ]},
  {id:'tp-a1',cat:'prog',level:'Advanced',motif:'gears',title:'Building the Bridge',author:'NovaHubs Tech',
   blurb:'How frontend and backend connect through APIs — and what it means to be a full stack developer.',
   body:[
     "A restaurant has a kitchen and a dining room. The kitchen is the backend — it does the hard work, invisible to the customer. The dining room is the frontend — what the customer sees and experiences. These two parts communicate through the waiter. In web development, that waiter is called an API.",
     "An API — Application Programming Interface — is a set of rules for how two programs communicate. The frontend sends a request to a specific API endpoint. Each endpoint is a door that does one job: one returns user data, another saves a new order. The server responds with data in a format called JSON — a lightweight, readable structure.",
     "A developer who builds both the frontend and the backend is called a full stack developer. Most use frameworks to build faster. A framework is a ready-made structure — like building with pre-cut timber instead of raw wood. React is popular on the frontend. Node.js, Django, and Laravel are common on the backend."
   ],
   terms:[
     {term:'API',def:'Application Programming Interface — a defined way for two programs to communicate with each other.'},
     {term:'Full Stack',def:'Development that covers both the frontend (user interface) and backend (server and database).'},
     {term:'Endpoint',def:'A specific URL on a server that handles a particular type of request.'},
     {term:'JSON',def:'JavaScript Object Notation — a lightweight format for exchanging data between server and client.'},
     {term:'Frontend',def:'The part of a web application the user sees and interacts with in the browser.'},
     {term:'Authentication',def:'The process of verifying the identity of a user before granting access.'},
     {term:'Framework',def:'A pre-built code structure that accelerates development by providing common tools and conventions.'}
   ]},
  {id:'tp-a2',cat:'prog',level:'Advanced',motif:'train',title:'The Delivery System',author:'NovaHubs Tech',
   blurb:'HTTP methods, status codes, and REST — the grammar of how the web talks to itself.',
   body:[
     "When you use a web application, many small conversations happen between your browser and the server. Each conversation uses a method — a type of action. GET means 'give me this data.' POST means 'here is new data, please save it.' PUT updates existing data. DELETE removes it. Each method has a clear, distinct purpose.",
     "After the server handles a request, it sends back a status code — a three-digit number describing what happened. 200 means success. 201 means a new item was created. 404 means the resource was not found. 500 means something went wrong on the server. These codes are the first thing a developer checks when something breaks.",
     "Most modern APIs follow a design style called REST. A REST API organizes data by type and address. Users live at /users. Products live at /products. You use GET, POST, PUT, and DELETE to read, create, update, and remove data. This clean, consistent structure makes APIs predictable, easy to understand, and straightforward to maintain."
   ],
   terms:[
     {term:'GET',def:'An HTTP method used to request data from a server without modifying anything.'},
     {term:'POST',def:'An HTTP method used to send new data to a server to be created or processed.'},
     {term:'PUT',def:'An HTTP method used to update an existing resource on the server.'},
     {term:'DELETE',def:'An HTTP method used to remove a resource from the server.'},
     {term:'Status Code',def:'A three-digit number in an HTTP response indicating the result of a request.'},
     {term:'404',def:'An HTTP status code meaning the requested resource was not found on the server.'},
     {term:'REST',def:'Representational State Transfer — an architectural style for designing consistent, organized web APIs.'}
   ]},
  {id:'tp-p1',cat:'prog',level:'Pro',motif:'lighthouse',title:'The Art of Performance',author:'NovaHubs Tech',
   blurb:'Web performance optimization: caching, CDNs, lazy loading, and why speed defines user experience.',
   body:[
     "Speed matters. Research shows that if a website takes more than three seconds to load, the majority of users will leave. Web developers invest significant effort in performance optimization — the practice of making websites as fast and efficient as possible.",
     "One powerful technique is caching. When a browser loads a webpage, it can save certain assets locally. The next visit uses the saved copy instead of re-downloading everything. Servers also cache database results to avoid running the same expensive query repeatedly. A well-designed cache can reduce server load by over ninety percent.",
     "Another approach is a CDN — Content Delivery Network. A CDN is a distributed system of servers located around the world. Files are served from the node nearest to the user: someone in Dubai receives assets from a nearby server, not one in San Francisco. Combined with lazy loading — which defers loading of off-screen images — and minification — which removes whitespace from code — a well-optimized site can feel instantaneous on any connection."
   ],
   terms:[
     {term:'Performance',def:'How fast and efficiently a website loads and responds to user interactions.'},
     {term:'Caching',def:'Storing copies of data temporarily so they can be served faster on subsequent requests.'},
     {term:'CDN',def:'Content Delivery Network — a distributed system that serves files from servers close to the user.'},
     {term:'Lazy Loading',def:'Delaying the loading of non-critical resources until they are needed, improving initial load time.'},
     {term:'Minification',def:'Removing unnecessary characters from code (spaces, comments) to reduce file size.'},
     {term:'Bundle',def:'A single combined file created from multiple source files to reduce HTTP requests.'},
     {term:'Optimization',def:'The process of improving the speed, efficiency, or resource usage of code or a website.'}
   ]},
  {id:'tp-p2',cat:'prog',level:'Pro',motif:'theatre',title:'The Guard at the Gate',author:'NovaHubs Tech',
   blurb:'Web security fundamentals: HTTPS, encryption, hashing, XSS, CSRF — and why every developer must understand them.',
   body:[
     "Every website that handles passwords, financial data, or private messages has a responsibility to protect it. Web security is not an optional feature — it is a fundamental discipline. A secure application is built intentionally, layer by layer, from the very first line of code.",
     "The most visible security measure is HTTPS. When a site's address begins with https://, all data between your browser and the server is encrypted using SSL/TLS. Even if someone intercepts the traffic, they see only scrambled bytes. Passwords must never be stored as plain text — they are stored as hashes: one-way transformations that cannot be reversed, produced by algorithms like bcrypt.",
     "Two of the most common attacks are XSS and CSRF. In a Cross-Site Scripting (XSS) attack, an attacker injects malicious code into a webpage that executes in other users' browsers, potentially stealing session tokens. In a Cross-Site Request Forgery (CSRF) attack, the attacker tricks a logged-in user into unknowingly performing an action. Developers defend against both by validating all input, setting strict HTTP headers, and using unique request tokens."
   ],
   terms:[
     {term:'HTTPS',def:'A secure version of HTTP that encrypts all data between the browser and server.'},
     {term:'SSL/TLS',def:'Protocols that establish an encrypted connection between client and server.'},
     {term:'Encryption',def:'The transformation of data into an unreadable form to prevent unauthorized access.'},
     {term:'Hashing',def:'A one-way function that converts data into a fixed string; used to store passwords securely.'},
     {term:'XSS',def:'Cross-Site Scripting — an attack where malicious scripts are injected into trusted webpages.'},
     {term:'CSRF',def:'Cross-Site Request Forgery — an attack that tricks authenticated users into performing unwanted actions.'},
     {term:'Vulnerability',def:'A weakness in a system that can be discovered and exploited by an attacker.'}
   ]},

  /* ── COMPUTER ─────────────────────────────────── */
  {id:'tc-z1',cat:'comp',level:'Zero',motif:'gears',title:'The Thinking Machine',author:'NovaHubs Tech',
   blurb:'What a computer actually is — hardware, software, CPU, and RAM explained simply.',
   body:[
     "A computer is a machine that reads instructions, processes information, and produces results. It can perform billions of calculations in a single second. It does not think like a human, but it follows instructions far faster than any human ever could.",
     "Every computer has two main parts: hardware and software. Hardware is the physical components — the screen, the keyboard, the circuits inside. Software is the programs and operating system — you cannot touch it, but you use it every day. Hardware is the body. Software is the mind.",
     "The most important piece of hardware is the CPU — the Central Processing Unit. The CPU is the brain of the computer. It reads each instruction and carries it out. Beside it sits the RAM — Random Access Memory. RAM is the computer's short-term memory. It holds everything the machine is working on at this moment. More RAM means the computer can run more programs smoothly at once."
   ],
   terms:[
     {term:'Computer',def:'A machine that processes data according to a set of instructions.'},
     {term:'Hardware',def:'The physical components of a computer, such as the processor, screen, and keyboard.'},
     {term:'Software',def:'Programs and operating systems that run on a computer\'s hardware.'},
     {term:'CPU',def:'Central Processing Unit — the main processor that executes instructions in a computer.'},
     {term:'RAM',def:'Random Access Memory — fast, temporary memory used while a computer is running.'},
     {term:'Input Device',def:'A hardware device that sends data into a computer, such as a keyboard or mouse.'},
     {term:'Output Device',def:'A hardware device that presents data from a computer, such as a monitor or printer.'}
   ]},
  {id:'tc-z2',cat:'comp',level:'Zero',motif:'ship',title:'The World Wide Web',author:'NovaHubs Tech',
   blurb:'How the internet connects billions of devices — and how your data travels around the world.',
   body:[
     "The internet is a vast global network — billions of computers and devices all connected together. When you watch a video, send a message, or read an article, data travels from one computer to another, crossing thousands of kilometres in less than a second.",
     "Every device on the internet has a unique address called an IP address. It looks like a series of numbers, such as 192.168.0.1. Routers read these addresses and direct data to the right destination. A router is like a post office: it reads the address on every package and forwards it along the correct path.",
     "Data does not travel as one large block. It is split into small pieces called packets. Each packet may take a different route and they reassemble at the destination. This design makes the internet highly resilient: if one route is blocked, packets simply find another. The web itself — websites and pages — is one service that runs on top of the internet."
   ],
   terms:[
     {term:'Internet',def:'A global system of interconnected computer networks that exchange data.'},
     {term:'Network',def:'A group of computers connected together to share resources and data.'},
     {term:'IP Address',def:'A unique numerical label assigned to each device on a network.'},
     {term:'Router',def:'A networking device that forwards data packets between networks toward their destination.'},
     {term:'Data Packet',def:'A small unit of data transmitted over a network as part of a larger message.'},
     {term:'Website',def:'A collection of webpages stored on a server and accessible via the internet.'},
     {term:'Domain',def:'A human-readable name for a website or server, such as google.com.'}
   ]},
  {id:'tc-b1',cat:'comp',level:'Beginner',motif:'house',title:'Inside the Box',author:'NovaHubs Tech',
   blurb:'What lives inside a computer: motherboard, GPU, power supply, and the parts you never see.',
   body:[
     "If you open a desktop computer, you find a world of circuits and cables. At the center is the motherboard — a large circuit board that connects every component. The CPU, RAM, and storage all plug into the motherboard. It is the central hub around which the entire machine is built.",
     "For graphics and video, computers use a GPU — a Graphics Processing Unit. The GPU is a specialized processor designed to handle images and video very quickly. Gamers and video editors rely on powerful GPUs for smooth, high-resolution visuals. Modern GPUs are also used for artificial intelligence and scientific calculations.",
     "All components need electrical power. The power supply unit — PSU — converts the electricity from your wall socket into the correct voltages for each part. Computers generate considerable heat during operation. Cooling systems — fans and liquid coolers — keep temperatures within safe limits. Sustained overheating permanently damages hardware."
   ],
   terms:[
     {term:'Motherboard',def:'The main printed circuit board that connects and allows communication between all computer components.'},
     {term:'GPU',def:'Graphics Processing Unit — a specialized processor for rendering images, video, and graphics.'},
     {term:'Power Supply (PSU)',def:'A unit that converts mains electricity into the DC voltages required by computer components.'},
     {term:'Port',def:'A physical socket on a computer where external devices or cables are connected.'},
     {term:'Chip',def:'A small piece of silicon containing an integrated electronic circuit.'},
     {term:'Cooling System',def:'Fans or liquid coolers that remove heat generated by computer components during operation.'},
     {term:'Expansion Slot',def:'A slot on the motherboard where additional components such as a GPU or network card can be installed.'}
   ]},
  {id:'tc-b2',cat:'comp',level:'Beginner',motif:'mountains',title:'The Memory Tower',author:'NovaHubs Tech',
   blurb:'Hard drives, SSDs, cloud storage — how computers remember everything even when turned off.',
   body:[
     "Computers need to store data permanently: programs, photos, videos, and documents must all survive when the machine is turned off. The traditional solution is the hard drive — a device that uses spinning magnetic disks to read and write data. Hard drives can store enormous amounts of data at a low cost per gigabyte.",
     "Modern computers increasingly use SSDs — Solid State Drives. Unlike hard drives, SSDs contain no moving parts. They store data on silicon chips, similar to a large USB drive. SSDs are dramatically faster than hard drives and far more resistant to physical shock. The trade-off is a higher price per gigabyte of storage.",
     "Cloud storage offers a third option. Services such as Google Drive and Dropbox store your files on remote servers accessible from any device. Most people combine all three: a fast SSD for the operating system and active work, cloud storage for backups and sharing, and occasionally a hard drive for large archives. A backup — a separate copy of your data — is essential protection against hardware failure."
   ],
   terms:[
     {term:'Hard Drive (HDD)',def:'A storage device that uses spinning magnetic platters to read and write data.'},
     {term:'SSD',def:'Solid State Drive — a fast storage device that uses silicon chips with no moving parts.'},
     {term:'USB Drive',def:'A small portable storage device that connects to a computer via a USB port.'},
     {term:'Cloud Storage',def:'Storing files on remote servers maintained by a third party, accessible over the internet.'},
     {term:'Gigabyte (GB)',def:'A unit of digital storage equal to approximately one billion bytes.'},
     {term:'Terabyte (TB)',def:'A unit of storage equal to 1,000 gigabytes.'},
     {term:'Backup',def:'A copy of data stored separately in case the original is lost, corrupted, or damaged.'}
   ]},
  {id:'tc-i1',cat:'comp',level:'Intermediate',motif:'clock',title:'The City Manager',author:'NovaHubs Tech',
   blurb:'What an operating system does — kernel, processes, multitasking, and why it matters.',
   body:[
     "An operating system is the software that manages everything on a computer. Without it, the hardware is powerful but useless — a racing car with no steering wheel. The operating system bridges the gap between raw hardware and the applications you use every day. Windows, macOS, and Linux are the three dominant operating systems.",
     "At the heart of every operating system is the kernel. The kernel is the core layer that communicates directly with the hardware. It controls the CPU, memory, and storage devices. Above the kernel is the shell — the interface you use to give commands. Modern systems use graphical shells with icons and windows. Older systems used text commands, and professionals still do.",
     "One critical task of the operating system is multitasking — running many applications at the same time. You can browse the web, listen to music, and edit a document simultaneously. The OS allocates CPU time to each program in tiny slices, switching between them so rapidly that all appear to run at once. It also manages memory, ensuring programs do not interfere with one another."
   ],
   terms:[
     {term:'Operating System',def:'Software that manages hardware resources and provides services for running applications.'},
     {term:'Kernel',def:'The core of an operating system that directly controls hardware resources.'},
     {term:'Process',def:'A program currently loaded into memory and being executed by the CPU.'},
     {term:'File System',def:'The method an operating system uses to organize and store files on storage devices.'},
     {term:'Shell',def:'The user interface of an operating system, either graphical (GUI) or text-based (CLI).'},
     {term:'Driver',def:'Software that allows the operating system to communicate with a specific hardware device.'},
     {term:'Multitasking',def:'The ability of an operating system to run multiple processes apparently simultaneously.'}
   ]},
  {id:'tc-i2',cat:'comp',level:'Intermediate',motif:'map',title:'The Language of Networks',author:'NovaHubs Tech',
   blurb:'TCP/IP, DNS, firewalls, and protocols — the invisible language that keeps the internet running.',
   body:[
     "Computers communicate over networks using agreed-upon rules called protocols. The most fundamental is TCP/IP — actually two protocols working together. IP handles addressing and routing: it gives every device a unique address and directs packets toward their destination. TCP handles reliability: it ensures that all packets arrive and are reassembled in the correct order.",
     "When you type www.example.com into a browser, your computer does not know where that server is. It first contacts a DNS server — the Domain Name System. DNS functions as the internet's phone book: it translates human-readable domain names into numerical IP addresses. Once the IP address is resolved, your browser can connect directly to the correct server.",
     "A firewall monitors all traffic entering and leaving a network. It applies rules to block unauthorized or suspicious connections. Think of it as a security checkpoint: each packet is inspected and either allowed through or rejected. Firewalls exist as hardware devices, software programs, or both, and are an essential component of any secure network."
   ],
   terms:[
     {term:'TCP/IP',def:'The pair of fundamental protocols governing how data is addressed, transmitted, and received over the internet.'},
     {term:'DNS',def:'Domain Name System — translates human-readable domain names into numerical IP addresses.'},
     {term:'Protocol',def:'A set of rules that governs how computers communicate over a network.'},
     {term:'Firewall',def:'A system that monitors and controls network traffic based on security rules.'},
     {term:'Bandwidth',def:'The maximum amount of data that can be transmitted over a network connection per second.'},
     {term:'Latency',def:'The time delay between sending a request and receiving a response over a network.'},
     {term:'Packet Loss',def:'The failure of data packets to reach their destination, causing gaps in communication.'}
   ]},
  {id:'tc-a1',cat:'comp',level:'Advanced',motif:'key',title:'The Keys to the Kingdom',author:'NovaHubs Tech',
   blurb:'Cryptography, public and private keys, malware, phishing, and two-factor authentication.',
   body:[
     "Every day, billions of private messages, financial transactions, and passwords travel across the internet. Protecting them requires cryptography — the science of secure communication. Modern encryption uses mathematical problems so complex that even the most powerful computers would take thousands of years to break them.",
     "Public key cryptography uses two mathematically linked keys. The public key can be shared freely — anyone uses it to encrypt (lock) data intended for you. Only your private key can decrypt (unlock) it, and that key never leaves your possession. This mechanism powers HTTPS, secure email, digital signatures, and cryptocurrency.",
     "The weakest link in security is frequently human behaviour rather than technology. Phishing attacks impersonate trusted services — a bank, a courier, an employer — to trick users into revealing passwords or clicking malicious links. Malware is software designed to damage, surveil, or control a system. Two-factor authentication counters credential theft by requiring a second proof of identity — a code sent to your phone — in addition to a password."
   ],
   terms:[
     {term:'Encryption',def:'The transformation of data into an unreadable form that only an authorized party can decode.'},
     {term:'Public Key',def:'A key shared openly, used to encrypt data that only the corresponding private key can decrypt.'},
     {term:'Private Key',def:'A secret key kept by its owner, used to decrypt data encrypted with the matching public key.'},
     {term:'Certificate',def:'A digital document issued by a trusted authority that verifies the identity of a server or individual.'},
     {term:'Malware',def:'Malicious software designed to damage, infiltrate, or gain unauthorized control of a computer system.'},
     {term:'Phishing',def:'A social engineering attack that impersonates a trusted entity to steal sensitive information.'},
     {term:'Two-Factor Authentication',def:'A login method requiring two independent proofs of identity, significantly reducing account compromise.'}
   ]},
  {id:'tc-a2',cat:'comp',level:'Advanced',motif:'theatre',title:"The Architect's Tools",author:'NovaHubs Tech',
   blurb:'IDEs, Git, version control, debugging — the professional toolkit every developer uses daily.',
   body:[
     "Professional developers do not write code in basic text editors. They use IDEs — Integrated Development Environments. An IDE combines a text editor, error checker, autocompletion engine, and debugging tools in a single application. Visual Studio Code, IntelliJ IDEA, and PyCharm are widely used examples. A good IDE dramatically increases productivity and catches mistakes before the program runs.",
     "One of the most transformative tools in software development is Git — a distributed version control system. Git records every change made to a codebase over its entire history. If an update introduces a bug, you can examine exactly what changed and revert to any previous state. Teams use Git to collaborate: multiple engineers work on the same project simultaneously, each on their own branch, without overwriting each other's contributions. The code is stored in a repository.",
     "When a program behaves unexpectedly, developers use a debugger to investigate. A debugger allows you to pause execution at a specific line — called a breakpoint — and inspect the exact value of every variable at that moment. You step through the code line by line, watching the program's state change, until the source of the problem becomes clear. The process of finding and fixing bugs is called debugging, and it is as important a skill as writing code."
   ],
   terms:[
     {term:'IDE',def:'Integrated Development Environment — a software application combining code editor, debugger, and build tools.'},
     {term:'Git',def:'A distributed version control system that tracks the history of changes to a codebase.'},
     {term:'Version Control',def:'A system that records changes to files over time, enabling retrieval of any previous version.'},
     {term:'Terminal',def:'A text-based interface for issuing commands directly to an operating system.'},
     {term:'Debugging',def:'The systematic process of finding and fixing errors in a program.'},
     {term:'Breakpoint',def:'A marker in code that causes a debugger to pause execution at that line for inspection.'},
     {term:'Repository',def:'A storage location containing all files and the complete history of changes for a project.'}
   ]},
  {id:'tc-p1',cat:'comp',level:'Pro',motif:'lighthouse',title:'The Invisible Infrastructure',author:'NovaHubs Tech',
   blurb:'Cloud computing, virtualization, containers, Docker, Kubernetes — the backbone of modern software.',
   body:[
     "For most of computing history, running an application meant owning a physical server — a machine in a room, consuming power, requiring maintenance, and sitting idle during quiet hours. Cloud computing eliminated this constraint. Today, you rent precisely the computing power, storage, and services you need from providers such as AWS, Google Cloud, or Azure, and pay only for what you consume.",
     "The technology behind cloud computing is virtualization. A single powerful physical server can be partitioned into dozens of virtual machines, each behaving as an independent computer with its own operating system. Containers take this further: instead of a full virtual machine, you package just the application and its dependencies in a lightweight, portable unit. Docker is the dominant container platform. Containers start in seconds and consume a fraction of the resources of virtual machines.",
     "Managing thousands of containers across hundreds of servers requires orchestration. Kubernetes is the industry-standard tool for this challenge. It automatically schedules, starts, restarts, and scales containers based on demand and health. If traffic to your application doubles in an hour, Kubernetes provisions additional containers to meet it without human intervention. This elasticity is one of the defining advantages of modern cloud infrastructure."
   ],
   terms:[
     {term:'Cloud Computing',def:'Delivering computing services — storage, processing, networking — over the internet on demand.'},
     {term:'Virtualization',def:'Creating multiple virtual instances of hardware resources on a single physical machine.'},
     {term:'Container',def:'A lightweight, portable package containing an application and all its dependencies.'},
     {term:'Docker',def:'The leading platform for building, distributing, and running containerized applications.'},
     {term:'Kubernetes',def:'An open-source system for automating deployment, scaling, and management of containers.'},
     {term:'Scalability',def:'The capacity of a system to handle increased workload by adding resources.'},
     {term:'Infrastructure',def:'The hardware, software, and network components that provide the foundation for computing services.'}
   ]},
  {id:'tc-p2',cat:'comp',level:'Pro',motif:'mountains',title:'The Open Commons',author:'NovaHubs Tech',
   blurb:'Open source software: repositories, licenses, forks, pull requests, and how the world builds together.',
   body:[
     "In the 1980s, a programmer named Richard Stallman proposed a radical idea: software should be free — not in price, but in freedom. Free to use, study, modify, and share. This philosophy seeded the open source movement. Today, the most critical software on earth — Linux, the kernel powering most servers and all Android devices — is open source, built by thousands of volunteers over decades.",
     "Open source code is stored in public repositories, most commonly on GitHub. Anyone can read the code, file bug reports, or propose improvements. To contribute changes, you fork the repository — create your own copy — make your modifications, then submit a pull request: a formal proposal to merge your changes into the original project. Maintainers review the proposal, discuss it, and decide whether to accept it.",
     "Every open source project carries a license that defines the terms of use. Permissive licenses, such as MIT or Apache, allow the code to be used in commercial products with minimal obligations. Copyleft licenses, such as the GPL, require that any derivative work also be open source. Choosing the right license is a foundational decision for any project. The open source community — built on transparency, trust, and shared ownership — has produced the tools, languages, and frameworks that power the entire modern internet."
   ],
   terms:[
     {term:'Open Source',def:'Software distributed with its source code, permitting anyone to view, modify, and redistribute it.'},
     {term:'Repository',def:'A storage location for source code and its complete history of changes, often hosted on GitHub.'},
     {term:'License',def:'A legal agreement specifying the conditions under which software may be used, modified, and distributed.'},
     {term:'Fork',def:'A personal copy of another repository, used to develop changes independently.'},
     {term:'Pull Request',def:'A proposal to merge changes from one branch or fork into the original repository.'},
     {term:'Contribution',def:'Code, documentation, tests, or other work added to an open source project by a community member.'},
     {term:'Community',def:'The group of developers, maintainers, and users who collectively build and sustain an open source project.'}
   ]}
];
