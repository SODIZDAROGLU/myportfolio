import React from 'react';
import { ReactComponent as Atom} from './svg/atom-svgrepo-com.svg';
import { ReactComponent as Browser} from './svg/browser-coding-svgrepo-com.svg';
import { ReactComponent as Bug} from './svg/bug-insect-code-development-svgrepo-com.svg';
import { ReactComponent as Cloud} from './svg/cloud-computing-coding-svgrepo-com.svg';
import { ReactComponent as Code02} from './svg/code-02-svgrepo-com.svg';
import { ReactComponent as CodeNewbie} from './svg/codenewbie-svgrepo-com.svg';
import { ReactComponent as CodingFile} from  './svg/coding-file-svgrepo-com.svg';
import { ReactComponent as CodingMonitor} from './svg/coding-monitor-svgrepo-com.svg';
import { ReactComponent as Coding1} from './svg/coding-svgrepo-com (1).svg';
import { ReactComponent as Coding2} from './svg/coding-svgrepo-com (2).svg';
import { ReactComponent as Coding3} from './svg/coding-svgrepo-com (3).svg';

import { ReactComponent as CodingWeb} from './svg/coding-website-svgrepo-com.svg';
import { ReactComponent as Css} from './svg/css-svgrepo-com.svg';

import { ReactComponent as Html} from './svg/html-svgrepo-com.svg';
import { ReactComponent as Html5} from './svg/html5-svgrepo-com.svg';
import { ReactComponent as Javascript} from './svg/javascript-svgrepo-com.svg';
import { ReactComponent as Smartphone} from './svg/smartphone-coding-svgrepo-com.svg';
import { ReactComponent as Stack} from './svg/stack-svgrepo-com.svg';


import "./AnimatedBackGround.css"

function AnimatedBackground({children}) {
    let arr = [];
    let qty = 10;

    for (let i = 0; i < qty; i++) {
            arr.push(i);
    }

    const layers = arr.map(i =>{
        return(
            <div key = {i} className = "animated-row">
                <div>
                    <Atom/>
                    <Browser/>
                    <Bug/>
                    <Cloud/>
                    <Code02/>
                    <CodeNewbie/>
                    <CodingFile/>
                    <CodingMonitor/>
                    <Coding1/>
                    <Coding2/>
                    <Coding3/>
                  
                    <CodingWeb/>
                    <Css/>
                    
                    <Html/>
                    <Html5/>
                    <Javascript/>
                    <Smartphone/>
                    <Stack/>
                  
              
                </div>
            </div>
        )
    });
        
  return (
    <section className='animated-section'>
        {layers}
        {children}
    </section>
  )
}

export default AnimatedBackground;