/*! Created by Reddy Huang. */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Moudi on 2017/3/2.
 */
var data = {
  animalList: ["crow", "vaquita", "tamarin", "frog", "owl", "turtle", "oryx", "iguana", "seahorse", "armadillo", "sloth", "kakapo", "echidna", "penguin", "damselfly", "bear", "parrotfish", "camel", "butterfly", "ostrich", "panda", "tapir", "sifaka", "lynx", "rhino", "peccary", "okapi", "loris", "hirola", "drill"],
  animalNames: ["Helmeted Hornbill", "Vaquita", "Golden Lion Tamarin", "Golden Poison Frog", "Forest Owlet", "Kemp’s Ridley Turtle", "Scimitar Oryx", "Fiji Crested Iguana", "Knysna Seahorse", "Brazilian Armadillo", "Pygmy 3-toed Sloth", "Kakapo", "Long-beaked Echidna", "African Penguin", "Greek Red Damsel", "Sun Bear", "Rainbow Parrotfish", "Bactrian Camel", "Wallace’s Birdwing", "Somali Ostrich", "Red Panda", "Malayan Tapir", "Diademed Sifaka", "Iberian Lynx", "Sumatran Rhino", "Chocoan Peccary", "Okapi", "Javan Slow Loris", "Hirola", "Drill"],
  translatedAnimalNames: ["盔犀鸟", "小头鼠海豚", "金狮狨", "金色箭毒蛙", "林斑小鸮", "坎普龟", "弯刀羚羊", "斐济冠状鬣蜥", "克尼斯纳海马", "巴西犰狳", "三指树獭", "鸮鹦鹉", "长喙针鼹鼠", "非洲企鹅", "希腊红蜻蜓", "马来熊", "彩虹鹦嘴鱼", "双峰驼", "红鸟翼凤蝶", "索马利鸵鸟", "红熊猫", "马来文貘", "冕狐猴", "伊比利亚猞猁", "苏门答腊犀牛", "草原西貒", "霍加狓", "爪哇懒猴", "亨氏牛羚", "鬼狒"],
  animalScientificName: ["Rhinoplax vigil", "Phocoena sinus", "Leontopithecus rosalia", "Phyllobates terribilis", "Heteroglaux blewitti", "Lepidochelys kempii", "Oryx dammah", "Brachylophus vitiensis", "Hippocampus capensis", "Tolypeutes tricinctus", "Bradypus pygmaeus", "Strigops habroptilus", "Zaglossus", "Spheniscus demersus", "Pyrrhosoma elisabethae", "Helarctos malayanus", "Scarus guacamaia", "Camelus bactrianus", "Ornithoptera croesus", "Struthio camelus molybdophanes", "Ailurus fulgens", "Tapirus indicus", "Propithecus diadema", "Lynx pardinus", "Dicerorhinus sumatrensis", "Catagonus wagneri", "Okapia johnstoni", "Nycticebus javanicus", "Beatragus hunteri", "Mandrillus leucophaeus"],
  animalRange: ["Indonesia / Malaysia", "Gulf of California", "Southeast Brazil", "Colombia", "India", "Gulf of Mexico", "North Africa", "Fiji", "South Africa", "Brazil", "Isla Escudo de Veraguas, Panama", "New Zealand", "New Guinea", "South Africa", "Greece / Southern Albania", "Southeast Asia", "Carribean / Bermuda", "China / Mongolia", "Maluku, Indonesia", "Horn of Africa", "Himalayas / Southwest China", "Sumatra / Malaysia / Thailand", "Eastern Madagascar", "Iberian Peninsula", "Sumatra / Borneo / Malay Peninsula", "Paraguay / Bolivia / Argentina", "Democratic Republic of the Congo", "Java, Indonesia", "Somalian Border", "Nigeria / Cameriib / Bioko Island"],
  translatedAnimalRange: ["印度尼西亚/马来西亚", "加利福尼亚湾", "巴西东南部", "哥伦比亚", "印度", "墨西哥湾", "北非", "斐济", "南非", "巴西", "埃斯库多德岛贝拉瓜斯/巴拿马", "新西兰", "新几内亚", "南非", "希腊/南阿尔巴尼亚", "东南亚", "加勒比/百慕大", "中国/蒙古", "摩鹿加群岛/印度尼西亚", "非洲之角", "喜马拉雅/中国西南", "苏门答腊/马来西亚/泰国", "东马达加斯加", "伊比利亚半岛", "苏门答腊/婆罗洲/马来半岛", "巴拉圭/玻利维亚/阿根廷 ", "刚果民主共和国", "爪哇/印度尼西亚", "索马里边界", "尼日利亚/ Cameriib / 比奥科岛"],
  animalCharity: ['<a class="line-link red offsite" target="_blank" href="http://rangkong.org/"><span></span>Rangkong</a>', '<a class="line-link red offsite" target="_blank" href="http://vaquita.tv"><span></span>Conservation</a>', '<a class="line-link red offsite" target="_blank" href="http://www.savetheliontamarin.org/"><span></span>Save the GLT</a>', '<a class="line-link red offsite" target="_blank" href="https://www.rainforesttrust.org/projects/complete-projects/preventing-extinction-golden-poison-frog/"><span></span>Rainforest Trust</a>', '<a class="line-link red offsite" target="_blank" href="http://www.edgeofexistence.org/birds/species_info.php?id=1934"><span></span>Further info</a>', '<a class="line-link red offsite" target="_blank" href="http://www.conserveturtles.org/seaturtleinformation.php?page=kemps-ridley"><span></span>Sea Turtle Conservancy</a>', '<a class="line-link red offsite" target="_blank" href="http://www.saharaconservation.org/?Scimitar-horned-Oryx-Chad"><span></span>Sahara Fund</a>', '<a class="line-link red offsite" target="_blank" href="http://taronga.org.au/animals-conservation/breeding-programs/global-breeding-programs/fijian-crested-iguana-breeding"><span></span>Breeding Program</a>', '<a class="line-link red offsite" target="_blank" href="http://seahorse.fisheries.ubc.ca/species/capensis"><span></span>Project Seahorse</a>', '<a class="line-link red offsite" target="_blank" href="http://www.acaatinga.org.br/english/index.php/2014/i-help-to-save-the-three-banded-armadillo/"><span></span>Caatinga</a>', '<a class="line-link red offsite" target="_blank" href="http://www.zsl.org/conservation/regions/americas/pygmy-three-toed-sloth-conservation"><span></span>ZSL Initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://kakaporecovery.org.nz/"><span></span>Kakapo Recovery</a>', '<a class="line-link red offsite" target="_blank" href="http://www.edgeofexistence.org/mammals/species_info.php?id=1395"><span></span>Further info</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sanccob.co.za/"><span></span>SANCCOB initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://www.iucnredlist.org/details/60274/0"><span></span>Further Info</a>', '<a class="line-link red offsite" target="_blank" href="http://sunbears.wildlifedirect.org/"><span></span>BNSBCC Iniative</a>', '<a class="line-link red offsite" target="_blank" href="http://blog.nature.org/science/2014/07/31/parrotfish-caribbean-coral-reef-iucn-report/"><span></span>Nature Conservancy</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sospecies.org/sos_projects/pilot_projects/edge_of_existence/wild_camel/"><span></span>SOS Wild Camel</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sawai-ecotourism.com/rainforest-conservation/"><span></span>Sawai Ecotourism</a>', '<a class="line-link red offsite" target="_blank" href="http://www.awf.org/"><span></span>AWF Foundation</a>', '<a class="line-link red offsite" target="_blank" href="http://redpandanetwork.org/"><span></span>Red Panda Network</a>', '<a class="line-link red offsite" target="_blank" href="http://www.malaytapir.org/"><span></span>Malay Tapir Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.sadabe.org/whatis.html"><span></span>Sadabe</a>', '<a class="line-link red offsite" target="_blank" href="http://soslynx.org/"><span></span>SOS Lynx</a>', '<a class="line-link red offsite" target="_blank" href="http://www.rhinos.org/rhinos/sumatran-rhino"><span></span>IRF</a>', '<a class="line-link red offsite" target="_blank" href="http://www.worldlandtrust.org/education/species/chacoan-peccary"><span></span>WLT Initiative</a>', '<a class="line-link red offsite" target="_blank" href="http://www.okapiconservation.org"><span></span>Okapi Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.conservationleadershipprogramme.org/project/javan-slow-loris-project-indonesia/"><span></span>JSL Project</a>', '<a class="line-link red offsite" target="_blank" href="http://www.hirolaconservation.org/"><span></span>Hirola Program</a>', '<a class="line-link red offsite" target="_blank" href="https://www.facebook.com/pages/The-Drill-Project/258035237544233"><span></span>Drill Project</a>'],
  animalCopyOne: ["This glorious hornbill uplisted 3 levels from Near Threatened to <span>Critically endangered</span> in late 2015.", "The greatest threat to the remaining vaquita is incidental death caused by fishing gear.", "Once at a low of 150 in a key habitat, Golden Lion Tamarins suffer from a range of human influences.", "This vivid dart frog is the <span>most poisonous species</span>, but it finds itself under considerable threat.", "The cute and petite Forest Owl suffers from a number of influences upon its small numbers.", "The smallest marine turtle has declined through food and egg exploitation but mainly, accidental <span>capture through shrimp fishing</span>.", "The Scimitar Oryx has immensely <span>charismatic horns</span> which proved too valuable a-source not to be hunted to extinction in the wild.", "Fiji is a fresh paradise for an array of natural wonders such as one of the only <span>colour-morphing</span> Iguanas, the Fiji Crested.", "Unlike many of the species in pieces, the Knysna Seahorse&rsquo;s endangerment is <span>not linked</span> to human activity.", "The Three Banded Armadillo of Brazil is a hard nut to crack – with only Pumas and Jaguars powerful enough to be a predatory threat. ", "The Pygmy Three-toed Sloths are situated on a lone uninhabited, protected island of Panama.", "The evolutionarily distinct Kakapo is one of the many flightless birds which evolved in isolation without predators in New Zealand.", "The Long-beaked Echidna is one of the longest serving species on Earth but its time may unfortunately finally be coming to an end.", "Once in abundance, the African Penguin’s decline in the past century has occurred with velocity.", "This long and vivid damselfly which bares likeness to the Large Red Damselfly, is restricted to very <span>limited ranges</span>.", "Sun Bears have a delightful necklace pattern accompanied by a long tongue but their existence may unfortunately be a lot shorter.", "A gorgeous array of colours spreads over this large fish but it&rsquo;s this size which helps place it under threat of overfishing.", "With <span>25-30</span> Bactrian Camels to be lost per year if current trends continue, this special specimen has a grim-looking future.", 'Named after <a class="offsite" href="http://en.wikipedia.org/wiki/Alfred_Russel_Wallace" target="_blank"><span></span>Alfred R. Wallace</a>, this butterfly&rsquo;s struggles would sadden the great naturalist.', "The Somali Ostrich, only declared a unique species as recently as 2014, is another unfortunate victim of human influences.", "The Wonderfully playful Red Panda is under threat from the common combination of habitat loss and to a lesser extent, poaching.", "This interesting snouty specimen is yet another unfortunate victim of deforestation and hunting. ", "This critically endangered Sifaka is under threat from hunting for food, but also primarily <span>loss of the rain forest</span> in its range.", "The Iberian Lynx is the world’s rarest cat species and could be the first to become extinct since the Sabre-toothed Tiger.", "Once in abundance in Southeast Asia, the Sumatran Rhinoceros is now critically endangered with 50% per decade lost till the early 90s.", "A range of problems place this Peccary in danger, hunting being the most significant contributor.", "This species which resemble a half-zebra, half-giraffe suffers from the usual combination of habitat loss and poaching.", "Wide-eyed and little wonder as like other Loris species, it has been <span>over-exploited</span> by humans.", "This critically endangered antelope stares extinction in the eyes, and would be the <span>first mammalian loss</span> in Africa in modern history.", "With a range of less than 220km&sup2;, this stocky primate is listed as <span>highest priority</span> African primate."],
  translatedAnimalCopyOne: ["盔犀鸟的保护动物等级在2015年下半年从近危险直接上升了3个级别到<span>极度濒危</span>", "小头鼠海豚最大的威胁是渔具造成的附带伤害", "金狮狨的主要栖息地曾一度低于150个，他们饱受着人类的影响", "这活灵活现的动物是世界上<span>最毒的物种</span>，但它们渐渐发现自己正受到相当大的威胁", "这可爱又灵巧的林斑小鸮种群数目已经不多于250头", "这种海龟通常因为捕虾而被意外捕捞", "弯刀羚羊有着<span>巨大旖旎的角</span>代表着它的价值，直接导致了它在野外被捕杀", "斐济是一系列自然奇观的天堂，例如斐济冠状鬣蜥就是唯一的<span>变色</span>鬣鳞蜥", "与许多物种不同，克尼斯纳海马的濒危是<span>不与</span>人类活动有关的", "巴西犰狳是一种具有坚硬外壳的动物，只有美洲虎、美洲狮才能对它构成威胁", "三指树獭生活在巴拿马群岛的无人区", "进化独特的鸮鹦鹉生活在新西兰与世隔绝没有捕食者的地方，它们是许多不会飞的鸟类之一", "长喙针鼹鼠是地球上最早的哺乳类动物之一，可不幸的是它们最终要迎来灭绝", "非洲企鹅在过去的一个世纪数量快速下降", "这种长而生动的蜻蜓与大红蜻蜓相似，只有<span>有限的活动范围</span>", "马来熊是现存体型最小的熊,它的长舌头富有代表性，全球种群数量正在快速下降", "缤纷的颜色散布在这条鱼身上，但它的大小使它受到过度捕捞的威胁", "如果目前的趋势继续，每年将减少<span>25-30</span>头双峰驼，这个特殊的标本有着严峻的未来", "因为Alfred R. Wallace而得名，这只蝴蝶的挣扎会让自然主义者感到担忧", "索马里鸵鸟在2014年被列为保护动物，它是另一个不幸受到人类影响的物种", "奇妙俏皮的红熊猫受到栖息地丧失的威胁，并在一定程度受到偷猎的影响", "马来文貘是砍伐森林、狩猎的受害者", "这个极度濒危的冕狐猴受到寻找食物的威胁，但也主要因为<span>雨林的破坏</span>", "伊比利亚猞猁是世界上最稀有的猫科动物，也可能是继剑齿虎以来第一个灭绝的", "苏门答腊犀牛现在危急濒危，自从90年代初，每十年损失50％", "一系列的问题导致草原西貒处于危险之中，狩猎则是其中最重要的威胁", "这种类似斑马/长颈鹿的物种受到栖息地丧失和偷猎的威胁", "爪哇懒猴有着硕大的眼睛，就像其他的狐猴一样，它已被人类过渡剥削", "这种极度濒危的羚羊就在此时慢慢灭绝，并且将是现代史中非洲<span>第一大哺乳动物的消亡</span>", "生存面积小于220平方公里，这种矮壮的动物在非洲灵长类动物中列为<span>最高优先级</span>"],
  animalCopyTwo: ["Its highly-prized casque is unique in that it is almost completely solid and <span>rich in ivory</span> &ndash; leading to excessive hunting in recent years which is set to increase, with China the largest consumer of the casque. ", "Vaquitas are known to die in gillnets set for sharks, rays, mackerels and chano, as well as in <span>illegal and occasionally permitted</span> gillnet sets for an endangered <i>fish called Totoaba.</i> ", "Extensive programmes have had fair success in reversing the trend <span>caused primarily by habitat loss</span> but also logging, mining, poaching and animal trade.", "Deforestation in the name of agricultural development, humans settling in the frog’s range, logging, and planting as well as spraying for crops have all had a combined effect.", "Illegal <span>deforestation</span> and <span>forest fires</span> have a major impact, and encroachment from humans for various reasons is a consistent problem.", "Kemp’s Ridley nests are unfortunately easy for both direct <span>predators and humans to find</span>, making growth of the species sporadic at best.", "Before this hunting almost saw off the species, <span>climate change</span> in its previous range dramatically affected numbers, when the range Sahara dried up.", "However, these forests have undergone consistent and intense degradation through burning, grazing, human settlement and tourism development meaning forestry and beach loss have cost the Iguana dearly.", "This seahorse rather, resides in such a limited range that events occurring to these estuaries would be catastrophic for the seahorse. ", "But this species finds itself vulnerable from the <span>loss of habitat</span> to allow space for livestock and hunting for food.", "However, the lack of residents on the island unfortunately doesn’t stop visitors and plans to develop tourism on the island causes problems for the Sloth&rsquo;s habitat. ", "The lack of defences meant that when humans arrived in the range 700 years ago, it was <span>hunted</span> to intensely small numbers followed by further decreases when <span>pest control predators</span> for other species were introduced in the late 1800s.", "It hunts using its spiky tongue to find and digest worms, but is itself on the receiving end of <span>hunting, by humans for food</span>. It has also suffered from habitat loss in ranges now densely populated by locals. ", "Climate change and pollution from events such as <span>oil spills</span> has had an effect, but depletion of eggs via over-collection and intense fishing in the area has also impacted their status.", "This aspect puts the fly under threat as climate change can affect the already <span>poorly managed brooks</span> very easily, and expanding tourism increases the threat.", "Hunting and deforestation impact to varying degrees depending on the range, with <span>forest fires, developments and logging</span> all contributing to lost habitat.", "This fish coasts into shallow water which increases the risk of being caught by fisherman, but its <span>habitat has also declined</span> rapidly over the past 25 years.", "Consistent hunting over the past 30 years has caused significant decline while predation from wolves in the range adds to the problems faced.", "Located mainly in the Maluku Islands, the lowland areas of forest where the Butterfly resides has been greatly reduced by logging. The deforestation continues today within commercial context.", "With a variety of questionable purposes such as water <span>containers, ornaments and protective religious symbols</span>, their eggs are intensely exploited.", "<span>Human numbers in the Panda’s range</span> doubled towards the end of the last Century with previous habitat being turned into housing, farmland and other developments.", "Much of the <span>range is uncontrolled</span>, allowing illegal logging to continue, and in Sumatra – its stronghold range – it suffers similar issues to other Sumatra-based species from consistent, relentless <span>loss of forestry</span>.", "Despite in theory providing protection, national parks are away from governmental areas meaning that encroaching within the range from local peoples is unmanaged.", "<span>The Lynx’s story is tragic</span>. Rabbits declined dramatically, taking away the most important food storage – <span>Myxomotosis</span> spread far and wide through France and Australia, introduced in 1952 by a French gardener attempting to control pests.", "Rhinos’ body parts sell for various applications but a horn is <span>worth around &euro;27,000</span>, a major prize for poaching with uses including fabled poison protection.", "In Argentina deforestation has soared with <span>33% lost in just 15 years</span>, having a huge impact on Peccary who disappear without more than 87% of cover is left.", "<span>Logging and human settlement</span> within the previous range has impacted a steady decline since the mid 90s.", "Easily captured through its slow movement, it is captured and used under the mythical pretence that it has <span>healing or magical properties</span>.", 'Predation, resource competition, poaching and diseases <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/Rinderpest"><span></span>Rinderpest</a> and Tuberculosis continue to decline numbers.', "Human development within the range as well as general habitat loss mixed with illegal hunting has meant declining numbers for many decades."],
  animalCopyThree: ["Logging and agricultural conversion is contributing to the ominous pressure of hunting, and restoration is complicated further by the hornbill&rsquo;s <span>slow reproductive cycle</span>.", "It is believed that about 30 vaquitas are <br/>lost to these threats each year.", "De-forestation limits purported success of re-introduction initiatives. Just <span>8% of original forest</span> habitat size remains, resulting in behavioural effects such as in-breeding.", 'Only one <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/Liophis"><span></span>Snake predator</a> is unaffected by its toxin and terrible taste, but this hasn&rsquo;t deterred international trade, though sparse', "The species is low on the food chain with various predators adding to issues, as well as it being <span>hunted for eggs and body parts</span> which are used for items such as drums.", "Racoons, Skunks and Coyotes and a portfolio of sea and land-based species find the nests easy as easy prey. ", "Since European settlement within the Oryx&rsquo;s range, numbers have only declined further.", "Their small frame signals <span>easy prey</span> for beasts such as Black Rats and feral Cats, who also utilise Iguana eggs.", "<span>Floods occur</span> within some of the 3 estuaries – the Knysna, Swatvlei and Keurbooms – and mis-management continues these kind of occurrences could lead to <span>total extinction</span>.", "The armadillo was the mascot of the <span>2014 World Cup in Brazil</span>, yet only 3% of its range lies within protected areas.", "This sloth has become something of a <span>flagship species</span>, resulting in interested humans visiting the island to capture them <span>for captivity</span>.", "Looking extinction in the eyes, the Kakapo is a rare recent success story and numbers now continue to <span>grow slowly</span> through an extensive recovery program.", "A further development in the form of a <span>nickel mine</span> is being planned in an area with a major population of the Echidna.", 'One <a class="offsite" target="_blank" href="http://en.wikipedia.org/wiki/MV_Treasure_oil_spill#Effects_of_the_spill"><span></span>oil spill in June 2000</a> caused a wipeout of 40% of the entire species. If that proportion of loss were to happen to humans today, it would equate to 2.9 billion people.', "Water pollution and replacement by concrete have a huge impact on the fly’s habitat, while recent dry summers have at times dried out the brooks completely.", "Hunting is actually illegal in all of the Bear’s range but unfortunately as is so often the case uncontrolled, where some areas have <span>seen populations halve</span> in over two decades.", "The quality of conditions of habitat which remains – especially <span>coral reefs</span> – is also declining, which Parrotfish use for food and shelter.", "The Chinese range of camels is being mined along with other development work, while Mongolia <span>will lose 84%</span> of its current population by 2033.", "Mosquitos in the area have also posed a problem indirectly – as they are fought off <span>by insecticides</span> which also affect this beautiful Birdwing.", "Direct hunting for food, sport, feather usage for leather and exhaustion through the chase all lead to a very grim future, while the usual case of habitat loss causes further issues.", "Human hunting is invariably accidental, though in places the fur is <span>used for caps and other apparel</span>, whilst inbreeding depression adds another threat.", "Hunting pressure has increased by the decline of other hunted species within the range still left, though is currently a secondary threat.", "When hunted, its fur is used for trade and the meat being used for food.", "Little did they know the disastrous effect this would have on such a tremendous species.", "Sumatra also has <span>heavy deforestation</span> occurring, but other aspects such as in-breeding depression look to have an even heavier price.", "Rounding off these causes for concern is a <span>mysterious disease</span> which has troubled this species for decades.", 'Complete protection in the Congo and the initiative <a class="offsite" target="_blank" href="http://www.okapiconservation.org"><span></span>Okapi Conservation Project</a> symbolise the very real threat this species faces.', "Also kept as an exotic pet, humans have also encroached upon the range and the species looks extinction in the eye.", "A sanctuary has recently been put in place with protection from outside influences and supplies a glimmer of light for Hirola&rsquo;s future.", "The final 30th pieces is represented by a number of <span>just 3,000 Drills</span> believed to be left, with a highest estimate of 8,000."]
};

module.exports = data;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Moudi on 2017/2/25.
 */

//载入css
__webpack_require__(1);
var data = __webpack_require__(0);

var Pieces = function () {
  function Pieces(id) {
    _classCallCheck(this, Pieces);

    this.$e = $('#' + id);
    this.nameArr = data.animalList;
    this.n = 0;
    this.$startBtn = $('#start');
    this.timer = null;
    this.init();
  }

  _createClass(Pieces, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._resize();
      this._initEvent();
      window.onload = function () {
        // this._preloaderSeq();
        _this._dev();
      };
    }
  }, {
    key: '_dev',
    value: function _dev() {
      $(document.body).removeClass('preloader').addClass('title');
      setTimeout(function () {
        $(document.body).addClass('show-title');
      }, 2000);
    }
  }, {
    key: '_initEvent',
    value: function _initEvent() {
      var _this2 = this;

      window.onresize = this._resize.bind(this);
      this._setStateX();
      this._setState_X();
      this._setShimmer();
      this.$startBtn.click(function () {
        $('.intro-content').fadeOut(300, function () {
          $(document.body).removeClass('show-title');
        });
        $(document.body).removeClass('title');
        $(document.body).addClass(_this2.nameArr[_this2.n]);
        $('#animal-name').text(data.translatedAnimalNames[_this2.n]);
        $('.prev .popout').text(data.translatedAnimalNames[_this2.nameArr.length - 1]);
        $('.next .popout').text(data.translatedAnimalNames[_this2.n + 1]);
        setTimeout(function () {
          $(document.body).removeClass('preloader-layer');
          $(document.body).addClass('animation-lock');
        }, 1800);
        $('.next').on('click', function () {
          _this2.next();
        });
        $('.prev').on('click', function () {
          _this2.prev();
        });
      });
      $('.help').click(function () {
        $(document.body).removeClass('animation-lock');
        _this2.$e.addClass('no-delay');
        $('#scientific-name').text(data.animalScientificName[_this2.n]);
        $('#range').text(data.translatedAnimalRange[_this2.n]);
        $('.why-info').eq(0).html(data.translatedAnimalCopyOne[_this2.n]);
        $('.why-info').eq(1).html(data.animalCopyTwo[_this2.n]);
        $('.why-info').eq(2).html(data.animalCopyThree[_this2.n]);
        $(document.body).addClass('smash');
        setTimeout(function () {
          $('.content-wrapper').addClass('show');
        }, 1000);
      });
      $('.direct-stats').click(function () {
        $(document.body).removeClass('animation-lock');
        _this2.$e.addClass('no-delay');
        $('#scientific-name').text(data.animalScientificName[_this2.n]);
        $('#range').text(data.translatedAnimalRange[_this2.n]);
        $('.why-info').eq(0).html(data.translatedAnimalCopyOne[_this2.n]);
        $('.why-info').eq(1).html(data.animalCopyTwo[_this2.n]);
        $('.why-info').eq(2).html(data.animalCopyThree[_this2.n]);
        $(document.body).addClass('smash');
        setTimeout(function () {
          $('.content-wrapper').addClass('show');
        }, 1000);
      });
      $('.content-info .close').click(function () {
        _this2.$e.removeClass('no-delay');
        setTimeout(function () {
          $('.content-wrapper').removeClass('show');
          $(document.body).removeClass('smash');
          setTimeout(function () {
            $(document.body).addClass('animation-lock');
          }, 1700);
        }, 100);
      });
      $('.main-nav .nav-btn').eq(2).click(function () {
        if (!!$('#audio')[0].muted) {
          $('#audio')[0].muted = false;
          $('.main-nav .nav-btn').eq(2).parent().removeClass('muted');
        } else {
          $('#audio')[0].muted = true;
          $('.main-nav .nav-btn').eq(2).parent().addClass('muted');
        }
      });
      $('.main-nav .nav-btn').eq(1).click(function () {
        if (_this2.timer) {
          $('.main-nav .nav-btn').eq(1).removeClass('stop');
          _this2.autoPlay(false);
        } else {
          $('.main-nav .nav-btn').eq(1).addClass('stop');
          _this2.autoPlay(true);
        }
      });
      $('#all-animals-btn').click(function () {
        $(document.body).removeClass('animation-lock');
        $(document.body).addClass('all-animals');
        $('.hover-detector').removeClass('inactive');
        $('.animal-nav-content').removeClass('inactive');
        setTimeout(function () {
          $('.hover-detector').addClass('active');
          $('.animal-nav-content').addClass('active');
        }, 1200);
        $('.main-nav > .close').addClass('active');
      });
      $('.main-nav > .close').click(function () {
        $('.hover-detector').removeClass('active').addClass('inactive');
        $('.animal-nav-content').removeClass('active').addClass('inactive');
        $('.main-nav > .close').removeClass('active');
        $(document.body).removeClass('all-animals');
        setTimeout(function () {
          $(document.body).addClass('animation-lock');
        }, 1500);
      });
      this._linkEvent();
    }
  }, {
    key: '_linkEvent',
    value: function _linkEvent() {
      $('.overlay .close').click(function () {
        $('.overlay > div').hide(0).removeClass('active');
        $('.overlay').removeClass('active');
      });
      $('.link .about').click(function () {
        $('.overlay').addClass('active');
        $('.overlay .about').show(0).addClass('active');
      });
      $('.link .how').click(function () {
        $('.overlay').addClass('active');
        $('.overlay .how').show(0).addClass('active');
      });
      $('.link .sources').click(function () {
        $('.overlay').addClass('active');
        $('.overlay .sources').show(0).addClass('active');
      });
      $('.link .share').click(function () {
        $('.overlay').addClass('active');
        $('.overlay .shring-goodies').show(0).addClass('active');
      });
      $('.animal-info .wallpaper').click(function () {
        $('.overlay').addClass('active');
        $('.overlay .download').show(0).addClass('active');
      });
    }
  }, {
    key: 'autoPlay',
    value: function autoPlay(opt) {
      var _this3 = this;

      if (opt) {
        this.timer = setInterval(function () {
          _this3.next();
        }, 4500);
      } else {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: 'next',
    value: function next() {
      var _this4 = this;

      $(document.body).removeClass('animation-lock');
      this.n++;
      this.n >= this.nameArr.length && (this.n = 0);
      $('.prev .popout').text(data.translatedAnimalNames[this.n - 1 < 0 ? data.translatedAnimalNames.length - 1 : this.n - 1]);
      $('.next .popout').text(data.translatedAnimalNames[this.n + 1 >= data.translatedAnimalNames.length ? 0 : this.n + 1]);
      $(document.body).removeClass(this.nameArr[this.n - 1 < 0 ? this.nameArr.length - 1 : this.n - 1]);
      $('.animal-info').addClass('text-change');
      setTimeout(function () {
        $('.pieces-no').text(_this4.n + 1);
        $('#animal-name').text(data.translatedAnimalNames[_this4.n]);
        $('.animal-info').removeClass('text-change');
      }, 300);
      $(document.body).addClass(this.nameArr[this.n]);
      setTimeout(function () {
        $(document.body).addClass('animation-lock');
      }, 2000);
    }
  }, {
    key: 'prev',
    value: function prev() {
      var _this5 = this;

      $(document.body).removeClass('animation-lock');
      this.n--;
      this.n < 0 && (this.n = this.nameArr.length - 1);
      $('.prev .popout').text(data.translatedAnimalNames[this.n - 1 < 0 ? data.translatedAnimalNames.length - 1 : this.n - 1]);
      $('.next .popout').text(data.translatedAnimalNames[this.n + 1 >= data.translatedAnimalNames.length ? 0 : this.n + 1]);
      $(document.body).removeClass(this.nameArr[this.n + 1 >= this.nameArr.length ? 0 : this.n + 1]);
      $('.animal-info').addClass('text-change');
      setTimeout(function () {
        $('.pieces-no').text(_this5.n + 1);
        $('#animal-name').text(data.translatedAnimalNames[_this5.n]);
        $('.animal-info').removeClass('text-change');
      }, 300);
      $(document.body).addClass(this.nameArr[this.n]);
      setTimeout(function () {
        $(document.body).addClass('animation-lock');
      }, 2000);
    }
  }, {
    key: '_resize',
    value: function _resize() {
      var w = $(window).innerWidth() * .9;
      var h = w * (2 / 3);
      this.$e.width(w);
      this.$e.height(h);
    }
  }, {
    key: '_preloaderSeq',
    value: function _preloaderSeq() {
      var _this6 = this;

      var b = $(document.body);
      setTimeout(function () {
        b.addClass('ready').removeClass('preloader');
        $('.loading-progress').addClass('active');
        _this6._introSeq();
        setTimeout(function () {
          b.addClass('preAni');
          setTimeout(function () {
            b.removeClass('preAni');
            setTimeout(function () {
              b.removeClass('ready').addClass('title');
              setTimeout(function () {
                b.addClass('show-title');
              }, 2000);
            }, 2300);
          }, 10000);
        }, 4500);
      }, 3000);
    }
  }, {
    key: '_introSeq',
    value: function _introSeq() {
      var $ps = $('.loading-intro').find('p');
      $($ps[0]).addClass('show');
      setTimeout(function () {
        $($ps[0]).removeClass('show');
        $($ps[1]).addClass('show');
        setTimeout(function () {
          $($ps[1]).removeClass('show');
          $($ps[2]).addClass('show');
          setTimeout(function () {
            $($ps[2]).removeClass('show');
            $($ps[3]).addClass('show');
            setTimeout(function () {
              $($ps[3]).removeClass('show');
            }, 4000);
          }, 4000);
        }, 4000);
      }, 4000);
    }
  }, {
    key: '_setStateX',
    value: function _setStateX() {
      var b = $(document.body);
      setInterval(function () {
        b.removeClass("state3");
        setTimeout(function () {
          b.addClass("state1");
        }, 1000);
        setTimeout(function () {
          b.removeClass("state1").addClass("state2");
        }, 2500);
        setTimeout(function () {
          b.removeClass("state2").addClass("state3");
        }, 3500);
      }, 5000);
    }
  }, {
    key: '_setState_X',
    value: function _setState_X() {
      setInterval(function () {
        var b = $(document.body);
        setTimeout(function () {
          b.addClass("state-1");
        }, 1000);
        setTimeout(function () {
          b.removeClass("state-1");
        }, 1500);
        setTimeout(function () {
          b.addClass("state-1");
        }, 1900);
        setTimeout(function () {
          b.removeClass("state-1");
        }, 2500);
      }, 3000);
    }
  }, {
    key: '_setShimmer',
    value: function _setShimmer() {
      var b = $(document.body);
      setInterval(function () {
        setTimeout(function () {
          b.addClass("shimmer");
        }, 2000);
        setTimeout(function () {
          b.removeClass("shimmer");
        }, 6700);
      }, 7000);
    }
  }]);

  return Pieces;
}();

document.addEventListener('DOMContentLoaded', function () {
  var ss = new Pieces('show-stage');
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map