/**
 * react入口文件
 */
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {Main} from 'cons/index.js'
import {User} from 'coms/index'

ReactDOM.render(
    (
        <Router>
            <Main></Main>
        </Router>
    )   ,
 document.getElementById('app'))