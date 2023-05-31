import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer  bg-neutral text-neutral-content gap-0">
                <div className=" w-full h-full py-10 flex  text-center bg-[#1F2937] items-center justify-center">
                    <div className="text-white space-y-2">
                        <h2 className="text-2xl font-bold">CONTACT US</h2>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                <div className=" w-full h-full py-10 flex  text-center bg-[#111827] items-center justify-center">
                    <div className="text-white space-y-2">
                        <h2 className="text-2xl font-bold">Follow US</h2>
                        <p>Join us on social media</p>
                        <div className='flex items-center justify-center gap-3 '>
                            <FaFacebookF className='text-2xl'></FaFacebookF>
                            <FaInstagram className='text-2xl'></FaInstagram>
                            <FaTwitter className='text-2xl'></FaTwitter>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-[#151515] text-white">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;