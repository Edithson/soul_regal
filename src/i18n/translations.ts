export type Locale = 'fr' | 'en';

export interface ServiceItem {
  number: string;
  icon: 'basket' | 'store' | 'globe';
  title: string;
  description: string;
  points: string[];
  link: string;
  href: string;
  tone: 'sage' | 'cream' | 'sand';
}

export interface StepItem {
  n: string;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PartnerPoint {
  title: string;
  text: string;
}

export interface Translations {
  locale: Locale;
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogLocale: string;
    schemaLang: string;
  };
  announcement: {
    tagline: string;
  };
  nav: {
    about: string;
    solutions: string;
    method: string;
    partners: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    btnPrimary: string;
    btnSecondary: string;
    proofTitle: string;
    proofText: string;
    stampSub: string;
    stampTitle: string;
    floatingTitle: string;
    floatingSub: string;
    verticalNote: string;
    bottomAlliance: string;
    scrollCue: string;
  };
  introStrip: {
    lead: string;
    items: Array<{ number: string; title: string; text: string }>;
  };
  productBand: {
    label: string;
    items: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    captionTitle: string;
    captionText: string;
    lead: string;
    p1: string;
    p2: string;
    link: string;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: ServiceItem[];
  };
  method: {
    eyebrow: string;
    title: string;
    lead: string;
    button: string;
    steps: StepItem[];
  };
  partners: {
    photoLabelSub: string;
    photoLabelTitle: string;
    eyebrow: string;
    title: string;
    lead: string;
    p1: string;
    points: PartnerPoint[];
    note: string;
    button: string;
  };
  manifesto: {
    quote: string;
    sign: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    lead: string;
    link: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    legalLabel: string;
    whatsappPill: string;
    formHeading: string;
    labelName: string;
    placeholderName: string;
    labelOrg: string;
    placeholderOrg: string;
    labelEmail: string;
    placeholderEmail: string;
    labelPhone: string;
    placeholderPhone: string;
    labelTopic: string;
    topicDefault: string;
    topics: string[];
    labelMessage: string;
    placeholderMessage: string;
    formPrivacy: string;
    submitButton: string;
    submitting: string;
    successMessage: string;
    errorMessage: string;
  };
  footer: {
    taglineSub: string;
    top: string;
    socialLabel: string;
    rights: string;
    dev: string;
  };
  floatingWhatsapp: string;
}

export const translations: Record<Locale, Translations> = {
  fr: {
    locale: 'fr',
    meta: {
      title: 'SOUL REGAL SANS ÉGAL (SRE) — Du champ à votre cuisine | Yaoundé',
      description: 'Approvisionnement en vivres frais et produits agricoles du terroir à Yaoundé. SRE accompagne ménages, restaurants et partenaires dans la recherche et la livraison de denrées de qualité selon leur budget.',
      keywords: 'approvisionnement vivrier Yaoundé, vivres frais Cameroun, fruits et légumes Yaoundé, livraison courses Nkomkana, marché vivrier Cameroun, produits agricoles du terroir, SOUL REGAL SANS ÉGAL, SRE, panier ménage Yaoundé',
      ogLocale: 'fr_CM',
      schemaLang: 'fr-CM',
    },
    announcement: {
      tagline: 'Vivres frais du terroir camerounais · De la terre à votre cuisine',
    },
    nav: {
      about: 'L’esprit SRE',
      solutions: 'Nos formules',
      method: 'Notre savoir-faire',
      partners: 'Partenaires & Terroir',
      cta: 'Échanger sur vos besoins',
    },
    hero: {
      eyebrow: 'SOUL REGAL SANS ÉGAL · YAOUNDÉ',
      title: 'Les trésors de notre terroir,<br /><em>directement dans</em><br /><em>votre cuisine.</em>',
      lead: 'Bien manger commence par la confiance dans ce que la terre offre de plus pur. À Yaoundé, SRE sélectionne pour vous des vivres frais, légumes, tubercules et épices locales, et prend soin de votre approvisionnement selon votre budget.',
      btnPrimary: 'Découvrir nos formules',
      btnSecondary: 'Comprendre notre histoire',
      proofTitle: 'L’exigence du frais au quotidien.',
      proofText: 'Des récoltes choisies avec patience pour nourrir vos familles et sublimer vos tables.',
      stampSub: 'SRE',
      stampTitle: 'DU CHAMP<br />À VOTRE TABLE',
      floatingTitle: 'Sélection attentive',
      floatingSub: 'Adaptée à votre budget',
      verticalNote: 'TERROIR · RIGUEUR · CONFORT',
      bottomAlliance: 'L’ALLIANCE DE LA TERRE ET DU FOYER',
      scrollCue: 'FAITES DÉFILER',
    },
    introStrip: {
      lead: 'L’authenticité du champ.<br /><em>La paix de l’esprit.</em>',
      items: [
        { number: '01', title: 'Proximité humaine', text: 'Valoriser les cultivateurs et circuits locaux.' },
        { number: '02', title: 'Rigueur du choix', text: 'Prendre soin de chaque denrée avec minutie.' },
        { number: '03', title: 'Justesse du prix', text: 'Vous accompagner en respectant votre budget.' },
      ],
    },
    productBand: {
      label: 'CE QUE LA TERRE NOUS OFFRE AU FIL DES SAISONS',
      items: [
        'Légumes feuilles & condiments du pays',
        'Plantains, macabos & tubercules',
        'Fruits gorgés de soleil',
        'Céréales & légumineuses',
        'Épices & aromates traditionnels',
      ],
    },
    about: {
      eyebrow: 'AUX RACINES DE SRE',
      title: 'Réconcilier l’abondance des champs <em>avec le rythme de votre quotidien.</em>',
      captionTitle: 'L’ESPRIT DU TERROIR',
      captionText: 'Nourrir la vie,<br />simplement.',
      lead: 'Au Cameroun, la terre est généreuse, mais trouver chaque semaine des vivres véritablement frais, sains et au juste prix relève souvent d’une épreuve entre poussière, encombrements et marchandages incertains.',
      p1: 'Implantée à Nkomkana, au cœur de Yaoundé, SOUL REGAL SANS ÉGAL est née de ce désir fraternel : offrir à chaque foyer, chaque cuisinier et chaque établissement la certitude de recevoir le meilleur de nos terroirs sans fatigue ni compromis.',
      p2: 'Nous sillonnons les plantations environnantes et les allées vivrières avec patience. Chaque régime de plantain, chaque botte de feuilles fraîches, chaque sac de tubercules est choisi avec le même regard vigilant qu’une mère de famille attentive. Nous veillons sur vos courses pour que vous puissiez vous consacrer à l’essentiel : le plaisir de cuisiner et de partager.',
      link: 'Découvrir notre savoir-faire',
    },
    services: {
      eyebrow: 'NOS FORMULES D’APPROVISIONNEMENT',
      title: 'Une attention sur-mesure.<br /><em>Trois manières de vous accompagner.</em>',
      lead: 'Que vous cuisiniez pour quelques convives ou pour des centaines de couverts, notre engagement demeure le même : la fraîcheur absolue et le respect scrupuleux de votre budget.',
      items: [
        {
          number: '01',
          icon: 'basket',
          title: 'Pour les ménages & familles',
          description: 'Retrouvez le plaisir des repas faits maison sans la fatigue des marchés bondés. Nous sélectionnons pour vous les meilleurs vivres frais — légumes feuilles, tubercules, fruits mûris au soleil et épices du pays — selon vos préférences familiales et votre budget.',
          points: [
            'Listes de courses sur-mesure pour votre foyer',
            'Sélection minutieuse des calibres et de la fraîcheur',
            'Livraison douce et soignée devant votre porte',
          ],
          link: 'Composer mon panier familial',
          href: '#contact',
          tone: 'sage',
        },
        {
          number: '02',
          icon: 'store',
          title: 'Pour les restaurants & traiteurs',
          description: 'La qualité constante de vos assiettes repose sur la noblesse de vos ingrédients. Nous approvisionnons vos fourneaux en denrées vivrières saines, triées avec rigueur et livrées selon vos horaires de service et vos volumes d’activité.',
          points: [
            'Approvisionnements ponctuels ou réguliers',
            'Calibres homogènes et régularité des arrivages',
            'Clarté de la facturation et ponctualité logistique',
          ],
          link: 'Organiser nos approvisionnements',
          href: '#contact',
          tone: 'cream',
        },
        {
          number: '03',
          icon: 'globe',
          title: 'Pour les ONG & partenaires',
          description: 'Un relais de confiance ancré sur le terrain pour mobiliser les producteurs locaux, consolider d’importants volumes de denrées et préparer vos commandes dans le cadre de programmes d’assistance, d’alimentation ou d’opérations logistiques.',
          points: [
            'Sourcing direct auprès des filières agricoles locales',
            'Tri, pesée et conditionnement adaptés au cahier des charges',
            'Coordination logistique transparente et responsable',
          ],
          link: 'Échanger sur un partenariat de terrain',
          href: '#partenaires',
          tone: 'sand',
        },
      ],
    },
    method: {
      eyebrow: 'DE LA TERRE À VOTRE TABLE',
      title: 'Une démarche limpide,<br /><em>fondée sur la parole donnée.</em>',
      lead: 'Nous croyons qu’un bon repas s’enracine dans la clarté des échanges. De votre demande à l’arrivée du panier, chaque geste est guidé par le respect de votre confiance et la fraîcheur des récoltes.',
      button: 'Présenter votre besoin',
      steps: [
        {
          n: '01',
          title: 'L’écoute attentive',
          text: 'Vous nous partagez vos habitudes culinaires, les denrées souhaitées, les quantités et l’enveloppe budgétaire dans laquelle vous désirez vous inscrire.',
        },
        {
          n: '02',
          title: 'La quête matinale',
          text: 'Dès les premières heures du jour, nous sélectionnons les récoltes les plus vives auprès de nos producteurs et circuits partenaires de confiance.',
        },
        {
          n: '03',
          title: 'Le soin du tri',
          text: 'Chaque tubercule, fruit ou botte de légumes est inspecté, préparé avec délicatesse et emballé pour préserver toute sa vitalité nourricière.',
        },
        {
          n: '04',
          title: 'L’arrivée en cuisine',
          text: 'Vos vivres vous sont remis à Yaoundé dans le créneau convenu, prêts à embaumer vos marmites et réjouir vos tablées.',
        },
      ],
    },
    partners: {
      photoLabelSub: 'TERRAIN & RACINES LOCALES',
      photoLabelTitle: 'Connaître chaque filière,<br />respecter chaque saison.',
      eyebrow: 'ONG · INSTITUTIONS · ACHETEURS',
      title: 'Le cœur battant du marché local, <em>la rigueur d’un partenaire d’action.</em>',
      lead: 'Du marché de Biyem-Assi aux carrefours vivriers de Nkomkana et Mokolo, nous sommes au contact direct des réalités agricoles du Cameroun.',
      p1: 'Nous connaissons le rythme des saisons, les fluctuations des récoltes et la juste valeur du travail de la terre. Cette immersion permanente permet à SRE d’offrir aux institutions, organisations humanitaires et programmes de développement un appui logistique transparent, fiable et protecteur des producteurs locaux.',
      points: [
        {
          title: 'Cahier des charges sur-mesure',
          text: 'Définition des produits vivriers, volumes requis, calendrier de livraison et critères de qualité.',
        },
        {
          title: 'Consolidation et préparation',
          text: 'Mobilisation des filières locales, pesée rigoureuse, tri soigné et conditionnement protecteur.',
        },
        {
          title: 'Coordination et suivi',
          text: 'Traçabilité des opérations, ponctualité logistique et échanges transparents à chaque étape.',
        },
      ],
      note: 'Chaque partenariat est étudié avec soin selon les capacités mobilisables. Les obligations réglementaires et les pièces administratives spécifiques sont traitées en étroite concertation avec les partenaires habilités.',
      button: 'Présenter un besoin de partenariat',
    },
    manifesto: {
      quote: 'La terre nourrit avec générosité ceux qui la respectent.<br /><em>SRE apporte cette fraîcheur jusqu’au seuil de votre cuisine.</em>',
      sign: 'DU CHAMP À VOTRE CUISINE',
    },
    faq: {
      eyebrow: 'QUESTIONS FRÉQUENTES',
      title: 'Des réponses simples<br /><em>pour votre tranquillité.</em>',
      lead: 'Une interrogation sur nos zones de livraison à Yaoundé, nos sélections du terroir ou la gestion de votre budget ? Voici les repères essentiels.',
      link: 'Une question particulière ? Écrivez-nous',
      items: [
        {
          q: 'Dans quels quartiers de Yaoundé assurez-vous la livraison des vivres frais ?',
          a: 'Notre siège d’activité est établi à Nkomkana. Nous livrons sur l’ensemble des quartiers de Yaoundé (Nkomkana, Bastos, Biyem-Assi, Omnisports, Mendong, Odza, Simbock, Mvan, Dragages, Mermoz, etc.). Chaque tournée est planifiée avec soin pour préserver la fraîcheur de vos produits entre le marché et votre cuisine.',
        },
        {
          q: 'Puis-je commander des produits spécifiques ou des épices traditionnelles du Cameroun ?',
          a: 'Absolument. Qu’il s’agisse de légumes verts traditionnels (ndolè, folon, zom), de tubercules choisis (plantains mûrs ou d’un vert franc, macabos tendres, manioc doux), de fruits de saison ou d’épices emblématiques de nos terroirs (djansang, pèbè, rondelles, poivre blanc de Penja), nous composons votre commande selon votre demande exacte.',
        },
        {
          q: 'Comment SRE adapte-t-elle ses propositions à mon budget ?',
          a: 'La franchise et le respect de votre budget sont au cœur de notre vocation. Avant tout approvisionnement, nous échangeons sur vos priorités et vos moyens. Notre connaissance directe des cours du marché nous permet de vous orienter vers les meilleures denrées de saison, sans dépenses superflues.',
        },
        {
          q: 'Comment passer commande et quel délai est nécessaire ?',
          a: 'Vous pouvez nous joindre par WhatsApp ou appel téléphonique au +237 683 511 935 / +237 694 929 167, ou via le formulaire de contact. Pour vous garantir des vivres sélectionnés à l’aube du jour même, nous vous recommandons de réserver votre commande la veille.',
        },
        {
          q: 'Accompagnez-vous les établissements professionnels et les programmes d’ONG ?',
          a: 'Oui. Pour les restaurateurs, hôtels et cantines, nous étudions des calendriers de livraisons récurrentes avec des critères de calibre bien précis. Pour les organisations humanitaires et acheteurs institutionnels, nous structurons la collecte, le tri et le conditionnement selon les cahiers des charges établis.',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACTEZ L’ÉQUIPE SRE',
      title: 'Confiez-nous<br />vos <em>envies de marché.</em>',
      lead: 'Une liste de courses pour le foyer, un approvisionnement régulier pour vos fourneaux ou une opération d’envergure ? Présentez-nous votre besoin, nous prenons le temps de vous écouter pour vous apporter la réponse la plus juste et adaptée à votre budget.',
      phoneLabel: 'TÉLÉPHONE & WHATSAPP',
      emailLabel: 'COURRIER ÉLECTRONIQUE',
      locationLabel: 'SIÈGE D\'ACTIVITÉ',
      legalLabel: 'RÉFÉRENCES COMMERCIALES',
      whatsappPill: 'WhatsApp direct',
      formHeading: 'VOTRE DEMANDE D’APPROVISIONNEMENT',
      labelName: 'Votre nom complet',
      placeholderName: 'Ex. Marie Talla',
      labelOrg: 'Votre organisation ou foyer',
      placeholderOrg: 'Foyer, Restaurant, Entreprise, ONG…',
      labelEmail: 'Votre adresse e-mail',
      placeholderEmail: 'votre.adresse@domaine.com',
      labelPhone: 'Votre téléphone (WhatsApp de préférence)',
      placeholderPhone: '+237 6...',
      labelTopic: 'Nature de votre besoin',
      topicDefault: 'Précisez votre demande',
      topics: [
        'Panier de courses pour un foyer',
        'Approvisionnement pour restaurant ou traiteur',
        'Partenariat institutionnel ou programme ONG',
        'Commande volumineuse ou denrée spécifique',
        'Autre demande d’information',
      ],
      labelMessage: 'Votre message ou liste de vivres',
      placeholderMessage: 'Indiquez les vivres recherchés, les quantités estimées, votre quartier à Yaoundé ou toute précision utile…',
      formPrivacy: 'Vos coordonnées sont traitées avec soin et servent exclusivement à vous répondre.',
      submitButton: 'Transmettre ma demande',
      submitting: 'Envoi en cours...',
      successMessage: 'Merci ! Votre demande a été enregistrée avec succès. Notre équipe vous recontactera rapidement.',
      errorMessage: 'Une erreur est survenue lors de l’envoi. Vous pouvez nous contacter directement par WhatsApp ou e-mail.',
    },
    footer: {
      taglineSub: 'La confiance à chaque livraison.',
      top: 'RETOUR EN HAUT',
      socialLabel: 'Suivez SRE :',
      rights: 'Tous droits réservés.',
      dev: 'Conception & Développement :',
    },
    floatingWhatsapp: 'WhatsApp direct',
  },
  en: {
    locale: 'en',
    meta: {
      title: 'SOUL REGAL SANS ÉGAL (SRE) — From the field to your kitchen | Yaoundé',
      description: 'Fresh agricultural produce and authentic local staples sourced in Yaoundé, Cameroon. SRE assists households, restaurants, and partners with dependable supply tailored to your budget.',
      keywords: 'agricultural supply Yaoundé, fresh food Cameroon, fruits and vegetables Yaoundé, grocery delivery Nkomkana, produce sourcing Cameroon, SOUL REGAL SANS ÉGAL, SRE, fresh food basket Yaoundé',
      ogLocale: 'en_CM',
      schemaLang: 'en-CM',
    },
    announcement: {
      tagline: 'Fresh Cameroonian farm produce · From the field to your kitchen',
    },
    nav: {
      about: 'The SRE Spirit',
      solutions: 'Our Solutions',
      method: 'Our Know-How',
      partners: 'Partners & Soil',
      cta: 'Discuss Your Needs',
    },
    hero: {
      eyebrow: 'SOUL REGAL SANS ÉGAL · YAOUNDÉ',
      title: 'The bounty of our land,<br /><em>straight to</em><br /><em>your kitchen.</em>',
      lead: 'Wholesome dining begins with trust in what the soil yields in its purest form. In Yaoundé, SRE handpicks fresh produce, vegetables, tubers, and regional spices, curating your supply in harmony with your budget.',
      btnPrimary: 'Explore our solutions',
      btnSecondary: 'Discover our story',
      proofTitle: 'Daily commitment to crisp freshness.',
      proofText: 'Harvests selected with patience to nourish your families and elevate your tables.',
      stampSub: 'SRE',
      stampTitle: 'FROM THE FIELD<br />TO YOUR TABLE',
      floatingTitle: 'Attentive sourcing',
      floatingSub: 'Tailored to your budget',
      verticalNote: 'TERROIR · DILIGENCE · EASE',
      bottomAlliance: 'THE HARMONY OF EARTH AND HOME',
      scrollCue: 'SCROLL DOWN',
    },
    introStrip: {
      lead: 'The truth of the field.<br /><em>Peace of mind.</em>',
      items: [
        { number: '01', title: 'Human closeness', text: 'Empowering local growers and short food supply chains.' },
        { number: '02', title: 'Rigorous selection', text: 'Caring for every single crop with meticulous detail.' },
        { number: '03', title: 'Fair budgeting', text: 'Accompanying your needs in strict respect of your budget.' },
      ],
    },
    productBand: {
      label: 'SEASONAL BOUNTY FROM CAMEROONIAN HARVESTS',
      items: [
        'Leafy greens & native herbs',
        'Plantains, white cocoyam & tubers',
        'Sun-ripened tropical fruits',
        'Grains & nutritious pulses',
        'Traditional heritage spices',
      ],
    },
    about: {
      eyebrow: 'AT SRE’S ROOTS',
      title: 'Reconciling the richness of fertile fields <em>with your daily lifestyle.</em>',
      captionTitle: 'THE SOUL OF THE SOIL',
      captionText: 'Nourishing life,<br />naturally.',
      lead: 'In Cameroon, the soil is generous, yet finding truly fresh, wholesome staples each week at a fair price often turns into an exhausting challenge through dust, crowds, and uncertain haggling.',
      p1: 'Rooted in Nkomkana, in the heart of Yaoundé, SOUL REGAL SANS ÉGAL was born from a fraternal conviction: ensuring that every household, chef, and organization receives the finest harvest of our soil without hassle or compromise.',
      p2: 'We walk through surrounding farming basins and bustling market paths with patience. Every bunch of plantains, every bundle of fresh greens, every sack of tubers is chosen with the watchful eye of a devoted mother. We look after your groceries so you can focus on what matters most: the pleasure of cooking and sharing.',
      link: 'Discover our know-how',
    },
    services: {
      eyebrow: 'OUR SOURCING SOLUTIONS',
      title: 'Tailored attention.<br /><em>Three ways we support your table.</em>',
      lead: 'Whether you cook for a small family gathering or hundreds of diners, our commitment remains steadfast: absolute freshness and strict respect for your budget.',
      items: [
        {
          number: '01',
          icon: 'basket',
          title: 'For Homes & Families',
          description: 'Rediscover the joy of home-cooked meals without the strain of overcrowded markets. We select the finest fresh staples for you — leafy vegetables, tubers, sun-sweetened fruits, and local spices — adapted to your preferences and budget.',
          points: [
            'Bespoke grocery lists for your household',
            'Careful grading for size, tenderness, and peak freshness',
            'Gentle, punctual delivery right to your doorway',
          ],
          link: 'Curate my family basket',
          href: '#contact',
          tone: 'sage',
        },
        {
          number: '02',
          icon: 'store',
          title: 'For Restaurants & Caterers',
          description: 'The consistent excellence of your plates begins with the dignity of your raw ingredients. We supply your kitchen with healthy staples, strictly sorted and scheduled around your service hours and business volumes.',
          points: [
            'One-time or recurring delivery schedules',
            'Uniform calibers and consistent supply arrivals',
            'Transparent invoicing and dependable logistical timing',
          ],
          link: 'Organize our kitchen supply',
          href: '#contact',
          tone: 'cream',
        },
        {
          number: '03',
          icon: 'globe',
          title: 'For NGOs & Institutional Partners',
          description: 'A trusted local bridge on the ground to mobilize local farming networks, consolidate bulk produce, and assemble large orders for humanitarian relief, feeding programs, or logistical operations.',
          points: [
            'Direct sourcing from local agricultural cooperatives',
            'Grading, weighing, and packaging aligned with project standards',
            'Transparent, accountable logistical coordination',
          ],
          link: 'Discuss field partnership',
          href: '#partenaires',
          tone: 'sand',
        },
      ],
    },
    method: {
      eyebrow: 'FROM FIELD TO TABLE',
      title: 'A transparent path,<br /><em>built upon our trusted word.</em>',
      lead: 'We believe that great food is rooted in clear, honest relationships. From your initial request to the arrival of your basket, every action honors your trust and the vitality of fresh crops.',
      button: 'Submit your requirements',
      steps: [
        {
          n: '01',
          title: 'Attentive listening',
          text: 'You share your cooking habits, desired staples, quantities, and the exact budget limit you wish to maintain.',
        },
        {
          n: '02',
          title: 'Dawn selection',
          text: 'At the break of dawn, we gather the most vibrant harvests from trusted growers and dependable community channels.',
        },
        {
          n: '03',
          title: 'Mindful sorting',
          text: 'Each tuber, fruit, and bundle of greens is inspected, gently prepared, and packaged to preserve its nourishing vitality.',
        },
        {
          n: '04',
          title: 'Kitchen arrival',
          text: 'Your staples are delivered across Yaoundé within the agreed window, ready to simmer in your pots and delight your guests.',
        },
      ],
    },
    partners: {
      photoLabelSub: 'FIELD EXPERIENCE & LOCAL ROOTS',
      photoLabelTitle: 'Mastering every supply line,<br />respecting every season.',
      eyebrow: 'NGOS · INSTITUTIONS · BULK BUYERS',
      title: 'The vibrant pulse of local markets, <em>the rigor of an operational partner.</em>',
      lead: 'From the Biyem-Assi wholesale market to the trading hubs of Nkomkana and Mokolo, we work in direct contact with Cameroon’s agricultural realities.',
      p1: 'We understand seasonal cycles, harvest variations, and the true value of farming labor. This hands-on presence enables SRE to provide institutional buyers, humanitarian agencies, and development initiatives with transparent, reliable logistics that safeguard local farmers.',
      points: [
        {
          title: 'Tailored specifications',
          text: 'Defining staple varieties, required volumes, delivery schedules, and quality benchmarks.',
        },
        {
          title: 'Consolidation & preparation',
          text: 'Mobilizing local farm networks, exact weighing, careful grading, and protective packaging.',
        },
        {
          title: 'Coordination & monitoring',
          text: 'Operational traceability, punctual transport, and open communication at every stage.',
        },
      ],
      note: 'Each partnership is examined carefully according to mobilizable capacities. Regulatory compliance and administrative documentation are handled in close concert with authorized partners.',
      button: 'Submit a partnership request',
    },
    manifesto: {
      quote: 'The earth generously nourishes those who treat it with honor.<br /><em>SRE brings that vitality straight to your kitchen door.</em>',
      sign: 'FROM THE FIELD TO YOUR KITCHEN',
    },
    faq: {
      eyebrow: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Clear, simple answers<br /><em>for your peace of mind.</em>',
      lead: 'Questions about our delivery areas in Yaoundé, our regional harvest selections, or budget management? Here are the essential answers.',
      link: 'Have a specific question? Write to us',
      items: [
        {
          q: 'Which neighborhoods in Yaoundé do you deliver to?',
          a: 'Our operational headquarters are located in Nkomkana. We deliver across all districts of Yaoundé (Nkomkana, Bastos, Biyem-Assi, Omnisports, Mendong, Odza, Simbock, Mvan, Dragages, Mermoz, etc.). Each route is organized to preserve the peak freshness of your food from the market to your kitchen.',
        },
        {
          q: 'Can I order specific products or traditional Cameroonian spices?',
          a: 'Absolutely. Whether you need traditional greens (ndolé, folon, zom), specific tubers (sweet or green plantains, tender cocoyam, sweet cassava), seasonal fruits, or heritage seasonings (djansang, pèbè, round seeds, Penja white pepper), we fulfill your exact requirements.',
        },
        {
          q: 'How does SRE adjust offers to match my budget?',
          a: 'Transparency and respect for your budget are foundational to our mission. Before sourcing, we discuss your priorities and spending target. Our daily knowledge of market rates allows us to guide you toward seasonal abundance without unnecessary expense.',
        },
        {
          q: 'How do I place an order and how much notice is required?',
          a: 'You can reach us directly via WhatsApp or phone call at +237 683 511 935 / +237 694 929 167, or through our contact form. To ensure items are selected fresh at dawn, we recommend confirming your order the day prior.',
        },
        {
          q: 'Do you support commercial businesses and NGO food programs?',
          a: 'Yes. For restaurants, hotels, and cafeterias, we establish recurring delivery schedules with specific size and quality standards. For humanitarian organizations and institutional buyers, we structure collection, sorting, and packaging to match agreed specifications.',
        },
      ],
    },
    contact: {
      eyebrow: 'CONTACT THE SRE TEAM',
      title: 'Share your<br /><em>market needs with us.</em>',
      lead: 'A grocery list for your home, steady sourcing for your kitchen, or a larger institutional initiative? Tell us what you need; we take the time to listen and provide an honest solution shaped to your budget.',
      phoneLabel: 'PHONE & WHATSAPP',
      emailLabel: 'EMAIL ADDRESS',
      locationLabel: 'HEAD OFFICE',
      legalLabel: 'COMMERCIAL REGISTRATION',
      whatsappPill: 'Direct WhatsApp',
      formHeading: 'YOUR SOURCING INQUIRY',
      labelName: 'Your full name',
      placeholderName: 'E.g. Marie Talla',
      labelOrg: 'Your organization or household',
      placeholderOrg: 'Household, Restaurant, Company, NGO…',
      labelEmail: 'Your email address',
      placeholderEmail: 'your.email@domain.com',
      labelPhone: 'Your phone number (WhatsApp preferred)',
      placeholderPhone: '+237 6...',
      labelTopic: 'Nature of your inquiry',
      topicDefault: 'Specify your request',
      topics: [
        'Family grocery basket',
        'Restaurant or catering supply',
        'Institutional or NGO partnership',
        'Bulk order or specific commodity',
        'General inquiry',
      ],
      labelMessage: 'Your message or grocery list',
      placeholderMessage: 'Detail the food items sought, estimated quantities, your Yaoundé neighborhood, or any helpful details…',
      formPrivacy: 'Your contact details are treated with utmost care and used solely to reply to you.',
      submitButton: 'Submit my inquiry',
      submitting: 'Sending inquiry...',
      successMessage: 'Thank you! Your inquiry has been saved successfully. Our team will get back to you promptly.',
      errorMessage: 'An error occurred while sending. You can reach us directly via WhatsApp or email.',
    },
    footer: {
      taglineSub: 'Trust delivered to every doorstep.',
      top: 'BACK TO TOP',
      socialLabel: 'Follow SRE:',
      rights: 'All rights reserved.',
      dev: 'Design & Development:',
    },
    floatingWhatsapp: 'Chat on WhatsApp',
  },
};

export function getTranslations(locale: Locale = 'fr'): Translations {
  return translations[locale] || translations.fr;
}
