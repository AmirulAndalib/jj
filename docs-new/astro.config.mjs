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
				{ label: "Home", slug: "index" },
				{
					label: "Getting started",
					items: [
						{ label: "Installation and setup", slug: "install-and-setup" },
						{ label: "Tutorial and bird's eye view", slug: "tutorial" },
						{ label: "Working with Gerrit", slug: "gerrit" },
						{ label: "Working with GitHub", slug: "github" },
						{ label: "Working on Windows", slug: "windows" },
					],
				},
				{ label: "FAQ", slug: "faq" },
				{ label: "CLI reference", slug: "cli-reference" },
				{ label: "Testimonials", slug: "testimonials" },
				{ label: "Community-built tools", slug: "community_tools" },
				{
					label: "Concepts",
					items: [
						{ label: "Working copy", slug: "working-copy" },
						{ label: "Bookmarks", slug: "bookmarks" },
						{ label: "Conflicts", slug: "conflicts" },
						{ label: "Operation log", slug: "operation-log" },
						{ label: "Glossary", slug: "glossary" },
					],
				},
				{
					label: "Guides",
					items: [
						{ label: "Divergent changes", slug: "guides/divergence" },
						{ label: "Multiple remotes", slug: "guides/multiple-remotes" },
					],
				},
				{
					label: "Reference",
					items: [
						{ label: "Settings", slug: "config" },
						{ label: "Fileset language", slug: "filesets" },
						{ label: "Revset language", slug: "revsets" },
						{ label: "Templating language", slug: "templates" },
					],
				},
				{
					label: "Comparisons",
					items: [
						{ label: "Git comparison", slug: "git-comparison" },
						{ label: "Git command table", slug: "git-command-table" },
						{ label: "Git compatibility", slug: "git-compatibility" },
						{ label: "Sapling comparison", slug: "sapling-comparison" },
						{ label: "Other related work", slug: "related-work" },
					],
				},
				{
					label: "Technical details",
					items: [
						{ label: "Core tenets", slug: "core_tenets" },
						{ label: "Architecture", slug: "technical/architecture" },
						{ label: "Concurrency", slug: "technical/concurrency" },
						{ label: "Conflicts", slug: "technical/conflicts" },
					],
				},
				{
					label: "Contributing",
					items: [
						{ label: 'Guidelines and "How to...?"', slug: "contributing" },
						{ label: "Code of conduct", slug: "code-of-conduct" },
						{ label: "Style guide", slug: "style_guide" },
						{ label: "Design docs", slug: "design_docs" },
						{ label: "Design doc blueprint", slug: "design_doc_blueprint" },
						{ label: "Releasing", slug: "releasing" },
						{
							label: "Temporary voting for governance",
							slug: "governance/temporary-voting",
						},
						// { label: "Governance", slug: "governance/GOVERNANCE" },
					],
				},
				{
					label: "Design docs",
					items: [
						{ label: "git-submodules", slug: "design/git-submodules" },
						{
							label: "git-submodule-storage",
							slug: "design/git-submodule-storage",
						},
						{ label: "JJ run", slug: "design/run" },
						{ label: "Sparse patterns v2", slug: "design/sparse-v2" },
						{ label: "Tracking branches", slug: "design/tracking-branches" },
						{
							label: "Copy tracking and tracing",
							slug: "design/copy-tracking",
						},
					],
				},
				{ label: "Development roadmap", slug: "roadmap" },
				{ label: "Changelog", slug: "changelog" },
			],
		}),
	],
});
