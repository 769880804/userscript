/* -*-mode:JavaScript;coding:latin-1;-*- Time-stamp: "2006-07-13 23:18:49 ADT"
##### This is a Greasemonkey user script.
##### To use it, you need Greasemonkey first: http://greasemonkey.mozdev.org/
*/
// ==UserScript==
// @name          LiveJournal_Pervert_Navbar
// @namespace     http://interglacial.com/
// @description	  Replace dumb stuff in the LJ navbar with random Tristan Farnon quote
// @version       0.0.1
// @include       http://*.livejournal.com/*
// @author        sburke@cpan.org
// ==/UserScript==
/*
		      "LiveJournal_Pervert_Navbar"

 The LiveJournal navbar can be useful at times, but one of its more
 inane features is that it tells you what you're looking at, as if
 this had previously been a deep mystery.  This GM extension replaces
 LJ's glimpses of the obvious with quotes from Tristan Farnon's
 brilliant "Leisuretown" site.

*/

if (     // Basic sanity
 document && document.documentElement.tagName == "HTML"
 && document.contentType == "text/html"
 && document.body
) { init_it(); }

var quitting_time, farnonry, timer_id;

function init_it () {
  quitting_time = (new Date()).getTime() + 20000; // giving up after 20 seconds
  timer_id = window.setInterval( try_it, 500 );   // poll every half second
  return;
}

function cancel_it () {
  window.clearInterval( timer_id );
  return;
}

function try_it () {
  var it = document.getElementById("lj_controlstrip_statustext");
  if(it)			       { cancel_it(); do_it(it); return; }
  if( ( new Date() ).getTime() >= quitting_time ) { cancel_it(); return; }
  return;
}

function random_el (ary) {
  return ary[ Math.floor( ary.length * Math.random() ) ];
}

function nix_all_children (parent) {
  var c;
  while(1) {
    c = parent.firstChild;
    if(!c) break;
    parent.removeChild(c);
  }
  return parent;
}

function do_it (it) {
  nix_all_children( it );
  it.appendChild(
		 document.createTextNode(
					 random_el(
						   farnonry
						   )
					 )
		 );
  it.setAttribute( 'title', "Long live Leisuretown!" );
  nologo();
  return;
}

function nologo () {
  // We wouldn't want anyone thinking that these Farnon messages are
  //  coming from LJ, blessed LJ!
  var logo = document.getElementById("lj_controlstrip_poweredby");  
  if(logo && logo.parentNode)  logo.parentNode.removeChild(logo);
  return;
}

farnonry =
[
"!!! MAKE MONEY FAST !!! OH GOD HELP I'M DROWING IN THE TOILET",
"\"ADOBE\" IS ALMOST EBOLA SPELLED BACKWARDS",
"\"BINDIST\" CAN ALSO BE PRONOUNCED \"BEEN DISSED\" WHICH MEANS \"BEEN DISRESPECTED\"",
"\"FAGGOT\" CAN ALSO MEAN A TIGHTLY-WRAPPED BUNDLE OF DICKS!!! I MEAN STICKS",
"\"PAYPAL\" SOUNDS LIKE A GAY PORNO DVD TO ME",
"$$$$ MAKE MONEY FAST $$$$ OH GOD HELP I'M DROWING IN THE TOILET",
"$$$$ YOU CAN DRAG ME TO THE TRASH CAN WITHOUT SO MUCH AS A GLANCE $$$$",
"*** FREE chocolate ice cream cones delivered to your ex-girlfriend's lap ***",
"***FREE*** EMAIL!!!!! IT CANNOT BE!!!! CLICKING HERE EVEN THOUGH IT'S A TRAP",
"**HOT** TOSHIBA NOTEBOOKS NOW ON SALE IN SOME IDIOT'S GARAGE",
"**SOB** MY TAMAGOCHI DIED!!! trash can",
"**SOB** THE POOR OVERWORKED CHILDREN OF OTHER NATIONS",
"*BONK* OW MY HEAD WITH A BEER BOTTLE",
"*GAK* THE SWEATSHIRT HOOD PULLED DOWN OVER MY HEAD AND *GLK* THE STRINGS",
"*POOF* MAGICALLY I TRANSFORM MYSELF INTO SOMETHING AMUSING",
"*SIGH* PLEASE STOP FOLLOWING ME DOWN THE HALLWAY ASKING QUESTIONS YOU STUPID TOOL",
"*SPLUTTER* *CHOKE* ALL OVER MY NEW DRESS AND SHOES AND MEMBERS-ONLY JACKET",
"...:::;;;===((({{{[[[<<< I SAID KILL YOURSELF >>>]]]}}})))===;;;:::...",
".:: THESE COLONS AND PERIODS SHOWCASE MY DESIGN SKILLS ::.",
"[an error occurred while processing this noisy, disruptive ad]",
"{[[~{{A ~[[A{~[ ???~''?''?~'''??'' DUH NEED FRASH 5 PRUG-IN FOR VIEWING [A[A~[~{[A~",
"A SPILLED BONG IS JUST A MOPPORTUNITY",
"A VERY SPECIAL TWO-HOUR SEASON PREMIERE !!!! noose neck snap etc",
"A&E - 9pm - TRAPPED IN A LAND WITH NO PORN OR TV",
"A&E 7:00pm: Bill Kurtis puts the \"gay\" in \"Investigaytive Reports\" (Cc, Stereo)",
"About Us!  |  Clients  |  Portfolio  |  Privacy Policy  |  Blowjobs  |  Suicide  |  Heil Hitler",
"ADD ME TO THE LIST!!!!!! OF PEOPLE WHO HAVE MADE THIS JOKE",
"Advertisement: DEATH DEATH DEATH DEATH DEATH DEATH DEATH",
"Advertisement: Sprint Introduces Pre-Paid Blowjob Cards",
"AND THEN YOU WOKE UP AND IT WAS ALL A DREAM!!! THE END",
"ANY BLOOM COUNTY FANS??? OOP!! ACK!!! killing myself",
"ANY GALS HERE INTO MUSIC??? BECAUSE I'M A TWELVE-INCH SINGLE",
"Apply now for INSTANT CREDIT and chop your head off.",
"ARE YOU JERKING OFF AS A DEFENSE MECHANISM?",
"Are you overweight or in debt or depressed or just freaked out constantly?",
"ARE YOU REALLY GAY BECAUSE OF A FREAK TRANSPORTER ACCIDENT??? LIAR ",
"ARE YOU THERE GOD??? I NEED A SNICKERS",
"Are you tired of living in fear and constantly changing your phone number?",
"Ask Jeeves: CAN I GET AIDS FROM TAKING A SHIT ????",
"ASK ME ABOUT THE EXTRA-MARITAL AFFAIR I HAD WHERE I COULDN'T EVEN GET IT UP",
"AT THE VERY LEAST I HAVE MY BLOG TO FALL BACK ON",
"AT THIS TIME I WOULD LIKE TO APOLOGIZE FOR THE URINE IN THE CAFETERIA",
"BANANARAMA GOT A LOT BETTER AFTER THEY DUMPED BIG-NOSE",
"BANNER ADS: GUARANTEED TO KEEP THOSE GOD DAMN LITERATURE/ART SNOBS FAR AWAY",
"BINDIST CAN ALSO BE PRONOUNCED \"BEEN DISSED\" WHICH MEANS \"BEEN DISRESPECTED\"",
"BOSTON WAGES WAR AGAINST CANCER: BOSTON 0, CANCER 80,000,000,000,000",
"BOTH MY PANTS POCKETS ARE FLOPPED OUT!!! KISS THE BUNNY ON THE NOSE??",
"BREAK the nicotine habit and smash a car window and steal the CD player!",
"BUG #39439: MY DONG IS CAUGHT IN A WINE BOTTLE!!! NOT A JOKE",
"BY PLACING M&M'S INTO A PAPER CUP I CAN PRACTICALLY DRINK THEM",
"CAN SOMEONE SELL ME A BOOK ON HOW TO GET MY WEBSITE CACHED IN GOOGLE??",
"CAN WE ALL DO A BUSBY BERKELEY NUMBER WHERE WE LINE UP AND SUCK DICK",
"CAN'T REALLY SAY WHY I DON'T WANT YOU TO BE MY GIRLFRIEND (SHOVING YOU OUT THE DOOR)",
"CATCH THE CYBERWAVE WITH THESE OTHER HOT BLOGS AND HYPERTEXT HOTLINKS....",
"Caution: Gothic Vampire Zone!!!!><BR><IMG SRC=\"BAT/JPG\")><",
"CBS 8:00pm. Will There Ever Be A Rainbow? (Cc, Stereo)",
"CBS 8:00pm: Murder, She Mentioned (Cc, Stereo)",
"CELEBRATING THE FIVE-YEAR ANNIVERSARY OF THIS COMPANY'S INCOMPETENCESHIP",
"CHASING YOU AROUND THE HOUSE TO A REPETITIVE DANNY ELFMAN SOUNDTRACK",
"CHEERS to separate dorm rooms for boys and girls!!! JEERS to locks/deadbolts",
"CHILD MOLESTERS AND PEDOPHILES ON THE INTERNET ??? I SIMPLY DON'T BELIEVE IT",
"CHOCOLATE AND SHOPPING AND BATHING SUITS AND GETTING FIRED",
"CLEAN UP ON AISLE 2-13",
"CLICK HERE FOR TEN MILLION POP-UP WINDOWS ABOUT FORD TRUCKS AND THE X-10",
"Click here for your free Pepsi One Infotainment calendar! *BLAM* dead forever",
"Click here for your FREE trial issue of Yahoo Internet Life! CAUTION: 100% ANAL SEX",
"Click here to help build another Starbucks, Noah's Bagels, Jamba Juice or Old Navy!",
"CLICK HERE TO JOIN THE ELITE UNDERGROUND MONEY SPENDING WEBRING",
"CLICK HERE TO LEARN MORE ABOUT TEENAGE GIRLS AND LAXATIVE ABUSE",
"Click here to stop terrorism around the globe once and for all.",
"Click here to support mandatory prayer in public schools!",
"CLICK TO LEARN MORE ABOUT ME!!!IMG SRC=\"GAY.JPG><JAVA=\"RECTANGLE\">",
"Collect all one million billion plastic iMacs!",
"COLUMBINE? MORE LIKE COLUMBONG!!! hglbhlgbhglbhglbhth * COUGH * SPLUTTER *",
"COME WITH ME ON A TRANCELADELIC EXCURSIONAL ODYSSEY OF ELECTRONICA !!!!!! ",
"COULD THE PERSON IN THE NEXT STALL PLEASE LET GO OF MY PANT LEG",
"DEAR GOD PLEASE DON'T FIRE ME UNTIL I'VE SAVED SOME MONEY",
"DEAR NAPSTER: KEEP ON REACHING FOR THAT BIG FAT INVISIBLE DICK IN THE SKY",
"DEAR PENTHOUSE!!! CAN WE STOP DRESSING THEM UP AS CLOWNS ???",
"DESIGNERS: DOES YOUR WEB PAGE LOOK ENOUGH LIKE MTV???? *HURK* DOG SHIT",
"DID ANYONE GET MY FLYER ABOUT THE FREE TAROT READINGS IN MY CUBE DURING LUNCH",
"DID YOU HEAR THE ONE ABOUT THE INSOMNIAC AGNOSTIC DYSLEXIC ?? HE WASN'T FUNNY",
"DISAPPOINTED BY THE RICH MILK CHOCOLATE BUT DELIGHTED BY THE NOUGAT",
"Discovery 8:00pm. \"Smart\" dicks which suck themselves and also each other (Cc, Stereo)",
"DO I NEED TO DRAW YOU A MAP TO THE PAYPAL DONATE BUTTON??",
"DO NOT CLICK THIS LINK UNTIL XMAS",
"DO YOU GALS LIKE EUROPEANS?? CAUSE I'VE GOT RUSSIAN HANDS AND ROMAN FINGERS",
"Do you have holes poked in you, rendering you useless to collectors?",
"DOES WAVING A FLAG IN YOUR FACE FOR THREE HOURS COUNT AS PATRIOTISM",
"DOES YOUR BOSS CALL PLAYING WITH HIS NUTS A \"REORG\" ?",
"Don't be a dick: if this site goes into basic, please type RUN at the \"]\" prompt.",
"DOWN WITH PANTS AND UP WITH SKIRTS",
"Download the newest, slowest, most non-functional version of Netscape Communicator NOW!",
"DRAGGING A STACK OF PORN ONTO A NETWORK PRINTER AND GOING HOME FOR THE WEEKEND",
"DRIVE YOUR WEB COUNTER BALLISTIC!!!!! 0000000000000002",
"DURRRRRRRRR THIS HOLOGRAM T-SHIRT PROVES I'M MICROSOFT CERTIFIED",
"Earn bonus miles! MILES AND MILES OF DICK UNFURLING LIKE A HOSE",
"EARN VALUABLE COLLEGE CREDIT HANGING UPSIDE DOWN IN A CONCENTRATION CAMP",
"Easy-Access Email! Wireless Webs! *GURK* HOSE DOWN MY PANTS",
"EIGHT SNICKERS LATER I HAVE DIARRHEA",
"ENROLL NOW: THE DICKLICKING FINISHING SCHOOL OF DUMBFUCK, COCKSUCKERSVILLE ",
"ETHNIC ALBANIANS???? MORE LIKE ETHNIC COMPLAINIANS",
"EVERYONE BE QUIET I HAVE SOMETHING TO SAY!!!!!! ",
"EXCITING OFFERS FROM SPRINT, AT&T, BANK OF AMERICA, PROCTOR & GAMBLE",
"EXCUSE ME LADY BUT THAT DOORKNOB OVER THERE NEEDS TO KNOW IF YOU THINK I'M CUTE",
"Experience the wonder of Jack in the Box",
"EXPOSED: THE SECRET CONFERENCES OF THE ONE-MAN BATHROOM STALL AT WORK BEATOFF SOCIETY",
"FAGGOT CAN ALSO MEAN A TIGHTLY-WRAPPED BUNDLE OF DICKS!!! I MEAN STICKS",
"FAMILY MATTERS FOLLOWED BY FULL HOUSE AND THEN A BONUS FAMILY MATTERS",
"FIRST I WILL CLONE MYSELF, THEN I WILL KILL MYSELF",
"First law of artificially intelligent robots: ONLY HARM MY EX-GIRLFRIENDS",
"FOLKS CAN I PUT REGULAR TOILET PAPER IN THE PLAIN PAPER COPIER OR NOT",
"FOLKS CAN WE PLEASE NEVER SPELL IT \"BOLOGNA\"",
"FOLKS I'M HAVING AN ASTHMA ATTACK: HURRRRFFFF HUHHHH glklth ",
"FOLKS I'VE BEEN FIRED FROM SIX COMPANIES FOR MY UFO BELIEFS",
"FOLKS MY PSYCHIC GIRLFRIEND DUMPED ME BEFORE I EVEN ASKED HER OUT",
"FOLKS, ONE OF MY FIVE CATS JUST KNOCKED THE BONG OVER",
"FOLKS: DOES VIVID VIDEO ACTUALLY EMPLOY MORE THAN ONE PORN STAR ????",
"FOLKS: I AM A ***PERSON*** WITH ***FEELINGS***",
"Food Network 11:35am. Diagnosis: Cinnamon Buns (Cc, Stereo)",
"FOR SHOW AND TELL THIS WEEK I HAVE CHOSEN TO COMMIT SUICIDE!! *BLAM* chalkboard",
"FOR THE LAST TIME: AN ELF IS WORTH MORE THAN AN ORC BUT *LESS* THAN A UNICORN",
"FOX 10:00pm. Fox Presents: When Commercials Attack (Cc, Stereo)",
"FREE PORN!! CLICK HERE!! WARNING: SAME SHIT YOU SAW THREE YEARS AGO",
"FUNNY DINOSAURS: THE COCKASAURUS NUTS!! THE PRICKASAURUS FACE!! THE DONG-A-LAPTICYL etc",
"Fwd> Re: should i stick dee-lite.gif in the /white or /colored dir",
"Fwd> Subject: WAS: RE: WAS: RE: WAS: RE: WAS: RE: WAS: RE: STOP STALKING ME",
"GALS: I JUST TOOK A DATE-RAPE DRUG AND I'LL BE OUTSIDE ASLEEP ON THE LAWN",
"GALS: THERE MAY BE ONLY 206 BONES IN YOUR BODY BUT I'M WILLING TO MAKE IT 207",
"GOSH DARN THESE TELEMARKETERS NEVER RETURNING MY CALLS",
"GOTTA HAVE A MC-D-L-T / IF YOU WANNA BE / WITH / ME",
"HANDS UP WHO LIKES ME OR THINKS I'M PRETTY OR CAN GIVE ME MONEY",
"HANDS UP WHO STOLE MY DATING RESUME FROM OUT OF THE PRINTER TRAY ??",
"HELP ME ACHIEVE DEATH BY WAY OF A PROSTITUTE OVERDOSE",
"Help save our oceans by removing the sea sponges soaking it all up!",
"Help starving banner ads in other nations receive clicks.",
"HELP STARVING CHILDREN MAKE CLOTHES AND HATS FROM CONSTRUCTION PAPER",
"HEY EVERYONE: LET'S HOP ABOARD THE BIG PORNOGRAPHY VAN TO MEXICO",
"HEY TEACHERS: STOP TRYING TO MAKE SCIENCE FUN",
"HEY: HOW DOES A CAT SUCK COCK???? WITH ITS *****MEOWTH*****",
"hglbhgl bhlhglb hlghpth I PUBLISH FICTION AND POLITICAL NON-FICTION blghlbh glbhl thpk",
"Hint: ASTERISKS REALLY **LEAP** OUT AND MAKE POTENTIAL CUSTOMERS GIVE A SHIT",
"HONEY CAN YOU PLEASE TURN AROUND AND NOT LOOK AT ME BEATING OFF??? THANX",
"HONK IF YOUR DAUGHTER IS FAILING HER CLASSES",
"HOW CAN THEY BE SWEET *****AND**** TART??? (ASKING JEEVES)",
"HOW DO DALEKS MASTURBATE WITH ALL THOSE KNOBS AND ETC???",
"HOW MANY MORE GNOCCI AL PESTO DUMPLINGS CAN I STUFF IN MY MOUTH !?!??! STAY TUNED",
"I ALSO HAVE A SERIOUS SIDE AND I'M TIRED OF NOT BEING TREATED MORE MATURELY",
"I AM PLAYING HOOKY FROM WORK AND I NEED TO KNOW WHAT I SHOULD BUY AT THE STORE",
"I AM SWEDISH AND DROWNING AND ASKING FOR HJALP!! JA JA IN DER TOILET",
"I BUILT A CONTENT PUBLISHING SYSTEM OUT OF TOILET PAPER! (COME LOOK)",
"I CALL THEM ONLINE CYBERTOONZ!!! UPDATED EACH MONDAY!!! wheze, choke ",
"I CAN OPEN A CAN OF PRINGLES USING JUST MY TEETH AND BOTH HANDS AND A CAN OPENER",
"I CAN'T SPEAK FOR EVERYONE BUT I LIKE TO CARRY MY DICE AROUND IN A POUCH",
"I CAN'T WAIT UNTIL 2086 WHEN THE MARS ROBOT COMES BACK WITH ROCKS!!!",
"I COULDN'T REPAIR YOUR BRAKES SO I JUST MADE YOUR HORN HONK LOUDER",
"I DO NOT NOW, NOR WILL I EVER HAVE A WEINER DUDE ATTITUDE",
"I DON'T LIKE LOTION CALLED \"KISS MY FACE\"",
"I GET CONFUSED BETWEEN THE CINGULAR WIRELESS LOGO AND BLOOD SPATTER",
"I GOT MY TIE CAUGHT IN THE COPIER AGAIN",
"I GUESS THERE'S NOTHING COOL ABOUT PUNCHING CHILDREN OR THE ELDERLY",
"I HAD AN ACCIDENT AND FILLED UP MY PANTS LIKE AN AIRBAG",
"I HAVE A SERIOUS PROBLEM WITH HOW YOU MAKE FUN OF ME",
"I HAVE CHARTS AND GRAPHS WHICH ILLUSTRATE HOW IMPORTANT I AM",
"I HAVE NO PEOPLE SKILLS WHATSOEVER",
"I HAVE SOME QUESTIONS ABOUT YOUR CODE - SUGGESTIONS REALLY, IN THE FORM OF DIRECT ORDERS",
"I HOPE YOU DON'T MIND I CLEANED YOUR KITCHEN AND FOLDED ALL YOUR CLOTHES",
"I HOPE YOU USE THE INFORMATION FOR GOOD AND NOT TO TELL MY BOSS",
"I LIKE MASTURBATING BECAUSE OF ALL THE CUDDLE TIME AFTERWARDS",
"I LIKE TO GET STONED AND TALK ABOUT THE COEN BROTHERS",
"I LIKE TO THINK MY RADIOACTIVE KITTY CAT HAS EIGHTEEN HALF-LIVES",
"I LOADED THE DOPE-SMOKING PIPE AND THEN WANDERED AWAY FROM IT LIKE AN IDIOT",
"I NAMED MY HAMSTER MORPHEUS !!!!!! THEN HE DIED AND I FLUSHED HIM",
"I ONLY SUCK DICK IN SELF DEFENSE AND AT THE BOOKSTORE",
"I PUT ASCII CATS AND CHOCOLATE-RELATED INSPIRATIONAL SNIPPETS IN MY SIG !!",
"I REFUSE TO BELIEVE THAT'S FRUIT ROLLED UP IN A TUBE",
"I REFUSE TO PAY THE PHONE BILL DUE TO THE FACT IT VIOLATES FREE SPEECH",
"I SAID: HANDS UP WHO WANTS TO HELP MAKE AN ASCII-ONLY VERSION OF EVERQUEST",
"I SEE YOU SCANNING GAY GROUPS AND GIVING OUT YOUR WORK NUMBER ON CHANNEL #FAGGOT",
"I SEE YOU TV-36!!!! static",
"I SHOULD MAIL THIS PAGE TO MY BOSS AND MY MOM AND ALL MY FRIENDS!!! WORD UP!!!",
"I SHOULD MAIL YOU A PLAIN ENVELOPE STUFFED WITH POSITIVE ATTITUDETHRAX",
"I SHOULD MAKE A FUNNY FAQ WITH ASCII ART ABOUT MY FAMILY AND MAIL IT TO MOM",
"I SHOULD SMOKE THIS DOPE JUST TO SEE WHAT HAPPENS",
"I SURE AM COZY UNDER THESE BLANKETS!!! OH GOD A SPIDER *BONK* OW JESUS I THINK ELLEN SHOULD GET ALZHEIMER'S AND \"COME OUT\" IN EVERY EPISODE",
"I THINK ELLEN SHOULD GET ALZHEIMER'S AND \"COME OUT\" IN EVERY EPISODE",
"I USE MY POWERS FOR GOOD AND ALSO TO REPRODUCE BUGS",
"I WILL SUE FOR THE RIGHT TO LICK YOUR DICK (FAXING YOU THE CONSTITUTION)",
"I WISH A CARTOONIST WOULD DRAW A STARBUCKS ON THE MOON!!! HILARIOUS!!(&*$",
"I WISH YOUR LITTLE FRIENDS WOULD STOP LOGGING IN HERE AND TRYING TO BE FUNNY",
"I WOULD LIKE TO CHOOSE STOP FROM THE BLOWJOB MENU",
"I WOULD LIKE TO REGISTER AS A WEB DEVELOPER AND ALSO A CHILD MOLESTER",
"I WOULD LIKE TO REPORT AN UNLICKED DICK IN THE NORTHWEST CORNER OF MY PANTS",
"I'D RATHER BE SAILING!!! *BONK* OW glub glub",
"IF I COULD REARRANGE THE ALPHABET I'D PUT U AND I TOGETHER!!! THEN I'D DUMP U",
"IF I LISTEN TO THE SAME BANANARAMA SONG TWO HUNDRED TIMES IN A ROW, I GET SICK OF IT",
"IF I SAID YOU HAD A BEAUTIFUL BODY WOULD YOU LIVE AROUND HERE OFTEN???? COME BACK",
"IF I WERE A TUFTE, I'D WANT THE LORAX TO SAVE ME (AND NOT GET CHOPPED DOWN BY POLLUTION) ",
"IF ONLY I COULD JUST LEAVE THIS PLACE AND NEVER COME BACK",
"IF THIS TEXT WERE IN A UNIQUE LAYER IT COULD FLOAT AROUND!!",
"IF YOU DON'T GIVE ME $10.00 I'LL JUST TELL EVERYONE YOU MOLESTED ME",
"IF YOU DON'T WORK FOR UPS YOU'RE NOT ENTITLED TO STAMP MY PACKAGE",
"IF YOU HEAR BEAUTIFUL MUSIC COMING FROM A TOILET IT'S PROBABLY A TRAP",
"IF YOU SMASH THE AIR CONDITIONER ALL THE GIRLS WILL EVENTUALLY TAKE THEIR SHIRTS OFF",
"IF YOU THROW OUT ALL THE G'S HIS NAME IS SNOOP DOY DO",
"IGNORING ME IS NOT THE SOLUTION",
"I'LL NAME MY SERVER \"DILBERT\" AND THEN GIRLS WILL LIKE ME",
"I'M A CHAR TO A STAR TO A POINTER TO THIS GUN TO RIGHT IN MY MOUTH AND GOODBYE",
"I'M A CHARCOAL BRIQUETTE!!! SQUIRT ME WITH FLUID AND LIGHT ME!!! *FOOMP* URF",
"I'M A LIMPWRITHTED JEDI MATHTER UTHING THE FORTH",
"I'M A SKILLED IMMIGRANT WITH A TIE AND A RESUME AND A DREAM",
"I'M AN ELECTRONIC MUSICIAN SCULPTING SYNTHESIZED SOUND SHAPES!! *GLK* suicide",
"I'M BEGINNING TO THINK THERE ARE NO GIRLS HERE AT ALL",
"I'M BRILLIANT!!! THE BALLS ATE MY BALLS PAGE!!! WE SHOULD TOTALLY DO IT!!!!",
"I'M GOING TO HOLD MY BREATH UNTIL YOU ADMIT YOU HAVE A PROBLEM",
"I'M GOING TO ROLL UP MY DIPLOMA INTO A TUBE AND SET IT ON FIRE AND BLAST OFF",
"I'M GOING TO VISUALLY INSPECT MY DOODLE FOR SIGNS OF VERBAL ABUSE",
"I'M GOING TO WRITE A BLACKADDER / MR. BEAN CROSSOVER WHICH TAKES PLACE ON GALLIFREY",
"I'M INTERCEPTING YOUR PACKETS AND DECODING YOUR SECRET GAYNESS SO GIVE ME MONEY",
"I'M NOT \"CONSTANTLY STONED\" - I TAKE TIME OUT TO ORDER POTSTICKERS",
"I'M SENSING A LITTLE JUDGEMENT FROM YOU PEOPLE",
"I'M STARTING TO THINK I WORE A TIE FOR NOTHING",
"I'M TIRED OF YOUR NORDSTROM SUITS AND THAT CARTON OF BANANA YOGURT EVERY DAY",
"I'M WEARING BIG SHOES AND CLOMPING AROUND TO A TECHNO CD!!! HOLD MY HAND",
"IN ANCIENT LANDS I MIGHT COUNT THE NUMBER OF TIMES I BEAT OFF LIKE SO: MCMDLVII",
"IN DEBT? Change your name and run away and hide forever.",
"IN ENGLAND THEY MIGHT REFER TO ME AS A COLOURFUL PAEDOPHILE",
"IN THE BLACK COMMUNITY, BEING \"DISSED\" MEANS BEING \"DISRESPECTED\" !!",
"INSPIRATIONAL FAITH-BASED MAGIC SHOW IN THE BREAKROOM AT 3:30!! PLEASE COME!!",
"INSTANT MESSAGE FROM JESUS CHRIST: YOU'RE FIRED",
"INSTANT MESSAGE: FUCK YOU",
"Instant Rap: DO THAT TRICK / WHERE YOU LICK MY DICK / etc / etc",
"INSTANT RHYMING DICTIONARY: FORK SPORK DORK BJORK",
"IS THERE SUCH A THING AS THE LESBIAN-ONLY WINDOW MANAGER ??",
"IS THIS AD ENOUGH OF AN IMMERSIVE EXPERIENCE FOR YOU DUMBSHITS",
"IS THIS SOME KIND OF CYBERFEMINIST WEBZINE???",
"IS THIS THE INTERNET?? HELLO TRYING TO FIGURE OUT MY LIFE",
"IT'S HARD FOR ME TO GRIP BOTH THE HANDLEBARS AND THE SHAMROCK SHAKE",
"IT'S NO COINCIDENCE THAT STONER RHYMES WITH LONER RHYMES WITH BONER",
"IT'S NOT ABOUT LICKING DICK IT'S ABOUT LICKING DICK UNDER OATH",
"JESUS CHRIST - JUST CLEAR THE BUFFER AND MOVE ON WITH YOUR LIFE",
"JOIN SALON TABLETALK AND RECEIVE A FREE TOTEBAG!! *BLAM* OH GOD *BLAM BLAM*",
"JUST KEEP CLICKING UNTIL YOUR HOUSE BURNS DOWN",
"KBHK 11:00am: Jerry Springer. Scheduled: people with problems. (Cc, Stereo)",
"KICKED OUT OF THE SILICON VALLEY LINUX USERS GROUP FOR MASTURBATING",
"Kids! Click here to learn more about decimals and fractions!",
"KIDS: GRAB YOUR MOM'S CREDIT CARD WHILE SHE'S ALSEEP AND CLICK HERE",
"KNOW WHAT I HAD FOR BREAKFAST THIS MORNING ???? PORN CATALOGS !!!",
"LA LA LA LA / LIVE FOR TODAY / LA LA LA LA / FAGGOTS ARE GAY",
"LA LA LA LA LA HOLDING MY HANDS OVER MY EARS NOT LISTENING",
"LADIES: CLICK HERE AND RECEIVE A FREE BOYFRIEND FOR ONE WEEK!!! THEN PLEASE LEAVE",
"Ladies: CLICK HERE to download free chocolate and coupons! ",
"LADIES: JOIN THE CUDDLE WUDDLE KITTY KLUB WEB RING TODAY",
"Learn more about frequent, painful urination.",
"LEAVING MY FRONT DOOR UNLOCKED IN CASE GIRLS COME OVER",
"LET'S FORM A RAP SUPER GROUP AND SING ABOUT EDUCATION AND MATH!!! READY GO",
"LET'S GO TO SEARS AND TRY THINGS ON BUT NOT BUY ANYTHING",
"LICK THE DICK AND WIN 20 DOLLARS!!!",
"LOOK AT MY WILTY LITTLE THINGAMADOODLE DANGLING IN THE SUMMER SUN",
"Make a cyberdifference in a child's life",
"MAKE SURE WHEN MOM OPENS THE CLOSET DOOR YOU REMAIN STILL LIKE E.T.",
"MAY I PLEASE COMMIT SEPPUKU AND BUKKAKE AT THE SAME TIME??? SPLURK STAB SPLORT",
"MAYBE YOU DON'T UNDERSTAND WHAT I MEAN BY \"SUCK THE DICK OR LOSE YOUR JOB\"",
"ME MACINTOSH PROGRAMMER, ME CRASHUM MEMORY HEAP MACSBUG",
"MENTAL NOTE: MORE DICK JOKES, LESS ARTSY-FARTSY EMOTIONAL BULLSHIT",
"m-must....... reach............. rape whistle....... .. . . . . . .",
"MOMS! Click here for a basket of cuddly kittens wearing American flags! ",
"MY CAPS LOCK KEY IS BROKEN BUT I CAN STILL TYPE PLEASE DONATE",
"MY CD PLAYER IS SQUEAKING AND SQUAWKING LIKE MY FUCKING GIRLFRIEND",
"MY DAD POOFED INTO A BAT AND FLAPPED INTO MY ROOM AND PUT HIS WING DOWN MY PANTS",
"MY DJ NAME IS M.C. DONALDS AND I SPIN VINYL ABOUT BURGERS AND FRIES AND SHAKES",
"MY DOG SAYS I'M NOT ALLOWED TO TALK TO YOU (ONLINE OR OTHERWISE)",
"MY MOM WAS ALL \"YOU'RE NOT TAKING THE CAR\" AND I WAS LIKE \"FUCK YOU HITLER\"",
"MY PAC MAN FEVER IS NOW OFFICIALLY FULL BLOWN PAC MAN AIDS",
"MY PROGRAM WON'T COMPILE AND ALSO I WENT BLIND LOOKING AT THE ECLIPSE",
"MY RED SPACESHIP SMASHED INTO A BLUE PLANET AND OUR CREW WAS MAROONED!! GET IT???",
"MY TROUSERS ARE WHAT WE HERE IN THE SILICON VALLEY LIKE TO CALL \"CONTENT RICH\"",
"MY WEB-BASED SOAP OPERA WAS A WEB-BASED DISASTER",
"NBC 8pm: The Drunk Guy Who Never Shuts Up Whose Name Is Dad (Cc, Stereo)",
"NBC PRESENTS AN ALL-STAR COMEDY SALUTE TO *CLICK* BLAM BLAM BLAM BLAM",
"Netcenter: Netscape ships Communicator 6.0.3.5a with support for rendering HTML",
"NICKELODEON 9:00am: Spaceship Boring blasts off to Planet Snooze (Cc, Stereo)",
"NOBODY CAME TO MY POETRY TENT AT BURNING MAN",
"NOTHING BEATS AN OFFICE COMEDIAN LIKE THIS TIRE IRON!! BONK *BANK* CLANK SHUT UP",
"OFF YOU GO / TO SPEND YOUR DOUGH / WITHOUT YOUR COMMON SENSE / YOU'RE A DOUGH-NUT",
"OKAY EVERYONE RESIZE YOUR WINDOWS WIDE BECAUSE HERE COMES A PBS PLEDGE BREAK",
"OKAY I HAVE TO ASK MY MANAGER FOR HELP WITH THE BADGE-SWIPER THING",
"OKAY SLIPPING MY BUSINESS CARD UNDER THE STALL DOOR SO YOU CAN GET TO KNOW ME",
"OKAY VERY FUNNY: WHO WROTE \"SEX BOAT\" ON MY CAR WITH SOAP THAT DOESN'T COME OFF",
"OKAY WHO FILLED THE TOILET BOWL ABOVE AND BEYOND THE WATERLINE",
"OKAY, WHO STOLE THE DIRTY MAGAZINES OUT FROM UNDER MY BED ",
"OKAY: YOU PULL THE FIRE ALARM AND I'LL THROW THE BEER BOTTLE",
"ON MY SHITTY TV THE PEOPLE'S LAWYER APPEARS TO HAVE A PEOPLE'S BONER",
"ONLINE GAMBLING - CLICK HERE TO SUCK OUR DICKS FOREVER - VISA/MC/AMEX",
"ONLY GOD AND THE HUBBLE TELESCOPE KNOW ABOUT YOUR PORNOGRAPHY COLLECTION",
"ONLY NICE, CUTE GIRLS UNDER 21 SHOULD CLICK HERE",
"ONLY ONE WORD DESCRIBES E-COMMERCE: CYBER CALI FRAGIL ISTIC EXPIALI DOCIOUS !!!!!!",
"ONLY THE HIPPEST MEMBERS OF GENERATION Y NEED CLICK HERE",
"ONLY YOU CAN SAVE THIS SITE FROM FINANCIAL RUIN OR CRUEL JOKES ON FUCKED COMPANY",
"OPTIMIZED AS IN OPTIMIZTIC.",
"OUT COMES THE YELLOW PAGES AND STRAIGHT TO THE ESCORT SECTION",
"OVERWEIGHT MOMS: CLICK HERE FOR AN INCREDIBLE DIET PROGRAM INVOLVING ANAL SEX",
"PARDON MY FRENCH BUT CAN I PLEASE HAVE A HANDJOB",
"PBS (9:30pm) - The Day The Universe Went Off The Air Because Nobody Wanted Tote Bags",
"PBS 9:00pm: NOVA. Anne Frank Meets the Daleks (Cc, Stereo)",
"PINK HEARTS - YELLOW MOONS - ORANGE STARS - GREEN CLOVERS - PURPLE BRUISES",
"PLEASE CALL MY BBS",
"PLEASE DON'T TELL ANYONE ABOUT MY BONER UNDER THE TABLE AT THANKSGIVING",
"PLEASE HELP THIS BANNER AD STANDARDIZE A FAILED CONCEPT",
"PLEASE SEND ME PIX!! WRITING YOU AGAIN IN CASE THE FIRST MAIL DISAPPEARED",
"POKING AND STROKING MY WAY INTO A GOOD COLLEGE",
"PRETEND I'M PAUL FROM THE DIAMOND CENTER AND YOU NEED CREDIT",
"PRETEND I'M THE 54 TO WESTGATE AND YANK MY DICK AND SAY NEXT STOP PLEASE",
"PRETEND OUR CAR IS DIAGONALLY PARKED IN A PARALLEL UNIVERSE AND YOU HAVE TO KISS ME",
"PROUD MEMBER OF THE CHICKCLICK ESTROGEN SNOWBALL UGO BLA-BLA ADSOURCE NETWORK",
"PROUD TO OFFER A SMOKE-FREE, DRUG-FREE, ALCOHOL-FREE, EMPLOYEE-FREE WORKPLACE",
"psst: i accidentally spilled dope smoke into my mouth and lungs ten times",
"PSST: I CAN SEE STRAIGHT THROUGH YOUR DRESS TO YOUR FLOWERY BLOOMERS",
"PSST: WHEN THE SPACE SHUTTLE RETURNS WE SHOULD ALL DRESS IN APE SUITS",
"PULL MY DICK ONCE FOR YES, FOUR HUNDRED TIMES FOR NO",
"Q: WHEN IS PIXAR GOING TO TURN THIS SITE INTO A HEARTWARMING ANIMATED COMEDY ??",
"QUICK!!! GRAB THIS SACK OF FLOUR AND - *FOOMP* OH GOD JESUS NO YOU IDIOT QUITTING MY GAS STATION JOB AND STARTING A WEB-BASED SOAP OPERA",
"Re: PISS ON MY FACE LIKE I'M A GAY FIRE RAGING OUT OF THE CLOSET",
"Re: SEXUALLY ABUSED DURING THE FIRST YEAR OF MY EMPLOYMENT",
"RED HEARTS YELLOW MOONS ORANGE STARS GREEN CLOVERS AND FUCKING FAGGOTS",
"Register to win an endless, massive hosing of spam from which there can be no escape!",
"REGISTER YOUR DOMAIN TODAY FOR ONLY TWELVE THOUSAND DOLLARS",
"RELATIVELY CERTAIN I HAVE NOTHING TO CONTRIBUTE",
"REMEMBER THE APPLE II+ ?? REMEMBER ATARI ADVENUTRE ?? FIND DAD'S GUN AND BRING IT TO SCHOOL",
"REMEMBER THE EIGHTIES???!?! REMEMBER THE SEVENTIES??? FUCK YOU IDIOT MORONS FOREVER",
"REMINDER: YOU CAN PUT PORNOGRAPHY ON A CD AS EASILY AS IDIOTIC MUSIC",
"Rent all the DVD's you want for FIFTY THOUSAND DOLLARS",
"Reuters (AP) - WORLD TRADE CENTER NEW SUPER STARBUCKS",
"REVENGE IS A DISH BEST SERVED UP IN ONLINE WEBZINE FORMAT!! CLICK FOR COUPONS",
"REVOLUTIONARY \"FACEPHONES\" ALLOW GIRLS TO GIVE BLOWJOBS OVER NETWORK",
"ROCKIN' OUT WITH A PILLSBURY TOASTER STRUDEL!!!!! LOUD ANGRY GUITAR MUSIC",
"ROSES ARE RED / VIOLETS ARE BLUE / SOME POEMS RHYME / THIS ONE JUST FALLS APART",
"SASSY, CYNICAL WEB EDITRIX WITH A REGISTERED COPY OF DREAMWEAVER AND A VISION",
"SAY THE PHRASE \"LINUX DISK IMAGES\" AND SEE HOW LONG I STAY AWAKE",
"Secret Decoder Ring: F U CN RD THS U HV 2 SCNDZ 2 LK 10 MLN DX",
"SELF-ESTEEM WORKSHOP AT MY PLACE???? PLEASE BRING HUGE BAGS OF WEED",
"SERIOUSLY: WHO FILLED MY BONG WITH BIRD SEED AND HUNG IT FROM A TREE",
"SHOULD I TAKE VITAMIN E OR JUST FIVE MILLION E TABLETS??? HOMPTH STUFF *BLGK*",
"SHOVING A SOCCER BALL UP MY SHIRT AND WALKING AROUND LIKE I'M PREGNANT",
"SINCE WHEN IS THE ART OF COMEDY SIMPLY AVOIDING TOILET HUMOR",
"SIR MY BUS PASS SEEMS TO HAVE EXPIRED DUE TO THE FACT I CAN'T FIND IT",
"SIR YOUR CAT IS SITTING ON ME AND WON'T GET UP AND KEEPS GOING TO THE BATHROOM",
"SO I THINK ROBERT HEINEKEN IS MY FAVORITE SCI-FI AUTHOR WHO'S ALSO A BEER",
"SOMEONE PLEASE PAY ATTENTION TO ME",
"SOMEONE STOLE THE BUTTERSCOTCHES FROM MY DESK DRAWER",
"SOMETIMES I PUSH THE BOTTOM OF MY SHIRT UP THROUGH THE COLLAR LIKE A HEE-HAW GIRL",
"SOMETIMES I WAKE UP AND LEGOS ARE IN MY UNDERWEAR",
"SORRY FOR THE WIDE DISTRIBUTION: I CANNOT FIT THROUGH THE STALL DOOR",
"SORRY LADY!! I BEAT OFF TO BLONDES, I DON'T TALK TO THEM",
"SORRY, THERE IS NOT ENOUGH MEMORY TO OPEN TEACH TEXT",
"SPECIAL REPORT: Are Our School Shootings Safe?",
"SQUEEZING A PERFECT \"S\" OF TOOTHPASTE ALONG MY DICK AND BRUSHING YOUR TEETH",
"Stay in school! Say no to drugs! Learn MORE about Jesus Christ! Prevent abortions! Click here!",
"STOP PULLING MY PIGTAILS",
"Subject: I would also like everyone to know I'm aware this mail is a hoax!!! CC:ALL",
"Subject: THE STAPLER WITH MY NAME ON IT SEEMS TO HAVE \"VANISHED\" AGAIN!!",
"Subject: WHO STOLE THE VISUAL C++ CD'S FROM MY CUBE ??? I'M AN IDIOT",
"SURE LADY, I'LL HAVE PHONE SEX WITH YOU!!! *SQUIRT* GOODNIGHT!!!! clonk, ba-donk",
"SYSADMINS: YOU CANNOT ASSIGN \"PERSIMMONS\" TO A DIRECTORY - THOSE ARE FRUITS",
"TEN BILLION SHORT FLASH ANIMATIONS!!! ALL ON DVD!!!! CLICK HERE TO KILL YOURSELF",
"THANKS FOR CHOPPING DOWN ALL THE TREES AND NAMING STREETS AFTER THEM",
"THAT IS NOT THE SORT OF LANGUAGE I EXPECT FROM A WEB DEVELOPER",
"THAT'S ABOUT ENOUGH HUMOR AT THE EXPENSE OF PEOPLE WITH TESTICULAR CANCER",
"THAT'S OKAY SOMETIMES IT HAPPENS AND WE CAN TRY AGAIN IN A FEW MINUTES etc.",
"THE DOOR IS UNLOCKED AND MY PANTS ARE DOWN",
"THE IMPLIED UNDERSTANDING IS THAT NOBODY KNOWS ABOUT THIS PLACE",
"THE INTERNET IS A GIFT FROM OUR LORD AND SAVIOR JESUS CHRIST!!!!",
"THE LITTLE ASCII ART DUCK WHO NEVER STOPPED COMPLAINING: o< THIS SUCKS",
"THE NEW BRITNEY CD SURE IS UPBEAT AND FULL OF TEEN PEP !!!!!! *GAK* roofies",
"THE SAD LITTLE ASCII ART DUCK: o< SUICIDE IS THE ONLY WAY OUT",
"THERE'S NOTHING FUNNY ABOUT LIVING WITH TEN CATS ON NOB HILL",
"THESE DIRTY MAGAZINES ARE FOR AN ART PROJECT, NOT A BEATING OFF PROJECT",
"THESE LINKS ARE BLATANT HARASSMENT IN MY OPINIONATION",
"THIS BONGHIT WILL MAKE ME FUNNY!!",
"THIS BOOMERANG DOES NOT WORK!!!! IT IS STICK-SHAPED",
"This is the hardest letter I've ever had to leave on your front porch.",
"THIS IS THE UPPERCASE CLUB!! YOU NEED UPPERCASE JACKETS AND TIES TO BE HERE",
"THIS JUST IN: ASDFL;KA J#*% &*$(BLG K#%V 9BU490J HGJKLTH",
"THIS LOOKS MORE LIKE THE UNDERSIDE OF A TOILET AND LESS LIKE MACWORLD EXPO",
"THIS PORN VIDEO HAS NO JERKOFFABLE GIRLS",
"THIS SITE IS NOT FOR CHILDREN!! ONLY EDUCATED INTELLECTUALS WITH ATM CARDS",
"THIS STEERING WHEEL DOWN MY PANTS IS DRIVING ME NUTS !!!!!!!!! GET IT",
"TINKER, TAILOR, SOLDIER, MASTURBATOR",
"To unsubscribe from this list, enter your credit card number: ____ ____ ____ ____",
"TOO DAZED WITH DICKS TO BOOKMARK THE BABYLON 5 FAQ ??? DOWNLOAD THE PDF",
"T-SHIRTS!! COFFEE MUGS!! BUMPER STICKERS!! MOUSE PADS!! KILL YOURSELF THIS INSTANT",
"UH-OH!! THE GUY WITH THE WORF SHIRT IS UPSET WITH HIS SHIFT LEADER !!",
"UNCOMFORTABLE WITH THE CONCEPT OF A \"MODEM WIZARD\"",
"UPDATE: CHRISTOPHER REEVE PUSHES HEALTH INSURANCE REFORM (WITH HIS NOSE)",
"URGENT!! CLICK HERE FOR SPECIAL OFFERS AND oh fuck it already",
"URGENT: PLEASE KEEP SHIFT-RELOADING THIS PAGE SO MY MODEM DOESN'T HANG UP",
"URMPH *BONK* SON OF A - OW - URF *HONK* WELL THIS IS A FINE ROMANCE",
"VERY FUNNY WITH THE CIGARETTE LIGHTER UNDER MY NUTS",
"VIRUS ALERT!!! HURRRRRRRR *HONK* BLOWJOBS",
"VISUALIZE WORLD PEACE!!!! SCREECH SMASH BOOM BURN",
"Warm hearted Christian man with values seeks chubby-cheeked pre-teen dicks ($$$)",
"WARNING: BONERS LOOSE IN THE FINANCIAL DISTRICT",
"WE DON'T TALK LIKE THAT IN THIS HOUSE!! SHUT UP MOM",
"WE ROCKETED TO JUPITER AND DISCOVERED IT'S ALL WET GAS AND WE COULDN'T LAND",
"WELCOME ${'username') WE HAVE RECOMMENDATIONS FOR YOU IN %%cookiedump%%\\><DUH&",
"Welcome! We have recommendations for you in assault rifles, duct tape, bomb making materials.",
"WELPS - BACK TO BED UNTIL I CAN REMEMBER WHICH BUS TAKES ME TO WORK",
"WELPS - GUESS I'LL WRITE AN APPLESCRIPT AND TAKE OFF FOR THE DAY",
"WELPS, THE HEAD OF H.R. DIDN'T LIKE ME CALLING HER TITS AIR BAGS!!!!!",
"WE'VE REPLACED YOU WITH A PIECE OF SCOTCH TAPE ACROSS THE OPTION KEY",
"WHAT A GREAT DAY WITH ALL YOU PEOPLE!! I MEAN THAT!! *HURK* suicide",
"WHAT IF EVERYONE IN THE WORLD FLUSHED THE TOILET AT THE SAME TIME",
"WHAT IF YOU WERE SINKING IN QUICKSAND AND I THREW YOU A MOZARELLA STICK??",
"WHAT WOULD BE FUNNY WOULD BE TO REGISTER BONERS.COM",
"WHAT'S STRANGE IS WHY MY PANTS ARE DOWN AND THE LIGHTS ARE OFF",
"WHEN IS THAT GOSH DARN HARRY POTTER GOING TO COME OUT OF THE CLOSET ??",
"WHEN MIRRORS ARE OUTLAWED, ONLY OUTLAWS WILL LOOK PRETTY AND WEAR MAKE UP",
"WHEN MY PAGER VIBRATES I GET A NOSE BLEED",
"WHEN YOU SAID LET'S GO OUT FOR A DRINK I THOUGHT YOU MEANT WITH AN ACTUAL GLASS",
"WHETHER YOU PLAY THEM ALONE OR IN GROUPS / ONLINE GAMES ARE INFINITE LOOPS",
"WHO ARE THESE IDIOT KIDS AND WHY ARE THEY CALLING ME DAD",
"WHO STUFFED MY STYROFOAM SOLAR SYSTEM SHOEBOX DIORAMA DOWN THE TOILET ??",
"WHO WANTS TO WATCH BUFFY WITH ME TONIGHT???? ANAL SEX FOR DESSERT!!!",
"WHONK WHONK OH GOD THE PIPE IT'S HITTING THE BRIDGE OF MY NOSE ",
"WHY IS NOBODY READING / DISCUSSING MY ANIMANIACS FAN FICTION ???",
"WHY IS NOBOODY LAUGHING AT MY HILARIOUS WEBSITE",
"WHY MUST YOU ALWAYS DOPE MY STONISH MOCKERY???",
"WHY YES!!! I'D LOVE TO LEARN MORE ABOUT YOUR FANTASY BASKETBALL TEAM!!!",
"WIGGLE YOUR TOE!!! WIGGLE YOUR TOE!!! CHRIST JESUS MOM: SHUT UP",
"Win a FREE computer for $1840.00 plus $93.15 tax and $40.00 shipping",
"Win FREE school supplies, backpacks, bongs, bags of weed, pellet guns!",
"WIRED REJECTED MY ESSAY ABOUT HOW MUCH MY MOM SUCKS",
"WITH GOD AS MY WITNESS I AM THE WORST POKEMON TRAINER EVER",
"WITHOUT DONATIONS THERE CAN BE NO MORE FREE SODA IN THE BREAK ROOM",
"WITHOUT ME, THE INSTALLER DISKETTES WOULD JUST GO UNLABELED",
"WITHOUT RACISM, HOW WOULD WE TELL EACH OTHER APART ???",
"WOMEN CAN DO ANYTHING THEY PUT THEIR MOPS TO",
"X X X PLAYBOY'S COLLEGE GIRLS I GAVE A BLACK EYE TO AND THEN TOOK MONEY FROM X X X",
"YES - BUT CAN IT REALLY HELP ME WEAVE DREAMS ???",
"YOU CAN ME TO THE TRASH CAN WITHOUT SO MUCH AS A GLANCE",
"You have been /banned from channel bAcKstrEEt_bOyZ.",
"YOU HAVE BEEN KICKED OFF CHANNEL #BRITNEYFANZ",
"You have been kicked off channel #GAY_WITH_KISSES",
"YOU HAVE THE **POTENTIAL** TO BE AN A STUDENT IF ONLY YOU'D just give me a blowjob",
"YOU LIED ABOUT DOCTOR WHO BEING IN YOUR PANTS POCKET",
"You may kiss the bride! **BLAM** OH GOD HE SHOT HIMSELF!!!! OH GOD HELP HELP",
"YOU SIR HAVE MADE US THE LAUGHING STOCK OF THE ENTIRE QUADRANT",
"You will soon read a generic fortune cookie.",
"YOUR ORDER WITH AMAZON.COM HAS BEEN PROCESSED !!!!!!!!! *BONK* toilet bowl",
"YOUR PARTICIPLES AREN'T THE ONLY THING DANGLING",
"YOU'RE CORDIALLY INVITED ........... (open card) ........... TO SUCK COCK!!",
"YOU'RE MAKING BEING STONED AT ONE IN THE AFTERNOON UNPLEASANT ",
"YOU'RE VISITOR 000000003!! THANKS FOR STOPPING IN!!",
"ZERO HITS TO MY LIVE FILK CYBERCAST ????????"
];

// End