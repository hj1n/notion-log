const CONFIG = {
  // profile setting (required)
  profile: {
    name: process.env.NEXT_PUBLIC_USER_NAME,
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: process.env.NEXT_PUBLIC_USER_ROLE,
    bio: process.env.NEXT_PUBLIC_USER_BIO,
    email: process.env.NEXT_PUBLIC_USER_EMAIL,
    linkedin: process.env.NEXT_PUBLIC_USER_LINKEDIN,
    github: process.env.NEXT_PUBLIC_USER_GITHUB,
    instagram: process.env.NEXT_PUBLIC_USER_INSTAGRAM,
  },
  projects: null,
  // [
  //   {
  //     name: `morethan-log`,
  //     href: "https://github.com/morethanmin/morethan-log",
  //   },
  // ],
  // blog setting (required)
  blog: {
    title: "HJin-log",
    description: "welcome to my blog!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: process.env.NEXT_PUBLIC_BLOG_LINK,
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 30, // revalidate time for [slug], index
}

module.exports = { CONFIG }
