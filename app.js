/**
 * SAVOR EUROPE (ევროპული კულინარიული საგანძური)
 * Interactive Application Logic & Multilingual Experience
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. DATA: REGIONAL DISHES & MASTER RECIPES
  // =========================================================================
  const DISHES_DATA = [
    {
      id: 'adjaruli_khachapuri',
      category: 'eastern',
      country: 'Georgia',
      countryKa: 'საქართველო',
      flag: '🇬🇪',
      heritageTag: 'Intangible Heritage',
      heritageTagKa: 'არამატერიალური მემკვიდრეობა',
      image: 'assets/images/georgian_supra.jpg',
      cookingTime: '35 min',
      titleEn: 'Adjaruli Khachapuri',
      titleKa: 'აჭარული ხაჭაპური',
      regionEn: 'Black Sea Coast, Georgia',
      regionKa: 'აჭარა, შავი ზღვის სანაპირო',
      descEn: 'The iconic boat-shaped artisanal bread baked with molten Imeretian & Sulguni cheese, capped with a fresh farm egg yolk and rich churned butter.',
      descKa: 'ტრადიციული ნავის ფორმის ცომი, გამომცხვარი სურნელოვანი იმერული და სულგუნის ყველით, ახალი კვერცხის გულითა და ნაღების კარაქით.',
      flavorTags: ['Melted Cheese', 'Crisp Crust', 'Buttery', 'Ancient Heritage'],
      flavorTagsKa: ['მდნარი ყველი', 'ხრაშუნა ქერქი', 'კარაქიანი', 'უძველესი ტრადიცია'],
      storyEn: 'Crafted by the ancient Laz seafaring people of Georgia’s Black Sea coast, the boat shape pays homage to maritime voyages, while the golden yolk symbolizes the setting sun over the water. It represents the quintessential warmth of Georgian hospitality.',
      storyKa: 'აჭარული ხაჭაპურის შექმნა შავიზღვისპირა ლაზ მეზღვაურებს უკავშირდება. ნავის ფორმა ზღვას განასახიერებს, ხოლო კვერცხის გული — მზის ჩასვლას ტალღებში. ის ქართული სტუმართმოყვარეობისა და სუფრის გვირგვინია.',
      etiquetteEn: 'Break off the crispy dough corners first and vigorously stir the hot yolk, butter, and melted cheese together into a velvety fondue before dipping.',
      etiquetteKa: 'მოატეხეთ ხრაშუნა კიდეები და ენერგიულად აურიეთ ცხელი კვერცხის გული, კარაქი და მდნარი ყველი ერთიან ხავერდოვან მასად, შემდეგ კი ჩააწეთ ცომი.',
      ingredientsEn: [
        '500g High-protein bread flour',
        '300ml Lukewarm water & milk blend',
        '7g Active dry yeast',
        '400g Fresh Imeretian cheese (or Mozzarella blend)',
        '300g Aged Sulguni cheese (smoked/unsmoked)',
        '4 Fresh pasture-raised egg yolks',
        '50g Pure churned farm butter',
        'Pinch of sea salt & pinch of sugar'
      ],
      ingredientsKa: [
        '500გ უმაღლესი ხარისხის ფქვილი',
        '300მლ თბილი წყლისა და რძის ნაზავი',
        '7გ მშრალი საფუარი',
        '400გ ახალი იმერული ყველი',
        '300გ ჭყინტი ან შებოლილი სულგუნი',
        '4 სოფლის კვერცხის გული',
        '50გ ნამდვილი ნაღების კარაქი',
        'მწიკვი მარილი და მწიკვი შაქარი'
      ],
      stepsEn: [
        { title: 'Proof the Dough', text: 'Knead flour, yeast, water-milk blend, and salt until elastic and satin-smooth. Let rise for 90 minutes until doubled.' },
        { title: 'Form the Boat', text: 'Roll dough into an oval. Roll the edges inward tightly from both sides and pinch the ends firmly to shape the traditional boat.' },
        { title: 'Fill with Cheese', text: 'Grate and blend the Imeretian and Sulguni cheeses. Heap generously inside the dough vessel.' },
        { title: 'Bake at High Heat', text: 'Bake in a preheated oven at 240°C (465°F) for 12–15 minutes until edges are blistered and deep golden.' },
        { title: 'The Sun & Butter Crown', text: 'Immediately slide an egg yolk into the center and tuck thick pats of cold butter alongside. Serve steaming hot.' }
      ],
      stepsKa: [
        { title: 'ცომის მოზელა და აფუება', text: 'მოზილეთ რბილი, ელასტიკური ცომი. დააფარეთ და დააყოვნეთ თბილ ადგილას 90 წუთით, სანამ მოცულობა არ გაორმაგდება.' },
        { title: 'ნავის ფორმირება', text: 'გააბრტყელეთ ცომი ოვალურად, ორივე მხრიდან გადაახვიეთ კიდეები ცენტრისკენ და ბოლოები მჭიდროდ შეაერთეთ.' },
        { title: 'ყველის ჩადება', text: 'გახეხეთ და შეურიეთ იმერული ყველი და სულგუნი. გულუხვად ამოავსეთ ცომის ნავი.' },
        { title: 'ცხობა მაღალ ტემპერატურაზე', text: 'გამოაცხვეთ 240°C-ზე გახურებულ ღუმელში 12–15 წუთის განმავლობაში, სანამ ცომი ოქროსფრად არ დაიბრაწება.' },
        { title: 'კვერცხისა და კარაქის დამატება', text: 'გამოღებისთანავე ჩაასხით ცენტრში კვერცხის გული და ჩაალაგეთ ნაღების კარაქის ნაჭრები. მიირთვით დაუყოვნებლივ.' }
      ],
      timerMinutes: 15,
      wineTitle: 'Kvevri Amber Rkatsiteli or Tsolikouri',
      wineTitleKa: 'ქვევრის ქარვისფერი რქაწითელი ან ციცქა-ცოლიკოური',
      wineNotesEn: 'The natural tannins and dried apricot-quince complexity of traditional 6-month skin-contact Qvevri wine perfectly cut through the opulent molten cheese.',
      wineNotesKa: 'ქვევრში 6 თვე დავარგებული ქარვისფერი ღვინის ბუნებრივი ტანინები და ჩირის არომატები საოცრად აბალანსებს გამდნარი ყველის სიმდიდრეს.'
    },
    {
      id: 'tagliatelle_tartufo',
      category: 'mediterranean',
      country: 'Italy',
      countryKa: 'იტალია',
      flag: '🇮🇹',
      heritageTag: 'Tuscan Heritage',
      heritageTagKa: 'ტოსკანური მემკვიდრეობა',
      image: 'assets/images/mediterranean.jpg',
      cookingTime: '20 min',
      titleEn: 'Tagliatelle al Tartufo & Burrata',
      titleKa: 'ტალიატელე ტრიუფელითა და ბურატათი',
      regionEn: 'Tuscany & Umbria, Italy',
      regionKa: 'ტოსკანა და უმბრია, იტალია',
      descEn: 'Silken ribbons of hand-kneaded egg pasta bathed in cultured butter and golden Parmigiano Reggiano emulsion, crowned with shaved black Umbrian truffles.',
      descKa: 'ხელით გაბრტყელებული კვერცხის პასტის ლენტები, დამუშავებული ნაღების კარაქისა და პარმიჯანო რეჯანოს ემულსიაში, შავი უმბრიული ტრიუფელით.',
      flavorTags: ['Earthy Truffle', 'Handmade Pasta', 'Aged Parmigiano', 'Silky Emulsion'],
      flavorTagsKa: ['ტრიუფელის არომატი', 'ხელნაკეთი პასტა', 'დავარგებული პარმეზანი', 'ხავერდოვანი'],
      storyEn: 'In the ancient misty oak forests of central Italy, truffle hunting with trained Lagotto Romagnolo hounds is a protected generational tradition passed from father to son. Simplicity is sacred: fresh pasta and butter exist solely to exalt the wild aroma of the earth.',
      storyKa: 'იტალიის საუკუნოვან მუხნარებში ტრიუფელის ძებნა მამიდან შვილზე გადაცემული წმინდა ტრადიციაა. აქ მთავარი სიმარტივეა — ახალი პასტა და კარაქი მიწის ამ უძვირფასესი საჩუქრის გამოსაკვეთად მუშაობს.',
      etiquetteEn: 'Never contaminate true truffle pasta with heavy commercial cream or garlic. The truffle must be shaved raw over the steaming plate table-side.',
      etiquetteKa: 'ნამდვილ ტრიუფელის პასტას არასოდეს დაუმატოთ ხელოვნური ნაღები ან ნიორი. ტრიუფელი თხელ ფირფიტებად უშუალოდ სუფრასთან უნდა დაიხეხოს.',
      ingredientsEn: [
        '400g Fresh egg tagliatelle (00 flour & egg yolk ribbons)',
        '60g Fresh black summer or Norcia winter truffle',
        '80g High-fat cultured unsalted butter',
        '70g Aged Parmigiano Reggiano PDO (24 months)',
        'Ladle of starchy pasta boiling water',
        'Flaky sea salt & fresh cracked tellicherry pepper'
      ],
      ingredientsKa: [
        '400გ ახალი კვერცხის ტალიატელე',
        '60გ ახალი შავი ნორჩიული ან საზაფხულო ტრიუფელი',
        '80გ ნატურალური ფერმერული კარაქი',
        '70გ 24 თვიანი დავარგების პარმიჯანო რეჯანო',
        'პასტის სახამებლიანი ნახარში წყალი',
        'ზღვის მარილი და ახლად დაფქული შავი პილპილი'
      ],
      stepsEn: [
        { title: 'The Emulsion Base', text: 'Melt the cultured butter gently in a wide pan over low heat with a few microplaned shavings of truffle to infuse the fat.' },
        { title: 'Boil Al Dente', text: 'Plunge fresh tagliatelle into rolling salted water for barely 2 to 3 minutes.' },
        { title: 'Mantecatura', text: 'Transfer pasta directly into the warm butter with half a cup of starchy pasta water. Toss vigorously off heat while folding in grated Parmigiano until glossy.' },
        { title: 'Table-side Shaving', text: 'Plate immediately in warm shallow bowls. Use a brass truffle slicer to carpet the top with translucent ribbons of black truffle.' }
      ],
      stepsKa: [
        { title: 'ემულსიის მომზადება', text: 'ნელ ცეცხლზე გაალღვეთ ნაღების კარაქი და დაახეხეთ ტრიუფელის მცირე ნაწილი ცხიმის არომატიზებისთვის.' },
        { title: 'პასტის მოხარშვა', text: 'ჩაყარეთ ახალი ტალიატელე ადუღებულ მარილიან წყალში მხოლოდ 2-3 წუთით (Al Dente).' },
        { title: 'ემულსიის შექმნა (Mantecatura)', text: 'გადმოიტანეთ პასტა კარაქიან ტაფაში, დაამატეთ ნახარში წყალი და ცეცხლიდან გადმოდგმულზე ენერგიულად შეურიეთ პარმეზანი.' },
        { title: 'ტრიუფელის დახეხვა', text: 'გადმოიღეთ თბილ თეფშებზე და სუფრასთან სპეციალური საჭრელით გულუხვად დაახეხეთ შავი ტრიუფელი.' }
      ],
      timerMinutes: 10,
      wineTitle: 'Brunello di Montalcino or Nebbiolo d’Alba',
      wineTitleKa: 'ბრუნელო დი მონტალჩინო ან ნებიოლო',
      wineNotesEn: 'Earthy aged Sangiovese or Nebbiolo notes of dried rose petals, forest floor, and structured acidity mirror the subterranean truffle depth.',
      wineNotesKa: 'დავარგებული სანჯოვეზეს ტყის ნიადაგის, გამხმარი ვარდის და სუფთა მჟავიანობის ნოტები იდეალურად ეხამება ტრიუფელის ღრმა არომატს.'
    },
    {
      id: 'boeuf_bourguignon',
      category: 'french',
      country: 'France',
      countryKa: 'საფრანგეთი',
      flag: '🇫🇷',
      heritageTag: 'UNESCO Gastronomy',
      heritageTagKa: 'UNESCO გასტრონომია',
      image: 'assets/images/french_gastronomy.jpg',
      cookingTime: '3.5 hours',
      titleEn: 'Boeuf Bourguignon Traditionnel',
      titleKa: 'ტრადიციული ბეფ ბურგინიონი',
      regionEn: 'Burgundy, France',
      regionKa: 'ბურგუნდია, საფრანგეთი',
      descEn: 'Tender Charolais beef braised slowly for hours in full-bodied Pinot Noir wine, smoked lardons, sweet baby carrots, pearl onions, and wild chanterelles.',
      descKa: 'საათობით ნელ ცეცხლზე დაშუშული შაროლეს საქონლის ხორცი ბურგუნდიულ პინო ნუარში, შებოლილ ლარდონთან, მარგალიტისებრ ხახვთან და სოკოსთან.',
      flavorTags: ['Red Wine Glaze', 'Slow-Braised', 'Truffled Purée', 'French Terroir'],
      flavorTagsKa: ['წითელი ღვინის გლაზური', 'ნელ-ნელა დაშუშული', 'არომატული ბულიონი', 'ფრანგული კლასიკა'],
      storyEn: 'Originally a humble peasant dish designed to tenderize tougher cuts of beef over farm hearth embers, Boeuf Bourguignon was codified into French haute cuisine by Auguste Escoffier. It symbolizes the sacred bond between Burgundian viticulture and pastoral livestock.',
      storyKa: 'თავდაპირველად გლეხური კერძი, რომელიც ღუმელის ნაკვერჩხალზე ხანგრძლივად მზადდებოდა, ოგიუსტ ესკოფიემ ფრანგული მაღალი სამზარეულოს სიმბოლოდ აქცია. ის ბურგუნდიული მევენახეობისა და მიწის კავშირია.',
      etiquetteEn: 'Never cook this dish with a wine you would not proudly pour into a crystal glass at dinner. The sauce must reduce until it blankets the back of a silver spoon.',
      etiquetteKa: 'არასოდეს გამოიყენოთ ისეთი ღვინო, რომელსაც სუფრაზე სტუმარს არ დაალევინებდით. სოუსი უნდა იყოს სარკისებრი, სქელი და ხავერდოვანი.',
      ingredientsEn: [
        '1.2kg High-grade beef chuck or cheeks cut in chunks',
        '1 Bottle (750ml) French Burgundy Pinot Noir',
        '200g Thick-cut smoked pork lardons',
        '300g Cremini or wild chanterelle mushrooms',
        '18 Whole peeled pearl onions',
        '3 Whole carrots, sliced thick',
        '3 Cloves garlic & Bouquet Garni (thyme, rosemary, bay leaf)',
        '500ml Roasted veal bone stock'
      ],
      ingredientsKa: [
        '1.2კგ საქონლის რბილი ხორცი (ან ლოყები)',
        '1 ბოთლი (750მლ) ბურგუნდიული პინო ნუარი',
        '200გ შებოლილი ხორცის ლარდონი',
        '300გ ტყის ან ქამა სოკო',
        '18 ცალი პატარა მარგალიტა ხახვი',
        '3 ცალი სტაფილო, მსხვილად დაჭრილი',
        '3 კბილი ნიორი, ბუკეტ გარნი (ბეგქონდარა, დაფნა)',
        '500მლ ხბოს ძვლების მდიდარი ბულიონი'
      ],
      stepsEn: [
        { title: 'The Sear', text: 'Crisp the lardons in a heavy enamelled Dutch oven, remove, and deeply brown the dry-seasoned beef chunks in the rendered pork fat on all sides.' },
        { title: 'Deglaze & Simmer', text: 'Add garlic and carrots, sprinkle with flour, then pour in the entire bottle of Pinot Noir and veal stock with bouquet garni.' },
        { title: 'Slow Oven Confit', text: 'Cover tightly and bake in an oven at 150°C (300°F) for 3 hours until the meat yields to the gentlest touch of a fork.' },
        { title: 'The Garnish & Glaze', text: 'Sauté pearl onions and mushrooms separately in butter, fold them into the pot for the final 20 minutes, and serve with silky truffle pomme purée.' }
      ],
      stepsKa: [
        { title: 'ხორცის დაბრაწვა', text: 'სქელძირიან თუჯის ქვაბში დაბრაწეთ ლარდონი, ამოიღეთ და გამოყოფილ ცხიმში ყველა მხრიდან მაღალ ცეცხლზე შეწვით ხორცის ნაჭრები.' },
        { title: 'ღვინისა და ბულიონის დამატება', text: 'დაამატეთ ნიორი, სტაფილო, მსუბუქად მოაყარეთ ფქვილი, დაასხით მთლიანი ბოთლი პინო ნუარი და ბულიონი მწვანილის ბუკეტთან ერთად.' },
        { title: 'ხანგრძლივი ცხობა', text: 'დააფარეთ მჭიდროდ და შედგით 150°C ღუმელში 3 საათით, სანამ ხორცი ჩანგლის შეხებაზე არ დადნება.' },
        { title: 'სოკოსა და ხახვის დამატება', text: 'კარაქში ცალკე მოშუშეთ მარგალიტა ხახვი და სოკო, ჩაამატეთ ბოლო 20 წუთით და მიირთვით ხავერდოვან პიურესთან ერთად.' }
      ],
      timerMinutes: 180,
      wineTitle: 'Gevrey-Chambertin or Côte de Nuits Pinot Noir',
      wineTitleKa: 'ჟევრე-შამბერტენი ან კოტ დე ნუი',
      wineNotesEn: 'The silken yet firm structure of Premier Cru Pinot Noir harmonizes flawlessly with the rich, wine-infused braising liquor.',
      wineNotesKa: 'დახვეწილი პინო ნუარის მწიფე ალუბლისა და ხავერდოვანი ტანინების სტრუქტურა სრულყოფილად ერწყმის ღვინოში დაშუშულ ხორცს.'
    },
    {
      id: 'paella_valenciana',
      category: 'mediterranean',
      country: 'Spain',
      countryKa: 'ესპანეთი',
      flag: '🇪🇸',
      heritageTag: 'Iberian Masterpiece',
      heritageTagKa: 'იბერიული შედევრი',
      image: 'assets/images/spanish_paella.jpg',
      cookingTime: '50 min',
      titleEn: 'Paella Valenciana de Marisco',
      titleKa: 'ვალენსიური ზღვის პროდუქტების პაელია',
      regionEn: 'Valencia & Mediterranean Coast, Spain',
      regionKa: 'ვალენსია, ესპანეთის სანაპირო',
      descEn: 'Authentic short-grain Bomba rice slowly simmered in saffron-infused fumet, wild Mediterranean king prawns, mussels, calamari, and crisp golden socarrat.',
      descKa: 'ნამდვილი ესპანური ბომბას ბრინჯი ზაფრანიან ბულიონში, სამეფო კრევეტებით, მიდიებით, კალმარით და ქვაბის ძირზე დაბრაწული ხრაშუნა სოკარატით.',
      flavorTags: ['La Mancha Saffron', 'Bomba Rice', 'Wild Seafood', 'Crispy Socarrat'],
      flavorTagsKa: ['ზაფრანა', 'ბომბას ბრინჯი', 'ზღვის პროდუქტები', 'ხრაშუნა ძირი'],
      storyEn: 'Paella was born in the Albufera lagoons of Valencia, where farm laborers cooked rice over open orange-wood fires. The most prized element of true paella is "el socarrat" — the deeply toasted, caramelized, crispy crust formed on the bottom of the pan.',
      storyKa: 'პაელია ვალენსიის ლაგუნებში დაიბადა, სადაც გლეხები ბრინჯს ფორთოხლის ხის შეშაზე ამზადებდნენ. ნამდვილი პაელიის უმაღლესი ღირსება არის "სოკარატი" — ტაფის ძირზე კარამელიზებული ხრაშუნა ფენა.',
      etiquetteEn: 'Never stir the rice after adding the stock! Stirring releases excess starch and destroys the prized dry grain texture and crispy bottom socarrat.',
      etiquetteKa: 'ბულიონის დასხმის შემდეგ ბრინჯს აღარასოდეს მოურიოთ! მორევა გამოყოფს სახამებელს და დაანგრევს ხრაშუნა სოკარატის ფენას.',
      ingredientsEn: [
        '400g Spanish Arroz Bomba (PDO Valencia)',
        '1g Premium La Mancha Saffron threads',
        '8 Wild red Mediterranean king prawns',
        '300g Fresh live black mussels & clams',
        '200g Cleaned tender calamari rings',
        '1 Liter Rich homemade seafood fumet',
        'Grated ripe heirloom tomatoes & sweet smoked pimentón',
        'Extra virgin olive oil & fresh rosemary'
      ],
      ingredientsKa: [
        '400გ ვალენსიური ბომბას ბრინჯი',
        '1გ ესპანური ზაფრანის ძაფები',
        '8 სამეფო წითელი კრევეტი',
        '300გ ახალი მიდიები',
        '200გ გასუფთავებული კალმარი',
        '1 ლიტრი მდიდარი ზღვის პროდუქტების ბულიონი',
        'გახეხილი პომიდორი და შებოლილი პაპრიკა',
        'ზეითუნის ზეთი და ახალი როზმარინი'
      ],
      stepsEn: [
        { title: 'The Sofrito & Seafood Sear', text: 'In a wide steel paellera, quickly sear prawns in extra virgin olive oil, set aside, then slow-cook grated tomato, garlic, and smoked pimentón.' },
        { title: 'Toast the Bomba Rice', text: 'Scatter the Bomba rice across the pan and fry for two minutes until grains turn translucent and absorb the aromatic oils.' },
        { title: 'Infuse Saffron Fumet', text: 'Pour in hot saffron-infused fumet broth, bring to a rolling boil for 8 minutes, then reduce heat without stirring.' },
        { title: 'Form the Socarrat', text: 'Arrange prawns, mussels, and squid on top. In the final two minutes, raise heat until you hear a gentle crackle and smell toasted caramelization.' }
      ],
      stepsKa: [
        { title: 'ზღვის პროდუქტების შეწვა', text: 'პაელიის განიერ ტაფაზე ზეითუნის ზეთში სწრაფად დაბრაწეთ კრევეტები, გადადგით და იმავე ცხიმში მოშუშეთ ნიორი, პომიდორი და პაპრიკა.' },
        { title: 'ბრინჯის მოხალვა', text: 'ჩაყარეთ ბომბას ბრინჯი და მოხალეთ 2 წუთით, სანამ მარცვლები ზეთის არომატს არ შეიწოვს.' },
        { title: 'ზაფრანიანი ბულიონი', text: 'დაასხით ცხელი ზაფრანიანი ბულიონი, ადუღეთ 8 წუთი მაღალ ცეცხლზე, შემდეგ დაუწიეთ და აღარ მოურიოთ.' },
        { title: 'სოკარატის შექმნა', text: 'დაალაგეთ კრევეტები და მიდიები. ბოლო 2 წუთი ცეცხლს მოუმატეთ, სანამ ძირზე ხრაშუნა ქერქი (სოკარატი) არ წარმოიქმნება.' }
      ],
      timerMinutes: 25,
      wineTitle: 'Albariño Rías Baixas or Dry Penedès Cava',
      wineTitleKa: 'ალბარინიო ან მშრალი კავა',
      wineNotesEn: 'Saline ocean breeze minerality and crisp citrus acidity in Galician Albariño cuts through rich saffron and sweet roasted shellfish.',
      wineNotesKa: 'ალბარინიოს ზღვიური მინერალურობა და ციტრუსის სიხალისე საოცრად ხსნის ზაფრანისა და ზღვის პროდუქტების გემოს.'
    },
    {
      id: 'nordic_smorrebrod',
      category: 'nordic',
      country: 'Denmark & Norway',
      countryKa: 'დანია და ნორვეგია',
      flag: '🇩🇰',
      heritageTag: 'Nordic New Wave',
      heritageTagKa: 'სკანდინავიური ტალღა',
      image: 'assets/images/nordic_alpine.jpg',
      cookingTime: '20 min',
      titleEn: 'Nordic Smørrebrød & Cured Salmon',
      titleKa: 'სკანდინავიური სმორებროდი ორაგულით',
      regionEn: 'Copenhagen & Fjord Coastlines',
      regionKa: 'კოპენჰაგენი და ფიორდები',
      descEn: 'Dense, fermented whole-grain dark rye bread (Rugbrød) spread with cultured churned butter, beechwood-smoked wild salmon, pickled shallots, sea herbs, and fresh dill.',
      descKa: 'მკვრივი, ფერმენტირებული ჭვავის პური (რუგბროდი), წასმული ნატურალური კარაქით, შებოლილი ველური ორაგულით, დამარინადებული ხახვითა და კამით.',
      flavorTags: ['Fermented Rye', 'Beechwood Smoke', 'Dill & Sea Salt', 'Cultured Butter'],
      flavorTagsKa: ['ჭვავის პური', 'შებოლილი ორაგული', 'კამა', 'ფერმერული კარაქი'],
      storyEn: 'Beginning in the 19th century as a humble open sandwich packed into lunch tins by Danish factory workers, Smørrebrød has been elevated into edible architectural art, celebrating the purist ingredients of the North Sea and arctic earth.',
      storyKa: 'მე-19 საუკუნეში დანიელი მუშების უბრალო საუზმე დღეს გასტრონომიულ ხელოვნებად არის ქცეული, რომელიც ჩრდილოეთის ზღვისა და ბუნების სისუფთავეს ასახავს.',
      etiquetteEn: 'Never eat a true Smørrebrød with your bare hands. It is traditionally sliced and enjoyed deliberately with silver fork and knife.',
      etiquetteKa: 'ნამდვილ სმორებროდს ხელით არასოდეს მიირთმევენ — მას ტრადიციულად დანა-ჩანგლით, აუჩქარებლად გეახლებიან.',
      ingredientsEn: [
        '4 Thick slices artisanal Danish sourdough rye bread (Rugbrød)',
        '60g Cultured salted Danish butter',
        '250g Wild Beechwood-smoked Norwegian salmon',
        '2 Hard-boiled pasture eggs, sliced',
        'Pickled red shallots & fresh baby capers',
        'Generous sprigs of fresh green dill & lemon wheels',
        'Flaky Maldon sea salt & cracked black peppercorns'
      ],
      ingredientsKa: [
        '4 მსხვილი ნაჭერი დანიური ჭვავის პური (რუგბროდი)',
        '60გ ნატურალური ფერმერული კარაქი',
        '250გ შებოლილი ველური ნორვეგიული ორაგული',
        '2 მოხარშული სოფლის კვერცხი, დაჭრილი',
        'დამარინადებული წითელი ხახვი და კაპერსი',
        'ახალი კამა და ლიმონის ნაჭრები',
        'ზღვის მარილი და ახლად დაფქული პილპილი'
      ],
      stepsEn: [
        { title: 'The Butter Blanket', text: 'Spread a thick, generous layer of cultured butter across the rye bread to seal the crumb against moisture ("tandsmør").' },
        { title: 'Layering Heritage', text: 'Fold the beechwood-smoked salmon ribbons gracefully over the bread base with sliced eggs.' },
        { title: 'The Acidic Brightness', text: 'Garnish with quick-pickled shallot rings, baby capers, and a squeeze of fresh lemon juice.' },
        { title: 'The Forest Herb Crown', text: 'Top abundantly with fresh feathery dill fronds and cracked black pepper. Serve chilled on cold porcelain.' }
      ],
      stepsKa: [
        { title: 'კარაქის წასმა', text: 'ჭვავის პურს გულუხვად გადაუსვით ნატურალური კარაქი, რაც პურის სტრუქტურას იცავს და ხავერდოვან გემოს აძლევს.' },
        { title: 'ორაგულის დალაგება', text: 'მოხდენილად დაალაგეთ შებოლილი ორაგულის ფირფიტები და დაჭრილი კვერცხი.' },
        { title: 'მარინადის დამატება', text: 'გააფორმეთ დამარინადებული წითელი ხახვის რგოლებით, კაპერსითა და ლიმონის წვენით.' },
        { title: 'კამით დამშვენება', text: 'მოაყარეთ ბევრი ახალი კამა, ახლად დაფქული პილპილი და მიირთვით დანა-ჩანგლით.' }
      ],
      timerMinutes: 15,
      wineTitle: 'Aquavit Aalborg or Crisp Chablis Premier Cru',
      wineTitleKa: 'აკვავიტი ან შაბლი პრემიე კრიუ',
      wineNotesEn: 'Herbal caraway notes of Scandinavian Aquavit or the flinty mineral steeliness of French Chablis cuts through rich salmon oils.',
      wineNotesKa: 'აკვავიტის კვლიავის არომატი ან შაბლის მინერალური სიხალისე იდეალურად აბალანსებს შებოლილი ორაგულის ცხიმიანობას.'
    },
    {
      id: 'swiss_fondue_raclette',
      category: 'alpine',
      country: 'Switzerland',
      countryKa: 'შვეიცარია',
      flag: '🇨🇭',
      heritageTag: 'Alpine Tradition',
      heritageTagKa: 'ალპური ტრადიცია',
      image: 'assets/images/nordic_alpine.jpg',
      cookingTime: '25 min',
      titleEn: 'Alpine Moitié-Moitié Cheese Fondue',
      titleKa: 'ალპური ყველი ფონდიუ (Moitié-Moitié)',
      regionEn: 'Fribourg & Valais Alps, Switzerland',
      regionKa: 'შვეიცარიის ალპები',
      descEn: 'A steaming caquelon pot blending half aged Gruyère PDO and half Vacherin Fribourgeois melted in dry white Fendant wine, scented with kirsch and nutmeg.',
      descKa: 'საამაყო ალპური კერძი: ნახევარი გრიუიერი და ნახევარი ვაშრენი, გამდნარი მშრალ თეთრ ალპურ ღვინოსა და კირშში, მუსკატის კაკლის არომატით.',
      flavorTags: ['Aged Gruyère', 'Alpine White Wine', 'Kirsch Scented', 'Fireplace Warmth'],
      flavorTagsKa: ['გრიუიერი', 'ალპური თეთრი ღვინო', 'მუსკატი', 'სითბო'],
      storyEn: 'Centuries ago, remote Swiss mountain chalets were cut off during harsh alpine winters. Herders placed hardened winter cheeses into a pot with local wine over the fire, dipping stale hearth bread cubes into the bubbling warmth.',
      storyKa: 'საუკუნეების წინ, ალპების თოვლიან ზამთარში მოწყვეტილი მწყემსები გამხმარ ყველს ცეცხლზე ღვინოსთან ერთად ადნობდნენ და გამხმარ პურს აწობდნენ.',
      etiquetteEn: 'If you drop your cube of bread into the communal fondue pot, tradition dictates you must buy the next bottle of wine for the entire table!',
      etiquetteKa: 'ტრადიციის მიხედვით, ვისაც პურის ნაჭერი ფონდიუს ქვაბში ჩაუვარდება, მთელ სუფრას მომდევნო ბოთლი ღვინო უნდა შეუძღვნას!',
      ingredientsEn: [
        '400g Gruyère AOP (aged minimum 12 months), coarsely grated',
        '400g Vacherin Fribourgeois AOP, coarsely grated',
        '300ml Dry Swiss white wine (Chasselas or Fendant)',
        '1 Clove garlic, halved',
        '15ml Pure cherry brandy (Kirschwasser)',
        '10g Cornstarch (Maïzena)',
        'Freshly grated nutmeg & white pepper',
        '1 Loaf crusty country sourdough bread, cubed'
      ],
      ingredientsKa: [
        '400გ დავარგებული შვეიცარიული გრიუიერი AOP, გახეხილი',
        '400გ ვაშრენ ფრიბურჟუა AOP, გახეხილი',
        '300მლ მშრალი თეთრი ღვინო (ფენდანი ან შასლა)',
        '1 კბილი ნიორი',
        '15მლ ალუბლის ბრენდი (კირში)',
        '10გ სიმინდის სახამებელი',
        'მუსკატის კაკალი და თეთრი პილპილი',
        '1 ცალი ხრაშუნა სოფლის პური, კუბიკებად დაჭრილი'
      ],
      stepsEn: [
        { title: 'The Garlic Caquelon', text: 'Rub the cut garlic clove vigorously over the interior of a ceramic fondue pot (caquelon) to infuse the glaze.' },
        { title: 'The Wine Base', text: 'Add white wine and heat gently until shimmering, but do not let it boil vigorously.' },
        { title: 'Slow Cheese Fold', text: 'Add the grated Gruyère and Vacherin by handfuls, stirring constantly with a wooden spoon in a figure-eight motion until molten and glossy.' },
        { title: 'The Kirsch Liaison', text: 'Dissolve cornstarch into the kirsch, stir into the bubbling cheese, season with nutmeg and white pepper, and place over a warm tabletop rechaud burner.' }
      ],
      stepsKa: [
        { title: 'ქვაბის მომზადება', text: 'კერამიკულ ქვაბს შიგნიდან წაუსვით გაჭრილი ნიორი არომატისთვის.' },
        { title: 'ღვინის შეთბობა', text: 'ჩაასხით თეთრი ღვინო და გაათბეთ ნელ ცეცხლზე.' },
        { title: 'ყველის ეტაპობრივი დამატება', text: 'ნაწილ-ნაწილ ჩაყარეთ გახეხილი გრიუიერი და ვაშრენი, მუდმივად ურიეთ რვიანისებური მოძრაობით, სანამ ყველი არ გადნება.' },
        { title: 'კირშის დამატება', text: 'სახამებელი გახსენით კირშში, შეურიეთ გამდნარ ყველს, მოაყარეთ მუსკატის კაკალი და დადგით მაგიდის გამათბობელ სადგამზე.' }
      ],
      timerMinutes: 20,
      wineTitle: 'Swiss Fendant du Valais or Neuchâtel Blanc',
      wineTitleKa: 'შვეიცარიული ფენდანი ან ნოიშატელი',
      wineNotesEn: 'High-acid crisp Alpine white wine is vital: cold beer or water can cause the molten cheese to solidify painfully in the stomach!',
      wineNotesKa: 'მჟავიანი ცივი ალპური თეთრი ღვინო აუცილებელია: ცივი წყალი ან ლუდი გამდნარი ყველის მონელებას ართულებს.'
    },
    {
      id: 'georgian_khinkali',
      category: 'eastern',
      country: 'Georgia',
      countryKa: 'საქართველო',
      flag: '🇬🇪',
      heritageTag: 'Ancient Mountain Cult',
      heritageTagKa: 'მთის კულტურული მემკვიდრეობა',
      image: 'assets/images/georgian_supra.jpg',
      cookingTime: '45 min',
      titleEn: 'Mountain Khinkali Dumplings',
      titleKa: 'ქართული მთიულური ხინკალი',
      regionEn: 'Mtskheta-Mtianeti & Kazbegi, Georgia',
      regionKa: 'მთიულეთი და ყაზბეგი',
      descEn: 'Hand-pleated dumplings filled with spiced minced beef and pork, wild mountain caraway, cilantro, and steaming savory broth sealed within 19 folds.',
      descKa: 'ხელით გამოყვანილი 19-ნაოჭიანი მთის ხინკალი, წვნიანი ხორცის გულსართით, მთის კვლიავით, ქინძითა და მდიდარი ცხელი ბულიონით.',
      flavorTags: ['Piping Hot Broth', '19 Sacred Pleats', 'Wild Mountain Herb', 'Spiced Meat'],
      flavorTagsKa: ['ცხელი ბულიონი', '19 ნაოჭი', 'მთის კვლიავი', 'სურნელოვანი ხორცი'],
      storyEn: 'Originating in the craggy peaks of Khevsureti and Mtiuleti, the sun-like pleats (traditionally at least 19) symbolize the ancient pagan solar disc. Inside lies a sealed pocket of boiling, restorative herb broth.',
      storyKa: 'ხინკლის ნაოჭები მზის სხივების სიმბოლოა. ხინკლის ოსტატობა მისი ნაოჭების რაოდენობითა და იმით ფასდება, რომ მოხარშვისას არცერთი წვეთი ბულიონი არ უნდა დაიღვაროს.',
      etiquetteEn: 'Never use a fork! Grab the dumpling by its twisted tail (kudi), turn upside down, take a tiny nibble, sip the savory broth completely, and then eat the dumpling.',
      etiquetteKa: 'არასოდეს გამოიყენოთ ჩანგალი! დაიჭირეთ კუდით, ფრთხილად ჩაკბიჩეთ, შეწრუპეთ ცხელი ბულიონი და შემდეგ მიირთვით.',
      ingredientsEn: [
        '600g Strong wheat flour & cold spring water dough',
        '300g Ground chuck beef & 200g fatty pork belly',
        '250ml Ice-cold spring water (vital for inner broth)',
        '1 Large finely minced onion',
        '1 Bunch fresh mountain cilantro & parsley',
        '1 Tbsp Crushed wild mountain caraway (kvali)',
        'Red chili flakes, sea salt, black pepper'
      ],
      ingredientsKa: [
        '600გ უმაღლესი ხარისხის ფქვილი და ცივი წყალი ცომისთვის',
        '300გ საქონლის ხორცი და 200გ ღორის ცხიმიანი ხორცი',
        '250მლ ყინულივით ცივი წყალი (ბულიონისთვის)',
        '1 თავი წვრილად დაკეპილი ხახვი',
        'ახალი ქინძი და ოხრახუში',
        '1 ს/კ მთის დანაყილი კვლიავი',
        'წითელი წიწაკა, მარილი და შავი პილპილი'
      ],
      stepsEn: [
        { title: 'The Firm Dough', text: 'Knead flour, water, and salt into an exceptionally stiff dough. Rest under a damp linen cloth for 40 minutes.' },
        { title: 'The Broth Emulsion', text: 'Mince meat finely, incorporate chopped herbs and spices, then slowly whisk in the ice-cold water until the filling is succulent and loose.' },
        { title: 'Pleating the Sun Disc', text: 'Roll dough discs thin at the edges. Place a generous mound of filling in the center and fold tightly with at least 19 rhythmic overlapping pleats, twisting off the crown.' },
        { title: 'Rolling Boil & Swirl', text: 'Drop into vigorously boiling salted water, create a whirlpool with a wooden spoon so they do not stick, and cook until they float puffed for 8 minutes.' }
      ],
      stepsKa: [
        { title: 'მაგარი ცომის მოზელა', text: 'მოზილეთ ძალიან მკვრივი, მაგარი ცომი. დაასვენეთ 40 წუთით ტილოს ქვეშ.' },
        { title: 'ფარშის მომზადება', text: 'დაკეპილ ხორცს შეურიეთ ხახვი, მწვანილი, სანელებლები და ნელ-ნელა შეაზილეთ ცივი წყალი წვნიანი ბულიონისთვის.' },
        { title: '19 ნაოჭის გამოყვანა', text: 'გააბრტყელეთ ცომი, ჩადეთ ფარში და ხელით მოხდენილად გაუკეთეთ არანაკლებ 19 ნაოჭი, კუდი მჭიდროდ მოუგრიხეთ.' },
        { title: 'მოხარშვა მორევის გარეშე', text: 'ჩაყარეთ მორევად მორევად ადუღებულ მარილიან წყალში და ხარშეთ 8 წუთი, სანამ ამოტივტივდება.' }
      ],
      timerMinutes: 8,
      wineTitle: 'Kakhetian Saperavi or Ice-Cold Craft Lager',
      wineTitleKa: 'კახური საფერავი ან ყინულივით ცივი ლუდი',
      wineNotesEn: 'Full-bodied black Saperavi tannins or a crisp malt beer cut the rich mountain caraway broth and peppery meat steam.',
      wineNotesKa: 'საფერავის ძლიერი ხასიათი ან ცივი ქაფიანი ლუდი შეუდარებლად ერწყმის ხინკლის ცხელ, წიწაკიან ბულიონს.'
    },
    {
      id: 'french_coq_au_vin',
      category: 'french',
      country: 'France',
      countryKa: 'საფრანგეთი',
      flag: '🇫🇷',
      heritageTag: 'French Terroir',
      heritageTagKa: 'ფრანგული ტრადიცია',
      image: 'assets/images/french_gastronomy.jpg',
      cookingTime: '2 hours',
      titleEn: 'Coq au Vin à la Bourguignonne',
      titleKa: 'კოკი ოვენი (მამალი წითელ ღვინოში)',
      regionEn: 'Burgundy & Alsace, France',
      regionKa: 'ბურგუნდია და ელზასი',
      descEn: 'Farm-raised cockerel slow-simmered in vintage red Burgundy wine, unsmoked lardons, button mushrooms, fresh thyme sprigs, and garlic cloves.',
      descKa: 'ნატურალური სოფლის მამალი, ნელა დაშუშული ძველ ბურგუნდიულ წითელ ღვინოში, შებოლილ ხორცთან, სოკოსა და ბეგქონდარასთან ერთად.',
      flavorTags: ['Aged Burgundy', 'Rustic Elegance', 'Wild Herbs', 'Century Recipe'],
      flavorTagsKa: ['ბურგუნდიული ღვინო', 'ელეგანტურობა', 'მწვანილები', 'საუკუნოვანი'],
      storyEn: 'Legend traces the dish back to Julius Caesar besieging the Gauls; the chieftain sent Caesar a rooster symbolizing courage, and Caesar invited him to dine on it stewed in Roman wine.',
      storyKa: 'ლეგენდის მიხედვით, გალიის ბელადმა იულიუს კეისარს სიმამაცის ნიშნად მამალი გაუგზავნა, კეისარმა კი ის რომაულ ღვინოში ჩაშუშა და ბელადი სუფრასთან მიიწვია.',
      etiquetteEn: 'Best made the day before: the resting night allows the wine tannins to deeply tenderize every fiber of meat.',
      etiquetteKa: 'საუკეთესოა წინა დღეს მომზადება: ღამის განმავლობაში ღვინო ხორცის თითოეულ ბოჭკოს არბილებს.',
      ingredientsEn: [
        '1 Whole free-range rooster or farm chicken (cut into 8 pieces)',
        '750ml French Burgundy Pinot Noir or Morgon Beaujolais',
        '180g Thick smoked pork lardons',
        '250g Small cremini or wild button mushrooms',
        '16 Small pearl onions, peeled',
        '2 Fresh carrots & 3 cloves garlic',
        'Bouquet garni (fresh thyme, rosemary, bay leaves)',
        '30ml Cognac or aged Brandy',
        '40g Churned unsalted butter & 2 tbsp flour'
      ],
      ingredientsKa: [
        '1 სოფლის მამალი ან ქათამი, დაჭრილი 8 ნაწილად',
        '750მლ ბურგუნდიული პინო ნუარი',
        '180გ შებოლილი ხორცის ლარდონი',
        '250გ ქამა ან ტყის სოკო',
        '16 პატარა მარგალიტა ხახვი',
        '2 სტაფილო და 3 კბილი ნიორი',
        'ბუკეტ გარნი (ბეგქონდარა, როზმარინი, დაფნა)',
        '30მლ კონიაკი ან ბრენდი',
        '40გ კარაქი და 2 ს/კ ფქვილი'
      ],
      stepsEn: [
        { title: 'The Flambé & Sear', text: 'Brown lardons in a heavy pot, then sear chicken pieces in the rendered fat until golden. Deglaze with cognac and flambé briefly.' },
        { title: 'The Wine Reduction', text: 'Pour in the full bottle of Burgundy Pinot Noir with garlic, carrots, and bouquet garni. Simmer gently on low heat for 90 minutes.' },
        { title: 'The Forest Garnish', text: 'Sauté pearl onions and mushrooms in cultured butter until caramelised, then incorporate into the stew.' },
        { title: 'Beurre Manié', text: 'Whisk together equal parts soft butter and flour, stir into the bubbling sauce until lustrous and velvet-thick.' }
      ],
      stepsKa: [
        { title: 'ხორცის დაბრაწვა და ფლამბე', text: 'თუჯის ქვაბში დაბრაწეთ ლარდონი, იმავე ცხიმში ოქროსფრად შეწვით ქათმის ნაჭრები და დაასხით ცოტა კონიაკი.' },
        { title: 'ღვინოში ჩაშუშვა', text: 'დაასხით ბურგუნდიული წითელი ღვინო, დაამატეთ ნიორი, სტაფილო და მწვანილის ბუკეტი. შუშეთ ნელ ცეცხლზე 90 წუთით.' },
        { title: 'სოკო და ხახვი', text: 'კარაქში კარამელიზებამდე მოშუშეთ მარგალიტა ხახვი და სოკო, შემდეგ კი ჩაამატეთ ქვაბში.' },
        { title: 'სოუსის გასქელება', text: 'კარაქისა და ფქვილის ნაზავი (Beurre Manié) ნელ-ნელა შეურიეთ სოუსს ხავერდოვანი კონსისტენციისთვის.' }
      ],
      timerMinutes: 90,
      wineTitle: 'Burgundy Pinot Noir or Beaujolais Cru',
      wineTitleKa: 'ბურგუნდიული პინო ნუარი ან ბოჟოლე',
      wineNotesEn: 'Serve with the exact same Pinot Noir used in cooking for pure seamless gastronomic continuity.',
      wineNotesKa: 'სუფრასთან მიირთვით ზუსტად ის პინო ნუარი, რომელშიც კერძი მზადდებოდა, სრული ჰარმონიისთვის.'
    }
  ];

  // =========================================================================
  // 2. DATA: LIVING TRADITIONS CAROUSEL CONTENT
  // =========================================================================
  const TRADITIONS_DATA = {
    supra: {
      headlineEn: 'The Georgian Supra & Tamada Eloquence',
      headlineKa: 'ქართული სუფრა და თამადის რიტუალი',
      captionEn: 'Caucasus Cradle & Ancient Heritage',
      captionKa: 'კავკასიური აკვანი და 8,000 წლოვანი ისტორია',
      snippetEn: 'A feast transformed into philosophical theater, guided by the toastmaster (Tamada) with 8,000-year-old Kvevri clay amber wine.',
      snippetKa: 'სუფრა, როგორც ფილოსოფიური რიტუალი, რომელსაც უძღვება თამადა უძველესი ქვევრის ქარვისფერი ღვინითა და მრავალხმიანი საგალობლებით.',
      image: 'assets/images/georgian_supra.jpg'
    },
    french_meal: {
      headlineEn: 'The French Gastronomic Meal (Repas)',
      headlineKa: 'ფრანგული გასტრონომიული სადილი',
      captionEn: 'UNESCO Intangible Masterpiece',
      captionKa: 'UNESCO-ს არამატერიალური მემკვიდრეობა',
      snippetEn: 'A social custom structured in perfect harmony: apéritif, starter, fish or meat with seasonal vegetables, cheese, dessert, and digestif.',
      snippetKa: 'სადღესასწაულო ტრადიცია: აპერიტივი, მთავარი კერძი ღვინის ზუსტი შეხამებით, დავარგებული ყველის დაფა და დესერტი.',
      image: 'assets/images/french_gastronomy.jpg'
    },
    mediterranean_diet: {
      headlineEn: 'Mediterranean Conviviality & The Olive',
      headlineKa: 'ხმელთაშუა ზღვის სადღესასწაულო სუფრა',
      captionEn: 'Cradle of Longevity & Sun',
      captionKa: 'მზისა და დღეგრძელობის კულტურა',
      snippetEn: 'The multi-generational table where time slows down: virgin cold-pressed olive oil, freshly harvested tomatoes, and lively family storytelling.',
      snippetKa: 'ოჯახური ტრადიცია, სადაც თაობები იკრიბებიან ზეითუნის ზეთით გაჯერებული კერძებისა და გულწრფელი საუბრების გარშემო.',
      image: 'assets/images/mediterranean.jpg'
    },
    nordic_fika: {
      headlineEn: 'The Nordic "Fika" & Hearth Mindfulness',
      headlineKa: 'სკანდინავიური "ფიკა" და სიმშვიდის ფილოსოფია',
      captionEn: 'Scandinavian Balance & Wilderness',
      captionKa: 'ჩრდილოეთის ბუნება და ბალანსი',
      snippetEn: 'More than a coffee break: a spiritual pause to celebrate freshly baked cinnamon-cardamom rolls, connection, and arctic calm.',
      snippetKa: 'ყავის წმინდა შესვენება ცხელი ილის ფუნთუშებით, როდესაც დრო ჩერდება და ადამიანი ბუნებასთან ერთიანდება.',
      image: 'assets/images/nordic_alpine.jpg'
    },
    spanish_tapeo: {
      headlineEn: 'The Iberian Tapeo & Basque Pintxos Crawl',
      headlineKa: 'ესპანური ტაპასის კულტურა და პინჩოსი',
      captionEn: 'The Social Heartbeat of Spain',
      captionKa: 'ესპანური ცხოვრების ენერგია',
      snippetEn: 'Wandering from tavern to tavern under evening stars, sharing culinary miniatures, cold vermouth, and animated laughter.',
      snippetKa: 'ტავერნიდან ტავერნაში გადასვლის მხიარული რიტუალი, მინიატურული შედევრებითა და ბასკური სიდრით.',
      image: 'assets/images/spanish_paella.jpg'
    }
  };

  // =========================================================================
  // 3. DATA: SOMMELIER PAIRING STUDIO
  // =========================================================================
  const PAIRING_DATA = {
    wine: {
      titleEn: 'Historic European Grand Crus & Terroirs',
      titleKa: 'ევროპის ისტორიული გრან კრიუ და ტერუარები',
      descEn: 'Discover the intimate alchemy between Europe’s ancient chalk, limestone, and slate soils, expressed in timeless grape vintages.',
      descKa: 'აღმოაჩინეთ კავშირი ევროპის უძველეს კირქვიან ნიადაგებსა და საუკუნოვან ყურძნის ჯიშებს შორის.',
      recs: [
        { name: 'Barolo DOCG (Piedmont, Italy)', nameKa: 'ბაროლო (პიემონტი, იტალია)', sub: 'Aged 38 months in Slavonian oak', subKa: 'დავარგებული მუხის კასრებში', match: '99% Perfect' },
        { name: 'Bordeaux Pauillac Grand Cru (France)', nameKa: 'ბორდო პოიაკი (საფრანგეთი)', sub: 'Cabernet Sauvignon & Merlot mastery', subKa: 'კაბერნე სოვინიონისა და მერლოს შედევრი', match: '98% Perfect' },
        { name: 'Rioja Gran Reserva (Spain)', nameKa: 'რიოხა გრან რეზერვა (ესპანეთი)', sub: 'Tempranillo with leather & vanilla notes', subKa: 'ტემპრანილიო ვანილისა და ტყავის ნოტებით', match: '96% Perfect' }
      ]
    },
    cheese: {
      titleEn: 'Protected Raw-Milk Artisanal Cheeses',
      titleKa: 'ნატურალური ფერმერული ყველის საგანძური',
      descEn: 'Centuries-old microbial caves and alpine meadow grasses give European cheeses their unpasteurized character and profound depth.',
      descKa: 'საუკუნოვანი გამოქვაბულები და ალპური საძოვრები ანიჭებს ევროპულ ყველს განუმეორებელ სიმდიდრეს.',
      recs: [
        { name: 'Parmigiano Reggiano PDO 36-Month', nameKa: 'პარმიჯანო რეჯანო (36 თვიანი)', sub: 'Crumbly crystalline umami explosion', subKa: 'კრისტალური უმამის აფეთქება', match: '100% Perfect' },
        { name: 'Roquefort AOP (Caves of Combalou)', nameKa: 'როკფორი (საფრანგეთი)', sub: 'Raw sheep milk with blue Penicillium', subKa: 'ნედლი ცხვრის რძის ცისფერი ყველი', match: '97% Perfect' },
        { name: 'Gruyère d’Alpage AOP (Switzerland)', nameKa: 'შვეიცარიული ალპური გრიუიერი', sub: 'Made exclusively from wild flower milk', subKa: 'მზადდება ველური ყვავილების რძისგან', match: '98% Perfect' }
      ]
    },
    bread: {
      titleEn: 'Hearth-Baked Breads & Wild Fermentations',
      titleKa: 'ღუმელის პური და ველური საფუარი',
      descEn: 'From dark Baltic sourdough rye to crusty Tuscan loaves baked without salt to showcase rich olive oils.',
      descKa: 'ბალტიისპირული შავი ჭვავის პურიდან დაწყებული, უმარილო ტოსკანური პურით დამთავრებული.',
      recs: [
        { name: 'Danish Rugbrød (Sourdough Rye)', nameKa: 'დანიური რუგბროდი (ჭვავის)', sub: 'Sunflower seeds & cracked rye grain', subKa: 'მზესუმზირითა და ჭვავის მარცვლით', match: '98% Perfect' },
        { name: 'Pain de Campagne (French Hearth)', nameKa: 'ფრანგული გლეხური პური', sub: 'Wild levain starter with crisp blistered crust', subKa: 'ველური საფუვრით გამომცხვარი ხრაშუნა პური', match: '97% Perfect' },
        { name: 'Georgian Shoti Bread (Tone Oven)', nameKa: 'ქართული შოთის პური (თონე)', sub: 'Slapped against the fiery clay walls of Tone', subKa: 'თონის მხურვალე კედლებზე გამომცხვარი', match: '100% Perfect' }
      ]
    },
    kvevri: {
      titleEn: 'Ancient Georgian Kvevri & Amber Vintages',
      titleKa: 'ქართული ქვევრის 8,000 წლოვანი ქარვისფერი ღვინო',
      descEn: 'UNESCO recognizes the Georgian Kvevri winemaking method as humanity’s oldest unbroken tradition — fermenting in giant clay amphorae buried underground.',
      descKa: 'UNESCO-ს მიერ აღიარებული მსოფლიოს უძველესი უწყვეტი მეღვინეობა მიწაში ჩაფლულ თიხის გიგანტურ ქვევრებში.',
      recs: [
        { name: 'Kakhetian Rkatsiteli Qvevri (Amber)', nameKa: 'კახური რქაწითელი ქვევრი', sub: 'Full skin-contact, dried apricot & walnut notes', subKa: 'ჭაჭაზე დავარგებული, ჩირისა და კაკლის ნოტებით', match: '100% Masterpiece' },
        { name: 'Saperavi Qvevri (Deep Red/Black)', nameKa: 'საფერავი ქვევრი', sub: 'Teinturier grape, notes of black cherry & smoke', subKa: 'მუქი შინდისფერი, მაყვლისა და შებოლილი ტონებით', match: '99% Masterpiece' },
        { name: 'Krakhuna & Tsitska (Imereti Amphora)', nameKa: 'კრახუნა და ციცქა (იმერული ქვევრი)', sub: 'Floral, crisp stone fruits, gentle amber minerality', subKa: 'ყვავილოვანი, ცოცხალი მინერალურობით', match: '97% Masterpiece' }
      ]
    }
  };

  // =========================================================================
  // 4. DATA: QUIZ QUESTIONS & ARCHETYPES
  // =========================================================================
  const QUIZ_QUESTIONS = [
    {
      questionEn: 'What is your ideal dining atmosphere?',
      questionKa: 'როგორია თქვენი საოცნებო გარემო სადილისთვის?',
      options: [
        { icon: 'fa-sun', titleEn: 'Sunlit rustic courtyard with family laughter', titleKa: 'მზიანი ეზო, ზეთისხილის ხეები და ოჯახური ჟრიამული', archetype: 'mediterranean' },
        { icon: 'fa-champagne-glasses', titleEn: 'Intimate candlelit Belle Époque bistro with Pinot Noir', titleKa: 'მყუდრო, სანთლებით განათებული პარიზული ბისტრო', archetype: 'french' },
        { icon: 'fa-hands-clapping', titleEn: 'Grand banquet with poetic toasts, polyphony & horn cup', titleKa: 'დიდებული სუფრა, თამადის სადღეგრძელოები და მრავალხმიანობა', archetype: 'georgian' },
        { icon: 'fa-fire', titleEn: 'Cozy timber cabin with wood stove and foraged berries', titleKa: 'მყუდრო ხის ქოხი, ბუხრის ცეცხლი და ტყის კენკრა', archetype: 'nordic' }
      ]
    },
    {
      questionEn: 'Which flavor profile commands your palate?',
      questionKa: 'რომელი გემო იპყრობს თქვენს გულს?',
      options: [
        { icon: 'fa-lemon', titleEn: 'Cold-pressed olive oil, sun-ripened tomatoes & sea salt', titleKa: 'ზეითუნის ზეთი, მზეზე დამწიფებული პომიდორი და რეჰანი', archetype: 'mediterranean' },
        { icon: 'fa-wine-bottle', titleEn: 'Slow wine reductions, cultured butter & earth truffles', titleKa: 'ღვინის სქელი სოუსები, ნაღების კარაქი და ტრიუფელი', archetype: 'french' },
        { icon: 'fa-seedling', titleEn: 'Crushed walnuts, wild tarragon, coriander & garlic paste', titleKa: 'დაფქული ნიგოზი, ტარხუნა, ქინძი და წვნიანი სანელებლები', archetype: 'georgian' },
        { icon: 'fa-smog', titleEn: 'Beechwood smoke, pickled sea harvest & crisp rye', titleKa: 'შებოლილი ზღვის თევზი, ჭვავი და მჟავე კენკრა', archetype: 'nordic' }
      ]
    },
    {
      questionEn: 'Your sacred beverage to accompany a grand feast?',
      questionKa: 'თქვენი საყვარელი სასმელი სადღესასწაულო სუფრისთვის?',
      options: [
        { icon: 'fa-glass-water', titleEn: 'Crisp Tuscan Chianti or refreshing Galician Albariño', titleKa: 'გრილი ტოსკანური კიანტი ან ხალისიანი ალბარინიო', archetype: 'mediterranean' },
        { icon: 'fa-wine-glass', titleEn: 'Grand Cru Pinot Noir or vintage aged Champagne', titleKa: 'ბურგუნდიული პინო ნუარი ან ძველი შამპანური', archetype: 'french' },
        { icon: 'fa-jar', titleEn: 'Ancient amber Rkatsiteli fermented in underground Kvevri', titleKa: 'მიწაში ჩაფლულ ქვევრში დაყენებული ქარვისფერი რქაწითელი', archetype: 'georgian' },
        { icon: 'fa-beer-mug-empty', titleEn: 'Wild lingonberry craft cider or artisanal caraway aquavit', titleKa: 'ტყის მოცვის სიდრი ან არომატული აკვავიტი', archetype: 'nordic' }
      ]
    },
    {
      questionEn: 'Which dining philosophy speaks to your soul?',
      questionKa: 'რომელი გასტრონომიული ფილოსოფიაა თქვენთვის ყველაზე ახლო?',
      options: [
        { icon: 'fa-users', titleEn: 'Food is about unhurried celebration and living to 100', titleKa: 'საჭმელი არის ხანგრძლივი სიხარული და დღეგრძელობის საიდუმლო', archetype: 'mediterranean' },
        { icon: 'fa-mortar-pestle', titleEn: 'Culinary perfection is an intellectual and technical art', titleKa: 'კულინარია არის მაღალი ხელოვნება და ზუსტი ტექნიკა', archetype: 'french' },
        { icon: 'fa-heart', titleEn: 'Every guest is an envoy of God; wine and song bond souls', titleKa: 'სტუმარი ღვთისაა; სუფრა და სიმღერა სულებს აერთიანებს', archetype: 'georgian' },
        { icon: 'fa-tree', titleEn: 'Pure harmony with silent nature, foraging and mindfulness', titleKa: 'ბუნებასთან სრული ჰარმონია და სიმარტივე', archetype: 'nordic' }
      ]
    }
  ];

  const ARCHETYPES_DATA = {
    mediterranean: {
      crest: 'fa-sun',
      titleEn: 'The Mediterranean Sun Connoisseur',
      titleKa: 'ხმელთაშუა ზღვის მზის მოამაგე',
      descEn: 'Your palate thrives on vibrant sun-drenched simplicity: extra virgin olive oil, handmade pasta ribbons, sea air, and multi-generational feasts that last late into the evening.',
      descKa: 'თქვენი გული მზესა და სითბოს ეკუთვნის: ზეითუნის ზეთი, ხელნაკეთი პასტა, ზღვის ნიავი და ხანგრძლივი სადილები საყვარელ ადამიანებთან.',
      dishId: 'tagliatelle_tartufo'
    },
    french: {
      crest: 'fa-champagne-glasses',
      titleEn: 'The French Haute Brasserie Purist',
      titleKa: 'ფრანგული მაღალი სამზარეულოს ესთეტი',
      descEn: 'You respect the sacred art de la table, complex wine reductions, butter emulsions, and time-honored Escoffier classical techniques.',
      descKa: 'თქვენ აფასებთ სუფრის სრულყოფილ ეტიკეტს, ღვინის ხავერდოვან სოუსებს, კარაქის ემულსიებსა და კლასიკურ ფრანგულ ესთეტიკას.',
      dishId: 'boeuf_bourguignon'
    },
    georgian: {
      crest: 'fa-hands-clapping',
      titleEn: 'The Caucasian Supra Master & Toast Poet',
      titleKa: 'ქართული სუფრისა და სიტყვის დიდოსტატი',
      descEn: 'For you, dining is spiritual theater. You cherish golden Adjaruli Khachapuri, steaming Khinkali, fragrant wild herbs, and 8,000-year-old amber Kvevri wine toasted under the guidance of a wise Tamada.',
      descKa: 'თქვენთვის სუფრა სულიერი დღესასწაულია! ცხელი აჭარული ხაჭაპური, წვნიანი ხინკალი, ნიგვზიანი ფხალეული და 8,000 წლოვანი ქვევრის ქარვისფერი ღვინო თქვენი ნამდვილი სტიქიაა.',
      dishId: 'adjaruli_khachapuri'
    },
    nordic: {
      crest: 'fa-snowflake',
      titleEn: 'The Nordic Forager & Minimalist',
      titleKa: 'ჩრდილოეთის ბუნებისა და სიმარტივის მაძიებელი',
      descEn: 'You find beauty in clean, elemental flavors: wild lingonberries, cold-smoked salmon on dense fermented dark rye, and peaceful candlelit Fika moments.',
      descKa: 'თქვენ სიმშვიდესა და სუფთა გემოებში ხედავთ სილამაზეს: შებოლილი ორაგული, ჭვავის პური, ტყის კენკრა და მყუდრო ფიკას წუთები.',
      dishId: 'nordic_smorrebrod'
    }
  };

  // =========================================================================
  // 5. TRANSLATION DICTIONARY (EN & KA)
  // =========================================================================
  const I18N = {
    en: {
      brand_title: 'SAVOR EUROPE',
      brand_tagline: 'CULINARY HERITAGE',
      nav_regions: 'Regional Cuisines',
      nav_traditions: 'Living Traditions',
      nav_sommelier: 'Terroir & Pairings',
      nav_quiz: 'Culinary Quiz',
      nav_festivals: 'Harvest Calendar',
      sound_btn: 'Ambience',
      hero_badge: 'UNESCO Intangible Cultural Heritage of Food',
      hero_title_1: 'A Grand Journey Through',
      hero_title_2: 'European Cuisine & Timeless Traditions',
      hero_desc: 'From the candlelit cellars of Burgundy and sun-drenched olive groves of Tuscany to the ancient 8,000-year Georgian Supra feast and Nordic foraging hearths — immerse yourself in Europe’s most sacred culinary rituals, protected terroirs, and heirloom flavors.',
      hero_cta_explore: 'Explore Regional Cuisines',
      hero_cta_quiz: 'Find Your Culinary Spirit',
      stat_1: 'Culinary Cultures',
      stat_2: 'Protected Terroirs (AOC/PDO)',
      stat_3: 'Years of Winemaking Roots',
      stat_4: 'Heirloom Recipes',
      reg_badge: 'Terroir & Provenance',
      reg_title_1: 'Iconic Dishes of the',
      reg_title_2: 'European Continent',
      reg_subtitle: 'Every European plate tells a story of soil, climate, ancestral hearths, and communal joy. Filter across renowned culinary provinces or search your favorite ingredients.',
      tab_all: 'All Europe',
      tab_mediterranean: 'Mediterranean Basin',
      tab_french: 'French Haute Cuisine',
      tab_eastern: 'Caucasus & Eastern Europe',
      tab_alpine: 'Central & Alpine',
      tab_nordic: 'Nordic & Baltic',
      search_placeholder: 'Search dishes by name, region, or ingredient (e.g. Saffron, Truffle, Khachapuri, Cheese)...',
      trad_badge: 'Living Heritage',
      trad_title_1: 'The Sacred Rituals of',
      trad_title_2: 'European Dining',
      trad_subtitle: 'In Europe, eating has never been merely about sustenance; it is a communion of speech, song, seasonal reverence, and generational hospitality.',
      trad_supra_title: 'The Georgian Supra & Tamada Ritual',
      trad_supra_desc: 'The supreme celebration of hospitality. Guided by the Tamada, toasts honor ancestors, peace, love, and sacred earth over steaming Khachapuri, Khinkali, and amber Kvevri wine.',
      trad_french_title: 'The French Gastronomic Meal (Repas Gastronomique)',
      trad_french_desc: 'An art of convivial celebration emphasizing good fellowship, the taste of terroir, pairing exquisite wines with courses, and meticulously orchestrated table dressing.',
      trad_med_title: 'Mediterranean Diet & Long Sunday Feasts',
      trad_med_desc: 'Far more than nutrition: an ancestral social ritual where three generations gather around endless mezze, extra-virgin olive oil, hand-rolled pasta, and spirited storytelling.',
      trad_nordic_title: 'Nordic "Fika" & Foraged Wilderness',
      trad_nordic_desc: 'The sacred Scandinavian pause: freshly ground dark coffee, warm cardamom buns (Kardemummabullar), and an intimate bond with coastal smoking and arctic forest foraging.',
      trad_spain_title: 'The Art of the Tapeo & Basque Pintxos Crawl',
      trad_spain_desc: 'Moving freely from tavern to tavern, savoring bite-sized masterpieces perched on skewers, pouring natural Basque cider from heights, and laughing into the twilight.',
      somm_badge: 'Cellar & Terroir Harmonization',
      somm_title_1: 'The Interactive European',
      somm_title_2: 'Sommelier & Fromagerie',
      somm_subtitle: 'Select an iconic pairing style to discover the time-honored matches between Europe’s greatest artisan cheeses, historic grand cru wines, and hearth-baked breads.',
      somm_cat_wine: 'Historic Grand Crus',
      somm_cat_cheese: 'Artisan Raw Cheeses',
      somm_cat_bread: 'Hearth Breads & Grains',
      somm_cat_kvevri: 'Ancient Kvevri & Amber',
      quiz_badge: 'Interactive Gastronomic Journey',
      quiz_title_1: 'Discover Your European',
      quiz_title_2: 'Culinary Soul',
      quiz_subtitle: 'Answer 4 sensory questions about your palate, dining philosophy, and spirit. We will match you with your authentic European gastronomic archetype and signature ancestral recipe.',
      quiz_prev: 'Previous',
      quiz_hint: 'Select an option to advance',
      quiz_retake: 'Retake Quiz',
      fest_badge: 'The Cycle of Earth & Season',
      fest_title_1: 'The Great Culinary Festivals',
      fest_title_2: 'of Europe',
      fest_subtitle: 'From the damp autumn oak forests yielding white truffles to ancient harvest grape-pressing and midsummer fish banquets under the midnight sun.',
      fest_1_date: 'October – November',
      fest_1_title: 'Alba White Truffle Fair',
      fest_1_desc: 'The world’s most aromatic culinary spectacle. Truffle hunters (trifolao) and their trained dogs search misty Langhe hills for subterranean "white diamonds", paired with aged Barolo.',
      fest_2_date: 'September – October',
      fest_2_title: 'Rtveli & Tbilisoba Harvest',
      fest_2_desc: 'An 8,000-year-old unbroken ritual. Families crush indigenous Saperavi & Rkatsiteli grapes into clay Kvevri vessels, dipping walnut strings into hot grape Tatara for Churchkhela.',
      fest_3_date: 'Late September',
      fest_3_title: 'Fête de la Gastronomie',
      fest_3_desc: 'A nationwide celebration of France’s UNESCO-honored food heritage. Open-air banquets, master chef demos, artisanal charcuterie tastings, and Grand Cru cellar tastings.',
      fest_4_date: 'June Summer Solstice',
      fest_4_title: 'Nordic Midsommar Feast',
      fest_4_desc: 'Dancing under 24-hour daylight. Long rustic outdoor tables laden with pickled Baltic herring (sill), fresh new potatoes boiled with fresh dill, sour cream, and wild strawberries.',
      mani_1_title: 'Heirloom Terroirs & Seeds',
      mani_1_desc: 'Protecting ancient biodiversity: ancient Emmer grains, rare heritage grape varietals, and mountain pastures that yield unparalleled complexity.',
      mani_2_title: 'Artisanal Craftsmanship',
      mani_2_desc: 'Honoring the master cheese-makers, sourdough bakers, Kvevri clay potters, and curing cellars who refuse industrial shortcuts in favor of slow mastery.',
      mani_3_title: 'Communal Conviviality',
      mani_3_desc: 'Food is Europe’s emotional language. The table is a sanctuary where memory is passed forward, song is shared, and strangers become family.',
      almanac_badge: 'Complimentary Epicurean Guide',
      almanac_title: 'Receive The 2026 European Culinary Almanac',
      almanac_subtitle: 'A beautifully curated digital guide featuring 40 ancestral recipes, harvest dates, sommelier tasting charts, and unvarnished culinary histories.',
      almanac_ph: 'Enter your email address...',
      almanac_btn: 'Get Free Almanac',
      footer_bio: 'Dedicated to the appreciation, documentation, and preservation of Europe’s living culinary traditions, sacred terroirs, and gastronomic humanity.',
      footer_col_regions: 'Regions',
      footer_col_traditions: 'Traditions',
      footer_col_heritage: 'Heritage',
      footer_rights: 'All European culinary traditions celebrated with reverence.',
      modal_tab_story: 'Tradition & Lore',
      modal_tab_ingredients: 'Ingredients',
      modal_tab_steps: 'Preparation & Timer',
      modal_tab_pairing: 'Sommelier Notes',
      modal_etiquette: 'Culinary Etiquette & Ritual:',
      modal_checklist_hint: 'Tap an ingredient to check it off as you assemble your pantry:',
      timer_title: 'Interactive Kitchen Timer',
      tasting_book_title: 'Your Personal Tasting Book',
      tasting_book_desc: 'Your handpicked selection of heirloom European dishes to cook and savor.',
      btn_view_recipe: 'View Tradition & Recipe',
      saved_empty: 'Your tasting book is currently empty. Tap the bookmark icon on any dish to save it here!',
      nav_connect: 'Connect & Reserve',
      conn_badge: 'Culinary Concierge & Connection',
      conn_title_1: 'Connect With European Masters &',
      conn_title_2: 'Reserve Your Feast',
      conn_subtitle: 'Whether planning an authentic 8,000-year Georgian Supra banquet, a candlelit Tuscan vineyard tasting, or a private masterclass with heritage bakers — connect directly with our culinary curators across Europe.',
      conn_name_label: 'Your Full Name',
      conn_name_ph: 'e.g. Nino Kakhadze',
      conn_email_label: 'Email Address',
      conn_email_ph: 'e.g. nino@example.com',
      conn_exp_label: 'Culinary Experience',
      exp_supra: 'Traditional Georgian Supra Banquet (Tbilisi / Kakheti)',
      exp_tuscany: 'Tuscan Vineyard & Truffle Pairing (Florence / Siena)',
      exp_paris: 'Parisian Grand Cru Haute Gastronomy (Paris / Lyon)',
      exp_nordic: 'Nordic Wild Foraging & Smoked Sea Feast (Copenhagen)',
      exp_alpine: 'Swiss Alpine Fondue & Hearth Evening (Zermatt / Valais)',
      exp_artisan: 'Artisan Guild Collaboration / General Connection',
      conn_guests_label: 'Party Size / Guests',
      guest_2: 'Intimate Table (2 Guests)',
      guest_4: 'Family / Friends (4 Guests)',
      guest_small: 'Private Room (6–10 Guests)',
      guest_large: 'Grand Banquet / Supra (12+ Guests)',
      conn_date_label: 'Preferred Date',
      conn_somm_label: 'Sommelier Curation',
      somm_opt_1: 'Ancient 8000-Yr Kvevri Amber & Saperavi Flight',
      somm_opt_2: 'European Grand Cru & Biodynamic Terroirs',
      somm_opt_3: 'Botanical Fermentations & Non-Alcoholic Pairings',
      somm_opt_4: 'Chef & Sommelier Sur-Mesure Selection',
      conn_notes_label: 'Special Requests, Dietary Preferences & Inquiries',
      conn_notes_ph: 'Tell us about dietary preferences, celebratory occasions, or specific artisan connection requests...',
      conn_submit_btn: 'Confirm Connection & Request Experience',
      concierge_title: 'European Concierge & Sommelier Desk',
      concierge_online: 'Active Now • Average Response Time < 15 mins',
      atelier_tbilisi_addr: 'Betlemi Quarter 8, Old Tbilisi\nGeorgia (Cradle of Wine)',
      atelier_florence_addr: 'Via Santo Spirito 12, Oltrarno\nFlorence, Tuscany, Italy',
      atelier_paris_addr: '4 Rue de la Gastronomie, 6th Arr.\nParis, France',
      atelier_nordic_addr: 'Nyhavn Waterfront 19\nCopenhagen, Denmark',
      social_title: 'Connect Across Culinary Communities',
      voucher_badge: 'European Culinary Passport',
      voucher_title: 'Feast Request Registered!',
      voucher_desc: 'Your connection inquiry has been assigned to our European head sommelier & culinary curator.',
      voucher_guest: 'Guest Name',
      voucher_experience: 'Experience',
      voucher_date: 'Date & Time',
      voucher_party: 'Party Size',
      voucher_print: 'Print Voucher',
      voucher_done: 'Done'
    },
    ka: {
      brand_title: 'სავორ ევროპა',
      brand_tagline: 'კულინარიული საგანძური',
      nav_regions: 'რეგიონული სამზარეულო',
      nav_traditions: 'ცოცხალი ტრადიციები',
      nav_sommelier: 'ტერუარი და შეხამება',
      nav_quiz: 'კულინარიული ქვიზი',
      nav_festivals: 'მოსავლის კალენდარი',
      sound_btn: 'ამბიენსი',
      hero_badge: 'UNESCO-ს კულინარიული მემკვიდრეობა',
      hero_title_1: 'დიდი მოგზაურობა',
      hero_title_2: 'ევროპის კულინარიასა და ტრადიციებში',
      hero_desc: 'ბურგუნდიის სანთლით განათებული სარდაფებიდან და ტოსკანის ზეთისხილის ჭალებიდან — საქართველოს 8,000 წლოვან სუფრამდე და სკანდინავიის ფიორდებამდე. აღმოაჩინეთ ევროპის წმინდა კულინარიული რიტუალები, დაცული ტერუარები და საუკუნოვანი გემოები.',
      hero_cta_explore: 'აღმოაჩინეთ კერძები',
      hero_cta_quiz: 'გაიარეთ კულინარიული ტესტი',
      stat_1: 'კულინარიული კულტურა',
      stat_2: 'დაცული ტერუარი (AOC/PDO)',
      stat_3: 'წელი მეღვინეობის ისტორია',
      stat_4: 'ავთენტური რეცეპტი',
      reg_badge: 'ტერუარი და წარმომავლობა',
      reg_title_1: 'ევროპის კონტინენტის',
      reg_title_2: 'საკულტო კერძები',
      reg_subtitle: 'თითოეული ევროპული კერძი მიწის, კლიმატისა და წინაპართა სიბრძნის ამბავია. გაფილტრეთ რეგიონების მიხედვით ან მოძებნეთ თქვენთვის სასურველი ინგრედიენტი.',
      tab_all: 'მთელი ევროპა',
      tab_mediterranean: 'ხმელთაშუა ზღვა',
      tab_french: 'ფრანგული მაღალი სამზარეულო',
      tab_eastern: 'კავკასია და აღმ. ევროპა',
      tab_alpine: 'ცენტრალური და ალპური',
      tab_nordic: 'სკანდინავია და ბალტია',
      search_placeholder: 'მოძებნეთ კერძი, რეგიონი ან ინგრედიენტი (მაგ. ზაფრანა, ტრიუფელი, ხაჭაპური, ყველი)...',
      trad_badge: 'ცოცხალი მემკვიდრეობა',
      trad_title_1: 'ევროპული სუფრის',
      trad_title_2: 'წმინდა რიტუალები',
      trad_subtitle: 'ევროპაში სადილი არასოდეს ყოფილა მხოლოდ კვება; ეს არის სიტყვის, მრავალხმიანი სიმღერისა და უსაზღვრო სტუმართმოყვარეობის საიდუმლოება.',
      trad_supra_title: 'ქართული სუფრა და თამადის რიტუალი',
      trad_supra_desc: 'სტუმართმოყვარეობის უმაღლესი დღესასწაული. თამადის წინამძღოლობით ითქმება სადღეგრძელოები მშვიდობაზე, სიყვარულსა და წინაპრებზე, ცხელ ხაჭაპურთან და ქვევრის ქარვისფერ ღვინოსთან ერთად.',
      trad_french_title: 'ფრანგული გასტრონომიული სადილი (Repas Gastronomique)',
      trad_french_desc: 'ზეიმის ხელოვნება, რომელიც ხაზს უსვამს მეგობრობას, ტერუარის გემოს, კერძებისა და ღვინის ზუსტ შეხამებასა და სუფრის გაწყობის უმაღლეს კულტურას.',
      trad_med_title: 'ხმელთაშუა ზღვის დიეტა და კვირის სადილები',
      trad_med_desc: 'მეტი, ვიდრე უბრალო კვება: წინაპართა სოციალური რიტუალი, სადაც სამი თაობა იკრიბება მეგობრული საუბრების, ზეითუნის ზეთისა და ხელნაკეთი პასტის გარშემო.',
      trad_nordic_title: 'სკანდინავიური "ფიკა" და სიმშვიდე',
      trad_nordic_desc: 'ჩრდილოეთის წმინდა შესვენება: ახლად დაფქული ყავა, თბილი ილის ფუნთუშები და ჩრდილოეთის ბუნებასთან განუმეორებელი ჰარმონია.',
      trad_spain_title: 'ესპანური ტაპეო და ბასკური პინჩოსი',
      trad_spain_desc: 'ტავერნიდან ტავერნაში სეირნობა, მინიატურული კერძების დაგემოვნება, ბასკური ნატურალური სიდრი და ცოცხალი სიცილი ვარსკვლავების ქვეშ.',
      somm_badge: 'მარანი და ტერუარი',
      somm_title_1: 'ინტერაქტიული ევროპული',
      somm_title_2: 'სომელიე და ყველის მარანი',
      somm_subtitle: 'აირჩიეთ კატეგორია და აღმოაჩინეთ საუკუნოვანი ჰარმონია ევროპის საუკეთესო ყველს, ისტორიულ ღვინოებსა და ღუმელის პურს შორის.',
      somm_cat_wine: 'ისტორიული გრან კრიუ',
      somm_cat_cheese: 'ნატურალური ფერმერული ყველი',
      somm_cat_bread: 'ღუმელის პური და მარცვალი',
      somm_cat_kvevri: 'უძველესი ქვევრი და ქარვისფერი',
      quiz_badge: 'ინტერაქტიული მოგზაურობა',
      quiz_title_1: 'აღმოაჩინეთ თქვენი',
      quiz_title_2: 'კულინარიული სული',
      quiz_subtitle: 'უპასუხეთ 4 კითხვას თქვენი გემოვნებისა და ფილოსოფიის შესახებ. ჩვენ გაგიმხელთ თქვენს ევროპულ გასტრონომიულ არქეტიპსა და საგვარეულო რეცეპტს.',
      quiz_prev: 'უკან',
      quiz_hint: 'გადასასვლელად აირჩიეთ ერთ-ერთი ვარიანტი',
      quiz_retake: 'ტესტის თავიდან გავლა',
      fest_badge: 'ბუნებისა და მიწის ციკლი',
      fest_title_1: 'ევროპის უდიდესი',
      fest_title_2: 'კულინარიული ფესტივალები',
      fest_subtitle: 'შემოდგომის მუხნარებიდან მოპოვებული თეთრი ტრიუფელით დაწყებული, რთველის ყურძნის დაწურვითა და ზაფხულის თევზის დღესასწაულით დამთავრებული.',
      fest_1_date: 'ოქტომბერი – ნოემბერი',
      fest_1_title: 'ალბას თეთრი ტრიუფელის ბაზრობა',
      fest_1_desc: 'მსოფლიოს ყველაზე არომატული სანახაობა. ტრიუფელის მაძიებლები გაწვრთნილ ძაღლებთან ერთად პოულობენ მიწისქვეშა "თეთრ ალმასებს", რომლებსაც დავარგებულ ბაროლოსთან მიირთმევენ.',
      fest_2_date: 'სექტემბერი – ოქტომბერი',
      fest_2_title: 'რთველი და თბილისობა',
      fest_2_desc: '8,000 წლოვანი უწყვეტი რიტუალი. ყურძნის დაწურვა, ქვევრის დალუქვა, ცხელ თათარაში ჩავლებული ჩურჩხელები და მრავალხმიანი სიმღერა.',
      fest_3_date: 'სექტემბრის ბოლო',
      fest_3_title: 'გასტრონომიის ეროვნული დღესასწაული',
      fest_3_desc: 'საფრანგეთის UNESCO-ს მემკვიდრეობის საერთო სახალხო ზეიმი. ღია ცის ქვეშ გამართული ბანკეტები, შეფ-მზარეულთა მასტერკლასები და ღვინის დეგუსტაციები.',
      fest_4_date: 'ივნისი (მზებუდობა)',
      fest_4_title: 'სკანდინავიური მიდსომარი',
      fest_4_desc: '24-საათიანი დღის სინათლე. გრძელი ხის სუფრები დამარინადებული ქაშაყით, ახალი კარტოფილით, კამით, არაჟნითა და ველური მარწყვით.',
      mani_1_title: 'უძველესი ტერუარები და ჯიშები',
      mani_1_desc: 'ბიომრავალფეროვნების დაცვა: ენდემური ხორბლის ჯიშები, უნიკალური ვაზის ენდემები და ალპური საძოვრები.',
      mani_2_title: 'ოსტატობის ხელოვნება',
      mani_2_desc: 'პატივისცემა იმ მესაქონლეების, პურის მცხობელების, ქვევრის ოსტატებისა და ყველის მწარმოებლების მიმართ, რომლებიც უარს ამბობენ ინდუსტრიულ სისწრაფეზე.',
      mani_3_title: 'სუფრის ერთიანობა',
      mani_3_desc: 'კვება ევროპის ემოციური ენაა. სუფრა არის ადგილი, სადაც მოგონებები ცოცხლდება და უცნობები მეგობრები ხდებიან.',
      almanac_badge: 'საჩუქარი გასტრონომიის მოყვარულთათვის',
      almanac_title: 'მიიღეთ 2026 წლის ევროპული კულინარიული ალმანახი',
      almanac_subtitle: 'ელეგანტური ციფრული გზამკვლევი 40 წინაპართა რეცეპტით, მოსავლის თარიღებით, სომელიეს რუკებითა და კულინარიული ისტორიებით.',
      almanac_ph: 'შეიყვანეთ თქვენი ელ-ფოსტა...',
      almanac_btn: 'ალმანახის მიღება',
      footer_bio: 'ეძღვნება ევროპის ცოცხალი კულინარიული ტრადიციების, ტერუარებისა და სტუმართმოყვარეობის პატივისცემასა და შენარჩუნებას.',
      footer_col_regions: 'რეგიონები',
      footer_col_traditions: 'ტრადიციები',
      footer_col_heritage: 'მემკვიდრეობა',
      footer_rights: 'ყველა ევროპული კულინარიული ტრადიცია წარმოდგენილია უდიდესი პატივისცემით.',
      modal_tab_story: 'ტრადიცია და ამბავი',
      modal_tab_ingredients: 'ინგრედიენტები',
      modal_tab_steps: 'მომზადება და ტაიმერი',
      modal_tab_pairing: 'სომელიეს რჩევა',
      modal_etiquette: 'კულინარიული ეტიკეტი და რიტუალი:',
      modal_checklist_hint: 'შეეხეთ ინგრედიენტს მის მოსანიშნად:',
      timer_title: 'სამზარეულოს ტაიმერი',
      tasting_book_title: 'თქვენი სადეგუსტაციო წიგნი',
      tasting_book_desc: 'თქვენ მიერ შერჩეული ევროპული კერძები მოსამზადებლად და დასაგემოვნებლად.',
      btn_view_recipe: 'იხილეთ რეცეპტი და ტრადიცია',
      saved_empty: 'თქვენი სადეგუსტაციო წიგნი ცარიელია. შეინახეთ კერძები ბარათზე სანიშნის ღილაკით!',
      nav_connect: 'დაკავშირება & ჯავშანი',
      conn_badge: 'კულინარიული კონსიერჟი & დაკავშირება',
      conn_title_1: 'დაუკავშირდით ევროპელ ოსტატებს &',
      conn_title_2: 'დაჯავშნეთ თქვენი სუფრა',
      conn_subtitle: 'გეგმავთ ტრადიციულ ქართულ სუფრას, ტოსკანის ვენახების დეგუსტაციას თუ საავტორო მასტერკლასს — დაუკავშირდით ჩვენს კულინარიულ კურატორებს მთელი ევროპის მასშტაბით.',
      conn_name_label: 'თქვენი სახელი და გვარი',
      conn_name_ph: 'მაგ. ნინო კახაძე',
      conn_email_label: 'ელ-ფოსტის მისამართი',
      conn_email_ph: 'მაგ. nino@example.com',
      conn_exp_label: 'კულინარიული გამოცდილება',
      exp_supra: 'ქართული ტრადიციული სუფრა (თბილისი / კახეთი)',
      exp_tuscany: 'ტოსკანური ღვინო და ტრიუფელი (ფლორენცია / სიენა)',
      exp_paris: 'ფრანგული გრან კრიუ და მაღალი სამზარეულო (პარიზი / ლიონი)',
      exp_nordic: 'სკანდინავიური ველური ბუნება და შებოლილი თევზი (კოპენჰაგენი)',
      exp_alpine: 'შვეიცარიული ალპური ფონდიუ ბუხართან (ცერმატი / ვალე)',
      exp_artisan: 'ოსტატებთან თანამშრომლობა / ზოგადი კავშირი',
      conn_guests_label: 'სტუმრების რაოდენობა',
      guest_2: 'მყუდრო სუფრა (2 სტუმარი)',
      guest_4: 'მეგობრები / ოჯახი (4 სტუმარი)',
      guest_small: 'განცალკევებული დარბაზი (6–10 სტუმარი)',
      guest_large: 'დიდი სუფრა / ბანკეტი (12+ სტუმარი)',
      conn_date_label: 'სასურველი თარიღი',
      conn_somm_label: 'სომელიეს არჩევანი',
      somm_opt_1: '8,000 წლოვანი ქვევრის ქარვისფერი და საფერავი',
      somm_opt_2: 'ევროპული გრან კრიუ და ბიოდინამიკური ტერუარები',
      somm_opt_3: 'ბოტანიკური ფერმენტაცია და უალკოჰოლო შეხამება',
      somm_opt_4: 'შეფ-მზარეულისა და სომელიეს ინდივიდუალური არჩევანი',
      conn_notes_label: 'სპეციალური მოთხოვნები, დიეტური პრეფერენციები',
      conn_notes_ph: 'გაგვიზიარეთ თქვენი სურვილები, საზეიმო მიზეზი ან შეკითხვები...',
      conn_submit_btn: 'ჯავშნის დადასტურება & დაკავშირება',
      concierge_title: 'ევროპის კონსიერჟი და სომელიეს სამსახური',
      concierge_online: 'ხაზზეა • პასუხის საშუალო დრო < 15 წთ',
      atelier_tbilisi_addr: 'ბეთლემის უბანი 8, ძველი თბილისი\nსაქართველო (ღვინის სამშობლო)',
      atelier_florence_addr: 'სანტო სპირიტო 12, ოლტრარნო\nფლორენცია, ტოსკანა, იტალია',
      atelier_paris_addr: 'გასტრონომიის ქ. 4, მე-6 ოლქი\nპარიზი, საფრანგეთი',
      atelier_nordic_addr: 'ნიჰავნის სანაპირო 19\nკოპენჰაგენი, დანია',
      social_title: 'შემოუერთდით კულინარიულ საზოგადოებას',
      voucher_badge: 'ევროპული კულინარიული პასპორტი',
      voucher_title: 'ჯავშანი წარმატებით დარეგისტრირდა!',
      voucher_desc: 'თქვენი მოთხოვნა გადაეცა ჩვენს მთავარ სომელიესა და კულინარიულ კურატორს.',
      voucher_guest: 'სტუმრის სახელი',
      voucher_experience: 'გამოცდილება',
      voucher_date: 'თარიღი',
      voucher_party: 'სტუმრები',
      voucher_print: 'ვაუჩერის ბეჭდვა',
      voucher_done: 'დასრულება'
    }
  };

  // =========================================================================
  // 6. APPLICATION STATE
  // =========================================================================
  const state = {
    lang: 'en', // 'en' or 'ka'
    currentFilter: 'all',
    searchQuery: '',
    soundActive: false,
    audioCtx: null,
    ambientGain: null,
    savedDishes: JSON.parse(localStorage.getItem('savor_europe_saved') || '[]'),
    quizStep: 0,
    quizAnswers: [],
    timerInterval: null,
    timerSecondsLeft: 0,
    timerIsRunning: false
  };

  // =========================================================================
  // 7. AMBIENT BISTRO SOUNDSCAPE (SYNTHETIC WEB AUDIO)
  // =========================================================================
  function initAmbience() {
    if (state.audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new AudioContext();

      // Master Gain
      state.ambientGain = state.audioCtx.createGain();
      state.ambientGain.gain.setValueAtTime(0.001, state.audioCtx.currentTime);
      state.ambientGain.connect(state.audioCtx.destination);

      // 1. Warm Fireplace Hearth Embers (Filtered Pink Noise)
      const bufferSize = state.audioCtx.sampleRate * 2;
      const noiseBuffer = state.audioCtx.createBuffer(1, bufferSize, state.audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }
      const whiteNoise = state.audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const hearthFilter = state.audioCtx.createBiquadFilter();
      hearthFilter.type = 'lowpass';
      hearthFilter.frequency.setValueAtTime(380, state.audioCtx.currentTime);

      whiteNoise.connect(hearthFilter);
      hearthFilter.connect(state.ambientGain);
      whiteNoise.start();

      // 2. Soft Harmonic Acoustic Chime (Warm Tuscan Tavern Ambience)
      const osc1 = state.audioCtx.createOscillator();
      const osc2 = state.audioCtx.createOscillator();
      const oscGain = state.audioCtx.createGain();
      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(196, state.audioCtx.currentTime); // G3
      osc2.frequency.setValueAtTime(293.66, state.audioCtx.currentTime); // D4
      oscGain.gain.setValueAtTime(0.015, state.audioCtx.currentTime);

      osc1.connect(oscGain);
      osc2.connect(oscGain);
      oscGain.connect(state.ambientGain);
      osc1.start();
      osc2.start();

    } catch (e) {
      console.warn('Web Audio not supported or blocked:', e);
    }
  }

  function toggleSound() {
    initAmbience();
    if (!state.audioCtx) return;

    if (state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }

    state.soundActive = !state.soundActive;
    const soundToggle = document.getElementById('soundToggle');

    if (state.soundActive) {
      state.ambientGain.gain.setTargetAtTime(0.2, state.audioCtx.currentTime, 1);
      soundToggle.classList.add('playing');
      showToast(state.lang === 'ka' ? 'ტავერნის ამბიენსი ჩართულია 🍷' : 'Bistro Ambience Activated 🍷');
    } else {
      state.ambientGain.gain.setTargetAtTime(0.0001, state.audioCtx.currentTime, 0.5);
      soundToggle.classList.remove('playing');
      showToast(state.lang === 'ka' ? 'ამბიენსი შეჩერებულია' : 'Ambience Muted');
    }
  }

  // =========================================================================
  // 8. RENDER DISHES GRID
  // =========================================================================
  function renderDishes() {
    const grid = document.getElementById('dishesGrid');
    if (!grid) return;

    const filtered = DISHES_DATA.filter(dish => {
      const matchFilter = (state.currentFilter === 'all' || dish.category === state.currentFilter);
      if (!matchFilter) return false;

      if (!state.searchQuery) return true;
      const q = state.searchQuery.toLowerCase();
      const title = (state.lang === 'ka' ? dish.titleKa : dish.titleEn).toLowerCase();
      const desc = (state.lang === 'ka' ? dish.descKa : dish.descEn).toLowerCase();
      const region = (state.lang === 'ka' ? dish.regionKa : dish.regionEn).toLowerCase();
      const country = (state.lang === 'ka' ? dish.countryKa : dish.country).toLowerCase();

      return title.includes(q) || desc.includes(q) || region.includes(q) || country.includes(q);
    });

    // Update count
    const countEl = document.getElementById('resultsCount');
    if (countEl) {
      if (state.lang === 'ka') {
        countEl.textContent = `ნაჩვენებია ${filtered.length} კულინარიული შედევრი`;
      } else {
        countEl.textContent = `Showing ${filtered.length} Signature Culinary Masterpieces`;
      }
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-wheat-awn-circle-exclamation" style="font-size: 3rem; color: var(--gold-light); margin-bottom: 16px;"></i>
          <h3>${state.lang === 'ka' ? 'კერძი ვერ მოიძებნა' : 'No dishes matched your criteria'}</h3>
          <p>${state.lang === 'ka' ? 'სცადეთ სხვა საძიებო სიტყვა ან შეცვალეთ ფილტრი.' : 'Try another search term or reset your category filter.'}</p>
        </div>
      `;
      return;
    }

    filtered.forEach(dish => {
      const isSaved = state.savedDishes.includes(dish.id);
      const title = state.lang === 'ka' ? dish.titleKa : dish.titleEn;
      const region = state.lang === 'ka' ? dish.regionKa : dish.regionEn;
      const desc = state.lang === 'ka' ? dish.descKa : dish.descEn;
      const country = state.lang === 'ka' ? dish.countryKa : dish.country;
      const heritageTag = state.lang === 'ka' ? dish.heritageTagKa : dish.heritageTag;
      const tags = state.lang === 'ka' ? dish.flavorTagsKa : dish.flavorTags;
      const btnViewText = state.lang === 'ka' ? 'იხილეთ რეცეპტი და ტრადიცია' : 'View Tradition & Recipe';

      const card = document.createElement('article');
      card.className = 'dish-card';
      card.innerHTML = `
        <div class="dish-image-wrap">
          <img src="${dish.image}" alt="${title}" class="dish-img" loading="lazy">
          <span class="dish-badge-origin">
            <span>${dish.flag}</span>
            <span>${country}</span>
          </span>
          <span class="dish-heritage-tag">${heritageTag}</span>
          <button class="btn-card-save ${isSaved ? 'saved' : ''}" data-id="${dish.id}" aria-label="Save Recipe" title="Save to Tasting Book">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-bookmark"></i>
          </button>
        </div>
        <div class="dish-content">
          <div class="dish-region-meta">
            <i class="fa-solid fa-location-dot"></i>
            <span>${region}</span>
          </div>
          <h3 class="dish-title">${title}</h3>
          <p class="dish-description">${desc}</p>
          <div class="dish-flavor-tags">
            ${tags.map(t => `<span class="flavor-tag">${t}</span>`).join('')}
          </div>
          <div class="dish-card-footer">
            <div class="dish-cooking-time">
              <i class="fa-regular fa-clock"></i>
              <span>${dish.cookingTime}</span>
            </div>
            <button class="btn-view-recipe" data-recipe-id="${dish.id}">
              <span>${btnViewText}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // Attach card event listeners
    grid.querySelectorAll('.btn-card-save').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSaveDish(btn.dataset.id);
      });
    });

    grid.querySelectorAll('.btn-view-recipe').forEach(btn => {
      btn.addEventListener('click', () => {
        openRecipeModal(btn.dataset.recipeId);
      });
    });
  }

  // =========================================================================
  // 9. DISH & RECIPE MODAL SYSTEM
  // =========================================================================
  function openRecipeModal(dishId) {
    const dish = DISHES_DATA.find(d => d.id === dishId);
    if (!dish) return;

    const modal = document.getElementById('recipeModal');
    const heroImg = document.getElementById('modalHeroImg');
    const titleEl = document.getElementById('modalDishTitle');
    const countryEl = document.getElementById('modalCountryBadge');
    const heritageEl = document.getElementById('modalHeritageTag');
    const storyText = document.getElementById('modalStoryText');
    const etiquetteText = document.getElementById('modalEtiquetteText');
    const ingredientsList = document.getElementById('modalIngredientsList');
    const stepsList = document.getElementById('modalStepsList');
    const timerDisplay = document.getElementById('timerDisplay');
    const wineTitle = document.getElementById('modalWineTitle');
    const wineNotes = document.getElementById('modalWineNotes');

    const title = state.lang === 'ka' ? dish.titleKa : dish.titleEn;
    const country = state.lang === 'ka' ? dish.countryKa : dish.country;
    const heritageTag = state.lang === 'ka' ? dish.heritageTagKa : dish.heritageTag;
    const story = state.lang === 'ka' ? dish.storyKa : dish.storyEn;
    const etiquette = state.lang === 'ka' ? dish.etiquetteKa : dish.etiquetteEn;
    const ingredients = state.lang === 'ka' ? dish.ingredientsKa : dish.ingredientsEn;
    const steps = state.lang === 'ka' ? (dish.stepsKa || dish.stepsEn) : dish.stepsEn;
    const wineT = state.lang === 'ka' ? (dish.wineTitleKa || dish.wineTitle) : dish.wineTitle;
    const wineN = state.lang === 'ka' ? (dish.wineNotesKa || dish.wineNotesEn) : dish.wineNotesEn;

    heroImg.src = dish.image;
    heroImg.alt = title;
    titleEl.textContent = title;
    countryEl.innerHTML = `${dish.flag} ${country}`;
    heritageEl.textContent = heritageTag;
    storyText.textContent = story;
    etiquetteText.textContent = etiquette;

    // Ingredients
    ingredientsList.innerHTML = ingredients.map(ing => `
      <li class="ingredient-item">
        <i class="fa-regular fa-square"></i>
        <span>${ing}</span>
      </li>
    `).join('');

    ingredientsList.querySelectorAll('.ingredient-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('checked');
        const icon = item.querySelector('i');
        if (item.classList.contains('checked')) {
          icon.className = 'fa-solid fa-square-check text-gold';
        } else {
          icon.className = 'fa-regular fa-square';
        }
      });
    });

    // Steps
    if (steps && steps.length) {
      stepsList.innerHTML = steps.map((step, idx) => `
        <div class="recipe-step-item">
          <div class="step-number">${idx + 1}</div>
          <div class="step-text">
            <h5>${step.title}</h5>
            <p>${step.text}</p>
          </div>
        </div>
      `).join('');
    } else {
      stepsList.innerHTML = `<p style="color: var(--text-muted);">${state.lang === 'ka' ? 'დამატებითი ნაბიჯები მალე დაემატება.' : 'Step-by-step instructions available in the master almanac.'}</p>`;
    }

    // Reset and setup timer
    resetTimer(dish.timerMinutes || 15);
    timerDisplay.textContent = formatTime(state.timerSecondsLeft);

    // Wine
    wineTitle.textContent = wineT || 'Regional Terroir Vintage Pairing';
    wineNotes.textContent = wineN || 'Selected to pair with the dominant flavor notes of this recipe.';

    // Switch to first tab
    switchModalTab('story');

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeRecipeModal() {
    const modal = document.getElementById('recipeModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    pauseTimer();
  }

  function switchModalTab(targetTab) {
    const tabs = document.querySelectorAll('.modal-tab-btn');
    const panes = document.querySelectorAll('.modal-tab-pane');

    tabs.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === targetTab);
    });

    panes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `modal${capitalize(targetTab)}Pane`);
    });
  }

  // =========================================================================
  // 10. INTERACTIVE KITCHEN TIMER
  // =========================================================================
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function resetTimer(minutes) {
    pauseTimer();
    state.timerSecondsLeft = (minutes || 15) * 60;
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) timerDisplay.textContent = formatTime(state.timerSecondsLeft);
    const startBtn = document.getElementById('timerStartBtn');
    if (startBtn) startBtn.textContent = 'Start';
  }

  function toggleTimer() {
    const startBtn = document.getElementById('timerStartBtn');
    if (state.timerIsRunning) {
      pauseTimer();
      startBtn.textContent = 'Resume';
    } else {
      startTimer();
      startBtn.textContent = 'Pause';
    }
  }

  function startTimer() {
    if (state.timerIsRunning) return;
    state.timerIsRunning = true;
    state.timerInterval = setInterval(() => {
      if (state.timerSecondsLeft > 0) {
        state.timerSecondsLeft--;
        document.getElementById('timerDisplay').textContent = formatTime(state.timerSecondsLeft);
      } else {
        pauseTimer();
        playChime();
        showToast(state.lang === 'ka' ? '🔔 კერძი მზად არის! გემრიელად მიირთვით!' : '🔔 Cooking timer finished! Savor your creation!');
        document.getElementById('timerStartBtn').textContent = 'Start';
      }
    }, 1000);
  }

  function pauseTimer() {
    state.timerIsRunning = false;
    clearInterval(state.timerInterval);
  }

  function playChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 1.2);
    } catch (e) {
      // Audio not permitted
    }
  }

  // =========================================================================
  // 11. TASTING BOOK (SAVED RECIPES)
  // =========================================================================
  function updateSavedCount() {
    const badge = document.getElementById('savedCount');
    if (badge) badge.textContent = state.savedDishes.length;
  }

  function toggleSaveDish(dishId) {
    const index = state.savedDishes.indexOf(dishId);
    if (index > -1) {
      state.savedDishes.splice(index, 1);
      showToast(state.lang === 'ka' ? 'კერძი ამოღებულია სადეგუსტაციო წიგნიდან' : 'Removed from Tasting Book');
    } else {
      state.savedDishes.push(dishId);
      showToast(state.lang === 'ka' ? 'კერძი შენახულია სადეგუსტაციო წიგნში! 🔖' : 'Saved to Tasting Book! 🔖');
    }
    localStorage.setItem('savor_europe_saved', JSON.stringify(state.savedDishes));
    updateSavedCount();
    renderDishes();
    renderSavedModal();
  }

  function renderSavedModal() {
    const container = document.getElementById('savedListContainer');
    if (!container) return;

    if (state.savedDishes.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <i class="fa-regular fa-bookmark" style="font-size: 2.5rem; color: var(--gold-light); margin-bottom: 12px;"></i>
          <p>${I18N[state.lang].saved_empty}</p>
        </div>
      `;
      return;
    }

    const savedItems = DISHES_DATA.filter(d => state.savedDishes.includes(d.id));
    container.innerHTML = savedItems.map(dish => {
      const title = state.lang === 'ka' ? dish.titleKa : dish.titleEn;
      const country = state.lang === 'ka' ? dish.countryKa : dish.country;
      return `
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); margin-bottom: 10px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <img src="${dish.image}" alt="${title}" style="width: 52px; height: 52px; object-fit: cover; border-radius: 8px;">
            <div>
              <h5 style="color: #fff; font-size: 1rem; margin-bottom: 2px;">${title}</h5>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${dish.flag} ${country} • ${dish.cookingTime}</span>
            </div>
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-secondary" onclick="window.savorEurope.openRecipeModal('${dish.id}')" style="padding: 6px 12px; font-size: 0.82rem;">
              ${state.lang === 'ka' ? 'ნახვა' : 'View'}
            </button>
            <button class="btn-secondary" onclick="window.savorEurope.toggleSaveDish('${dish.id}')" style="padding: 6px 10px; font-size: 0.82rem; color: #ff6b6b;">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  function openSavedModal() {
    renderSavedModal();
    const modal = document.getElementById('savedModal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSavedModal() {
    const modal = document.getElementById('savedModal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // =========================================================================
  // 12. SOMMELIER & TERROIR STUDIO LOGIC
  // =========================================================================
  function renderPairing(categoryKey) {
    const contentBox = document.getElementById('pairingContent');
    const data = PAIRING_DATA[categoryKey] || PAIRING_DATA.wine;
    if (!contentBox) return;

    const title = state.lang === 'ka' ? data.titleKa : data.titleEn;
    const desc = state.lang === 'ka' ? data.descKa : data.descEn;

    contentBox.innerHTML = `
      <div class="pairing-col-left">
        <div class="pairing-dish-badge">${state.lang === 'ka' ? 'ტერუარის ჰარმონია' : 'Terroir Harmony'}</div>
        <h3 class="pairing-dish-headline">${title}</h3>
        <p class="pairing-description">${desc}</p>
        <div style="display: flex; gap: 10px; align-items: center; color: var(--gold-light); font-size: 0.9rem;">
          <i class="fa-solid fa-certificate"></i>
          <span>${state.lang === 'ka' ? 'AOC / PDO სერტიფიცირებული' : 'Protected Designation of Origin (PDO)'}</span>
        </div>
      </div>
      <div class="pairing-col-right">
        <h4 style="font-size: 1.1rem; color: #fff; margin-bottom: 16px;">
          ${state.lang === 'ka' ? 'სომელიეს რეკომენდაციები:' : 'Sommelier Pairings:'}
        </h4>
        <div class="sommelier-recommendations-list">
          ${data.recs.map(rec => {
            const name = state.lang === 'ka' ? rec.nameKa : rec.name;
            const sub = state.lang === 'ka' ? rec.subKa : rec.sub;
            return `
              <div class="recommendation-card">
                <div class="rec-title-group">
                  <h5>${name}</h5>
                  <span>${sub}</span>
                </div>
                <div class="rec-match-rating">
                  <i class="fa-solid fa-star"></i>
                  <span>${rec.match}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 13. QUIZ ENGINE
  // =========================================================================
  function renderQuizQuestion() {
    const qData = QUIZ_QUESTIONS[state.quizStep];
    const qWrap = document.getElementById('quizQuestionWrap');
    const rBox = document.getElementById('quizResultBox');
    const counter = document.getElementById('quizStepCounter');
    const title = document.getElementById('quizQuestionTitle');
    const grid = document.getElementById('quizOptionsGrid');
    const pBar = document.getElementById('quizProgressBar');
    const prevBtn = document.getElementById('quizPrevBtn');

    if (!qData) {
      renderQuizResult();
      return;
    }

    qWrap.style.display = 'block';
    rBox.style.display = 'none';

    pBar.style.width = `${((state.quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%`;
    counter.textContent = state.lang === 'ka' 
      ? `კითხვა ${state.quizStep + 1} 4-დან`
      : `Question ${state.quizStep + 1} of ${QUIZ_QUESTIONS.length}`;

    title.textContent = state.lang === 'ka' ? qData.questionKa : qData.questionEn;
    prevBtn.style.visibility = state.quizStep > 0 ? 'visible' : 'hidden';

    grid.innerHTML = qData.options.map(opt => {
      const optTitle = state.lang === 'ka' ? opt.titleKa : opt.titleEn;
      return `
        <div class="quiz-option-card" data-archetype="${opt.archetype}">
          <i class="fa-solid ${opt.icon} quiz-option-icon"></i>
          <div class="quiz-option-info">
            <h5>${optTitle}</h5>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.quiz-option-card').forEach(card => {
      card.addEventListener('click', () => {
        state.quizAnswers[state.quizStep] = card.dataset.archetype;
        state.quizStep++;
        renderQuizQuestion();
      });
    });
  }

  function renderQuizResult() {
    const qWrap = document.getElementById('quizQuestionWrap');
    const rBox = document.getElementById('quizResultBox');
    const pBar = document.getElementById('quizProgressBar');

    qWrap.style.display = 'none';
    rBox.style.display = 'block';
    pBar.style.width = '100%';

    // Count archetype votes
    const counts = {};
    state.quizAnswers.forEach(arch => {
      counts[arch] = (counts[arch] || 0) + 1;
    });

    let bestArch = 'georgian';
    let maxVote = -1;
    for (const arch in counts) {
      if (counts[arch] > maxVote) {
        maxVote = counts[arch];
        bestArch = arch;
      }
    }

    const archData = ARCHETYPES_DATA[bestArch] || ARCHETYPES_DATA.georgian;
    const dish = DISHES_DATA.find(d => d.id === archData.dishId) || DISHES_DATA[0];

    const crestEl = document.getElementById('quizResultCrest');
    const titleEl = document.getElementById('quizResultArchetype');
    const descEl = document.getElementById('quizResultDesc');
    const dishBox = document.getElementById('quizSignatureDish');

    crestEl.innerHTML = `<i class="fa-solid ${archData.crest}"></i>`;
    titleEl.textContent = state.lang === 'ka' ? archData.titleKa : archData.titleEn;
    descEl.textContent = state.lang === 'ka' ? archData.descKa : archData.descEn;

    const dishTitle = state.lang === 'ka' ? dish.titleKa : dish.titleEn;
    dishBox.innerHTML = `
      <img src="${dish.image}" alt="${dishTitle}" style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 2px solid var(--gold-primary);">
      <div style="text-align: left;">
        <span style="font-size: 0.75rem; color: var(--gold-light); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700;">
          ${state.lang === 'ka' ? 'თქვენი საკულტო კერძი:' : 'Your Signature Dish:'}
        </span>
        <h4 style="font-size: 1.15rem; color: #fff; margin-top: 2px;">${dishTitle}</h4>
        <button class="btn-view-recipe" onclick="window.savorEurope.openRecipeModal('${dish.id}')" style="margin-top: 4px; font-size: 0.85rem;">
          ${state.lang === 'ka' ? 'მომზადების წესი' : 'View Master Recipe'} <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    playChime();
  }

  function retakeQuiz() {
    state.quizStep = 0;
    state.quizAnswers = [];
    renderQuizQuestion();
  }

  // =========================================================================
  // 14. BILINGUAL LANGUAGE SWITCHER
  // =========================================================================
  function setLanguage(lang) {
    state.lang = lang;
    const dict = I18N[lang] || I18N.en;

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // Update Language Toggle Button visual
    const langBtn = document.getElementById('langToggle');
    if (lang === 'ka') {
      langBtn.querySelector('.flag-icon').textContent = '🇬🇧';
      langBtn.querySelector('.lang-text').textContent = 'English';
      langBtn.title = 'Switch language to English';
      document.documentElement.lang = 'ka';
    } else {
      langBtn.querySelector('.flag-icon').textContent = '🇬🇪';
      langBtn.querySelector('.lang-text').textContent = 'ქართული';
      langBtn.title = 'შეცვალეთ ენა ქართულად';
      document.documentElement.lang = 'en';
    }

    // Re-render dynamic sections
    renderDishes();
    renderPairing(document.querySelector('.pairing-category-btn.active')?.dataset.pairing || 'wine');
    renderQuizQuestion();
    updateLivingTraditionVisual();

    showToast(lang === 'ka' ? 'ენა შეიცვალა ქართულად 🇬🇪' : 'Language switched to English 🇬🇧');
  }

  function toggleLanguage() {
    setLanguage(state.lang === 'en' ? 'ka' : 'en');
  }

  // =========================================================================
  // 15. LIVING TRADITION SHOWCASE
  // =========================================================================
  function updateLivingTraditionVisual() {
    const activeNav = document.querySelector('.tradition-nav-item.active');
    if (!activeNav) return;
    const traditionKey = activeNav.dataset.tradition;
    const data = TRADITIONS_DATA[traditionKey];
    if (!data) return;

    const img = document.getElementById('traditionImg');
    const headline = document.getElementById('traditionHeadline');
    const caption = document.getElementById('traditionCaption');
    const snippet = document.getElementById('traditionSnippet');

    img.style.opacity = '0';
    setTimeout(() => {
      img.src = data.image;
      img.style.opacity = '1';
    }, 200);

    headline.textContent = state.lang === 'ka' ? data.headlineKa : data.headlineEn;
    caption.textContent = state.lang === 'ka' ? data.captionKa : data.captionEn;
    snippet.textContent = state.lang === 'ka' ? data.snippetKa : data.snippetEn;
  }

  // =========================================================================
  // 16. TOAST NOTIFICATIONS
  // =========================================================================
  let toastTimeout = null;
  function showToast(msg) {
    const toast = document.getElementById('toastNotice');
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = msg;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // =========================================================================
  // 17. ALMANAC FORM SUBMISSION
  // =========================================================================
  function handleAlmanacSubmit() {
    const emailInput = document.getElementById('almanacEmail');
    if (!emailInput || !emailInput.value) return;

    showToast(state.lang === 'ka' 
      ? '📖 ალმანახი წარმატებით გაიგზავნა! შეამოწმეთ ელ-ფოსტა.'
      : '📖 2026 Almanac sent successfully! Check your inbox.');
    emailInput.value = '';
    playChime();
  }

  // =========================================================================
  // 17.1 CONNECT & TABLE RESERVATION SUBMISSION
  // =========================================================================
  function handleConnectSubmit() {
    const nameInput = document.getElementById('guestName');
    const emailInput = document.getElementById('guestEmail');
    const expSelect = document.getElementById('experienceType');
    const guestsSelect = document.getElementById('guestCount');
    const dateInput = document.getElementById('reserveDate');
    const notesInput = document.getElementById('specialNotes');

    if (!nameInput || !emailInput || !nameInput.value || !emailInput.value) {
      showToast(state.lang === 'ka' ? 'გთხოვთ შეავსოთ სახელი და ელ-ფოსტა' : 'Please provide your name and email');
      return;
    }

    const guestName = nameInput.value;
    const expText = expSelect.options[expSelect.selectedIndex].text;
    const guestsText = guestsSelect.options[guestsSelect.selectedIndex].text;
    const dateText = dateInput.value || (new Date().toISOString().split('T')[0]);

    // Unique reference generator
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const refCode = `EUR-2026-${randomCode}`;

    // Populate Voucher Modal
    const voucherModal = document.getElementById('voucherModal');
    document.getElementById('voucherGuestName').textContent = guestName;
    document.getElementById('voucherExperience').textContent = expText;
    document.getElementById('voucherDate').textContent = dateText;
    document.getElementById('voucherParty').textContent = guestsText;
    document.getElementById('voucherRefCode').textContent = refCode;

    voucherModal.classList.add('active');
    voucherModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    playChime();
    showToast(state.lang === 'ka' 
      ? '✨ თქვენი ჯავშანი მიღებულია! ვაუჩერი გენერირებულია.' 
      : '✨ Connection request received! Experience voucher generated.');

    // Clear form
    nameInput.value = '';
    emailInput.value = '';
    if (notesInput) notesInput.value = '';
  }

  function closeVoucherModal() {
    const voucherModal = document.getElementById('voucherModal');
    if (voucherModal) {
      voucherModal.classList.remove('active');
      voucherModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // =========================================================================
  // 18. AMBIENT PARTICLES CANVAS
  // =========================================================================
  function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -Math.random() * 0.5 - 0.2,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#f5d77f';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // =========================================================================
  // 19. INITIALIZATION & EVENT LISTENERS
  // =========================================================================
  function init() {
    // Particles
    initParticles();

    // Render Initial State
    updateSavedCount();
    renderDishes();
    renderPairing('wine');
    renderQuizQuestion();

    // Navbar Scroll Shadow
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Sound Toggle
    document.getElementById('soundToggle')?.addEventListener('click', toggleSound);

    // Language Toggle
    document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

    // Saved Dishes Modal
    document.getElementById('openSavedBtn')?.addEventListener('click', openSavedModal);
    document.getElementById('footerSavedLink')?.addEventListener('click', (e) => {
      e.preventDefault();
      openSavedModal();
    });
    document.getElementById('closeSavedModalBtn')?.addEventListener('click', closeSavedModal);

    // Recipe Modal Close
    document.getElementById('closeRecipeModalBtn')?.addEventListener('click', closeRecipeModal);
    document.getElementById('recipeModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'recipeModal') closeRecipeModal();
    });
    document.getElementById('savedModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'savedModal') closeSavedModal();
    });

    // Modal Tabs
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => switchModalTab(btn.dataset.tab));
    });

    // Kitchen Timer Controls
    document.getElementById('timerStartBtn')?.addEventListener('click', toggleTimer);
    document.getElementById('timerResetBtn')?.addEventListener('click', () => resetTimer(15));

    // Regional Filter Tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.currentFilter = tab.dataset.filter;
        renderDishes();
      });
    });

    // Dish Search Input
    document.getElementById('dishSearchInput')?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderDishes();
    });

    // Living Traditions Navigation Items
    document.querySelectorAll('.tradition-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.tradition-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        updateLivingTraditionVisual();
      });
    });

    // Sommelier Category Buttons
    document.querySelectorAll('.pairing-category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.pairing-category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderPairing(btn.dataset.pairing);
      });
    });

    // Quiz Navigation
    document.getElementById('quizPrevBtn')?.addEventListener('click', () => {
      if (state.quizStep > 0) {
        state.quizStep--;
        renderQuizQuestion();
      }
    });
    document.getElementById('quizRetakeBtn')?.addEventListener('click', retakeQuiz);

    // Scroll to Top Button
    document.getElementById('scrollTopBtn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        const isShown = mobileDrawer.style.display === 'block';
        mobileDrawer.style.display = isShown ? 'none' : 'block';
      });
      document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.style.display = 'none';
        });
      });
    }

    // Voucher Modal controls
    document.getElementById('closeVoucherModalBtn')?.addEventListener('click', closeVoucherModal);
    document.getElementById('voucherDoneBtn')?.addEventListener('click', closeVoucherModal);
    document.getElementById('voucherModal')?.addEventListener('click', (e) => {
      if (e.target.id === 'voucherModal') closeVoucherModal();
    });

    // Keyboard Shortcuts (Esc to close modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeRecipeModal();
        closeSavedModal();
        closeVoucherModal();
      }
    });
  }

  // Expose global methods for inline HTML onclick handlers
  window.savorEurope = {
    openRecipeModal,
    closeRecipeModal,
    toggleSaveDish,
    handleAlmanacSubmit,
    handleConnectSubmit,
    closeVoucherModal
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
