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

const handleImageUpload = (file) => {
    console.log("File:", file)

    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (data) => {
            //push to express-s3
          resolve("someurl.com");
        };
        reader.readAsDataURL(file);
      }).then(console.log("done"));
   };

export default function Editor () {
    return (
        <MdEditor
            style={{ height: "500px"}}
            renderHTML={(text) => mdParser.render(text)}
            onChange={handleEditorChange}
            onImageUpload={handleImageUpload}
            config={{view: {html: false}}}
        />
    )
}