
let panels = [
    // 1982
    [
        `Adobe was founded by Charles M. Geschke and John E. Warnock in December 1982 and is headquartered in San Jose, CA.“`,
        `Charles Geschke and John Warnock created not only a company in 1982, they created an industry.`,
        `Adobe was founded in 1982 by John Warnock and Charles Geschke, both former employees of Xerox Corp.'s Research Center in Palo Alto, California.`,
        `Adobe’s commitment to revolutionizing how people engage with ideas and information is as strong today as it was in 1982.`,
        `Adobe Systems Inc. was founded in 1982 by research John Warnock and Charles Geschke.`,
        `Steve Jobs attempted to buy the company for $5,000,000 in 1982, but Warnock and Geschke refused.`,

    ],
    // 1986
    [
        `Adobe entered the NASDAQ Composite index in August 1986.`,
        `In 1986, Adobe signed an agreement to supply Texas Instruments Inc. with the software for two of its laser printers, producing the first PostScript-equipped printers made for use with IBM-compatible personal computers.`,
        `By the end of 1986, Adobe reported sales of $16 million and income of $3.6 million.`,
        `In 1986 Apple accounted for 80 percent of Adobe's sales, and the other 20 percent was composed of retail sales, an area into which Adobe moved the following year.`,
        `Texas Instruments Inc. began using PostScript in its IBM-compatible PCs in 1986.`,
    ],
    // 1987
    [
        `1987: Warnock was inspired to work on developing a drawing tool because he saw how his wife, a graphic designer, worked—and had a sense of what kind of software would be useful to her.`,
        `In 1987, Adobe released Illustrator, which was especially remarkable for its Pen feature that allowed users to draw curved lines.`,
        `In 1987 the company introduced the Adobe Illustrator, a design and illustration software program.`,
        `1987: Adobe releases Adobe Illustrator and establishes an international presence through its European subsidiary.`,
        `In 1987, Adobe launched its Illustrator design software program and expanded overseas by establishing Adobe Systems Europe.`,
    ],
    // 1988
    [
        `1988: Adobe was breaking even on Illustrator at about $19 million in revenue, seeing decent—but not skyrocketing—sales.`,
        `By 1988 many industries and universities had adopted the Illustrator standard.`,
        `In 1988 more than 25 PostScript printers and typesetters were on the market and 20 computer corporations had signed PostScript licensing agreements with Adobe.`,
        `The company's revenues for 1988 were an impressive $83.5 million, representing a 112 percent increase over revenues of $39.3 million the year before.`,
        `Moreover, net income for 1988 increased 137 percent, reaching $21 million.`,
    ],
    // 1990
    [
        `in February 1990 -Adobe took a leadership position in digital imaging with the release of Adobe Photoshop.`,
        `In the mid-1990’s and onwards, Adobe authored a number of products with its growing expansion of customer solutions and acquired technologies.`,
        `Late in 1990, Adobe acquired BluePoint Technologies, a leading creator of chips for rendering type.`,
        `In 1990 the company hit a new record of $168.7 million in revenues, with net income of $40 million.`,
    ],
    // 2000
    [
        `In January 2000 Adobe was named one of the 100 best companies to work for in America by Fortune.`,
        `Adding to its e-books holdings, Adobe purchased display software manufacturer Glassbook Inc. in August of 2000.`,
        `2000: Thanks to Bruce Chizen’s work as the head of the new Consumer Products Division at Adobe, other leadership had started taking note of his vision and respected his opinion.`,
        `Then, when Geschke retired in 2000, Chizen was named president.`,
        `In 2000, Warnock and Geschke, co-founders of an growing 18-year old company, assumed the positions of co-chairmen of the board.`,
    ],
    // 2003
    [
        `In May, 2003 Adobe purchased audio editing and multitrack recording software Cool Edit Pro from Syntrillium Software for $16.5 million, as well as a large loop library called "Loopology". Adobe then renamed Cool Edit Pro to "Adobe Audition" and included it in the Creative Suite.`,
        `2003: Adobe bundled all of their products together in the Adobe Creative Suite to unify their branding and start tying their products together.`,
        `Launched in 2003, Adobe Flex™ gave the enterprise a powerful set of building blocks for creating a richer, more responsive presentation tier for enterprise applications.`,
    ],
    // 2011
    [
        `In January 2011, Adobe acquired DemDex, Inc. with the intent of adding DemDex's audience-optimization software to its online marketing suite.`,
        `In October 2011, Adobe acquired Nitobi Software, the makers of the mobile application development framework PhoneGap.`,
        `In November 2011, Adobe announced that they would cease development of Flash for mobile devices following version 11.1.`,
        `In December 2011, Adobe announced that it entered into a definitive agreement to acquire privately held Efficient Frontier.`,
        `2011: Adobe announced that it would leave Flash behind after it was rejected by Apple and mobile.`,
        `At Photoshop World 2011, Adobe unveiled a new mobile photo service.`,
    ],
    // 2019
    [
        `In January 2019, Adobe announced its acquisition of 3D texturing company Allegorithmic.`,
    ],
    // 2020
    [
        `Adobe Unveils Innovation Across Creative Cloud Services at MAX 2020 Creativity Conference — Cheddar`,
    ],
    // 2021
    [
        `How Adobe's CEO Designed a Lasting Image in Silicon Valley — Wall Street Journal February 6, 2021`,
    ]
]

const AddTlEvent = (textContent) => {
    let timepoint = document.createElement('div');
    timepoint.classList.add('tl-timepoint');

    let highlight = document.createElement('div');
    highlight.classList.add('tl-highlight');

    let content = document.createElement('div');
    content.classList.add('hl-content');

    let date = document.createElement('div');
    date.classList.add('tl-date');

    let brief_desc = document.createElement('div');
    brief_desc.classList.add('brief-desc');

    brief_desc.textContent = textContent;

    content.appendChild(date);
    date.appendChild(brief_desc);
    timepoint.appendChild(highlight);
    highlight.appendChild(content);

    tl_container.appendChild(timepoint);
}

const AddTlHeading = (textContent) => {
    let timepoint = document.createElement('div');
    timepoint.classList.add('tl-timepoint');

    let highlight = document.createElement('div');
    highlight.classList.add('tl-highlight');

    let content = document.createElement('div');
    content.classList.add('hl-content');

    let date = document.createElement('div');
    date.classList.add('tl-date');

    let tl_marker_cont = document.createElement('div');
    tl_marker_cont.classList.add('tl-marker-cont');

    let tl_marker = document.createElement('div');
    tl_marker.classList.add('tl-marker');

    let year_txt_cont = document.createElement('div');
    year_txt_cont.innerText = `${textContent}'s Highlights`;

    tl_marker_cont.appendChild(tl_marker);
    tl_marker_cont.appendChild(year_txt_cont);
    content.appendChild(date);
    date.appendChild(tl_marker_cont);
    timepoint.appendChild(highlight);
    highlight.appendChild(content);

    tl_container.appendChild(timepoint);
}

let tl_container = document.getElementById('tl-hpoint');

let index = 0;
panels.forEach(year => {
    let yearStr;
    switch (index) {
        case 0:
            yearStr = "1982";
            break;
        case 1:
            yearStr = "1986";
            break;
        case 2:
            yearStr = "1988";
            break;
        case 3:
            yearStr = "1990";
            break;
        case 4:
            yearStr = "2000";
            break;
        case 5:
            yearStr = "2003";
            break;
        case 6:
            yearStr = "1982";
            break;
        case 7:
            yearStr = "2011";
            break;
        case 8:
            yearStr = "2019";
            break;
        case 9:
            yearStr = "2020";
            break;
        case 10:
            yearStr = "2021";
            break;
        default:
            break;
    }

    AddTlHeading(yearStr);
    year.forEach(panel => {
        AddTlEvent(panel);
    })
    index++;
})

// TEMPLATE

/* <div class="tl-timepoint">
    <!-- EVENT DATE -->
    <div class="tl-highlight">
        <!-- CONTENT -->
        <div class="hl-content">
            <!-- DATE -->
            <div class="tl-date">
                <div class="brief-desc">
                    in February 1990 -Adobe took a leadership position in digital imaging with the
                    release of Adobe Photoshop.
                </div>
            </div>

            <!-- MORE CONTENT -->
            <div class="hl-more">

            </div>
        </div>
    </div>
</div> */

/* TIMELINE FOLLOW ON SCROLL */
var indicator = document.getElementById("tl-indicator");
var sticky = indicator.offsetParent.offsetTop - 20;
var endSticky = indicator.offsetParent.offsetTop + indicator.parentNode.parentElement.clientHeight - 20;

window.onscroll = () => {
    if (window.pageYOffset >= sticky && window.pageYOffset < endSticky) {
        indicator.classList.add("sticky")
    } else {
        indicator.classList.remove("sticky");
    }
};


