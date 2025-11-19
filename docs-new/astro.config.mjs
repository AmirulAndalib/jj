// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Jujutsu docs",
			logo: {
				src: "./src/assets/jj-logo.svg",
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},
			editLink: {
				baseUrl: "https://github.com/jj-vcs/jj/edit/main/docs-new",
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/withastro/starlight",
				},
				{
					icon: "discord",
					label: "Discord",
					href: "https://discord.gg/dkmfj3aGQN",
				},
			],
			credits: true, // TODO: remove? I personally like this info as a site visitor.
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", slug: "guides/example" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
