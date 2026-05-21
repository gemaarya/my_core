// ============================================================
//  data.js  —  YOUR CONTENT FILE
//  This is the ONLY file you need to edit.
//  Change text, prices, links, reviews, FAQs — all here.
// ============================================================


// ─────────────────────────────────────────────
//  CONTACT & SOCIAL LINKS
// ─────────────────────────────────────────────
const CONTACT = {
  whatsapp:  'https://wa.me/918824718644',
  instagram: 'https://instagram.com/gem_invite',
  email:     'hello@geminvite.com',
};


// ─────────────────────────────────────────────
//  PRODUCTS
//
//  Each product has:
//    name      — product name shown on card
//    desc      — short description on card
//    price     — CURRENT (discounted) price  e.g. "₹49"
//    origPrice — ORIGINAL (crossed-out) price e.g. "₹99"
//    emoji     — emoji thumbnail (until you add a real image)
//    demo      — URL of your live demo invitation link. Leave '' if none.
//    thumb     — URL of a thumbnail image. Leave '' to use emoji.
//
//  HOW TO ADD A PRODUCT:
//    Copy any { } block, paste at end of the list (before the ] ), edit fields.
//
//  HOW TO REMOVE A PRODUCT:
//    Delete the whole { } block.
//
//  HOW TO CHANGE PRICE:
//    Change price (new price) and origPrice (old price).
//    The discount % is calculated automatically.
//
//  HOW TO ACTIVATE VIEW DEMO:
//    Replace the empty '' in demo: '' with the full URL of your invitation.
//    Example:  demo: 'https://geminvite.com/demo/birthday-animation'
//    The button will activate automatically once a URL is added.
//
//  HOW TO ADD YOUR INVITATION WEBSITE LINK:
//    Each invitation you create has its own unique URL (web link).
//    Paste that URL in the demo: field for that product.
//    Share that same link with clients too — it works as the invitation itself!
// ─────────────────────────────────────────────
const CATEGORIES = [

  {
    id: 'birthday',
    label: '🎂 Birthday',
    name: 'Birthday Invitations',
    products: [
      {
        name:      'Birthday — Animation',
        desc:      'Vibrant animated birthday invitations personalized with your loved one\'s photo and name. Full motion magic!',
        price:     '₹49',
        origPrice: '₹99',
        emoji:     '🎂',
        demo:      'templates/birthday/animation/birthday.html',
        thumb:     '',
      },
      {
        name:      'Birthday — Basic',
        desc:      'Clean and beautiful birthday invitations with your photo, name, and event details. Simple, elegant, loved.',
        price:     '₹99',
        origPrice: '₹129',
        emoji:     '🎉',
        demo:      'templates/birthday/basic/index.html',
        thumb:     '',
      },
    ],
  },

  {
    id: 'festival',
    label: '🎊 Festival',
    name: 'Festival Invitations',
    products: [
      {
        name:      'Raksha Bandhan',
        desc:      'Loving Raksha Bandhan invitations celebrating the beautiful bond of siblings with warmth and color.',
        price:     '₹129',
        origPrice: '₹169',
        emoji:     '🧡',
        demo:      'templates/festival/Raksha B/index.html',
        thumb:     '',
      },
    ],
  },

  {
    id: 'personal',
    label: '💌 Personal',
    name: 'Personal Messages',
    products: [
      {
        name:      'Apology Card',
        desc:      'A heartfelt digital apology crafted with sincerity and warmth — because some sorry\'s deserve more than words.',
        price:     '₹139',
        origPrice: '₹199',
        emoji:     '🥺',
        demo:      'templates/personal/apologise/index.html',
      },
      {
        name:      'Proposal Card',
        desc:      'Express your deepest feelings with a stunning love proposal digital card. Make the moment unforgettable.',
        price:     '₹149',
        origPrice: '₹249',
        emoji:     '💝',
        demo:      'templates/personal/proposal/index.html',
        thumb:     '',
      },
      {
        name:      'Surprise Card',
        desc:      'An extraordinary personalized surprise card for that someone truly special — crafted with love.',
        price:     '₹149',
        origPrice: '₹199',
        emoji:     '🎁',
        demo:      'templates/personal/surprise/index.html',
        thumb:     '',
      },
    ],
  },

  {
    id: 'religious',
    label: '🙏 Religious',
    name: 'Religious & Spiritual',
    products: [
      {
        name:      'Spiritual Gathering',
        desc:      'Serene and soulful spiritual gathering invitations that radiate calm, devotion, and divine energy.',
        price:     '₹249',
        origPrice: '₹399',
        emoji:     '📿',
        demo:      'templates/Religious/spritual gathering/index.html',
        thumb:     '',
      },
      {
        name:      'Tap Anumodana',
        desc:      'Reverential and spiritually designed invitations for Tap Anumodana ceremonies with sacred motifs.',
        price:     '₹149',
        origPrice: '₹249',
        emoji:     '🙏',
        demo:      'templates/Religious/Tap/index.html',
        thumb:     '',
      },
    ],
  },

  {
    id: 'social',
    label: '🎉 Social',
    name: 'Social Celebrations',
    products: [
      {
        name:      'Baby Shower',
        desc:      'Adorable baby shower invitations in soft pastel hues, filled with warmth, wonder, and joy.',
        price:     '499',
        origPrice: '₹999',
        emoji:     '🍼',
        demo:      'templates/social/baby shower/index.html',
        thumb:     '',
      },
      {
        name:      'Housewarming',
        desc:      'Warm and welcoming housewarming invitations to celebrate the joy of your beautiful new home.',
        price:     '₹449',
        origPrice: '₹949',
        emoji:     '🏡',
        demo:      'templates/social/Housewarming/index.html',
        thumb:     '',
      },
      {
        name:      'School Farewell',
        desc:      'Emotional and beautiful school farewell invitations to cherish memories and celebrate new beginnings.',
        price:     '₹199',
        origPrice: '₹399',
        emoji:     '🎓',
        demo:      'templates/social/school farewell/index.html',
        thumb:     '',
      },
    ],
  },

  {
    id: 'wedding',
    label: '💍 Wedding',
    name: 'Wedding Invitations',
    products: [
      {
        name:      'Wedding — Basic',
        desc:      'Elegant wedding invitations with your names, date, and venue. Clean, timeless, and beautiful.',
        price:     '₹199',
        origPrice: '₹349',
        emoji:     '💍',
        demo:      'templates/wedding/basic/index.html',
        thumb:     '',
      },
      {
        name:      'Wedding — Pro',
        desc:      'Premium wedding invitations with animation, music, and full event suite. A truly memorable digital experience.',
        price:     '₹549',
        origPrice: '₹1249',
        emoji:     '👩‍❤️‍👨',
        demo:      'templates/wedding/pro/index.html',
        thumb:     '',
      },
      {
        name:      'Wedding — Premium',
        desc:      'The ultimate wedding invitation package — multi-event, cinematic design, music, and unlimited sharing.',
        price:     '₹1999',
        origPrice: '₹4999',
        emoji:     '🤵🏻👰🏻',
        demo:      'templates/wedding/premium/index.html',
        thumb:     '',
      },
    ],
  },

]; // ← end of CATEGORIES


// ─────────────────────────────────────────────
//  CUSTOMER REVIEWS
//
//  HOW TO ADD A REVIEW: copy any { } block and paste at the end (before ] )
//  HOW TO REMOVE:       delete the whole { } block
// ─────────────────────────────────────────────
const REVIEWS = [
  {
    stars:    5,
    quote:    'Absolutely stunning wedding invitation! Our guests couldn\'t stop complimenting it. The animations were breathtaking.',
    initials: 'PR',
    name:     'Priya & Rohan',
    event:    'Wedding — Premium',
  },
  {
    stars:    5,
    quote:    'The birthday animation invitation was exactly what I envisioned. Delivered within hours — absolutely magical!',
    initials: 'SA',
    name:     'Sneha Agarwal',
    event:    'Birthday — Animation',
  },
  {
    stars:    4,
    quote:    'Used for our Raksha Bandhan celebration. Vibrant design, super convenient format. Everyone loved it!',
    initials: 'VJ',
    name:     'Vikram Joshi',
    event:    'Raksha Bandhan',
  },
  {
    stars:    5,
    quote:    'The apology card literally saved my relationship! She was so touched, she loved every detail of it!',
    initials: 'AM',
    name:     'Arjun M.',
    event:    'Apology Card',
  },
  {
    stars:    5,
    quote:    'Simple to order, incredibly quick turnaround, and beautifully crafted. geminvite exceeded all expectations.',
    initials: 'MS',
    name:     'Meera Sharma',
    event:    'Baby Shower',
  },
]; // ← end of REVIEWS


// ─────────────────────────────────────────────
//  FAQ
// ─────────────────────────────────────────────
const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Simply click "Enquire Now" on any product, send us your event details on WhatsApp — name, date, venue, and any customization preferences — and we\'ll get started right away!',
  },
  {
    q: 'Some demo invitations are asking for a password. How do I access them?',
    a: 'Some of our demo invitations are password-protected to keep them exclusive. You can access any protected demo using the password: 123456. Just enter this password when prompted, and you\'ll be able to view the full demo experience.',
  },
  {
    q: 'How long does delivery take?',
    a: 'We typically deliver within 48–72 hours max 7 working days after receiving all your details and confirmation. For urgent orders, we offer express delivery in 12–24 hours for a small additional fee.',
  },
  {
    q: 'Can you create a website or digital service for an occasion not listed in your catalogue?',
    a: 'Absolutely! Our catalogue represents our most popular offerings, but we love taking on new and unique projects. If you have something special in mind that isn\'t listed, we warmly welcome you to reach out and share your requirements with us. Simply let us know the occasion, what you\'re envisioning, and your preferred timeline — we\'ll check our availability and get back to you with a tailored response, including a transparent breakdown of pricing based on your specific needs. Every celebration is unique, and we\'re always happy to explore how we can bring your idea to life.',
  },
  {
    q: 'Can I customize colors, fonts, and text?',
    a: 'Absolutely! Everything is 100% customizable — colors, fonts, text, photos, music, and more. Your invitation is crafted entirely based on your vision and preferences.',
  },
  {
    q: 'Do you take bulk or wedding orders?',
    a: 'Yes! We love working on complete wedding suites. We offer special packages that include all events — engagement, Haldi, Mehendi, Sangeet, Wedding, and Reception — at attractive bundled pricing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major Indian payment methods including UPI (Google Pay, PhonePe, Paytm), NEFT/IMPS bank transfers, and other digital payment platforms. Payment details are shared on confirmation.',
  },
  {
    q: 'We\'re not sure what design we want — can you help?',
    a: 'Absolutely. Just tell us your event colors, venue vibe, and any photos you love — and we\'ll suggest the perfect direction. Many of our favourite invitations started with "we have no idea, surprise us."',
  },
  {
    q: 'What if our guests aren\'t tech-savvy?',
    a: 'All they need is a phone and a tap. No app, no download, no account. The invitation is a web link — simply share it with your guests via WhatsApp, email, or even SMS, and they can open it instantly.',
  },
  {
    q: 'Are there any additional charges for international customers?',
    a: 'Yes. For orders placed by customers outside India, the final pricing may be up to double the original product price.',
  },
  {
    q: 'Can the “Made with ❤️ @geminvite” credit be removed from the product?',
    a: 'We\'re proud of our work and love the credit, but if you prefer to remove it, we offer a no-credit option for an additional charge equal to the original product price, making the total cost double the standard product price. Just let us know when placing your order.',
  },
  {
    q: 'Is it possible to make an invitation without our photos?',
    a: 'Absolutely! We can use event-related visuals, illustrations, or elegant design elements instead. Just contact us before placing your order and we\'ll find the perfect approach together.',
  },
]; // ← end of FAQS


// ─────────────────────────────────────────────
//  LEGAL POLICIES
// ─────────────────────────────────────────────
const POLICIES = {

  privacy: {
    title: 'Privacy Policy',
    content: `
      <h3>1. Introduction</h3>
      <p>geminvite ("we", "us", "our") is a digital invitation design business operating from Sardarshahar, India. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our services via our website or social media platforms.</p>

      <h3>2. Information We Collect</h3>
      <p>We may collect: your name, WhatsApp number, email address, event details (dates, names, venue), photos shared for invitation design, and any other information you voluntarily provide during the order process. We do not collect specially protected data or sensitive information beyond what is strictly necessary to provide our services.</p>

      <h3>3. How We Use Your Information</h3>
      <p>Your information is used solely to design and deliver your personalized digital invitation. We do not sell, rent, or share your personal information with third parties for marketing purposes. Photos and personal details shared with us are used exclusively for your order. We use your data to: Create and manage your digital wedding invitation. Process payments securely. Communicate with you about your order. Comply with legal and tax obligations. Send commercial communications (only with your consent).</p>

      <h3>4. Data Storage</h3>
      <p>Your data is stored securely and retained only for the duration necessary to fulfil your order and maintain business records as required by Indian law. We do not store financial information. Resolve possible claims Once the relationship ends, data will be blocked and subsequently deleted.</p>

      <h3>5. Communications</h3>
      <p>By contacting us via WhatsApp or email, you consent to receiving communications related to your order. We will not send unsolicited promotional messages.</p>

      <h3>6. Your Rights</h3>
      <p>You have the right to access, correct, or request deletion of your personal data at any time by contacting us at hello@geminvite.com.</p>

      <h3>7. Modifications to This Policy</h3>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>

      <h3>8. Contact</h3>
      <p>For privacy-related queries, email hello@geminvite.com or WhatsApp us directly.</p>
    `,
  },

  terms: {
    title: 'Terms & Conditions',
    content: `
      <h3>1. Acceptance of Terms</h3>
      <p>By placing an order with geminvite, you agree to be bound by these Terms & Conditions, which govern all orders placed via our website or Social Media platforms.</p>

      <h3>2. Services</h3>
      <p>geminvite provides custom digital invitation design services. All designs are delivered digitally and are intended for personal use only.</p>

      <h3>3. Order Process</h3>
      <p>The ordering process consists of the following steps: 1. Selection of desired package 2. enquiry & connecting us 3. Order confirmation 4.Secure payment. Orders are confirmed only after receipt of complete event details and advance payment. Design work begins upon confirmation. Changes requested after work has begun may attract additional charges.</p>

      <h3>4. Service Delivery</h3>
      <p>The digital invitation is delivered within 2 to 7 business days . We will send you the link to your invitation by email/WhatsApp. You can request minor modifications at  additional cost. Access to the invitation, In case of delay, we will inform you and offer a solution.</p>

      <h3>5. Right of Withdrawal</h3>
      <p>In accordance with consumer regulations, you have the right to withdraw from the contract within 3 calendar days from the date of purchase. EXCEPTIONS: Once we have started creating your personalized invitation (custom-made digital content), the right of withdrawal will be considered fulfilled, as the service will have started with your express Consent. To exercise withdrawal before the service begins, contact hello@geminvite.com </p>
      
      <h3>6. Intellectual Property</h3>
      <p>All designs remain the intellectual property of geminvite. Clients are granted a personal, non-commercial license to use the delivered design for their specific event. Resale, Redistribution or modification is strictly prohibited. We reserve the right to display your invitation in our portfolio (anonymized) unless you indicate otherwise.</p>

      <h3>7. User Obligations</h3>
      <p>The user agrees to:  Provide truthful and up-to-date information .Use the service for legal purposes. Not attempt to access systemns or data of other Users. Respect intellectual property rights - Not upload illegal, offensive content or content that infringes third-party rights</p>
      
      <h3>8.  Limitation of Liability</h3>
      <p>will not be liable for:  Damages arising from misuse of the service. Connectivity or internet availability issues. Errors in information provided by the user. Indirect or consequential losses. Our maximum liability is limited to the amount paid for the service. </p>
      
      <h3>9.  Data Protection</h3>
      <p>Personal data processing is carried out in accordance with our Privacy Policy, available on this website. You can consult your rights and how to exercise them in said policy. </p>
      
      <h3>10.  Modifications</h3>
      <p>Personal data processing is carried out in accordance with our Privacy Policy, available on this website. You can consult your rights and how to exercise them in said policy. </p>
      
      <h3>11. Content Responsibility</h3>
      <p>Clients are responsible for the accuracy of all content (names, dates, venue, etc.) provided to us. geminvite is not liable for errors in client-provided information.</p>

      <h3>12. Revisions</h3>
      <p>We offer revisions to ensure your satisfaction within the agreed design scope. Major redesigns may attract additional charges.</p>

      <h3>13. Music Usage</h3>
      <p>Almost all background music, audio tracks, and media assets used in demos on this website may be sourced from royalty-free platforms such as Pixabay and are used in accordance with their respective content licenses.</p>
      <p>For certain religious-category templates, devotional songs or music tracks may belong to their respective singers, artists, or copyright holders and are not original creations of GemInvite. Such content is used only for demonstration purposes.</p>

      <h3>14. Governing Law</h3>
      <p>These Terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan.</p>
    `,
  },

  refund: {
    title: 'Refund Policy',
    content: `
      <h3>1. No Refund Policy</h3>
      <p>(a) Due to the custom nature of our digital invitation design services, refunds are not accepted once the design process has begun. Each invitation is customise for each client, involving time and resources dedicated specifically to your project from the moment you pay for that service,</p>
      <p>(b) the client provide the incorrect information,</p>
      <p>(c) the client changes their mind after delivery, or</p>
      <p>(d) the design has already been shared or used.</p>
      
      <h3>2. Full Refund</h3>
      <p>A full refund is available if: (a) you cancel before design work has commenced, or (b) we are unable to deliver within the agreed timeframe through no fault of the client.</p>

      <h3>3. Included Revisions</h3>
      <p>To ensure your satisfaction with the final design, all our packages include: First revision: The most important one to make sure all details are correct and the design meets your expectations. Second revision (optional): An additional round for small adjustments and final details. Once these revisions are completed and approved by you, the design will be considered final.</p>
      
      <h3>4. Refund Process</h3>
      <p>Approved refunds will be processed within 5–7 business days to the original payment method. To request a refund, contact us at hello@geminvite.com with your order details.</p>

      <h3>5. Additional Revisions</h3>
      <p>If you need additional changes after the included revisions, we offer extra revision rounds at the following cost: 50% per additional revision round Each round includes the adjustments requested in a single feedback session.</p>
      
      <h3>6. Information Changes</h3>
      <p>Information changes (dates, addresses, etc.) on the finalised invitation are available at no additional cost until your wedding day.</p>
      
      <h3>7. Disputes</h3>
      <p>Unresolved disputes shall be subject to the jurisdiction of courts in Jaipur, Rajasthan, India.</p>

      <h3>8. Contact</h3>
      <p>If you have any questions about our refund policy or need more information, please don't hesitate to contact us through our email or social media accounts. </p>
    `,
  },

}; // ← end of POLICIES