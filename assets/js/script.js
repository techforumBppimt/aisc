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
        'link': 'https://sites.google.com/view/abcc99/director-prof-kamaljeet-sandhu'
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
        'name': 'Prof. Bimal Roy',
        'position': 'Professor, Applied Statistics Unit, Indian Statistical Institute, Kolkata',
        'contact': '',
        'image': '/assets/images/speaker/bimal.jpg',
        'link': 'https://www2.isical.ac.in/~bimal/'
      },
      {
        'name': 'Prof. Amit Konar',
        'position': 'Professor, Department of Electronics and Telecommunication Engineering, Jadavpur University',
        'contact': '',
        'image': '/assets/images/speaker/amit.jpg',
        'link': 'https://jaduniv.irins.org/profile/37010'
      },
      {
        'name': 'Ms. Usha Rengaraju',
        'position': 'Chief of Research, Exa Protocol',
        'contact': '',
        'image': ' '///assets/images/speaker/usha.jpg,
        'link': ' '//https://in.linkedin.com/in/usha-rengaraju-b570b7a2
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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScuozdP1cID3TrZ1K-6gq3M7GUU4mybyK4cJ0ygt3-6v0GeJQ/viewform?usp=dialog', '_blank')
}
const tutorialBtn = document.getElementById('tutorialBtn');
tutorialBtn.onclick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSecHDzrC-NOAsFsob5swentewfEStv77SI18q9OL_J6ncDK2A/viewform', '_blank')
}
const listernerBtn = document.getElementById('listenerBtn');
listernerBtn.onclick = () => {
    alert('Registration link coming soon');
}
const posterButton = document.getElementById('posterButton');
posterButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/artco-bb7b5.appspot.com/o/Poster1.pdf?alt=media&token=4608bf05-e8ad-46f1-bb5a-97d8474229ee', '_blank')
}
const ScheduleButton = document.getElementById('ScheduleButton');
ScheduleButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/aisc2024-cc60f.appspot.com/o/Program%20schedule%20AISC%202024%20July%2010.pdf?alt=media&token=f94fe927-6037-46a0-b71d-5f3e66e238e1', '_blank')
}
const copyrightButton = document.getElementById('copyrightButton');
copyrightButton.onclick = () => {
    window.open('https://firebasestorage.googleapis.com/v0/b/aisc2024-cc60f.appspot.com/o/Springer_ProceedingsPaper_LTP_ST_SN_Singapore.docx?alt=media&token=5dfdc52d-24af-4b1f-9f01-8c88803a18c1', '_blank')
}