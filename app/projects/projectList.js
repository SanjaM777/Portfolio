import { Bcgame, threedmap, SportUniformConfi, tictactoe,Heroforge,MetaMap} from '../images/index'
const list = [
    {
        id: 1,
        title: "Calorie tracker",
        link: 'https://calorie-tracker-nu.vercel.app/',
        about: "Welcome to your ultimate health companion! Our website not only tracks your calories but transforms your diet into a personalized wellness experience. Enjoy real-time insights, receive motivational email updates, and explore intuitive tools for effortless fitness. Redefine your relationship with food, embrace a healthier lifestyle, and let us guide you on your journey to a happier you!",
        technologies: ['MERN', 'Nodemailer', 'Autosuggest', 'react-bootstrap', 'notistack', 'helmetjs', 'bcrypt'],
        image: SportUniformConfi,
    },
    {
        id:2,
        title:'Swaad bihar ka',
        link:'https://mobile-shop-website-three.vercel.app/',
        about:'This is a webiste for a cloud kitchen at kolkata, where you can order food online,you can find about different dishes and also you can contact them through this website.',
        image:Heroforge,
    },
    {
        id:3,
        title:'MetaMap',
        link:'https://nextjs-portfolio-kappa-one.vercel.app/',
        about:'This is my portfolio website, Where you can find all my projects and blogs, and also you can contact me through this website.',
        technologies:['Nextjs','Tailwind CSS'],
        image:MetaMap,
    },{
        id: 4,
        title: 'Tic Tac Toe game',
        link: 'https://tic-tac-toe-web-app-kappa.vercel.app/',
        about: 'Play the classic Tic Tac Toe game with your friends and family. Enjoy the game with a beautiful UI and a smooth experience.',
        technologies: ['React', 'react-bootstrap'],
        image: tictactoe,
    }, {
        id: 5,
        title: 'To do list',
        link: '',
        about: 'Create your own to-do list and manage your tasks. Add, delete, and update your tasks with a beautiful UI.',
        technologies: ['Nextjs', 'MERN', 'react-hot-toast', 'bcrypt'],
        image: threedmap,
    }, {
        id: 6,
        title: "DSA Quiz",
        link: 'https://mern-quiz-app-coral.vercel.app/',
        about: "Elevate your DSA expertise with our quiz app! Quickly test your Skills. Receive instant feedback on your performance and uncover correct answers at the quiz's conclusion. Assess and enhance your understanding of DSA effortlessly!",
        technologies: ['MERN', 'react-bootstrap', 'notistack', 'redux'],
        image: Bcgame,
    }
];
export default list;