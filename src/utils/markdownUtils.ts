import MarkdownIt from 'markdown-it';
import parseMD from 'parse-md';

interface MarkdownFile {
	metadata: Record<string, string>;
	path: string;
	HTMLContent: string;
}

export const loadMarkdown = (
	loadedFiles: Record<string, string>,
): MarkdownFile[] => {
	const md = new MarkdownIt();

	const loaded: MarkdownFile[] = [];

	Object.entries(loadedFiles).forEach(([path, stringContent]) => {
		const { metadata, content } = parseMD(stringContent);
		const m = metadata as Record<string, string>;
		loaded.push({
			metadata: m,
			path: path,
			HTMLContent: md.render(content),
		});
	});

	return loaded;
};
