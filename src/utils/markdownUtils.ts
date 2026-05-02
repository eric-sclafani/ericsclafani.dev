import MarkdownIt from 'markdown-it';
import parseMD from 'parse-md';

interface MarkdownFile {
	metadata: Record<string, string>;
	HTMLContent: string;
}

export const loadMarkdown = (
	loadedFiles: Record<string, string>,
): MarkdownFile[] => {
	const md = new MarkdownIt();

	const loaded: MarkdownFile[] = [];

	Object.entries(loadedFiles).forEach(([_, stringContent]) => {
		const { metadata, content } = parseMD(stringContent);
		const m = metadata as Record<string, string>;
		loaded.push({ metadata: m, HTMLContent: md.render(content) });
	});

	return loaded;
};
