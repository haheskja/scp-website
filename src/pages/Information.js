import React, { useState, useEffect } from 'react';
import 'purecss/build/pure.css'
import Prism from 'prismjs'



const Information = () => {
    const [state, setState] = useState({ section: "website-info" });

    const handleSelect = (event, section) => {
        event.preventDefault();
        setState({...state, section})
    }

    useEffect(() => {
        Prism.highlightAll();
    })

    const cliInfo = <>
        <h3 style={{marginBottom:'25px'}}>DHIS2 SCP Command Line Interface (CLI)</h3>
        <p>
            The DHIS2 SCP provides a command line interface for verifying components.
            This command line interface gives developers of components a means to determine
            if their packages comply to the standards set by the DHIS2 core team.
        </p>
        <p>
            The CLI provides a command, <code className="language-bash">dhsi2-scp-cli verify</code>,
            that performs the same verification that will be performed as a preqrequisite for component
            merge requests.
        </p>
        <p>Currently the verify command will perform the following checks:</p>
        <ul>
            <li>Verify that the correct keyword is specified in <code>package.json</code>.</li>
            <li>Verify that linting completes without error.</li>
        </ul>
        <p>
            <a href="https://github.com/haheskja/scp-boilerplate" rel="noopener noreferrer" target="_blank">The git repository for the CLI</a>
        </p>
    </>

    const websiteInfo = <>
        <h3 style={{marginBottom:'25px'}}>DHIS2 Component Search</h3>
        <p>
            The DHIS2 Component Search is a website to search for components created by the HISP community.
        </p>
        <p>
            There are currently three "types" of searches:
        </p>
        <ul>
            <li>All. This searches the entire npm registry.</li>
            <li>Unverified. This searches the entire npm registry within one particular keyword, e.g. <code>dhis2</code> or <code>dhis2-ui</code></li>
            <li>Verified. Almost the same as unverified, these are components given a "seal of approval" from the core team</li>
        </ul>
        <p>
            <a href="https://github.com/haheskja/scp-website" rel="noopener noreferrer" target="_blank">The git repository for Component Search</a>
        </p>
    </>

    return (
        <>
            <div className="pure-g content">
                <div className="pure-u-1-1 pure-u-md-1-1">
                    <div className="l-box">
                        <h1>Information</h1>
                        <div className="pure-g">
                            <div className="pure-u-1-5">
                                <div className="website-info">
                                    <a href="/#" onClick={(event) => { handleSelect(event,"website-info") }}>
                                        Component search
                                    </a>
                                </div>
                                <div className="cli-info">
                                    <a href="/#" onClick={(event) => { handleSelect(event,"cli-info") }}>
                                        CLI
                                    </a>
                                </div>
                            </div>
                            <div className="pure-u-4-5">
                                { (state.section === "website-info") ? websiteInfo : null }
                                { (state.section === "cli-info") ? cliInfo : null }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;