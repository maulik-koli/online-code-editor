import { Controlled as CodeEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

export default function Editor({ lable, value, onChange, option }) {
    const handleChange = (editor, data, value) => {
        onChange(value);
    };

    return (
        <div className='editor'>
            <header>
                <span>{lable}</span>
            </header>
            <CodeEditor
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    mode: option,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    );
}
