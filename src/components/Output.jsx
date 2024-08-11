import { useContext, useState, useEffect} from 'react'

import { DataTextContext } from '../context/DataText.jsx'

export default function Output() {
    const [src, setSrc] = useState('')
    const {html, css, js} = useContext(DataTextContext)

    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

    useEffect(() => {
        const timer = setTimeout(() => {
            setSrc(srcCode)
        }, 1000)

        return () => clearTimeout(timer)
    }, [html, css, js])

    return (
        <div>
            <iframe srcDoc={src} title='Output' sandbox='allow-scripts'/>
        </div>
    )
}
