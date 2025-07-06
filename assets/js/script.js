const indi_screens = document.querySelectorAll("section.display .screen .indi-screen");
const menu_btns = document.querySelectorAll("section.display .menu li");
const footer_links = document.querySelectorAll("footer li");
const download_button = document.getElementById("download");

for (let i = 0; i < menu_btns.length; i++) {
    const button = menu_btns[i];
    button.onclick = () => {
        for (let j = 0; j < indi_screens.length; j++) {
            const screen = indi_screens[j];
            screen.style.display = "none";
        }
        for (let j = 0; j < menu_btns.length; j++) {
            const button = menu_btns[j];
            button.removeAttribute("class");
        }
        menu_btns[i].setAttribute("class", "active");
        indi_screens[i].style.display = "block";
    }
}
for (let i = 0; i < footer_links.length; i++) {
    const button = footer_links[i];
    button.onclick = () => {
        for (let j = 0; j < indi_screens.length; j++) {
            const screen = indi_screens[j];
            screen.style.display = "none";
        }
        for (let j = 0; j < menu_btns.length; j++) {
            const button = menu_btns[j];
            button.removeAttribute("class");
        }
        menu_btns[i].setAttribute("class", "active");
        indi_screens[i].style.display = "block";
        scrollToSection();
    }
}

download_button.onclick = () => {
    window.open("https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/CFP%20-%20AISC%202025%20(2).pdf?alt=media&token=42ea407b-175f-47de-9119-e6f6ea7750e7", "_blank")
}

function scrollToSection() {
    var targetSection = document.getElementById('display');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

const intSpeakers = [
    {
        'name': 'Prof. Kamaljeet Sandhu',
        'position': 'AI Hub / University of New England, Australia',
        'contact': '',
        'image': '/assets/images/speaker/kamal.jpg',
        'link': 'https://sites.google.com/view/abcc99/director-prof-kamaljeet-sandhu',
        "session-title": 'Quantum AI Innovations Adoption for Global Reserve Banks in CBDC Governance: Opportunities & Challenges of Fintech & Cybersecurity for the US Federal Reserve System & the Reserve Bank of India.',
        "abstract": "Quantum AI Innovations' adoption has the potential to modernize global reserve banks and the financial systems for the governance of CBDCs (central bank digital currencies). Research suggests that quantum computers are the most advanced and the next generation of computing systems that will drive technological innovations along with Artificial Intelligence (AI) for digital transformation of fintech (e.g. merger of finance and technology, called fintech). CBDCs are a new digital form of money being piloted by Reserve Banks around the globe that can transform the financial system. These opportunities can innovate the efficiency of the US Federal Reserve System, which is piloting its version of CBDC. The hegemony of the US dollar as a global currency in the form of CBDC has enormous benefits for the global economy, including India, which has become the fourth-largest economy and the biggest trading partner of the USA. The Reserve Bank of India is also trialling its version of CBDC, which will increase the efficiency of the Indian financial system to become a five-trillion-dollar economy by 2027. <br><br> However, such opportunities also present challenges, such as building a robust quantum technological platform with software, hardware, and networks that are safe and secure, and have modern cybersecurity features built in, as well as being interoperable with other countries' central banks that adopt advanced fintech capabilities. In comparison, China’s CBDC (e.g. digital Yuan) being ahead of other advanced nations, and China’s recent superiority in quantum computing (e.g. significant breakthrough in quantum computing with Zuchongzhi 3.0, a 105-qubit superconducting quantum processor, achieving quantum supremacy), and embedding with AI innovations can pose serious competition both for the USA and India, and as well as reshaping the global critical financial infrastructure; and especially has the potential to challenge and replace the US hegemony of the US Dollar from the US Federal Reserve Systems, with the Chinese digital Yuan, on a global scale unimaginable.  For the US Federal Reserve, building such an advanced quantum AI-driven critical financial infrastructure on a global scale requires a deeper understanding of the complex nature of global finance and interoperability, and embedding into the CBDC governance software engineering architecture to power fintech for digital transformation that can then autonomously be driven by AI. Time is short, and competitors are ahead."
    },
    {
        'name': 'Prof. Bimal Roy',
        'position': 'Professor, Applied Statistics Unit, Indian Statistical Institute, Kolkata',
        'contact': '',
        'image': '/assets/images/speaker/bimal.jpg',
        'link': 'https://www2.isical.ac.in/~bimal/',
        "session-title": 'AI for Cyber Security',
        "abstract": "AI algorithms are explored to test for vulnerability of Cybersecurity and had some limited success too. Few such cases will be presented."
    },
    {
        'name': 'Prof. Mohamed Nabil Srifi',
        'position': 'Ibn Tofaïl University, Kenitra',
        'contact': '',
        'image': '/assets/images/speaker/nabil.jpg',
        'link': 'https://www.linkedin.com/in/m-nabil-srifi-b712658a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
        'name': 'Prof. Indranil SenGupta',
        'position': 'City University of New York (CUNY)- Hunter College',
        'contact': '',
        'image': '/assets/images/speaker/indranil.jpg',
        'link': 'https://math.hunter.cuny.edu/indranilsg/',
        'session-title': "From pixels to profits: an image-based determination of rare fluctuations in finance",
        'abstract': 'For this presentation, we implement some "image-based" techniques for estimating rare events in financial time series. We employ specific neural networks to recognize patterns in financial "photos", followed by a bootstrapped image similarity distribution to predict unusual events relevant to financial market analysis. Extending on literature about rare event classification and stochastic modeling in financial analytics, the proposed method uses a sliding window to store the input features as tabular data, creates an image of the time series window, and then uses the feature vector of a pre-trained convolutional neural network (CNN) to leverage pre-event images and predict rare events. This study not only shows that the suggested technique can identify between event and non-event "photos", but it is also effective when only little and highly imbalanced data is given.'
    },
    {
        'name': 'Prof. Sudip Misra',
        'position': 'Professor, Department of Computer Science and Engineering, IIT Kharagpur',
        'contact': '',
        'image': '/assets/images/speaker/sudip.jpg',
        'link': 'https://cse.iitkgp.ac.in/~smisra/'
    },
    {
        'name': 'Prof. Subhadip Basu',
        'position': 'Professor, Department of Computer Science & Engineering, Jadavpur University',
        'contact': '',
        'image': '/assets/images/speaker/subhadip.jpg',
        'link': 'https://cse.jadavpuruniversity.in/faculty/subhadip-basu',
    },
    {
        'name': 'Ms. Usha Rengaraju',
        'position': '(World’s First Woman Triple Kaggle Grandmaster Chief Data Scientist at Exa Protocol | Founder NeuroAI',
        'contact': '',
        'image': '/assets/images/speaker/usha.jpg',
        'link': 'https://in.linkedin.com/in/usha-rengaraju-b570b7a2'
    },
    {
        "name": "Mr. Sourabh Mukherjee",
        "position": "India Practice Head - Data-AI Advisory, Accenture, Kolkata",
        "contact": "sourabh.mukherjee@accenture.com",
        "image": "/assets/images/speaker/sourabh.jpg",
        "link": "https://in.linkedin.com/in/sourabhmukherjee",
        "session-title": "Enterprise Digital Brain",
        "abstract": "In today’s dynamic business environment, the concept of an Enterprise Digital Brain is rapidly emerging as a strategic imperative for organizations seeking to harness data and AI at scale. This lecture explores the architecture and practical applications of the Enterprise Digital Brain, with a focus on real-world industry use cases across sectors. We will delve into the foundational elements of data and AI architectures, including the role of intelligent agents, the model switchboard for dynamic model orchestration, and a robust data foundation built on data products and domain-specific ontologies. Attendees will gain a comprehensive understanding of how these components interoperate to enable adaptive, intelligent decision-making systems that drive innovation, operational efficiency, and competitive advantage."
    },
    {
        "name": "Prof. Ansuman Banerjee",
        "position": "Professor, Advanced Computing and Microelectronics Unit, Indian Statistical Institute, Kolkata",
        "contact": "later",
        "image": "/assets/images/speaker/ansuman.jpg",
        "link": "https://isi.irins.org/profile/111420",
        "session-title": "Verified Deep Learning: A Formal Methods perspective",
        "abstract": "Artificial Intelligence (AI) assisted systems are being extensively used today in a variety of system deployments including safety- critical systems like self - driving cars and aircraft collision avoidance.Recent advances in Machine Learning(ML) and Deep Learning(DL) in particular, coupled with significant advances in computing architectures has resulted in widespread deployment of such systems in real practice. However, in spite of phenomenal research advances and hardware sophistication, these systems still pose an arsenal of risks.These range from privacy concerns, to algorithmic bias and black box decision making, to broader questions of hardware alignment, self - improvement, and risk from unexplainable intelligence.Given the scale and complexity of today’s systems, exhaustive verification of these systems with respect to satisfaction of safety objectives under all possible inputs is becoming an insurmountable challenge, due to factors like nonlinearity of the model, high dimensional input spaces, real - valued weights.Our objective is to augment AI - assisted systems with safety and robustness certificates to enable wider adoption in mainstream design flows, as they become increasingly more capable and creative.This talk will present a scalable methodology for ensuring robustness properties of AI - assisted systems that employ Neural Networks(NN) and their variants."
    },
    {
        "name": "Mr. Shamik Misra",
        "position": "Senior Escalation Engineer, (Data & AI) division, Microsoft India (R&D) Pvt. Ltd.",
        "contact": "later",
        "image": "/assets/images/speaker/shamik.jpg",
        "link": "https://in.linkedin.com/in/shamik-misra-bb7b4a33a",
        "session-title": "Responsible AI in the Real World: Building Responsible and Scalable Solutions for Sustainability",
        "abstract": "Responsible AI refers to the practice of designing, evaluating, and implementing artificial intelligence systems in a manner that is ethical, secure, and trustworthy. Since AI systems reflect a multitude of decisions made throughout their development and deployment, it's essential to ensure those decisions are guided by values that prioritize human needs and societal benefit. Responsible AI encourages thoughtful choices; from defining the system’s purpose to shaping user interaction, with the aim of promoting fairness, inclusivity, and accountability throughout the AI lifecycle. <br><br> In my presentation, I will focus on Microsoft's Responsible AI and its standards — a comprehensive framework grounded in six core principles: <ul> <li>Fairness</li> <li>Reliability and Safety</li> <li>Privacy and Security</li> <li>Inclusiveness</li> <li>Transparency</li> <li>Accountability</li> </ul> <br>At Microsoft, these principles form the foundation of our commitment to developing AI responsibly. As AI becomes increasingly embedded in the tools and services people rely on daily, adhering to these principles ensures that technology continues to serve the greater good — in a manner that is both ethical and sustainable."
    },
    {
        "name": "Dr. Hena Ray",
        "position": "Joint Director at CDAC, Kolkata",
        "contact": "later",
        "image": "/assets/images/speaker/hena.jpg",
        "link": "https://www.linkedin.com/in/dr-hena-ray-8178671a7"
    },
    {
        "name": "Dr. Ritajit Majumdar",
        "position": "Research Scientist, IBM Quantum",
        "contact": "later",
        "image": "/assets/images/speaker/ritajit.jpg",
        "link": "https://in.linkedin.com/in/dr-ritajit-majumdar-59683442",
        "session-title": "Quantum-centric supercomputing: A new perspective on computing",
        "abstract": "Quantum-centric supercomputing represents a revolutionary paradigm in computer science, integrating quantum computing with traditional high-performance computing (HPC). This synergistic approach aims to establish a computational system capable of resolving highly complex real-world challenges. This talk will commence with an overview of the foundational principles and prospective capabilities of quantum computing. Subsequently, we shall introduce the quantum-centric supercomputing framework, elucidating how problems of interest can be modularized for optimal integration within this framework. Recent advancements in this domain include the successful resolution of a complex chemistry problem within ~2 hours utilizing this framework, a task estimated to require approximately eight hours under a solely traditional HPC model. The discussion will conclude by addressing the National Quantum Mission (NQM) and its anticipated contributions to the Indian quantum ecosystem."
    }

]

const interspeakerList = document.querySelector('.international-speaker-list');
const speakerList = document.querySelector('.speaker-list');
intSpeakers.forEach(speaker => {
    const indiSpeaker = document.createElement('div');
    const speakerImage = document.createElement('img');
    const speakerName = document.createElement('h2');
    const speakerPosition = document.createElement('p');
    const speakerLink = document.createElement('div');
    const speakerLinkImage = document.createElement('img');
    const speakerLinkText = document.createElement('p');


    speakerLinkImage.src = '/assets/images/menu-icon.svg';
    speakerLinkText.textContent = 'More Info';
    indiSpeaker.setAttribute('class', 'indi-speaker');
    if (speaker.image == '') {
        speakerImage.src = '/assets/images/default-image.png';
    } else {
        speakerImage.src = speaker.image;
    }
    indiSpeaker.appendChild(speakerImage);
    speakerName.textContent = speaker.name;
    indiSpeaker.appendChild(speakerName);
    if (speaker.position != '') {
        speakerPosition.textContent = speaker.position;
        indiSpeaker.appendChild(speakerPosition);
    }
    if (speaker.link != '') {
        speakerLink.onclick = () => {
            // window.open(speaker.link, '_blank')
            const aboutSpeaker = document.querySelector('.about-speaker');
            const aboutSpeakerImg = document.querySelector('.about-speaker .about-box img');
            const aboutSpeakerName = document.querySelector('.about-speaker .about-box h2');
            const aboutSpeakerPosition = document.querySelector('.about-speaker .about-box p');
            const aboutSpeakerButton = document.querySelector('.about-speaker .about-box button');
            const sessionTitle = document.querySelector('.about-speaker .about-box .lecture-box h3');
            const abstract = document.querySelector('.about-speaker .about-box .lecture-box p');
            const lectureBox = document.querySelector('.about-speaker .about-box .lecture-box');

            if (speaker['session-title'] == null) {
                lectureBox.style.display = "none";
            } else {
                lectureBox.style.display = "flex";
            }
            sessionTitle.textContent = `Lecture Title: ${speaker['session-title']}`;
            abstract.innerHTML = speaker.abstract;
            aboutSpeakerImg.src = speaker.image;
            aboutSpeakerName.textContent = speaker.name;
            aboutSpeakerPosition.textContent = speaker.position;
            aboutSpeakerButton.onclick = () => {
                window.open(speaker.link, '_blank')
            }
            aboutSpeaker.style.display = "flex";
        }
        speakerLink.appendChild(speakerLinkImage);
        speakerLink.appendChild(speakerLinkText);
        indiSpeaker.appendChild(speakerLink);
    }

    interspeakerList.appendChild(indiSpeaker);
});
{/* <div class="speaker-list">
        <div class="indi-speaker">
            <img src="/assets/images/default-image.png" alt="">
            <h2>Assoc Prof Anupam Chattopadhyay</h2>
            <p>Associate Professor, School of Computer Science and Engineering</p>
            <div><img src="/assets/images/menu-icon.svg" alt=""> <p>More Info</p></div>
        </div>
    </div> */}

// Register link 
const registerBtn = document.getElementById('registerButton');
registerBtn.onclick = () => {
    window.open('https://forms.gle/umyVimZiPCNQN9UX8', '_blank') //new link by swagata maam 
}
const tutorialBtn = document.getElementById('tutorialBtn');
/* tutorialBtn.onclick = () => {
    window.open('https://forms.gle/nC5YxavKaHciwgn46', '_blank') //new link by swagata maam
}*/
const listernerBtn = document.getElementById('listenerBtn');
listernerBtn.onclick = () => {
    window.open('https://forms.gle/L67mXzQ1mKFbzqUc8', '_blank') //new link by swagata maam
}
const posterButton = document.getElementById('posterButton');
posterButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/poster.pdf?alt=media&token=48239c31-d4e8-49cd-974b-132cafc11f44', '_blank')
}
/*const ScheduleButton = document.getElementById('ScheduleButton');
ScheduleButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/aisc2024-cc60f.appspot.com/o/Program%20schedule%20AISC%202024%20July%2010.pdf?alt=media&token=f94fe927-6037-46a0-b71d-5f3e66e238e1', '_blank')
}
const copyrightButton = document.getElementById('copyrightButton');
copyrightButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/aisc2024-cc60f.appspot.com/o/Springer_ProceedingsPaper_LTP_ST_SN_Singapore.docx?alt=media&token=5dfdc52d-24af-4b1f-9f01-8c88803a18c1', '_blank')
}*/

// date widget
// Set the target date (24 July 2025)
const targetDate = new Date('2025-07-24T00:00:00');

// Get today's date
const today = new Date();

// Calculate the time difference
const timeDiff = targetDate - today;

// Calculate the number of days left
let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

// Ensure it's not negative
daysLeft = Math.max(daysLeft, 0);

// Update the DOM
document.addEventListener("DOMContentLoaded", () => {
    const daysLeftElement = document.querySelector('.days-left h1');
    if (daysLeftElement) {
        daysLeftElement.textContent = daysLeft;
    }
});

const notificatonElement = document.querySelector('main .notification');
notificatonElement.addEventListener('click', () => {
    console.log("Notification clicked");
    for (let j = 0; j < indi_screens.length; j++) {
        const screen = indi_screens[j];
        screen.style.display = "none";
    }
    for (let j = 0; j < menu_btns.length; j++) {
        const button = menu_btns[j];
        button.removeAttribute("class");
    }
    menu_btns[6].setAttribute("class", "active");
    indi_screens[6].style.display = "block";
    scrollToSection();
})

// close about speaker
const closeAboutSpeaker = document.querySelector('.about-speaker .close-about-speaker');
closeAboutSpeaker.addEventListener('click', () => {
    const aboutSpeaker = document.querySelector('.about-speaker');
    aboutSpeaker.style.display = "none";
})