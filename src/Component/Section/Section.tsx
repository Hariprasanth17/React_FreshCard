import "./Section.css"

const Section = () => {
    return (
        <div>
            <div className="container px-4 py-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                    <div className="feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-clock-history"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-gift"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-box-seam"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                    <div className="feature col">
                        <div className="feature-icon bg-gradient">
                            <i className="bi bi-arrow-repeat"></i>
                        </div>
                        <h2>Featured title</h2>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
