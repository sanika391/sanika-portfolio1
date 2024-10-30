import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [{
        id: 1,
        name: ' SpoonShare',
        description: "SpoonShare is a globally recognized mobile app solution, ranked among the Top 10 in the Google Solution Challenge and Top 2 in India. This innovative platform connects local food donors and recipients to combat food waste and hunger, with over 5,000 active users. Built using Flutter, Firebase, and Google Maps API, the app enables real-time location tracking for seamless food donations and distribution. Integrated Google Cloud APIs enhance its scalability, supporting rapid growth and fostering a positive community impact through 1,000+ kg of food donations.",
        tools: ["Flutter", "Firebase", "Google Maps API", "Google Cloud", "Android", "Firestore", "Google Cloud App Engine"],
        role: 'Global Winner & Project Lead',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Automatic Multi Vegetable Transplantor',
        description: 'An innovative agricultural solution that automates the transplanting of multiple vegetable types, increasing planting efficiency by 30%. Built with Arduino for control, App Inventor for a user-friendly interface, and integrated QR Code Scanner for accurate crop identification, it also uses WhatsApp API to send real-time notifications. This system combines automation with seamless communication to enhance productivity in farming operations.',
        tools: ["Arduino", "WhatsApp API", "App Inventor", "QR Code Scanner", "Arduino", "Google Firebase"],
        role: 'Innovation Team Lead',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Shiksha Sanjeevani – Smart Attendance & Educational App',
        description: 'hiksha Sanjeevani is a comprehensive mobile application aimed at reducing student dropout rates by streamlining attendance management and enhancing communication among students, teachers, and parents. The app features a smart attendance system, a BOT Store with interactive educational resources, real-time progress tracking, and parental controls for monitoring academic performance.',
        tools: ["Flutter", "Firebase", "Google Cloud", "React", "Node.js", "MongoDB", 'OpenAI API'],
        code: '',
        role: 'Project Lead',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Sign Language Detection',
        description: "I am currently working on a Sign Language Detection project aimed at bridging communication gaps for individuals with hearing impairments. This system leverages Python, OpenCV, and a Convolutional Neural Network (CNN) based on the Pre-Trained SSD MobileNet V2 architecture to recognize and interpret sign language gestures from video or image inputs.",
        tools: ['Python', 'OpenCV', 'Mediapipe', 'CNN'],
        code: '',
        demo: '',
        image: ayla,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },