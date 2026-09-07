export interface VocabSeed {
  german: string
  amharic: string
  pronunciation: string
  level: 'A1' | 'A2' | 'B1'
  category: string
  example_de: string
  example_am: string
}

export const vocabulary: VocabSeed[] = [
  // ── Greetings (ሰላምታ) ──
  { german: 'Hallo', amharic: 'ሰላም', pronunciation: 'ሃሎ', level: 'A1', category: 'greetings', example_de: 'Hallo, wie geht es dir?', example_am: 'ሰላም፣ እንዴት ነህ?' },
  { german: 'Guten Morgen', amharic: 'እንደምን አደሩ', pronunciation: 'ጉተን ሞርገን', level: 'A1', category: 'greetings', example_de: 'Guten Morgen, Frau Müller!', example_am: 'እንደምን አደሩ ወ/ሮ ሙለር!' },
  { german: 'Guten Abend', amharic: 'እንደምን አመሹ', pronunciation: 'ጉተን አበንት', level: 'A1', category: 'greetings', example_de: 'Guten Abend, willkommen!', example_am: 'እንደምን አመሹ፣ እንኳን ደህና መጡ!' },
  { german: 'Auf Wiedersehen', amharic: 'ደህና ይሁኑ', pronunciation: 'አውፍ ቪደርዜን', level: 'A1', category: 'greetings', example_de: 'Auf Wiedersehen, bis morgen!', example_am: 'ደህና ይሁኑ፣ እስከ ነገ!' },
  { german: 'Danke', amharic: 'አመሰግናለሁ', pronunciation: 'ዳንከ', level: 'A1', category: 'greetings', example_de: 'Danke für deine Hilfe.', example_am: 'ስለ እርዳታህ አመሰግናለሁ።' },
  { german: 'Bitte', amharic: 'እባክዎ / ምንም አይደለም', pronunciation: 'ቢተ', level: 'A1', category: 'greetings', example_de: 'Ein Kaffee, bitte.', example_am: 'አንድ ቡና እባክዎ።' },
  { german: 'Entschuldigung', amharic: 'ይቅርታ', pronunciation: 'ኤንትሹልዲጉንግ', level: 'A1', category: 'greetings', example_de: 'Entschuldigung, wo ist der Bahnhof?', example_am: 'ይቅርታ፣ ባቡር ጣቢያው የት ነው?' },
  { german: 'Wie geht es Ihnen?', amharic: 'እንዴት ነዎት?', pronunciation: 'ቪ ጌት ኤስ ኢነን', level: 'A1', category: 'greetings', example_de: 'Guten Tag, wie geht es Ihnen?', example_am: 'እንደምን ዋሉ፣ እንዴት ነዎት?' },

  // ── Family (ቤተሰብ) ──
  { german: 'die Familie', amharic: 'ቤተሰብ', pronunciation: 'ዲ ፋሚልየ', level: 'A1', category: 'family', example_de: 'Meine Familie ist groß.', example_am: 'ቤተሰቤ ትልቅ ነው።' },
  { german: 'die Mutter', amharic: 'እናት', pronunciation: 'ዲ ሙተር', level: 'A1', category: 'family', example_de: 'Meine Mutter kocht gern.', example_am: 'እናቴ ማብሰል ትወዳለች።' },
  { german: 'der Vater', amharic: 'አባት', pronunciation: 'ዴር ፋተር', level: 'A1', category: 'family', example_de: 'Mein Vater arbeitet viel.', example_am: 'አባቴ ብዙ ይሰራል።' },
  { german: 'das Kind', amharic: 'ልጅ', pronunciation: 'ዳስ ኪንት', level: 'A1', category: 'family', example_de: 'Das Kind spielt im Garten.', example_am: 'ልጁ በአትክልቱ ውስጥ ይጫወታል።' },
  { german: 'der Bruder', amharic: 'ወንድም', pronunciation: 'ዴር ብሩደር', level: 'A1', category: 'family', example_de: 'Mein Bruder wohnt in Berlin.', example_am: 'ወንድሜ በርሊን ውስጥ ይኖራል።' },
  { german: 'die Schwester', amharic: 'እህት', pronunciation: 'ዲ ሽቬስተር', level: 'A1', category: 'family', example_de: 'Meine Schwester ist Ärztin.', example_am: 'እህቴ ሐኪም ናት።' },
  { german: 'der Freund', amharic: 'ጓደኛ', pronunciation: 'ዴር ፍሮይንት', level: 'A1', category: 'family', example_de: 'Er ist mein bester Freund.', example_am: 'እሱ የቅርብ ጓደኛዬ ነው።' },
  { german: 'die Frau', amharic: 'ሴት / ሚስት', pronunciation: 'ዲ ፍራው', level: 'A1', category: 'family', example_de: 'Die Frau liest ein Buch.', example_am: 'ሴትዮዋ መጽሐፍ ታነባለች።' },
  { german: 'der Mann', amharic: 'ወንድ / ባል', pronunciation: 'ዴር ማን', level: 'A1', category: 'family', example_de: 'Der Mann fährt Auto.', example_am: 'ሰውዬው መኪና ይነዳል።' },

  // ── Food & Drink (ምግብ እና መጠጥ) ──
  { german: 'das Wasser', amharic: 'ውሃ', pronunciation: 'ዳስ ቫሰር', level: 'A1', category: 'food', example_de: 'Ich trinke viel Wasser.', example_am: 'ብዙ ውሃ እጠጣለሁ።' },
  { german: 'das Brot', amharic: 'ዳቦ', pronunciation: 'ዳስ ብሮት', level: 'A1', category: 'food', example_de: 'Das Brot ist frisch.', example_am: 'ዳቦው ትኩስ ነው።' },
  { german: 'der Kaffee', amharic: 'ቡና', pronunciation: 'ዴር ካፌ', level: 'A1', category: 'food', example_de: 'Äthiopischer Kaffee ist berühmt.', example_am: 'የኢትዮጵያ ቡና ታዋቂ ነው።' },
  { german: 'der Tee', amharic: 'ሻይ', pronunciation: 'ዴር ቴ', level: 'A1', category: 'food', example_de: 'Möchtest du Tee mit Zucker?', example_am: 'ሻይ ከስኳር ጋር ትፈልጋለህ?' },
  { german: 'die Milch', amharic: 'ወተት', pronunciation: 'ዲ ሚልሽ', level: 'A1', category: 'food', example_de: 'Die Milch ist im Kühlschrank.', example_am: 'ወተቱ ማቀዝቀዣ ውስጥ ነው።' },
  { german: 'das Fleisch', amharic: 'ሥጋ', pronunciation: 'ዳስ ፍላይሽ', level: 'A2', category: 'food', example_de: 'Ich esse kein Fleisch.', example_am: 'ሥጋ አልበላም።' },
  { german: 'der Zucker', amharic: 'ስኳር', pronunciation: 'ዴር ጹከር', level: 'A2', category: 'food', example_de: 'Ohne Zucker, bitte.', example_am: 'ያለ ስኳር እባክዎ።' },
  { german: 'das Salz', amharic: 'ጨው', pronunciation: 'ዳስ ዛልጽ', level: 'A2', category: 'food', example_de: 'Kannst du mir das Salz geben?', example_am: 'ጨዉን ልታቀብለኝ ትችላለህ?' },
  { german: 'das Essen', amharic: 'ምግብ', pronunciation: 'ዳስ ኤሰን', level: 'A1', category: 'food', example_de: 'Das Essen schmeckt sehr gut.', example_am: 'ምግቡ በጣም ጣፋጭ ነው።' },

  // ── Numbers (ቁጥሮች) ──
  { german: 'eins', amharic: 'አንድ', pronunciation: 'አይንስ', level: 'A1', category: 'numbers', example_de: 'Ich habe eins gekauft.', example_am: 'አንድ ገዛሁ።' },
  { german: 'zwei', amharic: 'ሁለት', pronunciation: 'ጽቫይ', level: 'A1', category: 'numbers', example_de: 'Zwei Kaffee, bitte.', example_am: 'ሁለት ቡና እባክዎ።' },
  { german: 'drei', amharic: 'ሦስት', pronunciation: 'ድራይ', level: 'A1', category: 'numbers', example_de: 'Ich habe drei Geschwister.', example_am: 'ሦስት እህትማማቾች አሉኝ።' },
  { german: 'vier', amharic: 'አራት', pronunciation: 'ፊር', level: 'A1', category: 'numbers', example_de: 'Der Kurs dauert vier Wochen.', example_am: 'ኮርሱ አራት ሳምንት ይወስዳል።' },
  { german: 'fünf', amharic: 'አምስት', pronunciation: 'ፍዩንፍ', level: 'A1', category: 'numbers', example_de: 'Es ist fünf Uhr.', example_am: 'አምስት ሰዓት ነው።' },
  { german: 'sechs', amharic: 'ስድስት', pronunciation: 'ዜክስ', level: 'A1', category: 'numbers', example_de: 'Wir sind sechs Personen.', example_am: 'ስድስት ሰዎች ነን።' },
  { german: 'sieben', amharic: 'ሰባት', pronunciation: 'ዚበን', level: 'A1', category: 'numbers', example_de: 'Die Woche hat sieben Tage.', example_am: 'ሳምንቱ ሰባት ቀናት አሉት።' },
  { german: 'acht', amharic: 'ስምንት', pronunciation: 'አኽት', level: 'A1', category: 'numbers', example_de: 'Der Zug fährt um acht Uhr.', example_am: 'ባቡሩ በስምንት ሰዓት ይነሳል።' },
  { german: 'neun', amharic: 'ዘጠኝ', pronunciation: 'ኖይን', level: 'A1', category: 'numbers', example_de: 'Ich arbeite von neun bis fünf.', example_am: 'ከዘጠኝ እስከ አምስት እሰራለሁ።' },
  { german: 'zehn', amharic: 'አሥር', pronunciation: 'ጼን', level: 'A1', category: 'numbers', example_de: 'Zehn Euro, bitte.', example_am: 'አሥር ዩሮ እባክዎ።' },

  // ── Colors (ቀለሞች) ──
  { german: 'rot', amharic: 'ቀይ', pronunciation: 'ሮት', level: 'A1', category: 'colors', example_de: 'Das Auto ist rot.', example_am: 'መኪናው ቀይ ነው።' },
  { german: 'blau', amharic: 'ሰማያዊ', pronunciation: 'ብላው', level: 'A1', category: 'colors', example_de: 'Der Himmel ist blau.', example_am: 'ሰማዩ ሰማያዊ ነው።' },
  { german: 'grün', amharic: 'አረንጓዴ', pronunciation: 'ግርዩን', level: 'A1', category: 'colors', example_de: 'Die Ampel ist grün.', example_am: 'የትራፊክ መብራቱ አረንጓዴ ነው።' },
  { german: 'gelb', amharic: 'ቢጫ', pronunciation: 'ጌልፕ', level: 'A1', category: 'colors', example_de: 'Die Banane ist gelb.', example_am: 'ሙዙ ቢጫ ነው።' },
  { german: 'schwarz', amharic: 'ጥቁር', pronunciation: 'ሽቫርጽ', level: 'A1', category: 'colors', example_de: 'Ich trinke schwarzen Kaffee.', example_am: 'ጥቁር ቡና እጠጣለሁ።' },
  { german: 'weiß', amharic: 'ነጭ', pronunciation: 'ቫይስ', level: 'A1', category: 'colors', example_de: 'Das Hemd ist weiß.', example_am: 'ሸሚዙ ነጭ ነው።' },

  // ── Verbs (ግሶች) ──
  { german: 'essen', amharic: 'መብላት', pronunciation: 'ኤሰን', level: 'A1', category: 'verbs', example_de: 'Wir essen zusammen Injera.', example_am: 'እንጀራ አብረን እንበላለን።' },
  { german: 'trinken', amharic: 'መጠጣት', pronunciation: 'ትሪንከን', level: 'A1', category: 'verbs', example_de: 'Was möchtest du trinken?', example_am: 'ምን መጠጣት ትፈልጋለህ?' },
  { german: 'schlafen', amharic: 'መተኛት', pronunciation: 'ሽላፈን', level: 'A1', category: 'verbs', example_de: 'Ich schlafe acht Stunden.', example_am: 'ስምንት ሰዓት እተኛለሁ።' },
  { german: 'gehen', amharic: 'መሄድ', pronunciation: 'ጌኤን', level: 'A1', category: 'verbs', example_de: 'Wir gehen zur Schule.', example_am: 'ወደ ትምህርት ቤት እንሄዳለን።' },
  { german: 'kommen', amharic: 'መምጣት', pronunciation: 'ኮመን', level: 'A1', category: 'verbs', example_de: 'Ich komme aus Äthiopien.', example_am: 'ከኢትዮጵያ ነው የመጣሁት።' },
  { german: 'sprechen', amharic: 'መናገር', pronunciation: 'ሽፕሬኸን', level: 'A1', category: 'verbs', example_de: 'Ich spreche Amharisch und Deutsch.', example_am: 'አማርኛ እና ጀርመንኛ እናገራለሁ።' },
  { german: 'lernen', amharic: 'መማር', pronunciation: 'ሌርነን', level: 'A1', category: 'verbs', example_de: 'Wir lernen jeden Tag Deutsch.', example_am: 'በየቀኑ ጀርመንኛ እንማራለን።' },
  { german: 'arbeiten', amharic: 'መሥራት', pronunciation: 'አርባይተን', level: 'A1', category: 'verbs', example_de: 'Sie arbeitet im Krankenhaus.', example_am: 'እሷ ሆስፒታል ውስጥ ትሰራለች።' },
  { german: 'wohnen', amharic: 'መኖር', pronunciation: 'ቮነን', level: 'A1', category: 'verbs', example_de: 'Wo wohnst du?', example_am: 'የት ነው የምትኖረው?' },
  { german: 'verstehen', amharic: 'መረዳት', pronunciation: 'ፌርሽቴኤን', level: 'A2', category: 'verbs', example_de: 'Ich verstehe die Frage nicht.', example_am: 'ጥያቄውን አልገባኝም።' },
  { german: 'helfen', amharic: 'መርዳት', pronunciation: 'ሄልፈን', level: 'A2', category: 'verbs', example_de: 'Kannst du mir helfen?', example_am: 'ልትረዳኝ ትችላለህ?' },
  { german: 'kaufen', amharic: 'መግዛት', pronunciation: 'ካውፈን', level: 'A2', category: 'verbs', example_de: 'Ich kaufe Gemüse auf dem Markt.', example_am: 'አትክልት ከገበያ እገዛለሁ።' },

  // ── Everyday life (የዕለት ተዕለት ኑሮ) ──
  { german: 'das Haus', amharic: 'ቤት', pronunciation: 'ዳስ ሃውስ', level: 'A1', category: 'everyday', example_de: 'Unser Haus ist klein.', example_am: 'ቤታችን ትንሽ ነው።' },
  { german: 'die Schule', amharic: 'ትምህርት ቤት', pronunciation: 'ዲ ሹለ', level: 'A1', category: 'everyday', example_de: 'Die Schule beginnt um acht.', example_am: 'ትምህርት ቤት በስምንት ሰዓት ይጀምራል።' },
  { german: 'das Auto', amharic: 'መኪና', pronunciation: 'ዳስ አውቶ', level: 'A1', category: 'everyday', example_de: 'Das Auto ist neu.', example_am: 'መኪናው አዲስ ነው።' },
  { german: 'das Buch', amharic: 'መጽሐፍ', pronunciation: 'ዳስ ቡኽ', level: 'A1', category: 'everyday', example_de: 'Ich lese ein Buch.', example_am: 'መጽሐፍ አነባለሁ።' },
  { german: 'die Arbeit', amharic: 'ሥራ', pronunciation: 'ዲ አርባይት', level: 'A1', category: 'everyday', example_de: 'Die Arbeit macht mir Spaß.', example_am: 'ሥራው ያስደስተኛል።' },
  { german: 'das Geld', amharic: 'ገንዘብ', pronunciation: 'ዳስ ጌልት', level: 'A1', category: 'everyday', example_de: 'Ich habe kein Geld dabei.', example_am: 'ገንዘብ አልያዝኩም።' },
  { german: 'die Zeit', amharic: 'ጊዜ', pronunciation: 'ዲ ጻይት', level: 'A1', category: 'everyday', example_de: 'Ich habe heute keine Zeit.', example_am: 'ዛሬ ጊዜ የለኝም።' },
  { german: 'die Stadt', amharic: 'ከተማ', pronunciation: 'ዲ ሽታት', level: 'A2', category: 'everyday', example_de: 'Addis Abeba ist eine große Stadt.', example_am: 'አዲስ አበባ ትልቅ ከተማ ናት።' },
  { german: 'das Land', amharic: 'አገር', pronunciation: 'ዳስ ላንት', level: 'A2', category: 'everyday', example_de: 'Deutschland ist ein schönes Land.', example_am: 'ጀርመን ቆንጆ አገር ናት።' },
  { german: 'die Sprache', amharic: 'ቋንቋ', pronunciation: 'ዲ ሽፕራኸ', level: 'A2', category: 'everyday', example_de: 'Deutsch ist eine schwere Sprache.', example_am: 'ጀርመንኛ ከባድ ቋንቋ ነው።' },
  { german: 'der Bahnhof', amharic: 'ባቡር ጣቢያ', pronunciation: 'ዴር ባንሆፍ', level: 'A2', category: 'everyday', example_de: 'Der Bahnhof ist in der Nähe.', example_am: 'ባቡር ጣቢያው በቅርብ ነው።' },
  { german: 'das Krankenhaus', amharic: 'ሆስፒታል', pronunciation: 'ዳስ ክራንከንሃውስ', level: 'A2', category: 'everyday', example_de: 'Das Krankenhaus ist geöffnet.', example_am: 'ሆስፒታሉ ክፍት ነው።' },
  { german: 'der Arzt', amharic: 'ሐኪም', pronunciation: 'ዴር አርጽት', level: 'A2', category: 'everyday', example_de: 'Ich habe einen Termin beim Arzt.', example_am: 'ከሐኪም ጋር ቀጠሮ አለኝ።' },

  // ── Time (ጊዜ) ──
  { german: 'heute', amharic: 'ዛሬ', pronunciation: 'ሆይተ', level: 'A1', category: 'time', example_de: 'Heute ist Montag.', example_am: 'ዛሬ ሰኞ ነው።' },
  { german: 'morgen', amharic: 'ነገ', pronunciation: 'ሞርገን', level: 'A1', category: 'time', example_de: 'Morgen habe ich frei.', example_am: 'ነገ እረፍት ነኝ።' },
  { german: 'gestern', amharic: 'ትናንት', pronunciation: 'ጌስተርን', level: 'A1', category: 'time', example_de: 'Gestern hat es geregnet.', example_am: 'ትናንት ዝናብ ዘንቧል።' },
  { german: 'der Tag', amharic: 'ቀን', pronunciation: 'ዴር ታክ', level: 'A1', category: 'time', example_de: 'Der Tag war lang.', example_am: 'ቀኑ ረጅም ነበር።' },
  { german: 'die Nacht', amharic: 'ሌሊት', pronunciation: 'ዲ ናኽት', level: 'A1', category: 'time', example_de: 'Gute Nacht!', example_am: 'ደህና እደሩ!' },
  { german: 'die Woche', amharic: 'ሳምንት', pronunciation: 'ዲ ቮኸ', level: 'A2', category: 'time', example_de: 'Nächste Woche fahre ich nach Hamburg.', example_am: 'በሚቀጥለው ሳምንት ወደ ሃምቡርግ እሄዳለሁ።' },

  // ── Adjectives (ቅጽሎች) ──
  { german: 'gut', amharic: 'ጥሩ', pronunciation: 'ጉት', level: 'A1', category: 'adjectives', example_de: 'Das Essen ist gut.', example_am: 'ምግቡ ጥሩ ነው።' },
  { german: 'schlecht', amharic: 'መጥፎ', pronunciation: 'ሽሌሽት', level: 'A1', category: 'adjectives', example_de: 'Das Wetter ist schlecht.', example_am: 'የአየር ሁኔታው መጥፎ ነው።' },
  { german: 'groß', amharic: 'ትልቅ', pronunciation: 'ግሮስ', level: 'A1', category: 'adjectives', example_de: 'Berlin ist eine große Stadt.', example_am: 'በርሊን ትልቅ ከተማ ናት።' },
  { german: 'klein', amharic: 'ትንሽ', pronunciation: 'ክላይን', level: 'A1', category: 'adjectives', example_de: 'Die Wohnung ist klein.', example_am: 'መኖሪያ ቤቱ ትንሽ ነው።' },
  { german: 'schön', amharic: 'ቆንጆ / ውብ', pronunciation: 'ሽዩን', level: 'A1', category: 'adjectives', example_de: 'Das ist ein schöner Tag.', example_am: 'ይህ ውብ ቀን ነው።' },
  { german: 'schnell', amharic: 'ፈጣን', pronunciation: 'ሽኔል', level: 'A2', category: 'adjectives', example_de: 'Der Zug ist sehr schnell.', example_am: 'ባቡሩ በጣም ፈጣን ነው።' },
  { german: 'wichtig', amharic: 'አስፈላጊ', pronunciation: 'ቪሽቲሽ', level: 'A2', category: 'adjectives', example_de: 'Deutsch lernen ist wichtig.', example_am: 'ጀርመንኛ መማር አስፈላጊ ነው።' },

  // ── Work & bureaucracy (ሥራ እና አስተዳደር) ──
  { german: 'die Bewerbung', amharic: 'ማመልከቻ', pronunciation: 'ዲ ቤቬርቡንግ', level: 'B1', category: 'work', example_de: 'Ich schreibe eine Bewerbung.', example_am: 'ማመልከቻ እጽፋለሁ።' },
  { german: 'die Erfahrung', amharic: 'ልምድ', pronunciation: 'ዲ ኤርፋሩንግ', level: 'B1', category: 'work', example_de: 'Sie hat viel Berufserfahrung.', example_am: 'እሷ ብዙ የሥራ ልምድ አላት።' },
  { german: 'die Verantwortung', amharic: 'ኃላፊነት', pronunciation: 'ዲ ፌርአንትቮርቱንግ', level: 'B1', category: 'work', example_de: 'Er übernimmt die Verantwortung.', example_am: 'እሱ ኃላፊነቱን ይወስዳል።' },
  { german: 'der Vertrag', amharic: 'ውል / ኮንትራት', pronunciation: 'ዴር ፌርትራክ', level: 'B1', category: 'work', example_de: 'Ich habe den Vertrag unterschrieben.', example_am: 'ውሉን ፈርሜያለሁ።' },
  { german: 'der Termin', amharic: 'ቀጠሮ', pronunciation: 'ዴር ቴርሚን', level: 'B1', category: 'work', example_de: 'Ich brauche einen neuen Termin.', example_am: 'አዲስ ቀጠሮ እፈልጋለሁ።' },
  { german: 'die Miete', amharic: 'የቤት ኪራይ', pronunciation: 'ዲ ሚተ', level: 'B1', category: 'work', example_de: 'Die Miete ist zu hoch.', example_am: 'የቤት ኪራዩ በጣም ውድ ነው።' },
  { german: 'die Versicherung', amharic: 'ዋስትና (ኢንሹራንስ)', pronunciation: 'ዲ ፌርዚኸሩንግ', level: 'B1', category: 'work', example_de: 'Die Krankenversicherung ist Pflicht.', example_am: 'የጤና ዋስትና ግዴታ ነው።' },
  { german: 'die Gesundheit', amharic: 'ጤና', pronunciation: 'ዲ ገዙንትሃይት', level: 'B1', category: 'work', example_de: 'Gesundheit ist das Wichtigste.', example_am: 'ጤና ከሁሉም በላይ አስፈላጊ ነው።' },
  { german: 'die Gesellschaft', amharic: 'ማህበረሰብ', pronunciation: 'ዲ ገዜልሻፍት', level: 'B1', category: 'work', example_de: 'Wir leben in einer modernen Gesellschaft.', example_am: 'በዘመናዊ ማህበረሰብ ውስጥ እንኖራለን።' },
  { german: 'die Umwelt', amharic: 'አካባቢ', pronunciation: 'ዲ ኡምቬልት', level: 'B1', category: 'work', example_de: 'Wir müssen die Umwelt schützen.', example_am: 'አካባቢያችንን መጠበቅ አለብን።' },
  { german: 'entscheiden', amharic: 'መወሰን', pronunciation: 'ኤንትሻይደን', level: 'B1', category: 'work', example_de: 'Du musst dich heute entscheiden.', example_am: 'ዛሬ መወሰን አለብህ።' },
  { german: 'empfehlen', amharic: 'መምከር / ማበረታታት', pronunciation: 'ኤምፕፌለን', level: 'B1', category: 'work', example_de: 'Ich empfehle diesen Kurs.', example_am: 'ይህን ኮርስ እመክራለሁ።' },
  { german: 'erklären', amharic: 'ማስረዳት', pronunciation: 'ኤርክሌረን', level: 'B1', category: 'work', example_de: 'Kannst du mir die Regel erklären?', example_am: 'ደንቡን ልታስረዳኝ ትችላለህ?' },

  // ═══════════════════════════════════════════
  // NEW CATEGORIES BELOW (20 categories, ~260 words)
  // ═══════════════════════════════════════════

  // ── Days of the week (የሳምንቱ ቀናት) ──
  { german: 'der Montag', amharic: 'ሰኞ', pronunciation: 'ዴር ሞንታክ', level: 'A1', category: 'days', example_de: 'Am Montag beginnt die Woche.', example_am: 'ሰኞ ሳምንቱ ይጀምራል።' },
  { german: 'der Dienstag', amharic: 'ማክሰኞ', pronunciation: 'ዴር ዲንስታክ', level: 'A1', category: 'days', example_de: 'Am Dienstag habe ich Deutschkurs.', example_am: 'ማክሰኞ የጀርመንኛ ትምህርት አለኝ።' },
  { german: 'der Mittwoch', amharic: 'ረቡዕ', pronunciation: 'ዴር ሚትቮኽ', level: 'A1', category: 'days', example_de: 'Mittwoch ist die Mitte der Woche.', example_am: 'ረቡዕ የሳምንቱ መሃል ነው።' },
  { german: 'der Donnerstag', amharic: 'ሐሙስ', pronunciation: 'ዴር ዶነርስታክ', level: 'A1', category: 'days', example_de: 'Am Donnerstag gehe ich einkaufen.', example_am: 'ሐሙስ ገበያ እሄዳለሁ።' },
  { german: 'der Freitag', amharic: 'ዓርብ', pronunciation: 'ዴር ፍራይታክ', level: 'A1', category: 'days', example_de: 'Freitag ist mein Lieblingstag.', example_am: 'ዓርብ የምወደው ቀን ነው።' },
  { german: 'der Samstag', amharic: 'ቅዳሜ', pronunciation: 'ዴር ዛምስታክ', level: 'A1', category: 'days', example_de: 'Am Samstag schlafe ich lange.', example_am: 'ቅዳሜ ብዙ እተኛለሁ።' },
  { german: 'der Sonntag', amharic: 'እሑድ', pronunciation: 'ዴር ዞንታክ', level: 'A1', category: 'days', example_de: 'Sonntag ist Ruhetag.', example_am: 'እሑድ የእረፍት ቀን ነው።' },

  // ── Months (ወራት) ──
  { german: 'der Januar', amharic: 'ጃንዋሪ', pronunciation: 'ዴር ያኑአር', level: 'A2', category: 'months', example_de: 'Im Januar ist es kalt.', example_am: 'ጃንዋሪ ቀዝቃዛ ነው።' },
  { german: 'der Februar', amharic: 'ፌብሩዋሪ', pronunciation: 'ዴር ፌብሩአር', level: 'A2', category: 'months', example_de: 'Der Februar ist kurz.', example_am: 'ፌብሩዋሪ አጭር ነው።' },
  { german: 'der März', amharic: 'ማርች', pronunciation: 'ዴር ሜርጽ', level: 'A2', category: 'months', example_de: 'Im März wird es wärmer.', example_am: 'ማርች ሞቃት ይሆናል።' },
  { german: 'der April', amharic: 'ኤፕሪል', pronunciation: 'ዴር አፕሪል', level: 'A2', category: 'months', example_de: 'Im April regnet es oft.', example_am: 'ኤፕሪል ብዙ ጊዜ ዝናብ ይጥላል።' },
  { german: 'der Mai', amharic: 'ሜይ', pronunciation: 'ዴር ማይ', level: 'A2', category: 'months', example_de: 'Im Mai blühen die Blumen.', example_am: 'ሜይ አበቦች ያብባሉ።' },
  { german: 'der Juni', amharic: 'ጁን', pronunciation: 'ዴር ዩኒ', level: 'A2', category: 'months', example_de: 'Im Juni beginnt der Sommer.', example_am: 'ጁን በጋ ይጀምራል።' },
  { german: 'der Juli', amharic: 'ጁላይ', pronunciation: 'ዴር ዩሊ', level: 'A2', category: 'months', example_de: 'Der Juli ist sehr heiß.', example_am: 'ጁላይ በጣም ሙቅ ነው።' },
  { german: 'der August', amharic: 'ኦገስት', pronunciation: 'ዴር አውጉስት', level: 'A2', category: 'months', example_de: 'Im August mache ich Urlaub.', example_am: 'ኦገስት እረፍት አደርጋለሁ።' },
  { german: 'der September', amharic: 'ሴፕቴምበር', pronunciation: 'ዴር ዜፕቴምበር', level: 'A2', category: 'months', example_de: 'Im September beginnt die Schule.', example_am: 'ሴፕቴምበር ትምህርት ይጀምራል።' },
  { german: 'der Oktober', amharic: 'ኦክቶበር', pronunciation: 'ዴር ኦክቶበር', level: 'A2', category: 'months', example_de: 'Im Oktober ist Oktoberfest.', example_am: 'ኦክቶበር ኦክቶበርፌስት ነው።' },
  { german: 'der November', amharic: 'ኖቬምበር', pronunciation: 'ዴር ኖቬምበር', level: 'A2', category: 'months', example_de: 'Im November wird es dunkel.', example_am: 'ኖቬምበር ጨለማ ይሆናል።' },
  { german: 'der Dezember', amharic: 'ዲሴምበር', pronunciation: 'ዴር ዴጼምበር', level: 'A2', category: 'months', example_de: 'Im Dezember feiern wir Weihnachten.', example_am: 'ዲሴምበር ገና እናከብራለን።' },

  // ── Seasons (ወቅቶች) ──
  { german: 'der Frühling', amharic: 'ጸደይ', pronunciation: 'ዴር ፍሪውሊንግ', level: 'A2', category: 'seasons', example_de: 'Im Frühling blühen die Bäume.', example_am: 'ጸደይ ዛፎች ያብባሉ።' },
  { german: 'der Sommer', amharic: 'በጋ', pronunciation: 'ዴር ዞመር', level: 'A2', category: 'seasons', example_de: 'Im Sommer ist es warm.', example_am: 'በበጋ ሞቃት ነው።' },
  { german: 'der Herbst', amharic: 'መኸር', pronunciation: 'ዴር ሄርብስት', level: 'A2', category: 'seasons', example_de: 'Im Herbst fallen die Blätter.', example_am: 'መኸር ቅጠሎች ይረግፋሉ።' },
  { german: 'der Winter', amharic: 'ክረምት', pronunciation: 'ዴር ቪንተር', level: 'A2', category: 'seasons', example_de: 'Im Winter schneit es.', example_am: 'ክረምት በረዶ ይጥላል።' },

  // ── Weather (የአየር ሁኔታ) ──
  { german: 'das Wetter', amharic: 'የአየር ሁኔታ', pronunciation: 'ዳስ ቬተር', level: 'A1', category: 'weather', example_de: 'Wie ist das Wetter heute?', example_am: 'ዛሬ የአየር ሁኔታው እንዴት ነው?' },
  { german: 'die Sonne', amharic: 'ፀሐይ', pronunciation: 'ዲ ዞነ', level: 'A1', category: 'weather', example_de: 'Die Sonne scheint.', example_am: 'ፀሐይ ብርሃን ትሰጣለች።' },
  { german: 'der Regen', amharic: 'ዝናብ', pronunciation: 'ዴር ሬገን', level: 'A1', category: 'weather', example_de: 'Es gibt viel Regen im April.', example_am: 'ኤፕሪል ብዙ ዝናብ አለ።' },
  { german: 'der Schnee', amharic: 'በረዶ', pronunciation: 'ዴር ሽኔ', level: 'A2', category: 'weather', example_de: 'Die Kinder spielen im Schnee.', example_am: 'ልጆቹ በበረዶ ውስጥ ይጫወታሉ።' },
  { german: 'der Wind', amharic: 'ንፋስ', pronunciation: 'ዴር ቪንት', level: 'A2', category: 'weather', example_de: 'Heute weht starker Wind.', example_am: 'ዛሬ ጠንካራ ንፋስ ይነፍሳል።' },
  { german: 'kalt', amharic: 'ቀዝቃዛ', pronunciation: 'ካልት', level: 'A1', category: 'weather', example_de: 'Im Winter ist es kalt.', example_am: 'ክረምት ቀዝቃዛ ነው።' },
  { german: 'warm', amharic: 'ሞቃት', pronunciation: 'ቫርም', level: 'A1', category: 'weather', example_de: 'Heute ist es warm.', example_am: 'ዛሬ ሞቃት ነው።' },
  { german: 'heiß', amharic: 'ሙቅ / ትኩስ', pronunciation: 'ሃይስ', level: 'A1', category: 'weather', example_de: 'Der Sommer in Berlin ist heiß.', example_am: 'የበርሊን በጋ ሙቅ ነው።' },
  { german: 'die Wolke', amharic: 'ደመና', pronunciation: 'ዲ ቮልከ', level: 'A2', category: 'weather', example_de: 'Der Himmel ist voller Wolken.', example_am: 'ሰማዩ ደመና ሞልቷል።' },
  { german: 'der Sturm', amharic: 'ማዕበል', pronunciation: 'ዴር ሽቱርም', level: 'B1', category: 'weather', example_de: 'Ein Sturm kommt heute Nacht.', example_am: 'ዛሬ ማታ ማዕበል ይመጣል።' },
  { german: 'sonnig', amharic: 'ፀሐያማ', pronunciation: 'ዞኒሽ', level: 'A2', category: 'weather', example_de: 'Morgen wird es sonnig.', example_am: 'ነገ ፀሐያማ ይሆናል።' },
  { german: 'bewölkt', amharic: 'ደመናማ', pronunciation: 'ቤቮልክት', level: 'A2', category: 'weather', example_de: 'Es ist bewölkt, aber trocken.', example_am: 'ደመናማ ነው ግን ደረቅ ነው።' },

  // ── Body (ሰውነት) ──
  { german: 'der Kopf', amharic: 'ራስ', pronunciation: 'ዴር ኮፕፍ', level: 'A1', category: 'body', example_de: 'Mein Kopf tut weh.', example_am: 'ራሴ ያመኛል።' },
  { german: 'das Auge', amharic: 'ዓይን', pronunciation: 'ዳስ አውገ', level: 'A1', category: 'body', example_de: 'Sie hat blaue Augen.', example_am: 'ሰማያዊ ዓይን አላት።' },
  { german: 'die Nase', amharic: 'አፍንጫ', pronunciation: 'ዲ ናዘ', level: 'A1', category: 'body', example_de: 'Die Nase ist kalt.', example_am: 'አፍንጫው ቀዝቃዛ ነው።' },
  { german: 'der Mund', amharic: 'አፍ', pronunciation: 'ዴር ሙንት', level: 'A1', category: 'body', example_de: 'Mach den Mund auf!', example_am: 'አፍህን ክፈት!' },
  { german: 'das Ohr', amharic: 'ጆሮ', pronunciation: 'ዳስ ኦር', level: 'A1', category: 'body', example_de: 'Ich höre mit den Ohren.', example_am: 'በጆሮዬ እሰማለሁ።' },
  { german: 'die Hand', amharic: 'እጅ', pronunciation: 'ዲ ሃንት', level: 'A1', category: 'body', example_de: 'Wasch dir die Hände!', example_am: 'እጆችህን ታጠብ!' },
  { german: 'der Fuß', amharic: 'እግር', pronunciation: 'ዴር ፉስ', level: 'A1', category: 'body', example_de: 'Mein Fuß schmerzt.', example_am: 'እግሬ ያመኛል።' },
  { german: 'das Herz', amharic: 'ልብ', pronunciation: 'ዳስ ሄርጽ', level: 'A2', category: 'body', example_de: 'Das Herz schlägt schnell.', example_am: 'ልቡ በፍጥነት ይመታል።' },
  { german: 'der Bauch', amharic: 'ሆድ', pronunciation: 'ዴር ባውኽ', level: 'A2', category: 'body', example_de: 'Ich habe Bauchschmerzen.', example_am: 'ሆዴ ያመኛል።' },
  { german: 'der Rücken', amharic: 'ጀርባ', pronunciation: 'ዴር ሪኬን', level: 'A2', category: 'body', example_de: 'Mein Rücken tut weh.', example_am: 'ጀርባዬ ያመኛል።' },
  { german: 'der Finger', amharic: 'ጣት', pronunciation: 'ዴር ፊንገር', level: 'A1', category: 'body', example_de: 'Ich habe zehn Finger.', example_am: 'አሥር ጣቶች አሉኝ።' },
  { german: 'das Haar', amharic: 'ፀጉር', pronunciation: 'ዳስ ሃር', level: 'A1', category: 'body', example_de: 'Sie hat schwarzes Haar.', example_am: 'ጥቁር ፀጉር አላት።' },
  { german: 'das Bein', amharic: 'እግር / ጭን', pronunciation: 'ዳስ ባይን', level: 'A2', category: 'body', example_de: 'Er hat lange Beine.', example_am: 'ረጅም እግሮች አሉት።' },
  { german: 'der Zahn', amharic: 'ጥርስ', pronunciation: 'ዴር ጻን', level: 'A2', category: 'body', example_de: 'Putz dir die Zähne!', example_am: 'ጥርስህን ታጠብ!' },

  // ── Clothing (ልብስ) ──
  { german: 'das Hemd', amharic: 'ሸሚዝ', pronunciation: 'ዳስ ሄምት', level: 'A1', category: 'clothing', example_de: 'Das Hemd ist weiß.', example_am: 'ሸሚዙ ነጭ ነው።' },
  { german: 'die Hose', amharic: 'ሱሪ', pronunciation: 'ዲ ሆዘ', level: 'A1', category: 'clothing', example_de: 'Die Hose ist zu lang.', example_am: 'ሱሪው በጣም ረጅም ነው።' },
  { german: 'der Schuh', amharic: 'ጫማ', pronunciation: 'ዴር ሹ', level: 'A1', category: 'clothing', example_de: 'Zieh deine Schuhe an!', example_am: 'ጫማህን ልበስ!' },
  { german: 'die Jacke', amharic: 'ጃኬት', pronunciation: 'ዲ ያከ', level: 'A2', category: 'clothing', example_de: 'Nimm eine Jacke mit, es ist kalt.', example_am: 'ጃኬት ይዘህ ሂድ፣ ቀዝቃዛ ነው።' },
  { german: 'der Mantel', amharic: 'ኮት', pronunciation: 'ዴር ማንተል', level: 'A2', category: 'clothing', example_de: 'Im Winter trage ich einen Mantel.', example_am: 'ክረምት ኮት እለብሳለሁ።' },
  { german: 'die Mütze', amharic: 'ኮፍያ', pronunciation: 'ዲ ሚጼ', level: 'A2', category: 'clothing', example_de: 'Die Mütze hält warm.', example_am: 'ኮፍያው ሙቀት ይሰጣል።' },
  { german: 'das Kleid', amharic: 'ቀሚስ', pronunciation: 'ዳስ ክላይት', level: 'A2', category: 'clothing', example_de: 'Das Kleid ist sehr schön.', example_am: 'ቀሚሱ በጣም ቆንጆ ነው።' },
  { german: 'die Socke', amharic: 'ካልሲ', pronunciation: 'ዲ ዞከ', level: 'A1', category: 'clothing', example_de: 'Wo ist meine zweite Socke?', example_am: 'ሁለተኛ ካልሲዬ የት ነው?' },
  { german: 'der Schal', amharic: 'ሻርፕ', pronunciation: 'ዴር ሻል', level: 'A2', category: 'clothing', example_de: 'Der Schal ist aus Wolle.', example_am: 'ሻርፕው ከሱፍ ነው።' },
  { german: 'die Brille', amharic: 'መነጽር', pronunciation: 'ዲ ብሪለ', level: 'A2', category: 'clothing', example_de: 'Ich brauche eine neue Brille.', example_am: 'አዲስ መነጽር እፈልጋለሁ።' },

  // ── House & furniture (ቤት እና ቁሳቁስ) ──
  { german: 'die Küche', amharic: 'ማዕድ ቤት / ኩሽና', pronunciation: 'ዲ ኪሸ', level: 'A1', category: 'house', example_de: 'Ich koche in der Küche.', example_am: 'ኩሽና ውስጥ አብስላለሁ።' },
  { german: 'das Schlafzimmer', amharic: 'መኝታ ክፍል', pronunciation: 'ዳስ ሽላፍጺመር', level: 'A2', category: 'house', example_de: 'Das Schlafzimmer ist oben.', example_am: 'መኝታ ክፍሉ ከላይ ነው።' },
  { german: 'das Badezimmer', amharic: 'መታጠቢያ ቤት', pronunciation: 'ዳስ ባደጺመር', level: 'A2', category: 'house', example_de: 'Das Badezimmer ist klein.', example_am: 'መታጠቢያ ቤቱ ትንሽ ነው።' },
  { german: 'das Wohnzimmer', amharic: 'ሳሎን', pronunciation: 'ዳስ ቮንጺመር', level: 'A2', category: 'house', example_de: 'Wir sitzen im Wohnzimmer.', example_am: 'ሳሎን ውስጥ ተቀምጠናል።' },
  { german: 'die Tür', amharic: 'በር', pronunciation: 'ዲ ቲር', level: 'A1', category: 'house', example_de: 'Bitte mach die Tür zu.', example_am: 'እባክህ በሩን ዝጋ።' },
  { german: 'das Fenster', amharic: 'መስኮት', pronunciation: 'ዳስ ፌንስተር', level: 'A1', category: 'house', example_de: 'Öffne das Fenster!', example_am: 'መስኮቱን ክፈት!' },
  { german: 'der Tisch', amharic: 'ጠረጴዛ', pronunciation: 'ዴር ቲሽ', level: 'A1', category: 'house', example_de: 'Das Essen ist auf dem Tisch.', example_am: 'ምግቡ ጠረጴዛ ላይ ነው።' },
  { german: 'der Stuhl', amharic: 'ወንበር', pronunciation: 'ዴር ሽቱል', level: 'A1', category: 'house', example_de: 'Setz dich auf den Stuhl.', example_am: 'ወንበር ላይ ተቀመጥ።' },
  { german: 'das Bett', amharic: 'አልጋ', pronunciation: 'ዳስ ቤት', level: 'A1', category: 'house', example_de: 'Das Bett ist gemacht.', example_am: 'አልጋው ተነጥፏል።' },
  { german: 'der Kühlschrank', amharic: 'ማቀዝቀዣ', pronunciation: 'ዴር ኩልሽራንክ', level: 'A2', category: 'house', example_de: 'Die Milch ist im Kühlschrank.', example_am: 'ወተቱ ማቀዝቀዣ ውስጥ ነው።' },
  { german: 'der Schlüssel', amharic: 'ቁልፍ', pronunciation: 'ዴር ሽሊሰል', level: 'A1', category: 'house', example_de: 'Wo ist der Schlüssel?', example_am: 'ቁልፉ የት ነው?' },
  { german: 'die Lampe', amharic: 'መብራት', pronunciation: 'ዲ ላምፐ', level: 'A1', category: 'house', example_de: 'Mach die Lampe an.', example_am: 'መብራቱን አብራ።' },
  { german: 'die Treppe', amharic: 'ደረጃ', pronunciation: 'ዲ ትሬፐ', level: 'A2', category: 'house', example_de: 'Die Treppe ist steil.', example_am: 'ደረጃው ገደላማ ነው።' },
  { german: 'der Spiegel', amharic: 'መስታወት', pronunciation: 'ዴር ሽፒገል', level: 'A2', category: 'house', example_de: 'Ich schaue in den Spiegel.', example_am: 'መስታወት ውስጥ አያለሁ።' },

  // ── Shopping (ግብይት) ──
  { german: 'der Preis', amharic: 'ዋጋ', pronunciation: 'ዴር ፕራይስ', level: 'A1', category: 'shopping', example_de: 'Was ist der Preis?', example_am: 'ዋጋው ስንት ነው?' },
  { german: 'teuer', amharic: 'ውድ', pronunciation: 'ቶይኤር', level: 'A1', category: 'shopping', example_de: 'Die Jacke ist zu teuer.', example_am: 'ጃኬቱ በጣም ውድ ነው።' },
  { german: 'billig', amharic: 'ርካሽ', pronunciation: 'ቢሊሽ', level: 'A1', category: 'shopping', example_de: 'Hier ist es billig.', example_am: 'እዚህ ርካሽ ነው።' },
  { german: 'der Supermarkt', amharic: 'ሱፐርማርኬት', pronunciation: 'ዴር ዙፐርማርክት', level: 'A1', category: 'shopping', example_de: 'Ich gehe zum Supermarkt.', example_am: 'ወደ ሱፐርማርኬት እሄዳለሁ።' },
  { german: 'der Markt', amharic: 'ገበያ', pronunciation: 'ዴር ማርክት', level: 'A1', category: 'shopping', example_de: 'Am Samstag gehen wir zum Markt.', example_am: 'ቅዳሜ ገበያ እንሄዳለን።' },
  { german: 'bezahlen', amharic: 'መክፈል', pronunciation: 'ቤጻለን', level: 'A1', category: 'shopping', example_de: 'Wo kann ich bezahlen?', example_am: 'የት ልክፈል እችላለሁ?' },
  { german: 'die Kasse', amharic: 'ገንዘብ ማስከፈያ', pronunciation: 'ዲ ካሰ', level: 'A2', category: 'shopping', example_de: 'Bitte gehen Sie zur Kasse.', example_am: 'እባክዎ ወደ ካሳው ይሂዱ።' },
  { german: 'das Angebot', amharic: 'ቅናሽ', pronunciation: 'ዳስ አንገቦት', level: 'A2', category: 'shopping', example_de: 'Das ist ein gutes Angebot.', example_am: 'ይህ ጥሩ ቅናሽ ነው።' },
  { german: 'die Quittung', amharic: 'ደረሰኝ', pronunciation: 'ዲ ክቪቱንግ', level: 'A2', category: 'shopping', example_de: 'Kann ich die Quittung haben?', example_am: 'ደረሰኝ ልታሰጡኝ ትችላላችሁ?' },
  { german: 'der Kunde', amharic: 'ደንበኛ', pronunciation: 'ዴር ኩንደ', level: 'A2', category: 'shopping', example_de: 'Der Kunde ist zufrieden.', example_am: 'ደንበኛው ረክቷል።' },
  { german: 'umtauschen', amharic: 'መቀየር', pronunciation: 'ኡምታውሸን', level: 'B1', category: 'shopping', example_de: 'Kann ich das umtauschen?', example_am: 'ይህን ልቀይር እችላለሁ?' },

  // ── Transport (ትራንስፖርት) ──
  { german: 'der Bus', amharic: 'አውቶቡስ', pronunciation: 'ዴር ቡስ', level: 'A1', category: 'transport', example_de: 'Der Bus kommt in fünf Minuten.', example_am: 'አውቶቡሱ በአምስት ደቂቃ ይመጣል።' },
  { german: 'der Zug', amharic: 'ባቡር', pronunciation: 'ዴር ጹክ', level: 'A1', category: 'transport', example_de: 'Der Zug fährt nach München.', example_am: 'ባቡሩ ወደ ሙኒክ ይሄዳል።' },
  { german: 'das Fahrrad', amharic: 'ብስክሌት', pronunciation: 'ዳስ ፋርራት', level: 'A1', category: 'transport', example_de: 'Ich fahre mit dem Fahrrad zur Arbeit.', example_am: 'በብስክሌት ወደ ሥራ እሄዳለሁ።' },
  { german: 'das Flugzeug', amharic: 'አውሮፕላን', pronunciation: 'ዳስ ፍሉክጾይክ', level: 'A2', category: 'transport', example_de: 'Das Flugzeug fliegt nach Addis Abeba.', example_am: 'አውሮፕላኑ ወደ አዲስ አበባ ይበርራል።' },
  { german: 'die Haltestelle', amharic: 'ማቆሚያ', pronunciation: 'ዲ ሃልተሽቴለ', level: 'A2', category: 'transport', example_de: 'Die Haltestelle ist dort drüben.', example_am: 'ማቆሚያው ከዚያ በኩል ነው።' },
  { german: 'die Fahrkarte', amharic: 'ትኬት', pronunciation: 'ዲ ፋርካርተ', level: 'A2', category: 'transport', example_de: 'Ich brauche eine Fahrkarte.', example_am: 'ትኬት እፈልጋለሁ።' },
  { german: 'der Flughafen', amharic: 'አውሮፕላን ማረፊያ', pronunciation: 'ዴር ፍሉክሃፈን', level: 'A2', category: 'transport', example_de: 'Der Flughafen ist weit weg.', example_am: 'አውሮፕላን ማረፊያው ሩቅ ነው።' },
  { german: 'die Straße', amharic: 'መንገድ', pronunciation: 'ዲ ሽትራሰ', level: 'A1', category: 'transport', example_de: 'Die Straße ist lang.', example_am: 'መንገዱ ረጅም ነው።' },
  { german: 'ankommen', amharic: 'መድረስ', pronunciation: 'አንኮመን', level: 'A2', category: 'transport', example_de: 'Wann kommst du an?', example_am: 'መቼ ትደርሳለህ?' },
  { german: 'abfahren', amharic: 'መነሳት', pronunciation: 'አብፋረን', level: 'A2', category: 'transport', example_de: 'Der Zug fährt um neun ab.', example_am: 'ባቡሩ በዘጠኝ ሰዓት ይነሳል።' },
  { german: 'die U-Bahn', amharic: 'የመሬት ውስጥ ባቡር', pronunciation: 'ዲ ኡ-ባን', level: 'A2', category: 'transport', example_de: 'Ich fahre mit der U-Bahn.', example_am: 'በየመሬት ውስጥ ባቡር እሄዳለሁ።' },
  { german: 'das Taxi', amharic: 'ታክሲ', pronunciation: 'ዳስ ታክሲ', level: 'A1', category: 'transport', example_de: 'Rufen wir ein Taxi?', example_am: 'ታክሲ እንጥራ?' },

  // ── Animals (እንስሳት) ──
  { german: 'der Hund', amharic: 'ውሻ', pronunciation: 'ዴር ሁንት', level: 'A1', category: 'animals', example_de: 'Der Hund bellt laut.', example_am: 'ውሻው ጮክ ብሎ ይጮሃል።' },
  { german: 'die Katze', amharic: 'ድመት', pronunciation: 'ዲ ካጸ', level: 'A1', category: 'animals', example_de: 'Die Katze schläft auf dem Sofa.', example_am: 'ድመቷ ሶፋ ላይ ተኝታለች።' },
  { german: 'der Vogel', amharic: 'ወፍ', pronunciation: 'ዴር ፎገል', level: 'A1', category: 'animals', example_de: 'Der Vogel singt schön.', example_am: 'ወፉ ቆንጆ ይዘምራል።' },
  { german: 'der Fisch', amharic: 'ዓሣ', pronunciation: 'ዴር ፊሽ', level: 'A1', category: 'animals', example_de: 'Der Fisch schwimmt im See.', example_am: 'ዓሣው ሐይቅ ውስጥ ይዋኛል።' },
  { german: 'das Pferd', amharic: 'ፈረስ', pronunciation: 'ዳስ ፕፌርት', level: 'A2', category: 'animals', example_de: 'Das Pferd läuft schnell.', example_am: 'ፈረሱ በፍጥነት ይሮጣል።' },
  { german: 'die Kuh', amharic: 'ላም', pronunciation: 'ዲ ኩ', level: 'A1', category: 'animals', example_de: 'Die Kuh gibt Milch.', example_am: 'ላሟ ወተት ትሰጣለች።' },
  { german: 'das Schaf', amharic: 'በግ', pronunciation: 'ዳስ ሻፍ', level: 'A2', category: 'animals', example_de: 'Das Schaf frisst Gras.', example_am: 'በጉ ሳር ይበላል።' },
  { german: 'der Elefant', amharic: 'ዝሆን', pronunciation: 'ዴር ኤለፋንት', level: 'A2', category: 'animals', example_de: 'Der Elefant ist das größte Landtier.', example_am: 'ዝሆን ትልቁ የየብስ እንስሳ ነው።' },
  { german: 'der Löwe', amharic: 'አንበሳ', pronunciation: 'ዴር ሎቬ', level: 'A2', category: 'animals', example_de: 'Der Löwe ist der König der Tiere.', example_am: 'አንበሳ የእንስሳት ንጉሥ ነው።' },
  { german: 'das Huhn', amharic: 'ዶሮ', pronunciation: 'ዳስ ሁን', level: 'A2', category: 'animals', example_de: 'Das Huhn legt Eier.', example_am: 'ዶሮዋ እንቁላል ትጥላለች።' },

  // ── Nature (ተፈጥሮ) ──
  { german: 'der Baum', amharic: 'ዛፍ', pronunciation: 'ዴር ባውም', level: 'A1', category: 'nature', example_de: 'Der Baum ist sehr alt.', example_am: 'ዛፉ በጣም ያረጀ ነው።' },
  { german: 'die Blume', amharic: 'አበባ', pronunciation: 'ዲ ብሉመ', level: 'A1', category: 'nature', example_de: 'Die Blumen sind schön.', example_am: 'አበቦቹ ቆንጆ ናቸው።' },
  { german: 'der Berg', amharic: 'ተራራ', pronunciation: 'ዴር ቤርክ', level: 'A2', category: 'nature', example_de: 'Wir wandern auf den Berg.', example_am: 'ተራራውን እንወጣለን።' },
  { german: 'der Fluss', amharic: 'ወንዝ', pronunciation: 'ዴር ፍሉስ', level: 'A2', category: 'nature', example_de: 'Der Fluss ist lang.', example_am: 'ወንዙ ረጅም ነው።' },
  { german: 'der See', amharic: 'ሐይቅ', pronunciation: 'ዴር ዜ', level: 'A2', category: 'nature', example_de: 'Wir schwimmen im See.', example_am: 'ሐይቅ ውስጥ እንዋኛለን።' },
  { german: 'das Meer', amharic: 'ባህር', pronunciation: 'ዳስ ሜር', level: 'A2', category: 'nature', example_de: 'Das Meer ist blau.', example_am: 'ባህሩ ሰማያዊ ነው።' },
  { german: 'der Wald', amharic: 'ጫካ', pronunciation: 'ዴር ቫልት', level: 'A2', category: 'nature', example_de: 'Im Wald gibt es viele Tiere.', example_am: 'ጫካ ውስጥ ብዙ እንስሳት አሉ።' },
  { german: 'der Garten', amharic: 'አትክልት ቦታ', pronunciation: 'ዴር ጋርተን', level: 'A1', category: 'nature', example_de: 'Die Kinder spielen im Garten.', example_am: 'ልጆቹ ጓሮ ውስጥ ይጫወታሉ።' },
  { german: 'der Himmel', amharic: 'ሰማይ', pronunciation: 'ዴር ሂመል', level: 'A2', category: 'nature', example_de: 'Der Himmel ist blau.', example_am: 'ሰማዩ ሰማያዊ ነው።' },
  { german: 'der Strand', amharic: 'ባህር ዳርቻ', pronunciation: 'ዴር ሽትራንት', level: 'A2', category: 'nature', example_de: 'Wir gehen zum Strand.', example_am: 'ወደ ባህር ዳርቻ እንሄዳለን።' },

  // ── Emotions (ስሜቶች) ──
  { german: 'die Freude', amharic: 'ደስታ', pronunciation: 'ዲ ፍሮይደ', level: 'A2', category: 'emotions', example_de: 'Die Kinder haben große Freude.', example_am: 'ልጆቹ ብዙ ደስታ አላቸው።' },
  { german: 'die Angst', amharic: 'ፍርሃት', pronunciation: 'ዲ አንግስት', level: 'A2', category: 'emotions', example_de: 'Ich habe Angst vor Hunden.', example_am: 'ከውሻ እፈራለሁ።' },
  { german: 'die Liebe', amharic: 'ፍቅር', pronunciation: 'ዲ ሊበ', level: 'A2', category: 'emotions', example_de: 'Liebe ist wichtig.', example_am: 'ፍቅር አስፈላጊ ነው።' },
  { german: 'glücklich', amharic: 'ደስተኛ', pronunciation: 'ግሊክሊሽ', level: 'A1', category: 'emotions', example_de: 'Ich bin sehr glücklich.', example_am: 'በጣም ደስተኛ ነኝ።' },
  { german: 'traurig', amharic: 'ያዘነ', pronunciation: 'ትራውሪሽ', level: 'A1', category: 'emotions', example_de: 'Das Kind ist traurig.', example_am: 'ልጁ ያዝናል።' },
  { german: 'müde', amharic: 'ደክሞ', pronunciation: 'ሚደ', level: 'A1', category: 'emotions', example_de: 'Ich bin müde.', example_am: 'ደክሞኛል።' },
  { german: 'wütend', amharic: 'የተቆጣ', pronunciation: 'ቪተንት', level: 'A2', category: 'emotions', example_de: 'Er ist wütend.', example_am: 'እሱ ተቆጥቷል።' },
  { german: 'zufrieden', amharic: 'ረክቶ', pronunciation: 'ጹፍሪደን', level: 'A2', category: 'emotions', example_de: 'Der Chef ist zufrieden.', example_am: 'ሃላፊው ረክቷል።' },
  { german: 'nervös', amharic: 'ተጨንቆ', pronunciation: 'ነርቮስ', level: 'A2', category: 'emotions', example_de: 'Ich bin nervös vor der Prüfung.', example_am: 'ከፈተና በፊት ተጨንቄአለሁ።' },
  { german: 'stolz', amharic: 'ኩራት', pronunciation: 'ሽቶልጽ', level: 'A2', category: 'emotions', example_de: 'Ich bin stolz auf dich.', example_am: 'በአንተ እኮራለሁ።' },
  { german: 'die Hoffnung', amharic: 'ተስፋ', pronunciation: 'ዲ ሆፍኑንግ', level: 'B1', category: 'emotions', example_de: 'Die Hoffnung stirbt zuletzt.', example_am: 'ተስፋ በመጨረሻ ይሞታል።' },
  { german: 'aufgeregt', amharic: 'ጓጉቶ', pronunciation: 'አውፍገሬግት', level: 'A2', category: 'emotions', example_de: 'Die Kinder sind aufgeregt.', example_am: 'ልጆቹ ጓጉተዋል።' },

  // ── Professions (ሙያዎች) ──
  { german: 'der Lehrer', amharic: 'መምህር', pronunciation: 'ዴር ሌረር', level: 'A1', category: 'professions', example_de: 'Der Lehrer erklärt die Grammatik.', example_am: 'መምህሩ ሰዋስዉን ያስረዳል።' },
  { german: 'der Ingenieur', amharic: 'መሐንዲስ', pronunciation: 'ዴር ኢንጀንዩር', level: 'A2', category: 'professions', example_de: 'Er arbeitet als Ingenieur.', example_am: 'መሐንዲስ ሆኖ ይሰራል።' },
  { german: 'die Krankenschwester', amharic: 'ነርስ', pronunciation: 'ዲ ክራንከንሽቬስተር', level: 'A2', category: 'professions', example_de: 'Die Krankenschwester hilft den Patienten.', example_am: 'ነርሷ ታካሚዎቹን ትረዳለች።' },
  { german: 'der Polizist', amharic: 'ፖሊስ', pronunciation: 'ዴር ፖሊጺስት', level: 'A2', category: 'professions', example_de: 'Der Polizist regelt den Verkehr.', example_am: 'ፖሊሱ ትራፊክ ይቆጣጠራል።' },
  { german: 'der Koch', amharic: 'ምግብ አብሳይ', pronunciation: 'ዴር ኮኽ', level: 'A2', category: 'professions', example_de: 'Der Koch bereitet das Essen vor.', example_am: 'ምግብ አብሳዩ ምግቡን ያዘጋጃል።' },
  { german: 'der Fahrer', amharic: 'ሾፌር', pronunciation: 'ዴር ፋረር', level: 'A2', category: 'professions', example_de: 'Der Fahrer kennt den Weg.', example_am: 'ሾፌሩ መንገዱን ያውቃል።' },
  { german: 'der Übersetzer', amharic: 'ተርጓሚ', pronunciation: 'ዴር ኡበርዜጸር', level: 'B1', category: 'professions', example_de: 'Der Übersetzer spricht drei Sprachen.', example_am: 'ተርጓሚው ሦስት ቋንቋ ይናገራል።' },
  { german: 'der Programmierer', amharic: 'ፕሮግራመር', pronunciation: 'ዴር ፕሮግራሚረር', level: 'B1', category: 'professions', example_de: 'Der Programmierer schreibt Software.', example_am: 'ፕሮግራመሩ ሶፍትዌር ይጽፋል።' },
  { german: 'der Verkäufer', amharic: 'ሻጭ', pronunciation: 'ዴር ፌርኮይፈር', level: 'A2', category: 'professions', example_de: 'Der Verkäufer berät die Kunden.', example_am: 'ሻጩ ደንበኞቹን ይመክራል።' },
  { german: 'der Rechtsanwalt', amharic: 'ጠበቃ', pronunciation: 'ዴር ሬሽትስአንቫልት', level: 'B1', category: 'professions', example_de: 'Der Rechtsanwalt vertritt mich.', example_am: 'ጠበቃው ይወክለኛል።' },
  { german: 'der Zahnarzt', amharic: 'የጥርስ ሐኪም', pronunciation: 'ዴር ጻንአርጽት', level: 'A2', category: 'professions', example_de: 'Ich gehe zum Zahnarzt.', example_am: 'ወደ የጥርስ ሐኪም እሄዳለሁ።' },
  { german: 'der Bauer', amharic: 'ገበሬ', pronunciation: 'ዴር ባውኤር', level: 'A2', category: 'professions', example_de: 'Der Bauer arbeitet auf dem Feld.', example_am: 'ገበሬው ማሳ ላይ ይሰራል።' },

  // ── Education (ትምህርት) ──
  { german: 'die Universität', amharic: 'ዩኒቨርሲቲ', pronunciation: 'ዲ ኡኒቨርዚቴት', level: 'A2', category: 'education', example_de: 'Ich studiere an der Universität.', example_am: 'ዩኒቨርሲቲ ውስጥ እማራለሁ።' },
  { german: 'die Prüfung', amharic: 'ፈተና', pronunciation: 'ዲ ፕሪፉንግ', level: 'A2', category: 'education', example_de: 'Die Prüfung ist nächste Woche.', example_am: 'ፈተናው በሚቀጥለው ሳምንት ነው።' },
  { german: 'die Hausaufgabe', amharic: 'የቤት ስራ', pronunciation: 'ዲ ሃውስአውፍጋበ', level: 'A1', category: 'education', example_de: 'Hast du die Hausaufgabe gemacht?', example_am: 'የቤት ስራ ሰርተሃል?' },
  { german: 'die Bibliothek', amharic: 'ቤተ-መጻሕፍት', pronunciation: 'ዲ ቢብሊዮቴክ', level: 'A2', category: 'education', example_de: 'Ich lerne in der Bibliothek.', example_am: 'ቤተ-መጻሕፍት ውስጥ እማራለሁ።' },
  { german: 'der Kurs', amharic: 'ኮርስ', pronunciation: 'ዴር ኩርስ', level: 'A1', category: 'education', example_de: 'Der Deutschkurs beginnt um neun.', example_am: 'የጀርመንኛ ኮርስ በዘጠኝ ይጀምራል።' },
  { german: 'der Schüler', amharic: 'ተማሪ', pronunciation: 'ዴር ሹለር', level: 'A1', category: 'education', example_de: 'Die Schüler lernen fleißig.', example_am: 'ተማሪዎቹ በትጋት ይማራሉ።' },
  { german: 'die Note', amharic: 'ውጤት / ነጥብ', pronunciation: 'ዲ ኖተ', level: 'A2', category: 'education', example_de: 'Ich habe eine gute Note bekommen.', example_am: 'ጥሩ ውጤት አግኝቻለሁ።' },
  { german: 'bestehen', amharic: 'ማለፍ (ፈተና)', pronunciation: 'ቤሽቴኤን', level: 'B1', category: 'education', example_de: 'Ich habe die Prüfung bestanden!', example_am: 'ፈተናውን አልፌያለሁ!' },
  { german: 'das Zeugnis', amharic: 'የምስክር ወረቀት', pronunciation: 'ዳስ ጾይግኒስ', level: 'B1', category: 'education', example_de: 'Ich brauche mein Zeugnis.', example_am: 'የምስክር ወረቀቴን እፈልጋለሁ።' },
  { german: 'der Bleistift', amharic: 'እርሳስ', pronunciation: 'ዴር ብላይሽቲፍት', level: 'A1', category: 'education', example_de: 'Hast du einen Bleistift?', example_am: 'እርሳስ አለህ?' },

  // ── Hobbies (የትርፍ ጊዜ ማሳለፊያ) ──
  { german: 'die Musik', amharic: 'ሙዚቃ', pronunciation: 'ዲ ሙዚክ', level: 'A1', category: 'hobbies', example_de: 'Ich höre gern Musik.', example_am: 'ሙዚቃ ማዳመጥ እወዳለሁ።' },
  { german: 'der Sport', amharic: 'ስፖርት', pronunciation: 'ዴር ሽፖርት', level: 'A1', category: 'hobbies', example_de: 'Sport ist gesund.', example_am: 'ስፖርት ጤናማ ነው።' },
  { german: 'das Lesen', amharic: 'ማንበብ', pronunciation: 'ዳስ ሌዘን', level: 'A1', category: 'hobbies', example_de: 'Lesen ist mein Hobby.', example_am: 'ማንበብ የእኔ ሆቢ ነው።' },
  { german: 'das Kochen', amharic: 'ማብሰል', pronunciation: 'ዳስ ኮኸን', level: 'A1', category: 'hobbies', example_de: 'Kochen macht mir Spaß.', example_am: 'ማብሰል ያስደስተኛል።' },
  { german: 'das Reisen', amharic: 'መጓዝ', pronunciation: 'ዳስ ራይዘን', level: 'A2', category: 'hobbies', example_de: 'Ich liebe das Reisen.', example_am: 'መጓዝ እወዳለሁ።' },
  { german: 'der Film', amharic: 'ፊልም', pronunciation: 'ዴር ፊልም', level: 'A1', category: 'hobbies', example_de: 'Wir schauen einen Film.', example_am: 'ፊልም እናያለን።' },
  { german: 'das Schwimmen', amharic: 'መዋኘት', pronunciation: 'ዳስ ሽቪመን', level: 'A2', category: 'hobbies', example_de: 'Schwimmen ist gut für den Rücken.', example_am: 'መዋኘት ለጀርባ ጥሩ ነው።' },
  { german: 'der Fußball', amharic: 'እግር ኳስ', pronunciation: 'ዴር ፉስባል', level: 'A1', category: 'hobbies', example_de: 'Wir spielen Fußball im Park.', example_am: 'ፓርክ ውስጥ እግር ኳስ እንጫወታለን።' },
  { german: 'das Tanzen', amharic: 'መደነስ', pronunciation: 'ዳስ ታንጸን', level: 'A2', category: 'hobbies', example_de: 'Äthiopisches Tanzen ist wunderbar.', example_am: 'የኢትዮጵያ ዳንስ ድንቅ ነው።' },
  { german: 'das Wandern', amharic: 'የእግር ጉዞ', pronunciation: 'ዳስ ቫንደርን', level: 'A2', category: 'hobbies', example_de: 'Wandern in den Bergen ist schön.', example_am: 'በተራራ ላይ የእግር ጉዞ ማድረግ ቆንጆ ነው።' },

  // ── Technology (ቴክኖሎጂ) ──
  { german: 'das Handy', amharic: 'ሞባይል ስልክ', pronunciation: 'ዳስ ሄንዲ', level: 'A1', category: 'technology', example_de: 'Wo ist mein Handy?', example_am: 'ሞባይሌ የት ነው?' },
  { german: 'der Computer', amharic: 'ኮምፒውተር', pronunciation: 'ዴር ኮምፑተር', level: 'A1', category: 'technology', example_de: 'Ich arbeite am Computer.', example_am: 'ኮምፒውተር ላይ እሰራለሁ።' },
  { german: 'das Internet', amharic: 'ኢንተርኔት', pronunciation: 'ዳስ ኢንተርኔት', level: 'A1', category: 'technology', example_de: 'Hast du Internet?', example_am: 'ኢንተርኔት አለህ?' },
  { german: 'die E-Mail', amharic: 'ኢሜይል', pronunciation: 'ዲ ኢ-ሜይል', level: 'A1', category: 'technology', example_de: 'Ich schreibe eine E-Mail.', example_am: 'ኢሜይል እጽፋለሁ።' },
  { german: 'die Nachricht', amharic: 'መልዕክት', pronunciation: 'ዲ ናኽሪሽት', level: 'A2', category: 'technology', example_de: 'Ich habe eine Nachricht bekommen.', example_am: 'መልዕክት ደርሶኛል።' },
  { german: 'das Passwort', amharic: 'የይለፍ ቃል', pronunciation: 'ዳስ ፓስቮርት', level: 'A2', category: 'technology', example_de: 'Ich habe mein Passwort vergessen.', example_am: 'የይለፍ ቃሌን ረስቻለሁ።' },
  { german: 'das Foto', amharic: 'ፎቶ', pronunciation: 'ዳስ ፎቶ', level: 'A1', category: 'technology', example_de: 'Kann ich ein Foto machen?', example_am: 'ፎቶ ልነሳ እችላለሁ?' },
  { german: 'der Drucker', amharic: 'ማተሚያ / ፕሪንተር', pronunciation: 'ዴር ድሩከር', level: 'A2', category: 'technology', example_de: 'Der Drucker funktioniert nicht.', example_am: 'ማተሚያው አይሰራም።' },
  { german: 'herunterladen', amharic: 'ማውረድ', pronunciation: 'ሄሩንተርላደን', level: 'B1', category: 'technology', example_de: 'Ich lade die App herunter.', example_am: 'አፑን አወርዳለሁ።' },
  { german: 'der Bildschirm', amharic: 'ስክሪን / ማያ ገጽ', pronunciation: 'ዴር ቢልትሽሪም', level: 'A2', category: 'technology', example_de: 'Der Bildschirm ist kaputt.', example_am: 'ስክሪኑ ተበላሽቷል።' },

  // ── Directions (አቅጣጫ) ──
  { german: 'links', amharic: 'ግራ', pronunciation: 'ሊንክስ', level: 'A1', category: 'directions', example_de: 'Biegen Sie links ab.', example_am: 'ወደ ግራ ይታጠፉ።' },
  { german: 'rechts', amharic: 'ቀኝ', pronunciation: 'ሬሽትስ', level: 'A1', category: 'directions', example_de: 'Die Bank ist rechts.', example_am: 'ባንኩ ቀኝ ነው።' },
  { german: 'geradeaus', amharic: 'ቀጥታ', pronunciation: 'ገራደአውስ', level: 'A1', category: 'directions', example_de: 'Gehen Sie geradeaus.', example_am: 'ቀጥታ ይሂዱ።' },
  { german: 'die Kreuzung', amharic: 'መስቀለኛ መንገድ', pronunciation: 'ዲ ክሮይጹንግ', level: 'A2', category: 'directions', example_de: 'An der Kreuzung links abbiegen.', example_am: 'መስቀለኛ መንገድ ላይ ግራ ታጠፉ።' },
  { german: 'die Ampel', amharic: 'የትራፊክ መብራት', pronunciation: 'ዲ አምፐል', level: 'A2', category: 'directions', example_de: 'Warten Sie an der Ampel.', example_am: 'በትራፊክ መብራት ላይ ይጠብቁ።' },
  { german: 'die Brücke', amharic: 'ድልድይ', pronunciation: 'ዲ ብሪከ', level: 'A2', category: 'directions', example_de: 'Gehen Sie über die Brücke.', example_am: 'ድልድዩን ተሻግረው ይሂዱ።' },
  { german: 'gegenüber', amharic: 'ፊት ለፊት', pronunciation: 'ገገኑበር', level: 'A2', category: 'directions', example_de: 'Die Post ist gegenüber.', example_am: 'ፖስታ ቤቱ ፊት ለፊት ነው።' },
  { german: 'neben', amharic: 'ከ...ጎን', pronunciation: 'ኔበን', level: 'A2', category: 'directions', example_de: 'Die Apotheke ist neben der Bank.', example_am: 'ፋርማሲው ከባንኩ ጎን ነው።' },
  { german: 'zwischen', amharic: 'በ...መካከል', pronunciation: 'ጽቪሸን', level: 'A2', category: 'directions', example_de: 'Das Café ist zwischen der Bank und der Post.', example_am: 'ካፌው በባንኩ እና ፖስታ ቤቱ መካከል ነው።' },
  { german: 'in der Nähe', amharic: 'በቅርበት', pronunciation: 'ኢን ዴር ኔኤ', level: 'A2', category: 'directions', example_de: 'Gibt es eine Apotheke in der Nähe?', example_am: 'በቅርበት ፋርማሲ አለ?' },

  // ── Questions (ጥያቄዎች) ──
  { german: 'wer', amharic: 'ማን', pronunciation: 'ቬር', level: 'A1', category: 'questions', example_de: 'Wer ist das?', example_am: 'ይህ ማን ነው?' },
  { german: 'was', amharic: 'ምን', pronunciation: 'ቫስ', level: 'A1', category: 'questions', example_de: 'Was machst du?', example_am: 'ምን እያደረግክ ነው?' },
  { german: 'wo', amharic: 'የት', pronunciation: 'ቮ', level: 'A1', category: 'questions', example_de: 'Wo wohnst du?', example_am: 'የት ነው የምትኖረው?' },
  { german: 'wann', amharic: 'መቼ', pronunciation: 'ቫን', level: 'A1', category: 'questions', example_de: 'Wann kommst du?', example_am: 'መቼ ትመጣለህ?' },
  { german: 'warum', amharic: 'ለምን', pronunciation: 'ቫሩም', level: 'A1', category: 'questions', example_de: 'Warum lernst du Deutsch?', example_am: 'ለምን ጀርመንኛ ትማራለህ?' },
  { german: 'wie', amharic: 'እንዴት', pronunciation: 'ቪ', level: 'A1', category: 'questions', example_de: 'Wie heißt du?', example_am: 'ስምህ ማን ነው?' },
  { german: 'welcher', amharic: 'የትኛው', pronunciation: 'ቬልሸር', level: 'A2', category: 'questions', example_de: 'Welcher Bus fährt zum Bahnhof?', example_am: 'የትኛው አውቶቡስ ወደ ባቡር ጣቢያ ይሄዳል?' },
  { german: 'wie viel', amharic: 'ስንት', pronunciation: 'ቪ ፊል', level: 'A1', category: 'questions', example_de: 'Wie viel kostet das?', example_am: 'ይህ ስንት ያስከፍላል?' },

  // ── Restaurant (ምግብ ቤት) ──
  { german: 'die Speisekarte', amharic: 'ምናሌ', pronunciation: 'ዲ ሽፓይዘካርተ', level: 'A2', category: 'restaurant', example_de: 'Kann ich die Speisekarte sehen?', example_am: 'ምናሌውን ላይ እችላለሁ?' },
  { german: 'bestellen', amharic: 'ማዘዝ', pronunciation: 'ቤሽቴለን', level: 'A2', category: 'restaurant', example_de: 'Ich möchte bestellen.', example_am: 'ማዘዝ እፈልጋለሁ።' },
  { german: 'die Rechnung', amharic: 'ሒሳብ', pronunciation: 'ዲ ሬሽኑንግ', level: 'A2', category: 'restaurant', example_de: 'Die Rechnung, bitte.', example_am: 'ሒሳቡን እባክዎ።' },
  { german: 'das Trinkgeld', amharic: 'ጉርሻ', pronunciation: 'ዳስ ትሪንክገልት', level: 'A2', category: 'restaurant', example_de: 'In Deutschland gibt man Trinkgeld.', example_am: 'ጀርመን ውስጥ ጉርሻ ይሰጣሉ።' },
  { german: 'der Kellner', amharic: 'አስተናጋጅ', pronunciation: 'ዴር ኬልነር', level: 'A2', category: 'restaurant', example_de: 'Der Kellner bringt das Essen.', example_am: 'አስተናጋጁ ምግቡን ያመጣል።' },
  { german: 'das Frühstück', amharic: 'ቁርስ', pronunciation: 'ዳስ ፍሪሽቱክ', level: 'A1', category: 'restaurant', example_de: 'Was gibt es zum Frühstück?', example_am: 'ለቁርስ ምን አለ?' },
  { german: 'das Mittagessen', amharic: 'ምሳ', pronunciation: 'ዳስ ሚታክኤሰን', level: 'A1', category: 'restaurant', example_de: 'Das Mittagessen ist um zwölf.', example_am: 'ምሳ በአሥራ ሁለት ሰዓት ነው።' },
  { german: 'das Abendessen', amharic: 'እራት', pronunciation: 'ዳስ አበንትኤሰን', level: 'A1', category: 'restaurant', example_de: 'Was kochen wir zum Abendessen?', example_am: 'ለእራት ምን እናብስል?' },
  { german: 'der Teller', amharic: 'ሳህን', pronunciation: 'ዴር ቴለር', level: 'A2', category: 'restaurant', example_de: 'Der Teller ist leer.', example_am: 'ሳህኑ ባዶ ነው።' },
  { german: 'das Glas', amharic: 'ብርጭቆ', pronunciation: 'ዳስ ግላስ', level: 'A1', category: 'restaurant', example_de: 'Ein Glas Wasser, bitte.', example_am: 'አንድ ብርጭቆ ውሃ እባክዎ።' },
  { german: 'die Gabel', amharic: 'ሹካ', pronunciation: 'ዲ ጋበል', level: 'A2', category: 'restaurant', example_de: 'Ich brauche eine Gabel.', example_am: 'ሹካ እፈልጋለሁ።' },
  { german: 'das Messer', amharic: 'ቢላ', pronunciation: 'ዳስ ሜሰር', level: 'A2', category: 'restaurant', example_de: 'Das Messer ist scharf.', example_am: 'ቢላው ስለታም ነው።' },

  // ── Health (ጤና) ──
  { german: 'die Erkältung', amharic: 'ጉንፋን', pronunciation: 'ዲ ኤርኬልቱንግ', level: 'A2', category: 'health', example_de: 'Ich habe eine Erkältung.', example_am: 'ጉንፋን ይዞኛል።' },
  { german: 'das Fieber', amharic: 'ትኩሳት', pronunciation: 'ዳስ ፊበር', level: 'A2', category: 'health', example_de: 'Das Kind hat Fieber.', example_am: 'ልጁ ትኩሳት አለው።' },
  { german: 'der Husten', amharic: 'ሳል', pronunciation: 'ዴር ሁስተን', level: 'A2', category: 'health', example_de: 'Ich habe starken Husten.', example_am: 'ከባድ ሳል አለኝ።' },
  { german: 'der Schmerz', amharic: 'ህመም', pronunciation: 'ዴር ሽሜርጽ', level: 'A2', category: 'health', example_de: 'Wo ist der Schmerz?', example_am: 'ህመሙ የት ነው?' },
  { german: 'die Tablette', amharic: 'ክኒን / እንክብል', pronunciation: 'ዲ ታብሌተ', level: 'A2', category: 'health', example_de: 'Nimm eine Tablette.', example_am: 'አንድ ክኒን ውሰድ።' },
  { german: 'die Apotheke', amharic: 'ፋርማሲ', pronunciation: 'ዲ አፖቴከ', level: 'A2', category: 'health', example_de: 'Die Apotheke ist geöffnet.', example_am: 'ፋርማሲው ክፍት ነው።' },
  { german: 'krank', amharic: 'የታመመ', pronunciation: 'ክራንክ', level: 'A1', category: 'health', example_de: 'Ich bin krank.', example_am: 'ታሞኛል።' },
  { german: 'gesund', amharic: 'ጤነኛ', pronunciation: 'ገዙንት', level: 'A1', category: 'health', example_de: 'Er ist wieder gesund.', example_am: 'እንደገና ጤነኛ ሆኗል።' },
  { german: 'der Notfall', amharic: 'ድንገተኛ', pronunciation: 'ዴር ኖትፋል', level: 'B1', category: 'health', example_de: 'Das ist ein Notfall!', example_am: 'ይህ ድንገተኛ ሁኔታ ነው!' },
  { german: 'der Krankenwagen', amharic: 'አምቡላንስ', pronunciation: 'ዴር ክራንከንቫገን', level: 'B1', category: 'health', example_de: 'Rufen Sie einen Krankenwagen!', example_am: 'አምቡላንስ ይጥሩ!' },
  { german: 'der Kopfschmerz', amharic: 'ራስ ምታት', pronunciation: 'ዴር ኮፕፍሽሜርጽ', level: 'A2', category: 'health', example_de: 'Ich habe Kopfschmerzen.', example_am: 'ራስ ምታት አለኝ።' },
  { german: 'die Allergie', amharic: 'አለርጂ', pronunciation: 'ዲ አለርጊ', level: 'B1', category: 'health', example_de: 'Ich habe eine Allergie gegen Nüsse.', example_am: 'ለለውዝ አለርጂ አለኝ።' },
]

export interface LessonSeed {
  title: string
  subtitle: string
  level: 'A1' | 'A2' | 'B1'
  category: string
  content: string
}

export const lessons: LessonSeed[] = [
  {
    title: 'የጀርመንኛ ዓረፍተ-ነገር አወቃቀር',
    subtitle: 'Der Satzbau — ግሡ ሁልጊዜ ሁለተኛ ቦታ ላይ',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `በአማርኛ ቋንቋ አብዛኛውን ጊዜ ግሥ የሚቀመጠው በዓረፍተ-ነገር መጨረሻ ላይ ነው። በጀርመንኛ ግን በዋና ዓረፍተ-ነገር (Hauptsatz) ውስጥ ግሡ ሁልጊዜ **ሁለተኛ ቦታ** ላይ ይቀመጣል።

## ምሳሌዎች

- **Ich lerne Deutsch.** — እኔ ጀርመንኛ እማራለሁ።
- **Heute lerne ich Deutsch.** — ዛሬ ጀርመንኛ እማራለሁ።

ልብ ይበሉ፦ "Heute" (ዛሬ) መጀመሪያ ላይ ሲመጣ፣ ግሡ "lerne" አሁንም ሁለተኛ ቦታውን ይይዛል፤ ባለቤቱ "ich" ወደ ሦስተኛ ቦታ ይዛወራል።

## በጥገኛ ዓረፍተ-ነገር (Nebensatz)

"weil" (ምክንያቱም)፣ "dass" (እንደ) በመሳሰሉ ቃላት የሚጀምር ጥገኛ ዓረፍተ-ነገር ውስጥ ግሡ ወደ **መጨረሻ** ይሄዳል — ልክ እንደ አማርኛ!

- **Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.**
- ትርጉም፦ በጀርመን መሥራት ስለምፈልግ ጀርመንኛ እማራለሁ።

## ማጠቃለያ

| ዓይነት | የግሥ ቦታ |
|-------|---------|
| ዋና ዓረፍተ-ነገር (Hauptsatz) | ሁለተኛ ቦታ |
| ጥያቄ (Ja/Nein-Frage) | መጀመሪያ ቦታ |
| ጥገኛ ዓረፍተ-ነገር (Nebensatz) | መጨረሻ ቦታ |`,
  },
  {
    title: 'የጀርመንኛ አርቲክሎች — Der, Die, Das',
    subtitle: 'የስም ጾታን በቀላሉ ማስታወስ',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `በጀርመንኛ እያንዳንዱ ስም (Nomen) ጾታ አለው፦ ወንድ (der)፣ ሴት (die) ወይም ገለልተኛ (das)። በአማርኛ ይህ ዓይነት ሥርዓት ስለሌለ ለተማሪዎች ከባድ ሊሆን ይችላል — ነገር ግን አቋራጭ ህጎች አሉ!

## Der (ወንድ) የሚሆኑ

- ወንድ ሰዎች፦ der Mann (ወንድ)፣ der Vater (አባት)
- ቀናት እና ወራት፦ der Montag (ሰኞ)፣ der Januar
- በ **-er** የሚጨርሱ ብዙ ስሞች፦ der Lehrer (መምህር)

## Die (ሴት) የሚሆኑ

- ሴት ሰዎች፦ die Frau (ሴት)፣ die Mutter (እናት)
- በ **-ung, -heit, -keit, -schaft** የሚጨርሱ፦ die Zeitung (ጋዜጣ)፣ die Gesundheit (ጤና)
- በ **-e** የሚጨርሱ አብዛኞቹ፦ die Sprache (ቋንቋ)

## Das (ገለልተኛ) የሚሆኑ

- በ **-chen, -lein** የሚጨርሱ (ማሳነሻ)፦ das Mädchen (ልጃገረድ)
- ግሥ-ወለድ ስሞች፦ das Essen (ምግብ)፣ das Lernen (መማር)

## ወሳኝ ምክር

አዲስ ቃል ሲማሩ ሁልጊዜ ከአርቲክሉ ጋር ያጥኑ! "Haus" ብቻ ሳይሆን "**das** Haus" ብለው ያስታውሱ።`,
  },
  {
    title: 'የግሥ አርባ በአሁን ጊዜ',
    subtitle: 'Präsens — regelmäßige Verben',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `የጀርመንኛ ግሦች እንደ ባለቤቱ (ich, du, er/sie/es...) መጨረሻቸው ይለወጣል። ይህ ከአማርኛ ጋር ተመሳሳይ ነው — እኛም "እማራለሁ፣ ትማራለህ፣ ይማራል" እንላለን!

## ምሳሌ — lernen (መማር)

| ጀርመንኛ | አማርኛ |
|---------|--------|
| ich lern**e** | እማራለሁ |
| du lern**st** | ትማራለህ / ትማሪያለሽ |
| er/sie/es lern**t** | ይማራል / ትማራለች |
| wir lern**en** | እንማራለን |
| ihr lern**t** | ትማራላችሁ |
| sie/Sie lern**en** | ይማራሉ / ይማራሉ (አክብሮት) |

## ደንቡ

የግሡን መሠረት (Stamm) ለማግኘት "-en" ን ያስወግዱ፦ lern~~en~~ → **lern**። ከዚያ መጨረሻዎቹን ይጨምሩ፦ **-e, -st, -t, -en, -t, -en**

## ልዩ ግሦች

አንዳንድ ግሦች መሠረታቸው ይለወጣል፦
- **sprechen** (መናገር)፦ ich spreche, du **sprichst**, er **spricht**
- **essen** (መብላት)፦ ich esse, du **isst**, er **isst**
- **schlafen** (መተኛት)፦ ich schlafe, du **schläfst**, er **schläft**`,
  },
  {
    title: 'ራስን ማስተዋወቅ',
    subtitle: 'Sich vorstellen — የመጀመሪያ ውይይት',
    level: 'A1',
    category: 'ንግግር (Conversation)',
    content: `ለ A1 ፈተናም ሆነ ለዕለት ተዕለት ኑሮ ራስን ማስተዋወቅ የመጀመሪያው ክህሎት ነው። እነዚህን ዓረፍተ-ነገሮች በቃል ይያዙ፦

## መሠረታዊ መግለጫዎች

- **Ich heiße Almaz.** — ስሜ አልማዝ ነው።
- **Ich komme aus Äthiopien.** — ከኢትዮጵያ ነው የመጣሁት።
- **Ich wohne in Frankfurt.** — ፍራንክፈርት ውስጥ እኖራለሁ።
- **Ich bin 25 Jahre alt.** — ዕድሜዬ 25 ዓመት ነው።
- **Ich spreche Amharisch, Englisch und ein bisschen Deutsch.** — አማርኛ፣ እንግሊዝኛ እና ትንሽ ጀርመንኛ እናገራለሁ።

## ጥያቄዎች

- **Wie heißen Sie?** — ስምዎ ማን ነው? (አክብሮት)
- **Woher kommst du?** — ከየት ነህ የመጣኸው?
- **Was machst du beruflich?** — ሥራህ ምንድን ነው?

## የባህል ምክር

በጀርመን ባህል ኦፊሴላዊ በሆኑ ቦታዎች (ቢሮ፣ ሐኪም ቤት) ሰዎችን በ **"Sie"** (እርስዎ) መጥራት አክብሮት ነው። ጓደኞችና ወጣቶች እርስ በርስ **"du"** ይባባላሉ።`,
  },
  {
    title: 'ዳቲቭ እና አኩዛቲቭ — መቼ የትኛውን?',
    subtitle: 'Dativ und Akkusativ verstehen',
    level: 'B1',
    category: 'ሰዋስው (Grammar)',
    content: `የጀርመንኛ ኬዞች (Fälle) ለብዙ ተማሪዎች ፈታኝ ናቸው። ቁልፉ ጥያቄ፦ ስሙ **ቀጥተኛ ተሳቢ** ነው ወይስ **ተዘዋዋሪ ተሳቢ**?

## Akkusativ — ቀጥተኛ ተሳቢ (ማንን? ምንን?)

ድርጊቱ በቀጥታ የሚደርስበት፦

- **Ich sehe den Mann.** — ሰውዬውን አያለሁ። (der → **den**)
- **Sie kauft einen Kaffee.** — ቡና ትገዛለች።

## Dativ — ተዘዋዋሪ ተሳቢ (ለማን?)

ድርጊቱ ለማን እንደሚደረግ የሚያሳይ፦

- **Ich helfe dem Kind.** — ልጁን እረዳለሁ። (das → **dem**)
- **Sie gibt der Frau das Buch.** — መጽሐፉን ለሴትዮዋ ትሰጣለች።

## የአርቲክል ለውጦች

| ኬዝ | der | die | das |
|-----|-----|-----|-----|
| Nominativ | der | die | das |
| Akkusativ | **den** | die | das |
| Dativ | **dem** | **der** | **dem** |

## ሁልጊዜ Dativ የሚወስዱ ግሦች

**helfen** (መርዳት)፣ **danken** (ማመስገን)፣ **gefallen** (መውደድ)፣ **gehören** (መሆን/ንብረት)

- Ich danke **dir**. — አመሰግንሃለሁ።
- Das Buch gehört **mir**. — መጽሐፉ የእኔ ነው።`,
  },
  {
    title: 'Perfekt — ያለፈ ጊዜን መናገር',
    subtitle: 'haben ወይስ sein?',
    level: 'A2',
    category: 'ሰዋስው (Grammar)',
    content: `በንግግር ጀርመንኛ ያለፈ ድርጊትን ለመግለጽ **Perfekt** እንጠቀማለን። ሁለት ክፍሎች አሉት፦ ረዳት ግሥ (haben/sein) + Partizip II።

## ከ haben ጋር (አብዛኞቹ ግሦች)

- **Ich habe Deutsch gelernt.** — ጀርመንኛ ተምሬያለሁ።
- **Wir haben Injera gegessen.** — እንጀራ በልተናል።
- **Sie hat viel gearbeitet.** — ብዙ ሰርታለች።

## ከ sein ጋር (የእንቅስቃሴ ግሦች)

ከቦታ ወደ ቦታ መንቀሳቀስን የሚገልጹ ግሦች **sein** ይወስዳሉ፦

- **Ich bin nach Berlin gefahren.** — ወደ በርሊን ሄጃለሁ።
- **Er ist spät gekommen.** — ዘግይቶ መጥቷል።
- **Wir sind zu Fuß gegangen.** — በእግር ሄደናል።

## Partizip II እንዴት ይሠራል?

- መደበኛ ግሦች፦ **ge** + መሠረት + **t** → lernen → **gelernt**
- ጠንካራ ግሦች፦ **ge** + መሠረት + **en** → kommen → **gekommen**
- በ -ieren የሚጨርሱ፦ ge የለም → studieren → **studiert**

## ማስታወሻ

በአማርኛ "ተምሬያለሁ" አንድ ቃል ነው፤ በጀርመንኛ ሁለት ክፍል ይሆናል፦ ረዳት ግሡ ሁለተኛ ቦታ፣ Partizip II መጨረሻ ላይ።`,
  },
]