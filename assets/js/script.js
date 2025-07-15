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
        if(i===9){
            indi_screens[i].style.display = "flex";
        }
        else{
            indi_screens[i].style.display = "block";
        }
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
        'link': 'https://sites.google.com/view/abcc99/director-prof-kamaljeet-sandhu'
    },
    {
        'name': 'Prof. Bimal Roy',
        'position': 'Professor, Applied Statistics Unit, Indian Statistical Institute, Kolkata',
        'contact': '',
        'image': '/assets/images/speaker/bimal.jpg',
        'link': 'https://www2.isical.ac.in/~bimal/'
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
        'link': 'https://math.hunter.cuny.edu/indranilsg/'
    },
    {
        'name': 'Prof. Sudip Misra',
        'position': 'Professor, Department of Computer Science and Engineering, IIT Kharagpur',
        'contact': '',
        'image': '/assets/images/speaker/sudip.jpg',
        'link': 'https://cse.iitkgp.ac.in/~smisra/'
    },
    {
        'name': 'Prof. Amit Konar',
        'position': 'Professor, Department of Electronics and Telecommunication Engineering, Jadavpur University',
        'contact': '',
        'image': '/assets/images/speaker/amit.jpeg',
        'link': 'https://jaduniv.irins.org/profile/37010'
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
        "link": "https://in.linkedin.com/in/sourabhmukherjee"
    },
    {
        "name": "Prof. Ansuman Banerjee",
        "position": "Professor, Advanced Computing and Microelectronics Unit, Indian Statistical Institute, Kolkata",
        "contact": "later",
        "image": "/assets/images/speaker/ansuman.jpg",
        "link": "https://isi.irins.org/profile/111420"
    },
    {
        "name": "Mr. Shamik Misra",
        "position": "Senior Escalation Engineer, (Data & AI) division, Microsoft India (R&D) Pvt. Ltd.",
        "contact": "later",
        "image": "/assets/images/speaker/shamik.jpg",
        "link": "https://in.linkedin.com/in/shamik-misra-bb7b4a33a"
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
        "link": "https://in.linkedin.com/in/dr-ritajit-majumdar-59683442"
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
            window.open(speaker.link, '_blank')
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
    window.open('https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/Poster1.pdf?alt=media&token=4608bf05-e8ad-46f1-bb5a-97d8474229ee', '_blank')
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
console.log(notificatonElement);
notificatonElement.addEventListener('click', () => {
    console.log("Notification clicked");
    for (let j = 0; j < indi_screens.length; j++) {
        const screen = indi_screens[j];
        screen.style.display = "none";
    }
    for( let j = 0; j < menu_btns.length; j++) {
        const button = menu_btns[j];
        button.removeAttribute("class");
    }
    menu_btns[6].setAttribute("class", "active");
    indi_screens[6].style.display = "block";
    scrollToSection();
})