export type Article = {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "do-i-need-a-bookkeeper-for-my-salon",
    tag: "Getting Started",
    title: "Do I need a bookkeeper for my salon?",
    excerpt:
      "The signs it's time to stop DIY-ing your books — and what it actually costs you not to.",
    readTime: "5 min read",
    body: [
      "Most salon, barbering, and beauty business owners we talk to didn't start their business to become an accountant — and for the first year or two, a spreadsheet and good intentions usually hold things together. The question isn't whether you can technically keep doing your own books. It's whether doing them yourself is still the best use of your time and the best way to actually know where you stand.",
      "A few signs it's time to bring in help: you're spending more than an hour a week wrestling with categorizing transactions instead of booking clients or running your team. You genuinely don't know your profit margin from month to month — you know if there's money in the account, but not whether the business itself made money after every expense is accounted for. Your bank and business accounts have started mixing personal and business spending because it was faster in the moment. Or tax season shows up every year as a scramble instead of a formality.",
      "The cost of not fixing this isn't just stress — it's decisions made blind. Owners who don't have clean, current books tend to underprice their services, over-hire or under-hire relative to what they can actually afford, and get surprised by tax bills instead of planning for them. A bookkeeper isn't a luxury line item at that point; it's the thing that turns guessing into knowing.",
      "The flip side: you don't need to hire the most expensive option, and you don't need a full CFO. You need someone who reconciles your accounts monthly, keeps your chart of accounts built for a service business (not generic software defaults), and can tell you in plain English what the numbers mean for your next decision. That's exactly the gap a Books Health Check is built to diagnose — no cost, no obligation, just a clear read on where you stand today.",
    ],
  },
  {
    slug: "cash-vs-accrual",
    tag: "Fundamentals",
    title: "Cash vs. accrual: what's the difference, and why it matters",
    excerpt:
      "Why the accounting method you're using might be quietly hiding your real profitability.",
    readTime: "4 min read",
    body: [
      "Cash-basis accounting records money when it actually moves — a sale counts when the payment clears, an expense counts when you pay the bill. It's intuitive, which is exactly why most small service businesses start there. Accrual-basis accounting records money when it's earned or owed, regardless of when cash actually changes hands — a sale counts when the service is delivered (even if the client pays 30 days later), and an expense counts when you incur it (even if you haven't paid the invoice yet).",
      "For a lot of businesses, that distinction feels academic. It isn't. Say you do a large job in March but the client doesn't pay until April. On a cash basis, March looks like a slow month and April looks like a blowout — even though the actual work, and the actual profitability, happened in March. Stack that pattern up across a year and your monthly numbers stop reflecting reality; they reflect your invoicing timing instead.",
      "Accrual accounting fixes that by matching revenue to the period the work actually happened in, and matching expenses to the period they were actually incurred in — which is also the basis lenders, investors, and most experienced advisors expect to see, because it's harder to game and easier to compare month over month.",
      "The tradeoff is that accrual books take more discipline to keep current — you have to track receivables and payables, not just what hit the bank. That's exactly why it's worth having someone whose job is keeping that current every month rather than trying to reconstruct it once a year for taxes. Every plan we offer is built on accrual-basis monthly close by default, specifically so the numbers you're looking at reflect what actually happened in your business — not just when the money landed.",
    ],
  },
  {
    slug: "how-to-pay-yourself-from-your-llc",
    tag: "Owner Pay",
    title: "How to pay yourself from your LLC — without guessing",
    excerpt:
      "A simple framework for setting an owner's draw you can actually stick to.",
    readTime: "6 min read",
    body: [
      "One of the most common questions we get isn't about the business at all — it's \"how much am I actually supposed to pay myself?\" For LLC owners, there's no paycheck automatically dictating the answer the way there is at a W-2 job, so it ends up decided by feel: whatever's left in the account at the end of the month, whenever it feels safe to move it.",
      "That approach has two failure modes. Either you underpay yourself for months because the account looks thin, even though the business is actually profitable and the cash is just tied up in timing — or you overpay yourself in a good month and then can't cover payroll, rent, or taxes two months later because you spent money the business hadn't actually kept.",
      "A better framework starts with your P&L, not your bank balance. Once your books are current, you can see actual monthly profit — revenue minus every real expense, including the ones that don't hit every month (insurance, annual software renewals, equipment). From there, set a consistent owner's draw as a percentage of trailing profit (a rolling 3-month average smooths out one unusually good or bad month), rather than a fixed dollar figure decided once and never revisited.",
      "Keep a buffer in the business account before you draw — a month or two of operating expenses — so a single slow month doesn't force you to choose between paying yourself and paying your team or your bills. And separate the draw account from the operating account entirely, so it's never ambiguous which dollars are \"yours\" and which are the business's working capital.",
      "This is also where entity structure matters: LLCs taxed as sole proprietorships, partnerships, and S-Corps each treat owner pay differently for tax purposes, and the right structure can meaningfully change what you owe. That's a conversation worth having directly with your bookkeeper or CPA once your books are clean enough to see the real numbers — which is exactly what the Growth and Advisory tiers are built to support with monthly and quarterly check-ins.",
    ],
  },
  {
    slug: "five-signs-your-business-isnt-as-profitable-as-it-feels",
    tag: "Profitability",
    title: "Five signs your business isn't as profitable as it feels",
    excerpt:
      "Making money and staying broke aren't mutually exclusive. Here's how to tell which one is happening.",
    readTime: "5 min read",
    body: [
      "Revenue is busy. Bookings are up, the calendar's full, cards are being charged every day — and yet the account never seems to have more in it than it did six months ago. That gap between \"feels busy\" and \"actually profitable\" is one of the most common things we see when a new client's books get cleaned up for the first time. A few signs worth checking for.",
      "One: your prices haven't changed in over a year, but your costs have. Product costs, rent, software subscriptions, and labor all tend to creep upward steadily; if pricing hasn't kept pace, your margin is quietly shrinking every month even as revenue holds flat or grows.",
      "Two: you're judging profitability by your bank balance instead of your P&L. Bank balance reflects timing — client payments, expense due dates, owner draws — not whether the business is actually profitable in a given period. A healthy balance can mask a business that's losing money every month and living off a prior good stretch.",
      "Three: you don't know your cost per client or per job. Without that number, it's impossible to tell whether a specific service line or client type is actually worth the time it takes relative to what it brings in — some of the busiest-looking work can be the least profitable per hour.",
      "Four: business and personal spending are mixed in the same account. This alone makes profitability functionally unknowable, because you can't separate what the business earned and spent from what you personally spent, without redoing the whole month's categorization by hand.",
      "Five: you've never had a plain-English read on your numbers from someone outside the day-to-day of the business. It's easy to miss patterns in your own books the way it's easy to miss typos in your own writing — a second set of eyes, monthly, tends to catch what a busy owner doesn't have the distance to see. If more than one of these sounds familiar, a Books Health Check is the fastest way to find out where you actually stand.",
    ],
  },
  {
    slug: "what-your-pl-can-tell-you",
    tag: "Reading Your Numbers",
    title: "What your P&L can tell you that your bank balance can't",
    excerpt:
      "Your account balance is a snapshot. Your P&L is the story. Learn to read it.",
    readTime: "4 min read",
    body: [
      "Your bank balance answers one question: how much cash do I have right now? It's useful, but it's also the least informative number in your business, because it doesn't tell you why it's what it is. A profit and loss statement (P&L) answers a much more useful question: over this specific period, did the business make money, and on what?",
      "A P&L breaks revenue and expenses into categories over a set period — a month, a quarter, a year — so you can see not just the bottom line, but the shape of it. Which service lines are actually driving revenue. Which expense categories are growing faster than revenue is. Whether a \"good month\" was driven by real growth or by one large one-time job that won't repeat.",
      "This is also where accrual-basis accounting earns its keep: a P&L built on accrual numbers reflects the work actually done in that period, not just the cash that happened to land. That's what makes it possible to compare March to April to May in a way that's actually meaningful, instead of comparing whichever months happened to have client payments clear in them.",
      "The habit worth building: look at your P&L every month, not just at tax time. Even five minutes — checking whether revenue moved the way you expected, whether any expense category jumped without an obvious reason, whether your margin held — turns your books from a historical record into a decision-making tool. That's exactly what the monthly advisory message in our Growth and Advisory tiers is built to do: not just deliver the statement, but tell you in plain English what it means for what you do next.",
    ],
  },
  {
    slug: "can-you-afford-a-second-location",
    tag: "Growth",
    title: "Can you actually afford that second location?",
    excerpt:
      "The financial thresholds to hit before expanding — and how to know you're ready.",
    readTime: "6 min read",
    body: [
      "Expanding — a second location, a bigger space, a second chair, a second truck — is one of the biggest financial decisions a service business owner makes, and it's also one of the easiest to get wrong by going on instinct instead of numbers. Being consistently busy at your current location is a good sign. It isn't, by itself, evidence you can afford a second one.",
      "A few thresholds worth checking before committing to an expansion. First: has your current location been consistently profitable — not just busy — for at least the last 6 to 12 months? A single strong quarter can be seasonal or a fluke; a consistent trend is what actually predicts whether the model repeats somewhere new.",
      "Second: do you have a real cash reserve set aside for the expansion beyond the startup costs you've already budgeted? New locations almost always take longer to become profitable than owners initially expect — build in a buffer for at least 3 to 6 months of the new location underperforming before it's expected to.",
      "Third: can your current location run without your daily hands-on presence? If expansion means splitting your time across two sites, your original location needs systems, staff, and financial oversight solid enough to not quietly decline while your attention is elsewhere.",
      "Fourth: do you actually know your unit economics — cost per client, margin per service, fixed costs like rent and payroll — well enough to model what a second location would need to hit to break even, and by when? This is the step most owners skip, because it requires clean, current books to answer honestly.",
      "If you can't answer all four with real numbers rather than a gut feeling, that's not a no — it's a sign the next right move is getting your books clean enough to model the decision properly, rather than making it on momentum alone. That's exactly the kind of question a Books Health Check and a follow-up strategy conversation are built to help answer.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
