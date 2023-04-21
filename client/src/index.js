import React from "react-dom"
import {createRoot} from 'react-dom/client'
import App from "./App"
import "../src/styles.css"

const node = document.getElementById('root')
const root = createRoot(node)
root.render(<App/>)