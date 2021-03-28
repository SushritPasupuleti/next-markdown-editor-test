import dynamic from 'next/dynamic';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
    ssr: false
});

const mdParser = new MarkdownIt(/* Markdown-it options */);

function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text)
}

export default function () {
    return (
        <MdEditor
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
        />
    )
}