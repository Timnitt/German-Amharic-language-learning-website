export interface VocabSeed {
  german: string
  amharic: string
  pronunciation: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
  category: string
  example_de: string
  example_am: string
}

export const vocabulary: VocabSeed[] = [
  { german: 'Hallo', amharic: 'ሰላም', pronunciation: 'ሃሎ', level: 'A1', category: 'greetings', example_de: 'Hallo, wie geht es dir?', example_am: 'ሰላም፣ እንዴት ነህ?' },
  { german: 'Guten Morgen', amharic: 'እንደምን አደሩ', pronunciation: 'ጉተን ሞርገን', level: 'A1', category: 'greetings', example_de: 'Guten Morgen, Frau Müller!', example_am: 'እንደምን አደሩ ወ/ሮ ሙለር!' },
  { german: 'Guten Abend', amharic: 'እንደምን አመሹ', pronunciation: 'ጉተን አበንት', level: 'A1', category: 'greetings', example_de: 'Guten Abend, willkommen!', example_am: 'እንደምን አመሹ፣ እንኳን ደህና መጡ!' },
  { german: 'Auf Wiedersehen', amharic: 'ደህና ይሁኑ', pronunciation: 'አውፍ ቪደርዜን', level: 'A1', category: 'greetings', example_de: 'Auf Wiedersehen, bis morgen!', example_am: 'ደህና ይሁኑ፣ እስከ ነገ!' },
  { german: 'Danke', amharic: 'አመሰግናለሁ', pronunciation: 'ዳንከ', level: 'A1', category: 'greetings', example_de: 'Danke für deine Hilfe.', example_am: 'ስለ እርዳታህ አመሰግናለሁ።' },
  { german: 'Bitte', amharic: 'እባክዎ / ምንም አይደለም', pronunciation: 'ቢተ', level: 'A1', category: 'greetings', example_de: 'Ein Kaffee, bitte.', example_am: 'አንድ ቡና እባክዎ።' },
  { german: 'Entschuldigung', amharic: 'ይቅርታ', pronunciation: 'ኤንትሹልዲጉንግ', level: 'A1', category: 'greetings', example_de: 'Entschuldigung, wo ist der Bahnhof?', example_am: 'ይቅርታ፣ ባቡር ጣቢያው የት ነው?' },
  { german: 'Wie geht es Ihnen?', amharic: 'እንዴት ነዎት?', pronunciation: 'ቪ ጌት ኤስ ኢነን', level: 'A1', category: 'greetings', example_de: 'Guten Tag, wie geht es Ihnen?', example_am: 'እንደምን ዋሉ፣ እንዴት ነዎት?' },
  { german: 'die Familie', amharic: 'ቤተሰብ', pronunciation: 'ዲ ፋሚልየ', level: 'A1', category: 'family', example_de: 'Meine Familie ist groß.', example_am: 'ቤተሰቤ ትልቅ ነው።' },
  { german: 'die Mutter', amharic: 'እናት', pronunciation: 'ዲ ሙተር', level: 'A1', category: 'family', example_de: 'Meine Mutter kocht gern.', example_am: 'እናቴ ማብሰል ትወዳለች።' },
  { german: 'der Vater', amharic: 'አባት', pronunciation: 'ዴር ፋተር', level: 'A1', category: 'family', example_de: 'Mein Vater arbeitet viel.', example_am: 'አባቴ ብዙ ይሰራል።' },
  { german: 'das Kind', amharic: 'ልጅ', pronunciation: 'ዳስ ኪንት', level: 'A1', category: 'family', example_de: 'Das Kind spielt im Garten.', example_am: 'ልጁ በአትክልቱ ውስጥ ይጫወታል።' },
  { german: 'der Bruder', amharic: 'ወንድም', pronunciation: 'ዴር ብሩደር', level: 'A1', category: 'family', example_de: 'Mein Bruder wohnt in Berlin.', example_am: 'ወንድሜ በርሊን ውስጥ ይኖራል።' },
  { german: 'die Schwester', amharic: 'እህት', pronunciation: 'ዲ ሽቬስተር', level: 'A1', category: 'family', example_de: 'Meine Schwester ist Ärztin.', example_am: 'እህቴ ሐኪም ናት።' },
  { german: 'der Freund', amharic: 'ጓደኛ', pronunciation: 'ዴር ፍሮይንት', level: 'A1', category: 'family', example_de: 'Er ist mein bester Freund.', example_am: 'እሱ የቅርብ ጓደኛዬ ነው።' },
  { german: 'die Frau', amharic: 'ሴት / ሚስት', pronunciation: 'ዲ ፍራው', level: 'A1', category: 'family', example_de: 'Die Frau liest ein Buch.', example_am: 'ሴትዮዋ መጽሐፍ ታነባለች።' },
  { german: 'der Mann', amharic: 'ወንድ / ባል', pronunciation: 'ዴር ማን', level: 'A1', category: 'family', example_de: 'Der Mann fährt Auto.', example_am: 'ሰውዬው መኪና ይነዳል።' },
  { german: 'das Wasser', amharic: 'ውሃ', pronunciation: 'ዳስ ቫሰር', level: 'A1', category: 'food', example_de: 'Ich trinke viel Wasser.', example_am: 'ብዙ ውሃ እጠጣለሁ።' },
  { german: 'das Brot', amharic: 'ዳቦ', pronunciation: 'ዳስ ብሮት', level: 'A1', category: 'food', example_de: 'Das Brot ist frisch.', example_am: 'ዳቦው ትኩስ ነው።' },
  { german: 'der Kaffee', amharic: 'ቡና', pronunciation: 'ዴር ካፌ', level: 'A1', category: 'food', example_de: 'Äthiopischer Kaffee ist berühmt.', example_am: 'የኢትዮጵያ ቡና ታዋቂ ነው።' },
  { german: 'der Tee', amharic: 'ሻይ', pronunciation: 'ዴር ቴ', level: 'A1', category: 'food', example_de: 'Möchtest du Tee mit Zucker?', example_am: 'ሻይ ከስኳር ጋር ትፈልጋለህ?' },
  { german: 'die Milch', amharic: 'ወተት', pronunciation: 'ዲ ሚልሽ', level: 'A1', category: 'food', example_de: 'Die Milch ist im Kühlschrank.', example_am: 'ወተቱ ማቀዝቀዣ ውስጥ ነው።' },
  { german: 'das Fleisch', amharic: 'ሥጋ', pronunciation: 'ዳስ ፍላይሽ', level: 'A2', category: 'food', example_de: 'Ich esse kein Fleisch.', example_am: 'ሥጋ አልበላም።' },
  { german: 'der Zucker', amharic: 'ስኳር', pronunciation: 'ዴር ጹከር', level: 'A2', category: 'food', example_de: 'Ohne Zucker, bitte.', example_am: 'ያለ ስኳር እባክዎ።' },
  { german: 'das Salz', amharic: 'ጨው', pronunciation: 'ዳስ ዛልጽ', level: 'A2', category: 'food', example_de: 'Kannst du mir das Salz geben?', example_am: 'ጨዉን ልታቀብለኝ ትችላለህ?' },
  { german: 'das Essen', amharic: 'ምግብ', pronunciation: 'ዳስ ኤሰን', level: 'A1', category: 'food', example_de: 'Das Essen schmeckt sehr gut.', example_am: 'ምግቡ በጣም ጣፋጭ ነው።' },
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
  { german: 'rot', amharic: 'ቀይ', pronunciation: 'ሮት', level: 'A1', category: 'colors', example_de: 'Das Auto ist rot.', example_am: 'መኪናው ቀይ ነው።' },
  { german: 'blau', amharic: 'ሰማያዊ', pronunciation: 'ብላው', level: 'A1', category: 'colors', example_de: 'Der Himmel ist blau.', example_am: 'ሰማዩ ሰማያዊ ነው።' },
  { german: 'grün', amharic: 'አረንጓዴ', pronunciation: 'ግርዩን', level: 'A1', category: 'colors', example_de: 'Die Ampel ist grün.', example_am: 'የትራፊክ መብራቱ አረንጓዴ ነው።' },
  { german: 'gelb', amharic: 'ቢጫ', pronunciation: 'ጌልፕ', level: 'A1', category: 'colors', example_de: 'Die Banane ist gelb.', example_am: 'ሙዙ ቢጫ ነው።' },
  { german: 'schwarz', amharic: 'ጥቁር', pronunciation: 'ሽቫርጽ', level: 'A1', category: 'colors', example_de: 'Ich trinke schwarzen Kaffee.', example_am: 'ጥቁር ቡና እጠጣለሁ።' },
  { german: 'weiß', amharic: 'ነጭ', pronunciation: 'ቫይስ', level: 'A1', category: 'colors', example_de: 'Das Hemd ist weiß.', example_am: 'ሸሚዙ ነጭ ነው።' },
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
  { german: 'heute', amharic: 'ዛሬ', pronunciation: 'ሆይተ', level: 'A1', category: 'time', example_de: 'Heute ist Montag.', example_am: 'ዛሬ ሰኞ ነው።' },
  { german: 'morgen', amharic: 'ነገ', pronunciation: 'ሞርገን', level: 'A1', category: 'time', example_de: 'Morgen habe ich frei.', example_am: 'ነገ እረፍት ነኝ።' },
  { german: 'gestern', amharic: 'ትናንት', pronunciation: 'ጌስተርን', level: 'A1', category: 'time', example_de: 'Gestern hat es geregnet.', example_am: 'ትናንት ዝናብ ዘንቧል።' },
  { german: 'der Tag', amharic: 'ቀን', pronunciation: 'ዴር ታክ', level: 'A1', category: 'time', example_de: 'Der Tag war lang.', example_am: 'ቀኑ ረጅም ነበር።' },
  { german: 'die Nacht', amharic: 'ሌሊት', pronunciation: 'ዲ ናኽት', level: 'A1', category: 'time', example_de: 'Gute Nacht!', example_am: 'ደህና እደሩ!' },
  { german: 'die Woche', amharic: 'ሳምንት', pronunciation: 'ዲ ቮኸ', level: 'A2', category: 'time', example_de: 'Nächste Woche fahre ich nach Hamburg.', example_am: 'በሚቀጥለው ሳምንት ወደ ሃምቡርግ እሄዳለሁ።' },
  { german: 'gut', amharic: 'ጥሩ', pronunciation: 'ጉት', level: 'A1', category: 'adjectives', example_de: 'Das Essen ist gut.', example_am: 'ምግቡ ጥሩ ነው።' },
  { german: 'schlecht', amharic: 'መጥፎ', pronunciation: 'ሽሌሽት', level: 'A1', category: 'adjectives', example_de: 'Das Wetter ist schlecht.', example_am: 'የአየር ሁኔታው መጥፎ ነው።' },
  { german: 'groß', amharic: 'ትልቅ', pronunciation: 'ግሮስ', level: 'A1', category: 'adjectives', example_de: 'Berlin ist eine große Stadt.', example_am: 'በርሊን ትልቅ ከተማ ናት።' },
  { german: 'klein', amharic: 'ትንሽ', pronunciation: 'ክላይን', level: 'A1', category: 'adjectives', example_de: 'Die Wohnung ist klein.', example_am: 'መኖሪያ ቤቱ ትንሽ ነው።' },
  { german: 'schön', amharic: 'ቆንጆ / ውብ', pronunciation: 'ሽዩን', level: 'A1', category: 'adjectives', example_de: 'Das ist ein schöner Tag.', example_am: 'ይህ ውብ ቀን ነው።' },
  { german: 'schnell', amharic: 'ፈጣን', pronunciation: 'ሽኔል', level: 'A2', category: 'adjectives', example_de: 'Der Zug ist sehr schnell.', example_am: 'ባቡሩ በጣም ፈጣን ነው።' },
  { german: 'wichtig', amharic: 'አስፈላጊ', pronunciation: 'ቪሽቲሽ', level: 'A2', category: 'adjectives', example_de: 'Deutsch lernen ist wichtig.', example_am: 'ጀርመንኛ መማር አስፈላጊ ነው።' },
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
  { german: 'der Montag', amharic: 'ሰኞ', pronunciation: 'ዴር ሞንታክ', level: 'A1', category: 'days', example_de: 'Am Montag beginnt die Woche.', example_am: 'ሰኞ ሳምንቱ ይጀምራል።' },
  { german: 'der Dienstag', amharic: 'ማክሰኞ', pronunciation: 'ዴር ዲንስታክ', level: 'A1', category: 'days', example_de: 'Am Dienstag habe ich Deutschkurs.', example_am: 'ማክሰኞ የጀርመንኛ ትምህርት አለኝ።' },
  { german: 'der Mittwoch', amharic: 'ረቡዕ', pronunciation: 'ዴር ሚትቮኽ', level: 'A1', category: 'days', example_de: 'Mittwoch ist die Mitte der Woche.', example_am: 'ረቡዕ የሳምንቱ መሃል ነው።' },
  { german: 'der Donnerstag', amharic: 'ሐሙስ', pronunciation: 'ዴር ዶነርስታክ', level: 'A1', category: 'days', example_de: 'Am Donnerstag gehe ich einkaufen.', example_am: 'ሐሙስ ገበያ እሄዳለሁ።' },
  { german: 'der Freitag', amharic: 'ዓርብ', pronunciation: 'ዴር ፍራይታክ', level: 'A1', category: 'days', example_de: 'Freitag ist mein Lieblingstag.', example_am: 'ዓርብ የምወደው ቀን ነው።' },
  { german: 'der Samstag', amharic: 'ቅዳሜ', pronunciation: 'ዴር ዛምስታክ', level: 'A1', category: 'days', example_de: 'Am Samstag schlafe ich lange.', example_am: 'ቅዳሜ ብዙ እተኛለሁ።' },
  { german: 'der Sonntag', amharic: 'እሑድ', pronunciation: 'ዴር ዞንታክ', level: 'A1', category: 'days', example_de: 'Sonntag ist Ruhetag.', example_am: 'እሑድ የእረፍት ቀን ነው።' },
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
  { german: 'der Frühling', amharic: 'ጸደይ', pronunciation: 'ዴር ፍሪውሊንግ', level: 'A2', category: 'seasons', example_de: 'Im Frühling blühen die Bäume.', example_am: 'ጸደይ ዛፎች ያብባሉ።' },
  { german: 'der Sommer', amharic: 'በጋ', pronunciation: 'ዴር ዞመር', level: 'A2', category: 'seasons', example_de: 'Im Sommer ist es warm.', example_am: 'በበጋ ሞቃት ነው።' },
  { german: 'der Herbst', amharic: 'መኸር', pronunciation: 'ዴር ሄርብስት', level: 'A2', category: 'seasons', example_de: 'Im Herbst fallen die Blätter.', example_am: 'መኸር ቅጠሎች ይረግፋሉ።' },
  { german: 'der Winter', amharic: 'ክረምት', pronunciation: 'ዴር ቪንተር', level: 'A2', category: 'seasons', example_de: 'Im Winter schneit es.', example_am: 'ክረምት በረዶ ይጥላል።' },
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
  { german: 'wer', amharic: 'ማን', pronunciation: 'ቬር', level: 'A1', category: 'questions', example_de: 'Wer ist das?', example_am: 'ይህ ማን ነው?' },
  { german: 'was', amharic: 'ምን', pronunciation: 'ቫስ', level: 'A1', category: 'questions', example_de: 'Was machst du?', example_am: 'ምን እያደረግክ ነው?' },
  { german: 'wo', amharic: 'የት', pronunciation: 'ቮ', level: 'A1', category: 'questions', example_de: 'Wo wohnst du?', example_am: 'የት ነው የምትኖረው?' },
  { german: 'wann', amharic: 'መቼ', pronunciation: 'ቫን', level: 'A1', category: 'questions', example_de: 'Wann kommst du?', example_am: 'መቼ ትመጣለህ?' },
  { german: 'warum', amharic: 'ለምን', pronunciation: 'ቫሩም', level: 'A1', category: 'questions', example_de: 'Warum lernst du Deutsch?', example_am: 'ለምን ጀርመንኛ ትማራለህ?' },
  { german: 'wie', amharic: 'እንዴት', pronunciation: 'ቪ', level: 'A1', category: 'questions', example_de: 'Wie heißt du?', example_am: 'ስምህ ማን ነው?' },
  { german: 'welcher', amharic: 'የትኛው', pronunciation: 'ቬልሸር', level: 'A2', category: 'questions', example_de: 'Welcher Bus fährt zum Bahnhof?', example_am: 'የትኛው አውቶቡስ ወደ ባቡር ጣቢያ ይሄዳል?' },
  { german: 'wie viel', amharic: 'ስንት', pronunciation: 'ቪ ፊል', level: 'A1', category: 'questions', example_de: 'Wie viel kostet das?', example_am: 'ይህ ስንት ያስከፍላል?' },
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
  { german: 'der Apfel', amharic: 'ፖም', pronunciation: 'ዴር አፕፈል', level: 'A1', category: 'fruits_vegetables', example_de: 'Der Apfel ist rot.', example_am: 'ፖሙ ቀይ ነው።' },
  { german: 'die Banane', amharic: 'ሙዝ', pronunciation: 'ዲ ባናነ', level: 'A1', category: 'fruits_vegetables', example_de: 'Die Banane ist gelb.', example_am: 'ሙዙ ቢጫ ነው።' },
  { german: 'die Orange', amharic: 'ብርቱካን', pronunciation: 'ዲ ኦራንጀ', level: 'A1', category: 'fruits_vegetables', example_de: 'Ich trinke Orangensaft.', example_am: 'የብርቱካን ጭማቂ እጠጣለሁ።' },
  { german: 'die Tomate', amharic: 'ቲማቲም', pronunciation: 'ዲ ቶማተ', level: 'A1', category: 'fruits_vegetables', example_de: 'Die Tomate ist reif.', example_am: 'ቲማቲሙ ብስል ነው።' },
  { german: 'die Kartoffel', amharic: 'ድንች', pronunciation: 'ዲ ካርቶፈል', level: 'A1', category: 'fruits_vegetables', example_de: 'Kartoffeln sind lecker.', example_am: 'ድንች ጣፋጭ ነው።' },
  { german: 'die Zwiebel', amharic: 'ሽንኩርት', pronunciation: 'ዲ ጽቪበል', level: 'A1', category: 'fruits_vegetables', example_de: 'Die Zwiebel macht mich weinen.', example_am: 'ሽንኩርቱ ያስለቅሰኛል።' },
  { german: 'die Karotte', amharic: 'ካሮት', pronunciation: 'ዲ ካሮተ', level: 'A1', category: 'fruits_vegetables', example_de: 'Die Karotte ist gesund.', example_am: 'ካሮት ጤናማ ነው።' },
  { german: 'der Salat', amharic: 'ሰላጣ', pronunciation: 'ዴር ዛላት', level: 'A1', category: 'fruits_vegetables', example_de: 'Ich esse Salat zum Mittagessen.', example_am: 'ለምሳ ሰላጣ እበላለሁ።' },
  { german: 'die Birne', amharic: 'ፒር', pronunciation: 'ዲ ቢርነ', level: 'A2', category: 'fruits_vegetables', example_de: 'Die Birne schmeckt süß.', example_am: 'ፒሩ ጣፋጭ ነው።' },
  { german: 'die Erdbeere', amharic: 'እንጆሪ', pronunciation: 'ዲ ኤርትቤረ', level: 'A2', category: 'fruits_vegetables', example_de: 'Ich liebe Erdbeeren.', example_am: 'እንጆሪ እወዳለሁ።' },
  { german: 'die Weintraube', amharic: 'ወይን', pronunciation: 'ዲ ቫይንትራውበ', level: 'A2', category: 'fruits_vegetables', example_de: 'Weintrauben sind süß.', example_am: 'ወይን ጣፋጭ ነው።' },
  { german: 'der Knoblauch', amharic: 'ነጭ ሽንኩርት', pronunciation: 'ዴር ክኖብላውኽ', level: 'A2', category: 'fruits_vegetables', example_de: 'Knoblauch ist gesund.', example_am: 'ነጭ ሽንኩርት ጤናማ ነው።' },
  { german: 'die Gurke', amharic: 'ዱባ', pronunciation: 'ዲ ጉርከ', level: 'A2', category: 'fruits_vegetables', example_de: 'Die Gurke ist frisch.', example_am: 'ዱባው ትኩስ ነው።' },
  { german: 'der Pfeffer', amharic: 'በርበሬ', pronunciation: 'ዴር ፕፌፈር', level: 'A2', category: 'fruits_vegetables', example_de: 'Äthiopisches Essen hat viel Pfeffer.', example_am: 'የኢትዮጵያ ምግብ ብዙ በርበሬ አለው።' },
  { german: 'die Zitrone', amharic: 'ሎሚ', pronunciation: 'ዲ ጺትሮነ', level: 'A2', category: 'fruits_vegetables', example_de: 'Tee mit Zitrone, bitte.', example_am: 'ከሎሚ ጋር ሻይ እባክዎ።' },
  { german: 'die Mango', amharic: 'ማንጎ', pronunciation: 'ዲ ማንጎ', level: 'A1', category: 'fruits_vegetables', example_de: 'In Äthiopien gibt es viele Mangos.', example_am: 'ኢትዮጵያ ውስጥ ብዙ ማንጎ አለ።' },
  { german: 'die Avocado', amharic: 'አቮካዶ', pronunciation: 'ዲ አቮካዶ', level: 'A2', category: 'fruits_vegetables', example_de: 'Avocado-Saft ist beliebt in Äthiopien.', example_am: 'የአቮካዶ ጭማቂ ኢትዮጵያ ውስጥ ተወዳጅ ነው።' },
  { german: 'die Paprika', amharic: 'ቃሪያ', pronunciation: 'ዲ ፓፕሪካ', level: 'A2', category: 'fruits_vegetables', example_de: 'Die rote Paprika ist süß.', example_am: 'ቀይ ቃሪያ ጣፋጭ ነው።' },
  { german: 'der Kohl', amharic: 'ጎመን', pronunciation: 'ዴር ኮል', level: 'A2', category: 'fruits_vegetables', example_de: 'Kohl ist ein typisches Gemüse.', example_am: 'ጎመን የተለመደ አትክልት ነው።' },
  { german: 'die Bohne', amharic: 'ባቄላ', pronunciation: 'ዲ ቦነ', level: 'A2', category: 'fruits_vegetables', example_de: 'Bohnen haben viel Protein.', example_am: 'ባቄላ ብዙ ፕሮቲን አለው።' },
  { german: 'die Linse', amharic: 'ምስር', pronunciation: 'ዲ ሊንዘ', level: 'A2', category: 'fruits_vegetables', example_de: 'Linsensuppe ist lecker.', example_am: 'የምስር ሾርባ ጣፋጭ ነው።' },
  { german: 'in', amharic: 'ውስጥ', pronunciation: 'ኢን', level: 'A1', category: 'prepositions', example_de: 'Ich bin in der Schule.', example_am: 'ትምህርት ቤት ውስጥ ነኝ።' },
  { german: 'auf', amharic: 'ላይ', pronunciation: 'አውፍ', level: 'A1', category: 'prepositions', example_de: 'Das Buch liegt auf dem Tisch.', example_am: 'መጽሐፉ ጠረጴዛ ላይ ነው።' },
  { german: 'an', amharic: 'ጋር / ላይ', pronunciation: 'አን', level: 'A1', category: 'prepositions', example_de: 'Das Bild hängt an der Wand.', example_am: 'ስዕሉ ግድግዳ ላይ ተሰቅሏል።' },
  { german: 'unter', amharic: 'ስር', pronunciation: 'ኡንተር', level: 'A1', category: 'prepositions', example_de: 'Die Katze ist unter dem Tisch.', example_am: 'ድመቷ ጠረጴዛ ስር ናት።' },
  { german: 'über', amharic: 'በላይ / ስለ', pronunciation: 'ኡበር', level: 'A1', category: 'prepositions', example_de: 'Die Lampe hängt über dem Tisch.', example_am: 'መብራቱ ጠረጴዛ በላይ ተሰቅሏል።' },
  { german: 'vor', amharic: 'ፊት', pronunciation: 'ፎር', level: 'A1', category: 'prepositions', example_de: 'Er steht vor der Tür.', example_am: 'በሩ ፊት ቆሟል።' },
  { german: 'hinter', amharic: 'ኋላ', pronunciation: 'ሂንተር', level: 'A2', category: 'prepositions', example_de: 'Der Garten ist hinter dem Haus.', example_am: 'ጓሮው ቤቱ ኋላ ነው።' },
  { german: 'mit', amharic: 'ከ...ጋር', pronunciation: 'ሚት', level: 'A1', category: 'prepositions', example_de: 'Ich gehe mit meinem Freund.', example_am: 'ከጓደኛዬ ጋር እሄዳለሁ።' },
  { german: 'ohne', amharic: 'ያለ', pronunciation: 'ኦነ', level: 'A1', category: 'prepositions', example_de: 'Kaffee ohne Zucker, bitte.', example_am: 'ቡና ያለ ስኳር እባክዎ።' },
  { german: 'für', amharic: 'ለ', pronunciation: 'ፊር', level: 'A1', category: 'prepositions', example_de: 'Das Geschenk ist für dich.', example_am: 'ስጦታው ለአንተ ነው።' },
  { german: 'nach', amharic: 'ወደ / በኋላ', pronunciation: 'ናኽ', level: 'A1', category: 'prepositions', example_de: 'Ich fahre nach Berlin.', example_am: 'ወደ በርሊን እሄዳለሁ።' },
  { german: 'von', amharic: 'ከ', pronunciation: 'ፎን', level: 'A1', category: 'prepositions', example_de: 'Ich komme von der Arbeit.', example_am: 'ከሥራ ነው የመጣሁት።' },
  { german: 'zu', amharic: 'ወደ', pronunciation: 'ጹ', level: 'A1', category: 'prepositions', example_de: 'Ich gehe zum Arzt.', example_am: 'ወደ ሐኪም እሄዳለሁ።' },
  { german: 'bei', amharic: 'ጋር / አጠገብ', pronunciation: 'ባይ', level: 'A2', category: 'prepositions', example_de: 'Ich wohne bei meinen Eltern.', example_am: 'ከወላጆቼ ጋር እኖራለሁ።' },
  { german: 'seit', amharic: 'ከ...ጀምሮ', pronunciation: 'ዛይት', level: 'A2', category: 'prepositions', example_de: 'Ich lerne seit zwei Monaten Deutsch.', example_am: 'ከሁለት ወር ጀምሮ ጀርመንኛ እማራለሁ።' },
  { german: 'bis', amharic: 'እስከ', pronunciation: 'ቢስ', level: 'A1', category: 'prepositions', example_de: 'Bis morgen!', example_am: 'እስከ ነገ!' },
  { german: 'durch', amharic: 'በ...ውስጥ / አድርጎ', pronunciation: 'ዱርሽ', level: 'A2', category: 'prepositions', example_de: 'Wir gehen durch den Park.', example_am: 'ፓርኩን ውስጥ አድርገን እንሄዳለን።' },
  { german: 'gegen', amharic: 'ላይ / ፀረ', pronunciation: 'ገገን', level: 'A2', category: 'prepositions', example_de: 'Wir spielen gegen die andere Mannschaft.', example_am: 'ከሌላ ቡድን ጋር እንጫወታለን።' },
  { german: 'um', amharic: 'በ (ሰዓት) / ዙሪያ', pronunciation: 'ኡም', level: 'A1', category: 'prepositions', example_de: 'Der Kurs beginnt um neun Uhr.', example_am: 'ኮርሱ በዘጠኝ ሰዓት ይጀምራል።' },
  { german: 'aus', amharic: 'ከ...ውስጥ', pronunciation: 'አውስ', level: 'A1', category: 'prepositions', example_de: 'Ich komme aus Äthiopien.', example_am: 'ከኢትዮጵያ ነው የመጣሁት።' },
  { german: 'ich', amharic: 'እኔ', pronunciation: 'ኢሽ', level: 'A1', category: 'pronouns', example_de: 'Ich bin Student.', example_am: 'እኔ ተማሪ ነኝ።' },
  { german: 'du', amharic: 'አንተ / አንቺ', pronunciation: 'ዱ', level: 'A1', category: 'pronouns', example_de: 'Du bist mein Freund.', example_am: 'አንተ ጓደኛዬ ነህ።' },
  { german: 'er', amharic: 'እሱ', pronunciation: 'ኤር', level: 'A1', category: 'pronouns', example_de: 'Er kommt aus Berlin.', example_am: 'እሱ ከበርሊን ነው።' },
  { german: 'sie (Singular)', amharic: 'እሷ', pronunciation: 'ዚ', level: 'A1', category: 'pronouns', example_de: 'Sie ist Lehrerin.', example_am: 'እሷ መምህርት ናት።' },
  { german: 'es', amharic: 'እሱ (ገለልተኛ)', pronunciation: 'ኤስ', level: 'A1', category: 'pronouns', example_de: 'Es regnet heute.', example_am: 'ዛሬ ዝናብ ነው።' },
  { german: 'wir', amharic: 'እኛ', pronunciation: 'ቪር', level: 'A1', category: 'pronouns', example_de: 'Wir lernen zusammen.', example_am: 'አብረን እንማራለን።' },
  { german: 'ihr', amharic: 'እናንተ', pronunciation: 'ኢር', level: 'A1', category: 'pronouns', example_de: 'Ihr seid willkommen.', example_am: 'እናንተ እንኳን ደህና መጣችሁ።' },
  { german: 'sie (Plural)', amharic: 'እነሱ', pronunciation: 'ዚ', level: 'A1', category: 'pronouns', example_de: 'Sie spielen Fußball.', example_am: 'እነሱ እግር ኳስ ይጫወታሉ።' },
  { german: 'Sie (formell)', amharic: 'እርስዎ', pronunciation: 'ዚ', level: 'A1', category: 'pronouns', example_de: 'Wie heißen Sie?', example_am: 'ስምዎ ማን ነው?' },
  { german: 'mein', amharic: 'የእኔ', pronunciation: 'ማይን', level: 'A1', category: 'pronouns', example_de: 'Das ist mein Buch.', example_am: 'ይህ የእኔ መጽሐፍ ነው።' },
  { german: 'dein', amharic: 'የአንተ', pronunciation: 'ዳይን', level: 'A1', category: 'pronouns', example_de: 'Ist das dein Handy?', example_am: 'ይህ የአንተ ሞባይል ነው?' },
  { german: 'sein', amharic: 'የእሱ', pronunciation: 'ዛይን', level: 'A1', category: 'pronouns', example_de: 'Das ist sein Auto.', example_am: 'ይህ የእሱ መኪና ነው።' },
  { german: 'ihr (possessiv)', amharic: 'የእሷ', pronunciation: 'ኢር', level: 'A1', category: 'pronouns', example_de: 'Das ist ihr Kind.', example_am: 'ይህ የእሷ ልጅ ነው።' },
  { german: 'unser', amharic: 'የእኛ', pronunciation: 'ኡንዘር', level: 'A2', category: 'pronouns', example_de: 'Das ist unser Haus.', example_am: 'ይህ የእኛ ቤት ነው።' },
  { german: 'euer', amharic: 'የእናንተ', pronunciation: 'ኦይኤር', level: 'A2', category: 'pronouns', example_de: 'Ist das euer Lehrer?', example_am: 'ይህ የእናንተ መምህር ነው?' },
  { german: 'mich', amharic: 'እኔን', pronunciation: 'ሚሽ', level: 'A2', category: 'pronouns', example_de: 'Er sieht mich.', example_am: 'እሱ እኔን ያየኛል።' },
  { german: 'dich', amharic: 'አንተን', pronunciation: 'ዲሽ', level: 'A2', category: 'pronouns', example_de: 'Ich rufe dich an.', example_am: 'እደውልልሃለሁ።' },
  { german: 'ihm', amharic: 'ለእሱ', pronunciation: 'ኢም', level: 'A2', category: 'pronouns', example_de: 'Ich gebe ihm das Buch.', example_am: 'መጽሐፉን ለእሱ እሰጠዋለሁ።' },
  { german: 'mir', amharic: 'ለእኔ', pronunciation: 'ሚር', level: 'A2', category: 'pronouns', example_de: 'Kannst du mir helfen?', example_am: 'ልትረዳኝ ትችላለህ?' },
  { german: 'uns', amharic: 'እኛን / ለእኛ', pronunciation: 'ኡንስ', level: 'A2', category: 'pronouns', example_de: 'Er besucht uns morgen.', example_am: 'ነገ ይጎበኘናል።' },
  { german: 'Deutschland', amharic: 'ጀርመን', pronunciation: 'ዶይችላንት', level: 'A1', category: 'countries', example_de: 'Ich lebe in Deutschland.', example_am: 'ጀርመን ውስጥ እኖራለሁ።' },
  { german: 'die Schweiz', amharic: 'ስዊዘርላንድ', pronunciation: 'ዲ ሽቫይጽ', level: 'A1', category: 'countries', example_de: 'Die Schweiz hat vier Sprachen.', example_am: 'ስዊዘርላንድ አራት ቋንቋዎች አሉት።' },
  { german: 'Österreich', amharic: 'ኦስትሪያ', pronunciation: 'ኦስተርራይሽ', level: 'A1', category: 'countries', example_de: 'Wien ist die Hauptstadt von Österreich.', example_am: 'ቪየና የኦስትሪያ ዋና ከተማ ናት።' },
  { german: 'Äthiopien', amharic: 'ኢትዮጵያ', pronunciation: 'ኤትዮፒየን', level: 'A1', category: 'countries', example_de: 'Ich komme aus Äthiopien.', example_am: 'ከኢትዮጵያ ነው የመጣሁት።' },
  { german: 'Eritrea', amharic: 'ኤርትራ', pronunciation: 'ኤሪትሬአ', level: 'A1', category: 'countries', example_de: 'Eritrea liegt am Roten Meer.', example_am: 'ኤርትራ ከቀይ ባህር ጋር ትዋሰናለች።' },
  { german: 'Frankreich', amharic: 'ፈረንሳይ', pronunciation: 'ፍራንክራይሽ', level: 'A2', category: 'countries', example_de: 'Paris ist in Frankreich.', example_am: 'ፓሪስ ፈረንሳይ ውስጥ ናት።' },
  { german: 'Italien', amharic: 'ጣሊያን', pronunciation: 'ኢታልየን', level: 'A2', category: 'countries', example_de: 'Pizza kommt aus Italien.', example_am: 'ፒዛ ከጣሊያን ነው።' },
  { german: 'die Türkei', amharic: 'ቱርክ', pronunciation: 'ዲ ቱርካይ', level: 'A2', category: 'countries', example_de: 'Istanbul ist in der Türkei.', example_am: 'ኢስታንቡል ቱርክ ውስጥ ናት።' },
  { german: 'England', amharic: 'እንግሊዝ', pronunciation: 'ኤንግላንት', level: 'A2', category: 'countries', example_de: 'In England spricht man Englisch.', example_am: 'እንግሊዝ ውስጥ እንግሊዝኛ ይናገራሉ።' },
  { german: 'die USA', amharic: 'አሜሪካ', pronunciation: 'ዲ ኡ-ኤስ-ኤ', level: 'A2', category: 'countries', example_de: 'New York ist in den USA.', example_am: 'ኒው ዮርክ አሜሪካ ውስጥ ናት።' },
  { german: 'der Pass', amharic: 'ፓስፖርት', pronunciation: 'ዴር ፓስ', level: 'A2', category: 'countries', example_de: 'Zeigen Sie Ihren Pass, bitte.', example_am: 'ፓስፖርትዎን ያሳዩ እባክዎ።' },
  { german: 'die Grenze', amharic: 'ድንበር', pronunciation: 'ዲ ግሬንጸ', level: 'B1', category: 'countries', example_de: 'Die Grenze ist nicht weit.', example_am: 'ድንበሩ ሩቅ አይደለም።' },
  { german: 'können', amharic: 'መቻል', pronunciation: 'ኮነን', level: 'A1', category: 'modal_verbs', example_de: 'Ich kann Deutsch sprechen.', example_am: 'ጀርመንኛ መናገር እችላለሁ።' },
  { german: 'müssen', amharic: 'መገደድ / ማስፈለግ', pronunciation: 'ሚሰን', level: 'A1', category: 'modal_verbs', example_de: 'Ich muss arbeiten.', example_am: 'መሥራት አለብኝ።' },
  { german: 'dürfen', amharic: 'መፍቀድ', pronunciation: 'ዲርፈን', level: 'A2', category: 'modal_verbs', example_de: 'Darf ich hier sitzen?', example_am: 'እዚህ ልቀመጥ እችላለሁ?' },
  { german: 'sollen', amharic: 'ማስፈለግ (ግዴታ)', pronunciation: 'ዞለን', level: 'A2', category: 'modal_verbs', example_de: 'Du sollst mehr lernen.', example_am: 'ብዙ መማር አለብህ።' },
  { german: 'wollen', amharic: 'መፈለግ', pronunciation: 'ቮለን', level: 'A1', category: 'modal_verbs', example_de: 'Ich will nach Hause gehen.', example_am: 'ወደ ቤት መሄድ እፈልጋለሁ።' },
  { german: 'möchten', amharic: 'መፈለግ (ትህትና)', pronunciation: 'ሞሽተን', level: 'A1', category: 'modal_verbs', example_de: 'Ich möchte einen Kaffee.', example_am: 'ቡና እፈልጋለሁ።' },
  { german: 'mögen', amharic: 'መውደድ', pronunciation: 'ሞገን', level: 'A2', category: 'modal_verbs', example_de: 'Ich mag Schokolade.', example_am: 'ቸኮሌት እወዳለሁ።' },
  { german: 'aufstehen', amharic: 'መነሳት', pronunciation: 'አውፍሽቴኤን', level: 'A1', category: 'separable_verbs', example_de: 'Ich stehe um sechs Uhr auf.', example_am: 'በስድስት ሰዓት እነሳለሁ።' },
  { german: 'einkaufen', amharic: 'ገበያ መሄድ', pronunciation: 'አይንካውፈን', level: 'A1', category: 'separable_verbs', example_de: 'Ich kaufe im Supermarkt ein.', example_am: 'ሱፐርማርኬት ውስጥ ገበያ አደርጋለሁ።' },
  { german: 'anrufen', amharic: 'መደወል', pronunciation: 'አንሩፈን', level: 'A2', category: 'separable_verbs', example_de: 'Ich rufe dich morgen an.', example_am: 'ነገ እደውልልሃለሁ።' },
  { german: 'aufmachen', amharic: 'መክፈት', pronunciation: 'አውፍማኸን', level: 'A1', category: 'separable_verbs', example_de: 'Mach bitte die Tür auf!', example_am: 'እባክህ በሩን ክፈት!' },
  { german: 'zumachen', amharic: 'መዝጋት', pronunciation: 'ጹማኸን', level: 'A1', category: 'separable_verbs', example_de: 'Mach das Fenster zu!', example_am: 'መስኮቱን ዝጋ!' },
  { german: 'mitnehmen', amharic: 'ይዞ መሄድ', pronunciation: 'ሚትኔመን', level: 'A2', category: 'separable_verbs', example_de: 'Nimm einen Regenschirm mit!', example_am: 'ጃንጥላ ይዘህ ሂድ!' },
  { german: 'ausgehen', amharic: 'ወጥቶ መሄድ', pronunciation: 'አውስጌኤን', level: 'A2', category: 'separable_verbs', example_de: 'Wir gehen heute Abend aus.', example_am: 'ዛሬ ማታ ወጥተን እንሄዳለን።' },
  { german: 'zurückkommen', amharic: 'መመለስ', pronunciation: 'ጹሪክኮመን', level: 'A2', category: 'separable_verbs', example_de: 'Wann kommst du zurück?', example_am: 'መቼ ትመለሳለህ?' },
  { german: 'anfangen', amharic: 'መጀመር', pronunciation: 'አንፋንገን', level: 'A2', category: 'separable_verbs', example_de: 'Der Film fängt um acht an.', example_am: 'ፊልሙ በስምንት ሰዓት ይጀምራል።' },
  { german: 'einladen', amharic: 'መጋበዝ', pronunciation: 'አይንላደን', level: 'A2', category: 'separable_verbs', example_de: 'Ich lade dich zum Essen ein.', example_am: 'ለምግብ እጋብዝሃለሁ።' },
  { german: 'vorstellen', amharic: 'ማስተዋወቅ', pronunciation: 'ፎርሽቴለን', level: 'A2', category: 'separable_verbs', example_de: 'Darf ich mich vorstellen?', example_am: 'ራሴን ላስተዋውቅ?' },
  { german: 'fernsehen', amharic: 'ቴሌቪዥን ማየት', pronunciation: 'ፌርንዜኤን', level: 'A2', category: 'separable_verbs', example_de: 'Abends sehe ich fern.', example_am: 'ማታ ቴሌቪዥን አያለሁ።' },
  { german: 'und', amharic: 'እና', pronunciation: 'ኡንት', level: 'A1', category: 'conjunctions', example_de: 'Ich esse Brot und trinke Kaffee.', example_am: 'ዳቦ እበላለሁ እና ቡና እጠጣለሁ።' },
  { german: 'oder', amharic: 'ወይም', pronunciation: 'ኦደር', level: 'A1', category: 'conjunctions', example_de: 'Tee oder Kaffee?', example_am: 'ሻይ ወይም ቡና?' },
  { german: 'aber', amharic: 'ግን', pronunciation: 'አበር', level: 'A1', category: 'conjunctions', example_de: 'Ich bin müde, aber ich lerne.', example_am: 'ደክሞኛል ግን እማራለሁ።' },
  { german: 'denn', amharic: 'ምክንያቱም', pronunciation: 'ዴን', level: 'A2', category: 'conjunctions', example_de: 'Ich bleibe zu Hause, denn ich bin krank.', example_am: 'ቤት እቀመጣለሁ ምክንያቱም ታሞኛል።' },
  { german: 'weil', amharic: 'ስለ / ምክንያቱም', pronunciation: 'ቫይል', level: 'A2', category: 'conjunctions', example_de: 'Ich lerne Deutsch, weil ich in der Schweiz lebe.', example_am: 'ጀርመንኛ እማራለሁ ምክንያቱም ስዊዘርላንድ ውስጥ እኖራለሁ።' },
  { german: 'dass', amharic: 'እንደ', pronunciation: 'ዳስ', level: 'A2', category: 'conjunctions', example_de: 'Ich weiß, dass du fleißig bist.', example_am: 'ትጉ እንደሆንክ አውቃለሁ።' },
  { german: 'wenn', amharic: 'ከ...ሆነ / ስ...', pronunciation: 'ቬን', level: 'A2', category: 'conjunctions', example_de: 'Wenn es regnet, bleibe ich zu Hause.', example_am: 'ዝናብ ከዘነበ ቤት እቀመጣለሁ።' },
  { german: 'obwohl', amharic: 'ቢ...ም', pronunciation: 'ኦብቮል', level: 'B1', category: 'conjunctions', example_de: 'Obwohl er müde ist, arbeitet er.', example_am: 'ቢደክመውም ይሰራል።' },
  { german: 'damit', amharic: 'ለዚህ ስለሚ...', pronunciation: 'ዳሚት', level: 'B1', category: 'conjunctions', example_de: 'Ich lerne Deutsch, damit ich Arbeit finde.', example_am: 'ሥራ እንዳገኝ ጀርመንኛ እማራለሁ።' },
  { german: 'sondern', amharic: 'ይልቁን', pronunciation: 'ዞንደርን', level: 'A2', category: 'conjunctions', example_de: 'Nicht heute, sondern morgen.', example_am: 'ዛሬ ሳይሆን ነገ።' },
  { german: 'trotzdem', amharic: 'ቢሆንም', pronunciation: 'ትሮጽዴም', level: 'B1', category: 'conjunctions', example_de: 'Es regnet, trotzdem gehe ich raus.', example_am: 'ዝናብ ነው ቢሆንም ወጥቼ እሄዳለሁ።' },
  { german: 'deshalb', amharic: 'ስለዚህ', pronunciation: 'ዴስሃልብ', level: 'A2', category: 'conjunctions', example_de: 'Ich bin krank, deshalb bleibe ich zu Hause.', example_am: 'ታሞኛል ስለዚህ ቤት እቀመጣለሁ።' },
  { german: 'ob', amharic: 'እንደ (ጥያቄ)', pronunciation: 'ኦብ', level: 'B1', category: 'conjunctions', example_de: 'Ich weiß nicht, ob er kommt.', example_am: 'ይመጣ እንደሆነ አላውቅም።' },
  { german: 'als', amharic: 'ስ... / ከ...', pronunciation: 'አልስ', level: 'B1', category: 'conjunctions', example_de: 'Als ich klein war, lebte ich in Addis.', example_am: 'ልጅ ስሆን አዲስ አበባ ነበርኩ።' },
  { german: 'bevor', amharic: 'ከ...በፊት', pronunciation: 'ቤፎር', level: 'B1', category: 'conjunctions', example_de: 'Wasch dir die Hände, bevor du isst.', example_am: 'ከመብላትህ በፊት እጅህን ታጠብ።' },
  { german: 'nachdem', amharic: 'ከ...በኋላ', pronunciation: 'ናኽዴም', level: 'B1', category: 'conjunctions', example_de: 'Nachdem ich gegessen habe, gehe ich spazieren.', example_am: 'ከበላሁ በኋላ እንሄዳለሁ።' },
  { german: 'der Stift', amharic: 'ብዕር / እስክሪብቶ', pronunciation: 'ዴር ሽቲፍት', level: 'A1', category: 'classroom', example_de: 'Hast du einen Stift?', example_am: 'ብዕር አለህ?' },
  { german: 'das Heft', amharic: 'ደብተር', pronunciation: 'ዳስ ሄፍት', level: 'A1', category: 'classroom', example_de: 'Schreib ins Heft!', example_am: 'ደብተር ላይ ጻፍ!' },
  { german: 'die Tafel', amharic: 'ሰሌዳ', pronunciation: 'ዲ ታፈል', level: 'A1', category: 'classroom', example_de: 'Der Lehrer schreibt an die Tafel.', example_am: 'መምህሩ ሰሌዳ ላይ ይጽፋል።' },
  { german: 'der Kugelschreiber', amharic: 'ባለ ኩል ብዕር', pronunciation: 'ዴር ኩገልሽራይበር', level: 'A1', category: 'classroom', example_de: 'Leihe mir deinen Kugelschreiber.', example_am: 'ብዕርህን አበድረኝ።' },
  { german: 'das Wörterbuch', amharic: 'መዝገበ ቃላት', pronunciation: 'ዳስ ቮርተርቡኽ', level: 'A2', category: 'classroom', example_de: 'Ich schaue im Wörterbuch nach.', example_am: 'መዝገበ ቃላት ውስጥ እመለከታለሁ።' },
  { german: 'die Aufgabe', amharic: 'ተግባር / ጥያቄ', pronunciation: 'ዲ አውፍጋበ', level: 'A1', category: 'classroom', example_de: 'Macht die Aufgabe auf Seite 10.', example_am: 'ገጽ 10 ላይ ያለውን ተግባር ስሩ።' },
  { german: 'die Übung', amharic: 'ልምምድ', pronunciation: 'ዲ ኡቡንግ', level: 'A1', category: 'classroom', example_de: 'Übung macht den Meister.', example_am: 'ልምምድ ጌታ ያደርጋል።' },
  { german: 'die Seite', amharic: 'ገጽ', pronunciation: 'ዲ ዛይተ', level: 'A1', category: 'classroom', example_de: 'Öffnet das Buch auf Seite 5.', example_am: 'መጽሐፉን ገጽ 5 ላይ ክፈቱ።' },
  { german: 'der Radiergummi', amharic: 'ላጲስ', pronunciation: 'ዴር ራዲርጉሚ', level: 'A1', category: 'classroom', example_de: 'Kann ich deinen Radiergummi haben?', example_am: 'ላጲስህን ልጠቀም?' },
  { german: 'die Klasse', amharic: 'ክፍል', pronunciation: 'ዲ ክላሰ', level: 'A1', category: 'classroom', example_de: 'Unsere Klasse hat 20 Schüler.', example_am: 'ክፍላችን 20 ተማሪዎች አሉት።' },
  { german: 'die Post', amharic: 'ፖስታ ቤት', pronunciation: 'ዲ ፖስት', level: 'A1', category: 'city_places', example_de: 'Ich gehe zur Post.', example_am: 'ወደ ፖስታ ቤት እሄዳለሁ።' },
  { german: 'die Bank', amharic: 'ባንክ', pronunciation: 'ዲ ባንክ', level: 'A1', category: 'city_places', example_de: 'Ich hole Geld von der Bank.', example_am: 'ከባንክ ገንዘብ አወጣለሁ።' },
  { german: 'das Rathaus', amharic: 'ማዘጋጃ ቤት', pronunciation: 'ዳስ ራትሃውስ', level: 'A2', category: 'city_places', example_de: 'Das Rathaus ist in der Stadtmitte.', example_am: 'ማዘጋጃ ቤቱ ከተማ መሃል ነው።' },
  { german: 'die Kirche', amharic: 'ቤተ ክርስቲያን', pronunciation: 'ዲ ኪርሸ', level: 'A1', category: 'city_places', example_de: 'Die Kirche ist alt.', example_am: 'ቤተ ክርስቲያኑ ያረጀ ነው።' },
  { german: 'die Moschee', amharic: 'መስጊድ', pronunciation: 'ዲ ሞሸ', level: 'A2', category: 'city_places', example_de: 'Die Moschee ist in der Nähe.', example_am: 'መስጊዱ በቅርበት ነው።' },
  { german: 'das Museum', amharic: 'ሙዚየም', pronunciation: 'ዳስ ሙዜኡም', level: 'A2', category: 'city_places', example_de: 'Wir besuchen das Museum.', example_am: 'ሙዚየሙን እንጎበኛለን።' },
  { german: 'der Park', amharic: 'ፓርክ', pronunciation: 'ዴር ፓርክ', level: 'A1', category: 'city_places', example_de: 'Die Kinder spielen im Park.', example_am: 'ልጆቹ ፓርክ ውስጥ ይጫወታሉ።' },
  { german: 'das Schwimmbad', amharic: 'መዋኛ', pronunciation: 'ዳስ ሽቪምባድ', level: 'A2', category: 'city_places', example_de: 'Im Sommer gehen wir ins Schwimmbad.', example_am: 'በበጋ መዋኛ እንሄዳለን።' },
  { german: 'der Spielplatz', amharic: 'መጫወቻ', pronunciation: 'ዴር ሽፒልፕላጽ', level: 'A2', category: 'city_places', example_de: 'Die Kinder sind auf dem Spielplatz.', example_am: 'ልጆቹ መጫወቻ ላይ ናቸው።' },
  { german: 'das Kino', amharic: 'ሲኒማ', pronunciation: 'ዳስ ኪኖ', level: 'A1', category: 'city_places', example_de: 'Gehen wir heute ins Kino?', example_am: 'ዛሬ ሲኒማ እንሂድ?' },
  { german: 'die Bäckerei', amharic: 'ዳቦ ቤት', pronunciation: 'ዲ ቤከራይ', level: 'A2', category: 'city_places', example_de: 'Ich kaufe Brot in der Bäckerei.', example_am: 'ዳቦ ቤት ውስጥ ዳቦ እገዛለሁ።' },
  { german: 'die Polizeistation', amharic: 'ፖሊስ ጣቢያ', pronunciation: 'ዲ ፖሊጻይሽታጺዮን', level: 'A2', category: 'city_places', example_de: 'Die Polizeistation ist dort.', example_am: 'ፖሊስ ጣቢያው ከዚያ ነው።' },
  { german: 'die Aufenthaltsbewilligung', amharic: 'የመኖሪያ ፈቃድ', pronunciation: 'ዲ አውፈንትሃልትስቤቪሊጉንግ', level: 'B2', category: 'legal_admin', example_de: 'Ich brauche eine Aufenthaltsbewilligung.', example_am: 'የመኖሪያ ፈቃድ እፈልጋለሁ።' },
  { german: 'das Visum', amharic: 'ቪዛ', pronunciation: 'ዳስ ቪዙም', level: 'B1', category: 'legal_admin', example_de: 'Mein Visum läuft bald ab.', example_am: 'ቪዛዬ በቅርቡ ያልቃል።' },
  { german: 'die Anmeldung', amharic: 'ምዝገባ', pronunciation: 'ዲ አንሜልዱንግ', level: 'B1', category: 'legal_admin', example_de: 'Ich muss mich bei der Gemeinde anmelden.', example_am: 'በማዘጋጃ ቤት መመዝገብ አለብኝ።' },
  { german: 'der Ausweis', amharic: 'መታወቂያ', pronunciation: 'ዴር አውስቫይስ', level: 'A2', category: 'legal_admin', example_de: 'Zeigen Sie bitte Ihren Ausweis.', example_am: 'መታወቂያዎን ያሳዩ እባክዎ።' },
  { german: 'das Formular', amharic: 'ቅጽ', pronunciation: 'ዳስ ፎርሙላር', level: 'B1', category: 'legal_admin', example_de: 'Füllen Sie bitte das Formular aus.', example_am: 'ቅጹን ይሙሉ እባክዎ።' },
  { german: 'der Antrag', amharic: 'ማመልከቻ', pronunciation: 'ዴር አንትራክ', level: 'B1', category: 'legal_admin', example_de: 'Ich stelle einen Antrag.', example_am: 'ማመልከቻ አቀርባለሁ።' },
  { german: 'die Gebühr', amharic: 'ክፍያ / ዕዳ', pronunciation: 'ዲ ገቢር', level: 'B1', category: 'legal_admin', example_de: 'Die Gebühr beträgt 100 Franken.', example_am: 'ክፍያው 100 ፍራንክ ነው።' },
  { german: 'die Aufenthaltserlaubnis', amharic: 'የመቆየት ፈቃድ', pronunciation: 'ዲ አውፈንትሃልትስኤርላውብኒስ', level: 'B2', category: 'legal_admin', example_de: 'Die Aufenthaltserlaubnis muss verlängert werden.', example_am: 'የመቆየት ፈቃዱ መታደስ አለበት።' },
  { german: 'die Behörde', amharic: 'ባለሥልጣን / ቢሮ', pronunciation: 'ዲ ቤሆርደ', level: 'B2', category: 'legal_admin', example_de: 'Gehen Sie zur zuständigen Behörde.', example_am: 'ወደ ሚመለከተው ቢሮ ይሂዱ።' },
  { german: 'die Staatsbürgerschaft', amharic: 'ዜግነት', pronunciation: 'ዲ ሽታትስቢርገርሻፍት', level: 'B2', category: 'legal_admin', example_de: 'Er hat die deutsche Staatsbürgerschaft.', example_am: 'የጀርመን ዜግነት አለው።' },
  { german: 'die Arbeitserlaubnis', amharic: 'የሥራ ፈቃድ', pronunciation: 'ዲ አርባይትስኤርላውብኒስ', level: 'B2', category: 'legal_admin', example_de: 'Für diese Arbeit brauche ich eine Arbeitserlaubnis.', example_am: 'ለዚህ ሥራ የሥራ ፈቃድ እፈልጋለሁ።' },
  { german: 'die Steuer', amharic: 'ግብር', pronunciation: 'ዲ ሽቶይኤር', level: 'B2', category: 'legal_admin', example_de: 'Jeder muss Steuern zahlen.', example_am: 'ሁሉም ግብር መክፈል አለበት።' },
  { german: 'die Sozialversicherung', amharic: 'ማህበራዊ ዋስትና', pronunciation: 'ዲ ዞጽያልፌርዚኸሩንግ', level: 'B2', category: 'legal_admin', example_de: 'Die Sozialversicherung ist in der Schweiz obligatorisch.', example_am: 'ማህበራዊ ዋስትና ስዊዘርላንድ ውስጥ ግዴታ ነው።' },
  { german: 'das Rezept', amharic: 'ማዘዣ', pronunciation: 'ዳስ ሬጸፕት', level: 'A2', category: 'medical', example_de: 'Der Arzt schreibt ein Rezept.', example_am: 'ሐኪሙ ማዘዣ ይጽፋል።' },
  { german: 'die Untersuchung', amharic: 'ምርመራ', pronunciation: 'ዲ ኡንተርዙኽንግ', level: 'B1', category: 'medical', example_de: 'Ich habe eine Untersuchung beim Arzt.', example_am: 'ከሐኪም ጋር ምርመራ አለኝ።' },
  { german: 'die Impfung', amharic: 'ክትባት', pronunciation: 'ዲ ኢምፕፉንግ', level: 'B1', category: 'medical', example_de: 'Die Impfung ist wichtig.', example_am: 'ክትባት አስፈላጊ ነው።' },
  { german: 'die Sprechstunde', amharic: 'የምርመራ ሰዓት', pronunciation: 'ዲ ሽፕሬሽሽቱንደ', level: 'B1', category: 'medical', example_de: 'Die Sprechstunde ist von 8 bis 12.', example_am: 'የምርመራ ሰዓት ከ8 እስከ 12 ነው።' },
  { german: 'der Patient', amharic: 'ታካሚ', pronunciation: 'ዴር ፓጽየንት', level: 'A2', category: 'medical', example_de: 'Der Patient wartet im Wartezimmer.', example_am: 'ታካሚው ማቆያ ክፍል ውስጥ ይጠብቃል።' },
  { german: 'die Operation', amharic: 'ቀዶ ጥገና', pronunciation: 'ዲ ኦፐራጺዮን', level: 'B1', category: 'medical', example_de: 'Die Operation war erfolgreich.', example_am: 'ቀዶ ጥገናው ተሳክቷል።' },
  { german: 'der Verband', amharic: 'ፋሻ', pronunciation: 'ዴር ፌርባንት', level: 'B1', category: 'medical', example_de: 'Die Schwester wechselt den Verband.', example_am: 'ነርሷ ፋሻውን ትለውጣለች።' },
  { german: 'die Krankheit', amharic: 'ህመም / በሽታ', pronunciation: 'ዲ ክራንክሃይት', level: 'A2', category: 'medical', example_de: 'Die Krankheit ist ansteckend.', example_am: 'በሽታው ተላላፊ ነው።' },
  { german: 'das Blut', amharic: 'ደም', pronunciation: 'ዳስ ብሉት', level: 'A2', category: 'medical', example_de: 'Der Arzt nimmt Blut ab.', example_am: 'ሐኪሙ ደም ይወስዳል።' },
  { german: 'der Rollstuhl', amharic: 'ዊልቸር', pronunciation: 'ዴር ሮልሽቱል', level: 'B1', category: 'medical', example_de: 'Er sitzt im Rollstuhl.', example_am: 'ዊልቸር ላይ ተቀምጧል።' },
  { german: 'Tschüss', amharic: 'ቻው', pronunciation: 'ቹስ', level: 'A1', category: 'greetings', example_de: 'Tschüss, bis bald!', example_am: 'ቻው፣ በቅርቡ!' },
  { german: 'ja', amharic: 'አዎ', pronunciation: 'ያ', level: 'A1', category: 'greetings', example_de: 'Ja, das stimmt.', example_am: 'አዎ፣ ትክክል ነው።' },
  { german: 'nein', amharic: 'አይ', pronunciation: 'ናይን', level: 'A1', category: 'greetings', example_de: 'Nein, danke.', example_am: 'አይ፣ አመሰግናለሁ።' },
  { german: 'Guten Tag', amharic: 'እንደምን ዋሉ', pronunciation: 'ጉተን ታክ', level: 'A1', category: 'greetings', example_de: 'Guten Tag, kann ich Ihnen helfen?', example_am: 'እንደምን ዋሉ፣ ልረዳዎ?' },
  { german: 'Gute Nacht', amharic: 'ደህና እደሩ', pronunciation: 'ጉተ ናኽት', level: 'A1', category: 'greetings', example_de: 'Gute Nacht, schlaf gut!', example_am: 'ደህና እደሩ፣ በሰላም ያድሩ!' },
  { german: 'die Großmutter', amharic: 'አያት (ሴት)', pronunciation: 'ዲ ግሮስሙተር', level: 'A1', category: 'family', example_de: 'Meine Großmutter kocht sehr gut.', example_am: 'አያቴ በጣም ጥሩ ታበስላለች።' },
  { german: 'der Großvater', amharic: 'አያት (ወንድ)', pronunciation: 'ዴር ግሮስፋተር', level: 'A1', category: 'family', example_de: 'Mein Großvater ist 80 Jahre alt.', example_am: 'አያቴ 80 ዓመት ነው።' },
  { german: 'der Onkel', amharic: 'አጎት', pronunciation: 'ዴር ኦንክል', level: 'A2', category: 'family', example_de: 'Mein Onkel lebt in der Schweiz.', example_am: 'አጎቴ ስዊዘርላንድ ይኖራል።' },
  { german: 'die Tante', amharic: 'አክስት', pronunciation: 'ዲ ታንተ', level: 'A2', category: 'family', example_de: 'Meine Tante kommt zu Besuch.', example_am: 'አክስቴ ለጉብኝት ትመጣለች።' },
  { german: 'die Tochter', amharic: 'ሴት ልጅ', pronunciation: 'ዲ ቶኽተር', level: 'A1', category: 'family', example_de: 'Unsere Tochter geht in die Schule.', example_am: 'ሴት ልጃችን ትምህርት ቤት ትሄዳለች።' },
  { german: 'der Sohn', amharic: 'ወንድ ልጅ', pronunciation: 'ዴር ዞን', level: 'A1', category: 'family', example_de: 'Mein Sohn ist fünf Jahre alt.', example_am: 'ወንድ ልጄ አምስት ዓመቱ ነው።' },
  { german: 'das Ei', amharic: 'እንቁላል', pronunciation: 'ዳስ አይ', level: 'A1', category: 'food', example_de: 'Ich esse ein Ei zum Frühstück.', example_am: 'ለቁርስ እንቁላል እበላለሁ።' },
  { german: 'der Reis', amharic: 'ሩዝ', pronunciation: 'ዴር ራይስ', level: 'A1', category: 'food', example_de: 'Reis mit Soße ist lecker.', example_am: 'ሩዝ ከሰውስ ጋር ጣፋጭ ነው።' },
  { german: 'das Gemüse', amharic: 'አትክልት', pronunciation: 'ዳስ ገሚዘ', level: 'A1', category: 'food', example_de: 'Gemüse ist gesund.', example_am: 'አትክልት ጤናማ ነው።' },
  { german: 'das Obst', amharic: 'ፍራፍሬ', pronunciation: 'ዳስ ኦብስት', level: 'A1', category: 'food', example_de: 'Ich esse jeden Tag Obst.', example_am: 'በየቀኑ ፍራፍሬ እበላለሁ።' },
  { german: 'der Saft', amharic: 'ጭማቂ', pronunciation: 'ዴር ዛፍት', level: 'A1', category: 'food', example_de: 'Ein Glas Orangensaft, bitte.', example_am: 'አንድ ብርጭቆ የብርቱካን ጭማቂ እባክዎ።' },
  { german: 'der Käse', amharic: 'አይብ', pronunciation: 'ዴር ኬዘ', level: 'A1', category: 'food', example_de: 'Schweizer Käse ist berühmt.', example_am: 'የስዊስ አይብ ታዋቂ ነው።' },
  { german: 'die Butter', amharic: 'ቅቤ', pronunciation: 'ዲ ቡተር', level: 'A1', category: 'food', example_de: 'Brot mit Butter, bitte.', example_am: 'ከቅቤ ጋር ዳቦ እባክዎ።' },
  { german: 'die Suppe', amharic: 'ሾርባ', pronunciation: 'ዲ ዙፐ', level: 'A1', category: 'food', example_de: 'Die Suppe ist heiß.', example_am: 'ሾርባው ሙቅ ነው።' },
  { german: 'der Kuchen', amharic: 'ኬክ', pronunciation: 'ዴር ኩኸን', level: 'A2', category: 'food', example_de: 'Ich backe einen Kuchen.', example_am: 'ኬክ እጋግራለሁ።' },
  { german: 'die Schokolade', amharic: 'ቸኮሌት', pronunciation: 'ዲ ሾኮላደ', level: 'A1', category: 'food', example_de: 'Schweizer Schokolade ist die beste.', example_am: 'የስዊስ ቸኮሌት ምርጥ ነው።' },
  { german: 'das Hähnchen', amharic: 'ዶሮ', pronunciation: 'ዳስ ሄንሸን', level: 'A2', category: 'food', example_de: 'Wir essen Hähnchen zum Abendessen.', example_am: 'ለእራት ዶሮ እንበላለን።' },
  { german: 'die Nudel', amharic: 'ፓስታ', pronunciation: 'ዲ ኑደል', level: 'A1', category: 'food', example_de: 'Nudeln mit Soße, bitte.', example_am: 'ፓስታ ከሰውስ ጋር እባክዎ።' },
  { german: 'alt', amharic: 'ያረጀ / ዕድሜ', pronunciation: 'አልት', level: 'A1', category: 'adjectives', example_de: 'Ich bin 30 Jahre alt.', example_am: 'ዕድሜዬ 30 ዓመት ነው።' },
  { german: 'neu', amharic: 'አዲስ', pronunciation: 'ኖይ', level: 'A1', category: 'adjectives', example_de: 'Das ist mein neues Auto.', example_am: 'ይህ አዲሱ መኪናዬ ነው።' },
  { german: 'lang', amharic: 'ረጅም', pronunciation: 'ላንግ', level: 'A1', category: 'adjectives', example_de: 'Die Straße ist lang.', example_am: 'መንገዱ ረጅም ነው።' },
  { german: 'kurz', amharic: 'አጭር', pronunciation: 'ኩርጽ', level: 'A1', category: 'adjectives', example_de: 'Die Pause ist zu kurz.', example_am: 'ዕረፍቱ በጣም አጭር ነው።' },
  { german: 'leicht', amharic: 'ቀላል', pronunciation: 'ላይሽት', level: 'A1', category: 'adjectives', example_de: 'Die Aufgabe ist leicht.', example_am: 'ተግባሩ ቀላል ነው።' },
  { german: 'schwer', amharic: 'ከባድ', pronunciation: 'ሽቬር', level: 'A1', category: 'adjectives', example_de: 'Deutsch ist manchmal schwer.', example_am: 'ጀርመንኛ አንዳንዴ ከባድ ነው።' },
  { german: 'langsam', amharic: 'ቀስ ብሎ', pronunciation: 'ላንግዛም', level: 'A1', category: 'adjectives', example_de: 'Sprechen Sie bitte langsam.', example_am: 'እባክዎ ቀስ ብለው ይናገሩ።' },
  { german: 'richtig', amharic: 'ትክክል', pronunciation: 'ሪሽቲሽ', level: 'A1', category: 'adjectives', example_de: 'Deine Antwort ist richtig.', example_am: 'መልስህ ትክክል ነው።' },
  { german: 'falsch', amharic: 'ስህተት', pronunciation: 'ፋልሽ', level: 'A1', category: 'adjectives', example_de: 'Das ist falsch.', example_am: 'ያ ስህተት ነው።' },
  { german: 'lesen', amharic: 'ማንበብ', pronunciation: 'ሌዘን', level: 'A1', category: 'verbs', example_de: 'Ich lese ein Buch.', example_am: 'መጽሐፍ አነባለሁ።' },
  { german: 'schreiben', amharic: 'መጻፍ', pronunciation: 'ሽራይበን', level: 'A1', category: 'verbs', example_de: 'Ich schreibe eine E-Mail.', example_am: 'ኢሜይል እጽፋለሁ።' },
  { german: 'fahren', amharic: 'መንዳት / መሄድ', pronunciation: 'ፋረን', level: 'A1', category: 'verbs', example_de: 'Ich fahre mit dem Bus.', example_am: 'በአውቶቡስ እሄዳለሁ።' },
  { german: 'sehen', amharic: 'ማየት', pronunciation: 'ዜኤን', level: 'A1', category: 'verbs', example_de: 'Ich sehe einen Film.', example_am: 'ፊልም አያለሁ።' },
  { german: 'hören', amharic: 'መስማት', pronunciation: 'ሆረን', level: 'A1', category: 'verbs', example_de: 'Ich höre Musik.', example_am: 'ሙዚቃ እሰማለሁ።' },
  { german: 'spielen', amharic: 'መጫወት', pronunciation: 'ሽፒለን', level: 'A1', category: 'verbs', example_de: 'Die Kinder spielen draußen.', example_am: 'ልጆቹ ውጭ ይጫወታሉ።' },
  { german: 'machen', amharic: 'ማድረግ', pronunciation: 'ማኸን', level: 'A1', category: 'verbs', example_de: 'Was machst du heute?', example_am: 'ዛሬ ምን ታደርጋለህ?' },
  { german: 'nehmen', amharic: 'መውሰድ', pronunciation: 'ኔመን', level: 'A1', category: 'verbs', example_de: 'Ich nehme den Bus.', example_am: 'አውቶቡሱን እወስዳለሁ።' },
  { german: 'geben', amharic: 'መስጠት', pronunciation: 'ጌበን', level: 'A1', category: 'verbs', example_de: 'Gib mir bitte das Buch.', example_am: 'መጽሐፉን ስጠኝ እባክህ።' },
  { german: 'finden', amharic: 'ማግኘት', pronunciation: 'ፊንደን', level: 'A1', category: 'verbs', example_de: 'Ich finde mein Handy nicht.', example_am: 'ሞባይሌን አላገኘሁም።' },
  { german: 'wissen', amharic: 'ማወቅ', pronunciation: 'ቪሰን', level: 'A2', category: 'verbs', example_de: 'Ich weiß es nicht.', example_am: 'አላውቅም።' },
  { german: 'denken', amharic: 'ማሰብ', pronunciation: 'ዴንከን', level: 'A2', category: 'verbs', example_de: 'Was denkst du?', example_am: 'ምን ታስባለህ?' },
  { german: 'bringen', amharic: 'ማምጣት', pronunciation: 'ብሪንገን', level: 'A2', category: 'verbs', example_de: 'Bring mir Wasser, bitte.', example_am: 'ውሃ አምጣልኝ እባክህ።' },
  { german: 'zeigen', amharic: 'ማሳየት', pronunciation: 'ጻይገን', level: 'A2', category: 'verbs', example_de: 'Zeig mir den Weg.', example_am: 'መንገዱን አሳየኝ።' },
  { german: 'vergessen', amharic: 'መርሳት', pronunciation: 'ፌርጌሰን', level: 'A2', category: 'verbs', example_de: 'Ich habe meinen Schlüssel vergessen.', example_am: 'ቁልፌን ረስቻለሁ።' },
  { german: 'warten', amharic: 'መጠበቅ', pronunciation: 'ቫርተን', level: 'A2', category: 'verbs', example_de: 'Warte auf mich!', example_am: 'ጠብቀኝ!' },
  { german: 'suchen', amharic: 'መፈለግ', pronunciation: 'ዙኸን', level: 'A2', category: 'verbs', example_de: 'Ich suche meine Brille.', example_am: 'መነጽሬን እፈልጋለሁ።' },
  { german: 'brauchen', amharic: 'ማስፈለግ', pronunciation: 'ብራውኸን', level: 'A1', category: 'verbs', example_de: 'Ich brauche Hilfe.', example_am: 'እርዳታ እፈልጋለሁ።' },
  { german: 'kosten', amharic: 'ማስከፈል', pronunciation: 'ኮስተን', level: 'A1', category: 'verbs', example_de: 'Was kostet das?', example_am: 'ይህ ስንት ያስከፍላል?' },
  { german: 'öffnen', amharic: 'መክፈት', pronunciation: 'ኦፍነን', level: 'A2', category: 'verbs', example_de: 'Öffnen Sie bitte das Fenster.', example_am: 'መስኮቱን ይክፈቱ እባክዎ።' },
  { german: 'schließen', amharic: 'መዝጋት', pronunciation: 'ሽሊሰን', level: 'A2', category: 'verbs', example_de: 'Schließen Sie die Tür.', example_am: 'በሩን ይዝጉ።' },
  { german: 'die Einbürgerung', amharic: 'ዜግነት ማግኘት', pronunciation: 'ዲ አይንቢርገሩንግ', level: 'B2', category: 'legal_admin', example_de: 'Die Einbürgerung dauert mehrere Jahre.', example_am: 'ዜግነት ማግኘት ብዙ ዓመታት ይወስዳል።' },
  { german: 'die Gleichberechtigung', amharic: 'እኩልነት', pronunciation: 'ዲ ግላይሽበሬሽቲጉንግ', level: 'B2', category: 'work', example_de: 'Gleichberechtigung ist ein Grundrecht.', example_am: 'እኩልነት መሠረታዊ መብት ነው።' },
  { german: 'die Verhandlung', amharic: 'ድርድር', pronunciation: 'ዲ ፌርሃንድሉንግ', level: 'B2', category: 'work', example_de: 'Die Verhandlung war erfolgreich.', example_am: 'ድርድሩ ተሳክቷል።' },
  { german: 'beeinflussen', amharic: 'ተጽዕኖ ማድረግ', pronunciation: 'ቤአይንፍሉሰን', level: 'B2', category: 'verbs', example_de: 'Das Wetter beeinflusst unsere Stimmung.', example_am: 'የአየር ሁኔታ ስሜታችንን ይነካል።' },
  { german: 'berücksichtigen', amharic: 'ግምት ውስጥ ማስገባት', pronunciation: 'ቤሪክዚሽቲገን', level: 'B2', category: 'verbs', example_de: 'Wir müssen alle Faktoren berücksichtigen.', example_am: 'ሁሉንም ነገሮች ግምት ውስጥ ማስገባት አለብን።' },
  { german: 'sich bewerben', amharic: 'ማመልከት', pronunciation: 'ዚሽ ቤቬርበን', level: 'B2', category: 'verbs', example_de: 'Ich bewerbe mich um die Stelle.', example_am: 'ለሥራ ቦታው አመለከትኩ።' },
  { german: 'die Ausbildung', amharic: 'ሙያ ትምህርት', pronunciation: 'ዲ አውስቢልዱንግ', level: 'B1', category: 'education', example_de: 'Er macht eine Ausbildung als Koch.', example_am: 'እንደ ምግብ አብሳይ ሙያ ትምህርት ይማራል።' },
  { german: 'die Weiterbildung', amharic: 'ተጨማሪ ትምህርት', pronunciation: 'ዲ ቫይተርቢልዱንግ', level: 'B2', category: 'education', example_de: 'Weiterbildung ist sehr wichtig.', example_am: 'ተጨማሪ ትምህርት በጣም አስፈላጊ ነው።' },
  { german: 'der Lebenslauf', amharic: 'የሕይወት ታሪክ (CV)', pronunciation: 'ዴር ሌበንስላውፍ', level: 'B1', category: 'work', example_de: 'Schicken Sie Ihren Lebenslauf per E-Mail.', example_am: 'CVዎን በኢሜይል ይላኩ።' },
  { german: 'das Vorstellungsgespräch', amharic: 'የሥራ ቃለ-መጠይቅ', pronunciation: 'ዳስ ፎርሽቴሉንግስገሽፕሬሽ', level: 'B1', category: 'work', example_de: 'Ich habe morgen ein Vorstellungsgespräch.', example_am: 'ነገ የሥራ ቃለ-መጠይቅ አለኝ።' },
  { german: 'die Kündigung', amharic: 'ከሥራ ማባረር / መልቀቅ', pronunciation: 'ዲ ኪንዲጉንግ', level: 'B2', category: 'work', example_de: 'Er hat seine Kündigung eingereicht.', example_am: 'ስንብት ወረቀቱን አቅርቧል።' },
  { german: 'die Förderung', amharic: 'ድጋፍ / ማበረታቻ', pronunciation: 'ዲ ፎርደሩንግ', level: 'B2', category: 'work', example_de: 'Die Förderung hilft vielen Studenten.', example_am: 'ድጋፉ ብዙ ተማሪዎችን ይረዳል።' },
  { german: 'selbstständig', amharic: 'ራሱን ችሎ', pronunciation: 'ዜልብስትሽቴንዲሽ', level: 'B2', category: 'adjectives', example_de: 'Sie arbeitet selbstständig.', example_am: 'ራሷን ችላ ትሰራለች።' },
  { german: 'verantwortlich', amharic: 'ተጠያቂ', pronunciation: 'ፌርአንትቮርትሊሽ', level: 'B2', category: 'adjectives', example_de: 'Wer ist dafür verantwortlich?', example_am: 'ለዚህ ተጠያቂ ማን ነው?' },
  { german: 'zuverlässig', amharic: 'ታማኝ', pronunciation: 'ጹፌርሌሲሽ', level: 'B2', category: 'adjectives', example_de: 'Er ist ein zuverlässiger Mitarbeiter.', example_am: 'እሱ ታማኝ ባልደረባ ነው።' },
  { german: 'gründlich', amharic: 'ጥንቃቄ ያለው', pronunciation: 'ግሪንትሊሽ', level: 'B2', category: 'adjectives', example_de: 'Arbeite gründlich!', example_am: 'በጥንቃቄ ስራ!' },
  { german: 'übrigens', amharic: 'ነገር ግን / ደግሞ', pronunciation: 'ኡብሪገንስ', level: 'B1', category: 'conjunctions', example_de: 'Übrigens, morgen ist frei.', example_am: 'ነገር ግን ነገ ዕረፍት ነው።' },
  { german: 'allerdings', amharic: 'ሆኖም ግን', pronunciation: 'አለርዲንግስ', level: 'B2', category: 'conjunctions', example_de: 'Das Essen ist gut, allerdings teuer.', example_am: 'ምግቡ ጥሩ ነው ሆኖም ግን ውድ ነው።' },
  { german: 'außerdem', amharic: 'ከዚህም በተጨማሪ', pronunciation: 'አውሰርዴም', level: 'B1', category: 'conjunctions', example_de: 'Außerdem brauche ich noch Milch.', example_am: 'ከዚህም በተጨማሪ ወተት እፈልጋለሁ።' },
  { german: 'sowohl...als auch', amharic: 'ሁለቱንም...ም', pronunciation: 'ዞቮል...አልስ አውኽ', level: 'B2', category: 'conjunctions', example_de: 'Er spricht sowohl Deutsch als auch Englisch.', example_am: 'ጀርመንኛም እንግሊዝኛም ይናገራል።' },
  { german: 'weder...noch', amharic: 'ይህንም...ያንንም', pronunciation: 'ቬደር...ኖኽ', level: 'B2', category: 'conjunctions', example_de: 'Weder heute noch morgen.', example_am: 'ዛሬም ነገም አይሆንም።' },
  { german: 'je...desto', amharic: 'ባ...ቁ ይ...ራል', pronunciation: 'ዬ...ዴስቶ', level: 'B2', category: 'conjunctions', example_de: 'Je mehr ich lerne, desto besser werde ich.', example_am: 'ብዙ ባጠና ያህል ብዙ እሻሻላለሁ።' },
  { german: 'sich freuen', amharic: 'መደሰት', pronunciation: 'ዚሽ ፍሮይኤን', level: 'B1', category: 'verbs', example_de: 'Ich freue mich auf den Urlaub.', example_am: 'ለእረፍት ጊዜ ደስ ይለኛል።' },
  { german: 'sich beschweren', amharic: 'ቅሬታ ማቅረብ', pronunciation: 'ዚሽ ቤሽቬረን', level: 'B1', category: 'verbs', example_de: 'Er beschwert sich über den Lärm.', example_am: 'ስለ ጫጫታው ቅሬታ ያቀርባል።' },
  { german: 'sich entschuldigen', amharic: 'ይቅርታ መጠየቅ', pronunciation: 'ዚሽ ኤንትሹልዲገን', level: 'B1', category: 'verbs', example_de: 'Ich entschuldige mich für die Verspätung.', example_am: 'ስለ ዘግይቶ መምጣቴ ይቅርታ እጠይቃለሁ።' },
  { german: 'sich gewöhnen', amharic: 'መለመድ', pronunciation: 'ዚሽ ገቮነን', level: 'B1', category: 'verbs', example_de: 'Ich gewöhne mich an das Wetter.', example_am: 'የአየር ሁኔታውን እየለመድኩ ነው።' },
  { german: 'sich bemühen', amharic: 'መጣር', pronunciation: 'ዚሽ ቤሚኤን', level: 'B2', category: 'verbs', example_de: 'Er bemüht sich sehr.', example_am: 'በጣም ይጣራል።' },
  { german: 'vorschlagen', amharic: 'ሀሳብ ማቅረብ', pronunciation: 'ፎርሽላገን', level: 'B1', category: 'verbs', example_de: 'Ich schlage ein Treffen vor.', example_am: 'ስብሰባ አቀርባለሁ።' },
  { german: 'vergleichen', amharic: 'ማነፃፀር', pronunciation: 'ፌርግላይኸን', level: 'B1', category: 'verbs', example_de: 'Vergleiche die Preise!', example_am: 'ዋጋዎቹን አነፃፅር!' },
  { german: 'übersetzen', amharic: 'መተርጎም', pronunciation: 'ኡበርዜጸን', level: 'B1', category: 'verbs', example_de: 'Kannst du das übersetzen?', example_am: 'ልትተረጉመው ትችላለህ?' },
  { german: 'sich anmelden', amharic: 'መመዝገብ', pronunciation: 'ዚሽ አንሜልደን', level: 'B1', category: 'verbs', example_de: 'Ich melde mich für den Kurs an.', example_am: 'ለኮርሱ እመዘገባለሁ።' },
  { german: 'teilnehmen', amharic: 'መሳተፍ', pronunciation: 'ታይልኔመን', level: 'B1', category: 'verbs', example_de: 'Ich nehme am Kurs teil.', example_am: 'በኮርሱ እሳተፋለሁ።' },
  { german: 'entwickeln', amharic: 'ማዳበር', pronunciation: 'ኤንትቪከልን', level: 'B2', category: 'verbs', example_de: 'Wir entwickeln eine neue App.', example_am: 'አዲስ አፕ እናዳብራለን።' },
  { german: 'verwenden', amharic: 'መጠቀም', pronunciation: 'ፌርቬንደን', level: 'B2', category: 'verbs', example_de: 'Verwende ein Wörterbuch.', example_am: 'መዝገበ ቃላት ተጠቀም።' },
  { german: 'unterstützen', amharic: 'መደገፍ', pronunciation: 'ኡንተርሽቱጸን', level: 'B2', category: 'verbs', example_de: 'Meine Familie unterstützt mich.', example_am: 'ቤተሰቤ ይደግፈኛል።' },
  { german: 'verbessern', amharic: 'ማሻሻል', pronunciation: 'ፌርቤሰርን', level: 'B1', category: 'verbs', example_de: 'Ich möchte mein Deutsch verbessern.', example_am: 'ጀርመንኛዬን ማሻሻል እፈልጋለሁ።' },
  { german: 'erreichen', amharic: 'መድረስ / ማግኘት', pronunciation: 'ኤርራይኸን', level: 'B2', category: 'verbs', example_de: 'Ich habe mein Ziel erreicht.', example_am: 'ግቤን ደርሻለሁ።' },
  { german: 'die Herausforderung', amharic: 'ፈተና / ተግዳሮት', pronunciation: 'ዲ ሄራውስፎርደሩንግ', level: 'B2', category: 'work', example_de: 'Das ist eine große Herausforderung.', example_am: 'ይህ ትልቅ ተግዳሮት ነው።' },
  { german: 'die Voraussetzung', amharic: 'ቅድመ ሁኔታ', pronunciation: 'ዲ ፎራውስዜጹንግ', level: 'B2', category: 'work', example_de: 'Deutschkenntnisse sind eine Voraussetzung.', example_am: 'የጀርመንኛ ዕውቀት ቅድመ ሁኔታ ነው።' },
  { german: 'die Genehmigung', amharic: 'ፈቃድ / ማረጋገጫ', pronunciation: 'ዲ ገኔሚጉንግ', level: 'B2', category: 'legal_admin', example_de: 'Sie brauchen eine Genehmigung.', example_am: 'ፈቃድ ያስፈልግዎታል።' },
  { german: 'die Beratung', amharic: 'ምክር / አማካሪ', pronunciation: 'ዲ ቤራቱንግ', level: 'B2', category: 'work', example_de: 'Ich brauche eine Beratung.', example_am: 'ምክር እፈልጋለሁ።' },
  { german: 'die Zusammenarbeit', amharic: 'ትብብር', pronunciation: 'ዲ ጹዛመንአርባይት', level: 'B2', category: 'work', example_de: 'Gute Zusammenarbeit ist wichtig.', example_am: 'ጥሩ ትብብር አስፈላጊ ነው።' },
  { german: 'die Integration', amharic: 'ውህደት', pronunciation: 'ዲ ኢንተግራጺዮን', level: 'B2', category: 'work', example_de: 'Integration braucht Zeit.', example_am: 'ውህደት ጊዜ ይወስዳል።' },
  { german: 'die Nachhaltigkeit', amharic: 'ዘላቂነት', pronunciation: 'ዲ ናኽሃልቲሽካይት', level: 'B2', category: 'nature', example_de: 'Nachhaltigkeit ist wichtig für die Umwelt.', example_am: 'ዘላቂነት ለአካባቢ አስፈላጊ ነው።' },
  { german: 'die Meinungsfreiheit', amharic: 'የሃሳብ ነፃነት', pronunciation: 'ዲ ማይኑንግስፍራይሃይት', level: 'B2', category: 'work', example_de: 'Meinungsfreiheit ist ein Grundrecht.', example_am: 'የሃሳብ ነፃነት መሠረታዊ መብት ነው።' },
  { german: 'der Wohnort', amharic: 'መኖሪያ ቦታ', pronunciation: 'ዴር ቮንኦርት', level: 'B1', category: 'everyday', example_de: 'Was ist Ihr Wohnort?', example_am: 'የመኖሪያ ቦታዎ የት ነው?' },
  { german: 'die Wohnung', amharic: 'ቤት / አፓርታማ', pronunciation: 'ዲ ቮኑንግ', level: 'A2', category: 'everyday', example_de: 'Ich suche eine Wohnung.', example_am: 'ቤት እፈልጋለሁ።' },
  { german: 'der Nachbar', amharic: 'ጎረቤት', pronunciation: 'ዴር ናኽባር', level: 'A2', category: 'everyday', example_de: 'Mein Nachbar ist nett.', example_am: 'ጎረቤቴ ደግ ነው።' },
  { german: 'das Geschäft', amharic: 'ሱቅ', pronunciation: 'ዳስ ገሸፍት', level: 'A2', category: 'shopping', example_de: 'Das Geschäft schließt um sechs.', example_am: 'ሱቁ በስድስት ሰዓት ይዘጋል።' },
  { german: 'die Größe', amharic: 'መጠን', pronunciation: 'ዲ ግሮሰ', level: 'A2', category: 'shopping', example_de: 'Welche Größe haben Sie?', example_am: 'ልክዎ ምን ያህል ነው?' },
  { german: 'die Tasche', amharic: 'ቦርሳ', pronunciation: 'ዲ ታሸ', level: 'A1', category: 'everyday', example_de: 'Die Tasche ist schwer.', example_am: 'ቦርሳው ከባድ ነው።' },
  { german: 'der Regenschirm', amharic: 'ጃንጥላ', pronunciation: 'ዴር ሬገንሽሪም', level: 'A2', category: 'everyday', example_de: 'Nimm den Regenschirm mit!', example_am: 'ጃንጥላ ይዘህ ሂድ!' },
  { german: 'der Urlaub', amharic: 'እረፍት / ዕረፍት', pronunciation: 'ዴር ኡርላውብ', level: 'A2', category: 'everyday', example_de: 'Ich fahre in den Urlaub.', example_am: 'ለእረፍት እሄዳለሁ።' },
  { german: 'das Geschenk', amharic: 'ስጦታ', pronunciation: 'ዳስ ገሸንክ', level: 'A2', category: 'everyday', example_de: 'Das ist ein Geschenk für dich.', example_am: 'ይህ ለአንተ ስጦታ ነው።' },
  { german: 'die Uhr', amharic: 'ሰዓት', pronunciation: 'ዲ ኡር', level: 'A1', category: 'time', example_de: 'Wie viel Uhr ist es?', example_am: 'ስንት ሰዓት ነው?' },
  { german: 'die Stunde', amharic: 'ሰዓት (ቆይታ)', pronunciation: 'ዲ ሽቱንደ', level: 'A1', category: 'time', example_de: 'Der Kurs dauert eine Stunde.', example_am: 'ኮርሱ አንድ ሰዓት ይወስዳል።' },
  { german: 'die Minute', amharic: 'ደቂቃ', pronunciation: 'ዲ ሚኑተ', level: 'A1', category: 'time', example_de: 'Warte fünf Minuten.', example_am: 'አምስት ደቂቃ ጠብቅ።' },
  { german: 'der Monat', amharic: 'ወር', pronunciation: 'ዴር ሞናት', level: 'A1', category: 'time', example_de: 'Ich bin seit einem Monat hier.', example_am: 'ከአንድ ወር ጀምሮ እዚህ ነኝ።' },
  { german: 'das Jahr', amharic: 'ዓመት', pronunciation: 'ዳስ ያር', level: 'A1', category: 'time', example_de: 'Ein Jahr hat zwölf Monate.', example_am: 'አንድ ዓመት አሥራ ሁለት ወራት አሉት።' },
  { german: 'jetzt', amharic: 'አሁን', pronunciation: 'ዬጽት', level: 'A1', category: 'time', example_de: 'Ich muss jetzt gehen.', example_am: 'አሁን መሄድ አለብኝ።' },
  { german: 'früh', amharic: 'ቀድሞ / ጠዋት', pronunciation: 'ፍሪ', level: 'A1', category: 'time', example_de: 'Ich stehe früh auf.', example_am: 'ጠዋት እነሳለሁ።' },
  { german: 'spät', amharic: 'ዘግይቶ', pronunciation: 'ሽፔት', level: 'A1', category: 'time', example_de: 'Es ist schon spät.', example_am: 'ቀድሞ ዘግይቷል።' },
  { german: 'immer', amharic: 'ሁልጊዜ', pronunciation: 'ኢመር', level: 'A1', category: 'time', example_de: 'Ich trinke immer Kaffee am Morgen.', example_am: 'ጠዋት ሁልጊዜ ቡና እጠጣለሁ።' },
  { german: 'manchmal', amharic: 'አንዳንዴ', pronunciation: 'ማንሽማል', level: 'A1', category: 'time', example_de: 'Manchmal gehe ich ins Kino.', example_am: 'አንዳንዴ ሲኒማ እሄዳለሁ።' },
  { german: 'nie', amharic: 'በፍጹም', pronunciation: 'ኒ', level: 'A1', category: 'time', example_de: 'Ich trinke nie Alkohol.', example_am: 'በፍጹም አልኮል አልጠጣም።' },
  { german: 'oft', amharic: 'ብዙ ጊዜ', pronunciation: 'ኦፍት', level: 'A1', category: 'time', example_de: 'Ich gehe oft spazieren.', example_am: 'ብዙ ጊዜ እንሄዳለሁ።' },
  { german: 'hundert', amharic: 'መቶ', pronunciation: 'ሁንደርት', level: 'A1', category: 'numbers', example_de: 'Das kostet hundert Euro.', example_am: 'መቶ ዩሮ ያስከፍላል።' },
  { german: 'tausend', amharic: 'ሺህ', pronunciation: 'ታውዘንት', level: 'A2', category: 'numbers', example_de: 'Tausend Dank!', example_am: 'ሺህ ምስጋና!' },
  { german: 'die Million', amharic: 'ሚሊዮን', pronunciation: 'ዲ ሚልዮን', level: 'A2', category: 'numbers', example_de: 'Berlin hat über drei Millionen Einwohner.', example_am: 'በርሊን ከሦስት ሚሊዮን በላይ ነዋሪዎች አሉት።' },
  { german: 'der erste', amharic: 'የመጀመሪያ', pronunciation: 'ዴር ኤርስተ', level: 'A2', category: 'numbers', example_de: 'Das ist mein erster Tag.', example_am: 'ይህ የመጀመሪያ ቀኔ ነው።' },
  { german: 'der zweite', amharic: 'ሁለተኛ', pronunciation: 'ዴር ጽቫይተ', level: 'A2', category: 'numbers', example_de: 'Das zweite Stockwerk.', example_am: 'ሁለተኛ ወለል።' },
  { german: 'braun', amharic: 'ቡናማ', pronunciation: 'ብራውን', level: 'A1', category: 'colors', example_de: 'Die Schokolade ist braun.', example_am: 'ቸኮሌቱ ቡናማ ነው።' },
  { german: 'grau', amharic: 'ግራጫ', pronunciation: 'ግራው', level: 'A2', category: 'colors', example_de: 'Der Himmel ist heute grau.', example_am: 'ዛሬ ሰማዩ ግራጫ ነው።' },
  { german: 'rosa', amharic: 'ሮዝ', pronunciation: 'ሮዛ', level: 'A2', category: 'colors', example_de: 'Das Kleid ist rosa.', example_am: 'ቀሚሱ ሮዝ ነው።' },
  { german: 'lila', amharic: 'ሐምራዊ', pronunciation: 'ሊላ', level: 'A2', category: 'colors', example_de: 'Die Blume ist lila.', example_am: 'አበባው ሐምራዊ ነው።' },
  { german: 'orange', amharic: 'ብርቱካናማ', pronunciation: 'ኦራንጅ', level: 'A1', category: 'colors', example_de: 'Die Orange ist orange.', example_am: 'ብርቱካኑ ብርቱካናማ ነው።' },
  { german: 'Herzlich willkommen', amharic: 'እንኳን ደህና መጡ', pronunciation: 'ሄርጽሊሽ ቪልኮመን', level: 'A1', category: 'greetings', example_de: 'Herzlich willkommen in der Schweiz!', example_am: 'እንኳን ደህና ወደ ስዊዘርላንድ መጡ!' },
  { german: 'Wie bitte?', amharic: 'ምን አሉ?', pronunciation: 'ቪ ቢተ?', level: 'A1', category: 'greetings', example_de: 'Wie bitte? Ich habe das nicht verstanden.', example_am: 'ምን አሉ? አልገባኝም።' },
  { german: 'Alles Gute', amharic: 'መልካም ምኞት', pronunciation: 'አለስ ጉተ', level: 'A1', category: 'greetings', example_de: 'Alles Gute zum Geburtstag!', example_am: 'መልካም ልደት!' },
  { german: 'Viel Glück', amharic: 'መልካም ዕድል', pronunciation: 'ፊል ግሊክ', level: 'A1', category: 'greetings', example_de: 'Viel Glück bei der Prüfung!', example_am: 'ለፈተናው መልካም ዕድል!' },
  { german: 'Viel Spaß', amharic: 'ተዝናኑ', pronunciation: 'ፊል ሽፓስ', level: 'A1', category: 'greetings', example_de: 'Viel Spaß im Urlaub!', example_am: 'በዕረፍት ተዝናኑ!' },
  { german: 'der Cousin', amharic: 'የአጎት/አክስት ልጅ (ወንድ)', pronunciation: 'ዴር ኩዛን', level: 'A2', category: 'family', example_de: 'Mein Cousin studiert Medizin.', example_am: 'የአጎቴ ልጅ ሕክምና ያጠናል።' },
  { german: 'die Cousine', amharic: 'የአጎት/አክስት ልጅ (ሴት)', pronunciation: 'ዲ ኩዚነ', level: 'A2', category: 'family', example_de: 'Meine Cousine lebt in Zürich.', example_am: 'የአክስቴ ልጅ ዙሪክ ትኖራለች።' },
  { german: 'der Neffe', amharic: 'የወንድም/እህት ልጅ (ወንድ)', pronunciation: 'ዴር ኔፈ', level: 'A2', category: 'family', example_de: 'Mein Neffe ist fünf Jahre alt.', example_am: 'የወንድሜ ልጅ አምስት ዓመቱ ነው።' },
  { german: 'die Nichte', amharic: 'የወንድም/እህት ልጅ (ሴት)', pronunciation: 'ዲ ኒሽተ', level: 'A2', category: 'family', example_de: 'Meine Nichte geht in die Schule.', example_am: 'የእህቴ ልጅ ትምህርት ቤት ትሄዳለች።' },
  { german: 'der Schwiegervater', amharic: 'አማት (ወንድ)', pronunciation: 'ዴር ሽቪገርፋተር', level: 'B1', category: 'family', example_de: 'Mein Schwiegervater ist sehr nett.', example_am: 'አማቴ በጣም ደግ ናቸው።' },
  { german: 'die Schwiegermutter', amharic: 'አማት (ሴት)', pronunciation: 'ዲ ሽቪገርሙተር', level: 'B1', category: 'family', example_de: 'Meine Schwiegermutter kocht gut.', example_am: 'አማቴ ጥሩ ምግብ ታበስላለች።' },
  { german: 'der Enkel', amharic: 'የልጅ ልጅ (ወንድ)', pronunciation: 'ዴር ኤንከል', level: 'A2', category: 'family', example_de: 'Mein Enkel ist noch ein Baby.', example_am: 'የልጄ ልጅ ገና ሕፃን ነው።' },
  { german: 'die Enkelin', amharic: 'የልጅ ልጅ (ሴት)', pronunciation: 'ዲ ኤንከሊን', level: 'A2', category: 'family', example_de: 'Meine Enkelin geht in den Kindergarten.', example_am: 'የልጄ ልጅ ኪንደርጋርተን ትሄዳለች።' },
  { german: 'das Eis', amharic: 'አይስ ክሬም', pronunciation: 'ዳስ አይስ', level: 'A1', category: 'food', example_de: 'Im Sommer esse ich gern Eis.', example_am: 'በበጋ አይስ ክሬም መብላት እወዳለሁ።' },
  { german: 'die Wurst', amharic: 'ሳሙና (ሶሴጅ)', pronunciation: 'ዲ ቩርስት', level: 'A1', category: 'food', example_de: 'Bratwurst ist sehr beliebt in Deutschland.', example_am: 'ብራትቩርስት በጀርመን በጣም ተወዳጅ ነው።' },
  { german: 'der Honig', amharic: 'ማር', pronunciation: 'ዴር ሆኒሽ', level: 'A2', category: 'food', example_de: 'Äthiopischer Honig ist sehr gut.', example_am: 'የኢትዮጵያ ማር በጣም ጥሩ ነው።' },
  { german: 'die Marmelade', amharic: 'ማርማላታ', pronunciation: 'ዲ ማርመላደ', level: 'A2', category: 'food', example_de: 'Ich esse Brot mit Marmelade.', example_am: 'ዳቦ ከማርማላታ ጋር እበላለሁ።' },
  { german: 'beginnen', amharic: 'መጀመር', pronunciation: 'በጊነን', level: 'A2', category: 'verbs', example_de: 'Der Kurs beginnt um 9 Uhr.', example_am: 'ኮርሱ ሰዓት 9 ላይ ይጀምራል።' },
  { german: 'besuchen', amharic: 'መጎብኘት', pronunciation: 'በዙኸን', level: 'A2', category: 'verbs', example_de: 'Ich besuche meine Eltern am Wochenende.', example_am: 'ቅዳሜ እና እሁድ ወላጆቼን እጎበኛለሁ።' },
  { german: 'unterschreiben', amharic: 'መፈረም', pronunciation: 'ኡንተርሽራይበን', level: 'B1', category: 'verbs', example_de: 'Bitte unterschreiben Sie hier.', example_am: 'እባክዎ እዚህ ይፈርሙ።' },
  { german: 'versprechen', amharic: 'ቃል መግባት', pronunciation: 'ፈርሽፕሬኸን', level: 'B1', category: 'verbs', example_de: 'Ich verspreche dir, pünktlich zu sein.', example_am: 'ሰዓት አክባሪ ለመሆን ቃል እገባለሁ።' },
  { german: 'vermeiden', amharic: 'ማስቀረት', pronunciation: 'ፈርማይደን', level: 'B2', category: 'verbs', example_de: 'Ich versuche, Fehler zu vermeiden.', example_am: 'ስህተቶችን ለማስቀረት እሞክራለሁ።' },
  { german: 'sich erinnern', amharic: 'ማስታወስ', pronunciation: 'ዚሽ ኤሪነርን', level: 'B1', category: 'verbs', example_de: 'Ich erinnere mich an den Tag.', example_am: 'ያንን ቀን አስታውሳለሁ።' },
  { german: 'zustimmen', amharic: 'መስማማት', pronunciation: 'ጹሽቲመን', level: 'B1', category: 'verbs', example_de: 'Ich stimme Ihnen zu.', example_am: 'ከእርስዎ ጋር እስማማለሁ።' },
  { german: 'ablehnen', amharic: 'ማስተባበል', pronunciation: 'አብሌነን', level: 'B1', category: 'verbs', example_de: 'Er hat das Angebot abgelehnt.', example_am: 'ቅናሹን ተቀብሏል።' },
  { german: 'die Zeitung', amharic: 'ጋዜጣ', pronunciation: 'ዲ ጻይቱንግ', level: 'A2', category: 'everyday', example_de: 'Ich lese jeden Morgen die Zeitung.', example_am: 'በየጠዋቱ ጋዜጣ አነባለሁ።' },
  { german: 'der Balkon', amharic: 'በረንዳ', pronunciation: 'ዴር ባልኮን', level: 'A2', category: 'house', example_de: 'Wir sitzen auf dem Balkon.', example_am: 'በረንዳ ላይ ቁጭ ብለናል።' },
  { german: 'der Keller', amharic: 'ምድር ቤት', pronunciation: 'ዴር ኬለር', level: 'A2', category: 'house', example_de: 'Im Keller ist es kalt.', example_am: 'ምድር ቤት ውስጥ ቀዝቃዛ ነው።' },
  { german: 'die Waschmaschine', amharic: 'ልብስ ማጠቢያ ማሽን', pronunciation: 'ዲ ቫሽማሺነ', level: 'A2', category: 'house', example_de: 'Die Waschmaschine ist kaputt.', example_am: 'ልብስ ማጠቢያ ማሽኑ ተበላሽቷል።' },
  { german: 'der Staubsauger', amharic: 'ቫኪዩም ማጽጃ', pronunciation: 'ዴር ሽታውብዛውገር', level: 'B1', category: 'house', example_de: 'Ich sauge mit dem Staubsauger.', example_am: 'በቫኪዩም ማጽጃ እጸዳለሁ።' },
  { german: 'das Knie', amharic: 'ጉልበት', pronunciation: 'ዳስ ክኒ', level: 'A2', category: 'body', example_de: 'Mein Knie tut weh.', example_am: 'ጉልበቴ ያማል።' },
  { german: 'die Schulter', amharic: 'ትከሻ', pronunciation: 'ዲ ሹልተር', level: 'A2', category: 'body', example_de: 'Er hat breite Schultern.', example_am: 'ሰፊ ትከሻ አለው።' },
  { german: 'der Daumen', amharic: 'አውራ ጣት', pronunciation: 'ዴር ዳውመን', level: 'A2', category: 'body', example_de: 'Ich drücke dir die Daumen!', example_am: 'መልካም ዕድል እመኝልሃለሁ!' },
  { german: 'die Stirn', amharic: 'ግንባር', pronunciation: 'ዲ ሽቲርን', level: 'B1', category: 'body', example_de: 'Er hat Fieber, seine Stirn ist heiß.', example_am: 'ትኩሳት አለበት፣ ግንባሩ ሞቃት ነው።' },
  { german: 'die Lunge', amharic: 'ሳንባ', pronunciation: 'ዲ ሉንገ', level: 'B1', category: 'body', example_de: 'Rauchen schadet der Lunge.', example_am: 'ማጨስ ሳንባን ይጎዳል።' },
  { german: 'der Anzug', amharic: 'ሱት', pronunciation: 'ዴር አንጹግ', level: 'A2', category: 'clothing', example_de: 'Er trägt einen schwarzen Anzug.', example_am: 'ጥቁር ሱት ለብሷል።' },
  { german: 'der Gürtel', amharic: 'ቀበቶ', pronunciation: 'ዴር ጊርተል', level: 'A2', category: 'clothing', example_de: 'Der Gürtel ist aus Leder.', example_am: 'ቀበቶው ከቆዳ ነው።' },
  { german: 'der Handschuh', amharic: 'ጓንት', pronunciation: 'ዴር ሃንትሹ', level: 'A2', category: 'clothing', example_de: 'Im Winter trage ich Handschuhe.', example_am: 'በክረምት ጓንት አደርጋለሁ።' },
  { german: 'der Stiefel', amharic: 'ቦት ጫማ', pronunciation: 'ዴር ሽቲፈል', level: 'A2', category: 'clothing', example_de: 'Im Winter trage ich Stiefel.', example_am: 'በክረምት ቦት ጫማ አጠልቃለሁ።' },
  { german: 'die Straßenbahn', amharic: 'ትራም', pronunciation: 'ዲ ሽትራሰንባን', level: 'A2', category: 'transport', example_de: 'Die Straßenbahn kommt alle 10 Minuten.', example_am: 'ትራሙ በየ 10 ደቂቃ ይመጣል።' },
  { german: 'der Führerschein', amharic: 'የመንጃ ፈቃድ', pronunciation: 'ዴር ፊረርሻይን', level: 'A2', category: 'transport', example_de: 'Ich mache meinen Führerschein.', example_am: 'የመንጃ ፈቃድ እየወሰድኩ ነው።' },
  { german: 'der Parkplatz', amharic: 'ማቆሚያ ቦታ (መኪና)', pronunciation: 'ዴር ፓርክፕላጽ', level: 'A2', category: 'transport', example_de: 'Es gibt keinen Parkplatz.', example_am: 'የመኪና ማቆሚያ ቦታ የለም።' },
  { german: 'die Autobahn', amharic: 'አውራ ጎዳና', pronunciation: 'ዲ አውቶባን', level: 'A2', category: 'transport', example_de: 'Auf der Autobahn darf man schnell fahren.', example_am: 'በአውራ ጎዳና ላይ በፍጥነት መንዳት ይፈቀዳል።' },
  { german: 'die Wiese', amharic: 'ሜዳ/ሣር', pronunciation: 'ዲ ቪዘ', level: 'A2', category: 'nature', example_de: 'Die Kinder spielen auf der Wiese.', example_am: 'ልጆች ሜዳ ላይ ይጫወታሉ።' },
  { german: 'die Insel', amharic: 'ደሴት', pronunciation: 'ዲ ኢንዘል', level: 'B1', category: 'nature', example_de: 'Mallorca ist eine spanische Insel.', example_am: 'ማዮርካ የስፔን ደሴት ናት።' },
  { german: 'der Nebel', amharic: 'ጉም', pronunciation: 'ዴር ኔበል', level: 'A2', category: 'weather', example_de: 'Im Herbst gibt es oft Nebel.', example_am: 'በመኸር ብዙ ጊዜ ጉም ይኖራል።' },
  { german: 'der Donner', amharic: 'ነጎድጓድ', pronunciation: 'ዴር ዶነር', level: 'B1', category: 'weather', example_de: 'Nach dem Blitz kommt der Donner.', example_am: 'መብረቅ ከመጣ በኋላ ነጎድጓድ ይመጣል።' },
  { german: 'der Blitz', amharic: 'መብረቅ', pronunciation: 'ዴር ብሊጽ', level: 'B1', category: 'weather', example_de: 'Der Blitz hat eingeschlagen.', example_am: 'መብረቅ መታ።' },
  { german: 'eifersüchtig', amharic: 'ቅናተኛ', pronunciation: 'አይፈርዙሽቲሽ', level: 'B1', category: 'emotions', example_de: 'Er ist eifersüchtig.', example_am: 'ቅናተኛ ነው።' },
  { german: 'enttäuscht', amharic: 'ተስፋ የቆረጠ', pronunciation: 'ኤንትቶይሽት', level: 'B1', category: 'emotions', example_de: 'Ich bin enttäuscht von dem Ergebnis.', example_am: 'ውጤቱ አስቀየመኝ።' },
  { german: 'überrascht', amharic: 'የተገረመ', pronunciation: 'ኡበርራሽት', level: 'A2', category: 'emotions', example_de: 'Ich bin überrascht!', example_am: 'ተገርሜያለሁ!' },
  { german: 'einsam', amharic: 'ብቸኛ', pronunciation: 'አይንዛም', level: 'B1', category: 'emotions', example_de: 'Manchmal fühle ich mich einsam.', example_am: 'አንዳንድ ጊዜ ብቸኛ ይሰማኛል።' },
  { german: 'dankbar', amharic: 'አመስጋኝ', pronunciation: 'ዳንክባር', level: 'A2', category: 'emotions', example_de: 'Ich bin Ihnen sehr dankbar.', example_am: 'በጣም አመሰግናለሁ።' },
  { german: 'lecker', amharic: 'ጣፋጭ', pronunciation: 'ሌከር', level: 'A1', category: 'adjectives', example_de: 'Das Essen ist sehr lecker.', example_am: 'ምግቡ በጣም ጣፋጭ ነው።' },
  { german: 'sauber', amharic: 'ንጹህ', pronunciation: 'ዛውበር', level: 'A1', category: 'adjectives', example_de: 'Die Wohnung ist sauber.', example_am: 'ቤቱ ንጹህ ነው።' },
  { german: 'schmutzig', amharic: 'ቆሻሻ', pronunciation: 'ሽሙጺሽ', level: 'A1', category: 'adjectives', example_de: 'Die Schuhe sind schmutzig.', example_am: 'ጫማዎቹ ቆሻሻ ናቸው።' },
  { german: 'laut', amharic: 'ጮኸት ያለ', pronunciation: 'ላውት', level: 'A1', category: 'adjectives', example_de: 'Die Musik ist zu laut.', example_am: 'ሙዚቃው በጣም ጮኸት ያለ ነው።' },
  { german: 'leise', amharic: 'ጸጥ ያለ', pronunciation: 'ላይዘ', level: 'A1', category: 'adjectives', example_de: 'Bitte sei leise!', example_am: 'ጸጥ በል!' },
  { german: 'freundlich', amharic: 'ተግባቢ', pronunciation: 'ፍሮይንድሊሽ', level: 'A2', category: 'adjectives', example_de: 'Die Nachbarn sind sehr freundlich.', example_am: 'ጎረቤቶቹ በጣም ተግባቢ ናቸው።' },
  { german: 'höflich', amharic: 'ትሁት', pronunciation: 'ሆፍሊሽ', level: 'A2', category: 'adjectives', example_de: 'Er ist immer höflich.', example_am: 'ሁልጊዜ ትሁት ነው።' },
  { german: 'pünktlich', amharic: 'ሰዓት አክባሪ', pronunciation: 'ፑንክትሊሽ', level: 'A2', category: 'adjectives', example_de: 'In der Schweiz ist man pünktlich.', example_am: 'ስዊዘርላንድ ውስጥ ሰዓት ያከብራሉ።' },
  { german: 'gefährlich', amharic: 'አደገኛ', pronunciation: 'ገፈርሊሽ', level: 'A2', category: 'adjectives', example_de: 'Es ist gefährlich, nachts allein zu gehen.', example_am: 'ሌሊት ብቻ መሄድ አደገኛ ነው።' },
  { german: 'gemütlich', amharic: 'ምቹ/ሞቅ ያለ', pronunciation: 'ገሙትሊሽ', level: 'A2', category: 'adjectives', example_de: 'Das Café ist sehr gemütlich.', example_am: 'ካፌው በጣም ምቹ ነው።' },
  { german: 'fleißig', amharic: 'ትጉ', pronunciation: 'ፍላይሲሽ', level: 'A2', category: 'adjectives', example_de: 'Sie ist eine fleißige Schülerin.', example_am: 'ትጉ ተማሪ ናት።' },
  { german: 'faul', amharic: 'ሰነፍ', pronunciation: 'ፋውል', level: 'A2', category: 'adjectives', example_de: 'Am Wochenende bin ich faul.', example_am: 'ቅዳሜ/እሁድ ሰነፍ ነኝ።' },
  { german: 'mutig', amharic: 'ጀግና/ድፍረት ያለው', pronunciation: 'ሙቲሽ', level: 'B1', category: 'adjectives', example_de: 'Du bist sehr mutig!', example_am: 'በጣም ጀግና ነህ!' },
  { german: 'der Architekt', amharic: 'አርክቴክት', pronunciation: 'ዴር አርሺቴክት', level: 'B1', category: 'professions', example_de: 'Der Architekt plant das neue Gebäude.', example_am: 'አርክቴክቱ አዲሱን ሕንፃ ያቅዳል።' },
  { german: 'der Friseur', amharic: 'ፀጉር ሠሪ', pronunciation: 'ዴር ፍሪዞር', level: 'A2', category: 'professions', example_de: 'Ich gehe zum Friseur.', example_am: 'ወደ ፀጉር ሠሪ እሄዳለሁ።' },
  { german: 'der Elektriker', amharic: 'ኤሌክትሪሻን', pronunciation: 'ዴር ኤሌክትሪከር', level: 'A2', category: 'professions', example_de: 'Der Elektriker repariert die Lampe.', example_am: 'ኤሌክትሪሻኑ መብራቱን ያስተካክላል።' },
  { german: 'der Maler', amharic: 'ቀባሪ/ሠዓሊ', pronunciation: 'ዴር ማለር', level: 'A2', category: 'professions', example_de: 'Der Maler streicht die Wand.', example_am: 'ቀባሪው ግድግዳውን ይቀባል።' },
  { german: 'der Journalist', amharic: 'ጋዜጠኛ', pronunciation: 'ዴር ዦርናሊስት', level: 'B1', category: 'professions', example_de: 'Die Journalistin schreibt einen Artikel.', example_am: 'ጋዜጠኛዋ ጽሑፍ ትጽፋለች።' },
  { german: 'das Stipendium', amharic: 'ስኮላርሺፕ', pronunciation: 'ዳስ ሽቲፔንዲዩም', level: 'B1', category: 'education', example_de: 'Sie hat ein Stipendium bekommen.', example_am: 'ስኮላርሺፕ አግኝታለች።' },
  { german: 'das Studium', amharic: 'ዩኒቨርሲቲ ትምህርት', pronunciation: 'ዳስ ሽቱዲዩም', level: 'A2', category: 'education', example_de: 'Das Studium dauert vier Jahre.', example_am: 'ዩኒቨርሲቲ ትምህርቱ አራት ዓመት ይቆያል።' },
  { german: 'der Abschluss', amharic: 'ምርቃት', pronunciation: 'ዴር አብሽሉስ', level: 'B1', category: 'education', example_de: 'Nach dem Abschluss suche ich Arbeit.', example_am: 'ከምርቃት በኋላ ሥራ እፈልጋለሁ።' },
  { german: 'das Bewerbungsschreiben', amharic: 'ማመልከቻ ደብዳቤ', pronunciation: 'ዳስ በቬርቡንግስሽራይበን', level: 'B1', category: 'work', example_de: 'Ich schreibe ein Bewerbungsschreiben.', example_am: 'ማመልከቻ ደብዳቤ እጽፋለሁ።' },
  { german: 'das Gehalt', amharic: 'ደሞዝ', pronunciation: 'ዳስ ገሃልት', level: 'A2', category: 'work', example_de: 'Das Gehalt wird am Ende des Monats gezahlt.', example_am: 'ደሞዝ በወር መጨረሻ ይከፈላል።' },
  { german: 'die Überstunde', amharic: 'ትርፍ ሰዓት', pronunciation: 'ዲ ኡበርሽቱንደ', level: 'B1', category: 'work', example_de: 'Ich mache oft Überstunden.', example_am: 'ብዙ ጊዜ ትርፍ ሰዓት እሠራለሁ።' },
  { german: 'der Feierabend', amharic: 'የሥራ ማብቂያ ጊዜ', pronunciation: 'ዴር ፋየራበንድ', level: 'A2', category: 'work', example_de: 'Nach Feierabend gehe ich ins Fitnessstudio.', example_am: 'ሥራ ሲያልቅ ወደ ጂም እሄዳለሁ።' },
  { german: 'der Rabatt', amharic: 'ቅናሽ', pronunciation: 'ዴር ራባት', level: 'A2', category: 'shopping', example_de: 'Es gibt 20% Rabatt.', example_am: '20% ቅናሽ አለ።' },
  { german: 'wandern', amharic: 'መራመድ/ተራራ መውጣት', pronunciation: 'ቫንደርን', level: 'A2', category: 'hobbies', example_de: 'Am Wochenende gehen wir wandern.', example_am: 'ቅዳሜ/እሁድ ለመራመድ እንሄዳለን።' },
  { german: 'zeichnen', amharic: 'መሳል', pronunciation: 'ጻይሽነን', level: 'A2', category: 'hobbies', example_de: 'Sie zeichnet gern Porträts.', example_am: 'ፎቶ መሳል ትወዳለች።' },
  { german: 'das Schach', amharic: 'ቼስ', pronunciation: 'ዳስ ሻኽ', level: 'A2', category: 'hobbies', example_de: 'Spielst du Schach?', example_am: 'ቼስ ትጫወታለህ?' },
  { german: 'stricken', amharic: 'መሥፋት', pronunciation: 'ሽትሪከን', level: 'B1', category: 'hobbies', example_de: 'Meine Großmutter strickt gern.', example_am: 'አያቴ መሥፋት ትወዳለች።' },
  { german: 'der Verein', amharic: 'ማኅበር/ክለብ', pronunciation: 'ዴር ፈራይን', level: 'A2', category: 'hobbies', example_de: 'Ich bin in einem Sportverein.', example_am: 'የስፖርት ክለብ አባል ነኝ።' },
  { german: 'die Datei', amharic: 'ፋይል', pronunciation: 'ዲ ዳታይ', level: 'A2', category: 'technology', example_de: 'Öffne bitte die Datei.', example_am: 'ፋይሉን ክፈት።' },
  { german: 'speichern', amharic: 'ማስቀመጥ (ሴቭ)', pronunciation: 'ሽፓይኸርን', level: 'A2', category: 'technology', example_de: 'Vergiss nicht, die Datei zu speichern.', example_am: 'ፋይሉን ማስቀመጥ አትርሳ።' },
  { german: 'die Webseite', amharic: 'ድረ-ገጽ', pronunciation: 'ዲ ቬብዛይተ', level: 'A2', category: 'technology', example_de: 'Besuchen Sie unsere Webseite.', example_am: 'ድረ-ገጻችንን ይጎብኙ።' },
  { german: 'die Ecke', amharic: 'ማዕዘን', pronunciation: 'ዲ ኤከ', level: 'A1', category: 'directions', example_de: 'An der Ecke biegen Sie rechts ab.', example_am: 'ማዕዘኑ ላይ ወደ ቀኝ ያዙ።' },
  { german: 'der Eingang', amharic: 'መግቢያ', pronunciation: 'ዴር አይንጋንግ', level: 'A2', category: 'directions', example_de: 'Der Eingang ist auf der linken Seite.', example_am: 'መግቢያው ግራ በኩል ነው።' },
  { german: 'der Ausgang', amharic: 'መውጫ', pronunciation: 'ዴር አውስጋንግ', level: 'A2', category: 'directions', example_de: 'Wo ist der Ausgang?', example_am: 'መውጫው የት ነው?' },
  { german: 'die Vorspeise', amharic: 'ቅድመ-ምግብ', pronunciation: 'ዲ ፎርሽፓይዘ', level: 'A2', category: 'restaurant', example_de: 'Als Vorspeise nehme ich Suppe.', example_am: 'ለቅድመ-ምግብ ሾርባ እወስዳለሁ።' },
  { german: 'die Hauptspeise', amharic: 'ዋና ምግብ', pronunciation: 'ዲ ሃውፕትሽፓይዘ', level: 'A2', category: 'restaurant', example_de: 'Als Hauptspeise hätte ich gern Fisch.', example_am: 'ለዋና ምግብ ዓሣ ብፈልግ።' },
  { german: 'die Nachspeise', amharic: 'ማጣፈጫ', pronunciation: 'ዲ ናኽሽፓይዘ', level: 'A2', category: 'restaurant', example_de: 'Möchten Sie eine Nachspeise?', example_am: 'ማጣፈጫ ይፈልጋሉ?' },
  { german: 'der Schnupfen', amharic: 'ጉንፋን', pronunciation: 'ዴር ሽኑፕፈን', level: 'A2', category: 'health', example_de: 'Ich habe Schnupfen.', example_am: 'ጉንፋን ያዘኝ።' },
  { german: 'die Spritze', amharic: 'መርፌ', pronunciation: 'ዲ ሽፕሪጸ', level: 'B1', category: 'health', example_de: 'Der Arzt gibt eine Spritze.', example_am: 'ሐኪሙ መርፌ ይሰጣል።' },
  { german: 'die Notaufnahme', amharic: 'ድንገተኛ ክፍል', pronunciation: 'ዲ ኖትአውፍናመ', level: 'B1', category: 'health', example_de: 'Gehen Sie sofort in die Notaufnahme.', example_am: 'ወዲያውኑ ወደ ድንገተኛ ክፍል ይሂዱ።' },
  { german: 'Wann?', amharic: 'መቼ?', pronunciation: 'ቫን?', level: 'A1', category: 'questions', example_de: 'Wann kommst du?', example_am: 'መቼ ትመጣለህ?' },
  { german: 'Warum?', amharic: 'ለምን?', pronunciation: 'ቫሩም?', level: 'A1', category: 'questions', example_de: 'Warum lernst du Deutsch?', example_am: 'ለምን ጀርመንኛ ትማራለህ?' },
  { german: 'Welcher?', amharic: 'የትኛው?', pronunciation: 'ቬልሸር?', level: 'A1', category: 'questions', example_de: 'Welcher Bus fährt zum Bahnhof?', example_am: 'የትኛው አውቶቡስ ወደ ባቡር ጣቢያ ይሄዳል?' },
  { german: 'Wie lange?', amharic: 'ምን ያህል ጊዜ?', pronunciation: 'ቪ ላንገ?', level: 'A1', category: 'questions', example_de: 'Wie lange dauert der Kurs?', example_am: 'ኮርሱ ምን ያህል ጊዜ ይቆያል?' },
  { german: 'die Gelegenheit', amharic: 'ዕድል/አጋጣሚ', pronunciation: 'ዲ ገለገንሃይት', level: 'B1', category: 'work', example_de: 'Das ist eine gute Gelegenheit.', example_am: 'ይህ ጥሩ ዕድል ነው።' },
  { german: 'die Meinung', amharic: 'አስተያየት', pronunciation: 'ዲ ማይኑንግ', level: 'B1', category: 'everyday', example_de: 'Meiner Meinung nach ist das richtig.', example_am: 'በእኔ አስተያየት ያ ትክክል ነው።' },
  { german: 'der Zusammenhang', amharic: 'ግንኙነት/ዐውድ', pronunciation: 'ዴር ጹዛመንሃንግ', level: 'B2', category: 'education', example_de: 'In diesem Zusammenhang ist es wichtig.', example_am: 'በዚህ ዐውድ ውስጥ አስፈላጊ ነው።' },
  { german: 'die Entwicklung', amharic: 'ልማት/እድገት', pronunciation: 'ዲ ኤንትቪክሉንግ', level: 'B2', category: 'work', example_de: 'Die wirtschaftliche Entwicklung ist positiv.', example_am: 'የኢኮኖሚ ልማቱ አዎንታዊ ነው።' },
  { german: 'der Einfluss', amharic: 'ተጽዕኖ', pronunciation: 'ዴር አይንፍሉስ', level: 'B2', category: 'education', example_de: 'Das Internet hat großen Einfluss auf die Gesellschaft.', example_am: 'ኢንተርኔት በማኅበረሰብ ላይ ትልቅ ተጽዕኖ አለው።' },
  { german: 'die Lösung', amharic: 'መፍትሔ', pronunciation: 'ዲ ሎዙንግ', level: 'B1', category: 'everyday', example_de: 'Wir müssen eine Lösung finden.', example_am: 'መፍትሔ ማግኘት አለብን።' },
  { german: 'der Unterschied', amharic: 'ልዩነት', pronunciation: 'ዴር ኡንተርሺድ', level: 'B1', category: 'everyday', example_de: 'Was ist der Unterschied?', example_am: 'ልዩነቱ ምንድን ነው?' },
  { german: 'die Unterkunft', amharic: 'መኖሪያ/ማረፊያ', pronunciation: 'ዲ ኡንተርኩንፍት', level: 'B1', category: 'everyday', example_de: 'Wir suchen eine Unterkunft.', example_am: 'ማረፊያ እንፈልጋለን።' },
  { german: 'die Frist', amharic: 'ጊዜ ገደብ', pronunciation: 'ዲ ፍሪስት', level: 'B1', category: 'legal_admin', example_de: 'Die Frist endet am Freitag.', example_am: 'የጊዜ ገደቡ አርብ ያበቃል።' },
  { german: 'die Bescheinigung', amharic: 'ማረጋገጫ', pronunciation: 'ዲ በሻይኒጉንግ', level: 'B1', category: 'legal_admin', example_de: 'Ich brauche eine Bescheinigung vom Arzt.', example_am: 'ከሐኪም ማረጋገጫ ያስፈልገኛል።' },
  { german: 'der Strafzettel', amharic: 'የቅጣት ወረቀት', pronunciation: 'ዴር ሽትራፍጸተል', level: 'B1', category: 'legal_admin', example_de: 'Ich habe einen Strafzettel bekommen.', example_am: 'የቅጣት ወረቀት ደርሶኛል።' },
  { german: 'die Vollmacht', amharic: 'ውክልና', pronunciation: 'ዲ ፎልማኽት', level: 'B2', category: 'legal_admin', example_de: 'Sie brauchen eine Vollmacht.', example_am: 'ውክልና ያስፈልግዎታል።' },
  { german: 'der Zeuge', amharic: 'ምስክር', pronunciation: 'ዴር ጸይገ', level: 'B2', category: 'legal_admin', example_de: 'Der Zeuge hat alles gesehen.', example_am: 'ምስክሩ ሁሉንም አይቷል።' },
  { german: 'der Widerspruch', amharic: 'ተቃውሞ/ይግባኝ', pronunciation: 'ዴር ቪደርሽፕሩኽ', level: 'B2', category: 'legal_admin', example_de: 'Sie können Widerspruch einlegen.', example_am: 'ይግባኝ ማለት ይችላሉ።' },
  { german: 'die Demokratie', amharic: 'ዴሞክራሲ', pronunciation: 'ዲ ዴሞክራቲ', level: 'B2', category: 'education', example_de: 'Die Schweiz ist eine Demokratie.', example_am: 'ስዊዘርላንድ ዴሞክራሲያዊ ሀገር ናት።' },
  { german: 'das Grundgesetz', amharic: 'ሕገ-መንግሥት', pronunciation: 'ዳስ ግሩንድገዜጽ', level: 'B2', category: 'legal_admin', example_de: 'Das Grundgesetz schützt die Menschenrechte.', example_am: 'ሕገ-መንግሥቱ የሰብአዊ መብቶችን ይጠብቃል።' },
  { german: 'die Pflicht', amharic: 'ግዴታ', pronunciation: 'ዲ ፕፍሊሽት', level: 'B1', category: 'everyday', example_de: 'Es ist unsere Pflicht, zu helfen.', example_am: 'መርዳት ግዴታችን ነው።' },
  { german: 'die Freiheit', amharic: 'ነጻነት', pronunciation: 'ዲ ፍራይሃይት', level: 'B1', category: 'everyday', example_de: 'Freiheit ist ein hohes Gut.', example_am: 'ነጻነት ከፍተኛ ዋጋ ያለው ነው።' },
  { german: 'die Gerechtigkeit', amharic: 'ፍትሕ', pronunciation: 'ዲ ገሬሽቲሽካይት', level: 'B2', category: 'education', example_de: 'Gerechtigkeit ist ein wichtiger Wert.', example_am: 'ፍትሕ አስፈላጊ ዋጋ ነው።' },
  { german: 'das Vertrauen', amharic: 'እምነት/ተስፋ', pronunciation: 'ዳስ ፈርትራውን', level: 'B1', category: 'emotions', example_de: 'Vertrauen muss man aufbauen.', example_am: 'እምነት መገንባት ያስፈልጋል።' },
  { german: 'die Wahrheit', amharic: 'እውነት', pronunciation: 'ዲ ቫርሃይት', level: 'B1', category: 'everyday', example_de: 'Sag mir die Wahrheit!', example_am: 'እውነቱን ንገረኝ!' },
  { german: 'die Erziehung', amharic: 'ትምህርት/አስተዳደግ', pronunciation: 'ዲ ኤርጺዩንግ', level: 'B2', category: 'education', example_de: 'Erziehung ist Aufgabe der Eltern.', example_am: 'አስተዳደግ የወላጆች ኃላፊነት ነው።' },
  { german: 'der Fortschritt', amharic: 'እድገት/ግስጋሴ', pronunciation: 'ዴር ፎርትሽሪት', level: 'B2', category: 'education', example_de: 'Du machst gute Fortschritte!', example_am: 'ጥሩ እድገት እያሳየህ ነው!' },
  { german: 'das Gewitter', amharic: 'ዐውሎ ነፋስ', pronunciation: 'ዳስ ገቪተር', level: 'A2', category: 'weather', example_de: 'Heute Abend kommt ein Gewitter.', example_am: 'ዛሬ ማታ ዐውሎ ነፋስ ይመጣል።' },
  { german: 'der Affe', amharic: 'ዝንጀሮ', pronunciation: 'ዴር አፈ', level: 'A2', category: 'animals', example_de: 'Affen leben im Wald.', example_am: 'ዝንጀሮዎች በደን ውስጥ ይኖራሉ።' },
  { german: 'die Schlange', amharic: 'እባብ', pronunciation: 'ዲ ሽላንገ', level: 'A2', category: 'animals', example_de: 'Manche Schlangen sind giftig.', example_am: 'አንዳንድ እባቦች መርዛማ ናቸው።' },
  { german: 'die Ziege', amharic: 'ፍየል', pronunciation: 'ዲ ጺገ', level: 'A2', category: 'animals', example_de: 'Die Ziegen klettern auf den Berg.', example_am: 'ፍየሎች ተራራ ይወጣሉ።' },
  { german: 'der Esel', amharic: 'አህያ', pronunciation: 'ዴር ኤዘል', level: 'A2', category: 'animals', example_de: 'Der Esel trägt schwere Lasten.', example_am: 'አህያ ከባድ ጭነት ይሸከማል።' },
  { german: 'der Schmetterling', amharic: 'ቢራቢሮ', pronunciation: 'ዴር ሽሜተርሊንግ', level: 'A2', category: 'animals', example_de: 'Der Schmetterling ist bunt.', example_am: 'ቢራቢሮው ቀለም ያለው ነው።' },
  { german: 'die Ameise', amharic: 'ጉንዳን', pronunciation: 'ዲ አማይዘ', level: 'B1', category: 'animals', example_de: 'Ameisen sind sehr fleißig.', example_am: 'ጉንዳኖች በጣም ትጉ ናቸው።' },
  { german: 'die Biene', amharic: 'ንብ', pronunciation: 'ዲ ቢነ', level: 'A2', category: 'animals', example_de: 'Bienen machen Honig.', example_am: 'ንቦች ማር ያመርታሉ።' },
  { german: 'die Erbse', amharic: 'አተር', pronunciation: 'ዲ ኤርብዘ', level: 'A2', category: 'fruits_vegetables', example_de: 'Kinder mögen keine Erbsen.', example_am: 'ልጆች አተር አይወዱም።' },
  { german: 'die Kirsche', amharic: 'ቼሪ', pronunciation: 'ዲ ኪርሸ', level: 'A2', category: 'fruits_vegetables', example_de: 'Im Sommer gibt es Kirschen.', example_am: 'በበጋ ቼሪ ይገኛል።' },
  { german: 'die Wassermelone', amharic: 'ሐብሐብ', pronunciation: 'ዲ ቫሰርሜሎነ', level: 'A2', category: 'fruits_vegetables', example_de: 'Wassermelone erfrischt im Sommer.', example_am: 'ሐብሐብ በበጋ ያድሳል።' },
  { german: 'die Ananas', amharic: 'አናናስ', pronunciation: 'ዲ አናናስ', level: 'A2', category: 'fruits_vegetables', example_de: 'Ananas kommt aus tropischen Ländern.', example_am: 'አናናስ ከሞቃታማ ሀገሮች ይመጣል።' },
  { german: 'der Mais', amharic: 'በቆሎ', pronunciation: 'ዴር ማይስ', level: 'A2', category: 'fruits_vegetables', example_de: 'Mais wächst auf dem Feld.', example_am: 'በቆሎ በእርሻ ላይ ይበቅላል።' },
  { german: 'der Spinat', amharic: 'ስፒናች', pronunciation: 'ዴር ሽፒናት', level: 'A2', category: 'fruits_vegetables', example_de: 'Spinat enthält viel Eisen.', example_am: 'ስፒናች ብዙ ብረት ይዟል።' },
  { german: 'der Pilz', amharic: 'ጉተት/እንጉዳይ', pronunciation: 'ዴር ፒልጽ', level: 'A2', category: 'fruits_vegetables', example_de: 'Pilze sammeln wir im Wald.', example_am: 'እንጉዳዮችን ከደን ውስጥ እንለቅማለን።' },
  { german: 'die Nuss', amharic: 'ለውዝ', pronunciation: 'ዲ ኑስ', level: 'A2', category: 'fruits_vegetables', example_de: 'Nüsse sind gesund.', example_am: 'ለውዞች ጤናማ ናቸው።' },
  { german: 'die Aubergine', amharic: 'ባዳንጃን', pronunciation: 'ዲ ኦበርዢነ', level: 'B1', category: 'fruits_vegetables', example_de: 'Ich brate Auberginen.', example_am: 'ባዳንጃን እጠብሳለሁ።' },
  { german: 'vorgestern', amharic: 'ከትናንት ወዲያ', pronunciation: 'ፎርጌስተርን', level: 'A2', category: 'time', example_de: 'Vorgestern hat es geregnet.', example_am: 'ከትናንት ወዲያ ዝናብ ዘንቧል።' },
  { german: 'übermorgen', amharic: 'ከነገ ወዲያ', pronunciation: 'ኡበርሞርገን', level: 'A2', category: 'time', example_de: 'Übermorgen ist Freitag.', example_am: 'ከነገ ወዲያ አርብ ነው።' },
  { german: 'nächste Woche', amharic: 'የሚቀጥለው ሳምንት', pronunciation: 'ኔሽስተ ቮኸ', level: 'A1', category: 'time', example_de: 'Nächste Woche habe ich frei.', example_am: 'የሚቀጥለው ሳምንት ዕረፍት አለኝ።' },
  { german: 'letzte Woche', amharic: 'ያለፈው ሳምንት', pronunciation: 'ሌጽተ ቮኸ', level: 'A1', category: 'time', example_de: 'Letzte Woche war ich krank.', example_am: 'ያለፈው ሳምንት ታመምኩ።' },
  { german: 'der Feiertag', amharic: 'በዓል', pronunciation: 'ዴር ፋየርታግ', level: 'A2', category: 'time', example_de: 'Am Feiertag bleiben die Geschäfte zu.', example_am: 'በዓል ቀን ሱቆች ይዘጋሉ።' },
  { german: 'die Verspätung', amharic: 'መዘግየት', pronunciation: 'ዲ ፈርሽፐቱንግ', level: 'A2', category: 'time', example_de: 'Der Zug hat 20 Minuten Verspätung.', example_am: 'ባቡሩ 20 ደቂቃ ዘግይቷል።' },
  { german: 'das Dutzend', amharic: 'ደርዘን (12)', pronunciation: 'ዳስ ዱጸንድ', level: 'A2', category: 'numbers', example_de: 'Ich kaufe ein Dutzend Eier.', example_am: 'ደርዘን እንቁላል እገዛለሁ።' },
  { german: 'das Drittel', amharic: 'ሲሶ', pronunciation: 'ዳስ ድሪተል', level: 'A2', category: 'numbers', example_de: 'Ein Drittel der Klasse fehlt.', example_am: 'ከክፍሉ ሲሶ ጎድሏል።' },
  { german: 'die Hälfte', amharic: 'ግማሽ', pronunciation: 'ዲ ሄልፍተ', level: 'A2', category: 'numbers', example_de: 'Die Hälfte ist fertig.', example_am: 'ግማሹ ጨርሷል።' },
  { german: 'doppelt', amharic: 'ድርብ', pronunciation: 'ዶፐልት', level: 'A2', category: 'numbers', example_de: 'Das ist doppelt so viel.', example_am: 'ያ ድርብ ነው።' },
  { german: 'das Lineal', amharic: 'ማስመሪያ', pronunciation: 'ዳስ ሊኔአል', level: 'A1', category: 'classroom', example_de: 'Ich brauche ein Lineal.', example_am: 'ማስመሪያ ያስፈልገኛል።' },
  { german: 'die Schere', amharic: 'መቀስ', pronunciation: 'ዲ ሸረ', level: 'A1', category: 'classroom', example_de: 'Gib mir bitte die Schere.', example_am: 'መቀሱን ስጠኝ።' },
  { german: 'der Ordner', amharic: 'ፋይል ማስቀመጫ', pronunciation: 'ዴር ኦርድነር', level: 'A2', category: 'classroom', example_de: 'Lege die Blätter in den Ordner.', example_am: 'ወረቀቶቹን ፋይል ውስጥ አስቀምጥ።' },
  { german: 'die Metzgerei', amharic: 'ሥጋ ቤት', pronunciation: 'ዲ ሜጽገራይ', level: 'A2', category: 'city_places', example_de: 'In der Metzgerei kaufe ich Fleisch.', example_am: 'ሥጋ ቤት ውስጥ ሥጋ እገዛለሁ።' },
  { german: 'die Tankstelle', amharic: 'ነዳጅ ማደያ', pronunciation: 'ዲ ታንክሽተለ', level: 'A2', category: 'city_places', example_de: 'Wir müssen zur Tankstelle.', example_am: 'ወደ ነዳጅ ማደያ መሄድ አለብን።' },
  { german: 'das Theater', amharic: 'ቴያትር', pronunciation: 'ዳስ ቴአተር', level: 'A2', category: 'city_places', example_de: 'Im Theater läuft ein neues Stück.', example_am: 'ቴያትር ውስጥ አዲስ ቲያትር አለ።' },
  { german: 'das Stadion', amharic: 'ስታዲየም', pronunciation: 'ዳስ ሽታዲዮን', level: 'A2', category: 'city_places', example_de: 'Das Stadion ist voll.', example_am: 'ስታዲየሙ ሞልቷል።' },
  { german: 'die Werkstatt', amharic: 'ጋራዥ/ወርክሾፕ', pronunciation: 'ዲ ቬርክሽታት', level: 'A2', category: 'city_places', example_de: 'Das Auto ist in der Werkstatt.', example_am: 'መኪናው ጋራዥ ውስጥ ነው።' },
  { german: 'die Wäscherei', amharic: 'ልብስ ማጠቢያ', pronunciation: 'ዲ ቬሸራይ', level: 'A2', category: 'city_places', example_de: 'Ich bringe meine Hemden in die Wäscherei.', example_am: 'ሸሚዞቼን ልብስ ማጠቢያ አስገባለሁ።' },
  { german: 'der Müll', amharic: 'ቆሻሻ', pronunciation: 'ዴር ሚል', level: 'A2', category: 'everyday', example_de: 'Bitte den Müll rausbringen.', example_am: 'ቆሻሻውን ውጪ አውጣ።' },
  { german: 'recyceln', amharic: 'ዳግም ማልማት', pronunciation: 'ሪሳይክልን', level: 'B1', category: 'everyday', example_de: 'In Deutschland wird viel recycelt.', example_am: 'ጀርመን ውስጥ ብዙ ዳግም ይለማል።' },
  { german: 'die Energie', amharic: 'ኃይል/ሃይል', pronunciation: 'ዲ ኤነርጊ', level: 'B1', category: 'technology', example_de: 'Solarenergie ist wichtig.', example_am: 'የፀሐይ ኃይል አስፈላጊ ነው።' },
  { german: 'sparen', amharic: 'መቆጠብ', pronunciation: 'ሽፓረን', level: 'A2', category: 'everyday', example_de: 'Ich spare Geld für den Urlaub.', example_am: 'ለዕረፍት ገንዘብ እቆጥባለሁ።' },
  { german: 'der Vermieter', amharic: 'አከራይ', pronunciation: 'ዴር ፈርሚተር', level: 'B1', category: 'house', example_de: 'Der Vermieter repariert die Heizung.', example_am: 'አከራዩ ማሞቂያውን ያስተካክላል።' },
  { german: 'der Umzug', amharic: 'ቤት ልውውጥ', pronunciation: 'ዴር ኡምጹግ', level: 'B1', category: 'house', example_de: 'Nächste Woche ist unser Umzug.', example_am: 'የሚቀጥለው ሳምንት ቤት እንቀያየራለን።' },
  { german: 'die Heizung', amharic: 'ማሞቂያ', pronunciation: 'ዲ ሃይጹንግ', level: 'A2', category: 'house', example_de: 'Die Heizung funktioniert nicht.', example_am: 'ማሞቂያው አይሠራም።' },
  { german: 'die Einwanderung', amharic: 'ስደት (ወደ ሀገር)', pronunciation: 'ዲ አይንቫንደሩንግ', level: 'B2', category: 'legal_admin', example_de: 'Die Einwanderung hat die Gesellschaft verändert.', example_am: 'ስደት ማኅበረሰቡን ቀይሯል።' },
  { german: 'das Asyl', amharic: 'ጥገኝነት', pronunciation: 'ዳስ አዙል', level: 'B2', category: 'legal_admin', example_de: 'Er hat Asyl beantragt.', example_am: 'ጥገኝነት ጠይቋል።' },
  { german: 'die Diskriminierung', amharic: 'አድልዎ', pronunciation: 'ዲ ዲስክሪሚኒሩንግ', level: 'B2', category: 'education', example_de: 'Diskriminierung ist verboten.', example_am: 'አድልዎ የተከለከለ ነው።' },
  { german: 'der Missverständnis', amharic: 'አለመግባባት', pronunciation: 'ዳስ ሚስፈርሽቴንድኒስ', level: 'B1', category: 'everyday', example_de: 'Das war ein Missverständnis.', example_am: 'ያ አለመግባባት ነበር።' },
  { german: 'die Eigenschaft', amharic: 'ባሕሪ/ጠባይ', pronunciation: 'ዲ አይገንሻፍት', level: 'B2', category: 'everyday', example_de: 'Ehrlichkeit ist eine gute Eigenschaft.', example_am: 'ታማኝነት ጥሩ ባሕሪ ነው።' },
  { german: 'die Kritik', amharic: 'ትችት', pronunciation: 'ዲ ክሪቲክ', level: 'B2', category: 'education', example_de: 'Konstruktive Kritik ist hilfreich.', example_am: 'ገንቢ ትችት ጠቃሚ ነው።' },
  { german: 'der Kompromiss', amharic: 'ስምምነት', pronunciation: 'ዴር ኮምፕሮሚስ', level: 'B2', category: 'everyday', example_de: 'Wir müssen einen Kompromiss finden.', example_am: 'ስምምነት ማግኘት አለብን።' },
  { german: 'die Tradition', amharic: 'ባህል/ልማድ', pronunciation: 'ዲ ትራዲጺዮን', level: 'B1', category: 'everyday', example_de: 'Äthiopien hat viele Traditionen.', example_am: 'ኢትዮጵያ ብዙ ባህሎች አሏት።' },
  { german: 'die Kultur', amharic: 'ባህል', pronunciation: 'ዲ ኩልቱር', level: 'B1', category: 'everyday', example_de: 'Die deutsche Kultur ist vielfältig.', example_am: 'የጀርመን ባህል ብዙ ገጽታ ያለው ነው።' },
  { german: 'das Vorbild', amharic: 'ምሳሌ/አርአያ', pronunciation: 'ዳስ ፎርቢልድ', level: 'B2', category: 'everyday', example_de: 'Mein Vater ist mein Vorbild.', example_am: 'አባቴ አርአያዬ ነው።' },
  { german: 'die Überraschung', amharic: 'ድንገተኛ', pronunciation: 'ዲ ኡበርራሹንግ', level: 'A2', category: 'everyday', example_de: 'Das ist eine Überraschung!', example_am: 'ያ ድንገተኛ ነው!' },
  { german: 'der Wunsch', amharic: 'ምኞት', pronunciation: 'ዴር ቩንሽ', level: 'A2', category: 'everyday', example_de: 'Ich habe einen Wunsch.', example_am: 'አንድ ምኞት አለኝ።' },
  { german: 'die Sehnsucht', amharic: 'ናፍቆት', pronunciation: 'ዲ ዜንዙኽት', level: 'B2', category: 'emotions', example_de: 'Ich habe Sehnsucht nach meiner Heimat.', example_am: 'ሀገሬ ናፈቀኝ።' },
  { german: 'der Ehrgeiz', amharic: 'ምኞት/ትጋት', pronunciation: 'ዴር ኤርጋይጽ', level: 'B2', category: 'emotions', example_de: 'Sie hat viel Ehrgeiz.', example_am: 'ብዙ ትጋት አላት።' },
  { german: 'die Geduld', amharic: 'ትዕግሥት', pronunciation: 'ዲ ገዱልድ', level: 'B1', category: 'emotions', example_de: 'Bitte haben Sie Geduld.', example_am: 'ትዕግሥት ያድርጉ።' },
  { german: 'versuchen', amharic: 'መሞከር', pronunciation: 'ፌርዙኸን', level: 'A2', category: 'verbs', example_de: 'Ich versuche es nochmal.', example_am: 'እንደገና እሞክራለሁ።' },
  { german: 'bedeuten', amharic: 'ማለት/ትርጉም መስጠት', pronunciation: 'ቤዶይተን', level: 'A2', category: 'verbs', example_de: 'Was bedeutet dieses Wort?', example_am: 'ይህ ቃል ምን ማለት ነው?' },
  { german: 'die Nudeln', amharic: 'ፓስታ', pronunciation: 'ዲ ኑደልን', level: 'A1', category: 'food', example_de: 'Die Nudeln sind fertig.', example_am: 'ፓስታው ተዘጋጅቷል።' },
  { german: 'der Joghurt', amharic: 'እርጎ', pronunciation: 'ዴር ዮጉርት', level: 'A1', category: 'food', example_de: 'Ich esse Joghurt zum Frühstück.', example_am: 'ለቁርስ እርጎ እበላለሁ።' },
  { german: 'einundzwanzig', amharic: 'ሃያ አንድ', pronunciation: 'አይኑንድጽቫንጽግ', level: 'A1', category: 'numbers', example_de: 'Ich bin einundzwanzig Jahre alt.', example_am: 'ሃያ አንድ ዓመቴ ነው።' },
  { german: 'dreißig', amharic: 'ሰላሳ', pronunciation: 'ድራይሲግ', level: 'A1', category: 'numbers', example_de: 'Es kostet dreißig Euro.', example_am: 'ሰላሳ ዩሮ ያስከፍላል።' },
  { german: 'vierzig', amharic: 'አርባ', pronunciation: 'ፊርጽግ', level: 'A1', category: 'numbers', example_de: 'Er ist vierzig Jahre alt.', example_am: 'አርባ ዓመቱ ነው።' },
  { german: 'fünfzig', amharic: 'ሃምሳ', pronunciation: 'ፍንፍጽግ', level: 'A1', category: 'numbers', example_de: 'Die Miete kostet fünfzig Franken.', example_am: 'ኪራዩ ሃምሳ ፍራንክ ነው።' },
  { german: 'möglich', amharic: 'ይቻላል/ሊሆን የሚችል', pronunciation: 'ሞግሊሕ', level: 'A2', category: 'adjectives', example_de: 'Ist das möglich?', example_am: 'ይህ ይቻላል?' },
  { german: 'schwierig', amharic: 'ከባድ/አስቸጋሪ', pronunciation: 'ሽቪሪግ', level: 'A2', category: 'adjectives', example_de: 'Die Prüfung ist schwierig.', example_am: 'ፈተናው ከባድ ነው።' },
  { german: 'einfach', amharic: 'ቀላል', pronunciation: 'አይንፋኽ', level: 'A1', category: 'adjectives', example_de: 'Die Aufgabe ist einfach.', example_am: 'ተግባሩ ቀላል ነው።' },
  { german: 'berühmt', amharic: 'ታዋቂ', pronunciation: 'ቤሪምት', level: 'B1', category: 'adjectives', example_de: 'Er ist ein berühmter Sänger.', example_am: 'እሱ ታዋቂ ዘፋኝ ነው።' },
  { german: 'neugierig', amharic: 'ጉጉት ያለው', pronunciation: 'ኖይጊሪግ', level: 'B1', category: 'adjectives', example_de: 'Kinder sind neugierig.', example_am: 'ልጆች ጉጉት አላቸው።' },
  { german: 'der Stau', amharic: 'የትራፊክ መጨናነቅ', pronunciation: 'ዴር ሽታው', level: 'A2', category: 'transport', example_de: 'Es gibt einen Stau auf der Autobahn.', example_am: 'ሀይዌይ ላይ ትራፊክ አለ።' },
  { german: 'umsteigen', amharic: 'መቀየር (ትራንስፖርት)', pronunciation: 'ኡምሽታይገን', level: 'A2', category: 'transport', example_de: 'Sie müssen in Bern umsteigen.', example_am: 'በርን ላይ መቀየር አለብዎ።' },
  { german: 'der Feuerwehrmann', amharic: 'የእሳት አደጋ ሠራተኛ', pronunciation: 'ዴር ፎይአቬርማን', level: 'A2', category: 'professions', example_de: 'Der Feuerwehrmann löscht das Feuer.', example_am: 'የእሳት አደጋ ሠራተኛ እሳቱን ያጠፋል።' },
  { german: 'der Handwerker', amharic: 'የእጅ ሥራ ባለሙያ', pronunciation: 'ዴር ሃንድቬርከር', level: 'A2', category: 'professions', example_de: 'Der Handwerker repariert das Dach.', example_am: 'ባለሙያው ጣራውን ያስተካክላል።' },
  { german: 'der Hügel', amharic: 'ኮረብታ', pronunciation: 'ዴር ሂገል', level: 'B1', category: 'nature', example_de: 'Auf dem Hügel steht ein Baum.', example_am: 'ኮረብታው ላይ ዛፍ አለ።' },
  { german: 'die Küste', amharic: 'የባሕር ዳርቻ', pronunciation: 'ዲ ኪስተ', level: 'B1', category: 'nature', example_de: 'Wir fahren an die Küste.', example_am: 'ወደ ባሕር ዳርቻ እንሄዳለን።' },
  { german: 'die Überweisung', amharic: 'ሪፈራል/ማዘዋወሪያ', pronunciation: 'ዲ ኡበርቫይዙንግ', level: 'B1', category: 'medical', example_de: 'Ich brauche eine Überweisung zum Spezialisten.', example_am: 'ወደ ስፔሻሊስት ሪፈራል ያስፈልገኛል።' },
  { german: 'die Diagnose', amharic: 'ምርመራ ውጤት', pronunciation: 'ዲ ዲአግኖዘ', level: 'B2', category: 'medical', example_de: 'Die Diagnose ist positiv.', example_am: 'የምርመራ ውጤቱ ጥሩ ነው።' },
  { german: 'die Gehaltserhöhung', amharic: 'የደመወዝ ጭማሪ', pronunciation: 'ዲ ገሃልትስኤርሆዩንግ', level: 'B2', category: 'work', example_de: 'Ich bitte um eine Gehaltserhöhung.', example_am: 'የደመወዝ ጭማሪ እጠይቃለሁ።' },
  { german: 'die Überstunden', amharic: 'ትርፍ ሰዓት', pronunciation: 'ዲ ኡበርሽቱንደን', level: 'B1', category: 'work', example_de: 'Ich mache heute Überstunden.', example_am: 'ዛሬ ትርፍ ሰዓት እሰራለሁ።' },
  { german: 'die Tüte', amharic: 'ከረጢት', pronunciation: 'ዲ ቱተ', level: 'A1', category: 'shopping', example_de: 'Brauchen Sie eine Tüte?', example_am: 'ከረጢት ያስፈልግዎታል?' },
  { german: 'der Einkaufswagen', amharic: 'የግብይት ጋሪ', pronunciation: 'ዴር አይንካውፍስቫገን', level: 'A2', category: 'shopping', example_de: 'Der Einkaufswagen ist voll.', example_am: 'የግብይት ጋሪው ሞልቷል።' },
  { german: 'das Sonderangebot', amharic: 'ልዩ ቅናሽ', pronunciation: 'ዳስ ዞንደርአንገቦት', level: 'A2', category: 'shopping', example_de: 'Es gibt ein Sonderangebot.', example_am: 'ልዩ ቅናሽ አለ።' },
  { german: 'das Mehl', amharic: 'ዱቄት', pronunciation: 'ዳስ ሜል', level: 'A2', category: 'food', example_de: 'Ich brauche Mehl für den Kuchen.', example_am: 'ለኬኩ ዱቄት ያስፈልገኛል።' },
  { german: 'der Essig', amharic: 'ኮምጣጤ', pronunciation: 'ዴር ኤሲግ', level: 'A2', category: 'food', example_de: 'Der Salat braucht Essig.', example_am: 'ሰላጣው ኮምጣጤ ያስፈልገዋል።' },
  { german: 'das Öl', amharic: 'ዘይት', pronunciation: 'ዳስ ኦል', level: 'A1', category: 'food', example_de: 'Ich koche mit Öl.', example_am: 'በዘይት እበስላለሁ።' },
  { german: 'die Soße', amharic: 'ሾርባ/ወጥ', pronunciation: 'ዲ ዞሰ', level: 'A2', category: 'food', example_de: 'Die Soße schmeckt gut.', example_am: 'ወጡ ጣፋጭ ነው።' },
  { german: 'die Pflaume', amharic: 'ፕላም/ፕረን', pronunciation: 'ዲ ፕፍላውመ', level: 'A2', category: 'food', example_de: 'Pflaumen sind süß.', example_am: 'ፕላሞች ጣፋጭ ናቸው።' },
  { german: 'der Hals', amharic: 'አንገት', pronunciation: 'ዴር ሃልስ', level: 'A1', category: 'body', example_de: 'Mein Hals tut weh.', example_am: 'አንገቴ ያመኛል።' },
  { german: 'die Lippe', amharic: 'ከንፈር', pronunciation: 'ዲ ሊፔ', level: 'A2', category: 'body', example_de: 'Meine Lippen sind trocken.', example_am: 'ከንፈሮቼ ደርቀዋል።' },
  { german: 'der Ellbogen', amharic: 'ክርን', pronunciation: 'ዴር ኤልቦገን', level: 'A2', category: 'body', example_de: 'Ich habe mich am Ellbogen gestoßen.', example_am: 'ክርኔን ተገጫለሁ።' },
  { german: 'die Brust', amharic: 'ደረት', pronunciation: 'ዲ ብሩስት', level: 'A2', category: 'body', example_de: 'Er hat Schmerzen in der Brust.', example_am: 'ደረቱ ያመዋል።' },
  { german: 'die Krawatte', amharic: 'ክራቫት', pronunciation: 'ዲ ክራቫተ', level: 'A2', category: 'clothing', example_de: 'Er bindet die Krawatte.', example_am: 'ክራቫቱን ያስራል።' },
  { german: 'der Regenmantel', amharic: 'የዝናብ ካፖርት', pronunciation: 'ዴር ሬገንማንተል', level: 'A2', category: 'clothing', example_de: 'Nimm deinen Regenmantel mit!', example_am: 'የዝናብ ካፖርትህን ያዝ!' },
  { german: 'die Unterwäsche', amharic: 'የውስጥ ልብስ', pronunciation: 'ዲ ኡንተርቬሸ', level: 'A2', category: 'clothing', example_de: 'Die Unterwäsche ist im Schrank.', example_am: 'የውስጥ ልብሱ ቁም ሳጥን ውስጥ ነው።' },
  { german: 'waschen', amharic: 'ማጠብ', pronunciation: 'ቫሸን', level: 'A1', category: 'verbs', example_de: 'Ich wasche meine Hände.', example_am: 'እጆቼን አጥባለሁ።' },
  { german: 'putzen', amharic: 'ማፅዳት', pronunciation: 'ፑጸን', level: 'A1', category: 'verbs', example_de: 'Ich putze das Bad.', example_am: 'ባኞ ቤቱን አጸዳለሁ።' },
  { german: 'leihen', amharic: 'ማበደር/መበደር', pronunciation: 'ላይሄን', level: 'A2', category: 'verbs', example_de: 'Kannst du mir Geld leihen?', example_am: 'ገንዘብ ልትበድረኝ ትችላለህ?' },
  { german: 'streiten', amharic: 'መጨቃጨቅ', pronunciation: 'ሽትራይተን', level: 'B1', category: 'verbs', example_de: 'Sie streiten sich oft.', example_am: 'ብዙ ጊዜ ይጨቃጨቃሉ።' },
  { german: 'sich unterhalten', amharic: 'ማውራት/መነጋገር', pronunciation: 'ዚሕ ኡንተርሃልተን', level: 'B1', category: 'verbs', example_de: 'Wir unterhalten uns über Politik.', example_am: 'ስለ ፖለቲካ እናወራለን።' },
  { german: 'beobachten', amharic: 'መከታተል/መመልከት', pronunciation: 'ቤኦባኽተን', level: 'B1', category: 'verbs', example_de: 'Ich beobachte die Vögel.', example_am: 'ወፎቹን እመለከታለሁ።' },
  { german: 'verändern', amharic: 'መቀየር', pronunciation: 'ፌርኤንደርን', level: 'B1', category: 'verbs', example_de: 'Die Stadt hat sich verändert.', example_am: 'ከተማው ተቀይሯል።' },
  { german: 'der Vulkan', amharic: 'እሳተ ገሞራ', pronunciation: 'ዴር ቩልካን', level: 'B1', category: 'nature', example_de: 'Der Vulkan ist aktiv.', example_am: 'እሳተ ገሞራው ንቁ ነው።' },
  { german: 'die Wüste', amharic: 'በረሃ', pronunciation: 'ዲ ቪስተ', level: 'B1', category: 'nature', example_de: 'In der Wüste ist es heiß.', example_am: 'በረሃ ውስጥ ሞቃት ነው።' },
  { german: 'der Wasserfall', amharic: 'ፏፏቴ', pronunciation: 'ዴር ቫሰርፋል', level: 'B1', category: 'nature', example_de: 'Der Wasserfall ist wunderschön.', example_am: 'ፏፏቴው በጣም ቆንጆ ነው።' },
  { german: 'das Tal', amharic: 'ሸለቆ', pronunciation: 'ዳስ ታል', level: 'A2', category: 'nature', example_de: 'Das Dorf liegt im Tal.', example_am: 'መንደሩ ሸለቆ ውስጥ ነው።' },
  { german: 'der Stein', amharic: 'ድንጋይ', pronunciation: 'ዴር ሽታይን', level: 'A1', category: 'nature', example_de: 'Pass auf den Stein auf!', example_am: 'ድንጋዩን ተጠንቀቅ!' },
  { german: 'das Feld', amharic: 'ሜዳ/እርሻ', pronunciation: 'ዳስ ፌልድ', level: 'A2', category: 'nature', example_de: 'Der Bauer arbeitet auf dem Feld.', example_am: 'ገበሬው ሜዳ ላይ ይሰራል።' },
  { german: 'der Unterricht', amharic: 'ትምህርት/ኮርስ', pronunciation: 'ዴር ኡንተርሪኽት', level: 'A2', category: 'education', example_de: 'Der Unterricht beginnt um 8 Uhr.', example_am: 'ትምህርቱ ስምንት ሰዓት ይጀምራል።' },
  { german: 'die Nachhilfe', amharic: 'ተጨማሪ ትምህርት', pronunciation: 'ዲ ናኽሂልፈ', level: 'B1', category: 'education', example_de: 'Mein Sohn braucht Nachhilfe.', example_am: 'ልጄ ተጨማሪ ትምህርት ያስፈልገዋል።' },
  { german: 'das Semester', amharic: 'ሴሚስተር', pronunciation: 'ዳስ ዘሜስተር', level: 'B1', category: 'education', example_de: 'Das Semester dauert sechs Monate.', example_am: 'ሴሚስተሩ ስድስት ወር ነው።' },
  { german: 'angeln', amharic: 'ዓሳ ማጥመድ', pronunciation: 'አንገልን', level: 'A2', category: 'hobbies', example_de: 'Am Wochenende gehe ich angeln.', example_am: 'ቅዳሜና እሑድ ዓሳ ማጥመድ እሄዳለሁ።' },
  { german: 'basteln', amharic: 'የእጅ ሥራ መሥራት', pronunciation: 'ባስተልን', level: 'A2', category: 'hobbies', example_de: 'Die Kinder basteln gerne.', example_am: 'ልጆቹ የእጅ ሥራ መሥራት ይወዳሉ።' },
  { german: 'klettern', amharic: 'መውጣት/መግፋት', pronunciation: 'ክሌተርን', level: 'A2', category: 'hobbies', example_de: 'Er klettert gerne in den Bergen.', example_am: 'ተራሮች ላይ መውጣት ይወዳል።' },
  { german: 'sammeln', amharic: 'መሰብሰብ', pronunciation: 'ዛመልን', level: 'A2', category: 'hobbies', example_de: 'Ich sammle Briefmarken.', example_am: 'ፖስታ ማርኮች እሰበስባለሁ።' },
  { german: 'das Puzzle', amharic: 'ፓዝል', pronunciation: 'ዳስ ፓዝል', level: 'A2', category: 'hobbies', example_de: 'Das Puzzle hat 1000 Teile.', example_am: 'ፓዝሉ 1000 ቁርጥራጮች አሉት።' },
  { german: 'die Tastatur', amharic: 'ኪቦርድ', pronunciation: 'ዲ ታስታቱር', level: 'A2', category: 'technology', example_de: 'Die Tastatur funktioniert nicht.', example_am: 'ኪቦርዱ አይሰራም።' },
  { german: 'der Akku', amharic: 'ባትሪ', pronunciation: 'ዴር አኩ', level: 'A2', category: 'technology', example_de: 'Der Akku ist leer.', example_am: 'ባትሪው አልቋል።' },
  { german: 'das Ladegerät', amharic: 'ቻርጀር', pronunciation: 'ዳስ ላደገሬት', level: 'A2', category: 'technology', example_de: 'Wo ist mein Ladegerät?', example_am: 'ቻርጀሬ የት ነው?' },
  { german: 'die künstliche Intelligenz', amharic: 'ሰው ሠራሽ ብልህነት', pronunciation: 'ዲ ኪንስትሊሸ ኢንቴሊጌንጽ', level: 'B2', category: 'technology', example_de: 'Künstliche Intelligenz verändert die Welt.', example_am: 'ሰው ሠራሽ ብልህነት ዓለምን ይቀይራል።' },
  { german: 'die Daten', amharic: 'መረጃ/ዳታ', pronunciation: 'ዲ ዳተን', level: 'B1', category: 'technology', example_de: 'Die Daten müssen geschützt werden.', example_am: 'መረጃው መጠበቅ አለበት።' },
  { german: 'der Bär', amharic: 'ድብ', pronunciation: 'ዴር ቤር', level: 'A2', category: 'animals', example_de: 'Der Bär lebt im Wald.', example_am: 'ድቡ ደን ውስጥ ይኖራል።' },
  { german: 'der Wolf', amharic: 'ተኩላ', pronunciation: 'ዴር ቮልፍ', level: 'A2', category: 'animals', example_de: 'Der Wolf heult in der Nacht.', example_am: 'ተኩላው ሌሊት ይጮኻል።' },
  { german: 'der Frosch', amharic: 'እንቁራሪት', pronunciation: 'ዴር ፍሮሽ', level: 'A2', category: 'animals', example_de: 'Der Frosch sitzt am Teich.', example_am: 'እንቁራሪቱ ኩሬ ዳር ተቀምጧል።' },
  { german: 'der Adler', amharic: 'ንስር', pronunciation: 'ዴር አድለር', level: 'B1', category: 'animals', example_de: 'Der Adler fliegt hoch.', example_am: 'ንስሩ ከፍ ብሎ ይበራል።' },
  { german: 'die Schildkröte', amharic: 'ኤሊ', pronunciation: 'ዲ ሺልድክሮተ', level: 'A2', category: 'animals', example_de: 'Die Schildkröte ist langsam.', example_am: 'ኤሊው ቀስ ያለ ነው።' },
  { german: 'die Wäsche', amharic: 'ልብስ (ለማጠብ)', pronunciation: 'ዲ ቬሸ', level: 'A2', category: 'everyday', example_de: 'Ich muss die Wäsche waschen.', example_am: 'ልብስ ማጠብ አለብኝ።' },
  { german: 'der Strom', amharic: 'ኤሌክትሪክ', pronunciation: 'ዴር ሽትሮም', level: 'A2', category: 'everyday', example_de: 'Der Strom ist ausgefallen.', example_am: 'መብራት ጠፍቷል።' },
  { german: 'der Alltag', amharic: 'የዕለት ተዕለት ኑሮ', pronunciation: 'ዴር አልታግ', level: 'A2', category: 'everyday', example_de: 'Im Alltag spreche ich Deutsch.', example_am: 'በዕለት ኑሮ ጀርመንኛ እናገራለሁ።' },
  { german: 'die Gewohnheit', amharic: 'ልማድ', pronunciation: 'ዲ ገቮንሃይት', level: 'B1', category: 'everyday', example_de: 'Das ist eine schlechte Gewohnheit.', example_am: 'ይህ መጥፎ ልማድ ነው።' },
  { german: 'der Ausflug', amharic: 'ጉብኝት/ሽርሽር', pronunciation: 'ዴር አውስፍሉግ', level: 'A2', category: 'everyday', example_de: 'Wir machen einen Ausflug.', example_am: 'ሽርሽር እንሄዳለን።' },
  { german: 'die Wut', amharic: 'ቁጣ/ንዴት', pronunciation: 'ዲ ቩት', level: 'A2', category: 'emotions', example_de: 'Er ist voller Wut.', example_am: 'ቁጣ ሞልቶታል።' },
  { german: 'die Eifersucht', amharic: 'ቅናት', pronunciation: 'ዲ አይፈርዙኽት', level: 'B1', category: 'emotions', example_de: 'Eifersucht ist ein schlechtes Gefühl.', example_am: 'ቅናት መጥፎ ስሜት ነው።' },
  { german: 'die Dankbarkeit', amharic: 'ምስጋና/አመሰግናለሁ ማለት', pronunciation: 'ዲ ዳንክባርካይት', level: 'B1', category: 'emotions', example_de: 'Ich fühle große Dankbarkeit.', example_am: 'ትልቅ ምስጋና ይሰማኛል።' },
  { german: 'die Langeweile', amharic: 'ሰልችት', pronunciation: 'ዲ ላንገቫይለ', level: 'A2', category: 'emotions', example_de: 'Mir ist langweilig.', example_am: 'ሰልችቶኛል።' },
  { german: 'das Mitgefühl', amharic: 'ርህራሄ', pronunciation: 'ዳስ ሚትገፊል', level: 'B2', category: 'emotions', example_de: 'Ich habe Mitgefühl mit dir.', example_am: 'ርህራሄ ይሰማኛል።' },
  { german: 'leer', amharic: 'ባዶ', pronunciation: 'ሌር', level: 'A1', category: 'adjectives', example_de: 'Die Flasche ist leer.', example_am: 'ጠርሙሱ ባዶ ነው።' },
  { german: 'voll', amharic: 'ሙሉ/ሞልቶ', pronunciation: 'ፎል', level: 'A1', category: 'adjectives', example_de: 'Das Glas ist voll.', example_am: 'ብርጭቆው ሞልቷል።' },
  { german: 'nass', amharic: 'እርጥብ', pronunciation: 'ናስ', level: 'A1', category: 'adjectives', example_de: 'Meine Schuhe sind nass.', example_am: 'ጫማዎቼ እርጥብ ናቸው።' },
  { german: 'trocken', amharic: 'ደረቅ', pronunciation: 'ትሮከን', level: 'A1', category: 'adjectives', example_de: 'Das Handtuch ist trocken.', example_am: 'ፎጣው ደረቅ ነው።' },
  { german: 'weich', amharic: 'ለስላሳ', pronunciation: 'ቫይኽ', level: 'A2', category: 'adjectives', example_de: 'Das Bett ist weich.', example_am: 'አልጋው ለስላሳ ነው።' },
  { german: 'hart', amharic: 'ጠንካራ/ከባድ', pronunciation: 'ሃርት', level: 'A2', category: 'adjectives', example_de: 'Der Stuhl ist hart.', example_am: 'ወንበሩ ጠንካራ ነው።' },
  { german: 'die Zukunft', amharic: 'ወደፊት/የወደፊት', pronunciation: 'ዲ ጹኩንፍት', level: 'A2', category: 'everyday', example_de: 'Was sind deine Pläne für die Zukunft?', example_am: 'ለወደፊት ዕቅድህ ምንድነው?' },
  { german: 'die Vergangenheit', amharic: 'ያለፈ ጊዜ', pronunciation: 'ዲ ፌርጋንገንሃይት', level: 'B1', category: 'everyday', example_de: 'Das liegt in der Vergangenheit.', example_am: 'ያ ያለፈ ነው።' },
  { german: 'das Ergebnis', amharic: 'ውጤት', pronunciation: 'ዳስ ኤርጌብኒስ', level: 'B1', category: 'everyday', example_de: 'Das Ergebnis ist positiv.', example_am: 'ውጤቱ ጥሩ ነው።' },
  { german: 'der Vorteil', amharic: 'ጥቅም/ጠቀሜታ', pronunciation: 'ዴር ፎርታይል', level: 'B1', category: 'everyday', example_de: 'Das hat viele Vorteile.', example_am: 'ብዙ ጥቅም አለው።' },
  { german: 'der Nachteil', amharic: 'ጉዳት/ኪሳራ', pronunciation: 'ዴር ናኽታይል', level: 'B1', category: 'everyday', example_de: 'Das ist ein Nachteil.', example_am: 'ይህ ጉዳት ነው።' },
  { german: 'die Bedeutung', amharic: 'ትርጉም/ፋይዳ', pronunciation: 'ዲ ቤዶይቱንግ', level: 'B1', category: 'everyday', example_de: 'Was ist die Bedeutung dieses Wortes?', example_am: 'የዚህ ቃል ትርጉም ምንድነው?' },
  { german: 'das Ziel', amharic: 'ግብ/ዓላማ', pronunciation: 'ዳስ ጺል', level: 'A2', category: 'everyday', example_de: 'Mein Ziel ist es, Deutsch zu lernen.', example_am: 'ግቤ ጀርመንኛ መማር ነው።' },
  { german: 'der Erfolg', amharic: 'ስኬት', pronunciation: 'ዴር ኤርፎልግ', level: 'B1', category: 'everyday', example_de: 'Viel Erfolg bei der Prüfung!', example_am: 'በፈተናው ስኬት ይሁንልህ!' },
  { german: 'während', amharic: 'በ...ጊዜ', pronunciation: 'ቬረንድ', level: 'B1', category: 'prepositions', example_de: 'Während des Essens spricht er nicht.', example_am: 'በምግብ ጊዜ አያወራም።' },
  { german: 'trotz', amharic: 'ቢሆንም/ቢ...ም', pronunciation: 'ትሮጽ', level: 'B1', category: 'prepositions', example_de: 'Trotz des Regens gehe ich spazieren.', example_am: 'ዝናብ ቢኖርም እንዳላለሁ።' },
  { german: 'wegen', amharic: 'ምክንያቱ/ስለ', pronunciation: 'ቬገን', level: 'B1', category: 'prepositions', example_de: 'Wegen des Wetters bleibe ich zu Hause.', example_am: 'በአየር ሁኔታ ምክንያት ቤት እቀራለሁ።' },
  { german: 'außerhalb', amharic: 'ከ...ውጭ', pronunciation: 'አውሰርሃልብ', level: 'B1', category: 'prepositions', example_de: 'Er wohnt außerhalb der Stadt.', example_am: 'ከከተማ ውጭ ይኖራል።' },
  { german: 'innerhalb', amharic: 'ውስጥ/በ...ውስጥ', pronunciation: 'ኢነርሃልብ', level: 'B1', category: 'prepositions', example_de: 'Innerhalb einer Woche.', example_am: 'በአንድ ሳምንት ውስጥ።' },
  { german: 'entweder...oder', amharic: 'ወይ...ወይ', pronunciation: 'ኤንትቬደር...ኦደር', level: 'B1', category: 'conjunctions', example_de: 'Entweder du kommst oder du bleibst.', example_am: 'ወይ ትመጣለህ ወይ ትቀራለህ።' },
  { german: 'sofort', amharic: 'ወዲያውኑ', pronunciation: 'ዞፎርት', level: 'A2', category: 'time', example_de: 'Komm sofort!', example_am: 'ወዲያውኑ ና!' },
  { german: 'plötzlich', amharic: 'በድንገት', pronunciation: 'ፕሌጽሊሕ', level: 'A2', category: 'time', example_de: 'Plötzlich hat es geregnet.', example_am: 'በድንገት ዝናብ ዘነበ።' },
  { german: 'meistens', amharic: 'በአብዛኛው', pronunciation: 'ማይስተንስ', level: 'A2', category: 'time', example_de: 'Meistens esse ich zu Hause.', example_am: 'በአብዛኛው ቤት እበላለሁ።' },
  { german: 'selten', amharic: 'አልፎ አልፎ', pronunciation: 'ዘልተን', level: 'A2', category: 'time', example_de: 'Ich gehe selten ins Kino.', example_am: 'አልፎ አልፎ ሲኒማ እሄዳለሁ።' },
  { german: 'niemals', amharic: 'በፍጹም', pronunciation: 'ኒማልስ', level: 'A2', category: 'time', example_de: 'Ich werde das niemals vergessen.', example_am: 'ያንን በፍጹም አልረሳውም።' },
  { german: 'bereits', amharic: 'ቀድሞውኑ', pronunciation: 'ቤራይጽ', level: 'B1', category: 'time', example_de: 'Ich habe bereits gegessen.', example_am: 'ቀድሞውኑ በልቻለሁ።' },
  { german: 'inzwischen', amharic: 'ይህ በእንዲህ/ባይነ ጊዜ', pronunciation: 'ኢንጽቪሸን', level: 'B1', category: 'time', example_de: 'Inzwischen hat sich viel verändert.', example_am: 'ባይነ ጊዜ ብዙ ተቀይሯል።' },
  { german: 'Spanien', amharic: 'ስፔን', pronunciation: 'ሽፓኒየን', level: 'A1', category: 'countries', example_de: 'Spanien ist schön.', example_am: 'ስፔን ቆንጆ ናት።' },
  { german: 'Ägypten', amharic: 'ግብጽ', pronunciation: 'ኤጊፕተን', level: 'A2', category: 'countries', example_de: 'In Ägypten gibt es Pyramiden.', example_am: 'ግብጽ ውስጥ ፒራሚዶች አሉ።' },
  { german: 'Kenia', amharic: 'ኬንያ', pronunciation: 'ኬኒያ', level: 'A2', category: 'countries', example_de: 'Kenia liegt in Ostafrika.', example_am: 'ኬንያ ምስራቅ አፍሪካ ውስጥ ናት።' },
  { german: 'der Weg', amharic: 'መንገድ/ጎዳና', pronunciation: 'ዴር ቬግ', level: 'A1', category: 'directions', example_de: 'Welcher Weg ist richtig?', example_am: 'ትክክለኛው መንገድ የቱ ነው?' },
  { german: 'die Grippe', amharic: 'ጉንፋን/ፍሉ', pronunciation: 'ዲ ግሪፔ', level: 'A2', category: 'health', example_de: 'Die Grippe dauert eine Woche.', example_am: 'ጉንፋኑ አንድ ሳምንት ይቆያል።' },
  { german: 'die Salbe', amharic: 'ቅባት/ክሬም', pronunciation: 'ዲ ዛልበ', level: 'A2', category: 'health', example_de: 'Diese Salbe hilft gegen den Ausschlag.', example_am: 'ይህ ቅባት ለሽፍታ ይረዳል።' },
  { german: 'der Blutdruck', amharic: 'የደም ግፊት', pronunciation: 'ዴር ብሉትድሩክ', level: 'B1', category: 'health', example_de: 'Mein Blutdruck ist zu hoch.', example_am: 'የደም ግፊቴ ከፍተኛ ነው።' },
  { german: 'die Behandlung', amharic: 'ሕክምና', pronunciation: 'ዲ ቤሃንድሉንግ', level: 'B1', category: 'health', example_de: 'Die Behandlung dauert drei Wochen.', example_am: 'ሕክምናው ሦስት ሳምንት ይወስዳል።' },
  { german: 'der Schwager', amharic: 'ባለቤቷ ወንድም/አማች', pronunciation: 'ዴር ሽቫገር', level: 'A2', category: 'family', example_de: 'Mein Schwager wohnt in Berlin.', example_am: 'አማቼ በርሊን ይኖራል።' },
  { german: 'die Schwägerin', amharic: 'ባለቤቱ እህት', pronunciation: 'ዲ ሽቬገሪን', level: 'A2', category: 'family', example_de: 'Meine Schwägerin ist Ärztin.', example_am: 'ባለቤቱ እህት ሐኪም ናት።' },
  { german: 'das Einzelkind', amharic: 'ብቸኛ ልጅ', pronunciation: 'ዳስ አይንጸልኪንድ', level: 'A2', category: 'family', example_de: 'Ich bin ein Einzelkind.', example_am: 'ብቸኛ ልጅ ነኝ።' },
  { german: 'die Zwillinge', amharic: 'መንታ', pronunciation: 'ዲ ጽቪሊንገ', level: 'A2', category: 'family', example_de: 'Sie hat Zwillinge.', example_am: 'መንታ ልጆች አሏት።' },
  { german: 'Herzlichen Glückwunsch', amharic: 'ልባዊ እንኳን ደስ አለህ', pronunciation: 'ሄርጽሊኸን ግሊክቩንሽ', level: 'A1', category: 'greetings', example_de: 'Herzlichen Glückwunsch zum Geburtstag!', example_am: 'ልደትህን እንኳን ደስ አለህ!' },
  { german: 'Frohe Weihnachten', amharic: 'መልካም ገና', pronunciation: 'ፍሮሄ ቫይናኽተን', level: 'A1', category: 'greetings', example_de: 'Frohe Weihnachten!', example_am: 'መልካም ገና!' },
  { german: 'Guten Rutsch', amharic: 'መልካም አዲስ ዓመት', pronunciation: 'ጉተን ሩችሽ', level: 'A1', category: 'greetings', example_de: 'Guten Rutsch ins neue Jahr!', example_am: 'መልካም አዲስ ዓመት!' },
  { german: 'Gute Besserung', amharic: 'ፈጣን ማገገም', pronunciation: 'ጉተ ቤሰሩንግ', level: 'A1', category: 'greetings', example_de: 'Du bist krank? Gute Besserung!', example_am: 'ታምመሃል? ፈጣን ማገገም!' },
  { german: 'die Reservierung', amharic: 'ቦታ ማስያዝ', pronunciation: 'ዲ ሬዘርቪሩንግ', level: 'A2', category: 'restaurant', example_de: 'Haben Sie eine Reservierung?', example_am: 'ቦታ አስይዘዋል?' },
  { german: 'die Beilage', amharic: 'ተጨማሪ ምግብ', pronunciation: 'ዲ ባይላገ', level: 'A2', category: 'restaurant', example_de: 'Als Beilage nehme ich Reis.', example_am: 'ተጨማሪ ሩዝ እወስዳለሁ።' },
  { german: 'der Arbeitgeber', amharic: 'ቀጣሪ', pronunciation: 'ዴር አርባይትጌበር', level: 'B1', category: 'work', example_de: 'Mein Arbeitgeber ist zufrieden.', example_am: 'ቀጣሪዬ ረክቷል።' },
  { german: 'der Arbeitnehmer', amharic: 'ሰራተኛ', pronunciation: 'ዴር አርባይትኔመር', level: 'B1', category: 'work', example_de: 'Der Arbeitnehmer hat Rechte.', example_am: 'ሰራተኛው መብት አለው።' },
  { german: 'die Teilzeit', amharic: 'የግማሽ ጊዜ ሥራ', pronunciation: 'ዲ ታይልጻይት', level: 'B1', category: 'work', example_de: 'Ich arbeite in Teilzeit.', example_am: 'የግማሽ ጊዜ ሥራ እሰራለሁ።' },
  { german: 'die Vollzeit', amharic: 'ሙሉ ጊዜ ሥራ', pronunciation: 'ዲ ፎልጻይት', level: 'B1', category: 'work', example_de: 'Sie arbeitet Vollzeit.', example_am: 'ሙሉ ጊዜ ሥራ ትሰራለች።' },
  { german: 'die Fortbildung', amharic: 'ተጨማሪ ስልጠና', pronunciation: 'ዲ ፎርትቢልዱንግ', level: 'B1', category: 'work', example_de: 'Ich besuche eine Fortbildung.', example_am: 'ተጨማሪ ስልጠና እሄዳለሁ።' },
  { german: 'die Teamarbeit', amharic: 'የቡድን ሥራ', pronunciation: 'ዲ ቲምአርባይት', level: 'B1', category: 'work', example_de: 'Teamarbeit ist wichtig.', example_am: 'የቡድን ሥራ አስፈላጊ ነው።' },
  { german: 'beige', amharic: 'ቤዥ/ወርቃማ ነጭ', pronunciation: 'ቤዥ', level: 'A2', category: 'colors', example_de: 'Die Wand ist beige.', example_am: 'ግድግዳው ቤዥ ነው።' },
  { german: 'silber', amharic: 'ብር ቀለም', pronunciation: 'ዚልበር', level: 'A2', category: 'colors', example_de: 'Das Auto ist silber.', example_am: 'መኪናው ብር ቀለም ነው።' },
  { german: 'dunkel', amharic: 'ጨለማ/ጥቁር', pronunciation: 'ዱንከል', level: 'A1', category: 'colors', example_de: 'Es ist dunkel draußen.', example_am: 'ውጪ ጨለማ ነው።' },
  { german: 'hell', amharic: 'ብሩህ/ቀላል', pronunciation: 'ሄል', level: 'A1', category: 'colors', example_de: 'Das Zimmer ist hell.', example_am: 'ክፍሉ ብሩህ ነው።' },
  { german: 'null', amharic: 'ዜሮ', pronunciation: 'ኑል', level: 'A1', category: 'numbers', example_de: 'Die Temperatur ist null Grad.', example_am: 'ሙቀቱ ዜሮ ዲግሪ ነው።' },
  { german: 'erste', amharic: 'የመጀመሪያ', pronunciation: 'ኤርስተ', level: 'A1', category: 'numbers', example_de: 'Das ist mein erstes Mal.', example_am: 'ይህ የመጀመሪያዬ ነው።' },
  { german: 'zweite', amharic: 'ሁለተኛ', pronunciation: 'ጽቫይተ', level: 'A1', category: 'numbers', example_de: 'Nehmen Sie die zweite Straße links.', example_am: 'ሁለተኛ ጎዳናውን ወደ ግራ ያዙ።' },
  { german: 'dritte', amharic: 'ሦስተኛ', pronunciation: 'ድሪተ', level: 'A1', category: 'numbers', example_de: 'Er wohnt im dritten Stock.', example_am: 'ሦስተኛ ፎቅ ላይ ይኖራል።' },
  { german: 'das Viertel', amharic: 'ሩብ', pronunciation: 'ዳስ ፊርተል', level: 'A2', category: 'numbers', example_de: 'Es ist Viertel nach drei.', example_am: 'ሦስት ከሩብ ነው።' },
  { german: 'die Therapie', amharic: 'ቴራፒ/ህክምና ሂደት', pronunciation: 'ዲ ቴራፒ', level: 'B2', category: 'medical', example_de: 'Die Therapie hilft ihm.', example_am: 'ቴራፒው ይረዳዋል።' },
  { german: 'das Symptom', amharic: 'ምልክት/ሲምፕተም', pronunciation: 'ዳስ ዚምፕቶም', level: 'B1', category: 'medical', example_de: 'Was sind die Symptome?', example_am: 'ምልክቶቹ ምንድናቸው?' },
  { german: 'der Fahrplan', amharic: 'የጉዞ መርሃ ግብር', pronunciation: 'ዴር ፋርፕላን', level: 'A2', category: 'transport', example_de: 'Schau mal den Fahrplan an.', example_am: 'የጉዞ መርሃ ግብሩን ተመልከት።' },
  { german: 'der Unfall', amharic: 'አደጋ', pronunciation: 'ዴር ኡንፋል', level: 'A2', category: 'transport', example_de: 'Es gab einen Unfall.', example_am: 'አደጋ ተከስቷል።' },
  { german: 'Warum', amharic: 'ለምን', pronunciation: 'ቫሩም', level: 'A1', category: 'questions', example_de: 'Warum bist du traurig?', example_am: 'ለምን አዘንክ?' },
  { german: 'Wann', amharic: 'መቼ', pronunciation: 'ቫን', level: 'A1', category: 'questions', example_de: 'Wann kommst du?', example_am: 'መቼ ትመጣለህ?' },
  { german: 'Woher', amharic: 'ከየት', pronunciation: 'ቮሄር', level: 'A1', category: 'questions', example_de: 'Woher kommen Sie?', example_am: 'ከየት ነው የመጡት?' },
  { german: 'Wohin', amharic: 'ወዴት', pronunciation: 'ቮሂን', level: 'A1', category: 'questions', example_de: 'Wohin gehst du?', example_am: 'ወዴት ትሄዳለህ?' },
  { german: 'Welche', amharic: 'የትኛው', pronunciation: 'ቬልሸ', level: 'A1', category: 'questions', example_de: 'Welche Farbe magst du?', example_am: 'የትኛውን ቀለም ትወዳለህ?' },
  { german: 'Wessen', amharic: 'የማን', pronunciation: 'ቬሰን', level: 'B1', category: 'questions', example_de: 'Wessen Tasche ist das?', example_am: 'ይህ የማን ቦርሳ ነው?' },
  { german: 'die Staatsangehörigkeit', amharic: 'ዜግነት', pronunciation: 'ዲ ሽታትስአንገሆሪግካይት', level: 'B1', category: 'legal_admin', example_de: 'Welche Staatsangehörigkeit haben Sie?', example_am: 'ዜግነትዎ ምንድነው?' },
  { german: 'das Amt', amharic: 'ቢሮ/መሥሪያ ቤት', pronunciation: 'ዳስ አምት', level: 'A2', category: 'legal_admin', example_de: 'Ich muss zum Amt gehen.', example_am: 'ቢሮ መሄድ አለብኝ።' },
  { german: 'der Steuerbescheid', amharic: 'የግብር ማስታወቂያ', pronunciation: 'ዴር ሽቶይአርቤሻይድ', level: 'B2', category: 'legal_admin', example_de: 'Der Steuerbescheid kam per Post.', example_am: 'የግብር ማስታወቂያው በፖስታ መጣ።' },
  { german: 'aufräumen', amharic: 'ማስተካከል/ማጽዳት', pronunciation: 'አውፍሮይመን', level: 'A2', category: 'separable_verbs', example_de: 'Räum dein Zimmer auf!', example_am: 'ክፍልህን አስተካክል!' },
  { german: 'zuhören', amharic: 'ማዳመጥ', pronunciation: 'ጹሆረን', level: 'A2', category: 'separable_verbs', example_de: 'Hör mir bitte zu!', example_am: 'አዳምጠኝ!' },
  { german: 'nachdenken', amharic: 'ማሰብ/ማሰላሰል', pronunciation: 'ናኽዴንከን', level: 'B1', category: 'separable_verbs', example_de: 'Ich muss darüber nachdenken.', example_am: 'ስለዚያ ማሰብ አለብኝ።' },
  { german: 'ausgeben', amharic: 'ማውጣት (ገንዘብ)', pronunciation: 'አውስጌበን', level: 'A2', category: 'separable_verbs', example_de: 'Ich gebe zu viel Geld aus.', example_am: 'ብዙ ገንዘብ አወጣለሁ።' },
  { german: 'lassen', amharic: 'መተው/ማስደረግ', pronunciation: 'ላሰን', level: 'B1', category: 'modal_verbs', example_de: 'Lass mich in Ruhe!', example_am: 'ተወኝ!' },
  { german: 'brauchen zu', amharic: 'ማስፈለግ (ከ...ጋር)', pronunciation: 'ብራውኸን ጹ', level: 'B1', category: 'modal_verbs', example_de: 'Du brauchst nicht zu kommen.', example_am: 'መምጣት አያስፈልግህም።' },
  { german: 'der Dachboden', amharic: 'ጣራ ቤት', pronunciation: 'ዴር ዳኽቦደን', level: 'A2', category: 'house', example_de: 'Auf dem Dachboden sind alte Sachen.', example_am: 'ጣራ ቤት ላይ ያረጁ ዕቃዎች አሉ።' },
  { german: 'die Garage', amharic: 'ጋራዥ', pronunciation: 'ዲ ጋራዠ', level: 'A2', category: 'house', example_de: 'Das Auto steht in der Garage.', example_am: 'መኪናው ጋራዥ ውስጥ ነው።' },
  { german: 'der Aufzug', amharic: 'አሳንሰር', pronunciation: 'ዴር አውፍጹግ', level: 'A2', category: 'house', example_de: 'Nehmen Sie den Aufzug!', example_am: 'አሳንሰሩን ይጠቀሙ!' },
  { german: 'die Steckdose', amharic: 'ሶኬት/ኤሌክትሪክ ማስገቢያ', pronunciation: 'ዲ ሽቴክዶዘ', level: 'A2', category: 'house', example_de: 'Wo ist die Steckdose?', example_am: 'ሶኬቱ የት ነው?' },
  { german: 'die Ärztin', amharic: 'ሐኪም (ሴት)', pronunciation: 'ዲ ኤርጽቲን', level: 'A1', category: 'professions', example_de: 'Die Ärztin untersucht mich.', example_am: 'ሐኪሟ ትመረምረኛለች።' },
  { german: 'der Anwalt', amharic: 'ጠበቃ', pronunciation: 'ዴር አንቫልት', level: 'B1', category: 'professions', example_de: 'Ich brauche einen Anwalt.', example_am: 'ጠበቃ ያስፈልገኛል።' },
  { german: 'der Mechaniker', amharic: 'ሜካኒክ', pronunciation: 'ዴር ሜካኒከር', level: 'A2', category: 'professions', example_de: 'Der Mechaniker repariert das Auto.', example_am: 'ሜካኒኩ መኪናውን ያስተካክላል።' },
  { german: 'der Wissenschaftler', amharic: 'ሳይንቲስት', pronunciation: 'ዴር ቪሰንሻፍትለር', level: 'B2', category: 'professions', example_de: 'Der Wissenschaftler forscht an neuen Medikamenten.', example_am: 'ሳይንቲስቱ አዳዲስ መድሃኒቶችን ይመረምራል።' },
  { german: 'der Rucksack', amharic: 'የጀርባ ቦርሳ', pronunciation: 'ዴር ሩክዛክ', level: 'A1', category: 'everyday', example_de: 'Mein Rucksack ist schwer.', example_am: 'የጀርባ ቦርሳዬ ከባድ ነው።' },
  { german: 'die Seife', amharic: 'ሳሙና', pronunciation: 'ዲ ዛይፈ', level: 'A1', category: 'everyday', example_de: 'Die Seife riecht gut.', example_am: 'ሳሙናው ጥሩ ይሸታል።' },
  { german: 'das Handtuch', amharic: 'ፎጣ', pronunciation: 'ዳስ ሃንትቱኽ', level: 'A1', category: 'everyday', example_de: 'Das Handtuch ist nass.', example_am: 'ፎጣው እርጥብ ነው።' },
  { german: 'die Zahnbürste', amharic: 'የጥርስ ብሩሽ', pronunciation: 'ዲ ጻንቡርስተ', level: 'A1', category: 'everyday', example_de: 'Ich kaufe eine neue Zahnbürste.', example_am: 'አዲስ የጥርስ ብሩሽ እገዛለሁ።' },
  { german: 'die Kerze', amharic: 'ሻማ', pronunciation: 'ዲ ኬርጸ', level: 'A2', category: 'house', example_de: 'Zünde die Kerze an!', example_am: 'ሻማውን አብራ!' },
  { german: 'die Schublade', amharic: 'መሳቢያ', pronunciation: 'ዲ ሹብላደ', level: 'A2', category: 'house', example_de: 'Die Schublade klemmt.', example_am: 'መሳቢያው ተጣብቋል።' },
  { german: 'der Vorhang', amharic: 'መጋረጃ', pronunciation: 'ዴር ፎርሃንግ', level: 'A2', category: 'house', example_de: 'Mach den Vorhang zu!', example_am: 'መጋረጃውን ዝጋ!' },
  { german: 'die Pfanne', amharic: 'ምድጃ/ድስት', pronunciation: 'ዲ ፕፋነ', level: 'A1', category: 'food', example_de: 'Brate das Ei in der Pfanne!', example_am: 'እንቁላሉን በድስት ጥበስ!' },
  { german: 'der Löffel', amharic: 'ማንኪያ', pronunciation: 'ዴር ለፈል', level: 'A1', category: 'food', example_de: 'Gib mir einen Löffel!', example_am: 'ማንኪያ ስጠኝ!' },
  { german: 'das Gewürz', amharic: 'ቅመም', pronunciation: 'ዳስ ገቩርጽ', level: 'A2', category: 'food', example_de: 'Welches Gewürz magst du?', example_am: 'የትኛውን ቅመም ትወዳለህ?' },
  { german: 'der Bürgersteig', amharic: 'የእግረኛ መንገድ', pronunciation: 'ዴር ቡርገርሽታይግ', level: 'B1', category: 'transport', example_de: 'Geh auf dem Bürgersteig!', example_am: 'በእግረኛ መንገዱ ሂድ!' },
  { german: 'die Spinne', amharic: 'ሸረሪት', pronunciation: 'ዲ ሽፒነ', level: 'A2', category: 'animals', example_de: 'Ich habe Angst vor Spinnen.', example_am: 'ሸረሪት ይፈራኛል።' },
  { german: 'der Wal', amharic: 'ዓሣ ነባሪ', pronunciation: 'ዴር ቫል', level: 'B1', category: 'animals', example_de: 'Der Wal ist das größte Tier.', example_am: 'ዓሣ ነባሪ ትልቁ እንስሳ ነው።' },
  { german: 'die Zufriedenheit', amharic: 'እርካታ', pronunciation: 'ዲ ጹፍሪደንሃይት', level: 'B2', category: 'emotions', example_de: 'Zufriedenheit ist wichtig.', example_am: 'እርካታ አስፈላጊ ነው።' },
  { german: 'die Neugier', amharic: 'ጉጉት/ወሬ-ፈላጊነት', pronunciation: 'ዲ ኖይጊር', level: 'B1', category: 'emotions', example_de: 'Die Neugier treibt mich an.', example_am: 'ጉጉቱ ያነሳሳኛል።' },
  { german: 'die Kette', amharic: 'ሰንሰለት/ሐብል', pronunciation: 'ዲ ኬተ', level: 'A2', category: 'clothing', example_de: 'Sie trägt eine goldene Kette.', example_am: 'የወርቅ ሐብል አድርጋለች።' },
  { german: 'der Ring', amharic: 'ቀለበት', pronunciation: 'ዴር ሪንግ', level: 'A1', category: 'clothing', example_de: 'Der Ring ist schön.', example_am: 'ቀለበቱ ቆንጆ ነው።' },
  { german: 'das Pflaster', amharic: 'ፕላስተር/ተለጣፊ', pronunciation: 'ዳስ ፕፍላስተር', level: 'A2', category: 'medical', example_de: 'Ich brauche ein Pflaster.', example_am: 'ፕላስተር ያስፈልገኛል።' },
  { german: 'das Thermometer', amharic: 'ቴርሞሜትር', pronunciation: 'ዳስ ቴርሞሜተር', level: 'B1', category: 'medical', example_de: 'Das Thermometer zeigt 38 Grad.', example_am: 'ቴርሞሜትሩ 38 ዲግሪ ያሳያል።' },
  { german: 'der Wanderweg', amharic: 'የእግር ጉዞ መንገድ', pronunciation: 'ዴር ቫንደርቬግ', level: 'B1', category: 'hobbies', example_de: 'Der Wanderweg ist 10 km lang.', example_am: 'የእግር ጉዞ መንገዱ 10 ኪሜ ነው።' },
  { german: 'das Schachspiel', amharic: 'ቼዝ', pronunciation: 'ዳስ ሻኽሽፒል', level: 'B1', category: 'hobbies', example_de: 'Spielst du Schach?', example_am: 'ቼዝ ትጫወታለህ?' },
  { german: 'das Aquarium', amharic: 'የዓሣ ማቆያ', pronunciation: 'ዳስ አኳሪዩም', level: 'B1', category: 'hobbies', example_de: 'Das Aquarium hat viele Fische.', example_am: 'የዓሣ ማቆያው ብዙ ዓሣ አለው።' },
  { german: 'der Sonnenuntergang', amharic: 'የፀሐይ ስትጠልቅ', pronunciation: 'ዴር ዞነንኡንተርጋንግ', level: 'B1', category: 'nature', example_de: 'Der Sonnenuntergang ist wunderschön.', example_am: 'ፀሐይ ስትጠልቅ በጣም ቆንጆ ነው።' },
  { german: 'die Höhle', amharic: 'ዋሻ', pronunciation: 'ዲ ሆለ', level: 'B1', category: 'nature', example_de: 'Wir besuchen eine Höhle.', example_am: 'ዋሻ እንጎበኛለን።' },
  { german: 'das Erdbeben', amharic: 'የመሬት መንቀጥቀጥ', pronunciation: 'ዳስ ኤርድቤበን', level: 'B2', category: 'nature', example_de: 'Das Erdbeben war stark.', example_am: 'የመሬት መንቀጥቀጡ ጠንካራ ነበር።' },
  { german: 'der Schrank', amharic: 'ቁም ሳጥን', pronunciation: 'ዴር ሽራንክ', level: 'A1', category: 'house', example_de: 'Die Kleidung ist im Schrank.', example_am: 'ልብሱ በቁም ሳጥን ውስጥ ነው።' },
  { german: 'das Regal', amharic: 'መደርደሪያ', pronunciation: 'ዳስ ሬጋል', level: 'A2', category: 'house', example_de: 'Die Bücher stehen im Regal.', example_am: 'መጽሐፍቶቹ በመደርደሪያው ላይ ናቸው።' },
  { german: 'der Teppich', amharic: 'ምንጣፍ', pronunciation: 'ዴር ቴፒኽ', level: 'A2', category: 'house', example_de: 'Der Teppich ist weich.', example_am: 'ምንጣፉ ለስላሳ ነው።' },
  { german: 'die Wand', amharic: 'ግድግዳ', pronunciation: 'ዲ ቫንድ', level: 'A1', category: 'house', example_de: 'Das Bild hängt an der Wand.', example_am: 'ሥዕሉ በግድግዳ ላይ ተሰቅሏል።' },
  { german: 'der Boden', amharic: 'ወለል', pronunciation: 'ዴር ቦደን', level: 'A2', category: 'house', example_de: 'Der Boden ist sauber.', example_am: 'ወለሉ ንጹህ ነው።' },
  { german: 'die Dusche', amharic: 'ሻወር', pronunciation: 'ዲ ዱሸ', level: 'A1', category: 'house', example_de: 'Ich nehme eine Dusche.', example_am: 'ሻወር እወስዳለሁ።' },
  { german: 'die Badewanne', amharic: 'የመታጠቢያ ገንዳ', pronunciation: 'ዲ ባደቫነ', level: 'A2', category: 'house', example_de: 'Die Badewanne ist voll.', example_am: 'የመታጠቢያ ገንዳው ሞልቷል።' },
  { german: 'die Toilette', amharic: 'ሽንት ቤት', pronunciation: 'ዲ ቶይሌተ', level: 'A1', category: 'house', example_de: 'Wo ist die Toilette?', example_am: 'ሽንት ቤቱ የት ነው?' },
  { german: 'der Herd', amharic: 'ምድጃ', pronunciation: 'ዴር ሄርድ', level: 'A2', category: 'house', example_de: 'Stell den Topf auf den Herd!', example_am: 'ድስቱን በምድጃ ላይ አስቀምጥ!' },
  { german: 'der Briefkasten', amharic: 'የፖስታ ሳጥን', pronunciation: 'ዴር ብሪፍካስተን', level: 'A2', category: 'everyday', example_de: 'Der Brief ist im Briefkasten.', example_am: 'ደብዳቤው በፖስታ ሳጥን ውስጥ ነው።' },
  { german: 'die Drogerie', amharic: 'ፋርማሲ/የመድሃኒት ሱቅ', pronunciation: 'ዲ ድሮገሪ', level: 'A2', category: 'shopping', example_de: 'Ich kaufe Shampoo in der Drogerie.', example_am: 'ሻምፖ ከፋርማሲ እገዛለሁ።' },
  { german: 'das Einkaufszentrum', amharic: 'የገበያ ማዕከል', pronunciation: 'ዳስ አይንካውፍስጸንትሩም', level: 'A2', category: 'shopping', example_de: 'Das Einkaufszentrum ist groß.', example_am: 'የገበያ ማዕከሉ ትልቅ ነው።' },
  { german: 'die Klingel', amharic: 'ደወል', pronunciation: 'ዲ ክሊንገል', level: 'A2', category: 'house', example_de: 'Die Klingel funktioniert nicht.', example_am: 'ደወሉ አይሰራም።' },
  { german: 'das Kissen', amharic: 'ትራስ', pronunciation: 'ዳስ ኪሰን', level: 'A2', category: 'house', example_de: 'Das Kissen ist weich.', example_am: 'ትራሱ ለስላሳ ነው።' },
  { german: 'die Decke', amharic: 'ብርድ ልብስ/ጣሪያ', pronunciation: 'ዲ ዴከ', level: 'A2', category: 'house', example_de: 'Die Decke ist warm.', example_am: 'ብርድ ልብሱ ሞቃት ነው።' },
  { german: 'der Zaun', amharic: 'አጥር', pronunciation: 'ዴር ጻውን', level: 'A2', category: 'house', example_de: 'Der Zaun ist aus Holz.', example_am: 'አጥሩ ከእንጨት ነው።' },
  { german: 'das Tor', amharic: 'በር/ጌት', pronunciation: 'ዳስ ቶር', level: 'A2', category: 'house', example_de: 'Das Tor ist offen.', example_am: 'በሩ ክፍት ነው።' },
  { german: 'der Rasen', amharic: 'ሳር', pronunciation: 'ዴር ራዘን', level: 'A2', category: 'nature', example_de: 'Der Rasen muss gemäht werden.', example_am: 'ሳሩ መቆረጥ አለበት።' },
  { german: 'die Reinigung', amharic: 'ድራይ ክሊኒንግ', pronunciation: 'ዲ ራይኒጉንግ', level: 'B1', category: 'shopping', example_de: 'Bring den Anzug zur Reinigung!', example_am: 'ሱቱን ወደ ድራይ ክሊኒንግ ውሰድ!' },
  { german: 'die Giraffe', amharic: 'ቀጭኔ', pronunciation: 'ዲ ጊራፈ', level: 'A2', category: 'animals', example_de: 'Die Giraffe hat einen langen Hals.', example_am: 'ቀጭኔ ረጅም አንገት አላት።' },
  { german: 'der Tiger', amharic: 'ነብር', pronunciation: 'ዴር ቲገር', level: 'A2', category: 'animals', example_de: 'Der Tiger ist gefährlich.', example_am: 'ነብር አደገኛ ነው።' },
  { german: 'das Zebra', amharic: 'የሜዳ አህያ', pronunciation: 'ዳስ ጼብራ', level: 'A2', category: 'animals', example_de: 'Das Zebra hat Streifen.', example_am: 'የሜዳ አህያ ጭረት አለው።' },
  { german: 'das Krokodil', amharic: 'አዞ', pronunciation: 'ዳስ ክሮኮዲል', level: 'B1', category: 'animals', example_de: 'Das Krokodil lebt im Wasser.', example_am: 'አዞ በውሃ ውስጥ ይኖራል።' },
  { german: 'der Papagei', amharic: 'በቀቀን', pronunciation: 'ዴር ፓፓጋይ', level: 'A2', category: 'animals', example_de: 'Der Papagei kann sprechen.', example_am: 'በቀቀን መናገር ይችላል።' },
  { german: 'der Delfin', amharic: 'ዶልፊን', pronunciation: 'ዴር ዴልፊን', level: 'B1', category: 'animals', example_de: 'Delfine sind intelligent.', example_am: 'ዶልፊኖች ብልጥ ናቸው።' },
  { german: 'der Hai', amharic: 'ሻርክ', pronunciation: 'ዴር ሃይ', level: 'B1', category: 'animals', example_de: 'Der Hai schwimmt schnell.', example_am: 'ሻርኩ በፍጥነት ይዋኛል።' },
  { german: 'der Pinguin', amharic: 'ፔንግዊን', pronunciation: 'ዴር ፒንጉኢን', level: 'A2', category: 'animals', example_de: 'Pinguine leben in der Kälte.', example_am: 'ፔንግዊኖች በቅዝቃዜ ይኖራሉ።' },
  { german: 'die Fliege', amharic: 'ዝንብ', pronunciation: 'ዲ ፍሊገ', level: 'A2', category: 'animals', example_de: 'Die Fliege ist lästig.', example_am: 'ዝንቡ የሚያስቸግር ነው።' },
  { german: 'die Mücke', amharic: 'ትንኝ', pronunciation: 'ዲ ሙከ', level: 'A2', category: 'animals', example_de: 'Die Mücke hat mich gestochen.', example_am: 'ትንኟ ነደፈችኝ።' },
  { german: 'die Taube', amharic: 'ርግብ', pronunciation: 'ዲ ታውበ', level: 'A2', category: 'animals', example_de: 'Die Taube fliegt über die Stadt.', example_am: 'ርግቡ ከከተማው ላይ ይበራል።' },
  { german: 'die Eule', amharic: 'ጉጉት', pronunciation: 'ዲ ኦይለ', level: 'B1', category: 'animals', example_de: 'Die Eule ist nachtaktiv.', example_am: 'ጉጉቱ በሌሊት ንቁ ነው።' },
  { german: 'der Fuchs', amharic: 'ቀበሮ', pronunciation: 'ዴር ፉክስ', level: 'A2', category: 'animals', example_de: 'Der Fuchs ist schlau.', example_am: 'ቀበሮ ብልጥ ነው።' },
  { german: 'der Igel', amharic: 'ጃርት', pronunciation: 'ዴር ኢገል', level: 'B1', category: 'animals', example_de: 'Der Igel hat Stacheln.', example_am: 'ጃርት እሾህ አለው።' },
  { german: 'der Hase', amharic: 'ጥንቸል', pronunciation: 'ዴር ሃዘ', level: 'A1', category: 'animals', example_de: 'Der Hase ist schnell.', example_am: 'ጥንቸል ፈጣን ነው።' },
  { german: 'der Koffer', amharic: 'ሻንጣ', pronunciation: 'ዴር ኮፈር', level: 'A1', category: 'everyday', example_de: 'Pack deinen Koffer!', example_am: 'ሻንጣህን ሸኝ!' },
  { german: 'der Kuli', amharic: 'ብዕር', pronunciation: 'ዴር ኩሊ', level: 'A1', category: 'everyday', example_de: 'Hast du einen Kuli?', example_am: 'ብዕር አለህ?' },
  { german: 'der Spatz', amharic: 'ጫጩት/ወፍ', pronunciation: 'ዴር ሽፓጽ', level: 'B1', category: 'animals', example_de: 'Der Spatz singt auf dem Dach.', example_am: 'ወፉ ጣሪያ ላይ ይዘምራል።' },
  { german: 'der Dachs', amharic: 'ጉንፍ', pronunciation: 'ዴር ዳኽስ', level: 'B2', category: 'animals', example_de: 'Der Dachs lebt im Wald.', example_am: 'ጉንፉ በጫካ ውስጥ ይኖራል።' },
  { german: 'der Käfer', amharic: 'ጥንዚዛ', pronunciation: 'ዴር ኬፈር', level: 'A2', category: 'animals', example_de: 'Der Käfer krabbelt auf dem Boden.', example_am: 'ጥንዚዛው ወለል ላይ ይሳባል።' },
  { german: 'der Skorpion', amharic: 'ጊንጥ', pronunciation: 'ዴር ስኮርፒዮን', level: 'B1', category: 'animals', example_de: 'Der Skorpion ist giftig.', example_am: 'ጊንጡ መርዛማ ነው።' },
  { german: 'das Waschbecken', amharic: 'እጅ መታጠቢያ', pronunciation: 'ዳስ ቫሽቤከን', level: 'A2', category: 'house', example_de: 'Das Waschbecken ist verstopft.', example_am: 'እጅ መታጠቢያው ተዘግቷል።' },
  { german: 'die Matratze', amharic: 'ፍራሽ', pronunciation: 'ዲ ማትራጸ', level: 'A2', category: 'house', example_de: 'Die Matratze ist neu.', example_am: 'ፍራሹ አዲስ ነው።' },
  { german: 'die Klimaanlage', amharic: 'ኤርኮን/ማቀዝቀዣ', pronunciation: 'ዲ ክሊማአንላገ', level: 'B1', category: 'house', example_de: 'Die Klimaanlage kühlt den Raum.', example_am: 'ኤርኮኑ ክፍሉን ያቀዘቅዛል።' },
]
export interface LessonSeed {
  title: string
  subtitle: string
  level: 'A1' | 'A2' | 'B1' | 'B2'
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
  {
    title: 'የብዙ ቁጥር አሠራር',
    subtitle: 'Der Plural — ብዙ ቁጥርን መፍጠር',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `በጀርመንኛ የብዙ ቁጥር አሠራር ከአማርኛ ይለያል። በአማርኛ "-ዎች" ወይም "-ች" ብቻ ነው፤ በጀርመንኛ ግን ብዙ ዓይነት መጨረሻዎች አሉ።

## ዋና ቅጦች

### 1. -e መጨረሻ
- der Tisch → die Tisch**e** (ጠረጴዛ → ጠረጴዛዎች)
- der Brief → die Brief**e** (ደብዳቤ → ደብዳቤዎች)

### 2. -en / -n መጨረሻ
- die Frau → die Frau**en** (ሴት → ሴቶች)
- die Blume → die Blume**n** (አበባ → አበባዎች)
- die Zeitung → die Zeitung**en** (ጋዜጣ → ጋዜጦች)

### 3. -er መጨረሻ (ብዙ ጊዜ ከ Umlaut ጋር)
- das Kind → die Kind**er** (ልጅ → ልጆች)
- das Buch → die B**ü**ch**er** (መጽሐፍ → መጽሐፎች)

### 4. -s መጨረሻ (ብዙ ጊዜ ከውጭ የመጡ ቃላት)
- das Auto → die Auto**s** (መኪና → መኪናዎች)
- das Hotel → die Hotel**s** (ሆቴል → ሆቴሎች)

### 5. Umlaut ብቻ (ä, ö, ü)
- der Vater → die V**ä**ter (አባት → አባቶች)
- die Mutter → die M**ü**tter (እናት → እናቶች)

### 6. ምንም ለውጥ የሌለው
- der Lehrer → die Lehrer (መምህር → መምህራን)
- das Mädchen → die Mädchen (ልጃገረድ → ልጃገረዶች)

## ወሳኝ ደንብ

በብዙ ቁጥር ጊዜ **ሁሉም** ስሞች አርቲክላቸው **"die"** ይሆናል!

| ነጠላ | ብዙ |
|------|------|
| **der** Tisch | **die** Tische |
| **das** Kind | **die** Kinder |
| **die** Frau | **die** Frauen |

## ምክር

አዲስ ቃል ሲማሩ ሁልጊዜ ብዙ ቁጥሩንም ያጥኑ — der Tisch, **die Tische** ብለው ያስታውሱ!`,
  },
  {
    title: 'ተውላጠ-ስሞች',
    subtitle: 'Personalpronomen — ich, du, er, sie, es',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `የጀርመንኛ ተውላጠ-ስሞች (ፐርሶናልፕሮኖመን) ከአማርኛ ጋር ተመሳሳይ ናቸው — ግን አንዳንድ ልዩነቶች አሉ።

## መሠረታዊ ተውላጠ-ስሞች

| ጀርመንኛ | አማርኛ | ምሳሌ |
|---------|--------|------|
| **ich** | እኔ | Ich lerne Deutsch. (ጀርመንኛ እማራለሁ።) |
| **du** | አንተ / አንቺ | Du sprichst gut. (ጥሩ ትናገራለህ።) |
| **er** | እሱ | Er kommt aus Berlin. (ከበርሊን ነው።) |
| **sie** | እሷ | Sie ist Lehrerin. (መምህርት ናት።) |
| **es** | (ገለልተኛ) | Es regnet. (ዝናብ ይዘንባል።) |
| **wir** | እኛ | Wir lernen zusammen. (አብረን እንማራለን።) |
| **ihr** | እናንተ | Ihr seid nett. (ደጎች ናችሁ።) |
| **sie** | እነሱ | Sie kommen morgen. (ነገ ይመጣሉ።) |
| **Sie** | እርስዎ | Sie sprechen gut Deutsch. (ጥሩ ጀርመንኛ ይናገራሉ።) |

## ልዩ ነጥቦች

### "sie" ሦስት ትርጉም አለው!
1. **sie** (ትንሽ ፊደል) = እሷ (ነጠላ)
2. **sie** (ትንሽ ፊደል) = እነሱ (ብዙ)
3. **Sie** (ትልቅ ፊደል) = እርስዎ (አክብሮት)

ልዩነቱ ከግሥ አርባ ጋር ይታወቃል፦
- **sie kommt** = እሷ ትመጣለች
- **sie kommen** = እነሱ ይመጣሉ
- **Sie kommen** = እርስዎ ይመጣሉ (ትልቅ S)

### "du" vs "Sie"
- **du** = ለጓደኞች፣ ለልጆች፣ ለቤተሰብ (ኢንፎርማል)
- **Sie** = ለባለሥልጣናት፣ ለዐዋቂዎች፣ ለማያውቋቸው ሰዎች (ፎርማል)

## መልመጃ

ትክክለኛውን ተውላጠ-ስም ይምረጡ፦
1. ___ heißt Maria. (er / sie / es) → **sie**
2. ___ kommen aus Äthiopien. (wir / ihr / sie) → **wir** ወይም **sie**
3. ___ bist Student. (ich / du / er) → **du**`,
  },
  {
    title: 'ማስተባበያ — nicht እና kein',
    subtitle: 'Verneinung — ማንኛውንም ዓረፍተ-ነገር ማስተባበል',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `በጀርመንኛ ዓረፍተ-ነገርን ለማስተባበል ሁለት ዋና ቃላት አሉ፦ **nicht** እና **kein**። መቼ የትኛውን እንደሚጠቀሙ ማወቅ አስፈላጊ ነው!

## "kein" — ስም ለማስተባበል

ስም (Nomen) ላይ **ein** ወይም ምንም አርቲክል ከሌለ፣ **kein** ይጠቀሙ፦

- Ich habe **ein** Auto. → Ich habe **kein** Auto.
  (መኪና አለኝ → መኪና የለኝም)
- Er trinkt Kaffee. → Er trinkt **keinen** Kaffee.
  (ቡና ይጠጣል → ቡና አይጠጣም)

### kein ይቀየራል (እንደ ein)

| | ወንድ | ሴት | ገለልተኛ |
|---|------|------|---------|
| Nominativ | kein | keine | kein |
| Akkusativ | keinen | keine | kein |

## "nicht" — ሌላ ሁሉ ለማስተባበል

ግሥ፣ ቅጽል፣ ተውሳክ ወይም **der/die/das** ያለው ስም ላይ **nicht** ይጠቀሙ፦

- Ich **komme** nicht. (አልመጣም)
- Das Buch ist **nicht** gut. (መጽሐፉ ጥሩ አይደለም)
- Ich kaufe **das** Auto nicht. (ያንን መኪና አልገዛውም)

## nicht የት ይቀመጣል?

- ግሥ ብቻ → ከግሥ በኋላ፦ Ich **verstehe** nicht.
- ቅጽል/ተውሳክ → ከቅጽሉ በፊት፦ Das ist nicht **groß**.
- ዓረፍተ-ነገር መጨረሻ → ብዙ ጊዜ መጨረሻ ላይ፦ Er kommt heute **nicht**.

## ማጠቃለያ

| ሁኔታ | ይጠቀሙ |
|------|--------|
| ein / ያለ አርቲክል + ስም | **kein** |
| ግሥ፣ ቅጽል፣ der/die/das + ስም | **nicht** |

## መልመጃ

ያስተባብሉ፦
1. Ich trinke Tee. → Ich trinke **keinen** Tee.
2. Sie kommt morgen. → Sie kommt morgen **nicht**.
3. Das ist ein Problem. → Das ist **kein** Problem.`,
  },
  {
    title: 'ባለቤት ተውላጠ-ስሞች',
    subtitle: 'Possessivpronomen — mein, dein, sein, ihr',
    level: 'A1',
    category: 'ሰዋስው (Grammar)',
    content: `ባለቤት ተውላጠ-ስሞች "የእኔ"፣ "የአንተ"፣ "የእሱ" ወዘተ ለመግለጽ ያገለግላሉ። በጀርመንኛ እንደ ስሙ ጾታ ይቀየራሉ!

## ዋና ባለቤት ተውላጠ-ስሞች

| ተውላጠ-ስም | ባለቤት | ምሳሌ |
|-----------|--------|------|
| **mein** | የእኔ | mein Buch (የኔ መጽሐፍ) |
| **dein** | የአንተ/ሽ | dein Haus (የአንተ ቤት) |
| **sein** | የእሱ | sein Auto (የእሱ መኪና) |
| **ihr** | የእሷ | ihr Kind (የእሷ ልጅ) |
| **unser** | የእኛ | unser Land (የእኛ ሀገር) |
| **euer** | የእናንተ | euer Lehrer (የእናንተ መምህር) |
| **ihr** | የእነሱ | ihr Hund (የእነሱ ውሻ) |
| **Ihr** | የእርስዎ | Ihr Name (የእርስዎ ስም) |

## መጨረሻዎች (እንደ ein ይቀየራል)

| | ወንድ (der) | ሴት (die) | ገለልተኛ (das) | ብዙ |
|---|-----------|-----------|-------------|------|
| Nominativ | mein | mein**e** | mein | mein**e** |
| Akkusativ | mein**en** | mein**e** | mein | mein**e** |

## ምሳሌዎች

- **Mein** Vater arbeitet in Zürich. (አባቴ ዙሪክ ውስጥ ይሠራል።)
- Ich liebe **meine** Mutter. (እናቴን እወዳለሁ።)
- Wo ist **dein** Buch? (መጽሐፍህ ወይ ነው?)
- **Sein** Bruder ist Arzt. (ወንድሙ ሐኪም ነው።)
- **Unsere** Schule ist groß. (ትምህርት ቤታችን ትልቅ ነው።)

## ልዩ — euer

**euer** ብቻ ሲቀየር "e" ይወድቃል፦
- euer Haus (ቤታችሁ) → eur**e** Schule (ትምህርት ቤታችሁ)`,
  },
  {
    title: 'ሞዳል ግሦች',
    subtitle: 'Modalverben — können, müssen, dürfen, sollen, wollen',
    level: 'A2',
    category: 'ሰዋስው (Grammar)',
    content: `ሞዳል ግሦች ስሜት ወይም አስፈላጊነት ይገልጻሉ — "ይችላል"፣ "ይገባዋል"፣ "ይፈልጋል" ወዘተ። በአማርኛ ተመሳሳይ ፅንሰ-ሐሳብ አለ!

## ስድስቱ ሞዳል ግሦች

| ግሥ | ትርጉም | ምሳሌ |
|-----|--------|------|
| **können** | መቻል | Ich **kann** schwimmen. (መዋኘት እችላለሁ።) |
| **müssen** | መገደድ/ግዴታ | Du **musst** lernen. (መማር አለብህ።) |
| **dürfen** | ፈቃድ | **Darf** ich fragen? (መጠየቅ እችላለሁ?) |
| **sollen** | ምክር/ግዴታ | Du **sollst** pünktlich sein. (ሰዓት አክባሪ ልትሆን ይገባሃል።) |
| **wollen** | ፍላጎት | Ich **will** Arzt werden. (ሐኪም መሆን እፈልጋለሁ።) |
| **möchten** | ፍላጎት (ትሁት) | Ich **möchte** Kaffee. (ቡና ብፈልግ።) |

## የግሥ አርባ

ሞዳል ግሦች ልዩ ናቸው — ich እና er/sie/es ተመሳሳይ ናቸው!

| | können | müssen | dürfen |
|---|--------|--------|--------|
| ich | kann | muss | darf |
| du | kannst | musst | darfst |
| er/sie/es | kann | muss | darf |
| wir | können | müssen | dürfen |
| ihr | könnt | müsst | dürft |
| sie/Sie | können | müssen | dürfen |

## ዓረፍተ-ነገር አወቃቀር

ሞዳል ግሡ ሁለተኛ ቦታ ላይ፣ ዋናው ግሥ (Infinitiv) **መጨረሻ** ላይ ይቀመጣል፦

- Ich **kann** gut Deutsch **sprechen**.
  (ጥሩ ጀርመንኛ መናገር እችላለሁ።)
- Wir **müssen** morgen früh **aufstehen**.
  (ነገ ጠዋት መነሳት አለብን።)
- Du **darfst** hier nicht **rauchen**.
  (እዚህ ማጨስ አይፈቀድም።)

## müssen vs. sollen

- **müssen** = ግዴታ (ምርጫ የሌለው)፦ Ich **muss** arbeiten. (መሥራት አለብኝ — አማራጭ የለም)
- **sollen** = ምክር ወይም የሌላ ሰው ፍላጎት፦ Du **sollst** mehr lernen. (ተጨማሪ ትማር ተብለሃል)`,
  },
  {
    title: 'ተነጣይ ግሦች',
    subtitle: 'Trennbare Verben — aufstehen, einkaufen, ankommen',
    level: 'A2',
    category: 'ሰዋስው (Grammar)',
    content: `በጀርመንኛ አንዳንድ ግሦች ቅድመ-ቅጥያ (Präfix) አላቸው — ይህ ቅድመ-ቅጥያ በዋና ዓረፍተ-ነገር ውስጥ ከግሡ ተነጥሎ መጨረሻ ላይ ይቀመጣል!

## ምሳሌ — aufstehen (መነሳት)

- Infinitiv: **aufstehen**
- ዓረፍተ-ነገር: Ich **stehe** um 7 Uhr **auf**.
  (ሰዓት 7 ላይ እነሳለሁ።)

ቅድመ-ቅጥያው **auf** ተነጥሎ መጨረሻ ላይ ሄዷል!

## ተለምደው ተነጣይ ግሦች

| ግሥ | ትርጉም | ምሳሌ |
|-----|--------|------|
| **aufstehen** | መነሳት | Ich stehe früh **auf**. |
| **einkaufen** | መግዛት | Wir kaufen im Supermarkt **ein**. |
| **anrufen** | መደወል | Ich rufe dich später **an**. |
| **ankommen** | መድረስ | Der Zug kommt um 10 Uhr **an**. |
| **aufmachen** | መክፈት | Mach bitte die Tür **auf**! |
| **zumachen** | መዝጋት | Mach das Fenster **zu**! |
| **mitkommen** | አብሮ መሄድ | Kommst du **mit**? |
| **zurückkommen** | መመለስ | Er kommt morgen **zurück**. |

## ተነጣይ ቅድመ-ቅጥያዎች

**ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-** — እነዚህ ሁሉ ሊነጣጠሉ ይችላሉ።

## ማስታወሻዎች

### ከሞዳል ግሥ ጋር → አይነጣጠልም
- Ich **muss** um 7 Uhr **aufstehen**. (ሰዓት 7 መነሳት አለብኝ።)

### ከ Nebensatz ጋር → አይነጣጠልም
- ..., weil ich früh **aufstehe**. (ቶሎ ስለምነሳ...)

### Partizip II (ያለፈ ጊዜ) → ge ከቅድመ-ቅጥያ በኋላ
- aufstehen → auf**ge**standen
- einkaufen → ein**ge**kauft`,
  },
  {
    title: 'መስተዋድዶች',
    subtitle: 'Präpositionen — in, auf, an, mit, zu',
    level: 'A2',
    category: 'ሰዋስው (Grammar)',
    content: `መስተዋድዶች (ፕሬፖዚሲዮን) ቃላትን ያገናኛሉ — "ውስጥ"፣ "ላይ"፣ "ከ" ወዘተ። በጀርመንኛ መስተዋድዶች ከኬዝ (Akkusativ ወይም Dativ) ጋር ይሠራሉ!

## ሁልጊዜ Dativ የሚወስዱ

| መስተዋድድ | ትርጉም | ምሳሌ |
|---------|--------|------|
| **mit** | ከ...ጋር | Ich fahre **mit dem** Bus. (በአውቶቡስ እጓዛለሁ።) |
| **zu** | ወደ | Ich gehe **zum** Arzt. (ወደ ሐኪም እሄዳለሁ።) |
| **von** | ከ | Ich komme **von der** Arbeit. (ከሥራ መጥቻለሁ።) |
| **bei** | ዘንድ/ጋ | Ich wohne **bei** meiner Tante. (ከአክስቴ ዘንድ እኖራለሁ።) |
| **nach** | ወደ (ከተማ/ሀገር) | Ich fliege **nach** Berlin. (ወደ በርሊን እበራለሁ።) |
| **seit** | ከ...ጀምሮ | Ich lerne **seit** einem Jahr. (ከአንድ ዓመት ጀምሮ እማራለሁ።) |
| **aus** | ከ (ውስጥ) | Ich komme **aus** Äthiopien. (ከኢትዮጵያ ነኝ።) |

## ሁልጊዜ Akkusativ የሚወስዱ

| መስተዋድድ | ትርጉም | ምሳሌ |
|---------|--------|------|
| **für** | ለ | Das ist **für** dich. (ለአንተ ነው።) |
| **ohne** | ያለ | Ich trinke Kaffee **ohne** Zucker. (ቡና ያለ ስኳር።) |
| **gegen** | ላይ/ተቃራኒ | Er fährt **gegen** die Wand. |
| **durch** | በ...ውስጥ | Wir gehen **durch** den Park. |
| **um** | ዙሪያ | **Um** 8 Uhr. (ሰዓት 8 ላይ።) |

## ተለዋዋጭ መስተዋድዶች (Wechselpräpositionen)

**in, auf, an, neben, zwischen, vor, hinter, über, unter** — እነዚህ ሁለቱንም ኬዝ ይወስዳሉ!

- **Wohin?** (ወዴት?) → Akkusativ (እንቅስቃሴ)
  - Ich gehe **in die** Schule. (ወደ ት/ቤት እሄዳለሁ።)
- **Wo?** (የት?) → Dativ (ቦታ)
  - Ich bin **in der** Schule. (ት/ቤት ውስጥ ነኝ።)

## ወሳኝ ማጠቃለያ

| ኬዝ | መስተዋድዶች |
|-----|----------|
| ሁልጊዜ Dativ | mit, zu, von, bei, nach, seit, aus |
| ሁልጊዜ Akkusativ | für, ohne, gegen, durch, um |
| ተለዋዋጭ | in, auf, an, neben, zwischen, vor, hinter, über, unter |`,
  },
  {
    title: 'ተያያዥ ዓረፍተ-ነገሮች',
    subtitle: 'Nebensätze — weil, dass, wenn, ob, obwohl',
    level: 'B1',
    category: 'ሰዋስው (Grammar)',
    content: `ተያያዥ ቃላት (Konjunktionen) ሁለት ዓረፍተ-ነገሮችን ያገናኛሉ። ዋናው ልዩነት፦ ጥገኛ ዓረፍተ-ነገር ውስጥ ግሡ ወደ **መጨረሻ** ይሄዳል!

## ዋና ተያያዥ ቃላት

### weil (ምክንያቱም)
- Ich lerne Deutsch, **weil** ich in der Schweiz **arbeite**.
  (ስዊዘርላንድ ውስጥ ስለምሠራ ጀርመንኛ እማራለሁ።)

### dass (እንደ/ያንን)
- Ich weiß, **dass** du gut Deutsch **sprichst**.
  (ጥሩ ጀርመንኛ እንደምትናገር አውቃለሁ።)

### wenn (ከ...ሆነ / ሲ)
- **Wenn** es **regnet**, bleibe ich zu Hause.
  (ዝናብ ከዘነበ ቤት ውስጥ እቀራለሁ።)

### ob (እንደሆነ)
- Ich frage, **ob** du morgen **kommst**.
  (ነገ ትመጣ እንደሆነ እጠይቃለሁ።)

### obwohl (ቢሆንም)
- Er arbeitet, **obwohl** er krank **ist**.
  (ቢታመምም ይሠራል።)

### damit (እንዲ)
- Ich lerne, **damit** ich die Prüfung **bestehe**.
  (ፈተናውን ለማለፍ እማራለሁ።)

## ደንቡ — ግሡ መጨረሻ ላይ!

ዋና ዓረፍተ-ነገር (Hauptsatz)፦ ግሡ **ሁለተኛ** ቦታ
- Ich **lerne** Deutsch.

ጥገኛ ዓረፍተ-ነገር (Nebensatz)፦ ግሡ **መጨረሻ** ቦታ
- ..., weil ich Deutsch **lerne**.

## ከሞዳል ግሥ ጋር

ሁለት ግሦች ካሉ ሁለቱም መጨረሻ ላይ ይሆናሉ — ሞዳሉ ከ Infinitiv በኋላ፦
- ..., weil ich Deutsch lernen **muss**.

## ከተነጣይ ግሥ ጋር

ተነጣይ ግሡ ተመልሶ ይገጣጠማል፦
- Ich stehe um 7 auf. → ..., weil ich um 7 **aufstehe**.

## ወሳኝ ማስታወሻ

ጥገኛ ዓረፍተ-ነገር መጀመሪያ ላይ ከመጣ፣ ዋናው ዓረፍተ-ነገር ግሥ ወዲያውኑ ይመጣል (ግሥ-ግሥ ቅርፅ)፦
- **Wenn** es regnet, **bleibe** ich zu Hause.`,
  },
  {
    title: 'ፕሬተሪቱም — ቀላል ያለፈ ጊዜ',
    subtitle: 'Präteritum — war, hatte, konnte',
    level: 'B1',
    category: 'ሰዋስው (Grammar)',
    content: `ፕሬተሪቱም በጽሑፍ ጀርመንኛ (ጋዜጦች፣ ታሪኮች) እና ከ sein/haben ጋር በንግግርም ይጠቅማል።

## sein (መሆን) — war

| ተውላጠ-ስም | Präteritum | አማርኛ |
|-----------|------------|--------|
| ich | **war** | ነበርኩ |
| du | **warst** | ነበርክ |
| er/sie/es | **war** | ነበር(ች) |
| wir | **waren** | ነበርን |
| ihr | **wart** | ነበራችሁ |
| sie/Sie | **waren** | ነበሩ |

ምሳሌ፦ Ich **war** gestern in der Schule. (ትናንት ት/ቤት ነበርኩ።)

## haben (ማግኘት) — hatte

| ተውላጠ-ስም | Präteritum | አማርኛ |
|-----------|------------|--------|
| ich | **hatte** | ነበረኝ |
| du | **hattest** | ነበረህ |
| er/sie/es | **hatte** | ነበረው(ት) |
| wir | **hatten** | ነበረን |
| ihr | **hattet** | ነበራችሁ |
| sie/Sie | **hatten** | ነበራቸው |

ምሳሌ፦ Ich **hatte** keine Zeit. (ጊዜ አልነበረኝም።)

## ሞዳል ግሦች

| Infinitiv | Präteritum (ich) | ምሳሌ |
|-----------|-----------------|------|
| können | **konnte** | Ich konnte nicht kommen. (መምጣት አልቻልኩም።) |
| müssen | **musste** | Ich musste arbeiten. (መሥራት ነበረብኝ።) |
| dürfen | **durfte** | Ich durfte nicht rauchen. (ማጨስ አልፈቀዱልኝም።) |
| wollen | **wollte** | Ich wollte schlafen. (መተኛት ፈልጌ ነበር።) |
| sollen | **sollte** | Ich sollte lernen. (መማር ነበረብኝ።) |

## Perfekt vs. Präteritum

- **Perfekt** = በንግግር (ከ sein/haben ውጪ)
  - Ich **habe** gelernt. / Ich **bin** gekommen.
- **Präteritum** = ከ sein/haben/ሞዳል ግሦች ጋር + በጽሑፍ
  - Ich **war** müde. / Ich **konnte** nicht.

ማስታወሻ፦ "Ich habe gekonnt" ከማለት "Ich **konnte**" ይቀላል! ስለዚህ ሞዳል ግሦችን ሁልጊዜ በ Präteritum ይጠቀሙ።`,
  },
  {
    title: 'ተመላሽ ግሦች',
    subtitle: 'Reflexive Verben — sich waschen, sich freuen',
    level: 'B1',
    category: 'ሰዋስው (Grammar)',
    content: `ተመላሽ ግሦች ድርጊቱ ራሱ ላይ የሚመለስ ነው — "ራስን ማጠብ"፣ "ራስን ማስደሰት"። በጀርመንኛ **sich** ከሚለው ተመላሽ ተውላጠ-ስም ጋር ይሠራሉ።

## ተመላሽ ተውላጠ-ስሞች

| ተውላጠ-ስም | Akkusativ | Dativ |
|-----------|-----------|-------|
| ich | **mich** | **mir** |
| du | **dich** | **dir** |
| er/sie/es | **sich** | **sich** |
| wir | **uns** | **uns** |
| ihr | **euch** | **euch** |
| sie/Sie | **sich** | **sich** |

## ተለምደው ተመላሽ ግሦች (Akkusativ)

| ግሥ | ትርጉም | ምሳሌ |
|-----|--------|------|
| sich waschen | ራስን ማጠብ | Ich wasche **mich**. |
| sich anziehen | ልብስ መልበስ | Er zieht **sich** an. |
| sich freuen | መደሰት | Wir freuen **uns**. |
| sich setzen | መቀመጥ | Setz **dich**! (ቁጭ በል!) |
| sich fühlen | መሰማት | Ich fühle **mich** gut. |
| sich entschuldigen | ይቅርታ መጠየቅ | Ich entschuldige **mich**. |
| sich beschweren | ማማረር | Er beschwert **sich**. |

## ተመላሽ ግሦች (Dativ) — ከሌላ Akkusativ ጋር

ሌላ ቀጥተኛ ተሳቢ ሲኖር ተመላሽ ተውላጠ-ስሙ Dativ ይሆናል፦

- Ich wasche **mich**. (ራሴን አጥባለሁ — Akk.)
- Ich wasche **mir** die Hände. (እጆቼን አጥባለሁ — Dat.)
- Ich putze **mir** die Zähne. (ጥርሶቼን አጠራለሁ — Dat.)

## sich freuen + auf / über

- sich freuen **über** + Akk. = ስለአንድ ነገር መደሰት (አሁን)
  - Ich freue mich **über** das Geschenk. (ስለ ስጦታው ደስ ብሎኛል።)
- sich freuen **auf** + Akk. = ለአንድ ነገር መጠበቅ/መናፈቅ (ወደፊት)
  - Ich freue mich **auf** den Urlaub. (ለዕረፍቱ እናፍቃለሁ።)

## ዓረፍተ-ነገር ውስጥ ቅደም-ተከተል

- ዋና ዓ/ነ፦ Ich wasche **mich** jeden Morgen.
- ጥያቄ፦ Freust **du dich**?
- Nebensatz፦ ..., weil ich **mich** freue.`,
  },
  {
    title: 'ቅጽል ማጎናጸፊያ',
    subtitle: 'Adjektivdeklination — gut, guter, gute, gutes',
    level: 'B1',
    category: 'ሰዋስው (Grammar)',
    content: `በጀርመንኛ ቅጽል ከስም በፊት ሲመጣ መጨረሻው ይለወጣል — ይህ ለኢትዮጵያውያን ተማሪዎች ከባዱ ክፍል ነው! ግን ደንቦቹ ግልጽ ናቸው።

## ሦስት ሁኔታዎች

### 1. ከ der/die/das (bestimmter Artikel) ጋር

| | ወንድ | ሴት | ገለልተኛ | ብዙ |
|---|------|------|---------|------|
| Nom. | der gut**e** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Kinder |
| Akk. | den gut**en** Mann | die gut**e** Frau | das gut**e** Kind | die gut**en** Kinder |
| Dat. | dem gut**en** Mann | der gut**en** Frau | dem gut**en** Kind | den gut**en** Kindern |

ደንቡ፦ Nominativ ውስጥ **-e**፣ ሌሎች ሁሉ **-en**

### 2. ከ ein/kein (unbestimmter Artikel) ጋር

| | ወንድ | ሴት | ገለልተኛ |
|---|------|------|---------|
| Nom. | ein gut**er** Mann | eine gut**e** Frau | ein gut**es** Kind |
| Akk. | einen gut**en** Mann | eine gut**e** Frau | ein gut**es** Kind |

ደንቡ፦ ein ምንም ምልክት ከሌለው ቅጽሉ ጾታውን ያመለክታል

### 3. ያለ አርቲክል

| | ወንድ | ሴት | ገለልተኛ | ብዙ |
|---|------|------|---------|------|
| Nom. | gut**er** Wein | gut**e** Milch | gut**es** Bier | gut**e** Leute |

## ቀላል ምክር

ቅጽሉ ወይም አርቲክሉ — **አንዱ** ጾታውን ማሳየት አለበት!
- **der** gut**e** Mann → "der" ጾታ ያሳያል → ቅጽል -e ብቻ
- **ein** gut**er** Mann → "ein" ጾታ አያሳይም → ቅጽል -er ያሳያል

## ምሳሌዎች

- Ich trinke **kalten** Kaffee. (ቀዝቃዛ ቡና እጠጣለሁ።)
- Das ist ein **schönes** Haus. (ያ ቆንጆ ቤት ነው።)
- Die **kleine** Katze schläft. (ትንሿ ድመት ተኝታለች።)
- Er hat **lange** Haare. (ረዥም ፀጉር አለው።)`,
  },
  {
    title: 'ጀኒቲቭ — የባለቤት ኬዝ',
    subtitle: 'Genitiv — des, der + wegen, trotz, während',
    level: 'B2',
    category: 'ሰዋስው (Grammar)',
    content: `ጀኒቲቭ "የ..." ለማለት የሚያገለግል ኬዝ ነው — ልክ እንደ አማርኛ "የአባቴ ቤት"። በ B2 ደረጃ ይህን ማወቅ ግዴታ ነው!

## የአርቲክል ለውጦች

| | ወንድ | ሴት | ገለልተኛ | ብዙ |
|---|------|------|---------|------|
| Genitiv | **des** Mannes | **der** Frau | **des** Kindes | **der** Kinder |

ወንድ/ገለልተኛ ስሞች **-s** ወይም **-es** ይጨምራሉ፦
- **des Mannes** (የሰውዬው)
- **des Buches** (የመጽሐፉ)
- **des Kindes** (የልጁ)

## ምሳሌዎች

- Das Auto **des Lehrers** ist neu.
  (የመምህሩ መኪና አዲስ ነው።)
- Die Farbe **der Blume** ist rot.
  (የአበባዋ ቀለም ቀይ ነው።)
- Das Spielzeug **des Kindes** ist kaputt.
  (የልጁ መጫወቻ ተሰብሯል።)

## ከ Genitiv ጋር የሚሠሩ መስተዋድዶች

| መስተዋድድ | ትርጉም | ምሳሌ |
|---------|--------|------|
| **wegen** | ምክንያት | Wegen **des Regens** bleibe ich. (ምክንያቱም ዝናብ ስለሆነ።) |
| **trotz** | ቢሆንም | Trotz **des Problems** arbeite ich. (ችግሩ ቢኖርም እሠራለሁ።) |
| **während** | በ...ወቅት | Während **der Pause** esse ich. (በዕረፍት ጊዜ እበላለሁ።) |
| **statt** | ፈንታ | Statt **des Autos** nehme ich den Bus. (በመኪና ፈንታ አውቶቡስ።) |
| **innerhalb** | ውስጥ | Innerhalb **eines Jahres**. (በአንድ ዓመት ውስጥ።) |
| **außerhalb** | ውጪ | Außerhalb **der Stadt**. (ከከተማ ውጪ።) |

## "von" + Dativ = ምትክ

በንግግር ብዙ ጀርመኖች Genitiv ፈንታ **von + Dativ** ይጠቀማሉ፦
- Das Auto **des Lehrers** = Das Auto **von dem** Lehrer
- ሁለቱም ትክክል ናቸው — ግን ጽሑፍ ላይ Genitiv ይመረጣል

## ባለቤት ስም (Eigenname) + -s

ባለቤት ለማሳየት ስም + **s** (ያለ አፖስትሮፍ)፦
- **Marias** Buch (የማሪያ መጽሐፍ)
- **Peters** Auto (የጴጥሮስ መኪና)
- **Äthiopiens** Hauptstadt (የኢትዮጵያ ዋና ከተማ)`,
  },
  {
    title: 'ንጽጽር እና ከፍተኛ ደረጃ',
    subtitle: 'Komparativ und Superlativ — größer, am größten',
    level: 'B2',
    category: 'ሰዋስው (Grammar)',
    content: `ቅጽሎችን ማነጻጸር — "ትልቅ → ትልቁ → በጣም ትልቁ"። በጀርመንኛ ልክ እንደ እንግሊዝኛ -er / -est ይጨምራሉ!

## መደበኛ ቅጽሎች

| Positiv | Komparativ | Superlativ |
|---------|-----------|------------|
| schnell (ፈጣን) | schnell**er** | am schnell**sten** |
| klein (ትንሽ) | klein**er** | am klein**sten** |
| billig (ርካሽ) | billig**er** | am billig**sten** |
| langsam (ቀስ ያለ) | langsam**er** | am langsam**sten** |

## ከ Umlaut ጋር (a→ä, o→ö, u→ü)

| Positiv | Komparativ | Superlativ |
|---------|-----------|------------|
| groß (ትልቅ) | gr**öß**er | am gr**öß**ten |
| alt (ዐዋቂ) | **ä**lter | am **ä**ltesten |
| jung (ወጣት) | j**ü**nger | am j**ü**ngsten |
| lang (ረዥም) | l**ä**nger | am l**ä**ngsten |
| warm (ሞቅ ያለ) | w**ä**rmer | am w**ä**rmsten |
| kalt (ቀዝቃዛ) | k**ä**lter | am k**ä**ltesten |

## ልዩ (ያልተለመዱ) ቅጽሎች

| Positiv | Komparativ | Superlativ |
|---------|-----------|------------|
| gut (ጥሩ) | **besser** | am **besten** |
| viel (ብዙ) | **mehr** | am **meisten** |
| gern (በደስታ) | **lieber** | am **liebsten** |
| hoch (ከፍ ያለ) | **höher** | am **höchsten** |
| nah (ቅርብ) | **näher** | am **nächsten** |

## ዓረፍተ-ነገር ውስጥ

### ንጽጽር — als
- Berlin ist **größer als** Frankfurt.
  (በርሊን ከፍራንክፈርት ትልቅ ነው።)

### እኩልነት — so...wie
- München ist **so groß wie** Hamburg.
  (ሙኒክ እንደ ሃምቡርግ ትልቅ ነው።)

### ከፍተኛ ደረጃ — ከ der/die/das ጋር
- Berlin ist **die größte** Stadt.
  (በርሊን ትልቁ ከተማ ነው።)
- Der Mount Everest ist **am höchsten**.
  (ኤቨረስት ከሁሉ ከፍ ያለ ነው።)

## je...desto — ባለ...ይሆናል

- **Je** mehr ich lerne, **desto** besser spreche ich.
  (ብበልጥ ብማር ይበልጥ ጥሩ እናገራለሁ።)`,
  },
  {
    title: 'ኮንዩንክቲቭ II — ምኞት እና ትሁት ጥያቄ',
    subtitle: 'Konjunktiv II — würde, hätte, wäre',
    level: 'B2',
    category: 'ሰዋስው (Grammar)',
    content: `ኮንዩንክቲቭ II ለምኞት ("ቢኖረኝ ጥሩ ነበር")፣ ለትሁት ጥያቄ ("ቢረዱኝ?") እና ለማይሆኑ ሁኔታዎች ይጠቅማል።

## würde + Infinitiv

ይህ ቅጽ ለአብዛኞቹ ግሦች ይጠቅማል፦

| ተውላጠ-ስም | würde | ምሳሌ |
|-----------|-------|------|
| ich | würde | Ich **würde** gern kommen. |
| du | würdest | **Würdest** du mir helfen? |
| er/sie/es | würde | Er **würde** es machen. |
| wir | würden | Wir **würden** mitkommen. |
| ihr | würdet | |
| sie/Sie | würden | **Würden** Sie bitte warten? |

## hätte (ቢኖረኝ) / wäre (ብሆን)

ከ haben/sein ጋር **würde** አንጠቀምም — ልዩ ቅጽ አላቸው፦

### hätte
- Ich **hätte** gern ein Glas Wasser. (አንድ ብርጭቆ ውሃ ቢሰጡኝ።)
- **Hättest** du Zeit? (ጊዜ ቢኖርህ?)
- Wenn ich Geld **hätte**, würde ich reisen. (ገንዘብ ቢኖረኝ እጓዝ ነበር።)

### wäre
- Ich **wäre** gern in Deutschland. (ጀርመን ብሆን ደስ ይለኝ ነበር።)
- Das **wäre** schön! (ጥሩ ይሆን ነበር!)
- Wenn ich du **wäre**, würde ich lernen. (እኔ አንተ ብሆን እማር ነበር።)

## ትሁት ጥያቄዎች (ለ FIDE ፈተና!)

ከ "kannst du...?" ይልቅ ትሁት ለመሆን፦
- **Könnten** Sie mir bitte helfen? (ቢረዱኝ ይቻላል?)
- **Würden** Sie das bitte wiederholen? (ቢደግሙልኝ?)
- **Hätten** Sie einen Moment Zeit? (ጊዜ ቢኖርዎ?)
- **Dürfte** ich Sie etwas fragen? (ልጠይቅዎ ይቻላል?)

## Wenn-ዓረፍተ-ነገር (ማይሆን ሁኔታ)

- **Wenn** ich reich **wäre**, **würde** ich eine große Wohnung **kaufen**.
  (ሀብታም ብሆን ትልቅ ቤት እገዛ ነበር።)
- **Wenn** ich Zeit **hätte**, **würde** ich mehr **lernen**.
  (ጊዜ ቢኖረኝ ተጨማሪ እማር ነበር።)

## ማስታወሻ

ለ FIDE ፈተና ትሁት ጥያቄ በጣም ይጠቅማል — ኮንዩንክቲቭ II ይጠቀሙ!`,
  },
  {
    title: 'ተገብሮ ድምጽ',
    subtitle: 'Passiv — werden + Partizip II',
    level: 'B2',
    category: 'ሰዋስው (Grammar)',
    content: `ተገብሮ ድምጽ (Passiv) ድርጊቱ ማን እንደፈጸመው ሳይሆን **ምን ተደረገ** ላይ ያተኩራል። ለጽሑፍ ጀርመንኛ እና ለ B2 ፈተና አስፈላጊ ነው!

## Vorgangspassiv — werden + Partizip II

### Präsens (አሁን)
- Aktiv: Man **baut** ein Haus. (ቤት ይሠራሉ።)
- Passiv: Ein Haus **wird gebaut**. (ቤት ይሠራል / እየተሠራ ነው።)

### Präteritum (ያለፈ)
- Aktiv: Man **baute** das Haus. (ቤቱን ሠሩ።)
- Passiv: Das Haus **wurde gebaut**. (ቤቱ ተሠራ።)

### Perfekt (ያለፈ — ንግግር)
- Das Haus **ist gebaut worden**. (ቤቱ ተሠርቷል።)

## ምሳሌዎች

| Aktiv | Passiv | አማርኛ |
|-------|--------|--------|
| Man repariert das Auto. | Das Auto **wird repariert**. | መኪናው ይስተካከላል። |
| Die Polizei sucht den Mann. | Der Mann **wird gesucht**. | ሰውዬው ይፈለጋል። |
| Man hat den Brief geschickt. | Der Brief **ist geschickt worden**. | ደብዳቤው ተልኳል። |

## "von" — ድርጊቱን ማን ፈጸመ?

- Das Buch **wird von dem Lehrer** gelesen. (መጽሐፉ በመምህሩ ይነበባል።)
- Die Stadt **wurde von den Römern** gebaut. (ከተማው በሮማውያን ተሠራ።)

## ሁለት ዓይነት Passiv

### Vorgangspassiv (werden) — ሂደት
- Die Tür **wird** geöffnet. (በሩ ይከፈታል — አሁን እየተከፈተ)

### Zustandspassiv (sein) — ሁኔታ/ውጤት
- Die Tür **ist** geöffnet. (በሩ ክፍት ነው — ድርጊቱ ተጠናቅቋል)

## ከሞዳል ግሥ ጋር

- Das Haus **muss** renoviert **werden**. (ቤቱ መታደስ አለበት።)
- Der Brief **kann** morgen geschickt **werden**. (ደብዳቤው ነገ ሊላክ ይችላል።)

## መቼ Passiv ይጠቅማል?

1. ማን እንዳደረገ ሳይታወቅ — Das Fenster wurde gebrochen.
2. ማን እንዳደረገ አስፈላጊ ሳይሆን — Hier wird Deutsch gesprochen.
3. ደንቦች/ህጎች ላይ — Das Rauchen wird verboten.`,
  },
  {
    title: 'ዘመድ ዓረፍተ-ነገሮች',
    subtitle: 'Relativsätze — der, die, das ለማገናኘት',
    level: 'B2',
    category: 'ሰዋስው (Grammar)',
    content: `ዘመድ ዓረፍተ-ነገር (Relativsatz) ስምን ተጨማሪ መረጃ ይሰጣል — "ትናንት ያየሁት **ሰው**"፣ "የገዛሁት **መጽሐፍ**"።

## ዘመድ ተውላጠ-ስሞች

| | ወንድ | ሴት | ገለልተኛ | ብዙ |
|---|------|------|---------|------|
| Nominativ | **der** | **die** | **das** | **die** |
| Akkusativ | **den** | **die** | **das** | **die** |
| Dativ | **dem** | **der** | **dem** | **denen** |
| Genitiv | **dessen** | **deren** | **dessen** | **deren** |

## ዋና ደንቦች

1. ዘመድ ተ/ስ ጾታ/ቁጥር → ከሚመለከተው ስም ይወስዳል
2. ኬዝ → ከዘመድ ዓ/ነ ውስጣዊ ሚና ይወሰናል
3. ግሡ → መጨረሻ ላይ ይቀመጣል (ልክ እንደ Nebensatz)

## ምሳሌዎች

### Nominativ (ባለቤት)
- Der Mann, **der** dort steht, ist mein Lehrer.
  (እዚያ የቆመው ሰው መምህሬ ነው።)
- Die Frau, **die** Deutsch spricht, kommt aus Äthiopien.
  (ጀርመንኛ የምትናገረው ሴት ከኢትዮጵያ ናት።)

### Akkusativ (ተሳቢ)
- Das Buch, **das** ich lese, ist interessant.
  (የማነበው መጽሐፍ አስደሳች ነው።)
- Den Film, **den** wir gesehen haben, war gut.
  (ያየነው ፊልም ጥሩ ነበር።)

### Dativ
- Der Freund, **dem** ich geholfen habe, dankt mir.
  (የረዳሁት ጓደኛ አመሰገነኝ።)

### Genitiv
- Die Frau, **deren** Mann Arzt ist, wohnt hier.
  (ባለቤቷ ሐኪም የሆነው ሴት እዚህ ትኖራለች።)

## wo, was, worüber...

### wo — ቦታ ላይ
- Die Stadt, **wo** ich wohne, ist klein.
  (የምኖርበት ከተማ ትንሽ ናት።)

### was — ከ etwas, alles, nichts, das ጋር
- Alles, **was** er sagt, ist wahr.
  (የሚለው ሁሉ እውነት ነው።)

### wo(r)+ Präposition
- Das Thema, **worüber** wir sprechen, ist wichtig.
  (የምንነጋገርበት ርዕስ አስፈላጊ ነው።)

## ሰነድ/ህጋዊ ጽሑፍ ውስጥ

በ FIDE ፈተና ሰነዶች Relativsatz በብዛት ይገኛል — ለምሳሌ፦
- Die Person, **die** den Antrag gestellt hat, muss warten.
  (ማመልከቻ ያቀረበው ሰው መጠበቅ አለበት።)`,
  },
]