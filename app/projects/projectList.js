import { Bcgame, threedmap, SportUniformConfi, tictactoe,Heroforge,MetaMap} from '../images/index'
const list = [
    {
        id: 1,
        title: "Cloth Configurator",
        link: 'https://www.owayo.co.uk/konfigurator_html/index.php ',
        about: "Introducing my latest innovation - a configurator built with the power of three.js and PHP. Our configurator offers a seamless and interactive experience, allowing you to customize and visualize your products in real-time. With easy-to-use controls and a user-friendly interface, you can make changes and see the results instantly. Whether you're looking to customize a product for personal use or to showcase different options to clients, my configurator has got you covered. Try it out today and take your customization experience to the next level.",
        technologies: ['PHP', ],
        image: SportUniformConfi,
    },
    {
        id:2,
        title:'HeroForge',
        link:'https://www.heroforge.com/',
        about:"Leveraging the cutting-edge capabilities of three.js and Unity, we have crafted a gaming experience that pushes the boundaries of what's possible within a web browser. As the lead developer, my responsibility was to bridge the gap between the robust 3D rendering of three.js and the powerful game engine features provided by Unity.",
        image:Heroforge,
    },
    {
        id:3,
        title:'Metaverse Map',
        link:'https://nectarverse-11d5-staging.fly.dev/explore',
        about:'Implementing the three.js library to render the map in a web environment, I employed WebGL to handle the intensive graphics rendering, enabling a smooth and responsive user interaction with the 3D elements. ',
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
        title: 'kodeclubs',
        link: 'https://www.kodeclubs.com/',
        about: ' Configuring and setting up the project environment, ensuring smooth integration between Webpack and the PHP backend. This included establishing a development, testing, and production environment with appropriate Webpack configurations, such as loaders and plugins to handle various assets and streamline the build process.',
        technologies: ['Nextjs', 'MERN', 'react-hot-toast', 'bcrypt'],
        image: threedmap,
    }, {
        id: 6,
        title: "DSA Quiz",
        link: 'http://162.255.116.172:7100/',
        about: "mbarking on a pioneering journey into the gaming sphere, I have orchestrated an avant-garde gaming project by merging the technological prowess of Node.js, PIXI.js, and blockchain. This endeavor is not just a game; it’s an integration of real-time interaction, stunning visuals, and secure digital ownership, setting a new benchmark in the gaming industry. Here's an insight into my contributions and responsibilities within this cutting-edge project",
        technologies: ['MERN', 'react-bootstrap', 'notistack', 'redux'],
        image: Bcgame,
    }
];
export default list;