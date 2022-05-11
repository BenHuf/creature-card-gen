var $container = $("#container").addClass("p-3")
var allMonstersUrl = 'https://api.open5e.com/monsters/?limit=1100';
var someMonstersUrl = 'https://api.open5e.com/monsters/?limit=100';
var searchMonster = 'https://api.open5e.com/monsters/?search='
var elementType = ''

// retrieved this variable by running a loop through all monster entries 
// and pushing values for name into an array
// to save resources and speed up document load time I copied this from console.log
var creatureNames = [
    "Aatxe",
    "Aboleth",
    "Aboleth, Nihilith",
    "Abominable Beauty",
    "Accursed Defiler",
    "Acid Ant",
    "Acolyte",
    "Adult Black Dragon",
    "Adult Blue Dragon",
    "Adult Brass Dragon",
    "Adult Bronze Dragon",
    "Adult Cave Dragon",
    "Adult Copper Dragon",
    "Adult Flame Dragon",
    "Adult Gold Dragon",
    "Adult Green Dragon",
    "Adult Light Dragon",
    "Adult Mithral Dragon",
    "Adult Red Dragon",
    "Adult Rime Worm",
    "Adult Sea Dragon",
    "Adult Silver Dragon",
    "Adult Void Dragon",
    "Adult Wasteland Dragon",
    "Adult White Dragon",
    "Adult Wind Dragon",
    "Agnibarra",
    "Ahu-Nixta",
    "Ahuizotl",
    "Air Elemental",
    "Akyishigal, Demon Lord Of Cockroaches",
    "Al-Aeshma Genie",
    "Ala",
    "Alabaster Tree",
    "Albino Death Weasel",
    "Alchemical Apprentice",
    "Alchemical Golem",
    "Alchemist Archer",
    "Alehouse Drake",
    "Algorith",
    "Alkonost",
    "Alliumite",
    "Alnaar",
    "Alp",
    "Alpha Yek",
    "Alquam, Demon Lord Of Night",
    "Alseid",
    "Alseid Grovekeeper",
    "Altar Flame Golem",
    "Ammut",
    "Amphiptere",
    "Ancient Black Dragon",
    "Ancient Blue Dragon",
    "Ancient Brass Dragon",
    "Ancient Bronze Dragon",
    "Ancient Copper Dragon",
    "Ancient Flame Dragon",
    "Ancient Gold Dragon",
    "Ancient Green Dragon",
    "Ancient Light Dragon",
    "Ancient Mandriano",
    "Ancient Mithral Dragon",
    "Ancient Red Dragon",
    "Ancient Sea Dragon",
    "Ancient Silver Dragon",
    "Ancient Titan",
    "Ancient Void Dragon",
    "Ancient Wasteland Dragon",
    "Ancient White Dragon",
    "Ancient Wind Dragon",
    "Andrenjinyi",
    "Androsphinx",
    "Angatra",
    "Angel, Chained",
    "Angler Worm",
    "Animated Armor",
    "Ankheg",
    "Ankou Soul Herald",
    "Ankou Soul Seeker",
    "Anophiloi",
    "Anubian",
    "Apau Perape",
    "Ape",
    "Arbeyach",
    "Arborcyte",
    "Arboreal Grappler",
    "Arcamag",
    "Arcanaphage",
    "Archaeopteryx",
    "Archmage",
    "Aridni",
    "Armory Golem",
    "Asanbosam",
    "Ash Drake",
    "Assassin",
    "Astral Snapper",
    "Automata Devil",
    "Avatar Of Boreas",
    "Avatar of Shoth",
    "Awakened Shrub",
    "Awakened Tree",
    "Axe Beak",
    "Azeban",
    "Azer",
    "Azi Dahaka",
    "Azza Gremlin",
    "Baba Yaga's Horsemen, Black Night",
    "Baba Yaga's Horsemen, Bright Day",
    "Baba Yaga's Horsemen, Red Sun",
    "Baboon",
    "Badger",
    "Bagiennik",
    "Balor",
    "Bandit",
    "Bandit Captain",
    "Bandit Lord",
    "Bar Brawl",
    "Barbed Devil",
    "Barong",
    "Basilisk",
    "Bastet Temple Cat",
    "Bat",
    "Bathhouse Drake",
    "Bear King",
    "Bearded Devil",
    "Bearfolk",
    "Bearfolk Chieftain",
    "Bearmit Crab",
    "Beggar Ghoul",
    "Behir",
    "Behtu",
    "Beli",
    "Bereginyas",
    "Berserker",
    "Berstuc",
    "Bilwis",
    "Black Bear",
    "Black Dragon Wyrmling",
    "Black Knight Commander",
    "Black Pudding",
    "Black Sun Orc",
    "Black Sun Priestess",
    "Blemmyes",
    "Blink Dog",
    "Blood Elemental",
    "Blood Giant",
    "Blood Hag",
    "Blood Hawk",
    "Blood Ooze",
    "Blood Zombie",
    "Bloody Bones",
    "Blue Dragon Wyrmling",
    "Boar",
    "Boloti",
    "Bone Collective",
    "Bone Crab",
    "Bone Devil",
    "Bone Golem",
    "Bone Swarm",
    "Bonepowder Ghoul",
    "Bookkeeper",
    "Boot Grabber",
    "Bouda",
    "Brass Dragon Wyrmling",
    "Bronze Dragon Wyrmling",
    "Bronze Golem",
    "Broodiken",
    "Brown Bear",
    "Bucca",
    "Bugbear",
    "Bukavac",
    "Bulette",
    "Buraq",
    "Burrowling",
    "Cactid",
    "Cacus Giant",
    "Camazotz, Demon Lord Of Bats And Fire",
    "Cambium",
    "Camel",
    "Carbuncle",
    "Carrion Beetle",
    "Cat",
    "Cats of Ulthar",
    "Cauldronborn",
    "Cave Dragon Wyrmling",
    "Cave Giant",
    "Cavelight Moss",
    "Centaur",
    "Centaur Chieftain",
    "Chain Devil",
    "Chaos-Spawn Goblin",
    "Chelicerae",
    "Chernomoi",
    "Child Of The Briar",
    "Child of Yggdrasil",
    "Chimera",
    "Chort Devil",
    "Chronalmental",
    "Chuhaister",
    "Chupacabra",
    "Chuul",
    "Cikavak",
    "Cipactli",
    "City Watch Captain",
    "Clacking Skeleton",
    "Clay Golem",
    "Cloaker",
    "Clockwork Abomination",
    "Clockwork Assassin",
    "Clockwork Beetle",
    "Clockwork Beetle Swarm",
    "Clockwork Hound",
    "Clockwork Huntsman",
    "Clockwork Myrmidon",
    "Clockwork Servant",
    "Clockwork Soldier",
    "Clockwork Watchman",
    "Cloud Giant",
    "Clurichaun",
    "Cobbleswarm",
    "Cockatrice",
    "Commoner",
    "Constrictor Snake",
    "Copper Dragon Wyrmling",
    "Coral Drake",
    "Corpse Mound",
    "Corpse Thief",
    "Corrupting Ooze",
    "Couatl",
    "Crab",
    "Crimson Drake",
    "Crimson Mist",
    "Crocodile",
    "Crypt Spider",
    "Crystalline Devil",
    "Cueyatl",
    "Cueyatl Moon Priest",
    "Cueyatl Sea Priest",
    "Cueyatl Warrior",
    "Cult Fanatic",
    "Cultist",
    "Darakhul High Priestess",
    "Darakhul Shadowmancer",
    "Dark Eye",
    "Dark Father",
    "Dark Servant",
    "Dark Voice",
    "Darkmantle",
    "Dau",
    "Death Butterfly Swarm",
    "Death Dog",
    "Deathcap Myconid",
    "Deathsworn Elf",
    "Deathwisp",
    "Deep Drake",
    "Deep Gnome (Svirfneblin)",
    "Deep One",
    "Deep One Archimandrite",
    "Deep One Hybrid Priest",
    "Deer",
    "Degenerate Titan",
    "Derro Fetal Savant",
    "Derro Shadow Antipaladin",
    "Desert Giant",
    "Desert Troll",
    "Deva",
    "Devil Bough",
    "Devil Shark",
    "Devilbound Gnomish Prince",
    "Dhampir",
    "Dhampir Commander",
    "Dipsa",
    "Dire Wolf",
    "Dissimortuum",
    "Djinni",
    "Dogmole",
    "Dogmole Juggernaut",
    "Domovoi",
    "Doom Golem",
    "Doppelganger",
    "Doppelrat",
    "Dorreq",
    "Dracotaur",
    "Draft Horse",
    "Dragon Eel",
    "Dragon Turtle",
    "Dragonleaf Tree",
    "Drakon",
    "Dream Eater",
    "Dream Squire",
    "Dream Wraith",
    "Dretch",
    "Drider",
    "Droth",
    "Drow",
    "Drowned Maiden",
    "Druid",
    "Dryad",
    "Duergar",
    "Dullahan",
    "Dune Mimic",
    "Duskthorn Dryad",
    "Dust Goblin",
    "Dust Goblin Chieftain",
    "Dust Mephit",
    "Dvarapala",
    "Dwarven Ringmage",
    "Eagle",
    "Eala",
    "Earth Elemental",
    "Eater Of Dust (Yakat-Shi)",
    "Echo",
    "Ecstatic Bloom",
    "Edimmu",
    "Edjet",
    "Eel Hound",
    "Efreeti",
    "Einherjar",
    "Elder Ghost Boar",
    "Elder Shadow Drake",
    "Eleinomae",
    "Elemental Locus",
    "Elementalist",
    "Elephant",
    "Elite Kobold",
    "Elk",
    "Elophar",
    "Elvish Veteran Archer",
    "Emerald Eye",
    "Emerald Order Cult Leader",
    "Emperor Of The Ghouls",
    "Empty Cloak",
    "Enchanter",
    "Eonic Drifter",
    "Erina Defender",
    "Erina Scrounger",
    "Erinyes",
    "Ettercap",
    "Ettin",
    "Execrable Shrub",
    "Exploding Toad",
    "Eye Golem",
    "Eye of the Gods",
    "Fang of the Great Wolf",
    "Far Darrig",
    "Far Wanderer",
    "Fate Eater",
    "Fear Liath",
    "Fear Smith",
    "Fellforged",
    "Fext",
    "Fey Drake",
    "Feyward Tree",
    "Fidele Angel",
    "Fierstjerren",
    "Fire Dancer Swarm",
    "Fire Elemental",
    "Fire Giant",
    "Fire Imp",
    "Firebird",
    "Firegeist",
    "Flab Giant",
    "Flame Dragon Wyrmling",
    "Flame Eater Swarm",
    "Flame-Scourged Scion",
    "Flesh Golem",
    "Flesh Reaver",
    "Fleshpod Hornet",
    "Flutterflesh",
    "Flying Polyp",
    "Flying Snake",
    "Flying Sword",
    "Folk Of Leng",
    "Forest Drake",
    "Forest Marauder",
    "Foxfire Ooze",
    "Foxin",
    "Fractal Golem",
    "Fragrite",
    "Fraughashar",
    "Frog",
    "Frost Giant",
    "Frostveil",
    "Fulad-Zereh",
    "Fulminar",
    "Gaki",
    "Gargoctopus",
    "Gargoyle",
    "Garroter Crab",
    "Gbahali (Postosuchus)",
    "Gearforged Templar",
    "Gelatinous Cube",
    "Gerridae",
    "Ghast",
    "Ghast of Leng",
    "Ghost",
    "Ghost Boar",
    "Ghost Dragon",
    "Ghost Dwarf",
    "Ghost Knight",
    "Ghostwalk Spider",
    "Ghoul",
    "Ghoul, Darakhul",
    "Ghoul, Imperial",
    "Ghoul, Iron",
    "Ghoulsteed",
    "Giant Albino Bat",
    "Giant Ant",
    "Giant Ant Queen",
    "Giant Ape",
    "Giant Badger",
    "Giant Bat",
    "Giant Boar",
    "Giant Centipede",
    "Giant Constrictor Snake",
    "Giant Crab",
    "Giant Crocodile",
    "Giant Eagle",
    "Giant Elk",
    "Giant Fire Beetle",
    "Giant Frog",
    "Giant Goat",
    "Giant Hyena",
    "Giant Lizard",
    "Giant Moth",
    "Giant Octopus",
    "Giant Owl",
    "Giant Poisonous Snake",
    "Giant Rat",
    "Giant Rat (Diseased)",
    "Giant Scorpion",
    "Giant Sea Horse",
    "Giant Shark",
    "Giant Shark Bowl",
    "Giant Sloth",
    "Giant Spider",
    "Giant Toad",
    "Giant Vampire Bat",
    "Giant Vulture",
    "Giant Wasp",
    "Giant Weasel",
    "Giant Wolf Spider",
    "Gibbering Mouther",
    "Gilded Devil",
    "Glabrezu",
    "Gladiator",
    "Glass Gator",
    "Glass Golem",
    "Gloomflower",
    "Gnarljak",
    "Gnoll",
    "Gnoll Havoc Runner",
    "Gnoll Slaver",
    "Goat",
    "Goat-Man",
    "Goblin",
    "Gold Dragon Wyrmling",
    "Goliath Longlegs",
    "Goreling",
    "Gorgon",
    "Grave Behemoth",
    "Gray Ooze",
    "Gray Thirster",
    "Great Mandrake",
    "Greater Death Butterfly Swarm",
    "Greater Rakshasa",
    "Greater Scrag",
    "Green Abyss Orc",
    "Green Dragon Wyrmling",
    "Green Hag",
    "Green Knight of the Woods",
    "Grick",
    "Griffon",
    "Grim Jester",
    "Grimlock",
    "Grindylow",
    "Guard",
    "Guardian Naga",
    "Gug",
    "Gugalanna",
    "Gulon",
    "Gumienniki",
    "Gynosphinx",
    "Gypsosphinx",
    "Hair Golem",
    "Half-Red Dragon Veteran",
    "Hallowed Reed",
    "Harpy",
    "Haugbui",
    "Haunted Giant",
    "Hawk",
    "Heavy Cavalry",
    "Hell Hound",
    "Herald Of Blood",
    "Herald Of Darkness",
    "Hezrou",
    "Hierophant Lich",
    "Hill Giant",
    "Hippogriff",
    "Hoard Golem",
    "Hobgoblin",
    "Homunculus",
    "Horakh",
    "Horned Devil",
    "Horned Serpent",
    "Hound Of The Night",
    "Hound of Tindalos",
    "Hraesvelgr The Corpse Swallower",
    "Hulking Whelp",
    "Hundun",
    "Hunter Shark",
    "Hydra",
    "Hyena",
    "Ia'affrat",
    "Ice Devil",
    "Ice Maiden",
    "Ice Mephit",
    "Ichneumon",
    "Idolic Deity",
    "Ijiraq",
    "Imp",
    "Imy-Ut Ushabti",
    "Incinis",
    "Infernal Knight",
    "Ink Devil",
    "Ink Guardian",
    "Inkling",
    "Invisible Stalker",
    "Iron Golem",
    "Iron Sphere",
    "Isonade",
    "J'ba Fofi Spider",
    "Jaanavar Jal",
    "Jackal",
    "Jaculus",
    "Jiangshi",
    "Jinmenju",
    "Jotun Giant",
    "Junk Shaman",
    "Kalke",
    "Kallikantzaros",
    "Kapi",
    "Kappa",
    "Karakura",
    "Keg Golem",
    "Kikimora",
    "Killer Whale",
    "King Kobold",
    "Kinnara",
    "Kishi Demon",
    "Kitsune",
    "Knight",
    "Knight of the Road",
    "Kobold",
    "Kobold Alchemist",
    "Kobold Chieftain",
    "Kobold Trapsmith",
    "Kongamato",
    "Koralk (Harvester Devil)",
    "Korrigan",
    "Koschei",
    "Kot Bayun",
    "Krake Spawn",
    "Kraken",
    "Kryt",
    "Kuunganisha",
    "Külmking",
    "Labyrinth Keeper",
    "Lady in White",
    "Laestrigonian Giant",
    "Lake Troll",
    "Lamassu",
    "Lamia",
    "Lantern Dragonette",
    "Lemure",
    "Lemurfolk",
    "Lemurfolk Greyfur",
    "Leonino",
    "Leshy",
    "Lesser Scrag",
    "Library Automaton",
    "Lich",
    "Lich Hound",
    "Light Cavalry",
    "Light Dragon Wyrmling",
    "Likho",
    "Lindwurm",
    "Lion",
    "Liosalfar",
    "Living Shade",
    "Living Star",
    "Living Wick",
    "Lizard",
    "Lizardfolk",
    "Lord Of The Hunt",
    "Lord Zombie",
    "Lorelei",
    "Lost Minotaur",
    "Lotus Golem",
    "Lou Carcolh",
    "Loxoda",
    "Lunar Devil",
    "Lystrosaurus",
    "Mage",
    "Magma Mephit",
    "Magmin",
    "Mahoru",
    "Malakbel",
    "Mallqui",
    "Malphas (Storm Crow)",
    "Mammon",
    "Mammoth",
    "Mamura",
    "Manabane Scarab Swarm",
    "Manastorm Golem",
    "Mandrake",
    "Mandriano",
    "Manticore",
    "Map Mimic",
    "Marilith",
    "Mask Wight",
    "Mastiff",
    "Matriarch Serpentine Lamia",
    "Mavka",
    "Mbielu",
    "Mechuiti, Demon Lord Of Apes",
    "Medusa",
    "Megapede",
    "Merfolk",
    "Merrow",
    "Mi-Go",
    "Millitaur",
    "Mimic",
    "Mindrot Thrall",
    "Minotaur",
    "Minotaur Skeleton",
    "Mirager",
    "Miremal",
    "Mirror Hag",
    "Mngwa",
    "Mold Zombie",
    "Monarch Skeleton",
    "Monkey King",
    "Monolith Champion",
    "Monolith Footman",
    "Moon Drake",
    "Moon Nymph",
    "Moonchild Naga",
    "Moonlit King",
    "Mordant Snare",
    "Morko",
    "Morphoi",
    "Moss Lurker",
    "Mountain Giant",
    "Mud Golem",
    "Mule",
    "Mummy",
    "Mummy Lord",
    "Myling",
    "Mytholabe",
    "Nachzehrer",
    "Naina",
    "Nalfeshnee",
    "Nalusa Falaya",
    "Necrophage Ghast",
    "Necrotic Tick",
    "Neophron",
    "Ngobou",
    "Nian",
    "Nichny",
    "Night Hag",
    "Night Scorpion",
    "Nightgarm",
    "Nightgaunt",
    "Nightmare",
    "Nihilethic Zombie",
    "Ningyo",
    "Nkosi",
    "Nkosi Pridelord",
    "Nkosi War Ostrich",
    "Noble",
    "Noctiny",
    "Nodosaurus",
    "Ochre Jelly",
    "Octopus",
    "Oculo Swarm",
    "Ogre",
    "Ogre Chieftain, Corrupted",
    "Ogre Zombie",
    "Oliphaunt",
    "One-Headed Clockwork Dragon",
    "Oni",
    "Oozasis",
    "Ophanim",
    "Orc",
    "Orobas Devil",
    "Orthrus",
    "Ostinato",
    "Oth",
    "Otyugh",
    "Ouroban",
    "Ouroboros",
    "Owl",
    "Owl Harpy",
    "Owlbear",
    "Pact Drake",
    "Pact Lich",
    "Panther",
    "Paper Drake",
    "Paper Golem",
    "Paper Golem Swarm",
    "Pattern Dancer",
    "Pech",
    "Pech Lithlord",
    "Pech Stonemaster",
    "Pegasus",
    "Peluda Drake",
    "Phantom",
    "Phase Spider",
    "Philosopher's Ghost",
    "Piasa",
    "Pillar of the Lost Magocracy",
    "Pishacha",
    "Pit Fiend",
    "Pixiu",
    "Planetar",
    "Plaresh",
    "Plesiosaurus",
    "Poisonous Snake",
    "Polar Bear",
    "Pombero",
    "Pony",
    "Possessed Pillar",
    "Preta",
    "Priest",
    "Prismatic Beetle Swarm",
    "Pseudodragon",
    "Psoglav Demon",
    "Purple Slime",
    "Purple Worm",
    "Putrid Haunt",
    "Qorgeth, Demon Lord Of The Devouring Worm",
    "Quasit",
    "Queen Of Night And Magic",
    "Queen Of Witches",
    "Quickstep",
    "Quiet Soul",
    "Quipper",
    "Qwyllion",
    "Rageipede",
    "Rakshasa",
    "Ramag",
    "Ramag Portal Master",
    "Rat",
    "Rat King",
    "Ratatosk",
    "Ratatosk Warlord",
    "Ratfolk",
    "Ratfolk Mercenary",
    "Ratfolk Rogue",
    "Ratfolk Warlock",
    "Rattok",
    "Raven",
    "Ravenala",
    "Ravenfolk Doom Croaker",
    "Ravenfolk Scout",
    "Ravenfolk Warrior",
    "Razorleaf",
    "Red Dragon Wyrmling",
    "Red Hag",
    "Red-Banded Line Spider",
    "Redcap",
    "Reef Shark",
    "Remorhaz",
    "Rhinoceros",
    "Riding Horse",
    "Rift Swine",
    "Rime Worm Grub",
    "Rimewing",
    "Ring Servant",
    "Risen Reaver",
    "River King",
    "Roachling Lord",
    "Roachling Scout",
    "Roachling Skirmisher",
    "Roc",
    "Roggenwolf",
    "Roper",
    "Rotting Wind",
    "Rubezahl",
    "Ruby Ooze",
    "Rug of Smothering",
    "Rum Gremlin",
    "Rusalka",
    "Rust Drake",
    "Rust Monster",
    "Saber-Toothed Tiger",
    "Sahuagin",
    "Salamander",
    "Salt Devil",
    "Salt Golem",
    "Sammael",
    "Sand Hag",
    "Sand Silhouette",
    "Sand Spider",
    "Sandman",
    "Sandwyrm",
    "Sap Demon",
    "Sarcophagus Slime",
    "Sathaq Worm",
    "Satyr",
    "Savager",
    "Scheznyki",
    "Scitalis",
    "Scorpion",
    "Scorpion Cultist",
    "Scout",
    "Sea Dragon Wyrmling",
    "Sea Hag",
    "Sea Horse",
    "Selang",
    "Sentinel in Darkness",
    "Serpentfolk of Yig",
    "Serpentine Lamia",
    "Serpopard",
    "Servant of Yig",
    "Servant of the Vine",
    "Shabti",
    "Shadhavar",
    "Shadow",
    "Shadow Beast",
    "Shadow Blight",
    "Shadow Fey",
    "Shadow Fey Ambassador",
    "Shadow Fey Duelist",
    "Shadow Fey Enchantress",
    "Shadow Fey Forest Hunter",
    "Shadow Fey Guardian",
    "Shadow Fey Poisoner",
    "Shadow Goblin",
    "Shadow Ooze",
    "Shadow River Lord",
    "Shadow Skeleton",
    "Shambling Mound",
    "Shantak",
    "Shard Swarm",
    "Sharkjaw Skeleton",
    "Shellycoat",
    "Shield Guardian",
    "Shockwing",
    "Shoggoth",
    "Shoreline Scrapper",
    "Shrieker",
    "Shroud",
    "Sigilian",
    "Silver Dragon Wyrmling",
    "Simhamukha",
    "Simurg",
    "Skein Witch",
    "Skeleton",
    "Skin Bat",
    "Skitterhaunt",
    "Skull Drake",
    "Skull Lantern",
    "Sleipnir",
    "Slow Storm",
    "Sluagh Swarm",
    "Smaragdine Golem",
    "Snow Cat",
    "Snow Hag",
    "Snow Queen",
    "Solar",
    "Son Of Fenris",
    "Song Angel",
    "Sootwing",
    "Sooze",
    "Soul Eater",
    "Spark",
    "Spawn Of Akyishigal",
    "Spawn Of Arbeyach",
    "Spawn of Chernobog",
    "Speaker to the Darkness",
    "Specter",
    "Spectral Guardian",
    "Spider",
    "Spider Drake",
    "Spider Of Leng",
    "Spider Thief",
    "Spinosaurus",
    "Spire Walker",
    "Spirit Lamp",
    "Spirit Naga",
    "Spree",
    "Sprite",
    "Spy",
    "Star Drake",
    "Star Spawn Of Cthulhu",
    "Steam Golem",
    "Steam Mephit",
    "Stirge",
    "Stone Giant",
    "Stone Golem",
    "Storm Giant",
    "Storm Lord",
    "Storm Spirit",
    "Stryx",
    "Stuhac",
    "Stygian Fat-Tailed Scorpion",
    "Subek",
    "Succubus/Incubus",
    "Sunset Raptor",
    "Suppurating Ooze",
    "Suturefly",
    "Swamp Adder",
    "Swarm of Bats",
    "Swarm of Beetles",
    "Swarm of Centipedes",
    "Swarm of Insects",
    "Swarm of Poisonous Snakes",
    "Swarm of Quippers",
    "Swarm of Rats",
    "Swarm of Ravens",
    "Swarm of Spiders",
    "Swarm of Wasps",
    "Swolbold",
    "Tar Ghoul",
    "Tarrasque",
    "Temple Dog",
    "Terror Bird",
    "The Barbed",
    "Thorned Sulfurlord",
    "Thread-Bound Constrictor Snake",
    "Three-Headed Clockwork Dragon",
    "Three-Headed Cobra",
    "Thuellai",
    "Thug",
    "Thursir Giant",
    "Tiger",
    "Titanoboa",
    "Tophet",
    "Tosculi Drone",
    "Tosculi Elite Bow Raider",
    "Tosculi Hive-Queen",
    "Tosculi Jeweled Drone",
    "Tosculi Warrior",
    "Totivillus, Scribe Of Hell",
    "Treacle",
    "Treant",
    "Tribal Warrior",
    "Triceratops",
    "Troll",
    "Trollkin Reaver",
    "Trollkin Shaman",
    "Trollking Grunt",
    "Tulpa",
    "Tusked Crimson Ogre",
    "Tusked Skyfish",
    "Tveirherjar",
    "Two-Headed Eagle",
    "Tyrannosaurus Rex",
    "Umbral Vampire",
    "Undead Phoenix",
    "Unhatched",
    "Unicorn",
    "Uraeus",
    "Urochar (Strangling Watcher)",
    "Ursa Polaris",
    "Ushabti",
    "Vaettir",
    "Valkyrie",
    "Vampire",
    "Vampire Patrician",
    "Vampire Priestess",
    "Vampire Spawn",
    "Vampire Warlock - Variant",
    "Vampiric Knight",
    "Vanara",
    "Vapor Lynx",
    "Vellso",
    "Venom Elemental",
    "Venom Maw Hydra",
    "Venomous Mummy",
    "Vesiculosa",
    "Veteran",
    "Vila",
    "Vile Barber",
    "Vine Lord",
    "Vine Lord's Tendril Puppet",
    "Vine Troll Skeleton",
    "Vines of Nemthyr",
    "Violet Fungus",
    "Void Dragon Wyrmling",
    "Void Giant",
    "Voidling",
    "Vrock",
    "Vulture",
    "Wampus Cat",
    "War Machine Golem",
    "War Wyvern",
    "Warhorse",
    "Warhorse Skeleton",
    "Warlock's Trumpetbloom",
    "Wasteland Dragon Wyrmling",
    "Water Elemental",
    "Water Horse",
    "Water Leaper",
    "Weasel",
    "Weaving Spider",
    "Weeping Treant",
    "Weirding Scroll",
    "Wendigo",
    "Werebat",
    "Werebear",
    "Wereboar",
    "Werehyena",
    "Wererat",
    "Weretiger",
    "Werewolf",
    "Wharfling",
    "Wharfling Swarm",
    "Whisperer in Darkness",
    "White Ape",
    "White Dragon Wyrmling",
    "White Stag",
    "Wickerman",
    "Wight",
    "Will-o'-Wisp",
    "Wind Demon",
    "Wind Eater",
    "Wind Weasel",
    "Wind's Harp",
    "Winter Wolf",
    "Wirbeln Fungi",
    "Witch Queen",
    "Witchlight",
    "Wizard Kobold",
    "Wolf",
    "Wolf Reaver Dwarf",
    "Wolf Spirit Swarm",
    "Wolpertinger",
    "Wood Golem",
    "Woodwose",
    "Worg",
    "Wormhearted Suffragan",
    "Wraith",
    "Wyrmling Wind Dragon",
    "Wyvern",
    "Wyvern Knight",
    "Xanka",
    "Xenabsorber",
    "Xhkarsh",
    "Xiphus",
    "Xorn",
    "Yaga Goo",
    "Yakirian",
    "Yann-An-Oed",
    "Ychen Bannog",
    "Yek",
    "Young Black Dragon",
    "Young Blue Dragon",
    "Young Brass Dragon",
    "Young Bronze Dragon",
    "Young Cave Dragon",
    "Young Copper Dragon",
    "Young Flame Dragon",
    "Young Gold Dragon",
    "Young Green Dragon",
    "Young Light Dragon",
    "Young Mithral Dragon",
    "Young Red Dragon",
    "Young Sea Dragon",
    "Young Silver Dragon",
    "Young Spinosaurus",
    "Young Void Dragon",
    "Young Wasteland Dragon",
    "Young White Dragon",
    "Young Wind Dragon",
    "Zanskaran Viper",
    "Zaratan",
    "Zimwi",
    "Ziphius",
    "Zmey",
    "Zmey Headling",
    "Zombie",
    "Zoog",
    "Zoryas"
];

var deObjectify = function(obj) {
    var str = JSON.stringify(obj);
    str = str.replace(/[{}]/g,'');
    str = str.replace(/"/g, '');
    str = str.replace(/:/g, ' ');
    str = str.replace(/,/g, ', ');
    return str;
}

var nullChecker = function(val) {
    if(!val) {
        val = '-'
    }
    return val;
}

var createApiCards = function(url) {

fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        if (url.search('/?search=/g') !== -1) {
            data.results.length = 0
        }
        for (var i = 0; i < data.results.length; i++) {
            
            var results = data.results[i];

            var name = results.name
            var size = results.size
            var type = results.type
            var alignment = results.alignment
            var armorClass = results.armor_class
            var armorDescription = nullChecker(results.armor_desc)
            var hitPoints = results.hit_points
            var hitDice = results.hit_dice
            var speedVal = results.speed
            var speed = deObjectify(speedVal);
            var STR = results.strength
            var DEX = results.dexterity
            var CON = results.constitution
            var INT = results.intelligence
            var WIS = results.wisdom
            var CHA = results.charisma
            var strSave = nullChecker(results.strength_save)
            var dexSave = nullChecker(results.dexterity_save)
            var conSave = nullChecker(results.constitution_save)
            var intSave = nullChecker(results.intelligence_save)
            var wisSave = nullChecker(results.wisdom_save)
            var chaSave = nullChecker(results.charisma_save)
            var savingThrows = "STR " + strSave + ", DEX " + dexSave + ", CON " + conSave + ", INT " + intSave + ", WIS " + wisSave + ", CHA " + chaSave
            var skills = deObjectify(results.skills)
            var senses = results.senses
            var languages = results.languages
            var challenge = results.challenge_rating
            var abilities = results.special_abilities
            var actions = results.actions
            var reactions = results.reactions


            var $card = $('<div>').attr('id', [i]).addClass("creature-card border w-100 p-3 my-3 mx-3 col-10 col-md-5").appendTo($container)
            var $nameBlock = $('<div>').addClass("name-block border-bottom border-danger").appendTo($card)
            var $statBlock = $('<div>').addClass("stat-block border-bottom border-danger").appendTo($card)
            var $abilityScoreBlock = $('<table>').addClass("ability-table w100 border-bottom border-danger").appendTo($card)
            var $skillBlock = $('<div>').addClass("skill-block border-bottom border-danger").appendTo($card)
            var $abilityBlock = $('<div>').addClass("ability-block border-bottom border-danger").appendTo($card)
            var $actionBlock = $('<div>').addClass("action-block border-bottom border-danger").appendTo($card)
            var $reactionBlock = $('<div>').addClass("reaction-block border-bottom border-danger").appendTo($card)
            
            var parseAbilities = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("abilities edit")
                        .appendTo($abilityBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var abilityName =  arr[j].name
                    var abilityDescription = arr[j].desc

                    $('<div>')
                        .text(abilityName)
                        .addClass("ability-name" + [i]+[j] + " bold inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(abilityDescription)
                        .addClass("ability-desc" + [i]+[j] + " inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .appendTo($abilityBlock)
                        .addClass("mt-2")
                }
            }

            var parseActions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("actions edit")
                        .appendTo($actionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var actionName =  arr[j].name
                    var actionDescription = arr[j].desc

                    $('<div>')
                        .text(actionName)
                        .addClass("action-name" + [i]+[j] + " bold inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(actionDescription)
                        .addClass("action-desc" + [i]+[j] + " inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .appendTo($actionBlock)
                        .addClass("mt-2")
                }
            }

            var parseReactions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("reactions edit")
                        .appendTo($reactionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var reactionName =  arr[j].name
                    var reactionDescription = arr[j].desc

                    $('<div>')
                        .text(reactionName)
                        .addClass("reaction-name" + [i]+[j] + " bold inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(reactionDescription)
                        .addClass("reaction-desc" + [i]+[j] + " inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .appendTo($reactionBlock)
                        .addClass("mt-2")
                }
            }

            // nameBlock elements
            $('<h2>')
                .text(name)
                .addClass("name edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(size)
                .addClass("size sta inline edit")
                .attr('id', 'size' + [i])
                .appendTo($nameBlock);
            $('<div>')
                .text(" ")
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(type)
                .addClass("type sta inline edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(', ')
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(alignment)
                .addClass("alignment sta inline edit")
                .appendTo($nameBlock);

            // stat block elements
            // Armor Class
            $('<div>')
                .addClass("inline bold")
                .text("Armor Class ")
                .appendTo($statBlock)
            $('<div>')
                .text(armorClass)
                .addClass("armor-class inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(armorDescription)
                .addClass("armor-desc inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // Hit Points
            $('<div>')
                .text("Hit Points ")
                .addClass("bold inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitPoints)
                .addClass("hit-ponts inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitDice)
                .addClass("hit-dice inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // speed (Need to parse by key value pairs instead of deObjectify lol)
            $('<div>')
                .addClass("inline bold")
                .text("Speed ")
                .appendTo($statBlock)
            $('<div>')
                .text(speed)
                .addClass("speed inline edit")
                .appendTo($statBlock)

            // abilityScoreBlock table elements
            $('<tr>')
                .attr('id', 'tr1' + [i])
                .appendTo($abilityScoreBlock)
            $('<tr>')
                .attr('id', 'tr2' + [i])
                .appendTo($abilityScoreBlock)
            $('<th>')
                .text('STR')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('DEX')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CON')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('INT')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('WIS')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CHA')
                .appendTo($('#tr1' + [i]))
            $('<td>')
                .text(STR)
                .addClass("str edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(DEX)
                .addClass("dex edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CON)
                .addClass("con edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(INT)
                .addClass("int edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(WIS)
                .addClass("wis edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CHA)
                .addClass("cha edit")
                .appendTo($('#tr2' + [i]))

            // skill block elements
            // need to parse saving throws as individual throws for editing and saving. NO DEOBJECTIFY
            $('<div>')
                .addClass("bold inline")
                .text("Saving Throws ")
                .appendTo($skillBlock)
            $('<div>')
                .text(savingThrows)
                .addClass('saving-throws edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Skills ")
                .appendTo($skillBlock)
            $('<div>')
                .text(skills)
                .addClass('skills edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            // Need to de-deObjectify skills...
            $('<div>')
                .addClass("bold inline")
                .text("Senses ")
                .appendTo($skillBlock)
            $('<div>')
                .text(senses)
                .addClass('senses edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)
            
            $('<div>')
                .addClass("bold inline")
                .text("Languages ")
                .appendTo($skillBlock)
            $('<div>')
                .text(languages)
                .addClass('languages edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Challenge ")
                .appendTo($skillBlock)
            $('<div>')
                .text(challenge)
                .addClass('challenge edit inline')
                .appendTo($skillBlock)
            
            
            // abilityBlock elements
            parseAbilities(abilities);

            // actionsBlock elements
            $('<h3>')
                .text("Actions")
                .addClass("border-bottom border-danger")
                .appendTo($actionBlock)
            parseActions(actions);

            // reactionsBlock elements
            $('<h3>')
                .text("Reactions")
                .addClass("border-bottom border-danger")
                .appendTo($reactionBlock)
            parseReactions(reactions);
        }
    });
}

var createCards = function(data) {
for (var i = 0; i < data.results.length; i++) {
            
            var results = data.results[i];

            var name = results.name
            var size = results.size
            var type = results.type
            var alignment = results.alignment
            var armorClass = results.armor_class
            var armorDescription = nullChecker(results.armor_desc)
            var hitPoints = results.hit_points
            var hitDice = results.hit_dice
            var speedVal = results.speed
            var speed = deObjectify(speedVal);
            var STR = results.strength
            var DEX = results.dexterity
            var CON = results.constitution
            var INT = results.intelligence
            var WIS = results.wisdom
            var CHA = results.charisma
            var strSave = nullChecker(results.strength_save)
            var dexSave = nullChecker(results.dexterity_save)
            var conSave = nullChecker(results.constitution_save)
            var intSave = nullChecker(results.intelligence_save)
            var wisSave = nullChecker(results.wisdom_save)
            var chaSave = nullChecker(results.charisma_save)
            var savingThrows = "STR " + strSave + ", DEX " + dexSave + ", CON " + conSave + ", INT " + intSave + ", WIS " + wisSave + ", CHA " + chaSave
            var skills = deObjectify(results.skills)
            var senses = results.senses
            var languages = results.languages
            var challenge = results.challenge_rating
            var abilities = results.special_abilities
            var actions = results.actions
            var reactions = results.reactions


            var $card = $('<div>').attr('id', [i]).addClass("creature-card border w-100 p-3 my-3 mx-3 col-10 col-md-5").appendTo($container)
            var $nameBlock = $('<div>').addClass("name-block border-bottom border-danger").appendTo($card)
            var $statBlock = $('<div>').addClass("stat-block border-bottom border-danger").appendTo($card)
            var $abilityScoreBlock = $('<table>').addClass("ability-table w100 border-bottom border-danger").appendTo($card)
            var $skillBlock = $('<div>').addClass("skill-block border-bottom border-danger").appendTo($card)
            var $abilityBlock = $('<div>').addClass("ability-block border-bottom border-danger").appendTo($card)
            var $actionBlock = $('<div>').addClass("action-block border-bottom border-danger").appendTo($card)
            var $reactionBlock = $('<div>').addClass("reaction-block border-bottom border-danger").appendTo($card)
            
            var parseAbilities = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("abilities edit")
                        .appendTo($abilityBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var abilityName =  arr[j].name
                    var abilityDescription = arr[j].desc

                    $('<div>')
                        .text(abilityName)
                        .addClass("ability-name" + [i]+[j] + " bold inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .text(abilityDescription)
                        .addClass("ability-desc" + [i]+[j] + " inline edit")
                        .appendTo($abilityBlock)
                    $('<div>')
                        .appendTo($abilityBlock)
                        .addClass("mt-2")
                }
            }

            var parseActions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("actions edit")
                        .appendTo($actionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var actionName =  arr[j].name
                    var actionDescription = arr[j].desc

                    $('<div>')
                        .text(actionName)
                        .addClass("action-name" + [i]+[j] + " bold inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($actionBlock)
                    $('<div>')
                        .text(actionDescription)
                        .addClass("action-desc" + [i]+[j] + " inline edit")
                        .appendTo($actionBlock)
                    $('<div>')
                        .appendTo($actionBlock)
                        .addClass("mt-2")
                }
            }

            var parseReactions = function(arr) {
                if (!arr) {
                    $("<div>")
                        .text("None")
                        .addClass("reactions edit")
                        .appendTo($reactionBlock)
                }
                for (j = 0; j < arr.length; j++) {
                    var reactionName =  arr[j].name
                    var reactionDescription = arr[j].desc

                    $('<div>')
                        .text(reactionName)
                        .addClass("reaction-name" + [i]+[j] + " bold inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(" ")
                        .addClass("inline")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .text(reactionDescription)
                        .addClass("reaction-desc" + [i]+[j] + " inline edit")
                        .appendTo($reactionBlock)
                    $('<div>')
                        .appendTo($reactionBlock)
                        .addClass("mt-2")
                }
            }

            // nameBlock elements
            $('<h2>')
                .text(name)
                .addClass("name edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(size)
                .addClass("size sta inline edit")
                .attr('id', 'size' + [i])
                .appendTo($nameBlock);
            $('<div>')
                .text(" ")
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(type)
                .addClass("type sta inline edit")
                .appendTo($nameBlock);
            $('<div>')
                .text(', ')
                .addClass("inline")
                .appendTo($nameBlock);
            $('<div>')
                .text(alignment)
                .addClass("alignment sta inline edit")
                .appendTo($nameBlock);

            // stat block elements
            // Armor Class
            $('<div>')
                .addClass("inline bold")
                .text("Armor Class ")
                .appendTo($statBlock)
            $('<div>')
                .text(armorClass)
                .addClass("armor-class inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(armorDescription)
                .addClass("armor-desc inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // Hit Points
            $('<div>')
                .text("Hit Points ")
                .addClass("bold inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitPoints)
                .addClass("hit-ponts inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(' (')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .text(hitDice)
                .addClass("hit-dice inline edit")
                .appendTo($statBlock)
            $('<div>')
                .text(')')
                .addClass("inline")
                .appendTo($statBlock)
            $('<div>')
                .appendTo($statBlock)
            
            // speed (Need to parse by key value pairs instead of deObjectify lol)
            $('<div>')
                .addClass("inline bold")
                .text("Speed ")
                .appendTo($statBlock)
            $('<div>')
                .text(speed)
                .addClass("speed inline edit")
                .appendTo($statBlock)

            // abilityScoreBlock table elements
            $('<tr>')
                .attr('id', 'tr1' + [i])
                .appendTo($abilityScoreBlock)
            $('<tr>')
                .attr('id', 'tr2' + [i])
                .appendTo($abilityScoreBlock)
            $('<th>')
                .text('STR')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('DEX')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CON')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('INT')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('WIS')
                .appendTo($('#tr1' + [i]))
            $('<th>')
                .text('CHA')
                .appendTo($('#tr1' + [i]))
            $('<td>')
                .text(STR)
                .addClass("str edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(DEX)
                .addClass("dex edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CON)
                .addClass("con edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(INT)
                .addClass("int edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(WIS)
                .addClass("wis edit")
                .appendTo($('#tr2' + [i]))
            $('<td>')
                .text(CHA)
                .addClass("cha edit")
                .appendTo($('#tr2' + [i]))

            // skill block elements
            // need to parse saving throws as individual throws for editing and saving. NO DEOBJECTIFY
            $('<div>')
                .addClass("bold inline")
                .text("Saving Throws ")
                .appendTo($skillBlock)
            $('<div>')
                .text(savingThrows)
                .addClass('saving-throws edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Skills ")
                .appendTo($skillBlock)
            $('<div>')
                .text(skills)
                .addClass('skills edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            // Need to de-deObjectify skills...
            $('<div>')
                .addClass("bold inline")
                .text("Senses ")
                .appendTo($skillBlock)
            $('<div>')
                .text(senses)
                .addClass('senses edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)
            
            $('<div>')
                .addClass("bold inline")
                .text("Languages ")
                .appendTo($skillBlock)
            $('<div>')
                .text(languages)
                .addClass('languages edit inline')
                .appendTo($skillBlock)
            $('<div>')
                .appendTo($skillBlock)

            $('<div>')
                .addClass("bold inline")
                .text("Challenge ")
                .appendTo($skillBlock)
            $('<div>')
                .text(challenge)
                .addClass('challenge edit inline')
                .appendTo($skillBlock)
            
            
            // abilityBlock elements
            parseAbilities(abilities);

            // actionsBlock elements
            $('<h3>')
                .text("Actions")
                .addClass("border-bottom border-danger")
                .appendTo($actionBlock)
            parseActions(actions);

            // reactionsBlock elements
            $('<h3>')
                .text("Reactions")
                .addClass("border-bottom border-danger")
                .appendTo($reactionBlock)
            parseReactions(reactions);
        }
}

$(document).on("click", ".edit", async function() {
    $(this).removeClass("edit")

    var type = $(this)
        .prop('nodeName')
    
    var text = $(this)
        .text()
        .trim();

    var id = $(this)
        .attr("id");
    
    var classLabel = $(this)
        .attr("class");

    var textInput = $("<textarea>")
        .addClass(classLabel + " block w100")
        .attr('id', id)
        .val(text)
    
    $(this).replaceWith(textInput);

    textInput.trigger("focus")
    elementType = type;
    return type;
});

$(document).on("blur", "textarea", function() {
    $(this)
        .removeClass('block w100')
        .addClass('edit')

    var text = $(this)
        .val();

    var id = $(this)
        .attr('id')

    var classLabel = $(this)
        .attr('class')

    var $tag = $('<' + elementType + '>')
        .addClass(classLabel)
        .attr('id', id)
        .text(text);

    $(this).replaceWith($tag);
})

// used this function to get creature names array not called currently
var getCreatureNames = function() {

fetch(allMonstersUrl)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for (var i = 0; i < data.results.length; i++) {
        
            var name = data.results[i].name;
            creatureNames.push(name);
        }
    })

    .then(function() {
        console.log(creatureNames);
    })
}

// function to autocomplete search field with monster names
$( function() {
    $("#search-input").autocomplete({
      source: creatureNames
    });
  } );

// search form handler. Creates cards based on search terms
$("#search-form").submit(function(event) {
    event.preventDefault();
    var searchTerm = $("input[name=search-field").val();
    var searchUrl = searchMonster + searchTerm

     if (!searchTerm) {
         return false;
     }
     
    $(".creature-card").remove()
    createApiCards(searchUrl)
})