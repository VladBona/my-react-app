import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div>
        <div className="Hero">
            <div className="HeroGroup">
                <h1>Learn to design and code React apps</h1>
                <p>Welcome to your new Gatsby site.</p>
                <Link to="/page-2/">watch the video1</Link>
            </div>
        </div>
    </div>
)

export default IndexPage
