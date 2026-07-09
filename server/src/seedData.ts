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

  // ── Work & bureaucracy (ሥራ እና አስተዳደር) — B1 ──
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
