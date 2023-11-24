import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-lime-800 text-lime-100 font-semibold">
            <aside>
                <img className="w-20" src="https://i.ibb.co/phvWTDq/Logo.png" alt="company logo" />
                <p>Quantum Estates Ltd.<br />Providing reliable service since 2017</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Property Listings</a>
                <a className="link link-hover">Property Details</a>
                <a className="link link-hover">Security Features</a>
                <a className="link link-hover">Premium Services</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms & Conditions</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a className='text-4xl text-lime-100' href="https://www.facebook.com/"><AiFillFacebook></AiFillFacebook></a>
                    <a className='text-4xl text-lime-100' href="https://www.instagram.com/"><AiFillInstagram></AiFillInstagram></a>
                    <a className='text-4xl text-lime-100' href="https://www.linkedin.com/"><AiFillLinkedin></AiFillLinkedin></a>
                    <a className='text-4xl text-lime-100' href="https://twitter.com/"><AiFillTwitterSquare></AiFillTwitterSquare></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;