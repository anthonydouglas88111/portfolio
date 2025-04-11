# Portfolio

This portfolio is crafted using [Next.js](https://nextjs.org/)

## 🖥️ Technologies Used

- [Nextjs.js](https://nextjs.org/) : A React-based, open-source framework for building efficient and scalable web applications.
- [Tailwind CSS](https://tailwindcss.com) : A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org): A typed superset of JavaScript that provides enhanced tooling and developer productivity.
- [Framer motion](https://www.framer.com/motion/): A React animation library that brings motion to your user interfaces.
- [EmailJS](https://www.emailjs.com/): A service that enables you to send emails from your web application without the need for server-side code.

## 🌐 Open Source

Feel free to use it as a template for your own portfolio or any other projects. You are granted the freedom to modify, distribute, and use the code for any purpose, unleashing your creativity without any restrictions.

If you have any improvements, ideas or find any bugs, don't hesitate to submit a pull request or open an issue.

## 🌟 Customizable theme

There are some premade themes that I have made for this portfolio inside `theme-examples.css` file. Just copy paste the styles to `globals.css` after that you are good to go or Create your own theme by editing the css variables in `globals.css`

### Note

1. When creating custom theme the css variables only take hsl value seperated by space
2. Theme color for Animated Logo have to be hard coded.

### ✨ Seo

1. The project automatically generates sitemap.xml and robots.txt files within the public folder by leveraging the project's file structure. This process is initiated through the scripts located at src/scripts/generateSitemap.mjs, executed either after the project is built or by running the command `pnpm sitemap`.
2. It's important to note that [dynamic routes](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes), identified by file or folder names in square brackets (e.g., [segmentName], [id], or [slug]), are excluded from the sitemap.xml.
3. Update google site verification code with your own inside `/src/data/metadata.mjs`. Can be created for free using your google email id at <https://search.google.com/search-console/welcome>

## 🛠️ Development setup

### Step 1 - Install dependencies

```bash
pnpm install
```

### Step 2 - Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the portfolio.
