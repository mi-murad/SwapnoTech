// Public engagement models. These are ways to scope work, not fixed-price or guaranteed-result packages.
export const engagementOptions = [
  {
    key: 'focused',
    number: '01',
    title: { en: 'Focused Project', bn: 'নির্দিষ্ট প্রজেক্ট' },
    descriptor: { en: 'One clear need. A defined piece of work.', bn: 'একটি স্পষ্ট প্রয়োজন। নির্ধারিত কাজের পরিধি।' },
    bestFor: { en: 'A business that needs one important thing created, improved or launched without committing to ongoing support.', bn: 'যে ব্যবসার নিয়মিত সহযোগিতার প্রতিশ্রুতি ছাড়াই একটি গুরুত্বপূর্ণ কাজ তৈরি, উন্নত বা চালু করা প্রয়োজন।' },
    mayInclude: [
      { en: 'A discovery conversation and agreed brief', bn: 'প্রাথমিক আলোচনা ও সম্মত ব্রিফ' },
      { en: 'One defined service or a small connected set of deliverables', bn: 'একটি নির্দিষ্ট সেবা বা পরস্পর-সম্পর্কিত কিছু ডেলিভারেবল' },
      { en: 'Milestones, review points and final handover', bn: 'মাইলস্টোন, পর্যালোচনার ধাপ ও চূড়ান্ত হস্তান্তর' },
    ],
    close: { en: 'Examples: a brand identity, a campaign asset set, a short video, a landing page or a defined website improvement.', bn: 'উদাহরণ: ব্র্যান্ড আইডেন্টিটি, ক্যাম্পেইন অ্যাসেট, শর্ট ভিডিও, ল্যান্ডিং পেজ বা ওয়েবসাইটের নির্দিষ্ট উন্নয়ন।' },
    contactValue: 'Focused project',
  },
  {
    key: 'ongoing',
    number: '02',
    title: { en: 'Ongoing Partnership', bn: 'নিয়মিত সহযোগিতা' },
    descriptor: { en: 'A shared rhythm for work that continues.', bn: 'চলমান কাজের জন্য নিয়মিত সমন্বিত ছন্দ।' },
    bestFor: { en: 'A business with recurring creative, content or digital needs that benefit from continuity, planning and regular review.', bn: 'যে ব্যবসার নিয়মিত ক্রিয়েটিভ, কনটেন্ট বা ডিজিটাল কাজ প্রয়োজন এবং ধারাবাহিকতা, পরিকল্পনা ও নিয়মিত পর্যালোচনা থেকে উপকার হয়।' },
    mayInclude: [
      { en: 'A recurring planning and priority-setting session', bn: 'নিয়মিত পরিকল্পনা ও অগ্রাধিকার নির্ধারণ' },
      { en: 'An agreed monthly workload and delivery schedule', bn: 'সম্মত মাসিক কাজের পরিমাণ ও ডেলিভারি সূচি' },
      { en: 'Review, feedback coordination and next-cycle planning', bn: 'পর্যালোচনা, মতামত সমন্বয় ও পরবর্তী চক্রের পরিকল্পনা' },
    ],
    close: { en: 'The exact monthly capacity, channels, deliverables and response expectations are agreed in writing before the partnership starts.', bn: 'সহযোগিতা শুরুর আগে মাসিক কাজের সক্ষমতা, চ্যানেল, ডেলিভারেবল ও সাড়া দেওয়ার প্রত্যাশা লিখিতভাবে নির্ধারিত হবে।' },
    contactValue: 'Ongoing partnership',
  },
  {
    key: 'custom',
    number: '03',
    title: { en: 'Custom Engagement', bn: 'কাস্টম সহযোগিতা' },
    descriptor: { en: 'A connected scope shaped around your brief.', bn: 'আপনার প্রয়োজন অনুযায়ী সমন্বিত কাজের পরিধি।' },
    bestFor: { en: 'A larger or less-standard challenge that needs a combination of strategy, creative production and technology.', bn: 'যে বড় বা ভিন্নধর্মী চ্যালেঞ্জে কৌশল, সৃজনশীল প্রোডাকশন ও প্রযুক্তির সমন্বয় প্রয়োজন।' },
    mayInclude: [
      { en: 'Discovery, research and a phased delivery plan', bn: 'প্রাথমিক অনুসন্ধান, গবেষণা ও ধাপভিত্তিক ডেলিভারি পরিকল্পনা' },
      { en: 'A coordinated mix of brand, content, marketing or web work', bn: 'ব্র্যান্ড, কনটেন্ট, মার্কেটিং বা ওয়েব কাজের সমন্বিত পরিধি' },
      { en: 'Named responsibilities, dependencies and approval checkpoints', bn: 'নির্দিষ্ট দায়িত্ব, নির্ভরতা ও অনুমোদনের ধাপ' },
    ],
    close: { en: 'The work is broken into practical phases so the team can validate direction and priorities before expanding scope.', bn: 'কাজকে বাস্তবসম্মত ধাপে ভাগ করা হয়, যাতে পরিধি বাড়ানোর আগে দিকনির্দেশনা ও অগ্রাধিকার যাচাই করা যায়।' },
    contactValue: 'Custom engagement',
  },
];

export const engagementPrinciples = [
  { title: { en: 'Purpose', bn: 'উদ্দেশ্য' }, body: { en: 'What needs to change, and who is the work for?', bn: 'কী পরিবর্তন প্রয়োজন এবং কাজটি কাদের জন্য?' } },
  { title: { en: 'Deliverables', bn: 'ডেলিভারেবল' }, body: { en: 'What will be created, supplied or handed over?', bn: 'কী তৈরি, সরবরাহ বা হস্তান্তর করা হবে?' } },
  { title: { en: 'Timing', bn: 'সময়সূচি' }, body: { en: 'What are the milestones, dependencies and review windows?', bn: 'মাইলস্টোন, নির্ভরতা ও পর্যালোচনার সময় কখন?' } },
  { title: { en: 'Investment', bn: 'বাজেট' }, body: { en: 'What fee and any necessary third-party costs are approved?', bn: 'কোন ফি এবং প্রয়োজনীয় তৃতীয় পক্ষের খরচ অনুমোদিত?' } },
];

export const engagementFaqs = [
  {
    question: { en: 'Do you publish fixed package prices?', bn: 'আপনারা কি নির্দিষ্ট প্যাকেজ মূল্য প্রকাশ করেন?' },
    answer: { en: 'Not at this stage. The fee depends on the agreed deliverables, complexity, timeline and capacity. We share the proposed scope and fee for approval before work begins.', bn: 'এই পর্যায়ে নয়। সম্মত ডেলিভারেবল, জটিলতা, সময় ও কাজের সক্ষমতার ওপর ফি নির্ভর করে। কাজ শুরুর আগে অনুমোদনের জন্য প্রস্তাবিত পরিধি ও ফি জানানো হবে।' },
  },
  {
    question: { en: 'Can I combine more than one service?', bn: 'একাধিক সেবা একসঙ্গে নেওয়া যাবে?' },
    answer: { en: 'Yes. Related services can be combined when they support the same goal. We will explain the dependencies and agree the sequence before confirming the scope.', bn: 'হ্যাঁ। একই লক্ষ্য পূরণে সহায়ক হলে সম্পর্কিত সেবাগুলো একত্র করা যায়। কাজের পারস্পরিক নির্ভরতা ব্যাখ্যা করে পরিধি নিশ্চিত করার আগে ধাপগুলো ঠিক করা হবে।' },
  },
  {
    question: { en: 'What happens after I send an enquiry?', bn: 'যোগাযোগ করার পর কী হবে?' },
    answer: { en: 'We review the information, arrange a conversation if needed, and prepare a written scope with deliverables, timing, responsibilities and fee. Work starts only after both sides approve it.', bn: 'আমরা তথ্য পর্যালোচনা করি, প্রয়োজন হলে আলোচনা করি এবং ডেলিভারেবল, সময়, দায়িত্ব ও ফিসহ লিখিত প্রস্তাব তৈরি করি। উভয় পক্ষ অনুমোদন দেওয়ার পরই কাজ শুরু হয়।' },
  },
  {
    question: { en: 'Are results guaranteed?', bn: 'ফলাফল কি নিশ্চিত?' },
    answer: { en: 'No. We commit to the agreed work and a clear review process. Business outcomes also depend on factors outside the delivery team’s control.', bn: 'না। আমরা সম্মত কাজ ও স্পষ্ট পর্যালোচনা প্রক্রিয়ার প্রতি দায়বদ্ধ থাকি। ব্যবসায়িক ফলাফল কাজের বাইরের বিভিন্ন বিষয়ের ওপরও নির্ভর করে।' },
  },
];
